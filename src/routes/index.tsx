import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/Layout";
import heroImg from "@/assets/hero-living.jpg";
import workImg from "@/assets/lifestyle-work.jpg";
import smartImg from "@/assets/lifestyle-smart.jpg";
import streamImg from "@/assets/lifestyle-stream.jpg";
import ctaImg from "@/assets/cta-home.jpg";
import {
  ArrowUpRight, Phone, Wifi, Tv, Cable, MonitorPlay, ShieldCheck, Headphones,
  BadgeCheck, Quote, Check, X, LifeBuoy, Compass, Activity, Signal, Star, Users, Clock, Globe,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Terencelink — Internet & Cable Service Assistance" },
      { name: "description", content: "Terencelink offers third-party guidance and informational support for internet, broadband, Wi-Fi and cable TV services." },
      { property: "og:title", content: "Terencelink — Internet & Cable Service Assistance" },
      { property: "og:description", content: "Third-party guidance for internet, broadband, Wi-Fi and cable TV services." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <Lifestyle />
      <WhatWeDo />
      <WhatWeDoNot />
      <HowItWorks />
      <Testimonials />
      <FinalCta />
    </SiteLayout>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-36 pb-16 sm:pb-24">
      {/* base */}
      <div className="absolute inset-0 bg-gradient-soft" />
      <div className="absolute -top-32 right-1/3 h-[28rem] w-[28rem] rounded-full bg-[color:var(--violet)]/20 blur-[120px]" />
      <div className="absolute bottom-0 left-1/4 h-[24rem] w-[24rem] rounded-full bg-[color:var(--magenta)]/15 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* vertical side label */}
        <div className="hidden xl:flex absolute left-2 top-44 -rotate-90 origin-left items-center gap-3 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
          <span className="h-px w-10 bg-foreground/40" /> Terencelink · Est. 2025
        </div>

        {/* bento grid */}
        <div className="grid grid-cols-12 gap-4 sm:gap-5 auto-rows-[minmax(0,auto)]">
          {/* HEADLINE TILE */}
          <div className="col-span-12 lg:col-span-8 lg:row-span-2 relative rounded-[2rem] bg-white hairline shadow-elegant p-7 sm:p-10 md:p-12 overflow-hidden">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-[color:var(--violet)]/15 blur-3xl" />
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-foreground/70 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" /> Advisors online · Avg. wait 28s
            </span>
            <h1 className="reveal mt-6 font-display text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-balance">
              Clearer answers for your{" "}
              <span className="relative inline-block">
                <span className="text-gradient-violet">internet</span>
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 8 Q 50 2, 100 6 T 198 6" stroke="url(#u)" strokeWidth="3" strokeLinecap="round" />
                  <defs>
                    <linearGradient id="u" x1="0" x2="1">
                      <stop offset="0" stopColor="#7C3AED" />
                      <stop offset="1" stopColor="#EC4899" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>{" "}
              &amp; cable choices.
            </h1>
            <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed">
              Third-party guidance from real humans — we explain plans, troubleshoot setups and read your bill, without ever selling services.
            </p>
            <div className="reveal reveal-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <a
                href="tel:+18335976839"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white px-6 py-3.5 text-sm font-semibold shadow-violet hover:opacity-95 transition"
              >
                <Phone className="h-4 w-4" /> (833) 597-6839
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-foreground text-white px-5 py-3.5 text-sm font-semibold hover:opacity-90 transition"
              >
                Request a callback <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            {/* avatar trust row */}
            <div className="mt-10 flex items-center gap-4 border-t border-border pt-6">
              <div className="flex -space-x-3">
                {["SJ", "MC", "ER", "DL"].map((i, k) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full ring-2 ring-white grid place-items-center text-[10px] font-semibold text-white ${
                      k % 2 === 0 ? "bg-gradient-violet" : "bg-[color:var(--ink)]"
                    }`}
                  >
                    {i}
                  </span>
                ))}
              </div>
              <div className="leading-tight">
                <div className="flex items-center gap-1 text-[color:var(--magenta)]">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-muted-foreground mt-1">25,000+ households guided · 4.9 / 5</p>
              </div>
            </div>
          </div>

          {/* HERO IMAGE TILE */}
          <div className="col-span-12 lg:col-span-4 lg:row-span-2 relative rounded-[2rem] overflow-hidden hairline shadow-elegant min-h-[18rem] sm:min-h-[22rem]">
            <img src={heroImg} alt="Connected home" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)] via-[color:var(--ink)]/30 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 text-white">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur border border-white/20 px-3 py-1 text-[10px] uppercase tracking-widest">
                <Signal className="h-3 w-3" /> Trusted Service Assistance
              </span>
              <p className="mt-4 font-display text-2xl leading-tight">
                A calmer way to handle internet &amp; cable questions.
              </p>
            </div>
            <div className="absolute top-4 right-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white px-3 py-2">
              <p className="text-[9px] uppercase tracking-widest text-white/70">Live</p>
              <p className="font-display text-base leading-none mt-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" /> Online
              </p>
            </div>
          </div>

          {/* BENTO ROW — 4 stat/feature tiles */}
          <div className="col-span-6 lg:col-span-3 rounded-[1.5rem] bg-[color:var(--ink)] text-white p-6 shadow-soft relative overflow-hidden">
            <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[color:var(--violet)]/40 blur-2xl" />
            <Headphones className="h-6 w-6 text-[color:var(--magenta)]" />
            <p className="mt-6 font-display text-3xl">24/7</p>
            <p className="text-xs uppercase tracking-widest text-white/60 mt-1">Human advisors</p>
          </div>

          <div className="col-span-6 lg:col-span-3 rounded-[1.5rem] bg-white hairline p-6 shadow-soft">
            <ShieldCheck className="h-6 w-6 text-[color:var(--violet)]" />
            <p className="mt-6 font-display text-3xl text-gradient-violet">Unbiased</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">No provider upsells</p>
          </div>

          <div className="col-span-6 lg:col-span-3 rounded-[1.5rem] bg-white hairline p-6 shadow-soft">
            <Activity className="h-6 w-6 text-[color:var(--magenta)]" />
            <p className="mt-6 font-display text-3xl">25K+</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground mt-1">Customers helped</p>
          </div>

          <div className="col-span-6 lg:col-span-3 rounded-[1.5rem] bg-gradient-violet text-white p-6 shadow-violet relative overflow-hidden">
            <div className="absolute inset-0 opacity-25" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)", backgroundSize: "16px 16px" }} />
            <MonitorPlay className="relative h-6 w-6" />
            <p className="relative mt-6 font-display text-3xl">100+</p>
            <p className="relative text-xs uppercase tracking-widest text-white/80 mt-1">Cities covered</p>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground">
          Third-party assistance · Fees separate from provider charges · 7–15 day refund window
        </p>
      </div>
    </section>
  );
}

/* ---------------- Lifestyle editorial ---------------- */
function Lifestyle() {
  const items = [
    { title: "Streaming", img: streamImg, copy: "Guidance for setting up smoother cable & streaming experiences at home." },
    { title: "Remote work", img: workImg, copy: "Support for households balancing video calls, uploads and shared bandwidth." },
    { title: "Smart home", img: smartImg, copy: "Help understanding mesh Wi-Fi layouts and connected-device planning." },
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">Where we help</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Guidance that fits the way you actually live.</h2>
          </div>
          <p className="max-w-md text-muted-foreground">Informational support shaped around real evenings, real workdays and the quiet rituals in between.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6">
          <article className="lg:col-span-7 group relative overflow-hidden rounded-[2rem] shadow-soft hairline">
            <img src={items[0].img} alt="Cable & streaming setup guidance" loading="lazy" width={1400} height={1000} className="w-full h-[28rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/75 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--magenta)]">01 — Streaming</span>
              <h3 className="mt-2 font-display text-3xl">Help making sense of your viewing setup.</h3>
              <p className="mt-2 max-w-md text-sm text-white/80">{items[0].copy}</p>
            </div>
          </article>
          <div className="lg:col-span-5 grid gap-6">
            {items.slice(1).map((it, i) => (
              <article key={it.title} className="group relative overflow-hidden rounded-[2rem] shadow-soft hairline">
                <img src={it.img} alt={it.title} loading="lazy" width={1200} height={1400} className="w-full h-[13.5rem] object-cover transition-transform duration-700 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/70 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 text-white">
                  <span className="text-[10px] tracking-[0.3em] uppercase text-[color:var(--magenta)]">0{i + 2} — {it.title}</span>
                  <h3 className="mt-1 font-display text-2xl">{it.copy}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What We Do (Why Choose Terencelink) ---------------- */
const doItems = [
  {
    icon: Compass,
    badge: "Knowledge-Based",
    title: "Expert Guidance & Support",
    copy: "Comprehensive guidance on internet and cable service options. Our team helps you understand features, compatibility, and optimization — without selling anything.",
  },
  {
    icon: Headphones,
    badge: "24/7 Available",
    title: "Technical Assistance",
    copy: "Our advisors provide guidance on setup, configuration, and general troubleshooting. We help you understand your equipment and services better.",
  },
  {
    icon: Cable,
    badge: "Transparent Help",
    title: "Service Optimization Advice",
    copy: "Learn how to optimize your existing internet and cable services with unbiased recommendations on equipment, settings, and best practices for better performance.",
  },
  {
    icon: BadgeCheck,
    badge: "Trusted",
    title: "Multi-Provider Knowledge",
    copy: "Our team understands multiple internet and cable providers, offering balanced recommendations based on your specific needs — no hidden affiliations.",
  },
];

function WhatWeDo() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/60 relative overflow-hidden">
      <div className="absolute top-0 right-0 h-72 w-72 rounded-full bg-[color:var(--violet)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 mb-16 items-end">
          <div className="lg:col-span-7">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">Why Choose Terencelink</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl text-balance">Comprehensive guidance &amp; assistance.</h2>
            <p className="mt-5 text-muted-foreground max-w-2xl leading-relaxed">
              Terencelink provides clear guidance on internet and cable services. Our team offers expert support to help you understand, optimize, and get the best value from your services.
            </p>
          </div>
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-white hairline p-5 shadow-soft text-center">
              <p className="font-display text-3xl text-gradient-violet">25K+</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">Satisfied Users</p>
            </div>
            <div className="rounded-2xl bg-white hairline p-5 shadow-soft text-center">
              <p className="font-display text-3xl text-gradient-violet">24/7</p>
              <p className="mt-1 text-[11px] uppercase tracking-widest text-muted-foreground">Available Support</p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {doItems.map((s, i) => (
            <article
              key={s.title}
              className={`group relative bg-white rounded-[1.75rem] hairline shadow-soft overflow-hidden transition-all duration-500 hover:-translate-y-1 hover:shadow-elegant p-8 ${i % 2 === 1 ? "lg:translate-y-8" : ""}`}
            >
              <div className="flex items-start justify-between gap-4">
                <span className="h-12 w-12 rounded-2xl bg-gradient-violet grid place-items-center text-white shadow-violet shrink-0">
                  <s.icon className="h-5 w-5" />
                </span>
                <span className="inline-flex items-center rounded-full bg-secondary/70 px-3 py-1 text-[10px] uppercase tracking-widest text-[color:var(--violet)] font-semibold">
                  {s.badge}
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.copy}</p>
              <Link to="/services" className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-[color:var(--violet)] hover:text-[color:var(--magenta)]">
                Learn how we help <ArrowUpRight className="h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- What We Do NOT ---------------- */
function WhatWeDoNot() {
  const yes = [
    "Third-party guidance & informational support",
    "Help understanding provider processes",
    "Educational explanations of common issues",
    "Friendly, human phone advisors",
  ];
  const no = [
    "We are not an Internet Service Provider (ISP)",
    "We do not sell internet, cable or streaming plans",
    "We are not affiliated, authorized or endorsed by any provider",
    "We do not request provider passwords or sensitive credentials",
  ];
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-6">
        <div className="rounded-[1.75rem] bg-gradient-violet text-white p-10 shadow-elegant">
          <span className="text-[11px] uppercase tracking-[0.3em] text-white/75 font-semibold">What we do</span>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">Clear, patient, third-party help.</h3>
          <ul className="mt-7 space-y-3.5">
            {yes.map((y) => (
              <li key={y} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-white/20 grid place-items-center"><Check className="h-3.5 w-3.5" /></span>
                <span className="text-white/90">{y}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.75rem] bg-white hairline p-10 shadow-soft">
          <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">What we do not</span>
          <h3 className="mt-3 font-display text-3xl sm:text-4xl">To avoid confusion.</h3>
          <ul className="mt-7 space-y-3.5">
            {no.map((n) => (
              <li key={n} className="flex items-start gap-3 text-sm">
                <span className="mt-0.5 h-6 w-6 rounded-full bg-secondary grid place-items-center"><X className="h-3.5 w-3.5 text-[color:var(--violet)]" /></span>
                <span className="text-foreground/80">{n}</span>
              </li>
            ))}
          </ul>
          <p className="mt-7 text-xs text-muted-foreground leading-relaxed">All mentions of providers, if any, are used strictly for informational purposes. All trademarks belong to their respective owners.</p>
        </div>
      </div>
    </section>
  );
}

/* ---------------- How It Works ---------------- */
function HowItWorks() {
  const steps = [
    { n: "01", icon: Phone, t: "Call or request help", c: "Reach out by phone or contact form. Our advisors greet every call as a third-party service assistance team.", tag: "Step One" },
    { n: "02", icon: Compass, t: "Share your situation", c: "Tell us about your home, devices and what's frustrating about your current connection.", tag: "Step Two" },
    { n: "03", icon: LifeBuoy, t: "Receive clear guidance", c: "We walk you through options and explain provider processes in plain language — no pressure.", tag: "Step Three" },
    { n: "04", icon: BadgeCheck, t: "Stay supported", c: "Follow-up help is included for the duration of the assistance you've requested.", tag: "Step Four" },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-[color:var(--ink)] text-white overflow-hidden">
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[color:var(--violet)]/25 blur-[120px]" />
      <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[color:var(--magenta)]/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-white/60">
            <span className="h-px w-8 bg-white/40" /> How it works
          </span>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
            From confusion to <span className="text-gradient-violet">clarity</span> in four steps.
          </h2>
          <p className="mt-5 text-white/65 max-w-lg">
            Our service fees are separate from any provider charges. You may submit a refund request within 7–15 days, subject to our Refund Policy.
          </p>
        </div>

        {/* vertical timeline */}
        <ol className="relative mt-16 grid gap-10 lg:gap-0">
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-2 bottom-2 w-px bg-gradient-to-b from-[color:var(--violet)] via-white/20 to-[color:var(--magenta)]" />
          {steps.map((s, i) => {
            const Icon = s.icon;
            const left = i % 2 === 0;
            return (
              <li key={s.n} className="relative lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                {/* number node */}
                <span className="hidden lg:flex absolute left-1/2 -translate-x-1/2 h-14 w-14 rounded-full bg-[color:var(--ink)] border border-white/20 items-center justify-center font-display text-lg z-10">
                  <span className="text-gradient-violet">{s.n}</span>
                </span>

                {/* card */}
                <div className={`${left ? "lg:pr-12 lg:text-right" : "lg:col-start-2 lg:pl-12"}`}>
                  <div className="group rounded-[1.75rem] border border-white/10 bg-white/[0.04] backdrop-blur p-7 hover:bg-white/[0.07] transition-colors">
                    <div className={`flex items-center gap-3 ${left ? "lg:justify-end" : ""}`}>
                      <span className="inline-flex h-10 w-10 rounded-xl bg-gradient-violet items-center justify-center">
                        <Icon className="h-5 w-5 text-white" />
                      </span>
                      <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">{s.tag}</span>
                    </div>
                    <h3 className="mt-5 font-display text-2xl">{s.t}</h3>
                    <p className="mt-2 text-sm text-white/65 leading-relaxed">{s.c}</p>
                  </div>
                </div>

                {/* mobile number */}
                <span className="lg:hidden absolute -top-3 left-4 font-display text-5xl text-gradient-violet leading-none">{s.n}</span>
              </li>
            );
          })}
        </ol>

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur p-6">
          <p className="text-sm text-white/75 max-w-xl">Ready to start? Our advisors answer every call personally — no menus, no transfers, no upsells.</p>
            <a href="tel:+18335976839" className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--ink)] px-5 py-3 text-sm font-semibold hover:bg-white/90">
              <Phone className="h-4 w-4" /> (833) 597-6839
          </a>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Testimonials ---------------- */
const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Remote Work Professional",
    quote: "Terencelink gave me the guidance I needed to choose the right internet service. They explained all my options clearly and I finally understand what I'm paying for.",
  },
  {
    name: "Marcus Chen",
    role: "Small Business Owner",
    quote: "I contacted Terencelink for clear advice on internet services. Their balanced guidance helped me make an informed decision for my business. Highly trustworthy.",
  },
  {
    name: "Emma Rodriguez",
    role: "Content Creator",
    quote: "The team at Terencelink took time to understand my needs and provided expert guidance without any sales pressure. Completely transparent and helpful.",
  },
];

function Testimonials() {
  const featured = testimonials[0];
  const rest = testimonials.slice(1);
  return (
    <section className="relative py-24 sm:py-32 bg-gradient-soft overflow-hidden">
      <div className="absolute -top-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-[color:var(--violet)]/15 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-72 w-[36rem] rounded-full bg-[color:var(--magenta)]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[color:var(--violet)] font-semibold">
              <span className="h-px w-8 bg-[color:var(--violet)]/60" /> Voices · Real Users
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05]">
              Words from the<br />people we&apos;ve <span className="text-gradient-violet italic">helped</span>.
            </h2>
          </div>
          <div className="flex items-center gap-4 rounded-2xl bg-white hairline shadow-soft px-5 py-4">
            <div className="flex items-center text-[color:var(--magenta)]">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <div className="leading-tight">
              <p className="font-display text-xl">4.9<span className="text-sm text-muted-foreground">/5</span></p>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground">2,847 reviews</p>
            </div>
          </div>
        </div>

        {/* asymmetric layout */}
        <div className="grid lg:grid-cols-12 gap-6">
          {/* featured quote */}
          <figure className="lg:col-span-7 relative rounded-[2rem] bg-[color:var(--ink)] text-white p-10 sm:p-14 overflow-hidden">
            <div className="absolute -top-10 -right-10 h-60 w-60 rounded-full bg-[color:var(--violet)]/40 blur-3xl" />
            <Quote className="h-14 w-14 text-[color:var(--magenta)]" />
            <blockquote className="relative mt-6 font-display text-2xl sm:text-3xl md:text-4xl leading-[1.2] text-balance">
              &ldquo;{featured.quote}&rdquo;
            </blockquote>
            <figcaption className="relative mt-10 flex items-center justify-between gap-4 border-t border-white/10 pt-6">
              <div className="flex items-center gap-4">
                <span className="h-14 w-14 rounded-full bg-gradient-violet grid place-items-center text-white font-semibold text-lg">
                  {featured.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <div>
                  <p className="font-semibold">{featured.name}</p>
                  <p className="text-xs text-white/60">{featured.role}</p>
                </div>
              </div>
              <div className="flex items-center gap-1 text-[color:var(--magenta)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
            </figcaption>
          </figure>

          {/* stacked side cards */}
          <div className="lg:col-span-5 grid gap-6">
            {rest.map((t) => (
              <figure key={t.name} className="group relative rounded-[2rem] bg-white hairline shadow-soft p-7 hover:shadow-elegant transition-shadow">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-3">
                    <span className="h-11 w-11 rounded-full bg-gradient-violet grid place-items-center text-white font-semibold">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="text-sm font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                  <div className="flex items-center text-[color:var(--magenta)]">
                    {Array.from({ length: 5 }).map((_, k) => (
                      <Star key={k} className="h-3.5 w-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <blockquote className="mt-5 text-sm text-foreground/80 leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
              </figure>
            ))}
          </div>
        </div>

        {/* trust strip */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3">
          {[
            { icon: Users, k: "25K+", v: "Customers Helped" },
            { icon: Clock, k: "24/7", v: "Human Support" },
            { icon: Globe, k: "100+", v: "Cities Covered" },
            { icon: MonitorPlay, k: "250+", v: "HD Channels" },
          ].map((it) => {
            const Icon = it.icon;
            return (
              <div key={it.v} className="flex items-center gap-3 rounded-2xl bg-white hairline px-5 py-4 shadow-soft">
                <span className="h-10 w-10 rounded-xl bg-gradient-violet grid place-items-center text-white">
                  <Icon className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-lg leading-none">{it.k}</p>
                  <p className="text-[11px] uppercase tracking-widest text-muted-foreground mt-1">{it.v}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */
function FinalCta() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative overflow-hidden rounded-[2.5rem] shadow-elegant">
          <img src={ctaImg} alt="Calm modern home" loading="lazy" width={1800} height={1000} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[color:var(--ink)]/95 via-[color:var(--plum)]/80 to-[color:var(--violet)]/55" />
          <div className="relative grid lg:grid-cols-2 gap-10 p-10 sm:p-16">
            <div className="text-white">
              <span className="text-[11px] uppercase tracking-[0.3em] text-[color:var(--magenta)] font-semibold">Ready when you are</span>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl text-balance leading-[1.05]">Speak with a third-party service advisor.</h2>
              <p className="mt-5 max-w-md text-white/80 leading-relaxed">
                Call for clear service guidance — we'll help you understand your options in plain language. Terencelink is not an ISP and has no provider affiliation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
              <a href="tel:+18335976839" className="inline-flex items-center gap-2 rounded-full bg-white text-[color:var(--violet)] px-6 py-3.5 text-sm font-semibold hover:bg-white/90">
                <Phone className="h-4 w-4" /> (833) 597-6839
                </a>
                <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-white/10 text-white hairline border-white/25 px-6 py-3.5 text-sm font-semibold hover:bg-white/15">
                  Request help <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()} className="glass-dark rounded-[1.75rem] p-7 text-white border border-white/15">
              <h3 className="font-display text-2xl">Request a callback</h3>
              <p className="mt-1 text-sm text-white/65">A third-party advisor will respond shortly.</p>
              <div className="mt-5 grid gap-3">
                <input required maxLength={100} placeholder="Full name" className="rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[color:var(--magenta)]" />
                <input required type="tel" maxLength={20} placeholder="Phone number" className="rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[color:var(--magenta)]" />
                <input required maxLength={10} placeholder="ZIP code" className="rounded-full bg-white/5 border border-white/15 px-4 py-3 text-sm placeholder:text-white/40 focus:outline-none focus:border-[color:var(--magenta)]" />
                <button className="rounded-full bg-gradient-violet text-white px-5 py-3 text-sm font-semibold hover:opacity-95">
                  Request callback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
