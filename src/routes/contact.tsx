import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Phone, Mail, MapPin, Clock, Search } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — terencelink" },
      { name: "description", content: "Speak with a terencelink advisor for guidance on internet, cable TV and streaming services." },
      { property: "og:title", content: "Contact — terencelink" },
      { property: "og:description", content: "Get in touch with an independent third-party advisor." },
      { property: "og:url", content: "https://terencelink.com/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [zip, setZip] = useState("");
  const [zipResult, setZipResult] = useState<string | null>(null);

  const checkZip = (e: React.FormEvent) => {
    e.preventDefault();
    if (!/^\d{5}$/.test(zip)) {
      setZipResult("Please enter a valid 5-digit ZIP code.");
      return;
    }
    setZipResult(`Thanks — an independent advisor can discuss general guidance for the ${zip} area. Provider availability is confirmed directly with the provider.`);
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Contact"
        title="Speak with an independent advisor."
        subtitle="Tell us a little about your situation and we'll provide general informational guidance — at no obligation."
      />

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 space-y-6">
            {[
              { icon: Phone, label: "Call us", value: "(833) 597-6839", href: "tel:+18335976839" },
              { icon: Mail, label: "Email", value: "support@terencelink.com", href: "mailto:support@terencelink.com" },
              { icon: MapPin, label: "Office", value: "30 N Gould St, Sheridan, WY 82801", href: "#" },
              { icon: Clock, label: "Hours", value: "Mon–Sun · 7am – 11pm ET", href: "#" },
            ].map((c) => (
              <a key={c.label} href={c.href} className="flex items-start gap-4 rounded-[1.5rem] bg-white hairline p-6 shadow-soft hover:shadow-elegant transition">
                <span className="h-11 w-11 rounded-xl bg-gradient-violet grid place-items-center text-white shadow-violet">
                  <c.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{c.label}</p>
                  <p className="mt-1 font-display text-xl">{c.value}</p>
                </div>
              </a>
            ))}

            <form onSubmit={checkZip} className="rounded-[1.5rem] bg-gradient-soft hairline p-6 shadow-soft">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">Service area</p>
              <h3 className="mt-2 font-display text-2xl">See if we can help in your area.</h3>
              <div className="mt-4 flex gap-2">
                <input value={zip} onChange={(e) => setZip(e.target.value)} maxLength={5} placeholder="Enter ZIP code" className="flex-1 rounded-full bg-white border border-border px-4 py-3 text-sm focus:outline-none focus:border-[color:var(--violet)]" />
                <button className="rounded-full bg-gradient-violet text-white px-5 py-3 text-sm font-semibold inline-flex items-center gap-2 shadow-violet">
                  <Search className="h-4 w-4" /> Check
                </button>
              </div>
              {zipResult && <p className="mt-3 text-sm text-foreground/80">{zipResult}</p>}
            </form>

            <div className="rounded-[1.5rem] bg-secondary/60 hairline p-6 text-xs text-muted-foreground leading-relaxed">
              terencelink is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="lg:col-span-7 glass hairline rounded-[2rem] p-8 sm:p-10 shadow-elegant">
            <h3 className="font-display text-3xl">Request independent help</h3>
            <p className="mt-1 text-sm text-muted-foreground">We respond within one business hour during opening times.</p>
            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <Field label="Full name" required><input required maxLength={100} className="input" placeholder="Your name" /></Field>
              <Field label="Phone number" required><input required type="tel" maxLength={20} className="input" placeholder="(555) 000-0000" /></Field>
              <Field label="Email" required><input required type="email" maxLength={255} className="input" placeholder="you@home.com" /></Field>
              <Field label="ZIP code" required><input required maxLength={10} className="input" placeholder="10128" /></Field>
              <div className="sm:col-span-2">
                <Field label="How can we assist?" required>
                  <textarea required maxLength={1000} rows={5} className="input resize-none" placeholder="Tell us about your home, what you're trying to figure out and how we can help." />
                </Field>
              </div>
            </div>
            <button className="mt-7 w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-violet text-white px-7 py-3.5 text-sm font-semibold hover:shadow-violet transition">
              Send request
            </button>
          </form>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          border-radius: 9999px;
          background: white;
          border: 1px solid var(--border);
          padding: 0.85rem 1.1rem;
          font-size: 0.9rem;
          outline: none;
          transition: border-color .2s;
        }
        .input:focus { border-color: var(--violet); }
        textarea.input { border-radius: 1.25rem; }
      `}</style>
    </SiteLayout>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground font-semibold">{label}{required && " *"}</span>
      <div className="mt-2">{children}</div>
    </label>
  );
}
