import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading, OrangeButton, OutlineButton } from "@/components/ui/Section";
import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";
import { activeServices } from "@/config/services";
import { contact, additionalCapabilities } from "@/config/company";

export const metadata = pageMetadata({
  title: "Security Services | Spearhead Security Service — 7 Core Service Lines",
  description:
    "The seven primary security services of Spearhead Security Service: private investigations, industrial security, armed escort, surveillance, safety & fire fighting, bank security and armed guards.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Professional Security Services Tailored to Your Needs"
        description="Disciplined personnel, client-specific planning and structured supervision across the seven primary service categories of Spearhead Security Service."
        image="/images/home/hero.jpg"
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
                    <Image src={s.image} alt={`${s.title} — Spearhead Security Service`} fill sizes="(min-width:640px) 240px, 100vw" className="card-img object-cover" />
                  </div>
                  <div className="p-6">
                    <h2 className="font-heading text-[18px] font-bold text-ink group-hover:text-navy-700">{s.title}</h2>
                    <p className="mt-2 text-[14px] leading-relaxed text-body">{s.summary}</p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-orange-600">
                      Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Brochure extras — NOT active service categories (config-gated) */}
          <Reveal delay={200}>
            <div className="mt-14 rounded-xl border border-dashed border-navy-700/30 bg-mist p-7">
              <p className="text-[13px] font-bold uppercase tracking-wider text-navy-800">Also featured in our brochure</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {additionalCapabilities.map((a) => (
                  <span key={a.title} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-[13.5px] font-semibold text-ink">
                    {a.title}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[12.5px] leading-relaxed text-body/80">
                These capability areas appear visually in the company brochure. They are not yet
                listed as active service categories — contact us to discuss any of these
                requirements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-16 rounded-2xl border border-orange-500/40 bg-orange-100/50 p-8 md:p-10">
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
                  <OrangeButton href="/contact">Request an Assessment</OrangeButton>
                  <a href={contact.phone.href} className="inline-flex items-center rounded-md border border-navy-900/30 px-6 py-3.5 text-[15px] font-bold text-navy-900 hover:border-orange-500 hover:text-orange-600">
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
