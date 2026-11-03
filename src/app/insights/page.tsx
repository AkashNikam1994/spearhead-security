import Link from "next/link";
import { ArrowRight, CalendarDays, Clock3, SearchX } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { insights, insightCategories } from "@/config/insights";

export const metadata = pageMetadata({
  title: "Insights — Corporate & Industrial Security Perspectives",
  description:
    "Practical articles on corporate security practices, industrial security management, access control, workforce training, risk assessment and residential security.",
  path: "/insights",
});

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsPage() {
  const [featured, ...rest] = insights;
  const isDraft = (a: { published: boolean }) => !a.published;

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title="Security Insights & Perspectives"
        description="Educational articles on security operations, workforce development and risk management — written from an operational perspective."
        image="/images/home/hero.jpg"
        trail={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }]}
      />

      <section className="section">
        <div className="container-site">
          {/* Featured article */}
          {featured && (
            <Reveal>
              <Link
                href={`/insights/${featured.slug}`}
                className="group grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card transition-shadow hover:shadow-cardHover lg:grid-cols-2"
              >
                <div className="relative min-h-[240px] bg-navy-900 lg:min-h-[320px]">
                  <div className="card-img absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950" />
                  {isDraft(featured) && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1 text-[11px] font-extrabold uppercase tracking-wider text-navy-950">
                      Draft — in review
                    </span>
                  )}
                </div>
                <div className="p-8 md:p-10">
                  <span className="text-[12.5px] font-bold uppercase tracking-[0.16em] text-orange-600">
                    {featured.category} · Featured
                  </span>
                  <h2 className="mt-3 font-heading text-[1.5rem] font-extrabold leading-snug text-ink group-hover:text-navy-700 md:text-[1.8rem]">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{featured.excerpt}</p>
                  <div className="mt-6 flex flex-wrap items-center gap-4 text-[13px] text-body">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-4 w-4 text-orange-600" aria-hidden /> {formatDate(featured.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock3 className="h-4 w-4 text-orange-600" aria-hidden /> {featured.readMinutes} min read</span>
                  </div>
                  <span className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-orange-600">
                    Read article <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          )}

          {/* Article grid */}
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((a, i) => (
              <Reveal key={a.slug} delay={(i % 3) * 80}>
                <Link
                  href={`/insights/${a.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-all hover:-translate-y-1 hover:shadow-cardHover"
                >
                  <span className="text-[12px] font-bold uppercase tracking-[0.16em] text-orange-600">{a.category}</span>
                  {isDraft(a) && (
                    <span className="mt-2 w-fit rounded-full bg-mist px-2.5 py-1 text-[10.5px] font-extrabold uppercase tracking-wider text-body">
                      Draft — in review
                    </span>
                  )}
                  <h2 className="mt-3 flex-1 font-heading text-[17px] font-bold leading-snug text-ink group-hover:text-navy-700">
                    {a.title}
                  </h2>
                  <p className="mt-3 text-[13.5px] leading-relaxed text-body">{a.excerpt}</p>
                  <div className="mt-5 flex items-center gap-4 text-[12.5px] text-body">
                    <span className="flex items-center gap-1.5"><CalendarDays className="h-3.5 w-3.5" aria-hidden /> {formatDate(a.date)}</span>
                    <span className="flex items-center gap-1.5"><Clock3 className="h-3.5 w-3.5" aria-hidden /> {a.readMinutes} min</span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Categories */}
          <Reveal delay={150}>
            <div className="mt-14 rounded-xl border border-slate-200 bg-mist p-7">
              <h2 className="text-[13px] font-bold uppercase tracking-[0.16em] text-body">Browse by category</h2>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {insightCategories.map((c) => (
                  <span key={c} className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold text-ink">
                    {c}
                  </span>
                ))}
              </div>
              <p className="mt-5 flex items-start gap-2 text-[13px] text-body">
                <SearchX className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden />
                Full-text search is available on the production deployment once the article library grows.
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
