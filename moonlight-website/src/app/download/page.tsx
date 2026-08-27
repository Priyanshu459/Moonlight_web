import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ExternalLink, Download, Info, AlertTriangle } from "lucide-react";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";
import { ModelStoreMockup } from "@/components/ui/mockups/ModelStoreMockup";

export const metadata: Metadata = {
  title: "Download Moonlight AI",
  description: `Get ${siteConfig.name} for Android. Local AI inference on your phone.`,
  alternates: { canonical: `${siteConfig.url}/download` },
};

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Hero */}
      <div className="container-page mb-24 border-b border-white/5 pb-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
              Get Moonlight
            </div>
            <h1 className="text-display-lg text-white mb-6">
              Download the <span className="gradient-text">Future.</span>
            </h1>
            <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              Install Moonlight AI on your Android device and take control of your artificial intelligence. 
              No cloud subscription required.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              {siteConfig.playStoreUrl ? (
                <a
                  href={siteConfig.playStoreUrl}
                  id="download-page-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-bold rounded-2xl transition-all shadow-[0_0_24px_rgba(99,102,241,0.2)] hover:shadow-[0_0_32px_rgba(99,102,241,0.4)]"
                >
                  <Download size={20} />
                  Get it on Google Play
                  <ExternalLink size={16} className="opacity-70" />
                </a>
              ) : (
                <div className="w-full sm:w-auto flex flex-col items-center gap-4">
                  <div className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white/5 border border-white/10 text-white/60 font-bold rounded-2xl cursor-not-allowed">
                    <Download size={20} className="opacity-50" />
                    Coming soon to Google Play
                  </div>
                  <div className="flex items-start gap-3 text-left p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 max-w-md">
                    <Info size={16} className="text-amber-400 shrink-0 mt-0.5" />
                    <p className="text-xs text-amber-400/90 leading-relaxed">
                      Moonlight AI version {siteConfig.appVersion} is being prepared for its Google Play listing.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="scale-90 origin-center">
              <PhoneMockup>
                <ModelStoreMockup />
              </PhoneMockup>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="container-page max-w-5xl mb-32">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">
            System Requirements
          </h2>
          <p className="text-white/60 leading-relaxed max-w-2xl mx-auto text-sm">
            Local AI inference is highly demanding on device hardware. Moonlight uses optimized llama.cpp binaries, but you still need a capable device to run modern models.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-3xl bg-[#121318] border border-white/5 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-amber-400"></div>
              Minimum to Run
            </h3>
            
            <ul className="space-y-4 text-sm">
              {[
                ["OS", "Android 8.0 (API 26)+"],
                ["Architecture", "ARM64 (64-bit)"],
                ["RAM", "3 GB (strictly limits model size)"],
                ["Storage", "2.5 GB free space minimum"],
                ["Network", "Internet required for model download"],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between items-center gap-4 py-2 border-b border-white/5 last:border-0">
                  <span className="text-white/50 font-medium">{label}</span>
                  <span className="text-white font-medium text-right">{value}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 md:p-10 rounded-3xl bg-[#121318] border border-white/5 relative overflow-hidden group shadow-[0_0_40px_rgba(99,102,241,0.05)]">
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            
            <h3 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400"></div>
              Recommended for Best Experience
            </h3>
            
            <ul className="space-y-4 text-sm">
              {[
                ["OS", "Android 12+"],
                ["Processor", "Modern flagship ARM64 SoC (Snapdragon 8 Gen 1+)"],
                ["RAM", "8 GB+ (allows running 7B-8B models)"],
                ["Storage", "15 GB+ free space (for multiple models)"],
                ["Battery", "Plugged into power during heavy inference"],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between items-center gap-4 py-2 border-b border-white/5 last:border-0">
                  <span className="text-white/50 font-medium">{label}</span>
                  <span className="text-white font-medium text-right">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Notice */}
        <div className="mt-8 flex items-start gap-3 p-5 rounded-2xl bg-white/5 border border-white/10 max-w-3xl mx-auto">
          <AlertTriangle size={20} className="text-white/50 shrink-0" />
          <p className="text-sm text-white/60 leading-relaxed">
            <strong className="text-white font-semibold">Important note on RAM:</strong> Language models must fit within your device&apos;s available memory. Choose a smaller quantized model such as Llama 3.2 1B when working with a memory-constrained phone.
          </p>
        </div>
      </div>
    </div>
  );
}
