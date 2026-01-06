import { Head } from "vite-react-ssg";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  article?: {
    author?: string;
    publishedTime?: string;
    modifiedTime?: string;
    section?: string;
    tags?: string[];
  };
  noindex?: boolean;
}

const SITE_URL = "https://www.universidademultinivel.com";
const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const SITE_NAME = "Universidade Multinível";

function normalizeCanonicalPath(input?: string): string | undefined {
  if (!input) return undefined;

  // Allow passing either "/path" or a full URL.
  const pathFromInput = input.startsWith("http") ? new URL(input).pathname : input;

  let path = pathFromInput.startsWith("/") ? pathFromInput : `/${pathFromInput}`;

  // Ensure trailing slash on non-root canonicals to match folder-based static hosting.
  if (path !== "/" && !path.endsWith("/")) path += "/";

  return path;
}

export function SEO({
  title,
  description,
  canonical,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  article,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
  const canonicalPath = normalizeCanonicalPath(canonical);
  const canonicalUrl = canonicalPath ? `${SITE_URL}${canonicalPath}` : undefined;

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="author" content={SITE_NAME} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {!noindex && <meta name="robots" content="index, follow" />}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Article specific meta tags */}
      {ogType === "article" && article && (
        <>
          {article.author && <meta property="article:author" content={article.author} />}
          {article.publishedTime && <meta property="article:published_time" content={article.publishedTime} />}
          {article.modifiedTime && <meta property="article:modified_time" content={article.modifiedTime} />}
          {article.section && <meta property="article:section" content={article.section} />}
          {article.tags?.map((tag, index) => (
            <meta key={index} property="article:tag" content={tag} />
          ))}
        </>
      )}

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data - Organization */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SITE_NAME,
          "url": SITE_URL,
          "logo": `${SITE_URL}/lovable-uploads/c97e9d14-38f3-4d57-893a-6c9fb7a9b604.png`,
          "description": "Portal de referência em Marketing de Rede no Brasil",
          "sameAs": [
            "https://www.facebook.com/universidademultinivel",
            "https://www.instagram.com/universidademultinivel",
            "https://www.linkedin.com/company/universidademultinivel"
          ]
        })}
      </script>
    </Head>
  );
}
