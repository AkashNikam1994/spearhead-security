import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading, GoldButton, OutlineButton } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { activeServices } from "@/config/services";
import { contact } from "@/config/company";

export const metadata = pageMetadata({
  title: "Security Services — Manned Guarding, Corporate, Industrial & More",
  description:
    "Explore Spearhead Security's service portfolio: manned guarding, corporate and industrial security, residential security, event security, supervision, electronic security support and security risk assessment.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional Security Services Tailored to Your Needs"
        description="Structured, supervised and compliant security deployments across corporate, industrial, residential and event environments."
        image="/images/pages/our-approach.png"
        trail={[{ name: "Home", path: "/" }, { name: "Services", path: "/services" }]}
      />

      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Service Portfolio"
              title="Comprehensive Security Solutions"
              description="Choose a category to see scope, deployment methodology, operational controls and client benefits in detail."
            />
          </Reveal>
          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {activeServices.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 80}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group grid h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover sm:grid-cols-[240px_1fr]"
                >
                  <div className="relative min-h-[170px] overflow-hidden bg-navy-900">
                    <Image src={s.image} alt={`${s.title} — Spearhead Security`} fill sizes="(min-width:640px) 240px, 100vw" className="card-img object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-[18px] font-bold text-ink group-hover:text-navy-700">{s.title}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{s.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-gold-600">
                      Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal delay={150}>
            <div className="mt-16 rounded-2xl border border-gold-500/40 bg-gold-100/50 p-8 md:p-10">
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <h2 className="font-heading text-[1.4rem] font-extrabold text-ink">
                    Not sure which arrangement fits your site?
                  </h2>
                  <p className="mt-2 max-w-xl text-[14.5px] text-body">
                    Share your facility details and we&rsquo;ll plan an appropriate security arrangement — starting with a structured assessment.
                  </p>
                </div>
                <div className="flex flex-wrap gap-3">
                  <GoldButton href="/contact">Request an Assessment</GoldButton>
                  <a href={contact.phone.href} className="inline-flex items-center rounded-md border border-navy-900/30 px-6 py-3.5 text-[15px] font-bold text-navy-900 hover:border-gold-500 hover:text-gold-600">
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
