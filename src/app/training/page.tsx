import Image from "next/image";
import { CheckCircle2, ClipboardList, Eye, FileText, MessagesSquare, Radio, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, OrangeButton, OutlineButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import { pageMetadata } from "@/lib/seo";
import {
  trainingIntro, trainingModules, trainingNotes, selectionProcess,
} from "@/config/company";

export const metadata = pageMetadata({
  title: "Security Guard Training & Selection | Spearhead Security Service",
  description:
    "How Spearhead Security Service selects and develops professional, disciplined security personnel — training syllabus categories and the structured selection funnel described in our company brochure.",
  path: "/training",
});

/* Icon mapping for the six syllabus categories (A–F). */
const moduleIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  A: ShieldCheck,     // drill & bearing
  B: Radio,           // physical protection
  C: Eye,             // control & identification
  D: ClipboardList,   // emergencies
  E: FileText,        // records & reporting
  F: MessagesSquare,  // communication & PR
};

/* Syllabus photos — genuine Spearhead brochure photographs. */
const syllabusPhotos: Record<string, { src: string; alt: string }> = {
  A: { src: "/images/services/armed-guards.jpg", alt: "Uniform and bearing inspection during a Spearhead drill session" },
  B: { src: "/images/extra/deployment-briefing.jpg", alt: "Site briefing covering protective deployment arrangements" },
  C: { src: "/images/extra/medal-ceremony.jpg", alt: "Recognised personnel at a facility gate — access control duties" },
  D: { src: "/images/extra/fire-safety-classroom.jpg", alt: "Fire and emergency awareness classroom session" },
  E: { src: "/images/extra/guards-award.jpg", alt: "Spearhead personnel recognised for disciplined duty records" },
  F: { src: "/images/extra/intro.jpg", alt: "Communication and client requirements session during training" },
};

export default function TrainingPage() {
  return (
    <>
      <PageHero
        eyebrow="Our People"
        title="Training & Personnel Development"
        description="How Spearhead develops professional, disciplined security personnel — as described in the company information brochure."
        image="/images/home/hero.jpg"
        trail={[{ name: "Home", path: "/" }, { name: "Training", path: "/training" }]}
      />

      {/* 1. Introduction */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading
              align="left"
              eyebrow="Training Approach"
              title="Developing Professional and Disciplined Security Personnel"
              description={trainingIntro}
            />
            <p className="mt-5 flex items-start gap-2.5 rounded-lg border border-orange-500/40 bg-orange-100/60 p-4 text-[13px] leading-relaxed text-ink">
              <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden />
              {trainingNotes}
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Image
              src="/images/extra/fire-drill.jpg"
              alt="Emergency response practice during Spearhead training"
              width={353} height={349}
              className="w-full rounded-2xl object-cover shadow-card"
            />
          </Reveal>
        </div>
      </section>

      {/* 2. Syllabus categories A–F */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Training Syllabus"
              title="Six Categories of Professional Preparation"
              description="The subjects listed in the company's information brochure, organised into syllabus categories."
            />
          </Reveal>
          <div className="mt-14 space-y-8">
            {trainingModules.map((m, i) => {
              const Icon = moduleIcons[m.key];
              const photo = syllabusPhotos[m.key];
              return (
                <Reveal key={m.key} delay={80}>
                  <article className="grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-card md:grid-cols-[260px_1fr]">
                    <div className="relative min-h-[190px] bg-navy-900">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(min-width: 768px) 260px, 100vw"
                        className="object-cover"
                      />
                      <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy-950/80 font-heading text-[15px] font-extrabold text-orange-400 backdrop-blur-sm" aria-hidden>
                        {m.key}
                      </span>
                    </div>
                    <div className="p-7 md:p-8">
                      <h3 className="flex items-center gap-2.5 font-heading text-[17px] font-bold text-ink md:text-[18px]">
                        <Icon className="h-5 w-5 shrink-0 text-orange-600" aria-hidden />
                        {m.key === "A" ? "Basic Military Drill & Professional Bearing" : m.title}
                      </h3>
                      <ul className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                        {m.items.map((item) => (
                          <li key={item} className="flex items-start gap-2 text-[14px] leading-snug text-body">
                            <CheckCircle2 className="mt-0.5 h-[16px] w-[16px] shrink-0 text-orange-500" aria-hidden />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Selection funnel */}
      <section className="section">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Personnel Selection"
              title="From Application to Deployment"
              description="Selection involves qualifying aptitude, intelligence, physical and written assessments — followed by structured induction and assignment-specific deployment."
            />
          </Reveal>
          <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-6">
            {selectionProcess.map((s, i) => (
              <Reveal key={s.title} delay={i * 70}>
                <li className="relative flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <span className="font-heading text-[13px] font-extrabold text-orange-600" aria-hidden>
                    {`0${i + 1}`}
                  </span>
                  <h3 className="mt-2 font-heading text-[15.5px] font-bold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-snug text-body">{s.text}</p>
                  {i < selectionProcess.length - 1 && (
                    <span className="pointer-events-none absolute right-3 top-1/2 hidden -translate-y-1/2 text-orange-500/50 lg:block" aria-hidden>
                      →
                    </span>
                  )}
                </li>
              </Reveal>
            ))}
          </ol>
          <Reveal delay={300}>
            <p className="mx-auto mt-10 max-w-3xl rounded-xl border border-dashed border-navy-700/30 bg-mist p-6 text-center text-[13.5px] leading-relaxed text-body">
              Historical eligibility criteria for guard recruitment (education, age and physical
              requirements) exist in the company brochure but are not published here. The current
              recruitment policy and compliance requirements will be confirmed by management before
              any criteria are stated publicly.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 4. Training in the field */}
      <section className="section bg-navy-900">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Development"
              title="Trained for the Assignment, Not Just the Job"
              description="Training continues into deployment — every posting begins with a site-specific briefing covering duties, records, escalation and client requirements."
              onDark
            />
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {[
              { src: "/images/extra/deployment-briefing.jpg", alt: "Deployment briefing before posting at a client site", text: "Deployment briefings assignment by assignment" },
              { src: "/images/extra/fire-drill.jpg", alt: "Fire drill practice with supervisory guidance", text: "Emergency awareness reinforced on site" },
              { src: "/images/extra/medal-ceremony.jpg", alt: "Recognition ceremony for disciplined service", text: "Recognition for disciplined, honest service" },
            ].map((card, i) => (
              <Reveal key={card.src} delay={i * 90}>
                <figure className="overflow-hidden rounded-xl border border-white/10 bg-navy-950">
                  <Image src={card.src} alt={card.alt} width={449} height={329} className="aspect-[16/10] w-full object-cover" />
                  <figcaption className="p-5 text-[14px] font-semibold text-white/75">{card.text}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA */}
      <section className="bg-navy-950">
        <div className="container-site py-14 text-center">
          <Reveal>
            <p className="eyebrow-on-dark">Careers</p>
            <h2 className="mx-auto mt-3 max-w-2xl font-heading text-[1.8rem] font-extrabold leading-tight text-white md:text-[2.2rem]">
              Join a Team Built on Discipline
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15.5px] leading-relaxed text-white/70">
              Explore career opportunities with Spearhead Security Service — structured training,
              complete uniform and administrative support.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <OrangeButton href="/careers">Explore Career Opportunities</OrangeButton>
              <OutlineButton href="/contact" onDark>Contact Our Team</OutlineButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
