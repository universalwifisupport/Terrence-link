import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Plus, Minus, Phone, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { faqSchema } from "@/lib/schema";

export const Route = createFileRoute("/faq")({
  head: () => {
    const schema = faqSchema(faqs.map(f => ({ question: f.q, answer: f.a })));
    return {
      meta: [
        { title: "FAQ — Terencelink" },
        { name: "description", content: "Answers to common questions about Terencelink, an independent third-party service assistance platform for internet, cable TV and streaming guidance." },
        { property: "og:title", content: "FAQ — Terencelink" },
        { property: "og:description", content: "Common questions about our independent assistance services." },
        { property: "og:url", content: "https://terencelink.com/faq" },
      ],
      links: [{ rel: "canonical", href: "/faq" }],
      scripts: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(schema),
        },
      ],
    };
  },
  component: FaqPage,
});

const faqs = [
  { q: "Are you an official cable or internet service provider?", a: "No. Terencelink is an independent third-party assistance platform. We are not an Internet Service Provider (ISP) and we are not affiliated, authorized or endorsed by any cable, internet or streaming provider." },
  { q: "Do you sell internet, cable or streaming plans?", a: "No. We provide guidance and informational support only. Any subscription is purchased directly from the provider of your choice." },
  { q: "Do you charge for your services?", a: "Yes. Our independent service fees are separate from any charges from your provider and are explained clearly before any assistance begins." },
  { q: "Will I still be billed by my service provider?", a: "Yes. Any billing relationship you have with your provider remains entirely unchanged. We never bill you on a provider's behalf." },
  { q: "Do you need my account passwords or sensitive information?", a: "No. We never request provider passwords or sensitive credentials. If anyone claims to represent Terencelink and asks for passwords, please decline and contact us." },
  { q: "Which providers do you support?", a: "We may reference multiple providers for general informational and educational purposes only. We have no affiliation, sponsorship or endorsement from any provider." },
  { q: "Are your services refundable?", a: "Yes. Refund requests may be submitted within 7 to 15 days of service purchase, subject to the terms outlined in our Refund Policy. Eligibility depends on the service type and whether assistance has already been delivered." },
  { q: "How will my call be answered?", a: "Every call is greeted with: 'Thank you for calling Terencelink, an independent service assistance platform.' We never impersonate a provider." },
  { q: "Is my data safe?", a: "Yes. Our site is served over HTTPS and we only collect information necessary to help you. See our Privacy Policy for full details." },
];

function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="FAQ"
        title="Common questions, plainly answered."
        subtitle="A short, honest reference so you know exactly what to expect from an independent assistance platform."
      />
      <section className="pb-24">
        <div className="mx-auto max-w-4xl px-6">
          <div className="divide-y divide-border bg-white rounded-[1.75rem] hairline shadow-soft overflow-hidden">
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 px-7 py-6 text-left hover:bg-secondary/40 transition"
                  >
                    <span className="font-display text-lg sm:text-xl">{f.q}</span>
                    <span className="h-9 w-9 rounded-full grid place-items-center bg-gradient-violet text-white shrink-0">
                      {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                    </span>
                  </button>
                  <div className={`grid transition-all duration-500 ease-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                    <div className="overflow-hidden">
                      <p className="px-7 pb-6 text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 rounded-[1.75rem] bg-gradient-violet p-10 text-white text-center shadow-elegant">
            <h2 className="font-display text-3xl sm:text-4xl">Didn't find what you needed?</h2>
            <p className="mt-3 text-white/85 max-w-lg mx-auto">Speak with an independent advisor — there's no obligation and no provider scripts.</p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="tel:+18887659560" className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--violet)] px-6 py-3 text-sm font-semibold">
                <Phone className="h-4 w-4" /> (888) 765-9560
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/15 text-white border border-white/30 px-6 py-3 text-sm font-semibold">
                Request help <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
