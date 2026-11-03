import Image from "next/image";
import Link from "next/link";
import { AlertCircle, ArrowRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, OrangeButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { activeIndustries } from "@/config/industries";
import { activeServices } from "@/config/services";
import { ctaButton } from "@/config/company";

export const metadata = pageMetadata({
  title: "Industries We Serve — Corporate, Industrial, Residential & More",
  description:
    "Spearhead Security Service designs security arrangements for banking, IT parks, manufacturing, healthcare, education, residential, retail, warehousing, hospitality and manufacturing environments.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="Security Solutions Across Diverse Industries"
        description="Each environment carries different risks. Here is how we assess, design and supervise security for the sectors we serve."
        image="/images/home/cta.jpg"
        trail={[{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }]}
      />

      {/* Sector anchor navigation */}
      <nav aria-label="Industry sections" className="border-b border-slate-200 bg-mist">
        <div className="container-site flex gap-2 overflow-x-auto py-4">
          {activeIndustries.map((ind) => (
            <a
              key={ind.slug}
              href={`#${ind.slug}`}
              className="whitespace-nowrap rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold text-ink transition-colors hover:border-orange-500 hover:text-orange-600"
            >
              {ind.name}
            </a>
          ))}
        </div>
      </nav>

      <section className="section">
        <div className="container-site space-y-16">
          {activeIndustries.map((ind, i) => (
            <Reveal key={ind.slug} delay={0}>
              <article id={ind.slug} className="grid scroll-mt-32 items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                  <Image
                    src={ind.image}
                    alt={`${ind.name} security — Spearhead Security Service`}
                    width={1000} height={700}
                    className="w-full rounded-2xl object-cover shadow-card"
                  />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <p className="eyebrow">{String(i + 1).padStart(2, "0")}</p>
                  <h2 className="mt-2 font-heading text-[1.6rem] font-extrabold leading-tight text-ink md:text-[2rem]">
                    {ind.name}
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-body">{ind.short}</p>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <h3 className="flex items-center gap-2 font-heading text-[14.5px] font-bold text-ink">
                        <AlertCircle className="h-[18px] w-[18px] text-orange-600" aria-hidden /> Typical Security Challenges
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {ind.challenges.map((c) => (
                          <li key={c} className="flex items-start gap-2 text-[13.5px] leading-snug text-body">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" aria-hidden />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-heading text-[14.5px] font-bold text-ink">
                        <CheckCircle2 className="h-[18px] w-[18px] text-orange-600" aria-hidden /> Recommended Arrangements
                      </h3>
                      <ul className="mt-3 space-y-2.5">
                        {ind.arrangements.map((a) => (
                          <li key={a} className="flex items-start gap-2 text-[13.5px] leading-snug text-body">
                            <CheckCircle2 className="mt-0.5 h-[15px] w-[15px] shrink-0 text-orange-500" aria-hidden />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <p className="mt-6 text-[14px] leading-relaxed text-body">
                    <strong className="text-ink">How Spearhead customises this:</strong> support processes noted above
                    come with site-specific access rules, monitoring and supervision, our operations team adapts the
                    arrangement to{" "}
                    <em>your</em> premises, working hours, access-control requirements and operational continuity
                    needs — documented into the deployment plan before the first shift.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-[14px] font-bold text-orange-600 hover:text-orange-500"
                    >
                      Discuss your {ind.name.toLowerCase()} requirement
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* related services */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Across Every Sector" title="The Services Behind Every Industry Deployment" />
          </Reveal>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {activeServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-[14px] font-semibold text-ink shadow-card transition-colors hover:border-orange-500 hover:text-orange-600"
              >
                {s.title} <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center">
            <OrangeButton href={ctaButton.href}>Discuss Your Requirement</OrangeButton>
          </div>
        </div>
      </section>
    </>
  );
}
