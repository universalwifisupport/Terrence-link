import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Terencelink" },
      { name: "description", content: "How Terencelink collects, uses and protects your information as an independent third-party service assistance provider." },
      { property: "og:url", content: "https://terencelink.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHeader eyebrow="Legal" title="Privacy Policy" subtitle="What we collect, how we use it and the choices you have." />
      <section className="pb-24">
        <article className="mx-auto max-w-3xl px-6 space-y-6 text-foreground/85 leading-relaxed">
          <p>terencelink is an independent third-party service assistance startup. This policy describes how we handle information when you visit our website or contact us for assistance.</p>

          <h2 className="font-display text-2xl mt-10">Information we collect</h2>
          <p>We collect only what we need to assist you: your name, contact details, ZIP code and a description of how we can help. We do not request provider passwords or sensitive credentials at any time.</p>

          <h2 className="font-display text-2xl">How we use information</h2>
          <p>Information is used solely to respond to your request, deliver independent guidance and follow up on assistance you've requested. We do not sell personal information.</p>

          <h2 className="font-display text-2xl">Security</h2>
          <p>Our website is served over HTTPS. We apply reasonable administrative and technical safeguards to protect your information from unauthorized access.</p>

          <h2 className="font-display text-2xl">Cookies</h2>
          <p>We use limited cookies for basic site analytics and to remember your preferences. You can control cookies through your browser settings.</p>

          <h2 className="font-display text-2xl">Your rights</h2>
          <p>You may request access to or deletion of the personal information we hold about you at any time by emailing support@terencelink.com.</p>

          <h2 className="font-display text-2xl">Contact</h2>
          <p>terencelink · 30 N Gould St, Sheridan, WY 82801 · support@terencelink.com</p>
        </article>
      </section>
    </SiteLayout>
  );
}
