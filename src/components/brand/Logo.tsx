/**
 * Reusable brand logos.
 *
 * Rendered as inline SVG components (crisp at any size, colourable). Static
 * exports for brand kits live under /public/brand — regenerate there when the
 * final logo artwork is approved.
 */

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Spearhead Security mark">
      {/* geometric shield */}
      <path
        d="M32 4 L58 12 V34 c0 15-11 24-26 28 C17 58 6 49 6 34 V12 Z"
        fill="#0D2035"
        stroke="#C29A51"
        strokeWidth="2.5"
      />
      {/* abstract forward spearhead */}
      <path
        d="M24 18 L48 32 L24 46 V38.5 L33 32 L24 25.5 Z"
        fill="#C29A51"
      />
    </svg>
  );
}

export function LogoMarkWhite({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} role="img" aria-label="Spearhead Security mark">
      <path
        d="M32 4 L58 12 V34 c0 15-11 24-26 28 C17 58 6 49 6 34 V12 Z"
        fill="rgba(255,255,255,0.08)"
        stroke="rgba(255,255,255,0.9)"
        strokeWidth="2.5"
      />
      <path d="M24 18 L48 32 L24 46 V38.5 L33 32 L24 25.5 Z" fill="#C29A51" />
    </svg>
  );
}

export function LogoHorizontal({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "white";
  className?: string;
}) {
  const dark = variant === "dark";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      {dark ? <LogoMark className="h-10 w-10 md:h-11 md:w-11" /> : <LogoMarkWhite className="h-10 w-10 md:h-11 md:w-11" />}
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading text-[1.25rem] md:text-[1.35rem] font-extrabold tracking-[0.14em] ${
            dark ? "text-navy-900" : "text-white"
          }`}
        >
          SPEARHEAD
        </span>
        <span className="mt-1 text-[0.62rem] md:text-[0.68rem] font-semibold uppercase tracking-[0.34em] text-gold-500">
          Security
        </span>
      </span>
    </span>
  );
}
