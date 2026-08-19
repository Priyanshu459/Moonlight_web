import Link from "next/link";
import { features, comingSoonFeatures } from "@/content/features";
import { ArrowRight } from "lucide-react";

const accentMap: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  pink: "text-pink-400 bg-pink-500/10 border-pink-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  slate: "text-slate-300 bg-slate-500/10 border-slate-500/20",
  green: "text-green-400 bg-green-500/10 border-green-500/20",
};

// Show top 6 features on homepage
const homeFeatures = features.slice(0, 6);

export function FeaturesSection() {
  return (
    <section
      className="section bg-[var(--bg-surface)]"
      aria-labelledby="features-heading"
    >
      <div className="container-page">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-muted)] rounded-full border border-[var(--accent)]/20 mb-4">
            What Moonlight Does
          </div>
          <h2
            id="features-heading"
            className="text-display-md text-[var(--text-primary)] mb-4"
          >
            Intelligence built for{" "}
            <span className="gradient-text">your device.</span>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-xl mx-auto leading-relaxed">
            Every feature in Moonlight AI is designed to run locally — 
            bringing capable AI to your Android device without requiring a constant cloud connection.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {homeFeatures.map((feature) => {
            const Icon = feature.icon;
            const accent = accentMap[feature.color] ?? accentMap["indigo"];
            return (
              <div
                key={feature.id}
                className="card-glow p-6 group"
              >
                <div
                  className={`w-10 h-10 rounded-xl border flex items-center justify-center mb-4 ${accent}`}
                >
                  <Icon size={18} />
                </div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* See all */}
        <div className="text-center">
          <Link
            href="/features"
            className="inline-flex items-center gap-2 text-sm text-[var(--accent)] hover:text-[var(--accent-hover)] font-medium transition-colors group"
          >
            See all features
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Coming soon section */}
        {comingSoonFeatures.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-8">
              <h3 className="text-lg font-semibold text-[var(--text-secondary)] mb-2">
                Coming Soon
              </h3>
              <p className="text-sm text-[var(--text-tertiary)]">
                Features currently in development — not yet available in the app.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {comingSoonFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-5 rounded-2xl border border-dashed border-white/10 bg-white/2 opacity-60"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400">
                      {feature.status}
                    </span>
                  </div>
                  <h4 className="text-sm font-medium text-[var(--text-secondary)] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[var(--text-tertiary)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
