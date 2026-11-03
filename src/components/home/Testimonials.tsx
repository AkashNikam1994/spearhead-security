import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import { approvedTestimonials } from "@/config/company";

/**
 * Testimonials — only genuine, approved client feedback is published.
 * Add approved entries to src/config/company.ts → `approvedTestimonials`.
 * Until then, a clearly labelled development placeholder is shown.
 */
export default function Testimonials() {
  if (approvedTestimonials.length === 0) {
    return (
      <div className="container-site mt-12">
        <Reveal>
          <div className="rounded-xl border border-dashed border-navy-700/30 bg-mist p-10 text-center">
            <Quote className="mx-auto h-8 w-8 text-navy-700/30" aria-hidden />
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-body">
              <strong className="text-ink">Client testimonials will be published here.</strong>{" "}
              Only genuine, approved customer feedback is displayed on the Spearhead Security
              website. This section is ready to receive approved testimonials.
            </p>
            <p className="mt-3 font-mono text-[12px] uppercase tracking-wider text-body/60">
              [ Development placeholder — no fabricated testimonials published ]
            </p>
          </div>
        </Reveal>
      </div>
    );
  }

  return (
    <div className="container-site mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {approvedTestimonials.map((t, i) => (
        <Reveal key={i} delay={i * 90}>
          <figure className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-7 shadow-card">
            <Quote className="h-7 w-7 text-orange-500" aria-hidden />
            <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-ink">“{t.testimonial}”</blockquote>
            <figcaption className="mt-6 border-t border-slate-100 pt-4">
              <p className="text-[14.5px] font-bold text-navy-900">{t.client_name}</p>
              <p className="text-[13px] text-body">{t.company_name}</p>
            </figcaption>
          </figure>
        </Reveal>
      ))}
    </div>
  );
}
