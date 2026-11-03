"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, FileUp } from "lucide-react";
import { applicationPositions } from "@/config/careers";

type Status = "idle" | "loading" | "success" | "error";

const labelCls = "block text-[13.5px] font-semibold text-ink mb-1.5";
const inputCls = "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate-400";
const errCls = "mt-1 text-[12.5px] font-medium text-red-600";

export default function CareerForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrors({});

    const formEl = e.currentTarget;
    const fd = new FormData(formEl);

    // client-side resume checks (server re-validates)
    const resume = fd.get("resume") as File | null;
    if (!resume || resume.size === 0) {
      setStatus("error");
      setErrors({ resume: "Please attach your resume (PDF or DOCX, max 2 MB)." });
      setMessage("Please attach your resume.");
      return;
    }
    if (resume.size > 2 * 1024 * 1024) {
      setStatus("error");
      setErrors({ resume: "Resume must be under 2 MB." });
      setMessage("Resume file is too large — 2 MB maximum.");
      return;
    }

    try {
      const res = await fetch("/api/career-applications", { method: "POST", body: fd });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setMessage(json.message ?? "Application received.");
        formEl.reset();
      } else if (json.errors) {
        setStatus("error");
        setMessage("Please correct the highlighted fields.");
        setErrors(json.errors);
      } else {
        setStatus("error");
        setMessage(json.message ?? "Something went wrong. Please try again later.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again later.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-ink">Application received.</h3>
        <p className="mx-auto mt-2 max-w-md text-[14.5px] text-body">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex rounded-md border border-navy-900/30 px-5 py-2.5 text-[14px] font-bold text-navy-900 hover:border-orange-500 hover:text-orange-600"
        >
          Submit another application
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "error" && message && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
          <p className="text-[14px] text-red-700">{message}</p>
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c_full_name" className={labelCls}>Full name <span aria-hidden>*</span></label>
          <input id="c_full_name" name="full_name" type="text" required autoComplete="name"
            className={`${inputCls} ${errors.full_name ? "border-red-400" : ""}`} placeholder="Your name" />
          {errors.full_name && <p className={errCls}>{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="c_phone" className={labelCls}>Mobile number <span aria-hidden>*</span></label>
          <input id="c_phone" name="phone" type="tel" required autoComplete="tel"
            className={`${inputCls} ${errors.phone ? "border-red-400" : ""}`} placeholder="+91 ..." />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="c_email" className={labelCls}>Email address <span aria-hidden>*</span></label>
          <input id="c_email" name="email" type="email" required autoComplete="email"
            className={`${inputCls} ${errors.email ? "border-red-400" : ""}`} placeholder="name@email.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="c_location" className={labelCls}>Current location <span aria-hidden>*</span></label>
          <input id="c_location" name="current_location" type="text" required
            className={`${inputCls} ${errors.current_location ? "border-red-400" : ""}`} placeholder="City, State" />
          {errors.current_location && <p className={errCls}>{errors.current_location}</p>}
        </div>
        <div>
          <label htmlFor="c_position" className={labelCls}>Preferred position <span aria-hidden>*</span></label>
          <select id="c_position" name="preferred_position" required defaultValue=""
            className={`${inputCls} ${errors.preferred_position ? "border-red-400" : ""}`}>
            <option value="" disabled>Select position</option>
            {applicationPositions.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
          {errors.preferred_position && <p className={errCls}>{errors.preferred_position}</p>}
        </div>
        <div>
          <label htmlFor="c_experience" className={labelCls}>Experience <span aria-hidden>*</span></label>
          <select id="c_experience" name="experience" required defaultValue=""
            className={`${inputCls} ${errors.experience ? "border-red-400" : ""}`}>
            <option value="" disabled>Select experience</option>
            <option value="Fresher">Fresher</option>
            <option value="1-3 years">1 – 3 years</option>
            <option value="3-5 years">3 – 5 years</option>
            <option value="5-10 years">5 – 10 years</option>
            <option value="10+ years">10+ years</option>
          </select>
          {errors.experience && <p className={errCls}>{errors.experience}</p>}
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="resume" className={labelCls}>Resume (PDF or DOCX, max 2 MB) <span aria-hidden>*</span></label>
          <label
            htmlFor="resume"
            className="flex items-center gap-3 rounded-lg border border-dashed border-slate-300 bg-mist px-4 py-4 text-[14px] text-body transition-colors hover:border-orange-500 hover:text-ink"
          >
            <FileUp className="h-5 w-5 text-orange-600" aria-hidden />
            <span>Attach resume: <strong className="text-ink">Choose file</strong> — PDF / DOCX up to 2 MB</span>
          </label>
          <input id="resume" name="resume" type="file" accept=".pdf,.docx,application/pdf"
            className="mt-2 block w-full text-[13px] text-body file:mr-3 file:rounded-md file:border-0 file:bg-navy-900 file:px-4 file:py-2 file:text-[13px] file:text-white" />
          {errors.resume && <p className={errCls}>{errors.resume}</p>}
        </div>
      </div>

      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="hidden_field">Leave this field empty</label>
        <input id="hidden_field" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input id="c_consent" name="consent" type="checkbox" required
          className="mt-1 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-orange-500" />
        <label htmlFor="c_consent" className="text-[13px] leading-relaxed text-body">
          I consent to Spearhead Security Service processing the personal data in this application for recruitment purposes, in line with the{" "}
          <a href="/privacy-policy" className="font-semibold text-navy-700 underline">Privacy Policy</a>. <span aria-hidden>*</span>
        </label>
      </div>
      {errors.consent && <p className={`mt-1 ${errCls}`}>{errors.consent}</p>}

      <div className="mt-6">
        <button type="submit" disabled={status === "loading"}
          className="btn-orange inline-flex items-center gap-2.5 rounded-md px-8 py-3.5 text-[15px] font-bold disabled:opacity-60 disabled:cursor-wait">
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Submitting…
            </>
          ) : (
            "Submit Application"
          )}
        </button>
      </div>
    </form>
  );
}
