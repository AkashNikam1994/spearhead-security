import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/company";
import { activeServices } from "@/config/services";
import { insights } from "@/config/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = ([
    { url: `${base}/`, priority: 1.0, changeFrequency: "weekly" },
    { url: `${base}/about-us`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/services`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/industries`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${base}/our-approach`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${base}/careers`, priority: 0.7, changeFrequency: "weekly" },
    { url: `${base}/insights`, priority: 0.6, changeFrequency: "weekly" },
    { url: `${base}/contact`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${base}/privacy-policy`, priority: 0.2 },
    { url: `${base}/terms`, priority: 0.2 },
    { url: `${base}/cookie-policy`, priority: 0.2 },
  ] as MetadataRoute.Sitemap).map((p) => ({ ...p, lastModified: now }));

  const servicePages: MetadataRoute.Sitemap = activeServices.map((s) => ({
    url: `${base}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // only truly published articles are indexed
  const insightPages: MetadataRoute.Sitemap = insights
    .filter((a) => a.published)
    .map((a) => ({
      url: `${base}/insights/${a.slug}`,
      lastModified: new Date(a.date),
      changeFrequency: "yearly",
      priority: 0.4,
    }));

  return [...staticPages, ...servicePages, ...insightPages];
}
