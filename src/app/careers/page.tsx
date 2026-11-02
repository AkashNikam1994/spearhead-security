import Image from "next/image";
import { Briefcase, GraduationCap, MapPin, Users } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import { SectionHeading, GoldButton } from "@/components/ui/Section";
import Reveal from "@/components/ui/Reveal";
import CareerForm from "@/components/forms/CareerForm";
import { pageMetadata } from "@/lib/seo";
import { careerBenefits, positions } from "@/config/careers";
import { contact } from "@/config/company";

export const metadata = pageMetadata({
  title: "Careers — Build Your Career With Spearhead Security",
  description:
    "Join Spearhead Security: security guard openings, security supervisor positions and operations management opportunities. Apply online with a two-minute application.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build Your Career With Spearhead Security"
        description="Join a professional team committed to discipline, responsibility, service excellence and meaningful work."
        image="/images/pages/careers.png"
        compact
        trail={[{ name: "Home", path: "/" }, { name: "Careers", path: "/careers" }]}
      />

      {/* Why work with us */}
      <section className="section">
        <div className="container-site grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <SectionHeading align="left" eyebrow="Why Join Us" title="Why Work With Spearhead" />
            <ul className="mt-7 space-y-3.5">
              {careerBenefits.map((b) => (
                <li key={b} className="flex items-start gap-3 text-[15px] leading-snug text-body">
                  <GraduationCap className="mt-0.5 h-[19px] w-[19px] shrink-0 text-gold-600" aria-hidden />
                  {b}
                </li>
              ))}
            </ul>
            <p className="mt-7 text-[15px] leading-relaxed text-body">
              We invest in our people because our clients feel the result: disciplined,
              well-briefed personnel who take ownership of their posts and grow into
              supervisory responsibilities.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <Image src="/images/pages/careers-team.png" alt="Team of Spearhead Security officers" width={1200} height={800} className="w-full rounded-2xl object-cover shadow-card" />
          </Reveal>
        </div>
      </section>

      {/* Open positions */}
      <section className="section bg-mist">
        <div className="container-site">
          <Reveal>
            <SectionHeading
              eyebrow="Open Positions"
              title="Current Opportunities"
              description="Locations listed per position are updated as operations expand. If your city isn't listed, you may still register interest."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {positions.map((pos, i) => (
              <Reveal key={pos.title} delay={i * 90}>
                <div className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-card">
                  <Briefcase className="h-7 w-7 text-gold-600" aria-hidden />
                  <h2 className="mt-4 font-heading text-[17px] font-bold text-ink">{pos.title}</h2>
                  <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wider text-gold-600">{pos.type}</p>
                  <p className="mt-3 flex-1 text-[13.5px] leading-relaxed text-body">{pos.description}</p>
                  <ul className="mt-4 border-t border-slate-100 pt-4">
                    {pos.locations.map((l) => (
                      <li key={l} className="flex items-center gap-2 text-[13px] text-body">
                        <MapPin className="h-3.5 w-3.5 text-gold-600" aria-hidden /> {l}
                      </li>
                    ))}
                  </ul>
                  <a href="#apply" className="mt-5 inline-flex items-center gap-2 text-[14px] font-bold text-gold-600 hover:text-gold-500">
                    Apply for this position →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section className="section" id="apply">
        <div className="container-site max-w-3xl">
          <Reveal>
            <SectionHeading
              eyebrow="Apply Online"
              title="Candidate Application"
              description="Complete the form below. Our recruitment team reviews applications and contacts candidates who match an opening."
            />
          </Reveal>
          <Reveal delay={100}>
            <div className="mt-10 rounded-2xl border border-slate-200 bg-white p-7 md:p-10 shadow-card">
              <CareerForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* contact fallback */}
      <section className="bg-navy-950">
        <div className="container-site py-12 text-center">
          <p className="eyebrow-on-dark">Need Help?</p>
          <p className="mx-auto mt-3 max-w-xl text-[15px] leading-relaxed text-white/70">
            If you have trouble with the online form, call us at{" "}
            {contact.phone.placeholder ? (
              <span className="font-bold text-gold-400">{contact.phone.display}</span>
            ) : (
              <a href={contact.phone.href} className="font-bold text-gold-400">{contact.phone.display}</a>
            )}{" "}
            or email{" "}
            {contact.email.placeholder ? (
              <span className="font-bold text-gold-400">{contact.email.display}</span>
            ) : (
              <a href={contact.email.href} className="font-bold text-gold-400">{contact.email.display}</a>
            )}.
          </p>
        </div>
      </section>
    </>
  );
}
