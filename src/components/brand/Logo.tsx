import Image from "next/image";

/**
 * Spearhead Security Service — official logo assets
 * (extracted from the company information brochure at high resolution;
 * backgrounds removed; original proportions maintained).
 *
 * Files (public/brand/):
 *  - logo-mark.png        shield emblem only (transparent)
 *  - logo-horizontal.png  full horizontal lockup (transparent, works on dark too)
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <Image
      src="/brand/logo-mark.png"
      alt="Spearhead Security Service emblem"
      width={215}
      height={255}
      className={`h-auto object-contain ${className}`}
      priority={false}
    />
  );
}

export function LogoHorizontal({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "white";
  className?: string;
}) {
  return (
    <Image
      src="/brand/logo-horizontal.png"
      alt="Spearhead Security Service"
      width={1280}
      height={400}
      className={`h-auto w-[164px] md:w-[204px] object-contain ${className}`}
      priority={false}
      sizes="(max-width: 768px) 164px, 204px"
    />
  );
}
