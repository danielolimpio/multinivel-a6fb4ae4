DROP VIEW IF EXISTS public.company_vote_counts;

CREATE VIEW public.company_vote_counts
WITH (security_invoker=on) AS
SELECT company_slug, COUNT(*)::int AS vote_count
FROM public.company_votes
GROUP BY company_slug;

GRANT SELECT ON public.company_vote_counts TO anon, authenticated;