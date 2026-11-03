import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, Clock3, Linkedin, Twitter } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { insights, getInsight } from "@/config/insights";
import { siteConfig } from "@/config/company";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return insights.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const article = getInsight(params.slug);
  if (!article) return {};
  return pageMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/insights/${article.slug}`,
  });
}

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default async function InsightArticlePage({ params }: { params: Params }) {
  const article = getInsight(params.slug);
  if (!article) notFound();

  const shareUrl = `${siteConfig.url}/insights/${article.slug}`;

  return (
    <>
      <PageHero
        eyebrow={`${article.category}${article.published ? "" : " · Draft — editorial review in progress"}`}
        title={article.title}
        description={article.excerpt}
        image="/images/home/hero.jpg"
        compact
        trail={[
          { name: "Home", path: "/" },
          { name: "Insights", path: "/insights" },
          { name: article.title, path: `/insights/${article.slug}` },
        ]}
      />
      <article className="section">
        <div className="container-site max-w-3xl">
          <div className="flex flex-wrap items-center gap-5 border-b border-slate-200 pb-6 text-[13.5px] text-body">
            <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-orange-600" aria-hidden /> {formatDate(article.date)}</span>
            <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-orange-600" aria-hidden /> {article.readMinutes} min read</span>
            <span className="ml-auto flex gap-2">
              <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on LinkedIn" className="rounded-md border border-slate-300 p-2 text-body hover:border-orange-500 hover:text-orange-600">
                <Linkedin className="h-4 w-4" aria-hidden />
              </a>
              <a href={`https://x.com/intent/post?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(article.title)}`} target="_blank" rel="noopener noreferrer" aria-label="Share on X" className="rounded-md border border-slate-300 p-2 text-body hover:border-orange-500 hover:text-orange-600">
                <Twitter className="h-4 w-4" aria-hidden />
              </a>
            </span>
          </div>

          {!article.published && (
            <p className="mt-6 rounded-lg border border-orange-500/40 bg-orange-100/50 p-4 text-[13.5px] leading-relaxed text-ink">
              <strong>Draft notice:</strong> this article is an editable editorial placeholder and has
              not been approved for publication. Final content must be reviewed before the article is
              indexed publicly (set <code>published: true</code> in <code>src/config/insights.ts</code>).
            </p>
          )}

          <div className="mt-8 space-y-5 text-[16px] leading-relaxed text-body">
            {article.draftBody.map((p, i) => (
              <p key={i} className={p.startsWith("EDITORIAL NOTES") || p.startsWith("[Placeholder") ? "rounded-lg bg-mist px-4 py-3 font-mono text-[13px] leading-relaxed" : ""}>
                {p}
              </p>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-navy-950 p-8 text-center md:p-10">
            <h2 className="font-heading text-[1.4rem] font-extrabold text-white">Need Security Solutions for Your Organisation?</h2>
            <Link
              href="/contact"
            className="btn-orange mt-6 inline-flex rounded-md px-7 py-3 text-[15px] font-bold"
            >
              Request a Security Assessment
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
