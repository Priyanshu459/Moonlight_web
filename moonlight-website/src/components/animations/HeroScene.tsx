"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/config";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";
import { ChatMockup } from "@/components/ui/mockups/ChatMockup";
import { OrbitSystem } from "@/components/ui/OrbitSystem";
import { ArrowRight } from "lucide-react";

export function HeroScene() {
  const prefersReducedMotion = useReducedMotion();
  
  // Animation variants
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };
  
  const itemVars = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden hero-gradient border-b border-white/5 min-h-[90vh] flex items-center">
      {/* Background Noise */}
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none mix-blend-overlay"></div>
      
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 lg:gap-8">
          
          {/* Typography / Copy side */}
          <motion.div 
            className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left z-20"
            variants={containerVars}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVars} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-8 tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              LOCAL INTELLIGENCE INTERFACE
            </motion.div>
            
            <motion.h1 variants={itemVars} className="text-display-lg text-white mb-6 tracking-tight leading-[1.05]">
              Private AI.<br />
              <span className="gradient-text">Running on your device.</span>
            </motion.h1>
            
            <motion.p variants={itemVars} className="text-lg text-white/60 mb-10 max-w-lg leading-relaxed">
              Moonlight brings powerful language models directly to Android. 
              No cloud dependency. No data harvesting. Intelligence that stays close.
            </motion.p>
            
            <motion.div variants={itemVars} className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {siteConfig.playStoreUrl ? (
                <a
                  href={siteConfig.playStoreUrl}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-2xl transition-all hover:shadow-[0_0_30px_rgba(99,102,241,0.4)]"
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
                className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/5 border border-white/10 text-white font-medium rounded-2xl transition-colors group"
              >
                See how it works
                <ArrowRight size={16} className="text-white/50 group-hover:text-white transition-colors group-hover:translate-x-1 duration-300" />
              </a>
            </motion.div>
          </motion.div>

          {/* Cinematic Visualization Side */}
          <div className="lg:w-1/2 w-full flex justify-center relative min-h-[500px]">
            {/* The Orbit System acting as a halo behind the device */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 scale-[0.6] sm:scale-100 opacity-60">
              <OrbitSystem size={500} />
            </div>
            
            {/* Architectural Nodes floating around device */}
            {!prefersReducedMotion && (
              <>
                <motion.div 
                  className="absolute top-[15%] left-[10%] hidden md:flex flex-col items-center gap-2"
                  initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1, duration: 1 }}
                >
                  <div className="text-[9px] font-bold tracking-widest text-indigo-400 uppercase">Model</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-[20%] right-[10%] hidden md:flex flex-col items-center gap-2"
                  initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5, duration: 1 }}
                >
                  <div className="text-[9px] font-bold tracking-widest text-violet-400 uppercase">Response</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
                </motion.div>
              </>
            )}

            {/* The Device */}
            <div className="relative z-20 w-full max-w-[320px]">
              <PhoneMockup animated>
                <ChatMockup />
              </PhoneMockup>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
