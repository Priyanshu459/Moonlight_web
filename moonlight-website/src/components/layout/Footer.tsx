import Link from "next/link";
import { Moon } from "lucide-react";
import { siteConfig } from "@/lib/config";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How It Works" },
    { href: "/download", label: "Download" },
    { href: "/features", label: "Roadmap" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
    { href: "/delete-account", label: "Data Deletion" },
  ],
  Support: [
    { href: "/support", label: "FAQ" },
    { href: "/support", label: "Support" },
    { href: `mailto:${siteConfig.supportEmail}`, label: "Contact" },
  ],
};

export function Footer() {
  return (
    <footer
      className="border-t border-white/5 bg-[var(--bg-surface)]"
      role="contentinfo"
    >
      <div className="container-page py-16">
        {/* Top row */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          {/* Brand column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Moon size={16} className="text-white" strokeWidth={2.5} />
              </div>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                Moonlight AI
              </span>
            </Link>
            <p className="text-sm text-[var(--text-tertiary)] leading-relaxed max-w-xs">
              {siteConfig.tagline}
              <br />
              Local-first AI for Android.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-4">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
          <p className="text-xs text-[var(--text-tertiary)]">
            &copy; {siteConfig.copyrightYear} {siteConfig.companyName}. All rights reserved.
          </p>
          <p className="text-xs text-[var(--text-tertiary)]">
            Built for Android. Powered by llama.cpp.
          </p>
        </div>
      </div>
    </footer>
  );
}
