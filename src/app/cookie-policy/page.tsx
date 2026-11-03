import { PageHero } from "@/components/ui/PageHero";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Cookie Policy",
  description: "How cookies are used on the Spearhead Security Service website.",
  path: "/cookie-policy",
});

export default function CookiePolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Cookie Policy"
        image="/images/home/hero.jpg"
        compact
        trail={[{ name: "Home", path: "/" }, { name: "Cookie Policy", path: "/cookie-policy" }]}
      />
      <section className="section">
        <div className="container-site max-w-3xl space-y-6 text-[15px] leading-relaxed text-body">
          <div className="rounded-xl border border-orange-500/40 bg-orange-100/50 p-5 text-[13.5px] text-ink">
            <strong>Editable template:</strong> to be adapted if analytics or marketing cookies are
            introduced. Currently the site sets no persistent tracking cookies.
          </div>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">Essential cookies</h2>
          <p>
            This website uses no persistent third-party tracking cookies. Functionality such as
            form submission operates without requiring cookies.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">Third-party embeds</h2>
          <p>
            If a Google Maps embed is activated on the Contact page, Google may set cookies when
            you interact with that map. This is governed by Google&rsquo;s policies.
          </p>
          <h2 className="pt-2 font-heading text-xl font-bold text-ink">Analytics</h2>
          <p>
            No analytics scripts are included in the current build. If analytics are introduced,
            this policy will be updated first.
          </p>
        </div>
      </section>
    </>
  );
}
