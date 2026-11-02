"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, Phone, Mail, MessageCircle, Clock, X, ShieldCheck } from "lucide-react";
import { LogoHorizontal } from "@/components/brand/Logo";
import { contact, navigation, ctaButton } from "@/config/company";
import { activeServices } from "@/config/services";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  // lock body scroll when the mobile panel is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  const navServices = activeServices.filter((s) =>
    [
      "manned-guarding",
      "corporate-security",
      "industrial-security",
      "residential-security",
      "security-supervision",
      "event-security",
    ].includes(s.slug)
  );
  const extraServices = activeServices.filter((s) =>
    ["electronic-security", "security-risk-assessment"].includes(s.slug)
  );

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-navy-950 text-[13px] text-white/70 lg:block">
        <div className="container-site flex h-9 items-center justify-between">
          <div className="flex items-center gap-6">
            {!contact.phone.placeholder && (
              <a href={contact.phone.href} className="flex items-center gap-1.5 hover:text-white">
                <Phone className="h-3.5 w-3.5 text-gold-400" aria-hidden /> {contact.phone.display}
              </a>
            )}
            <a href={contact.email.href} className="flex items-center gap-1.5 hover:text-white">
              <Mail className="h-3.5 w-3.5 text-gold-400" aria-hidden /> {contact.email.display}
            </a>
            {!contact.whatsapp.placeholder && (
              <a
                href={contact.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white"
              >
                <MessageCircle className="h-3.5 w-3.5 text-gold-400" aria-hidden /> WhatsApp
              </a>
            )}
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-gold-400" aria-hidden /> {contact.hours}
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-card" : "border-b border-slate-200/70"
        }`}
      >
        <div className="container-site flex h-[4.5rem] items-center justify-between gap-4">
          <Link href="/" aria-label="Spearhead Security — Home" className="shrink-0">
            <LogoHorizontal />
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="hidden items-center gap-7 xl:flex">
            {navigation.map((item) =>
              item.dropdown ? (
                <div key={item.href} className="nav-item relative">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-1 py-3 text-[15px] font-semibold transition-colors hover:text-navy-700 ${
                      isActive(item.href) ? "text-navy-700" : "text-ink"
                    }`}
                    aria-haspopup="true"
                  >
                    {item.label}
                    <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden />
                  </Link>
                  <div className="nav-dropdown absolute left-1/2 top-full w-[42rem] -translate-x-1/2 rounded-xl border border-slate-200 bg-white p-4 shadow-cardHover">
                    <div className="grid grid-cols-2 gap-1">
                      {[...navServices, ...extraServices].map((s) => (
                        <Link
                          key={s.slug}
                          href={`/services/${s.slug}`}
                          className="group/item flex items-start gap-3 rounded-lg p-3 transition-colors hover:bg-mist"
                        >
                          <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-gold-500" aria-hidden />
                          <span>
                            <span className="block text-[14px] font-semibold text-ink group-hover/item:text-navy-700">
                              {s.title}
                            </span>
                            <span className="mt-0.5 block text-[12.5px] leading-snug text-body">
                              {s.summary.length > 72 ? `${s.summary.slice(0, 72)}…` : s.summary}
                            </span>
                          </span>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-2 border-t border-slate-100 pt-2">
                      <Link
                        href="/services"
                        className="block rounded-lg px-3 py-2 text-[13.5px] font-semibold text-gold-600 hover:bg-mist"
                      >
                        View all services →
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`border-b-2 py-1 text-[15px] font-semibold transition-colors hover:text-navy-700 ${
                    isActive(item.href)
                      ? "border-gold-500 text-navy-700"
                      : "border-transparent text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link href={ctaButton.href} className="btn-gold hidden items-center rounded-md px-5 py-2.5 text-[14px] font-bold xl:inline-flex">
              {ctaButton.label}
            </Link>
          </nav>

          {/* Tablet/mobile CTA + hamburger */}
          <div className="flex items-center gap-3 xl:hidden">
            <Link
              href={ctaButton.href}
              className="btn-gold hidden rounded-md px-4 py-2 text-[13px] font-bold sm:inline-flex"
            >
              Request Assessment
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              className="rounded-md p-2 text-ink hover:bg-mist"
            >
              <Menu className="h-6 w-6" aria-hidden />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile side panel */}
      <div
        className={`fixed inset-0 z-[60] xl:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <div
          className={`absolute inset-0 bg-navy-950/60 transition-opacity duration-300 ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <aside
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
          className={`absolute right-0 top-0 flex h-full w-[85%] max-w-sm flex-col bg-navy-900 text-white transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
            <LogoHorizontal variant="white" className="[&_span]:text-white" />
            <button onClick={() => setOpen(false)} aria-label="Close menu" className="rounded-md p-2 hover:bg-white/10">
              <X className="h-6 w-6" aria-hidden />
            </button>
          </div>
          <nav aria-label="Mobile primary" className="flex-1 overflow-y-auto px-5 py-4">
            <ul className="space-y-1">
              {navigation.map((item) =>
                item.dropdown ? (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2.5 font-semibold ${isActive(item.href) ? "bg-white/10 text-gold-400" : "text-white/90 hover:bg-white/5"}`}
                    >
                      {item.label}
                    </Link>
                    <ul className="mb-2 ml-4 border-l border-white/10 pl-3">
                      {activeServices.map((s) => (
                        <li key={s.slug}>
                          <Link
                            href={`/services/${s.slug}`}
                            className="block rounded-lg px-3 py-2 text-[14px] text-white/70 hover:bg-white/5 hover:text-white"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`block rounded-lg px-3 py-2.5 font-semibold ${
                        isActive(item.href) ? "bg-white/10 text-gold-400" : "text-white/90 hover:bg-white/5"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </nav>
          <div className="space-y-3 border-t border-white/10 p-5">
            <a href={contact.phone.href} className="flex items-center gap-2 text-[14px] text-white/75 hover:text-white">
              <Phone className="h-4 w-4 text-gold-400" aria-hidden /> {contact.phone.display}
            </a>
            <a href={contact.email.href} className="flex items-center gap-2 text-[14px] text-white/75 hover:text-white">
              <Mail className="h-4 w-4 text-gold-400" aria-hidden /> {contact.email.display}
            </a>
            <Link href={ctaButton.href} className="btn-gold flex w-full items-center justify-center rounded-md px-5 py-3 font-bold">
              {ctaButton.label}
            </Link>
          </div>
        </aside>
      </div>
    </header>
  );
}
