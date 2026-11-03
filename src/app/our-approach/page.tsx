import Image from "next/image";
import { Compass, ClipboardCheck, Eye, Handshake, Map, Search, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, OrangeButton, OutlineButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { processSteps } from "@/config/company";

export const metadata = pageMetadata({
  title: "Our Approach to Security Operations | Spearhead Security Service",
  description:
    "Monitoring, posting of security guards at designated points, joint site recce, supervision and regular inspection — the Spearhead Security Service operating approach described in our company brochure.",
  path: "/our-approach",
});

/* Brochure-based step detail: unique features of the Spearhead approach. */
const stepIcons = [Handshake, Search, Map, ClipboardCheck, Eye, Compass];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Operate"
        title="Our Approach to Security Operations"
        description="Monitoring, security deployment at designated points, supervision, recce and regular inspection are the unique features of the Spearhead approach — as described in the company brochure."
        image="/images/home/cta.jpg"
        trail={[{ name: "Home", path: "/" }, { name: "Our Approach", path: "/our-approach" }]}
      />

      {/*Brochure six-step operations approach */}
      <section className="section bg-navy-950">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Framework"
              title="Six Steps, One Operating Approach"
              description="From the first conversation through to ongoing reviews — the sequence described in the company's information brochure."
              onDark
            />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="timeline-v relative space-y-8">
              {processSteps.map((s, i) => (
                <li key={s.step} className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-500 bg-navy-900 font-heading text-[13px] font-extrabold text-orange-400">
                    {s.step}
                  </div>
                  <h3 className="font-heading text-[16.5px] font-bold text-white">{s.title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Detailed step cards */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Delivery Model"
              title="How an Engagement Runs"
              description="Each element of the operating approach, from the joint survey through to continuous supervision and updates."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((s, i) => {
              const Icon = stepIcons[i];
              return (
                <Reveal key={s.step} delay={(i % 3) * 80}>
                  <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover">
                    <div className="flex items-center gap-4">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-orange-400">
                        <Icon className="h-[21px] w-[21px]" aria-hidden />
                      </span>
                      <h2 className="font-heading text-[16.5px] font-bold text-ink">
                        {s.step} · {s.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-[14px] leading-relaxed text-body">{s.text}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Supervision & standards band */}
      <section className="section bg-mist">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Image src="/images/extra/medal-ceremony.jpg" alt="Spearhead supervisory staff and personnel at a client deployment" width={450} height={330} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Standards"
              title="What Supervision Looks Like in Practice"
            />
            <ul className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-body">
              {[
                "Supervisory staff monitor operations at designated deployment points.",
                "Security deployment is verified against the agreed site plan.",
                "Regular inspections and operational updates keep the client informed.",
                "Duty records — gate records, registers and reports — are maintained per post.",
                "The branch office functions on a 24/7 basis for coordination (per brochure).",
                "Liaison with police, labour and government agencies supports operations where required.",
              ].map((t) => (
                <li key={t} className="flex gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-600" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Selection & training cross-link */}
      <section className="section bg-navy-900">
        <div className="container-site text-center">
          <Reveal>
            <p className="eyebrow-on-dark">The People Behind the Plan</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.8rem] font-extrabold leading-tight text-white md:text-[2.2rem]">
              Trained Personnel Make the Approach Work
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/70">
              Selection, induction and the training syllabus behind every deployment are described
              on our training page.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <OutlineButton href="/training" onDark>Explore Our Training Approach</OutlineButton>
              <OrangeButton href="/contact">Request an Assessment</OrangeButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
