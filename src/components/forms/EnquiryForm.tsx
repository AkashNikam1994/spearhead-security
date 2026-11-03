"use client";

import { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { activeServices } from "@/config/services";

type Status = "idle" | "loading" | "success" | "error";

const facilityTypes = [
  "Corporate office / IT park",
  "Manufacturing / factory",
  "Warehouse / logistics",
  "Residential community",
  "Retail / commercial",
  "Hospital / healthcare",
  "Educational institution",
  "Banking / financial",
  "Hospitality",
  "Other",
];

const labelCls = "block text-[13.5px] font-semibold text-ink mb-1.5";
const inputCls =
  "w-full rounded-lg border border-slate-300 bg-white px-3.5 py-2.5 text-[15px] text-ink placeholder:text-slate-400 focus:border-navy-700";
const errCls = "mt-1 text-[12.5px] font-medium text-red-600";

export default function EnquiryForm({ compact = false }: { compact?: boolean }) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return;
    setStatus("loading");
    setErrors({});

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (res.ok && json.ok) {
        setStatus("success");
        setMessage(json.message ?? "Enquiry received. Our team will contact you.");
        form.reset();
      } else if (json.errors) {
        setStatus("error");
        setMessage("Please correct the highlighted fields and retry.");
        setErrors(json.errors);
      } else {
        setStatus("error");
        setMessage(json.message ?? "Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again or contact us directly.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-8 text-center" role="status">
        <CheckCircle2 className="mx-auto h-12 w-12 text-emerald-600" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-bold text-ink">Thank you — enquiry received.</h3>
        <p className="mx-auto mt-2 max-w-md text-[14.5px] text-body">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 inline-flex rounded-md border border-navy-900/30 px-5 py-2.5 text-[14px] font-bold text-navy-900 hover:border-orange-500 hover:text-orange-600"
        >
          Submit another enquiry
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {status === "error" && message && !Object.keys(errors).length && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
          <p className="text-[14px] text-red-700">{message}</p>
        </div>
      )}
      {Object.keys(errors).length > 0 && (
        <div className="mb-5 flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4" role="alert">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" aria-hidden />
          <p className="text-[14px] text-red-700">{message || "Please correct the highlighted fields."}</p>
        </div>
      )}

      <div className={`grid gap-5 ${compact ? "" : "sm:grid-cols-2"}`}>
        <div>
          <label htmlFor="full_name" className={labelCls}>Full name <span aria-hidden>*</span></label>
          <input id="full_name" name="full_name" type="text" autoComplete="name" required aria-invalid={!!errors.full_name}
            className={`${inputCls} ${errors.full_name ? "border-red-400" : ""}`} placeholder="Your name" />
          {errors.full_name && <p className={errCls}>{errors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="company_name" className={labelCls}>Company name <span aria-hidden>*</span></label>
          <input id="company_name" name="company_name" type="text" autoComplete="organization" required aria-invalid={!!errors.company_name}
            className={`${inputCls} ${errors.company_name ? "border-red-400" : ""}`} placeholder="Your organisation" />
          {errors.company_name && <p className={errCls}>{errors.company_name}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelCls}>Business email <span aria-hidden>*</span></label>
          <input id="email" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email}
            className={`${inputCls} ${errors.email ? "border-red-400" : ""}`} placeholder="name@company.com" />
          {errors.email && <p className={errCls}>{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className={labelCls}>Contact number <span aria-hidden>*</span></label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required aria-invalid={!!errors.phone}
            className={`${inputCls} ${errors.phone ? "border-red-400" : ""}`} placeholder="+91 ..." />
          {errors.phone && <p className={errCls}>{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="city" className={labelCls}>City / location <span aria-hidden>*</span></label>
          <input id="city" name="city" type="text" required aria-invalid={!!errors.city}
            className={`${inputCls} ${errors.city ? "border-red-400" : ""}`} placeholder="City" />
          {errors.city && <p className={errCls}>{errors.city}</p>}
        </div>
        <div>
          <label htmlFor="service_type" className={labelCls}>Service required <span aria-hidden>*</span></label>
          <select id="service_type" name="service_type" required aria-invalid={!!errors.service_type} defaultValue=""
            className={`${inputCls} ${errors.service_type ? "border-red-400" : ""}`}>
            <option value="" disabled>Select a service</option>
            {activeServices.map((s) => (
              <option key={s.slug} value={s.title}>{s.title}</option>
            ))}
            <option value="Not sure — need guidance">Not sure — need guidance</option>
          </select>
          {errors.service_type && <p className={errCls}>{errors.service_type}</p>}
        </div>
        <div>
          <label htmlFor="facility_type" className={labelCls}>Type of facility <span aria-hidden>*</span></label>
          <select id="facility_type" name="facility_type" required aria-invalid={!!errors.facility_type} defaultValue=""
            className={`${inputCls} ${errors.facility_type ? "border-red-400" : ""}`}>
            <option value="" disabled>Select facility</option>
            {facilityTypes.map((f) => <option key={f} value={f}>{f}</option>)}
          </select>
          {errors.facility_type && <p className={errCls}>{errors.facility_type}</p>}
        </div>
        <div>
          <label htmlFor="manpower_requirement" className={labelCls}>
            Estimated personnel requirement <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <input id="manpower_requirement" name="manpower_requirement" type="text" className={inputCls}
            placeholder="e.g. 4 guards, 2 shifts" />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelCls}>
            Message <span className="font-normal text-slate-400">(optional)</span>
          </label>
          <textarea id="message" name="message" rows={4} maxLength={2000} className={inputCls}
            placeholder="Tell us briefly about your site and requirement…" />
        </div>
      </div>

      {/* Honeypot — hidden from users, catches bots */}
      <div className="absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="mt-6 flex items-start gap-3">
        <input id="consent" name="consent" type="checkbox" required aria-invalid={!!errors.consent}
          className="mt-1 h-4 w-4 rounded border-slate-300 text-navy-900 focus:ring-orange-500" />
        <label htmlFor="consent" className="text-[13px] leading-relaxed text-body">
          I consent to Spearhead Security Service processing the personal data in this enquiry for the purpose of responding to my request, in line with the{" "}
          <a href="/privacy-policy" className="font-semibold text-navy-700 underline">Privacy Policy</a>. <span aria-hidden>*</span>
        </label>
      </div>
      {errors.consent && <p className={`mt-1 ${errCls}`}>{errors.consent}</p>}

      <div className="mt-6">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn-orange inline-flex items-center gap-2.5 rounded-md px-8 py-3.5 text-[15px] font-bold disabled:opacity-60 disabled:cursor-wait"
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden /> Submitting…
            </>
          ) : (
            "Submit Enquiry"
          )}
        </button>
      </div>
    </form>
  );
}
