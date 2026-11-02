import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, AlertCircle, HelpCircle } from "lucide-react";
import type { ServiceDetail as ServiceType } from "@/config/services";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading, GoldButton, OutlineButton } from "@/components/ui/Section";
import { getIndustry } from "@/config/industries";
import { ctaButton } from "@/config/company";

/**
 * Reusable dedicated service detail template.
 * Sections: description, challenges, scope, methodology, controls, benefits,
 * industry applications, FAQs, enquiry CTA.
 */
export default function ServiceDetail({ service }: { service: ServiceType }) {
  const industryList = service.industryRefs
    .map(getIndustry)
    .filter(Boolean);

  return (
    <>
      {/* Description */}
      <section className="section">
        <div className="container-site grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Service Overview" title={service.title} />
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-body">
              {service.description.map((p, i) => <p key={i}>{p}</p>)}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <GoldButton href={ctaButton.href}>Request an Assessment</GoldButton>
              <OutlineButton href="/contact">Speak to Our Team</OutlineButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src={service.image}
              alt={`${service.title} — Spearhead Security`}
              width={1200} height={800}
              className="w-full rounded-2xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* Challenges + Scope */}
      <section className="section bg-mist">
        <div className="container-site grid gap-10 lg:grid-cols-2 lg:gap-14">
          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-8 shadow-card">
              <h2 className="flex items-center gap-3 font-heading text-[18px] font-bold text-ink">
                <AlertCircle className="h-5.5 w-5.5 h-[21px] w-[21px] text-gold-600" aria-hidden />
                Typical Client Requirements &amp; Challenges
              </h2>
              <ul className="mt-6 space-y-3.5">
                {service.challenges.map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[14.5px] leading-snug text-body">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="h-full rounded-xl border border-navy-900 bg-navy-900 p-8 shadow-card">
              <h2 className="flex items-center gap-3 font-heading text-[18px] font-bold text-white">
                <CheckCircle2 className="h-[21px] w-[21px] text-gold-400" aria-hidden />
                Scope of Service
              </h2>
              <ul className="mt-6 space-y-3.5">
                {service.scope.map((s) => (
                  <li key={s} className="flex items-start gap-3 text-[14.5px] leading-snug text-white/75">
                    <CheckCircle2 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gold-400" aria-hidden />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Methodology + Controls + Benefits */}
      <section className="section">
        <div className="container-site grid gap-10 lg:grid-cols-3">
          <Reveal>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="font-heading text-[17px] font-bold text-ink">Deployment Methodology</h2>
              <ol className="mt-5 space-y-3.5">
                {service.methodology.map((m, i) => (
                  <li key={i} className="flex items-start gap-3 text-[14px] leading-snug text-body">
                    <span className="font-heading font-bold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
                    {m}
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>
          <Reveal delay={90}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="font-heading text-[17px] font-bold text-ink">Operational Controls</h2>
              <ul className="mt-5 space-y-3.5">
                {service.controls.map((c) => (
                  <li key={c} className="flex items-start gap-2.5 text-[14px] leading-snug text-body">
                    <CheckCircle2 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gold-500" aria-hidden />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={180}>
            <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card">
              <h2 className="font-heading text-[17px] font-bold text-ink">Benefits to Your Organisation</h2>
              <ul className="mt-5 space-y-3.5">
                {service.benefits.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[14px] leading-snug text-body">
                    <CheckCircle2 className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gold-500" aria-hidden />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Industry applications */}
      {industryList.length > 0 && (
        <section className="section bg-navy-900">
          <div className="container-site">
            <Reveal>
              <SectionHeading
                eyebrow="Where This Applies"
                title="Relevant Industry Applications"
                description={`Explore how ${service.title.toLowerCase()} is deployed for these environments.`}
                onDark
              />
            </Reveal>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {industryList.map((ind, i) => (
                <Reveal key={ind!.slug} delay={(i % 3) * 80}>
                  <Link
                    href={`/industries#${ind!.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-white/15 bg-white/5 p-5 transition-colors hover:border-gold-500/50 hover:bg-white/10"
                  >
                    <span>
                      <span className="block font-heading text-[15.5px] font-bold text-white">{ind!.name}</span>
                      <span className="mt-1 block text-[13px] leading-snug text-white/60">{ind!.short}</span>
                    </span>
                    <ArrowRight className="h-5 w-5 shrink-0 text-gold-400 transition-transform group-hover:translate-x-1" aria-hidden />
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQs */}
      <section className="section bg-mist">
        <div className="container-site max-w-3xl">
          <Reveal>
            <SectionHeading eyebrow="Questions" title="Frequently Asked Questions" />
          </Reveal>
          <div className="mt-10 space-y-4">
            {service.faqs.map((f, i) => (
              <Reveal key={i} delay={i * 70}>
                <details className="group rounded-xl border border-slate-200 bg-white p-6 shadow-card" open={i === 0}>
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-[15.5px] font-bold text-ink [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center gap-3">
                      <HelpCircle className="h-5 w-5 shrink-0 text-gold-600" aria-hidden />
                      {f.q}
                    </span>
                    <span className="text-xl text-gold-600 transition-transform group-open:rotate-45" aria-hidden>+</span>
                  </summary>
                  <p className="mt-4 border-t border-slate-100 pt-4 text-[14.5px] leading-relaxed text-body">{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Enquiry CTA */}
      <section className="bg-navy-950">
        <div className="container-site py-14 text-center">
          <Reveal>
            <p className="eyebrow-on-dark">Ready to Discuss {service.title}?</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.75rem] font-extrabold leading-tight text-white md:text-[2.2rem]">
              Request a Security Assessment for Your Site
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GoldButton href={ctaButton.href}>Request a Security Assessment</GoldButton>
              <Link href="/contact" className="inline-flex items-center rounded-md border border-white/40 px-6 py-3.5 text-[15px] font-bold text-white hover:border-gold-400 hover:text-gold-400">
                Contact Our Team
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
