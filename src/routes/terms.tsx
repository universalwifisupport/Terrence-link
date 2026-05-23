import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Terencelink" },
      { name: "description", content: "Terms governing your use of Terencelink, an independent third-party service assistance platform." },
      { property: "og:url", content: "https://terencelink.com/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Terms & Conditions" subtitle="The rules of the road for using our independent assistance services." />
      <section className="pb-24">
        <article className="mx-auto max-w-3xl px-6 space-y-6 text-foreground/85 leading-relaxed">
          <p>By using the Terencelink website or requesting assistance, you agree to these Terms.</p>

          <h2 className="font-display text-2xl mt-10">1. Who we are</h2>
          <p>terencelink is an independent third-party service assistance startup, launched in 2025. We are not affiliated with, endorsed by, or sponsored by any cable, internet or streaming service provider.</p>

          <h2 className="font-display text-2xl">2. Nature of services</h2>
          <p>Our services consist of general guidance and informational support only. We do not sell internet, cable or streaming subscriptions and we make no guaranteed technical outcomes.</p>

          <h2 className="font-display text-2xl">3. Fees</h2>
          <p>Independent assistance fees are separate from any provider charges and are disclosed before assistance begins.</p>

          <h2 className="font-display text-2xl">4. Refunds</h2>
          <p>Refund requests may be submitted within 7 to 15 days. See our <a className="text-[color:var(--violet)] underline" href="/refund">Refund Policy</a> for full eligibility details.</p>

          <h2 className="font-display text-2xl">5. Acceptable use</h2>
          <p>You agree to use our website and services lawfully and not to misuse, attempt to disrupt or attempt to gain unauthorized access to our systems.</p>

          <h2 className="font-display text-2xl">6. Limitation of liability</h2>
          <p>To the maximum extent permitted by law, Terencelink is not liable for indirect, incidental or consequential damages arising from your use of our website or services.</p>

          <h2 className="font-display text-2xl">7. Changes</h2>
          <p>We may update these Terms from time to time. Continued use of our website after changes constitutes acceptance of the updated Terms.</p>

          <h2 className="font-display text-2xl">8. Contact</h2>
          <p>terencelink · 30 N Gould St, Sheridan, WY 82801 · support@terencelink.com</p>
        </article>
      </section>
    </SiteLayout>
  );
}
