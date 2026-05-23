import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/refund")({
  head: () => ({
    meta: [
      { title: "Refund Policy — Terencelink" },
      { name: "description", content: "Refund requests can be submitted within 7 to 15 days. Read the Terencelink Refund Policy for eligibility details." },
      { property: "og:title", content: "Refund Policy — Terencelink" },
      { property: "og:url", content: "https://terencelink.com/refund" },
    ],
    links: [{ rel: "canonical", href: "/refund" }],
  }),
  component: RefundPage,
});

function RefundPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Policy" title="Refund Policy" subtitle="A clear, honest refund window for assistance fees paid to Terencelink." />
      <section className="pb-24">
        <article className="mx-auto max-w-3xl px-6 prose-content space-y-6 text-foreground/85 leading-relaxed">
          <p>terencelink is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet or streaming service provider. This Refund Policy applies only to fees paid to terencelink for our independent assistance — it does not apply to charges billed by any third-party provider.</p>

          <h2 className="font-display text-2xl mt-10">1. Refund window</h2>
          <p>Refund requests can be submitted within <strong>7 to 15 days</strong> of service purchase, depending on the type of assistance provided. Please review the eligibility section below for full details.</p>

          <h2 className="font-display text-2xl">2. Eligibility</h2>
          <p>Refund eligibility depends on:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>The type of assistance requested and the time elapsed since purchase.</li>
            <li>Whether assistance has already been substantially delivered.</li>
            <li>Whether the request is made in good faith and within the stated window.</li>
          </ul>
          <p>We do not offer unconditional refund guarantees. Each request is reviewed individually and in good faith.</p>

          <h2 className="font-display text-2xl">3. How to request a refund</h2>
          <p>Email <a href="mailto:support@terencelink.com" className="text-[color:var(--violet)] underline">support@terencelink.com</a> with your name, the email or phone number used at purchase, and a brief description of the reason for the request.</p>

          <h2 className="font-display text-2xl">4. Provider charges are separate</h2>
          <p>Any subscription, installation, equipment or recurring charges from your internet, cable or streaming provider are governed by that provider's terms. Terencelink cannot refund charges issued by a third party.</p>

          <h2 className="font-display text-2xl">5. Processing time</h2>
          <p>Approved refunds are processed back to the original payment method, typically within 5–10 business days of approval.</p>

          <h2 className="font-display text-2xl">6. Contact</h2>
          <p>terencelink · 30 N Gould St, Sheridan, WY 82801 · support@terencelink.com</p>
        </article>
      </section>
    </SiteLayout>
  );
}
