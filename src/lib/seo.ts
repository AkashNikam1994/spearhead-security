import { siteConfig } from "@/config/company";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
};

/** Standard Next.js Metadata merge for content pages. */
export function pageMetadata({ title, description, path, ogImage }: PageMeta) {
  const canonical = `${siteConfig.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title: `${title} | ${siteConfig.brand}`,
      description,
      url: canonical,
      siteName: siteConfig.brand,
      type: "website" as const,
      images: [{ url: ogImage ?? "/images/home/hero.png" }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: `${title} | ${siteConfig.brand}`,
      description,
    },
  };
}

/* ── JSON-LD builders ─────────────────────────────────────────────────────── */

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.brand,
    url: siteConfig.url,
    slogan: siteConfig.brandPositioning,
    description: siteConfig.description,
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.path}`,
    })),
  };
}

export function serviceSchema(s: { title: string; description: string; slug: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: s.title,
    description: s.description,
    url: `${siteConfig.url}/services/${s.slug}`,
    provider: { "@type": "Organization", name: siteConfig.brand, url: siteConfig.url },
    areaServed: "IN",
  };
}
