"use client";

import { Mic, ArrowUp, Globe } from "lucide-react";
import { motion } from "framer-motion";

export function ChatMockup() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.8, delayChildren: 1 } 
    }
  };

  const paragraphVariants = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex flex-col h-full bg-[#090b10] font-sans select-none">
      {/* App Bar */}
      <div className="px-4 py-3 border-b border-white/5 bg-[#11141b]/95 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-lg bg-[#725cff]/20 border border-[#725cff]/40 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[#725cff]/10 animate-pulse" />
            <span className="text-[#c7bfff] text-[10px] font-bold z-10 font-mono">M</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-white flex items-center gap-1.5">
              <span>Llama 3.2 1B</span>
              <span className="text-[9px] px-1.5 py-0.2 rounded bg-white/5 text-white/50 border border-white/10 font-mono">Q4_K_M</span>
            </div>
            <div className="text-[9px] text-white/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10b981] animate-pulse" />
              <span>llama.rn CPU · 19.4 t/s · Midnight</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-mono">
            LOCAL
          </span>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 flex flex-col justify-end pb-2">
        <div className="flex flex-col gap-1 items-end self-end max-w-[88%]">
          <div className="bg-[#1e1f25] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm leading-relaxed border border-white/5">
            Can you explain how local LLM inference works without the internet?
          </div>
        </div>

        <div className="flex gap-2.5 max-w-[92%]">
          <div className="w-6 h-6 shrink-0 rounded-lg bg-[#725cff]/20 border border-[#725cff]/30 flex items-center justify-center mt-1">
            <span className="text-[#c7bfff] text-[10px] font-bold font-mono">M</span>
          </div>
          <div className="flex flex-col gap-1">
            <motion.div 
              className="bg-transparent text-white/90 text-xs px-1 py-1 leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={paragraphVariants} className="mb-2">Local LLM inference runs directly on your phone&apos;s ARM64 CPU rather than sending prompts to cloud data centers.</motion.p>
              <motion.p variants={paragraphVariants} className="mb-2">Moonlight uses <strong className="text-white font-medium">llama.rn</strong> with GGUF weights stored in private MMKV storage. Context fitting dynamically trims tokens to preserve memory.</motion.p>
              <motion.p variants={paragraphVariants} className="text-white/70">In Phone mode, inference runs locally on-device without third-party tracking or mandatory subscriptions.</motion.p>
            </motion.div>
            {/* Typing indicator simulating generation */}
            <div className="flex items-center gap-1 px-1 mt-1">
              <div className="w-1.5 h-3.5 rounded-sm bg-[#725cff] animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-[#11141b] border-t border-white/5 shrink-0">
        <div className="bg-[#191a21] border border-white/10 rounded-2xl p-1.5 flex items-center gap-1">
          <button className="w-7 h-7 rounded-xl bg-white/5 flex items-center justify-center shrink-0 hover:bg-white/10 text-white/60 transition-colors" title="Voice Input">
            <Mic size={13} />
          </button>
          <button className="h-7 px-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center gap-1 text-[10px] text-cyan-300 font-mono shrink-0 hover:bg-cyan-500/20 transition-colors" title="Web Search Opt-in">
            <Globe size={11} />
            <span>WEB</span>
          </button>
          <div className="flex-1 px-2 py-1.5 text-xs text-white/40">
            Ask Moonlight...
          </div>
          <button className="w-7 h-7 rounded-xl bg-[#725cff] hover:bg-[#5e49f0] flex items-center justify-center shrink-0 text-white transition-colors">
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </div>
  );
}
