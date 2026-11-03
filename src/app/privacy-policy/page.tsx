import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Privacy Policy",
  description: "How Spearhead Security Service handles personal data submitted through this website.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        image="/images/home/hero.jpg"
        compact
        trail={[{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy-policy" }]}
      />
      <section className="section">
        <div className="container-site max-w-3xl space-y-6 text-[15px] leading-relaxed text-body">
          <div className="rounded-xl border border-orange-500/40 bg-orange-100/50 p-5 text-[13.5px] text-ink">
            <strong>Editable template:</strong> this policy must be reviewed and adapted with the
            company&rsquo;s legal counsel before publishing. It describes general practice only and is
            not legal advice.
          </div>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">1. Information we collect</h2>
          <p>
            Through this website we collect only the information you choose to submit: security
            enquiry details (name, company, contact details, city, service and facility
            information, message) and career application details (name, contact details,
            experience, resume).
          </p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">2. How we use your information</h2>
          <p>
            Enquiry data is used solely to respond to your request and to prepare a security
            proposal. Application data is used solely for recruitment evaluation. We do not sell
            or share personal data with third parties outside of what is required for service
            delivery or by applicable law.
          </p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">3. Storage and security</h2>
          <p>
            Submissions are stored on secured systems with access restricted to authorised
            company personnel. Resume files are stored outside public web directories and are
            never publicly accessible.
          </p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">4. Retention</h2>
          <p>
            Enquiry records are retained for as long as needed to serve your request and for
            operational record-keeping. Application records are retained for the duration of the
            application process and as required by applicable regulations.
          </p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">5. Your rights</h2>
          <p>
            You may request access to, correction of, or deletion of your personal data by
            writing to us. We respond within a reasonable period.
          </p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">6. Cookies</h2>
          <p>See our Cookie Policy for details of any cookies used on this website.</p>

          <h2 className="pt-2 font-heading text-xl font-bold text-ink">7. Contact</h2>
          <p>
            For privacy questions, write to{" "}
            <a href="mailto:privacy@spearheadsecurity.in" className="font-semibold text-navy-700 underline">
              privacy@spearheadsecurity.in
            </a>{" "}
            or use the address on our Contact page.
          </p>
        </div>
      </section>
    </>
  );
}
