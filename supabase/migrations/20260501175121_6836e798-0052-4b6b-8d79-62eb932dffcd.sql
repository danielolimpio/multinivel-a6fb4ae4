-- Remove duplicates by fingerprint, keep only the most recent
DELETE FROM public.company_votes a
USING public.company_votes b
WHERE a.fingerprint = b.fingerprint
  AND a.created_at < b.created_at;

-- Remove duplicates by ip_hash, keep only the most recent
DELETE FROM public.company_votes a
USING public.company_votes b
WHERE a.ip_hash = b.ip_hash
  AND a.created_at < b.created_at;

-- Add unique constraints so each fingerprint and each IP can only have 1 vote total
ALTER TABLE public.company_votes
  ADD CONSTRAINT company_votes_fingerprint_unique UNIQUE (fingerprint);

ALTER TABLE public.company_votes
  ADD CONSTRAINT company_votes_ip_hash_unique UNIQUE (ip_hash);
