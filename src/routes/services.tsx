import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import { PageHeader } from "@/components/site/PageHeader";
import fiberImg from "@/assets/service-fiber.jpg";
import tvImg from "@/assets/service-tv.jpg";
import wifiImg from "@/assets/service-wifi.jpg";
import bizImg from "@/assets/service-business.jpg";
import streamImg from "@/assets/lifestyle-stream.jpg";
import smartImg from "@/assets/lifestyle-smart.jpg";
import { Check, Phone, ArrowUpRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "What We Do — Terencelink" },
      { name: "description", content: "Independent third-party assistance for internet, broadband, Wi-Fi, cable TV and streaming setup. Guidance and informational support only." },
      { property: "og:title", content: "What We Do — Terencelink" },
      { property: "og:description", content: "Independent guidance for internet, cable TV, Wi-Fi and streaming services." },
      { property: "og:url", content: "https://terencelink.com/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

const sections = [
  { id: "fiber", title: "Internet & Broadband Guidance", img: fiberImg, copy: "We help you understand fiber, cable and broadband options so you can make an informed decision on your own terms — no upsells, no pressure.", features: ["Plain-language comparisons", "Explanations of speeds and usage", "Help understanding installation steps", "Independent recommendations"] },
  { id: "cable-tv", title: "Cable TV Informational Support", img: tvImg, copy: "Educational support to help you navigate cable TV channels, packages and on-demand basics with confidence.", features: ["Channel & package explanations", "On-demand setup walkthroughs", "Remote and DVR basics", "Provider process guidance"] },
  { id: "wifi", title: "Home Wi-Fi & Connectivity", img: wifiImg, copy: "Practical guidance on routers, mesh placement, dead zones and common Wi-Fi issues — independent of any equipment brand.", features: ["Router placement guidance", "Mesh layout suggestions", "Help diagnosing slow areas", "Connected-device prioritisation tips"] },
  { id: "business", title: "Small Business Connectivity", img: bizImg, copy: "Informational support for small offices weighing connectivity requirements, equipment and provider options.", features: ["Bandwidth planning guidance", "Equipment basics explained", "Provider process navigation", "Independent neutral input"] },
  { id: "streaming", title: "Streaming Setup Guidance", img: streamImg, copy: "Independent assistance with streaming apps, devices and household sharing — so the right thing plays on the right screen.", features: ["App & device setup walkthroughs", "Multi-room sharing basics", "Account profile guidance", "Buffering troubleshooting tips"] },
  { id: "smart", title: "Smart Home Wi-Fi Planning", img: smartImg, copy: "Help thinking through smart-home networks — lights, climate, cameras — without endorsing any specific brand.", features: ["Vendor-neutral planning", "Network segmentation basics", "Voice assistant guidance", "Step-by-step setup support"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="What we do"
        title="Independent guidance for every connected room."
        subtitle="terencelink provides informational support and independent guidance only. We are not an Internet Service Provider and we do not sell internet, cable or streaming plans."
      />

      <div className="mx-auto max-w-7xl px-6 -mt-6 mb-16 flex flex-wrap gap-2 justify-center">
        {sections.map((s) => (
          <a key={s.id} href={`#${s.id}`} className="rounded-full bg-white hairline px-4 py-2 text-xs font-medium hover:bg-secondary transition">
            {s.title}
          </a>
        ))}
      </div>

      <section className="pb-24">
        <div className="mx-auto max-w-7xl px-6 space-y-24">
          {sections.map((s, i) => (
            <article id={s.id} key={s.id} className="grid lg:grid-cols-12 gap-10 items-center scroll-mt-32">
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative">
                  <img src={s.img} alt={s.title} loading="lazy" width={1400} height={1000} className="rounded-[2rem] w-full h-[26rem] object-cover shadow-elegant hairline" />
                  <div className="absolute -bottom-5 -right-5 hidden md:block bg-white rounded-2xl p-4 shadow-soft hairline">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">0{i + 1}</p>
                    <p className="font-display text-xl mt-1">{s.title.split(" ")[0]}</p>
                  </div>
                </div>
              </div>
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">Area 0{i + 1}</span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance leading-[1.05]">{s.title}</h2>
                <p className="mt-5 text-muted-foreground leading-relaxed">{s.copy}</p>
                <ul className="mt-6 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <span className="mt-0.5 h-5 w-5 rounded-full bg-gradient-violet grid place-items-center text-white">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="tel:+18335976839" className="inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white px-5 py-3 text-sm font-semibold shadow-violet">
                    <Phone className="h-4 w-4" /> (833) 597-6839
                  </a>
                  <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white hairline px-5 py-3 text-sm font-semibold hover:bg-secondary">
                    Request help <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mx-auto max-w-5xl px-6 mt-20">
          <p className="text-center text-xs text-muted-foreground leading-relaxed">
            All mentions of brand or provider names anywhere on this site are used strictly for informational purposes only. terencelink is not affiliated with, endorsed by, or sponsored by any cable, internet or streaming service provider.
          </p>
        </div>
      </section>
    </SiteLayout>
  );
}
