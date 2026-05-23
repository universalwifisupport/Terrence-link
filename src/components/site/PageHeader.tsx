export function PageHeader({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-warm">
      <div className="absolute -top-32 -right-24 h-96 w-96 rounded-full bg-[color:var(--gold)]/15 blur-3xl" />
      <div className="absolute -bottom-32 -left-24 h-96 w-96 rounded-full bg-[color:var(--cocoa)]/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {eyebrow && (
          <span className="reveal inline-block text-[11px] uppercase tracking-[0.3em] text-[color:var(--cocoa)] mb-6">{eyebrow}</span>
        )}
        <h1 className="reveal reveal-delay-1 font-display text-5xl sm:text-6xl md:text-7xl text-balance leading-[1.05]">{title}</h1>
        {subtitle && (
          <p className="reveal reveal-delay-2 mt-6 max-w-2xl mx-auto text-muted-foreground text-lg leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
