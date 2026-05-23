import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import { Breadcrumb } from "@/components/site/Breadcrumb";
import teamImg from "@/assets/about-team.jpg";
import livingImg from "@/assets/hero-living.jpg";
import smartImg from "@/assets/lifestyle-smart.jpg";
import { Compass, Heart, ShieldCheck, Sparkles, ArrowUpRight, Phone } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — terencelink" },
      { name: "description", content: "terencelink is an independent third-party service assistance startup, launched in 2025, offering general guidance for internet, cable TV and streaming services." },
      { property: "og:title", content: "About — terencelink" },
      { property: "og:description", content: "Independent third-party assistance startup launched in 2025." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  { icon: Compass, t: "Independent", c: "We do not represent or partner with any internet, cable or streaming provider." },
  { icon: Heart, t: "Human", c: "Real advisors on the phone, every call answered by a person." },
  { icon: ShieldCheck, t: "Transparent", c: "Clear disclosures, separate service fees and a published refund window." },
  { icon: Sparkles, t: "Educational", c: "Plain-language explanations designed to leave you more confident, not less." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="About us"
        title="A newly launched, independent assistance platform."
        subtitle="terencelink is an independent third-party service assistance provider offering general guidance related to internet, broadband, Wi-Fi and cable TV services."
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <img src={livingImg} alt="Modern home" loading="lazy" width={1600} height={1200} className="rounded-[2rem] shadow-elegant hairline w-full h-[28rem] object-cover" />
            <div className="hidden lg:block absolute -bottom-10 -right-10 bg-white rounded-[1.5rem] p-6 shadow-soft hairline w-72">
              <p className="font-display text-3xl text-gradient-violet">2025</p>
              <p className="mt-1 text-sm text-muted-foreground">Founded this year as an independent assistance startup.</p>
            </div>
          </div>
          <div className="lg:col-span-6">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">Our story</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Built around clarity, not commissions.</h2>
            <div className="mt-6 space-y-5 text-muted-foreground leading-relaxed">
              <p>terencelink was founded in 2025 with a simple frustration in mind: choosing internet, cable or streaming services often feels confusing, and most help available is tied to someone trying to sell you a plan.</p>
              <p>We assist users by providing informational support, helping them understand service options, and offering general guidance on common connectivity-related concerns. We do not provide internet or cable services directly, and we do not represent any telecom, internet or cable TV provider.</p>
              <p>Our focus is transparency, clarity and responsible service assistance — backed by a published refund window and human advisors on the phone.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/60">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">What we value</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">Principles we keep coming back to.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <article key={v.t} className={`rounded-[1.5rem] bg-white hairline p-7 shadow-soft ${i % 2 === 1 ? "lg:translate-y-6" : ""}`}>
                <span className="h-11 w-11 rounded-xl bg-gradient-violet grid place-items-center text-white shadow-violet"><v.icon className="h-5 w-5" /></span>
                <h3 className="mt-5 font-display text-2xl">{v.t}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{v.c}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">The team</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Real advisors. On the phone. Every hour.</h2>
            <p className="mt-5 text-muted-foreground leading-relaxed max-w-lg">
              Every call to terencelink is greeted with: "Thank you for calling terencelink, an independent service assistance platform." No impersonation, no provider scripts — just a person ready to help you think through your situation.
            </p>
            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              {[{ k: "2025", v: "Year founded" }, { k: "Human", v: "Phone advisors" }, { k: "7–15d", v: "Refund window" }].map((s) => (
                <div key={s.v}>
                  <p className="font-display text-3xl">{s.k}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">{s.v}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-6 order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src={teamImg} alt="Independent advisory team" loading="lazy" width={1600} height={1100} className="rounded-[1.5rem] h-72 object-cover shadow-soft hairline col-span-2" />
            <img src={smartImg} alt="Connected home" loading="lazy" width={1200} height={1400} className="rounded-[1.5rem] h-56 object-cover shadow-soft hairline" />
            <img src={livingImg} alt="Modern home" loading="lazy" width={1600} height={1200} className="rounded-[1.5rem] h-56 object-cover shadow-soft hairline" />
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="font-display text-4xl sm:text-5xl text-balance">Independent help, one call away.</h2>
          <p className="mt-5 text-muted-foreground max-w-2xl mx-auto">
            terencelink is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband or cable TV service provider.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="tel:+18887659560" className="inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white px-6 py-3.5 text-sm font-semibold shadow-violet">
              <Phone className="h-4 w-4" /> (888) 765-9560
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white hairline px-6 py-3.5 text-sm font-semibold hover:bg-secondary">
              Contact us <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
