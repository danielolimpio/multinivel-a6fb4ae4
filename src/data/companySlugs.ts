// Maps display names (used in Top 100 and Top Earners) to the internal
// company page slug (/empresa/<slug>/). Only companies that already have a
// dedicated detail page should appear here — anything else falls back to the
// external link.
export const companySlugs: Record<string, string> = {
  Amway: "amway",
};

export const internalCompanyUrl = (name: string): string | null => {
  const slug = companySlugs[name];
  return slug ? `/empresa/${slug}/` : null;
};
