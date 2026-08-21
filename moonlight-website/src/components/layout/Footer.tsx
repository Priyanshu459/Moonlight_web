import Link from "next/link";
import { ArrowUpRight, Moon, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/config";

const footerLinks = {
  Product: [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/download", label: "Google Play" },
  ],
  Legal: [
    { href: "/privacy", label: "Privacy policy" },
    { href: "/terms", label: "Terms of service" },
    { href: "/delete-account", label: "Data deletion" },
  ],
  Support: [
    { href: "/support", label: "Help centre" },
    { href: `mailto:${siteConfig.supportEmail}`, label: "Contact support", external: true },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-white/7 bg-[#0b0c10]" role="contentinfo">
      <div className="container-page py-12 sm:py-14">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2fr] lg:gap-20">
          <div>
            <Link href="/" className="flex w-fit items-center gap-3" aria-label="Moonlight AI — home">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#0a0b0e] shadow-lg shadow-white/10">
                <Moon size={17} strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-semibold tracking-[-0.02em] text-white">Moonlight AI</span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-6 text-white/45">
              Private, local-first AI for Android—built to run capable language models directly on your device.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/[0.06] px-3 py-1.5 text-[11px] font-medium text-emerald-300/80">
              <ShieldCheck size={13} /> Designed without cloud chat history
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/30">{category}</h3>
                <ul className="mt-5 space-y-3.5">
                  {links.map((link) => (
                    <li key={`${link.label}-${link.href}`}>
                      <Link href={link.href} className="group inline-flex items-center gap-1.5 text-sm text-white/58 transition-colors hover:text-white">
                        {link.label}
                        {"external" in link && link.external ? <ArrowUpRight size={12} className="text-white/25 transition-colors group-hover:text-white/60" /> : null}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/7 pt-6 text-[11px] text-white/28 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {siteConfig.copyrightYear} {siteConfig.companyName}. All rights reserved.</p>
          <p>Built for Android · Powered locally by llama.cpp</p>
        </div>
      </div>
    </footer>
  );
}
