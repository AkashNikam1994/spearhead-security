import Link from "next/link";
import { ArrowRight } from "lucide-react";

/** Section heading block used across pages for consistency. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  onDark = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  onDark?: boolean;
}) {
  return (
    <div className={`${align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && <p className={onDark ? "eyebrow-on-dark" : "eyebrow"}>{eyebrow}</p>}
      <h2 className={`mt-2 font-heading text-[1.75rem] font-extrabold leading-tight md:text-[2.25rem] ${onDark ? "text-white" : ""}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-4 text-[15.5px] leading-relaxed ${onDark ? "text-white/70" : "text-body"}`}>{description}</p>
      )}
    </div>
  );
}

export function OrangeButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={`btn-orange group inline-flex items-center gap-2.5 rounded-md px-6 py-3.5 text-[15px] font-bold ${className}`}>
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

export function OutlineButton({
  href,
  children,
  onDark = false,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center gap-2.5 rounded-md border px-6 py-3.5 text-[15px] font-bold transition-colors ${
        onDark
          ? "border-white/40 text-white hover:border-orange-400 hover:text-orange-400"
          : "border-navy-900/30 text-navy-900 hover:border-orange-500 hover:text-orange-600"
      } ${className}`}
    >
      {children}
    </Link>
  );
}
