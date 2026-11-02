import Image from "next/image";
import { BadgeCheck, ClipboardCheck, FileSearch, Handshake, Search, ShieldCheck, Siren, TrendingUp, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, GoldButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Our Approach — How Spearhead Delivers Security Operations",
  description:
    "From site assessment and deployment planning to supervision, quality inspections, incident management and performance review — the Spearhead operational delivery model.",
  path: "/our-approach",
});

const phases = [
  {
    title: "1 · Site Security Assessment",
    Icon: Search,
    text: "Every engagement begins with a structured walk-through of your premises: layout, entries, exits, sensitive areas, existing arrangements and daily movement patterns.",
  },
  {
    title: "2 · Risk Identification",
    Icon: FileSearch,
    text: "We document observed vulnerabilities — procedural, physical and human — and identify the risks that matter most to your operations.",
  },
  {
    title: "3 · Deployment Planning",
    Icon: ClipboardCheck,
    text: "A customised deployment plan defines manpower, shift structure, post locations, rosters, reporting escalation and site-specific security instructions.",
  },
  {
    title: "4 · Recruitment & Personnel Selection",
    Icon: Users,
    text: "Personnel are selected against defined criteria, with identity documentation and background information verified as applicable before deployment.",
  },
  {
    title: "5 · Training & Induction",
    Icon: BadgeCheck,
    text: "Selected personnel complete induction covering conduct, duties, reporting, emergency awareness — followed by site-specific deployment training before going live.",
  },
  {
    title: "6 · Site Mobilisation",
    Icon: Handshake,
    text: "Structured mobilisation: post orders handed over, escalation contacts established, client management briefed and opening-day coverage verified.",
  },
  {
    title: "7 · Operations Supervision",
    Icon: ShieldCheck,
    text: "Supervisors conduct planned and surprise rounds, verify attendance and discipline, audit registers and remain the single operational contact for your team.",
  },
  {
    title: "8 · Quality Inspections",
    Icon: ClipboardCheck,
    text: "Inspection findings are documented, corrective actions are tracked to closure and gaps are reviewed with management.",
  },
  {
    title: "9 · Incident Management",
    Icon: Siren,
    text: "Incidents are recorded, escalated through a defined matrix and reviewed — so learning feeds directly back into procedures.",
  },
  {
    title: "10 · Performance Review",
    Icon: TrendingUp,
    text: "Periodic service reviews with clients cover performance, compliance documentation, resolved issues and deployment adjustments.",
  },
];

export default function OurApproachPage() {
  return (
    <>
      <PageHero
        eyebrow="How We Operate"
        title="Our Approach to Delivering Security"
        description="A structured delivery model that takes every engagement from assessment to continuous improvement — with supervision throughout."
        image="/images/pages/our-approach.png"
        trail={[{ name: "Home", path: "/" }, { name: "Our Approach", path: "/our-approach" }]}
      />

      {/* condensed framework timeline (dark) reusing homepage process */}
      <section className="section bg-navy-950">
        <div className="container-site">
          <Reveal>
            <SectionHeading eyebrow="Framework" title="Six Stages, One Delivery Model" onDark />
          </Reveal>
          <div className="mx-auto mt-12 max-w-3xl">
            <ol className="timeline-v relative space-y-8">
              {[
                ["Understand", "Client premises, operations and objectives."],
                ["Assess", "Risks, vulnerabilities and access requirements."],
                ["Design", "Customised deployment plan and site procedures."],
                ["Deploy", "Verified, briefed and inducted personnel."],
                ["Monitor", "Reporting, inspections and escalation."],
                ["Improve", "Reviews, corrective actions and refinement."],
              ].map(([title, text], i) => (
                <li key={i} className="relative pl-14">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-gold-500 bg-navy-900 font-heading text-[13px] font-extrabold text-gold-400">
                    {i + 1}
                  </div>
                  <h3 className="font-heading text-[16.5px] font-bold text-white">{title}</h3>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{text}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* detailed phases */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Delivery Model"
              title="How an Engagement Runs, End to End"
              description="Ten defined phases govern how we plan, mobilise, operate and review every deployment."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {phases.map((p, i) => (
              <Reveal key={p.title} delay={(i % 2) * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-7 shadow-card transition-shadow hover:shadow-cardHover">
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-gold-400">
                      <p.Icon className="h-5.5 w-5.5 h-[21px] w-[21px]" aria-hidden />
                    </span>
                    <h2 className="font-heading text-[16.5px] font-bold text-ink">{p.title}</h2>
                  </div>
                  <p className="mt-4 text-[14px] leading-relaxed text-body">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-mist">
        <div className="container-site grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-20">
          <Reveal>
            <Image src="/images/home/intro.png" alt="Supervisor documentation and site inspection" width={1200} height={900} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
          <Reveal delay={120}>
            <SectionHeading
              align="left"
              eyebrow="Start Here"
              title="Request a Structured Security Assessment"
              description="The assessment is the first phase of this model — a documented review of your premises, procedures and requirements, leading to a deployment plan you can act on."
            />
            <div className="mt-8">
              <GoldButton href="/contact">Request an Assessment</GoldButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
