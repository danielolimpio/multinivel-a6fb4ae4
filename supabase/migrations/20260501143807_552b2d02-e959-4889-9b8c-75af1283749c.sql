-- Public votes table for anonymous voting (IP + fingerprint)
CREATE TABLE public.company_votes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_slug text NOT NULL,
  ip_hash text NOT NULL,
  fingerprint text NOT NULL,
  user_agent text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- One vote per (slug, ip) and per (slug, fingerprint)
CREATE UNIQUE INDEX company_votes_slug_ip_unique ON public.company_votes (company_slug, ip_hash);
CREATE UNIQUE INDEX company_votes_slug_fp_unique ON public.company_votes (company_slug, fingerprint);
CREATE INDEX company_votes_slug_idx ON public.company_votes (company_slug);

ALTER TABLE public.company_votes ENABLE ROW LEVEL SECURITY;

-- Public can read aggregated counts (we'll expose a view)
CREATE POLICY "Anyone can read company votes"
ON public.company_votes
FOR SELECT
USING (true);

-- No direct inserts from client; only via edge function (service role bypasses RLS)
-- Intentionally no INSERT policy.

-- Aggregated counts view
CREATE OR REPLACE VIEW public.company_vote_counts AS
SELECT company_slug, COUNT(*)::int AS vote_count
FROM public.company_votes
GROUP BY company_slug;

GRANT SELECT ON public.company_vote_counts TO anon, authenticated;