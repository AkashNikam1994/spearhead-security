import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck, Users, ClipboardList, HeartHandshake,
  ArrowRight, CheckCircle2, Cctv, FileCheck2,
  Award, Compass, Scale, Eye, Briefcase, Handshake, MapPin, Building2, Clock,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { SectionHeading, OrangeButton, OutlineButton } from "@/components/ui/Section";
import ProcessTimeline from "@/components/home/ProcessTimeline";
import Testimonials from "@/components/home/Testimonials";
import {
  siteConfig, contact, trustStrip, stats, differentiators, processSteps, peoplePoints,
  techCapabilities, techNote, complianceItems, leadershipIntro, leadershipProfiles,
  clientReferences, ctaButton,
} from "@/config/company";
import { activeServices } from "@/config/services";
import { homepageIndustries } from "@/config/industries";
import { careerBenefits } from "@/config/careers";

/* ───────────────────────── Hero (Section 1) ───────────────────────── */
function Hero() {
  return (
    <section className="relative flex min-h-[640px] items-center bg-navy-950 md:min-h-[700px]">
      <Image
        src="/images/home/hero.jpg"
        alt="Spearhead Security Service — communication and monitoring on duty"
        fill priority sizes="100vw"
        className="object-cover object-right"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/80 to-navy-950/35" />

      <div className="container-site relative z-10 py-20">
        <div className="max-w-2xl">
          <Reveal>
            <p className="eyebrow-on-dark">Established 2014 | Professional Security Services</p>
            <h1 className="mt-4 font-heading text-[2.4rem] font-extrabold leading-[1.12] text-white md:text-[3.35rem]">
              Professional Security.
              <br />
              Discipline You Can Trust.
            </h1>
            <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-white/75">
              Since 2014, Spearhead Security Service has been delivering professional security
              personnel and security solutions to companies, organisations and institutions.
              Built on experienced leadership, disciplined training and structured supervision,
              we focus on protecting people, premises and business assets.
            </p>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-9 flex flex-wrap gap-4">
              <OrangeButton href={ctaButton.href}>Request a Security Assessment</OrangeButton>
              <OutlineButton href="/services" onDark>Explore Our Services</OutlineButton>
            </div>
            <p className="mt-8 flex items-center gap-3 text-[14px] font-semibold uppercase tracking-[0.18em] text-orange-400">
              <ShieldCheck className="h-5 w-5" aria-hidden />
              People.&ensp;Discipline.&ensp;Vigilance.&ensp;Protection.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────── Trust strip (Section 2) ───────────────────── */
const trustIcons = [Award, Users, ClipboardList, Clock];

function TrustStrip() {
  return (
    <section className="relative z-10 border-b border-slate-200 bg-white">
      <div className="container-site grid gap-8 py-10 sm:grid-cols-2 lg:grid-cols-4">
        {trustStrip.map((item, i) => {
          const Icon = trustIcons[i];
          return (
            <div key={item.title} className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-navy-900 text-orange-400">
                <Icon className="h-5 w-5" aria-hidden />
              </span>
              <span>
                <span className="block font-heading text-[15.5px] font-bold text-ink">{item.title}</span>
                <span className="mt-1 block text-[13.5px] leading-snug text-body">{item.text}</span>
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}

/* ───────────────── Statistics band (brochure-based) ───────────────── */
function StatsBand() {
  return (
    <section className="border-b border-slate-200 bg-white">
      <div className="container-site grid gap-10 pb-4 pt-2 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <p className="font-heading text-[2rem] font-extrabold leading-none text-navy-900">{s.value}</p>
            <p className="mt-2 text-[13px] font-bold uppercase tracking-[0.14em] text-orange-600">{s.label}</p>
            <p className="mt-1.5 text-[13px] leading-snug text-body">{s.note ?? s.text}</p>
          </div>
        ))}
      </div>
      {(siteConfig.workforce.brochureStated || contact.coverageNote) && (
        <div className="container-site pb-8">
          <p className="text-[12px] text-body/70">
            Workforce figure as stated in the company information brochure (historical). Current coverage narrative: location names reflect service activity mentioned in the brochure, not present-day branch locations.
          </p>
        </div>
      )}
    </section>
  );
}

/* ─────────────────── Introduction (Section 3) ────────────────────── */
function Intro() {
  return (
    <section className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="absolute -left-4 -top-4 h-full w-full rounded-2xl border border-orange-500/40" aria-hidden />
            <Image
              src="/images/home/careers.jpg"
              alt="Spearhead Security Service personnel in the company's own uniform"
              width={405} height={402}
              className="relative w-full rounded-2xl object-cover shadow-card"
            />
          </div>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading align="left" eyebrow="About Us" title="Founded in 2014. Rooted in Discipline." />
          <div className="mt-6 space-y-4 text-[15.5px] leading-relaxed text-body">
            <p>
              Founded in 2014 by SM Badame, Spearhead Security Service is headquartered in
              Jaysingpur, Maharashtra. The company provides professional security services and
              personnel to companies, organisations and institutions.
            </p>
            <p>
              With leadership experience described in the company&rsquo;s brochure as former
              Special Protection Group service and VVIP protection assignments, Spearhead places
              strong emphasis on disciplined security personnel, professional training, monitoring
              and effective supervision.
            </p>
            <p>
              The organisation works closely with its clients to understand their premises and
              specific security requirements before planning and deploying security personnel.
            </p>
          </div>
          <div className="mt-8">
            <OrangeButton href="/about-us">About Spearhead</OrangeButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────────── Services grid (Section 4) ───────────────────── */
function ServicesGrid() {
  return (
    <section className="section bg-mist">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="What We Deliver"
            title="Comprehensive Security Solutions"
            description="The seven primary security services of Spearhead Security Service — each backed by disciplined personnel, training and structured supervision."
          />
        </Reveal>
        <div className="mt-14 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {activeServices.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 90}>
              <Link
                href={`/services/${s.slug}`}
                className="group block h-full overflow-hidden rounded-xl border border-slate-200 bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-cardHover"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-navy-900">
                  <Image src={s.image} alt={`${s.title} — Spearhead Security Service`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="card-img object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-[18px] font-bold text-ink group-hover:text-navy-800">{s.title}</h3>
                  <p className="mt-2.5 text-[14px] leading-relaxed text-body">{s.summary}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-[13.5px] font-bold text-orange-600 transition-colors group-hover:text-orange-500">
                    Explore Service <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Industries grid (Section 5) ─────────────────── */
function IndustriesGrid() {
  const items = homepageIndustries.slice(0, 6);
  return (
    <section className="section">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="B2B Security Services"
            title="Security Solutions Across Diverse Industries"
            description="Spearhead serves companies, organisations and institutions — designing security arrangements around each operating environment."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((ind, i) => (
            <Reveal key={ind.slug} delay={(i % 3) * 90}>
              <Link
                href={`/industries#${ind.slug}`}
                className="group relative block h-56 overflow-hidden rounded-xl bg-navy-950 md:h-64"
              >
                <Image src={ind.image} alt={`${ind.name} — security by Spearhead Security Service`} fill sizes="(min-width:1024px) 33vw, (min-width:640px) 50vw, 100vw" className="card-img object-cover opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-heading text-[17px] font-bold text-white">{ind.name}</h3>
                  <p className="mt-1 line-clamp-2 text-[13.5px] leading-snug text-white/70">{ind.short}</p>
                  <span className="mt-2 text-[12.5px] font-bold uppercase tracking-wider text-orange-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View details →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <OutlineButton href="/industries">View All Industries</OutlineButton>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────── Why Spearhead (Section 6) ───────────────────── */
const diffIcons = [Award, Users, Eye, Compass, Cctv, HeartHandshake, Handshake];

function WhySpearhead() {
  return (
    <section className="section bg-navy-900">
      <div className="container-site relative">
        <Reveal>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="Why Choose Spearhead Security Service?"
            description="Differentiators described in the company information brochure."
            onDark
          />
        </Reveal>
        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((d, i) => {
            const Icon = diffIcons[i];
            return (
              <Reveal key={d.title} delay={(i % 4) * 70}>
                <div className="relative border-t-2 border-orange-500/60 pt-6">
                  <Icon className="h-8 w-8 text-orange-400" aria-hidden />
                  <h3 className="mt-4 font-heading text-[16.5px] font-bold text-white">{d.title}</h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-white/65">{d.text}</p>
                  <span className="pointer-events-none absolute right-0 -top-4 font-heading text-4xl font-extrabold text-white/5" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Delivery framework (Section 7) ──────────────────── */
function Framework() {
  return (
    <section className="section bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Operations"
            title="Our Approach to Security Operations"
            description="Monitoring, posting of security guards at designated points, supervision, recce and regular inspection are the unique features of the Spearhead approach."
            onDark
          />
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-16">
            <ProcessTimeline step={0} />
            <ProcessTimeline step={1} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── People & training (Section 8) ───────────────────── */
function PeopleTraining() {
  return (
    <section className="section">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Our People"
            title="Developing Professional and Disciplined Security Personnel"
            description="Training emphasises military drill, professional bearing, intelligence, control, crime prevention and detection — with structured reporting and emergency awareness."
          />
          <ul className="mt-7 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {peoplePoints.slice(0, 6).map((p) => (
              <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-snug text-body">
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orange-500" aria-hidden />
                {p}
              </li>
            ))}
          </ul>
          <div className="mt-9">
            <OrangeButton href="/training">Explore Our Training Approach</OrangeButton>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <Image
            src="/images/extra/fire-safety-classroom.jpg"
            alt="Fire and safety training programme presented by Spearhead Security Service"
            width={449} height={329}
            className="w-full rounded-2xl object-cover shadow-card"
          />
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── Technology (Section 9) ──────────────────────────── */
function Technology() {
  return (
    <section className="section bg-mist">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <Image
            src="/images/home/cta.jpg"
            alt="Communication discipline at Spearhead security deployments"
            width={919} height={562}
            className="w-full rounded-2xl object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={120} className="order-1 lg:order-2">
          <SectionHeading
            align="left"
            eyebrow="Operations"
            title="Technology Supported. People Focused."
            description="Monitoring and disciplined processes support trained personnel — technology as described in the brochure, without overstating what exists today."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {techCapabilities.map((t, i) => (
              <div key={t.title} className="rounded-xl border border-slate-200 bg-white p-4 shadow-card">
                <h3 className="flex items-center gap-2 font-heading text-[14.5px] font-bold text-ink">
                  {(t.title.includes("CCTV") && <Cctv className="h-[18px] w-[18px] text-orange-600" aria-hidden />) ||
                    (t.title.includes("Liaison") && <Handshake className="h-[18px] w-[18px] text-orange-600" aria-hidden />) || (
                      <FileCheck2 className="h-[18px] w-[18px] text-orange-600" aria-hidden />
                    )}
                  {t.title}
                </h3>
                <p className="mt-1.5 text-[13px] leading-snug text-body">{t.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2.5 rounded-lg border border-orange-500/40 bg-orange-100/60 p-4 text-[13px] leading-relaxed text-ink">
            <Briefcase className="mt-0.5 h-4 w-4 shrink-0 text-orange-600" aria-hidden />
            {techNote}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── Compliance (Section 10) ─────────────────────────── */
const complianceIcons = [Scale, Handshake, Scale, Eye, CheckCircle2, ClipboardList, Compass, Users, ShieldCheck];

function Compliance() {
  return (
    <section className="section">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Our Method"
            title="Conduct, Welfare and Supervision"
            description="Statements made in the company information brochure about how the workforce is treated and managed."
          />
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {complianceItems.map((c, i) => {
            const Icon = complianceIcons[i];
            return (
              <Reveal key={c.title} delay={(i % 3) * 80}>
                <div className="h-full rounded-xl border border-slate-200 bg-white p-6 shadow-card transition-shadow hover:shadow-cardHover">
                  <Icon className="h-7 w-7 text-orange-600" aria-hidden />
                  <h3 className="mt-4 font-heading text-[15.5px] font-bold text-ink">{c.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-body">{c.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────── Leadership (Section 11) ─────────────────────────── */
function Leadership() {
  const founder = leadershipProfiles.find((p) => p.published);
  return (
    <section className="section bg-mist">
      <div className="container-site">
        <Reveal>
          <SectionHeading
            eyebrow="Leadership"
            title="Leadership Built on Professional Security Experience"
            description={leadershipIntro}
          />
        </Reveal>
        <div className="mx-auto mt-14 max-w-3xl">
          {founder ? (
            <Reveal>
              <div className="rounded-2xl border border-maroon-600/20 bg-white p-8 text-center shadow-card md:p-10">
                <span className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-maroon-600 font-heading text-[1.6rem] font-extrabold text-white" aria-hidden>
                  SB
                </span>
                <h3 className="mt-4 font-heading text-[1.35rem] font-extrabold text-ink">{founder.name}</h3>
                <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.18em] text-orange-600">
                  Founder — Spearhead Security Service
                </p>
                <p className="mx-auto mt-5 max-w-2xl border-t border-slate-100 pt-5 text-left text-[15px] leading-relaxed text-body">
                  {siteConfig.founderBio}
                </p>
                <p className="mt-5 text-[12px] text-body/70">
                  Details are stated as described in the company&rsquo;s information brochure. No
                  rank, service dates, awards or additional credentials are claimed.
                </p>
              </div>
            </Reveal>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Clients & coverage (Section 12 update) ────────────── */
function ClientsAndCoverage() {
  return (
    <section className="section">
      <div className="container-site grid gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <SectionHeading
            align="left"
            eyebrow="Client References"
            title={clientReferences.heading}
            description={clientReferences.subheading}
          />
          <ul className="mt-7 space-y-3">
            {clientReferences.clients.map((c) => (
              <li key={c} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-5 py-4 shadow-card">
                <Building2 className="h-5 w-5 shrink-0 text-orange-600" aria-hidden />
                <span className="font-heading text-[15.5px] font-bold text-ink">{c}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[12.5px] leading-relaxed text-body/70">{clientReferences.caption}</p>
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="Coverage"
            title="Serving Organisations Across Maharashtra"
            description="Locations with security service activity as recorded in the company's brochure."
          />
          <div className="mt-7 flex flex-wrap gap-2.5">
            {contact.coverageLocations.map((loc) => (
              <span key={loc} className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2.5 text-[14px] font-semibold text-ink shadow-card">
                <MapPin className="h-4 w-4 shrink-0 text-orange-600" aria-hidden />
                {loc}
              </span>
            ))}
          </div>
          <p className="mt-4 text-[12.5px] leading-relaxed text-body/70">
            {contact.coverageNote[0].toUpperCase() + contact.coverageNote.slice(1)}. Current
            operating coverage is confirmed per requirement — headquarters remains in Jaysingpur,
            which also functions as the coordination office.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── Careers teaser (Section 13) ─────────────────────── */
function CareersTeaser() {
  return (
    <section className="section bg-navy-950">
      <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Image
            src="/images/home/training.jpg"
            alt="Spearhead Security Service personnel during a training session"
            width={450} height={330}
            className="w-full rounded-2xl object-cover shadow-card"
          />
        </Reveal>
        <Reveal delay={120}>
          <SectionHeading
            align="left"
            eyebrow="Careers"
            title="Build Your Career With Spearhead Security Service"
            description="Join a professional team committed to discipline, responsibility and service excellence — supported by structured training and welfare practices."
          />
          <ul className="mt-6 space-y-3">
            {careerBenefits.slice(0, 4).map((b) => (
              <li key={b} className="flex items-start gap-2.5 text-[14.5px] text-white/70">
                <CheckCircle2 className="mt-0.5 h-[18px] w-[18px] shrink-0 text-orange-400" aria-hidden />
                {b}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <OutlineButton href="/careers" onDark>Explore Career Opportunities</OutlineButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ─────────────── Final CTA (Section 14) ──────────────────────────── */
function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-navy-950">
      <Image src="/images/home/cta.jpg" alt="" fill sizes="100vw" className="object-cover opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-900/70" />
      <div className="container-site relative z-10 py-20 text-left md:py-24">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <p className="eyebrow-on-dark">Get Started</p>
              <h2 className="mt-3 font-heading text-[1.9rem] font-extrabold leading-tight text-white md:text-[2.4rem]">
                Looking for a Reliable Security Partner?
              </h2>
              <p className="mt-4 text-[16px] leading-relaxed text-white/70">
                Let&rsquo;s understand your security requirements and design an appropriate
                solution for your organisation.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <OrangeButton href={ctaButton.href}>Request a Security Assessment</OrangeButton>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md border border-white/40 px-6 py-3.5 text-[15px] font-bold text-white transition-colors hover:border-orange-400 hover:text-orange-400"
              >
                Contact Our Team
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ────────────────────────── Page assembly ────────────────────────── */
export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <StatsBand />
      <Intro />
      <ServicesGrid />
      <IndustriesGrid />
      <WhySpearhead />
      <Framework />
      <PeopleTraining />
      <Technology />
      <Compliance />
      <Leadership />

      {/* Testimonials (Section 12) */}
      <section className="section bg-mist">
        <Reveal>
          <SectionHeading
            eyebrow="Client Feedback"
            title="Trusted Through Service. Strengthened by Relationships."
            description="Only genuine, approved customer feedback is published on this website."
          />
        </Reveal>
        <Testimonials />
      </section>

      <ClientsAndCoverage />
      <CareersTeaser />
      <FinalCTA />
    </>
  );
}
