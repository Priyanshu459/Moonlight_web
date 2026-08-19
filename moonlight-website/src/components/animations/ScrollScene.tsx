"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";
import { OrbitSystem } from "@/components/ui/OrbitSystem";
import { ModelNodeIcon } from "@/components/ui/MoonlightIcons";

export function ScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Stage 1 (0.0 - 0.1): Model Downloaded
  // Stage 2 (0.1 - 0.25): Integrity Verified
  // Stage 3 (0.25 - 0.35): Installed
  // Stage 4 (0.35 - 0.5): Loaded
  // Stage 5 (0.5 - 0.6): Prompt
  // Stage 6 (0.6 - 0.75): Local Inference
  // Stage 7 (0.75 - 0.9): Token Stream
  // Stage 8 (0.9 - 1.0): Response

  // Text overlays
  const t1 = useTransform(scrollYProgress, [0, 0.05, 0.1, 0.15], [0, 1, 1, 0]);
  const t2 = useTransform(scrollYProgress, [0.1, 0.15, 0.25, 0.3], [0, 1, 1, 0]);
  const t3 = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);
  const t4 = useTransform(scrollYProgress, [0.35, 0.4, 0.5, 0.55], [0, 1, 1, 0]);
  const t5 = useTransform(scrollYProgress, [0.5, 0.55, 0.6, 0.65], [0, 1, 1, 0]);
  const t6 = useTransform(scrollYProgress, [0.6, 0.65, 0.75, 0.8], [0, 1, 1, 0]);
  const t7 = useTransform(scrollYProgress, [0.75, 0.8, 0.9, 0.95], [0, 1, 1, 0]);
  const t8 = useTransform(scrollYProgress, [0.9, 0.95, 1, 1], [0, 1, 1, 1]);

  // Model node outside entering device
  const modelY = useTransform(scrollYProgress, [0, 0.2, 0.4], [-250, -100, 100]);
  const modelOpacity = useTransform(scrollYProgress, [0, 0.1, 0.35, 0.4], [0, 1, 1, 0]);
  const modelScale = useTransform(scrollYProgress, [0, 0.2, 0.35, 0.4], [0.8, 1, 1, 0.5]);

  // Phone active glow
  const phoneGlowOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.9, 1], [0, 1, 1, 0]);
  
  // Orbit system opacity (appears when loaded)
  const orbitOpacity = useTransform(scrollYProgress, [0.35, 0.45, 0.9, 1], [0, 0.5, 0.5, 0]);

  // UI Elements appearing inside mockup
  const uiOpacityPrompt = useTransform(scrollYProgress, [0.5, 0.55], [0, 1]);
  const uiOpacityStream = useTransform(scrollYProgress, [0.75, 0.8], [0, 1]);
  const uiOpacityResponse = useTransform(scrollYProgress, [0.9, 0.95], [0, 1]);
  const uiOpacityStreamFade = useTransform(scrollYProgress, [0.9, 0.95], [1, 0]);

  if (prefersReducedMotion) {
    return (
      <section className="py-24 bg-[#0A0B0E] border-t border-white/5">
        <div className="container-page text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Inference is designed to run locally.</h2>
          <div className="max-w-xs mx-auto">
             <PhoneMockup>
               <div className="p-4 pt-12 flex flex-col gap-4">
                 <div className="bg-[#2a2b32] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm self-end">
                   How does this work?
                 </div>
                 <div className="bg-transparent text-white/90 text-xs px-2 py-1.5 self-start">
                   The model downloads to your storage. Once loaded, inference happens using your phone&apos;s processor.
                 </div>
               </div>
             </PhoneMockup>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="relative h-[800vh] bg-[#0A0B0E]">
      <div className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden">
        
        {/* Dynamic Text Overlay */}
        <div className="absolute top-[12%] md:top-[15%] w-full px-4 text-center z-30">
          <motion.div style={{ opacity: t1, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-3">Step 01</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Model Downloaded</h3>
            <p className="text-white/50 mt-2">GGUF weights retrieved from Hugging Face.</p>
          </motion.div>
          <motion.div style={{ opacity: t2, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-3">Step 02</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Integrity Verified</h3>
            <p className="text-white/50 mt-2">SHA-256 checksums confirmed on local storage.</p>
          </motion.div>
          <motion.div style={{ opacity: t3, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-3">Step 03</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Model Installed</h3>
            <p className="text-white/50 mt-2">Ready for execution on the neural engine.</p>
          </motion.div>
          <motion.div style={{ opacity: t4, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-indigo-400 tracking-widest uppercase mb-3">Step 04</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Loaded into Memory</h3>
            <p className="text-white/50 mt-2">llama.cpp maps weights into device RAM.</p>
          </motion.div>
          <motion.div style={{ opacity: t5, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-violet-400 tracking-widest uppercase mb-3">Step 05</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Prompt Enters</h3>
            <p className="text-white/50 mt-2">Your text is tokenized locally.</p>
          </motion.div>
          <motion.div style={{ opacity: t6, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-violet-400 tracking-widest uppercase mb-3">Step 06</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Local Inference Begins</h3>
            <p className="text-white/50 mt-2">CPU/GPU calculates probabilities.</p>
          </motion.div>
          <motion.div style={{ opacity: t7, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-violet-400 tracking-widest uppercase mb-3">Step 07</div>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Tokens Stream</h3>
            <p className="text-white/50 mt-2">De-tokenization generates readable text.</p>
          </motion.div>
          <motion.div style={{ opacity: t8, position: "absolute", width: "100%", left: 0 }}>
            <div className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-3">Step 08</div>
            <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 tracking-tight">
              Watch intelligence stay local.
            </h3>
            <p className="text-white/50 mt-2">Nothing about this required a cloud server.</p>
          </motion.div>
        </div>

        {/* The External Model Node */}
        <motion.div 
          className="absolute z-40 flex flex-col items-center"
          style={{ y: modelY, opacity: modelOpacity, scale: modelScale, top: "45%" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <ModelNodeIcon className="w-6 h-6 text-indigo-300" />
          </div>
          <div className="text-[9px] font-bold tracking-widest text-indigo-400 uppercase mt-3">Phi-3 Mini</div>
        </motion.div>

        {/* Central Device */}
        <div className="relative z-20 w-full max-w-[280px] md:max-w-[320px] mt-24">
          
          {/* Active Glow when loaded */}
          <motion.div 
            className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full -z-10"
            style={{ opacity: phoneGlowOpacity }}
          />

          <motion.div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 scale-[0.5] sm:scale-90"
            style={{ opacity: orbitOpacity }}
          >
            <OrbitSystem size={450} />
          </motion.div>

          <PhoneMockup className="mx-auto">
             <div className="flex flex-col h-[500px] bg-[#0d0e12]">
                <div className="px-4 py-3 border-b border-white/5 bg-[#121318]/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <motion.div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center relative overflow-hidden">
                      <motion.div style={{ opacity: phoneGlowOpacity }} className="absolute inset-0 bg-indigo-500/20 animate-pulse" />
                      <span className="text-indigo-400 text-[10px] font-bold z-10">M</span>
                    </motion.div>
                    <div className="text-xs font-semibold text-white">Phi-3 Mini</div>
                  </div>
                </div>

                <div className="flex-1 p-4 flex flex-col justify-end pb-4 gap-4">
                  {/* Prompt */}
                  <motion.div 
                    className="bg-[#2a2b32] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm self-end max-w-[85%]"
                    style={{ opacity: uiOpacityPrompt }}
                  >
                    What happens to my data?
                  </motion.div>
                  
                  {/* Response Generation */}
                  <motion.div 
                    className="flex gap-2 max-w-[90%]"
                    style={{ opacity: uiOpacityStream }}
                  >
                    <div className="w-6 h-6 shrink-0 rounded bg-indigo-500/20 flex items-center justify-center mt-1">
                      <span className="text-indigo-400 text-[10px] font-bold">M</span>
                    </div>
                    <div className="flex flex-col gap-1 w-full">
                      <motion.div 
                        className="bg-transparent text-white/90 text-xs px-2 py-1.5"
                        style={{ opacity: uiOpacityResponse }}
                      >
                        Privacy by Architecture: Chats stay on your device. It never touches a network.
                      </motion.div>
                      <motion.div className="flex items-center gap-1 px-2 mt-1" style={{ opacity: uiOpacityStreamFade }}>
                        <div className="w-1 h-3 rounded-sm bg-indigo-400/50 animate-pulse" />
                      </motion.div>
                    </div>
                  </motion.div>
                </div>
             </div>
          </PhoneMockup>
        </div>
        
      </div>
    </section>
  );
}
