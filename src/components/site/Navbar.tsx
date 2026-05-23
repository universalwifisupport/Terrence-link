import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo-terencelink.svg";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "What We Do" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className={`fixed inset-x-0 top-0 sm:top-8 z-50 transition-all duration-500 ${scrolled ? "py-3" : "py-5"}`}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className={`flex items-center justify-between rounded-2xl px-5 sm:px-7 py-3 transition-all duration-500 ${scrolled ? "glass shadow-soft hairline" : "bg-transparent"}`}>
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Terencelink" width={36} height={36} className="h-9 w-9 object-contain" />
            <span className="font-display text-xl tracking-tight font-semibold">Terencelink</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="relative text-foreground/70 hover:text-foreground transition-colors font-medium"
                activeProps={{ className: "text-[color:var(--violet)]" }}
                activeOptions={{ exact: l.to === "/" }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="tel:+18887659560"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white px-5 py-2.5 text-sm font-semibold hover:opacity-95 transition-all shadow-violet"
            >
              <Phone className="h-4 w-4" /> (888) 765-9560
            </a>
            <button
              className="md:hidden rounded-full p-2 hairline"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="md:hidden mt-2 rounded-2xl glass hairline shadow-soft p-4 animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link key={l.to} to={l.to} className="px-3 py-2 rounded-lg hover:bg-secondary/60 font-medium">
                  {l.label}
                </Link>
              ))}
              <a href="tel:+18887659560" className="mt-2 inline-flex items-center gap-2 rounded-full bg-gradient-violet text-white px-5 py-2.5 text-sm justify-center font-semibold">
                <Phone className="h-4 w-4" /> (888) 765-9560
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
