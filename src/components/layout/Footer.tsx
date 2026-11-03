import Link from "next/link";
import { Phone, Mail, MessageCircle, MapPin, Linkedin, Facebook, Twitter } from "lucide-react";
import { LogoHorizontal } from "@/components/brand/Logo";
import { siteConfig, contact, socialLinks, footerSummary } from "@/config/company";
import { activeServices } from "@/config/services";
import { statutory } from "@/config/company";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Our Approach", href: "/our-approach" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const publishedServices = activeServices;
  const socials = [
    { label: "LinkedIn", href: socialLinks.linkedin, Icon: Linkedin },
    { label: "Facebook", href: socialLinks.facebook, Icon: Facebook },
    { label: "X (Twitter)", href: socialLinks.x, Icon: Twitter },
  ].filter((s) => s.href);

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="container-site grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4 lg:py-20">
        {/* Column 1 */}
        <div>
          <LogoHorizontal variant="white" />
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed">{footerSummary}</p>
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href as string}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md border border-white/15 p-2.5 transition-colors hover:border-orange-500 hover:text-orange-400"
                >
                  <Icon className="h-4.5 w-4.5 h-[18px] w-[18px]" aria-hidden />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Column 2 — quick links */}
        <nav aria-label="Footer quick links">
          <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            {quickLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-orange-400">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 3 — services */}
        <nav aria-label="Footer services">
          <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">Our Services</h3>
          <ul className="mt-5 space-y-3 text-[14.5px]">
            {publishedServices.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="transition-colors hover:text-orange-400">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Column 4 — contact */}
        <div>
          <h3 className="text-[15px] font-bold uppercase tracking-wider text-white">Contact Information</h3>
          <ul className="mt-5 space-y-4 text-[14.5px]">
            <li className="flex gap-3">
              <MapPin className="mt-1 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
              <span>
                {contact.address.line1}
                <br />
                {contact.address.line2}
              </span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
              {contact.phone.placeholder ? (
                <span>{contact.phone.display}</span>
              ) : (
                <a href={contact.phone.href} className="transition-colors hover:text-orange-400">
                  {contact.phone.display}
                </a>
              )}
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
              {contact.email.placeholder ? (
                <span>{contact.email.display}</span>
              ) : (
                <a href={contact.email.href} className="transition-colors hover:text-orange-400">
                  {contact.email.display}
                </a>
              )}
            </li>
            <li className="flex gap-3">
              <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-orange-400" aria-hidden />
              {contact.whatsapp.placeholder ? (
                <span>WhatsApp: {contact.whatsapp.display}</span>
              ) : (
                <a href={contact.whatsapp.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-orange-400">
                  WhatsApp: {contact.whatsapp.display}
                </a>
              )}
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-4 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights reserved.
            <span className="mt-1 block text-white/45 md:mt-0 md:ml-3 md:inline">
              {statutory.psara.label}: {statutory.psara.value} · {statutory.gst.label}: {statutory.gst.value}
            </span>
          </p>
          <nav aria-label="Legal" className="flex gap-6">
            <Link href="/privacy-policy" className="transition-colors hover:text-orange-400">Privacy Policy</Link>
            <Link href="/terms" className="transition-colors hover:text-orange-400">Terms &amp; Conditions</Link>
            <Link href="/cookie-policy" className="transition-colors hover:text-orange-400">Cookie Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
