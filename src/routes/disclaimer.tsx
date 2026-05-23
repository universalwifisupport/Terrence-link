import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — terencelink" },
      { name: "description", content: "terencelink is an independent third-party service assistance provider and is not affiliated with any internet, broadband, cable TV or streaming service provider." },
      { property: "og:title", content: "Disclaimer — terencelink" },
      { property: "og:url", content: "https://terencelink.com/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Disclaimer" subtitle="Full transparency on who we are — and who we are not." />
      <section className="pb-24">
        <article className="mx-auto max-w-3xl px-6 space-y-6 text-foreground/85 leading-relaxed">
          <div className="rounded-2xl border border-[color:var(--violet)]/25 bg-[color:var(--violet)]/5 p-6 text-sm">
            <p className="font-semibold text-[color:var(--violet)] uppercase tracking-widest text-xs">Important Disclosure</p>
            <p className="mt-2">
              <strong>terencelink is a third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any internet, cable, or service provider. We do not sell services, modify provider accounts, or represent any service provider. Brand names, if mentioned, are used strictly for informational purposes only. All trademarks belong to their respective owners.
            </p>
          </div>

          <h2 className="font-display text-2xl mt-10">No service provision</h2>
          <p>Terencelink does not sell internet, cable or streaming subscriptions. We do not provide telecom services and we do not modify any account, billing, equipment or settings on behalf of a provider. We do not represent or speak on behalf of any provider, and we make no guaranteed technical fixes.</p>

          <h2 className="font-display text-2xl">Informational only</h2>
          <p>Content on this website and the guidance provided by our advisors is offered for general informational and educational purposes only. It does not constitute professional, legal or financial advice and should not be relied upon as a substitute for direct support from your service provider.</p>

          <h2 className="font-display text-2xl">Assistance fees</h2>
          <p>Any fees charged by Terencelink are for our third-party assistance services only and are separate from any charges from your internet, cable or streaming provider. Your billing relationship with your provider remains entirely unchanged.</p>

          <h2 className="font-display text-2xl">No password requests</h2>
          <p>Terencelink will never request your provider passwords or sensitive account credentials. If anyone claims to represent us and asks for such information, please decline and contact us directly.</p>

          <h2 className="font-display text-2xl">Brand & trademark references</h2>
          <p>Any reference to a provider, brand name, product or trademark anywhere on this website is used solely for descriptive, informational and identification purposes. Such references do not imply any affiliation, sponsorship, endorsement or partnership between Terencelink and the brand owners. All trademarks remain the property of their respective owners.</p>

          <h2 className="font-display text-2xl">External links</h2>
          <p>Our website may contain links to third-party websites. These links are provided for convenience only. Terencelink does not endorse and is not responsible for the content, privacy practices, or availability of those websites.</p>

          <h2 className="font-display text-2xl">Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Terencelink will not be liable for any indirect, incidental, special, consequential or punitive damages arising out of or in connection with your use of this website or our assistance services.</p>

          <h2 className="font-display text-2xl">Contact</h2>
          <p>terencelink · 30 N Gould St, Sheridan, WY 82801 · support@terencelink.com</p>
        </article>
      </section>
    </SiteLayout>
  );
}
