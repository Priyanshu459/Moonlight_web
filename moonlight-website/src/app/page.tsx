import { ArrowRight, Shield, Download, Smartphone } from "lucide-react";
import { siteConfig } from "@/lib/config";
import { features } from "@/content/features";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";
import { ChatMockup } from "@/components/ui/mockups/ChatMockup";
import { ModelStoreMockup } from "@/components/ui/mockups/ModelStoreMockup";

export default function Home() {
  // Only show top 3 features on homepage
  const topFeatures = features.slice(0, 3);

  return (
    <>
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden hero-gradient border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
        <div className="container-page relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <div className="lg:w-1/2 text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6 animate-fade-in">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Local-first AI Assistant
              </div>
              
              <h1 className="text-display-lg text-white mb-6 tracking-tight leading-[1.1] animate-fade-in animation-delay-100">
                Private AI.<br />
                <span className="gradient-text">Running on your device.</span>
              </h1>
              
              <p className="text-lg text-white/60 mb-8 max-w-lg leading-relaxed animate-fade-in animation-delay-200">
                Moonlight AI brings local AI inference to Android, allowing compatible language models to run directly on your device hardware. No cloud. No subscriptions.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in animation-delay-300 w-full sm:w-auto">
                {siteConfig.playStoreUrl ? (
                  <a
                    href={siteConfig.playStoreUrl}
                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-2xl transition-all hover:shadow-[0_0_24px_rgba(99,102,241,0.4)]"
                  >
                    Get Moonlight
                  </a>
                ) : (
                  <div className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-white/5 border border-white/10 text-white/60 font-semibold rounded-2xl cursor-not-allowed">
                    Coming soon to Google Play
                  </div>
                )}
                <a
                  href="/how-it-works"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 text-white font-medium rounded-2xl transition-colors"
                >
                  See how it works
                </a>
              </div>
            </div>

            <div className="lg:w-1/2 w-full flex justify-center lg:justify-end animate-fade-in animation-delay-400">
              <PhoneMockup>
                <ChatMockup />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </section>

      {/* 2. VISUAL NARRATIVE */}
      <section className="py-24 bg-[#08080a]">
        <div className="container-page">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">A complete local AI ecosystem</h2>
            <p className="text-white/60 leading-relaxed">
              Moonlight provides everything you need to run large language models on your Android device. 
              The entire pipeline is built for local execution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 flex justify-center">
              <div className="scale-90 origin-top">
                <PhoneMockup>
                  <ModelStoreMockup />
                </PhoneMockup>
              </div>
            </div>
            <div className="order-1 md:order-2 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Download className="text-indigo-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">1. Download your model</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Browse verified GGUF models from Hugging Face directly within the app. 
                    Downloads are verified with SHA-256 checksums to ensure integrity. Internet is required for this step.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <Smartphone className="text-emerald-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">2. Run inference locally</h3>
                  <p className="text-white/60 leading-relaxed text-sm">
                    Moonlight uses llama.cpp to execute the model directly on your device&apos;s processor. 
                    Tokens are streamed to your screen without leaving your phone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIVACY BY ARCHITECTURE */}
      <section className="py-24 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container-page relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-3xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mx-auto mb-6">
              <Shield className="text-indigo-400" size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Your data doesn&apos;t need to leave your phone.</h2>
            <p className="text-white/60 leading-relaxed">
              Moonlight AI was designed with a strict &quot;Privacy by Architecture&quot; philosophy. 
              We don&apos;t just promise privacy; we built a system where data harvesting is impossible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
                Local Processing
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>Conversations:</strong> Stored locally in SQLite.
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>Inference:</strong> Executed entirely on device hardware.
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>Voice Processing:</strong> Transcribed on-device via Android.
                </li>
              </ul>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-indigo-400"></div>
                Network Activity
              </h3>
              <ul className="space-y-4 text-sm text-white/70">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>Model Downloads:</strong> App connects to Hugging Face to download requested GGUF files.
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>No Analytics:</strong> Moonlight includes zero tracking SDKs or crash reporters.
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0" />
                  <strong>No Telemetry:</strong> Your prompts are never sent to a cloud endpoint.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURE GRID */}
      <section className="py-24 border-t border-white/5 bg-[#0a0a0c]">
        <div className="container-page">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
              <p className="text-white/60">
                Everything you need to interact with modern AI models on Android.
              </p>
            </div>
            <a href="/features" className="text-indigo-400 hover:text-indigo-300 font-medium text-sm flex items-center gap-1 group">
              View all features
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {topFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.id} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded border border-white/10 bg-white/5 text-[10px] font-semibold text-white/80 uppercase tracking-widest">
                    {feature.status}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
