import { useEffect, useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";

const FP_KEY = "umn_voter_fp";
const VOTED_COMPANY_KEY = "umn_voted_company";

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

function getStoredVotedCompany(): string | null {
  if (typeof window === "undefined") return null;
  return localStorage.getItem(VOTED_COMPANY_KEY);
}

function persistVotedCompany(slug: string | null) {
  if (typeof window === "undefined") return;
  if (slug) localStorage.setItem(VOTED_COMPANY_KEY, slug);
  else localStorage.removeItem(VOTED_COMPANY_KEY);
}

type CountsListener = (updater: (prev: Record<string, number>) => Record<string, number>) => void;
const countsListeners = new Set<CountsListener>();
const recentSelfChanges = new Map<string, number>(); // slug -> expiry timestamp

export function applyCountsDelta(updater: (prev: Record<string, number>) => Record<string, number>) {
  countsListeners.forEach((l) => l(updater));
}

export function markSelfChange(slug: string) {
  recentSelfChanges.set(slug, Date.now() + 4000);
}

function isRecentSelfChange(slug: string | undefined): boolean {
  if (!slug) return false;
  const expiry = recentSelfChanges.get(slug);
  if (!expiry) return false;
  if (Date.now() > expiry) {
    recentSelfChanges.delete(slug);
    return false;
  }
  recentSelfChanges.delete(slug);
  return true;
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
      (data as unknown as Array<{ company_slug: string; vote_count: number }>).forEach((row) => {
        map[row.company_slug] = row.vote_count;
      });
      setCounts(map);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    const listener: CountsListener = (updater) => setCounts(updater);
    countsListeners.add(listener);
    return () => {
      countsListeners.delete(listener);
    };
  }, []);

  useEffect(() => {
    fetchCounts();
    const channel = supabase
      .channel("company-votes-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "company_votes" },
        (payload) => {
          const slug = (payload.new as any).company_slug as string;
          if (isRecentSelfChange(slug)) return;
          setCounts((prev) => ({ ...prev, [slug]: (prev[slug] ?? 0) + 1 }));
        },
      )
      .on(
        "postgres_changes",
        { event: "UPDATE", schema: "public", table: "company_votes" },
        (payload) => {
          const newSlug = (payload.new as any).company_slug as string;
          const oldSlug = (payload.old as any).company_slug as string | undefined;
          if (oldSlug && oldSlug !== newSlug) {
            // Skip if this update was already applied optimistically by this client
            if (isRecentSelfChange(newSlug)) {
              // also clear paired old marker if present
              isRecentSelfChange(oldSlug);
              return;
            }
            setCounts((prev) => ({
              ...prev,
              [oldSlug]: Math.max(0, (prev[oldSlug] ?? 0) - 1),
              [newSlug]: (prev[newSlug] ?? 0) + 1,
            }));
          }
        },
      )
      .on(
        "postgres_changes",
        { event: "DELETE", schema: "public", table: "company_votes" },
        (payload) => {
          const slug = (payload.old as any).company_slug as string | undefined;
          if (slug) {
            setCounts((prev) => ({
              ...prev,
              [slug]: Math.max(0, (prev[slug] ?? 0) - 1),
            }));
          }
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
  const [votedCompany, setVotedCompany] = useState<string | null>(() => getStoredVotedCompany());
  const [voting, setVoting] = useState<string | null>(null);

  const hasVoted = useCallback(
    (slug: string) => votedCompany === slug,
    [votedCompany],
  );

  const vote = useCallback(
    async (companySlug: string): Promise<boolean> => {
      const slug = companySlug.toLowerCase().trim();
      if (votedCompany === slug) {
        toast({
          title: "Voto já registrado",
          description: "Você já votou nesta empresa.",
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

        if (data?.success) {
          const previousSlug = votedCompany;
          setVotedCompany(slug);
          persistVotedCompany(slug);

          // Optimistic count update for instant UI feedback
          if (data.changed && previousSlug && previousSlug !== slug) {
            applyCountsDelta((prev) => ({
              ...prev,
              [previousSlug]: Math.max(0, (prev[previousSlug] ?? 0) - 1),
              [slug]: (prev[slug] ?? 0) + 1,
            }));
          } else if (!data.unchanged && !data.changed) {
            applyCountsDelta((prev) => ({
              ...prev,
              [slug]: (prev[slug] ?? 0) + 1,
            }));
          }

          if (data.changed) {
            toast({
              title: "Voto transferido!",
              description: "Seu voto agora vale para esta empresa.",
            });
          } else if (data.unchanged) {
            toast({
              title: "Voto já registrado",
              description: "Você já votou nesta empresa.",
            });
          } else {
            toast({
              title: "Voto computado!",
              description: "Obrigado por votar. Você pode trocar seu voto a qualquer momento.",
            });
          }
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
    [votedCompany],
  );

  return { vote, hasVoted, voting, votedCompany };
}
