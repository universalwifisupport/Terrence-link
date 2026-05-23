import { ReactNode } from "react";
import { Info } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingCall } from "./FloatingCall";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <DisclosureBar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingCall />
    </div>
  );
}

function DisclosureBar() {
  return (
    <div className="hidden sm:block fixed top-0 inset-x-0 z-[60] bg-[color:var(--ink)] text-white/85 text-[11px] sm:text-[12px] py-1.5 px-4 text-center">
      <span className="inline-flex items-center gap-2 justify-center flex-wrap">
        <Info className="h-3 w-3 text-[color:var(--magenta)] shrink-0" />
        terencelink is a third-party service assistance platform — not affiliated with any cable, internet or streaming provider.
      </span>
    </div>
  );
}
