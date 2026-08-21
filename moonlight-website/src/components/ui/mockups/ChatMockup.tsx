"use client";

import { Mic, ArrowUp } from "lucide-react";
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
    <div className="flex flex-col h-full bg-[#0d0e12] font-sans">
      {/* App Bar */}
      <div className="px-4 py-3 border-b border-white/5 bg-[#121318]/90 backdrop-blur-md flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-indigo-500/10 animate-pulse" />
            <span className="text-indigo-400 text-[10px] font-bold z-10">M</span>
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Phi-3 Mini</div>
            <div className="text-[9px] text-white/50 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
              Running locally · 19.4 t/s
            </div>
          </div>
        </div>
        <div className="w-5 h-5 rounded-full bg-white/5 border border-white/10" />
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 space-y-4 flex flex-col justify-end pb-2">
        <div className="flex flex-col gap-1 items-end self-end max-w-[85%]">
          <div className="bg-[#2a2b32] text-white text-xs px-3.5 py-2.5 rounded-2xl rounded-tr-sm leading-relaxed">
            Can you explain how local LLM inference works without the internet?
          </div>
        </div>

        <div className="flex gap-2 max-w-[90%]">
          <div className="w-6 h-6 shrink-0 rounded bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mt-1">
            <span className="text-indigo-400 text-[10px] font-bold">M</span>
          </div>
          <div className="flex flex-col gap-1">
            <motion.div 
              className="bg-transparent text-white/90 text-xs px-2 py-1.5 leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <motion.p variants={paragraphVariants} className="mb-2">Local LLM inference runs on your device&apos;s hardware (CPU/GPU) rather than sending data to a cloud server.</motion.p>
              <motion.p variants={paragraphVariants} className="mb-2">Moonlight uses <strong className="text-white">llama.cpp</strong> which is highly optimized for mobile devices. The model weights are stored locally on your phone&apos;s storage in a quantized format (GGUF).</motion.p>
              <motion.p variants={paragraphVariants}>Because the computation happens on-device, it works offline and your chat history is stored locally.</motion.p>
            </motion.div>
            {/* Typing indicator simulating generation */}
            <div className="flex items-center gap-1 px-2 mt-1">
              <div className="w-1 h-3 rounded-sm bg-indigo-400/50 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Input Bar */}
      <div className="p-3 bg-[#121318] border-t border-white/5 shrink-0">
        <div className="bg-[#1a1b20] border border-white/10 rounded-2xl p-1.5 flex items-end">
          <button className="w-8 h-8 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
            <Mic size={14} className="text-white/60" />
          </button>
          <div className="flex-1 px-2 py-2 text-xs text-white/40">
            Message Moonlight...
          </div>
          <button className="w-8 h-8 rounded-xl bg-indigo-500 flex items-center justify-center shrink-0">
            <ArrowUp size={16} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}
