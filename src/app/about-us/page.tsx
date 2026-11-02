import Image from "next/image";
import Link from "next/link";
import { Compass, Eye, Flag, GraduationCap, HeartHandshake, Scale, ShieldCheck, Target } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, GoldButton, OutlineButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import { siteConfig, differentiators, processSteps, leadershipIntro, peoplePoints } from "@/config/company";
import { activeServices } from "@/config/services";

export const metadata = pageMetadata({
  title: "About Spearhead Security — Professional Security Solutions Company",
  description:
    "Learn about Spearhead Security — our vision, mission, values, operational approach and commitment to compliance and service quality.",
  path: "/about-us",
});

const values = [
  { title: "Integrity", Icon: Scale, text: "Honest, transparent conduct with clients, personnel and authorities." },
  { title: "Discipline", Icon: Flag, text: "Consistent adherence to procedures, duty standards and instructions." },
  { title: "Accountability", Icon: Target, text: "Clear ownership of responsibilities, records and outcomes." },
  { title: "Vigilance", Icon: Eye, text: "Alertness and attention to detail in every assignment, every shift." },
  { title: "Professionalism", Icon: GraduationCap, text: "Trained, presentable and conduct-oriented security personnel." },
  { title: "Customer Commitment", Icon: HeartHandshake, text: "Service arrangements designed around each client's needs." },
];

/* Company timeline — populated ONLY when genuine milestones are supplied.
   The placeholder below carries no invented history. */
const timelinePlaceholder = true;

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Company"
        title="About Spearhead Security"
        description={siteConfig.description}
        image="/images/pages/about-us.png"
        trail={[{ name: "Home", path: "/" }, { name: "About Us", path: "/about-us" }]}
      />

      {/* 2. Company introduction */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Who We Are" title="Built Around Discipline, Supervision and Accountability" />
            <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-body">
              <p>
                Spearhead Security provides professional security solutions for organisations
                that need dependable day-to-day protection of their people, premises and
                operations. Our work rests on three commitments: experienced leadership, trained
                personnel and active supervision.
              </p>
              <p>
                Every engagement begins with understanding the client environment and designing
                security arrangements around actual operational requirements — access flows,
                risk areas, working hours and escalation needs.
              </p>
              <p>
                Our approach brings together professional personnel, clear operating procedures
                and continuous supervision to deliver dependable security solutions.
              </p>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Image src="/images/home/intro.png" alt="Spearhead Security supervisor at a corporate site" width={1200} height={900} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* 3. Vision & mission */}
      <section className="section bg-mist">
        <div className="container-site grid gap-8 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-9 shadow-card">
              <Compass className="h-8 w-8 text-gold-600" aria-hidden />
              <h2 className="mt-4 font-heading text-[1.4rem] font-extrabold text-ink">Our Vision</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                To be the security partner organisations trust instinctively — recognised for
                disciplined execution, dependable personnel and leadership that stays close to
                every operation.
              </p>
            </div>
          </Reveal>
          <Reveal delay={110}>
            <div className="h-full rounded-2xl border border-slate-200 bg-white p-9 shadow-card">
              <Target className="h-8 w-8 text-gold-600" aria-hidden />
              <h2 className="mt-4 font-heading text-[1.4rem] font-extrabold text-ink">Our Mission</h2>
              <p className="mt-3 text-[15px] leading-relaxed text-body">
                To protect people, property and business continuity through professional security
                personnel, structured operating procedures, active supervision and an unbroken
                commitment to client service.
              </p>
            </div>
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
              description="Six values that govern how we select, train and operate — and how we treat our clients and our people."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <v.Icon className="h-7 w-7 text-gold-600" aria-hidden />
                  <h3 className="mt-3.5 font-heading text-[16px] font-bold text-ink">{v.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-body">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Leadership philosophy */}
      <section className="section bg-navy-900">
        <div className="container-site max-w-3xl text-center">
          <Reveal>
            <ShieldCheck className="mx-auto h-10 w-10 text-gold-400" aria-hidden />
            <p className="mt-6 font-heading text-[1.5rem] font-bold leading-relaxed text-white md:text-[1.75rem]">
              “We believe security quality is decided long before a guard reaches a post — in
              how carefully a site is assessed, how honestly a deployment is planned and how
              consistently it is supervised afterwards.”
            </p>
            <p className="mt-5 text-[13px] font-semibold uppercase tracking-[0.2em] text-gold-400">
              Leadership Philosophy
            </p>
          </Reveal>
        </div>
      </section>

      {/* 6. Management and operational capabilities */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Capability"
              title="Management and Operational Capabilities"
              description="How our operations are managed — the structures behind every deployment."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {differentiators.map((d, i) => (
              <Reveal key={d.title} delay={i * 70}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card">
                  <span className="font-heading text-sm font-extrabold text-gold-600">{String(i + 1).padStart(2, "0")}</span>
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

      {/* 7. People and workforce development */}
      <section className="section" id="people">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <Image src="/images/home/training.png" alt="Spearhead Security personnel during a training briefing" width={1400} height={950} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Our People"
              title="People and Workforce Development"
              description="Personnel capability is developed deliberately — induction, site-specific training, conduct standards and supervisory growth."
            />
            <ul className="mt-7 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
              {peoplePoints.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-body">
                  <ShieldCheck className="mt-0.5 h-[17px] w-[17px] shrink-0 text-gold-500" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* 8. Commitment to service quality + 9. Compliance */}
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
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Defined standards for attendance, grooming and duty conduct — verified through supervisor rounds.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Structured inspection schedules with documented observations and corrective-action tracking.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Logged complaints with defined response and closure timelines.</li>
              <li className="flex gap-3"><ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Regular client performance reviews and open escalation channels.</li>
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Governance"
              title="Compliance and Governance"
              onDark
            />
            <ul className="mt-7 space-y-4 text-[14.5px] leading-relaxed text-white/70">
              <li className="flex gap-3"><Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Applicable PSARA licensing and statutory registrations for our operations.</li>
              <li className="flex gap-3"><Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Employee identity documentation and background verification, as applicable.</li>
              <li className="flex gap-3"><Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />Deployment documentation, duty records and attendance maintained per site.</li>
              <li className="flex gap-3"><Scale className="mt-0.5 h-5 w-5 shrink-0 text-gold-400" aria-hidden />
                Structured incident and complaint documentation with client visibility.
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Company timeline — placeholder */}
      {timelinePlaceholder && (
        <section className="section bg-mist">
          <div className="container-site">
            <Reveal>
              <div className="rounded-xl border border-dashed border-navy-700/30 bg-white p-10 text-center shadow-card">
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

      {/* 10. CTA */}
      <section className="bg-navy-900">
        <div className="container-site py-14 text-center">
          <Reveal>
            <p className="eyebrow-on-dark">Work With Us</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.8rem] font-extrabold leading-tight text-white md:text-[2.2rem]">
              Understand Our Approach Before You Decide
            </h2>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <GoldButton href="/contact">Contact Our Team</GoldButton>
              <OutlineButton href="/services" onDark>Explore Our Services</OutlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
