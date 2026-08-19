import { Lock, Cpu, CloudOff, HardDrive } from "lucide-react";
import { OrbitSystem } from "@/components/ui/OrbitSystem";

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
        <div className="relative max-w-4xl mx-auto h-[500px] flex items-center justify-center rounded-3xl border border-white/5 bg-[#0d0e12] overflow-hidden">
          
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02]"></div>
          <div className="absolute inset-0 hero-grid opacity-30"></div>

          {/* Distant Cloud */}
          <div className="absolute top-8 right-8 flex items-center gap-3 opacity-30">
             <CloudOff size={24} className="text-white/40" />
             <span className="text-xs font-bold tracking-widest text-white/40 uppercase">Distant Cloud</span>
          </div>

          {/* The Local Boundary */}
          <div className="relative z-10 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full border border-indigo-500/30 bg-indigo-500/5 flex items-center justify-center shadow-[inset_0_0_80px_rgba(91,124,249,0.1)]">
            
            <div className="absolute -top-3 bg-[#0d0e12] px-2 text-[10px] font-bold tracking-widest text-indigo-400 uppercase">
               Device Boundary
            </div>

            <OrbitSystem size={350} className="absolute opacity-40" />

            {/* Inner Device Stack */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <HardDrive size={16} className="text-indigo-400" />
                <span className="text-sm font-medium text-white/90">Local Storage</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Cpu size={16} className="text-violet-400" />
                <span className="text-sm font-medium text-white/90">Neural Inference</span>
              </div>
              
              <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Lock size={16} className="text-emerald-400" />
                <span className="text-sm font-medium text-white/90">Private Memory</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
