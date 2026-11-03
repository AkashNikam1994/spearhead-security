import Image from "next/image";
import { Compass, GraduationCap, Scale, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, OrangeButton, OutlineButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import {
  siteConfig, differentiators, leadershipIntro, peoplePoints,
  complianceItems, clientReferences,
} from "@/config/company";

export const metadata = pageMetadata({
  title: "About Spearhead Security Service | Founded 2014, Jaysingpur",
  description:
    "Spearhead Security Service was founded in 2014 by SM Badame and is headquartered in Jaysingpur, Maharashtra — providing professional security services to companies, organisations and institutions.",
  path: "/about-us",
});

const values = [
  { title: "Integrity", Icon: Scale, text: "Honest, disciplined and loyal conduct expected of every personnel." },
  { title: "Discipline", Icon: Target, text: "Adherence to duty procedures, instructions and professional bearing." },
  { title: "Vigilance", Icon: ShieldCheck, text: "Alertness and attention to detail in every assignment, every shift." },
  { title: "Professionalism", Icon: GraduationCap, text: "Trained, presentable personnel in the company's own complete uniform." },
];

/* Company timeline — populated ONLY when genuine milestones are supplied.
   The placeholder below carries no invented history. */
const timelinePlaceholder = true;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Company"
        title="About Spearhead Security Service"
        description={siteConfig.description}
        image="/images/home/cta.jpg"
        trail={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }]}
      />

      {/* 2. Company introduction */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Who We Are" title="Founded in 2014. Built Around Discipline and Supervision." />
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-body">
              <p>
                Spearhead Security Service was founded in 2014 and is headquartered in Jaysingpur,
                Maharashtra. The company provides professional security services and trained
                security personnel to companies, organisations and institutions.
              </p>
              <p>
                Leadership experience described in the company&rsquo;s brochure as former Special
                Protection Group (SPG) service and VVIP protection assignments shapes the
                company&rsquo;s emphasis on disciplined personnel, professional training, monitoring
                and effective supervision.
              </p>
              <p>
                The organisation works closely with its clients to understand their premises and
                specific security requirements before planning and deploying security personnel —
                with monitoring, regular inspection and operational updates as part of every
                deployment.
              </p>
            </div>
            <div className="mt-8">
              <OrangeButton href="/services">Explore Our Services</OrangeButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image src="/images/home/careers.jpg" alt="Spearhead Security Service personnel in the company's own uniform" width={405} height={402} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* 3. Founder statement */}
      <section className="section bg-navy-900">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-10 w-10 text-orange-400" aria-hidden />
            <h2 className="mt-6 font-heading text-[1.35rem] font-extrabold text-white md:text-[1.6rem]">
              Leadership Built on Professional Security Experience
            </h2>
            <p className="mt-5 text-left text-[15px] leading-relaxed text-white/75">
              Spearhead Security Service was founded in 2014 by SM Badame. As described in the
              company&rsquo;s information brochure, SM Badame is a former Special Protection Group
              professional who worked with VVIPs across India and internationally. His professional
              background and experience have influenced the company&rsquo;s emphasis on security
              discipline, professional presentation, trained personnel and structured security
              operations.
            </p>
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-orange-400">
              SM Badame — Founder, Spearhead Security Service
            </p>
            <p className="mt-4 text-[12px] text-white/45">
              Details are stated as described in the company&rsquo;s information brochure. No rank,
              service dates, awards or additional credentials are claimed.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. Core values */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="What Guides Us"
              title="Our Core Values"
              description="Values that reflect how personnel are selected, trained and operated — as described in the company brochure."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <v.Icon className="h-7 w-7 text-orange-600" aria-hidden />
                  <h3 className="mt-3.5 font-heading text-[16px] font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-body">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Management and operational capabilities (brochure differentiators) */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Capability"
              title="Management and Operational Capabilities"
              description="How operations are managed — the structures described in the company brochure behind every deployment."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={(i % 4) * 70}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <span className="font-heading text-sm font-extrabold text-orange-600">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-3 font-heading text-[15.5px] font-bold text-ink">{d.title}</h3>
                  <p className="mt-2 text-[13px] leading-relaxed text-body">{d.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-slate-200 bg-white p-6 text-center text-[14.5px] leading-relaxed text-body shadow-card">
              {leadershipIntro}
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. People and workforce development → link to /training */}
      <section className="section" id="people">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Image src="/images/home/training.jpg" alt="Spearhead Security Service personnel during a training session" width={450} height={330} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Our People"
              title="People and Workforce Development"
              description="Personnel capability is developed deliberately — selection, induction, site-specific briefing, conduct standards and disciplined operations."
            />
            <ul className="mt-7 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {peoplePoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-body">
                  <ShieldCheck className="mt-0.5 h-[17px] w-[17px] shrink-0 text-orange-500" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <OrangeButton href="/training">See Our Training Approach</OrangeButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. Commitment to service quality + compliance (brochure statements) */}
      <section className="section bg-navy-950">
        <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Service Quality"
              title="Our Commitment to Service Quality"
              onDark
            />
            <ul className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-white/70">
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />Security deployment at designated points with active monitoring supervision.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />Regular inspections with operational updates communicated to clients.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />Duty records — gate records, registers and reports — maintained per deployment.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />A strong administrative team ensuring alert and effective duties at all times (per brochure).</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Governance"
              title="Welfare and Conduct Practices"
              description="Statements made in the company information brochure about how the workforce is treated."
              onDark
            />
            <ul className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-white/70">
              {complianceItems.slice(0, 4).map((c) => (
                <li key={c.title} className="flex gap-3">
                  <Scale className="mt-0.5 h-5 w-5 shrink-0 text-orange-400" aria-hidden />
                  <span><strong className="font-semibold text-white/90">{c.title}:</strong> {c.text}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[12px] leading-relaxed text-white/45">
              Licence and statutory registration details are published only after documentary
              verification — available on request meanwhile.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 8. Client references (brochure-historical) */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Client References"
              title={clientReferences.heading}
              description={clientReferences.subheading}
            />
          </Reveal>
          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-4">
            {clientReferences.clients.map((c) => (
              <span key={c} className="rounded-xl border border-slate-200 bg-white px-6 py-3.5 font-heading text-[15.5px] font-bold text-ink shadow-card">
                {c}
              </span>
            ))}
          </div>
          <Reveal delay={150}>
            <p className="mt-6 text-center text-[12.5px] leading-relaxed text-body/70">{clientReferences.caption}</p>
          </Reveal>
        </div>
      </section>

      {/* Company timeline — placeholder */}
      {timelinePlaceholder && (
        <section className="section">
          <div className="container-site">
            <Reveal>
              <div className="rounded-xl border border-dashed border-navy-700/30 bg-mist p-10 text-center shadow-card">
                <h2 className="font-heading text-[1.4rem] font-extrabold text-ink">Company Journey</h2>
                <p className="mx-auto mt-3 max-w-xl text-[14.5px] leading-relaxed text-body">
                  A company timeline will be published here once genuine historical milestones are
                  supplied and approved. No milestones are invented or projected on this page.
                </p>
                <p className="mt-3 font-mono text-[12px] uppercase tracking-wider text-body/60">
                  [ Development placeholder — requires verified company history ]
                </p>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* 9. CTA */}
      <section className="bg-navy-900">
        <div className="container-site py-14 text-center">
          <Reveal>
            <p className="eyebrow-on-dark">Work With Us</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.8rem] font-extrabold leading-tight text-white md:text-[2.2rem]">
              Understand Our Approach Before You Decide
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <OrangeButton href="/contact">Contact Our Team</OrangeButton>
              <OutlineButton href="/our-approach" onDark>Our Approach to Security Operations</OutlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
