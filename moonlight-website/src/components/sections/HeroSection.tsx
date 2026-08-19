import Link from "next/link";
import { siteConfig } from "@/lib/config";
import { ArrowRight, ExternalLink } from "lucide-react";

export function HeroSection() {
  return (
    <section
      className="relative min-h-[100svh] flex flex-col justify-center hero-gradient pt-20"
      aria-labelledby="hero-headline"
    >
      {/* Grid overlay */}
      <div className="absolute inset-0 hero-grid opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(ellipse, rgba(91,124,249,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="container-page relative z-10 flex flex-col items-center text-center gap-8 py-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--accent)]/20 bg-[var(--accent-muted)] text-xs font-medium text-[var(--accent)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
          Now available on Android
        </div>

        {/* Headline */}
        <div>
          <h1
            id="hero-headline"
            className="text-display-xl text-[var(--text-primary)] mb-4"
          >
            AI that stays{" "}
            <span className="gradient-text">with you.</span>
          </h1>
          <p className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto leading-relaxed">
            Moonlight AI brings powerful AI models directly to your Android device —
            designed around on-device inference, local memory, and offline-capable intelligence.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          {siteConfig.playStoreUrl ? (
            <a
              href={siteConfig.playStoreUrl}
              id="hero-cta-primary"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--accent-glow)] active:scale-95 text-sm"
            >
              Get Moonlight
              <ExternalLink size={16} />
            </a>
          ) : (
            <Link
              href="/download"
              id="hero-cta-primary"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[var(--accent)] hover:bg-[var(--accent-hover)] text-white font-semibold rounded-2xl transition-all duration-200 hover:shadow-xl hover:shadow-[var(--accent-glow)] active:scale-95 text-sm"
            >
              Get Moonlight
              <ArrowRight size={16} />
            </Link>
          )}
          <Link
            href="/features"
            id="hero-cta-secondary"
            className="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 text-[var(--text-primary)] font-medium rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-200 text-sm"
          >
            Explore Features
          </Link>
        </div>

        {/* Trust strip */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { label: "On-Device AI", icon: "🖥️" },
            { label: "Local Memory", icon: "🧠" },
            { label: "Offline Inference", icon: "📡" },
            { label: "No Analytics", icon: "🔒" },
            { label: "No Accounts", icon: "👤" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-2 text-xs text-[var(--text-tertiary)]"
            >
              <span>{item.icon}</span>
              <span className="font-medium tracking-wide uppercase">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Phone mockup / visual */}
        <div
          className="mt-16 relative"
          aria-label="Moonlight AI app visualization"
        >
          {/* Glow behind phone */}
          <div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 80% 60% at 50% 50%, rgba(91,124,249,0.15) 0%, transparent 70%)",
              filter: "blur(20px)",
            }}
            aria-hidden="true"
          />

          {/* Phone frame */}
          <div className="relative w-[280px] sm:w-[320px] mx-auto">
            <div className="relative bg-[#0D0E11] rounded-[2.5rem] border border-white/10 shadow-2xl overflow-hidden aspect-[9/19]">
              {/* Status bar */}
              <div className="flex justify-between items-center px-6 pt-4 pb-2">
                <span className="text-[10px] text-white/40 font-medium">9:41</span>
                <div className="w-20 h-1 bg-white/10 rounded-full" />
                <div className="flex gap-1">
                  <div className="w-4 h-2 border border-white/30 rounded-sm flex items-center">
                    <div className="w-2.5 h-1 bg-white/50 rounded-sm ml-0.5" />
                  </div>
                </div>
              </div>

              {/* Chat messages simulation */}
              <div className="px-4 py-3 flex flex-col gap-3 flex-1">
                <div className="text-[10px] text-white/40 text-center font-medium py-1">Moonlight AI</div>
                
                {/* User message */}
                <div className="flex justify-end">
                  <div className="bg-[#5B7CF9] text-white text-[11px] px-3 py-2 rounded-2xl rounded-tr-sm max-w-[75%] leading-relaxed">
                    Explain how local AI works
                  </div>
                </div>

                {/* AI response */}
                <div className="flex justify-start">
                  <div className="bg-white/8 border border-white/10 text-white/80 text-[11px] px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] leading-relaxed">
                    Local AI processes your requests directly on your device. No internet needed after the model is downloaded...
                  </div>
                </div>

                {/* Streaming indicator */}
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 px-3 py-2 rounded-2xl rounded-tl-sm flex items-center gap-1.5">
                    <div className="w-1 h-1 rounded-full bg-[#5B7CF9] animate-bounce" style={{ animationDelay: "0ms" }} />
                    <div className="w-1 h-1 rounded-full bg-[#5B7CF9] animate-bounce" style={{ animationDelay: "150ms" }} />
                    <div className="w-1 h-1 rounded-full bg-[#5B7CF9] animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>

              {/* Input bar */}
              <div className="px-4 pb-6 pt-2 border-t border-white/5">
                <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl px-3 py-2">
                  <span className="text-white/20 text-[10px] flex-1">Message Moonlight…</span>
                  <div className="w-6 h-6 rounded-lg bg-[#5B7CF9] flex items-center justify-center">
                    <div className="w-2 h-2 border-t-2 border-r-2 border-white rounded-sm rotate-45 ml-[-2px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
