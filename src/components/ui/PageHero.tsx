import Image from "next/image";
import Link from "next/link";
import { breadcrumbSchema } from "@/lib/seo";

export default function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="container-site pt-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema(trail)) }} />
      <ol className="flex flex-wrap items-center gap-2 text-[13.5px] text-white/60">
        {trail.map((item, i) => (
          <li key={item.path} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden>/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-orange-400">{item.name}</span>
            ) : (
              <Link href={item.path} className="hover:text-white">{item.name}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Reusable inner-page hero with dark overlay + eyebrow. */
export function PageHero({
  title,
  eyebrow,
  description,
  image,
  trail,
  compact = false,
}: {
  title: string;
  eyebrow?: string;
  description?: string;
  image: string;
  trail: { name: string; path: string }[];
  compact?: boolean;
}) {
  return (
    <section className={`relative flex flex-col justify-end bg-navy-950 ${compact ? "h-[300px] md:h-[340px]" : "h-[380px] md:h-[440px]"}`}>
      <Image src={image} alt="" fill priority sizes="100vw" className="object-cover opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/70 to-navy-950/30" />
      <div className="relative z-10 pb-12 md:pb-16">
        <Breadcrumbs trail={trail} />
        <div className="container-site mt-4">
          {eyebrow && <p className="eyebrow-on-dark">{eyebrow}</p>}
          <h1 className="mt-2 max-w-3xl font-heading text-3xl font-extrabold text-white md:text-[2.75rem] md:leading-tight">
            {title}
          </h1>
          {description && <p className="mt-4 max-w-2xl text-[15.5px] leading-relaxed text-white/75">{description}</p>}
        </div>
      </div>
    </section>
  );
}
