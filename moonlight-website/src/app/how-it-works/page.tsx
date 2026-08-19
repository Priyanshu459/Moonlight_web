import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { ArrowRight, ArrowDown } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description: `Understand how ${siteConfig.name} runs AI locally on your Android device using llama.cpp and GGUF models.`,
  alternates: { canonical: `${siteConfig.url}/how-it-works` },
};

function FlowStep({ label, sublabel, index }: { label: string; sublabel?: string; index: number }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-sm font-bold text-indigo-400 mb-3 shadow-[0_0_15px_rgba(99,102,241,0.1)]">
        {index}
      </div>
      <div className="text-sm font-bold text-white">{label}</div>
      {sublabel && <div className="text-[11px] text-white/50 mt-1 max-w-[100px] leading-tight">{sublabel}</div>}
    </div>
  );
}

function FlowArrow({ vertical = false, className }: { vertical?: boolean; className?: string }) {
  if (vertical) {
    return (
      <div className={`flex items-center justify-center text-white/20 py-2 ${className || ""}`}>
        <ArrowDown size={16} />
      </div>
    );
  }
  return (
    <div className={`flex items-center justify-center text-white/20 px-2 self-start mt-5 hidden sm:flex ${className || ""}`}>
      <ArrowRight size={16} />
    </div>
  );
}

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <div className="container-page text-center mb-24">
        <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
          Architecture
        </div>
        <h1 className="text-display-lg text-white mb-6">
          How Moonlight <span className="gradient-text">works.</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
          Moonlight AI is built around a local-first architecture. 
          Here is exactly how the verified systems operate under the hood.
        </p>
      </div>

      <div className="container-page max-w-4xl space-y-32">

        {/* Section 1 — Inference Architecture */}
        <div className="relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              1. On-Device AI Inference
            </h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              When you send a message to Moonlight, your prompt is processed entirely on your device. 
              There is no cloud API call during inference. The entire pipeline runs locally using your phone&apos;s processor.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#121318] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none"></div>
            
            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-10 text-center">
              Inference Pipeline
            </h3>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start gap-4 sm:gap-2">
              <FlowStep index={1} label="User Prompt" sublabel="Raw text input" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={2} label="Chat Template" sublabel="Formats prompt" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={3} label="llama.cpp" sublabel="Local compute engine" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={4} label="Token Stream" sublabel="Emits deltas" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={5} label="UI Render" sublabel="Shows on screen" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-400"></div>
                Runtime Engine
              </h4>
              <p className="text-sm text-white/50 leading-relaxed">
                The RuntimeManager orchestrates model loading and inference. 
                It uses LlamaCppBackend — a native FFI bridge to the highly optimized C++ library — 
                to load models into memory and generate tokens.
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white/5 border border-white/5">
              <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400"></div>
                GGUF Models
              </h4>
              <p className="text-sm text-white/50 leading-relaxed">
                GGUF is a compact model format optimized for local inference. 
                Quantized models (usually Q4_K_M) are small enough to run on 
                mobile devices while retaining impressive reasoning capabilities.
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 — Model Downloads */}
        <div className="relative">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -z-10"></div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">
              2. Model Download Pipeline
            </h2>
            <p className="text-white/60 leading-relaxed text-sm max-w-2xl">
              Downloading a model is the only time Moonlight connects to the internet. 
              The download process includes strict integrity verification to ensure the model 
              is authentic and undamaged before it ever touches the inference engine.
            </p>
          </div>

          <div className="p-8 md:p-12 rounded-[2.5rem] bg-[#121318] border border-white/5 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>

            <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-10 text-center">
              Download Architecture
            </h3>
            <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center sm:items-start gap-4 sm:gap-2">
              <FlowStep index={1} label="Hugging Face" sublabel="Source URL" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={2} label="Download" sublabel="Writes to .tmp" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={3} label="SHA-256" sublabel="Verify checksum" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={4} label="Rename" sublabel="Atomic install" />
              <FlowArrow vertical className="sm:hidden" />
              <FlowArrow />
              
              <FlowStep index={5} label="Ready" sublabel="Available offline" />
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-white/5 border border-white/5 mt-6 text-sm text-white/60 leading-relaxed max-w-3xl">
            Downloads support pause/resume via HTTP range requests. The SHA-256 checksum verification 
            runs after the download completes. The model file is atomically renamed from <code className="text-white bg-black/50 px-1.5 py-0.5 rounded">.tmp</code> to <code className="text-white bg-black/50 px-1.5 py-0.5 rounded">.gguf</code> only after verification passes, ensuring no corrupt model is ever loaded by the runtime.
          </div>
        </div>

      </div>

      {/* CTA */}
      <div className="container-page text-center mt-32 border-t border-white/5 pt-20">
        <h2 className="text-3xl font-bold text-white mb-6">
          Ready to experience local AI?
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
