import { Lock, Cloud, ArrowDown } from "lucide-react";
import { OrbitSystem } from "@/components/ui/OrbitSystem";
import { DeviceBoundaryIcon, ModelNodeIcon, InferenceStreamIcon } from "@/components/ui/MoonlightIcons";

export function PrivacySection() {
  return (
    <section className="py-32 bg-[#0A0B0E] relative overflow-hidden border-t border-white/5">
      <div className="container-page relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-6 tracking-wide">
            <Lock size={12} />
            PRIVACY BY ARCHITECTURE
          </div>
          <h2 className="text-display-md text-white mb-6">Your AI stays close.</h2>
          <p className="text-lg text-white/60">
            Moonlight is designed around a fundamental boundary. What happens on your device, stays on your device.
          </p>
        </div>

        {/* The Architectural Visualization */}
        <div className="relative max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-stretch justify-center rounded-3xl border border-white/5 bg-[#0d0e12] overflow-hidden p-8">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
          
          {/* Network Legend */}
          <div className="flex-1 flex flex-col items-center justify-start pt-8 relative z-10">
             <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4">
                <Cloud size={24} className="text-indigo-400" />
             </div>
             <div className="text-xs font-bold text-white uppercase tracking-widest mb-1">Internet</div>
             <div className="text-[10px] text-white/40 mb-6 uppercase tracking-widest">Network Required</div>
             
             <div className="flex flex-col gap-2 w-full max-w-[200px]">
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white/70 text-center">
                  Model Download
                </div>
                <div className="bg-white/5 border border-white/10 rounded-lg p-2.5 text-xs text-white/70 text-center">
                  Play Store Access
                </div>
             </div>

             <div className="h-16 w-[1px] bg-gradient-to-b from-indigo-500/50 to-transparent my-4 relative">
                <ArrowDown size={14} className="text-indigo-400 absolute -bottom-3 -left-[6px]" />
             </div>
          </div>

          {/* The Local Boundary */}
          <div className="flex-[2] relative z-10 w-full rounded-2xl border-2 border-emerald-500/30 bg-emerald-500/5 p-8 flex flex-col items-center shadow-[inset_0_0_80px_rgba(16,185,129,0.05)]">
            
            <div className="absolute -top-3 bg-[#0d0e12] px-3 flex items-center gap-2">
               <DeviceBoundaryIcon className="w-4 h-4 text-emerald-400" />
               <span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">Your Device</span>
            </div>
            <div className="absolute -bottom-3 bg-[#0d0e12] px-3">
               <span className="text-[10px] font-bold tracking-widest text-emerald-400/50 uppercase">Strictly Local Boundary</span>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
               <OrbitSystem size={350} />
            </div>

            {/* Inner Device Stack */}
            <div className="flex flex-col items-center w-full gap-4 relative z-10 mt-4">
              <div className="w-full max-w-[280px] flex items-center gap-4 px-5 py-4 rounded-xl bg-[#1a1b20] border border-white/10 shadow-lg">
                <ModelNodeIcon className="w-6 h-6 text-indigo-400" />
                <div>
                   <div className="text-sm font-semibold text-white">GGUF Model</div>
                   <div className="text-[10px] text-white/50">Stored in local storage</div>
                </div>
              </div>
              
              <div className="w-[1px] h-4 bg-white/20" />
              
              <div className="w-full max-w-[280px] flex items-center gap-4 px-5 py-4 rounded-xl bg-[#1a1b20] border border-emerald-500/20 shadow-[0_0_20px_rgba(16,185,129,0.1)]">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center relative">
                   <div className="absolute inset-0 bg-emerald-500/20 rounded-full animate-pulse" />
                   <InferenceStreamIcon className="w-3 h-3 text-emerald-400" />
                </div>
                <div>
                   <div className="text-sm font-semibold text-white">Inference Engine</div>
                   <div className="text-[10px] text-emerald-400/80">llama.cpp • CPU/GPU</div>
                </div>
              </div>
              
              <div className="w-[1px] h-4 bg-white/20" />
              
              <div className="w-full max-w-[280px] flex items-center gap-4 px-5 py-4 rounded-xl bg-[#1a1b20] border border-white/10 shadow-lg">
                <Lock size={20} className="text-violet-400" />
                <div>
                   <div className="text-sm font-semibold text-white">Private Conversations</div>
                   <div className="text-[10px] text-white/50">Stored in local database</div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
