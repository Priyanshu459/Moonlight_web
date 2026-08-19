import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { features, comingSoonFeatures } from "@/content/features";
import { ArrowRight, AlertCircle, Brain, Database } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: `Explore all features of ${siteConfig.name}. Private AI that runs on your Android device.`,
  alternates: { canonical: `${siteConfig.url}/features` },
};

const accentMap: Record<string, string> = {
  indigo: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
  blue: "text-blue-400 bg-blue-500/10 border-blue-500/20",
  emerald: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
  violet: "text-violet-400 bg-violet-500/10 border-violet-500/20",
  cyan: "text-cyan-400 bg-cyan-500/10 border-cyan-500/20",
  orange: "text-orange-400 bg-orange-500/10 border-orange-500/20",
  rose: "text-rose-400 bg-rose-500/10 border-rose-500/20",
  amber: "text-amber-400 bg-amber-500/10 border-amber-500/20",
  slate: "text-slate-400 bg-slate-500/10 border-slate-500/20",
};

export default function FeaturesPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <div className="container-page text-center mb-20 border-b border-white/5 pb-20">
        <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
          Features
        </div>
        <h1 className="text-display-lg text-white mb-6">
          Everything Moonlight <span className="gradient-text">can do.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          A definitive list of all features currently available in the Moonlight AI Android app. 
          We believe in complete transparency about what works today.
        </p>
      </div>

      {/* Available Features */}
      <div className="container-page mb-32">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white flex items-center gap-3">
            Available Now
            <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/10 text-green-400 border border-green-500/20 uppercase tracking-widest">
              Verified
            </span>
          </h2>
          <p className="text-white/50 mt-2">
            These features are fully implemented and usable in the current version of the app.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            const accent = accentMap[feature.color] ?? accentMap["indigo"];
            const isEven = i % 2 === 0;
            return (
              <div key={feature.id} id={feature.id} className="p-8 md:p-12 rounded-[2.5rem] bg-[#121318] border border-white/5 shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
                
                <div className={`flex flex-col lg:flex-row gap-12 ${!isEven ? "lg:flex-row-reverse" : ""}`}>
                  {/* Icon + headline */}
                  <div className="lg:w-[350px] shrink-0">
                    <div className={`w-14 h-14 rounded-[1.25rem] border flex items-center justify-center mb-6 ${accent}`}>
                      <Icon size={28} />
                    </div>
                    <div className="inline-block px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 rounded mb-4 text-white/80">
                      {feature.status}
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-base text-white/80">
                      {feature.headline}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-6 flex flex-col justify-center">
                    <div>
                      <p className="text-white/60 leading-relaxed">
                        {feature.description}
                      </p>
                      {feature.note && (
                        <div className="mt-4 flex items-start gap-2 p-3 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400/90 text-xs leading-relaxed">
                          <AlertCircle size={14} className="shrink-0 mt-0.5" />
                          <p>{feature.note}</p>
                        </div>
                      )}
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                          Technical Detail
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed font-mono">
                          {feature.technical}
                        </p>
                      </div>
                      <div className="bg-black/30 border border-white/5 rounded-2xl p-5">
                        <div className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-3">
                          User Benefit
                        </div>
                        <p className="text-xs text-white/60 leading-relaxed">
                          {feature.benefit}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Coming Soon */}
      {comingSoonFeatures.length > 0 && (
        <div className="container-page mb-32 border-t border-white/5 pt-20">
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white flex items-center gap-3">
              In Development
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-500/10 text-amber-400 border border-amber-500/20 uppercase tracking-widest">
                Roadmap
              </span>
            </h2>
            <p className="text-white/50 mt-2">
              These features are actively being built and are <strong>not yet available</strong> in the public app.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {comingSoonFeatures.map((feature) => {
               const Icon = feature.icon;
               return (
                <div key={feature.title} className="p-6 rounded-3xl border border-dashed border-white/10 bg-white/5">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                    <Icon size={18} className="text-white/50" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-white/50 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <p className="text-[10px] text-white/40 font-mono leading-relaxed p-3 bg-black/30 rounded-xl">
                    {feature.technical}
                  </p>
                </div>
               );
            })}
            
            {/* Hardcoded future features */}
            {[
              { title: "Agentic Workflows", desc: "Automate tasks using local LLMs.", icon: Brain },
              { title: "Plugins", desc: "Connect local models to your data.", icon: Database },
            ].map((f) => (
              <div key={f.title} className="p-6 rounded-3xl border border-dashed border-white/5 bg-transparent opacity-50">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-4">
                  <f.icon size={18} className="text-white/30" />
                </div>
                <h3 className="text-base font-bold text-white/50 mb-2">{f.title}</h3>
                <p className="text-xs text-white/30 leading-relaxed">{f.desc}</p>
                <div className="mt-4 inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-white/5 text-white/30 uppercase tracking-widest">Planned</div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Download CTA */}
      <div className="container-page text-center border-t border-white/5 pt-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to run AI locally?
        </h2>
        <a
          href="/download"
          className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
        >
          View System Requirements
          <ArrowRight size={18} />
        </a>
      </div>
    </div>
  );
}
