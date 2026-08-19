"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";

export function ScrollScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Simplified animation map mapped to scroll progress (0 to 1)
  // Stage 1 (0.0 - 0.1): Model outside
  // Stage 2 (0.1 - 0.2): Download to device
  // Stage 3 (0.2 - 0.3): Load local
  // Stage 4 (0.4 - 0.5): Prompt
  // Stage 5 (0.6 - 0.7): Inference
  // Stage 6 (0.8 - 1.0): Response stays local

  // External Model Node
  const modelY = useTransform(scrollYProgress, [0, 0.15, 0.25], [-150, 50, 150]);
  const modelOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2, 0.25], [1, 1, 1, 0]);
  const modelScale = useTransform(scrollYProgress, [0, 0.15, 0.25], [1, 1, 0]);

  // Phone glow/active state
  const phoneGlowOpacity = useTransform(scrollYProgress, [0.2, 0.3, 0.9, 1], [0, 1, 1, 0]);
  
  // UI Elements appearing
  const uiOpacity1 = useTransform(scrollYProgress, [0.35, 0.4], [0, 1]); // Prompt
  const uiOpacity2 = useTransform(scrollYProgress, [0.55, 0.6], [0, 1]); // Response
  
  // Text messages fading in/out based on scroll
  const textOpacity1 = useTransform(scrollYProgress, [0, 0.05, 0.15, 0.2], [0, 1, 1, 0]); // "Model in Cloud"
  const textOpacity2 = useTransform(scrollYProgress, [0.15, 0.2, 0.3, 0.35], [0, 1, 1, 0]); // "Downloaded to device"
  const textOpacity3 = useTransform(scrollYProgress, [0.3, 0.35, 0.5, 0.55], [0, 1, 1, 0]); // "Loaded Locally & Prompt"
  const textOpacity4 = useTransform(scrollYProgress, [0.5, 0.55, 0.7, 0.75], [0, 1, 1, 0]); // "Inference visualization"
  const textOpacity5 = useTransform(scrollYProgress, [0.75, 0.8, 1, 1], [0, 1, 1, 1]); // "Stays on device"

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
    <section ref={containerRef} className="relative h-[400vh] bg-[#0A0B0E]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Text Overlay */}
        <div className="absolute top-[15%] w-full px-4 text-center z-30">
          <motion.div style={{ opacity: textOpacity1, position: "absolute", width: "100%", left: 0 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Select a Model</h3>
            <p className="text-white/50 mt-2">Connecting to verified Hugging Face sources.</p>
          </motion.div>
          <motion.div style={{ opacity: textOpacity2, position: "absolute", width: "100%", left: 0 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Downloaded to Device</h3>
            <p className="text-white/50 mt-2">Saved directly to your local storage. SHA-256 verified.</p>
          </motion.div>
          <motion.div style={{ opacity: textOpacity3, position: "absolute", width: "100%", left: 0 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Loaded Locally</h3>
            <p className="text-white/50 mt-2">llama.cpp maps the model into your device&apos;s memory.</p>
          </motion.div>
          <motion.div style={{ opacity: textOpacity4, position: "absolute", width: "100%", left: 0 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-white tracking-tight">Local Inference</h3>
            <p className="text-white/50 mt-2">CPU & GPU working without a network connection.</p>
          </motion.div>
          <motion.div style={{ opacity: textOpacity5, position: "absolute", width: "100%", left: 0 }}>
            <h3 className="text-2xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-indigo-400 tracking-tight">
              Nothing about inference requires a cloud.
            </h3>
            <p className="text-white/50 mt-2">Your data stays exactly where it belongs.</p>
          </motion.div>
        </div>

        {/* The External Model Node */}
        <motion.div 
          className="absolute z-40 flex flex-col items-center"
          style={{ y: modelY, opacity: modelOpacity, scale: modelScale, top: "25%" }}
        >
          <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center backdrop-blur-sm shadow-[0_0_30px_rgba(99,102,241,0.3)]">
            <span className="text-indigo-300 font-bold text-xs">L3</span>
          </div>
        </motion.div>

        {/* Central Device */}
        <div className="relative z-20 w-[280px] md:w-[320px] mt-24">
          
          {/* Active Glow when loaded */}
          <motion.div 
            className="absolute inset-0 bg-indigo-500/20 blur-[80px] rounded-full -z-10"
            style={{ opacity: phoneGlowOpacity }}
          />

          <PhoneMockup className="!max-w-[280px] md:!max-w-[320px]">
             <div className="flex flex-col h-full bg-[#0d0e12]">
                <div className="px-4 py-3 border-b border-white/5 bg-[#121318]/90 backdrop-blur-md flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-indigo-500/20 flex items-center justify-center">
                      <span className="text-indigo-400 text-[10px] font-bold">L3</span>
                    </div>
                    <div className="text-xs font-semibold text-white">Llama 3 8B</div>
                  </div>
                </div>

                <div className="flex-1 p-4 flex flex-col justify-end pb-4 gap-4">
                  {/* Prompt */}
                  <motion.div 
                    className="bg-[#2a2b32] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm self-end max-w-[85%]"
                    style={{ opacity: uiOpacity1 }}
                  >
                    Summarize the benefits of local inference.
                  </motion.div>
                  
                  {/* Response */}
                  <motion.div 
                    className="text-white/90 text-xs px-2 py-1.5 self-start max-w-[90%]"
                    style={{ opacity: uiOpacity2 }}
                  >
                    1. Privacy by Architecture: Chats stay on your device.<br/>
                    2. Offline Capable: Works without internet.<br/>
                    3. Zero Latency: No network roundtrips.
                  </motion.div>
                </div>
             </div>
          </PhoneMockup>
        </div>
        
      </div>
    </section>
  );
}
