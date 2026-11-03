import { NextResponse } from "next/server";
import { rateLimit, clientIp } from "@/lib/rate-limit";
import { saveRecord } from "@/lib/store";
import { sendEnquiryNotice } from "@/lib/mailer";

export const runtime = "nodejs";

type Fields = Record<string, string>;

function validate(f: Fields): Record<string, string> {
  const errors: Record<string, string> = {};
  const req = (k: string, msg: string) => { if (!f[k]?.trim()) errors[k] = msg; };
  const max = (k: string, n: number, label: string) => {
    if ((f[k]?.length ?? 0) > n) errors[k] = `${label} must be under ${n} characters.`;
  };

  max("full_name", 120, "Full name");
  max("company_name", 160, "Company name");
  max("email", 200, "Email");
  max("phone", 20, "Phone");
  max("city", 100, "City");
  max("manpower_requirement", 120, "Requirement");
  max("message", 2000, "Message");

  req("full_name", "Full name is required.");
  req("company_name", "Company name is required.");
  req("city", "City is required.");
  req("service_type", "Select the service you need.");
  req("facility_type", "Select your facility type.");

  const email = f.email?.trim() ?? "";
  if (!email) req("email", "Business email is required.");
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.email = "Enter a valid email address.";

  const phone = (f.phone ?? "").replace(/[\s\-()+]/g, "");
  if (!phone) req("phone", "Contact number is required.");
  else if (!/^\+?\d{7,15}$/.test(phone)) errors.phone = "Enter a valid contact number.";

  if (!f.consent) errors.consent = "Consent is required to process your enquiry.";
  return errors;
}

export async function POST(req: Request) {
  // rate limiting
  const { allowed } = rateLimit(`enquiry:${clientIp(req)}`);
  if (!allowed) {
    return NextResponse.json(
      { ok: false, message: "Too many submissions. Please try again later or contact us by phone." },
      { status: 429, headers: { "Retry-After": "600" } }
    );
  }

  let body: Fields & { website?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid request." }, { status: 400 });
  }

  // honeypot — bots fill it, humans can't see it
  if (body.website?.trim()) {
    return NextResponse.json({ ok: true, message: "Enquiry received." }, { status: 200 });
  }

  const errors = validate(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  const record = {
    id: crypto.randomUUID(),
    full_name: body.full_name.trim(),
    company_name: body.company_name.trim(),
    email: body.email.trim().toLowerCase(),
    phone: body.phone.trim(),
    city: body.city.trim(),
    service_type: body.service_type.trim(),
    facility_type: body.facility_type.trim(),
    manpower_requirement: body.manpower_requirement?.trim() || null,
    message: body.message?.trim() || null,
    consent: true,
    status: "new",
    source: body.compact ? "callback" : "website",
    created_at: new Date().toISOString(),
  };

  await saveRecord("enquiries", record);
  void sendEnquiryNotice(record); // fire-and-forget; never blocks storage

  return NextResponse.json({
    ok: true,
    message:
      "Thank you for contacting Spearhead Security Service. Your enquiry has been recorded and our team will get in touch with you.",
  });
}
