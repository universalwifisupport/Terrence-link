import { Phone } from "lucide-react";
export function FloatingCall() {
  return (
    <a
      href="tel:+18335976839"
      aria-label="Call terencelink"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white pl-4 pr-5 py-3.5 shadow-violet hover:scale-105 transition-all float-slow"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
        <Phone className="h-4 w-4" />
        <span className="absolute inset-0 rounded-full animate-ping bg-white/30 opacity-60" />
      </span>
      <span className="hidden sm:inline text-sm font-semibold">(833) 597-6839</span>
    </a>
  );
}
