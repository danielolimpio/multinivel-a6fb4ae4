import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

async function sha256(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { company_slug, fingerprint } = await req.json();

    if (
      !company_slug ||
      typeof company_slug !== "string" ||
      company_slug.length > 100 ||
      !fingerprint ||
      typeof fingerprint !== "string" ||
      fingerprint.length < 8 ||
      fingerprint.length > 128
    ) {
      return new Response(
        JSON.stringify({ error: "Parâmetros inválidos" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    const slug = company_slug.toLowerCase().trim();
    const fp = fingerprint.trim();

    // Get IP
    const xff = req.headers.get("x-forwarded-for") ?? "";
    const ip = xff.split(",")[0].trim() || req.headers.get("cf-connecting-ip") || "0.0.0.0";
    const salt = Deno.env.get("VOTE_SALT") ?? "umn-vote-salt-2026";
    const ipHash = await sha256(`${salt}:${ip}`);
    const fpHash = await sha256(`${salt}:${fp}`);
    const userAgent = req.headers.get("user-agent")?.slice(0, 500) ?? null;

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // Find any existing vote for this voter (by fingerprint OR ip)
    const { data: existing } = await supabase
      .from("company_votes")
      .select("id, company_slug")
      .or(`fingerprint.eq.${fpHash},ip_hash.eq.${ipHash}`)
      .limit(1)
      .maybeSingle();

    if (existing) {
      if (existing.company_slug === slug) {
        return new Response(
          JSON.stringify({
            success: true,
            unchanged: true,
            votedSlug: slug,
            message: "Você já votou nesta empresa.",
          }),
          {
            status: 200,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      // Update existing vote -> change company
      const { error: updateErr } = await supabase
        .from("company_votes")
        .update({
          company_slug: slug,
          ip_hash: ipHash,
          fingerprint: fpHash,
          user_agent: userAgent,
          created_at: new Date().toISOString(),
        })
        .eq("id", existing.id);

      if (updateErr) {
        console.error("Update error:", updateErr);
        return new Response(
          JSON.stringify({ error: "Erro ao atualizar voto" }),
          {
            status: 500,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          },
        );
      }

      return new Response(
        JSON.stringify({
          success: true,
          changed: true,
          previousSlug: existing.company_slug,
          votedSlug: slug,
          message: "Seu voto foi transferido para esta empresa.",
        }),
        {
          status: 200,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    // No existing vote -> insert new
    const { error } = await supabase.from("company_votes").insert({
      company_slug: slug,
      ip_hash: ipHash,
      fingerprint: fpHash,
      user_agent: userAgent,
    });

    if (error) {
      // Race condition: someone inserted in parallel — try to update instead
      if (error.code === "23505") {
        const { data: again } = await supabase
          .from("company_votes")
          .select("id, company_slug")
          .or(`fingerprint.eq.${fpHash},ip_hash.eq.${ipHash}`)
          .limit(1)
          .maybeSingle();
        if (again) {
          if (again.company_slug !== slug) {
            await supabase
              .from("company_votes")
              .update({
                company_slug: slug,
                ip_hash: ipHash,
                fingerprint: fpHash,
                user_agent: userAgent,
                created_at: new Date().toISOString(),
              })
              .eq("id", again.id);
          }
          return new Response(
            JSON.stringify({ success: true, changed: true, votedSlug: slug }),
            {
              status: 200,
              headers: { ...corsHeaders, "Content-Type": "application/json" },
            },
          );
        }
      }
      console.error("Insert error:", error);
      return new Response(
        JSON.stringify({ error: "Erro ao registrar voto" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        },
      );
    }

    return new Response(
      JSON.stringify({ success: true, votedSlug: slug }),
      {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: "Erro interno" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }
});
