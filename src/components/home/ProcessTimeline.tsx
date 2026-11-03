import { processSteps } from "@/config/company";

/**
 * Six-step delivery framework.
 * Horizontal timeline on desktop, vertical timeline on mobile.
 */
export default function ProcessTimeline({ step = 0 }: { step?: 0 | 1 }) {
  return (
    <div className={step === 0 ? "hidden md:grid md:grid-cols-6 md:gap-6" : "md:hidden"}>
      {step === 0 ? (
        // desktop horizontal
        <>
          {processSteps.map((s, i) => (
            <div key={s.step} className="relative flex flex-col text-center">
              {!isLast(i) && (
                <div className="absolute left-1/2 top-7 z-0 h-px w-full bg-gradient-to-r from-orange-500/60 to-navy-700/20" aria-hidden />
              )}
              <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-orange-500 bg-navy-900 font-heading text-[15px] font-extrabold text-orange-400">
                {s.step}
              </div>
              <h3 className="mt-4 font-heading text-[17px] font-bold text-white">{s.title}</h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-white/65">{s.text}</p>
            </div>
          ))}
        </>
      ) : (
        // mobile vertical
        <>
          <ol className="timeline-v relative space-y-8">
            {processSteps.map((s) => (
              <li key={s.step} className="relative pl-14">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-full border-2 border-orange-500 bg-navy-900 font-heading text-[13px] font-extrabold text-orange-400">
                  {s.step}
                </div>
                <h3 className="font-heading text-[16.5px] font-bold text-white">{s.title}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-white/65">{s.text}</p>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

const isLast = (i: number) => i === processSteps.length - 1;
