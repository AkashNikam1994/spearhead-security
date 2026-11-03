import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import EnquiryForm from "@/components/forms/EnquiryForm";
import { pageMetadata } from "@/lib/seo";
import { contact } from "@/config/company";
import { activeIndustries } from "@/config/industries";

export const metadata = pageMetadata({
  title: "Contact Spearhead Security Service | Request a Security Assessment",
  description:
    "Speak with Spearhead Security Service about your security requirement. Call, email or submit an online security enquiry — Jaysingpur headquarters: 9552666896 / Spearhead076@gmail.com.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Tell Us About Your Security Requirements"
        description="Share your facility and requirement — we'll respond with a structured, practical proposal."
        image="/images/home/hero.jpg"
        compact
        trail={[{ name: "Home", path: "/" }, { name: "Contact Us", path: "/contact" }]}
      />

      <section className="section">
        <div className="container-site grid gap-12 lg:grid-cols-[400px_1fr] lg:gap-16">
          {/* Left column — contact details */}
          <Reveal>
            <div className="space-y-6">
              <h2 className="font-heading text-[1.35rem] font-extrabold text-ink">Get in Touch</h2>

              <ul className="space-y-5">
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <Phone className="h-[21px] w-[21px] shrink-0 text-orange-600" aria-hidden />
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-body">Call us</p>
                    {contact.phone.placeholder ? (
                      <span className="mt-0.5 block font-heading text-[16px] font-bold text-ink">{contact.phone.display}</span>
                    ) : (
                      <a href={contact.phone.href} className="mt-0.5 block font-heading text-[16px] font-bold text-ink hover:text-navy-700">
                        {contact.phone.display}
                      </a>
                    )}
                  </div>
                </li>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <Mail className="h-[21px] w-[21px] shrink-0 text-orange-600" aria-hidden />
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-body">Email us</p>
                    {contact.email.placeholder ? (
                      <span className="mt-0.5 block font-heading text-[16px] font-bold text-ink">{contact.email.display}</span>
                    ) : (
                      <a href={contact.email.href} className="mt-0.5 block font-heading text-[16px] font-bold text-ink hover:text-navy-700">
                        {contact.email.display}
                      </a>
                    )}
                  </div>
                </li>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <MessageCircle className="h-[21px] w-[21px] shrink-0 text-orange-600" aria-hidden />
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-body">WhatsApp</p>
                    {contact.whatsapp.placeholder ? (
                      <span className="mt-0.5 block font-heading text-[16px] font-bold text-ink">
                        To be confirmed <em className="text-[12.5px] font-normal text-body">(not published yet)</em>
                      </span>
                    ) : (
                      <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="mt-0.5 block font-heading text-[16px] font-bold text-ink hover:text-navy-700">
                        {contact.whatsapp.display}
                      </a>
                    )}
                  </div>
                </li>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <MapPin className="h-[21px] w-[21px] shrink-0 text-orange-600" aria-hidden />
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-body">Office</p>
                    <p className="mt-0.5 text-[14.5px] leading-relaxed text-body">
                      {contact.address.line1}
                      <br />
                      {contact.address.line2}
                    </p>
                  </div>
                </li>
                <li className="flex gap-4 rounded-xl border border-slate-200 bg-white p-5 shadow-card">
                  <Clock className="h-[21px] w-[21px] shrink-0 text-orange-600" aria-hidden />
                  <div>
                    <p className="text-[13px] font-bold uppercase tracking-wider text-body">Business hours</p>
                    <p className="mt-0.5 text-[14.5px] text-body">{contact.hours}</p>
                  </div>
                </li>
              </ul>

              {/* Coverage locations */}
              <div className="rounded-xl bg-navy-900 p-6">
                <p className="text-[13px] font-bold uppercase tracking-wider text-orange-400">Service coverage</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {contact.coverageLocations.map((l) => (
                    <li key={l} className="rounded-full border border-white/15 px-3 py-1.5 text-[12.5px] text-white/70">
                      {l}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-[11.5px] leading-relaxed text-white/45">
                  {contact.coverageNote[0].toUpperCase() + contact.coverageNote.slice(1)}. Current
                  coverage is confirmed per enquiry — headquarters: Jaysingpur.
                </p>
              </div>

              {/* Map — displayed ONLY when a verified address exists */}
              {contact.mapEmbedUrl && (
                <div className="overflow-hidden rounded-xl border border-slate-200 shadow-card">
                  <iframe
                    src={contact.mapEmbedUrl}
                    title="Spearhead Security Service office location map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-[280px] w-full border-0"
                    allowFullScreen
                  />
                </div>
              )}
            </div>
          </Reveal>

          {/* Right column — enquiry form */}
          <Reveal delay={120}>
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-card md:p-10">
              <p className="eyebrow">Enquiry Form</p>
              <h2 className="mt-2 font-heading text-[1.5rem] font-extrabold text-ink md:text-[1.7rem]">
                Tell Us About Your Security Requirements
              </h2>
              <p className="mt-3 text-[14.5px] leading-relaxed text-body">
                Complete the form and our team will contact you to understand your requirement.
                Fields marked * are required.
              </p>
              <div className="mt-8">
                <EnquiryForm />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* industries cross-link */}
      <section className="bg-mist">
        <div className="container-site py-10">
          <p className="text-[13px] font-bold uppercase tracking-wider text-body">
            Looking for security solutions in a specific sector?
          </p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {activeIndustries.map((ind) => (
              <a
                key={ind.slug}
                href={`/industries#${ind.slug}`}
                className="rounded-full border border-slate-300 bg-white px-4 py-2 text-[13.5px] font-semibold text-ink transition-colors hover:border-orange-500 hover:text-orange-600"
              >
                {ind.name}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
