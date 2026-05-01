// Standardized company slugs - matches the routes & memory/content/company-slugs-v5
const NAME_TO_SLUG: Record<string, string> = {
  "hinode": "hinode",
  "herbalife": "herbalife",
  "vorwerk": "vorwerk",
  "forever living": "forever-living",
  "nu skin": "nu-skin",
  "mary kay": "mary-kay",
  "amway": "amway",
  "ozonteck": "ozonteck",
  "coway": "coway",
  "4life": "4life",
  "infinitus": "infinitus",
  "jan rosê": "jan-rose",
  "jan rose": "jan-rose",
  "melaleuca": "melaleuca",
  "omnilife": "omnilife",
  "oriflame": "oriflame",
  "primerica": "primerica",
  "royal prestige": "royal-prestige",
  "tupperware": "tupperware",
  "utility warehouse": "utility-warehouse",
};

export function companyNameToSlug(name: string): string {
  const key = name.toLowerCase().trim();
  if (NAME_TO_SLUG[key]) return NAME_TO_SLUG[key];
  return key
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
