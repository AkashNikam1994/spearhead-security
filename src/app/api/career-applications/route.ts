import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { saveRecord, saveResume } from "@/lib/store";

export const runtime = "nodejs";

const MAX_RESUME_BYTES = 2 * 1024 * 1024; // 2 MB
const ALLOWED_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "", // some browsers send empty for .docx-drag; fall back to extension check
]);

function validate(fields: Record<string, string>, resume: File | null) {
  const errors: Record<string, string> = {};

  const name = (fields.full_name ?? "").trim();
  if (!name) errors.full_name = "Full name is required.";
  else if (name.length > 120) errors.full_name = "Name must be under 120 characters.";

  const email = (fields.email ?? "").trim();
  if (!email) errors.email = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200)
    errors.email = "Enter a valid email address.";

  const phone = (fields.phone ?? "").replace(/[\s\-()+]/g, "");
  if (!phone) errors.phone = "Mobile number is required.";
  else if (!/^\+?\d{7,15}$/.test(phone)) errors.phone = "Enter a valid mobile number.";

  const location = (fields.current_location ?? "").trim();
  if (!location) errors.current_location = "Current location is required.";
  else if (location.length > 120) errors.current_location = "Location must be under 120 characters.";

  const position = (fields.preferred_position ?? "").trim();
  if (!position) errors.preferred_position = "Select your preferred position.";
  else if (position.length > 80) errors.preferred_position = "Position must be under 80 characters.";

  const experience = (fields.experience ?? "").trim();
  if (!experience) errors.experience = "Select your experience.";

  if (!resume || resume.size === 0) errors.resume = "Please attach your resume (PDF or DOCX, max 2 MB).";
  else {
    if (resume.size > MAX_RESUME_BYTES) errors.resume = "Resume must be under 2 MB.";
    const ext = resume.name.toLowerCase().split(".").pop() ?? "";
    const typeOk = ALLOWED_TYPES.has(resume.type);
    if (!typeOk && !["pdf", "docx", "doc"].includes(ext)) errors.resume = "Resume must be a PDF or DOCX file.";
  }

  if (!fields.consent) errors.consent = "Consent is required to submit your application.";
  return errors;
}

export async function POST(req: Request) {
  const { allowed } = rateLimit(`application:${clientIp(req)}`);
  if (!allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  if ((form.get("website") as string | null)?.trim()) {
    return NextResponse.json({ ok: true, message: "Application received." });
  }

  const fields = Object.fromEntries(form.entries()) as Record<string, string>;
  const resume = form.get("resume") as File | null;
  const resumeObj = resume instanceof File ? resume : null;

  const errors = validate(fields, resumeObj);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  let resumePath: string | null = null;
  if (resumeObj) {
    try {
      const bytes = Buffer.from(await resumeObj.arrayBuffer());
      resumePath = await saveResume(resumeObj.name, bytes);
    } catch {
      return NextResponse.json(
        { ok: false, message: "Resume upload failed. Please try again." },
        { status: 500 }
      );
    }
  }

  await saveRecord("applications", {
    id: crypto.randomUUID(),
    full_name: fields.full_name.trim(),
    email: fields.email.trim().toLowerCase(),
    phone: fields.phone.trim(),
    current_location: fields.current_location.trim(),
    preferred_position: fields.preferred_position.trim(),
    experience: fields.experience.trim(),
    resume_path: resumePath,
    resume_name: resumeObj?.name ?? null,
    resume_size: resumeObj?.size ?? null,
    consent: true,
    application_status: "new",
    created_at: new Date().toISOString(),
  });

  return NextResponse.json({
    ok: true,
    message:
      "Thank you for applying to Spearhead Security Service. Your application has been recorded and our recruitment team will contact you if your profile matches an opening.",
  });
}
