import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Terms & Conditions",
  description: "Terms of use for the Spearhead Security website.",
  path: "/terms",
});

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        image="/images/pages/contact.png"
        compact
        trail={[{ name: "Home", path: "/" }, { name: "Website Terms", path: "/terms" }]}
      />
      <section className="section">
        <div className="container-site max-w-3xl space-y-6 text-[15px] leading-relaxed text-body">
          <div className="rounded-xl border border-gold-500/40 bg-gold-100/50 p-5 text-[13.5px] text-ink">
            <strong>Editable template:</strong> to be reviewed and completed with legal counsel
            before final publication.
          </div>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">1. Use of this website</h2>
          <p>
            This website provides information about Spearhead Security&rsquo;s services. Content is for
            general information and does not constitute a contractual offer.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">2. Service descriptions</h2>
          <p>
            Service pages describe typical scope and methodology. Actual deployments are
            documented in individual service agreements with each client.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">3. Intellectual property</h2>
          <p>
            Brand names, logos, text and graphics on this site are the property of Spearhead
            Security and may not be reproduced without written permission.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">4. Liability</h2>
          <p>
            While we aim to keep information current, we make no representation that all details are
            complete or accurate at all times, and we accept no liability for use of this website
            outside agreed service contracts.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">5. Applicable law</h2>
          <p>
            These terms are to be interpreted under applicable Indian law (jurisdiction to be
            confirmed by the company).
          </p>
        </div>
      </section>
    </>
  );
}
