import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-terencelink.svg";

export function Footer() {
  return (
    <footer className="mt-24 bg-gradient-dark text-white/85">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <Link to="/" className="flex items-center gap-2.5">
            <img src={logo} alt="Terencelink" width={36} height={36} className="h-9 w-9 object-contain" />
            <span className="font-display text-2xl font-semibold text-white">Terencelink</span>
          </Link>
          <p className="mt-5 text-sm text-white/65 max-w-sm leading-relaxed">
            Terencelink is an independent third-party service assistance startup, launched in 2025. We provide general guidance and informational support for internet, broadband, Wi-Fi and cable TV services.
          </p>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-display text-base mb-4 text-white">Explore</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><Link to="/" className="hover:text-[color:var(--magenta)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--magenta)]">About Us</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--magenta)]">What We Do</Link></li>
            <li><Link to="/faq" className="hover:text-[color:var(--magenta)]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--magenta)]">Contact</Link></li>
          </ul>
        </div>
        <div className="md:col-span-2">
          <h4 className="font-display text-base mb-4 text-white">Policies</h4>
          <ul className="space-y-2.5 text-sm text-white/65">
            <li><Link to="/privacy" className="hover:text-[color:var(--magenta)]">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-[color:var(--magenta)]">Terms & Conditions</Link></li>
            <li><Link to="/refund" className="hover:text-[color:var(--magenta)]">Refund Policy</Link></li>
            <li><Link to="/disclaimer" className="hover:text-[color:var(--magenta)]">Disclaimer</Link></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <h4 className="font-display text-base mb-4 text-white">Reach us</h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex items-center gap-3"><Phone className="h-4 w-4 text-[color:var(--magenta)]" /> <a href="tel:+18887659560" className="hover:text-[color:var(--magenta)]">(888) 765-9560</a></li>
            <li className="flex items-center gap-3"><Mail className="h-4 w-4 text-[color:var(--magenta)]" /> <a href="mailto:support@terencelink.com" className="hover:text-[color:var(--magenta)]">support@terencelink.com</a></li>
            <li className="flex items-center gap-3"><MapPin className="h-4 w-4 text-[color:var(--magenta)]" /> 30 N Gould St, Sheridan, WY 82801</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs text-white/55 leading-relaxed">
          <p>
            <strong className="text-white/75">Disclosure:</strong> Terencelink is an independent third-party service assistance startup, launched in 2025, and is not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. Brand names, if mentioned anywhere on this website, are used strictly for informational purposes only. All trademarks belong to their respective owners.
          </p>
          <p className="mt-3">© {new Date().getFullYear()} Terencelink. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
