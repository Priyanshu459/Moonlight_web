import Link from "next/link";
import { Shield, Check } from "lucide-react";

export function PrivacySection() {
  const claims = [
    "AI inference runs entirely on your device",
    "Conversations stored only in local SQLite — never transmitted",
    "No analytics SDK included",
    "No crash reporting service",
    "No user accounts required",
    "Network used only for model downloads",
    "Biometric lock uses Android Biometric API — no cloud auth",
    "Your memories and knowledge stay on your device",
  ];

  return (
    <section
      className="section"
      aria-labelledby="privacy-section-heading"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-green-400 bg-green-500/10 rounded-full border border-green-500/20 mb-6">
              <Shield size={12} />
              Privacy by Design
            </div>
            <h2
              id="privacy-section-heading"
              className="text-display-md text-[var(--text-primary)] mb-5"
            >
              Designed with privacy{" "}
              <span className="gradient-text">in mind.</span>
            </h2>
            <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
              Moonlight AI is built around a local-first architecture. Your conversations, 
              memories, and documents are processed and stored on your device. 
              No analytics. No accounts. No cloud AI.
            </p>
            <p className="text-sm text-[var(--text-tertiary)] leading-relaxed mb-8">
              Internet access is used only when downloading AI models. Once a model is installed, 
              inference runs entirely offline. Your data does not leave your device during AI processing.
            </p>
            <Link
              href="/privacy"
              id="privacy-section-cta"
              className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[var(--accent)] hover:bg-[var(--accent-hover)] rounded-xl transition-colors hover:shadow-lg hover:shadow-[var(--accent-glow)]"
            >
              Read our Privacy Policy
            </Link>
          </div>

          {/* Right — claims list */}
          <div className="card-glow p-8">
            <h3 className="text-sm font-semibold text-[var(--text-tertiary)] uppercase tracking-widest mb-6">
              Verified from source code audit
            </h3>
            <ul className="space-y-4" role="list">
              {claims.map((claim) => (
                <li key={claim} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={11} className="text-green-400" strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {claim}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
