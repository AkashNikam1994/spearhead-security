/**
 * Enquiry notification — HTTP-API based so no SDK is required.
 * Configure RESEND_API_KEY + ENQUIRY_NOTICE_EMAIL in .env to enable.
 * Failures never block enquiry storage.
 */
export async function sendEnquiryNotice(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_NOTICE_EMAIL;
  if (!apiKey || !to) return;

  try {
    await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Spearhead Website <onboarding@resend.dev>",
        to: [to],
        subject: `New security enquiry — ${payload.company_name ?? "Website"}`,
        text: Object.entries(payload)
          .map(([k, v]) => `${k}: ${v ?? "—"}`)
          .join("\n"),
      }),
    });
  } catch {
    console.error("[mailer] enquiry notice failed (stored enquiry is unaffected)");
  }
}
