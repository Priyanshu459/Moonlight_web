import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function CtaSection() {
  return (
    <section
      className="section"
      aria-labelledby="cta-section-heading"
    >
      <div className="container-page">
        <div
          className="relative rounded-3xl overflow-hidden border border-[var(--accent)]/20 bg-gradient-to-br from-[var(--bg-surface)] via-[var(--bg-surface2)] to-[var(--bg-surface)]"
        >
          {/* Glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse, rgba(91,124,249,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col items-center text-center px-6 py-20 gap-8">
            <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-muted)] rounded-full border border-[var(--accent)]/20">
              Available Now
            </div>
            <div>
              <h2
                id="cta-section-heading"
                className="text-display-lg text-[var(--text-primary)] mb-4"
              >
                Meet{" "}
                <span className="gradient-text">Moonlight AI.</span>
              </h2>
              <p className="text-[var(--text-secondary)] max-w-lg mx-auto leading-relaxed">
                A different approach to personal AI — on your device, under your control.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {siteConfig.playStoreUrl ? (
                <a
                  href={siteConfig.playStoreUrl}
                  id="cta-section-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--accent-glow)] active:scale-95"
                >
                  Get Moonlight on Google Play
                  <ArrowRight size={16} />
                </a>
              ) : (
                <Link
                  href="/download"
                  id="cta-section-primary"
                  className="inline-flex items-center gap-2 px-7 py-4 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--accent-glow)] active:scale-95"
                >
                  Get Moonlight
                  <ArrowRight size={16} />
                </Link>
              )}
              <Link
                href="/how-it-works"
                id="cta-section-secondary"
                className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline underline-offset-4"
              >
                How does it work?
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
