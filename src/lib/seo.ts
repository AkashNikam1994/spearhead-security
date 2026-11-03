import { siteConfig, contact } from "@/config/company";

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
      images: [{ url: ogImage ?? "/images/home/hero.jpg" }],
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
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/logo-horizontal.png`,
    foundingDate: String(siteConfig.established),
    founder: { "@type": "Person", name: siteConfig.founder, jobTitle: "Founder" },
    slogan: siteConfig.brandPositioning,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: contact.address.line1,
      addressLocality: "Jaysingpur",
      addressRegion: "Maharashtra",
      postalCode: "416101",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: `+919552666896`,
      email: contact.email.display,
      contactType: "sales",
      availableLanguage: ["English", "Hindi", "Marathi"],
    },
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
