import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const FP_KEY = "umn_voter_fp";
const VOTED_KEY = "umn_voted_companies";

function getOrCreateFingerprint(): string {
  if (typeof window === "undefined") return "ssr";
  let fp = localStorage.getItem(FP_KEY);
  if (!fp) {
    const rand = crypto.randomUUID();
    const ua = navigator.userAgent || "";
    const lang = navigator.language || "";
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || "";
    const screen = `${window.screen.width}x${window.screen.height}x${window.screen.colorDepth}`;
    fp = `${rand}|${btoa(unescape(encodeURIComponent(`${ua}|${lang}|${tz}|${screen}`))).slice(0, 60)}`;
    localStorage.setItem(FP_KEY, fp);
  }
  return fp;
}

function getVotedSet(): Set<string> {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = localStorage.getItem(VOTED_KEY);
    if (!raw) return new Set();
    return new Set(JSON.parse(raw));
  } catch {
    return new Set();
  }
}

function persistVoted(set: Set<string>) {
  if (typeof window === "undefined") return;
  localStorage.setItem(VOTED_KEY, JSON.stringify(Array.from(set)));
}

export function useCompanyVoteCounts() {
  const [counts, setCounts] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);

  const fetchCounts = useCallback(async () => {
    const { data, error } = await supabase
      .from("company_vote_counts" as any)
      .select("company_slug, vote_count");
    if (!error && data) {
      const map: Record<string, number> = {};
      (data as Array<{ company_slug: string; vote_count: number }>).forEach((row) => {
        map[row.company_slug] = row.vote_count;
      });
      setCounts(map);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchCounts();
    // Realtime subscription
    const channel = supabase
      .channel("company-votes-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "company_votes" },
        (payload) => {
          const slug = (payload.new as any).company_slug as string;
          setCounts((prev) => ({ ...prev, [slug]: (prev[slug] ?? 0) + 1 }));
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [fetchCounts]);

  return { counts, loading, refresh: fetchCounts };
}

export function useCompanyVote() {
  const [votedSet, setVotedSet] = useState<Set<string>>(() => getVotedSet());
  const [voting, setVoting] = useState<string | null>(null);

  const hasVoted = useCallback(
    (slug: string) => votedSet.has(slug),
    [votedSet],
  );

  const vote = useCallback(
    async (companySlug: string): Promise<boolean> => {
      const slug = companySlug.toLowerCase().trim();
      if (votedSet.has(slug)) {
        toast({
          title: "Voto já registrado",
          description: "Você já votou nesta empresa neste navegador.",
        });
        return false;
      }
      setVoting(slug);
      try {
        const fingerprint = getOrCreateFingerprint();
        const { data, error } = await supabase.functions.invoke("cast-company-vote", {
          body: { company_slug: slug, fingerprint },
        });
        if (error) throw error;
        if (data?.alreadyVoted) {
          const next = new Set(votedSet);
          next.add(slug);
          setVotedSet(next);
          persistVoted(next);
          toast({
            title: "Voto já registrado",
            description: data.message ?? "Você já votou nesta empresa.",
          });
          return false;
        }
        if (data?.success) {
          const next = new Set(votedSet);
          next.add(slug);
          setVotedSet(next);
          persistVoted(next);
          toast({
            title: "Voto computado!",
            description: "Obrigado por votar. Sua opinião conta.",
          });
          return true;
        }
        throw new Error("Resposta inesperada");
      } catch (err) {
        console.error(err);
        toast({
          title: "Erro ao votar",
          description: "Tente novamente em alguns instantes.",
          variant: "destructive",
        });
        return false;
      } finally {
        setVoting(null);
      }
    },
    [votedSet],
  );

  return { vote, hasVoted, voting };
}
