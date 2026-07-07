// Maps display names (used in Top 100 and Top Earners) to the internal
// company page slug (/empresa/<slug>/). Only companies that already have a
// dedicated detail page should appear here — anything else falls back to the
// external link.
export const companySlugs: Record<string, string> = {
  Amway: "amway",
  Herbalife: "herbalife",
  Natura: "natura",
  "Natura and Co": "natura",
  Vorwerk: "vorwerk",
  "Mary Kay": "mary-kay",
  "Nu Skin": "nu-skin",
  "Forever Living Products": "forever-living",
  Oriflame: "oriflame",
  Primerica: "primerica",
  Hinode: "hinode",
  "eXp Realty": "exp-realty",
  "PM-International": "pm-international",
  Coway: "coway",
  Infinitus: "infinitus",
  Sunrun: "sunrun",
  "Utility Warehouse": "utility-warehouse",
  DoTerra: "doterra",
  "World Financial Group": "world-financial-group",
  "REAL Brokerage": "real-brokerage",
  Melaleuca: "melaleuca",
  "Young Living": "young-living",
  Atomy: "atomy",
  "JoyMain Int.": "joymain",
  "Perfect China": "perfect-china",
  Sunhope: "sunhope",
};

export const internalCompanyUrl = (name: string): string | null => {
  const slug = companySlugs[name];
  return slug ? `/empresa/${slug}/` : null;
};
