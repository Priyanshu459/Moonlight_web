"use client";

import { motion } from "framer-motion";
import { ModelNodeIcon, InferenceStreamIcon, DeviceBoundaryIcon, DownloadVerifyInstallIcon } from "@/components/ui/MoonlightIcons";

export default function HowItWorksPage() {
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVars = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-[#0A0B0E] flex flex-col font-sans">
      <main className="flex-1 pt-32 pb-24 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.02] pointer-events-none mix-blend-overlay"></div>
        <div className="absolute inset-0 hero-grid opacity-10 pointer-events-none"></div>

        {/* Header */}
        <div className="container-page mb-24 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6 tracking-wide uppercase"
          >
            Architecture
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-display-lg text-white mb-6 tracking-tight"
          >
            How Moonlight thinks.
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-white/60 max-w-2xl mx-auto"
          >
            A transparent look at the lifecycle of a prompt inside a local inference engine.
          </motion.p>
        </div>

        <div className="container-page max-w-4xl relative z-10">
          
          <motion.div 
            variants={containerVars}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-12"
          >
            {/* 01 DOWNLOAD */}
            <motion.div variants={itemVars} className="relative pl-12 md:pl-32 py-6 group">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16 group-hover:bg-indigo-500/50 transition-colors duration-500" />
              <div className="absolute left-[-5px] md:left-[59px] top-10 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-indigo-400 font-bold tracking-widest text-sm mb-4 md:mb-0">
                01 DOWNLOAD
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group-hover:border-indigo-500/20 transition-colors duration-500">
                <div className="absolute right-0 top-0 opacity-5 p-8">
                  <DownloadVerifyInstallIcon className="w-32 h-32 text-indigo-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Acquiring the Intelligence</h3>
                <p className="text-white/60 mb-6 relative z-10">
                  Before Moonlight can think, it needs a model. Compatible GGUF files are downloaded from Hugging Face directly to your device&apos;s private storage over HTTPS.
                </p>
                <div className="bg-[#0A0B0E] p-4 rounded-xl border border-white/5 text-sm font-mono text-emerald-400 flex flex-col gap-2 relative z-10 shadow-inner">
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.1 }}>&gt; Connecting to huggingface.co</motion.span>
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}>&gt; Downloading weights (Q4_K_M)</motion.span>
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>&gt; Saving GGUF to private app storage</motion.span>
                  <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.7 }} className="text-indigo-400">&gt; Saved to local storage</motion.span>
                </div>
              </div>
            </motion.div>

            {/* 02 LOAD */}
            <motion.div variants={itemVars} className="relative pl-12 md:pl-32 py-6 group">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16 group-hover:bg-emerald-500/50 transition-colors duration-500" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20 group-hover:bg-emerald-400 transition-colors duration-500" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0 group-hover:text-emerald-400 transition-colors duration-500">
                02 LOAD
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group-hover:border-emerald-500/20 transition-colors duration-500">
                <div className="absolute right-0 top-0 opacity-5 p-8">
                  <ModelNodeIcon className="w-32 h-32 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Memory Mapping</h3>
                <p className="text-white/60 relative z-10">
                  When you start a chat, Moonlight uses <code className="text-emerald-400 font-mono text-sm px-1 py-0.5 bg-emerald-500/10 rounded">llama.cpp</code> to map the model weights into your device&apos;s RAM. This prepares the neural network for inference without fully uncompressing it, preserving your device&apos;s memory.
                </p>
              </div>
            </motion.div>

            {/* 03 PROCESS */}
            <motion.div variants={itemVars} className="relative pl-12 md:pl-32 py-6 group">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16 group-hover:bg-cyan-500/50 transition-colors duration-500" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20 group-hover:bg-cyan-400 transition-colors duration-500" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0 group-hover:text-cyan-400 transition-colors duration-500">
                03 PROCESS
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group-hover:border-cyan-500/20 transition-colors duration-500">
                <div className="absolute right-0 top-0 opacity-5 p-8">
                  <DeviceBoundaryIcon className="w-32 h-32 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Tokenization & Context</h3>
                <p className="text-white/60 mb-6 relative z-10">
                  Your text prompt is converted into tokens (numbers) that the model understands. These tokens are passed into the model along with the system prompt, which defines the AI&apos;s behavior.
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.1 }} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 font-mono">&quot;What&quot; → 1245</motion.span>
                  <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 font-mono">&quot;is&quot; → 342</motion.span>
                  <motion.span initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3 }} className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70 font-mono">&quot;privacy?&quot; → 8901</motion.span>
                </div>
              </div>
            </motion.div>

            {/* 04 GENERATE */}
            <motion.div variants={itemVars} className="relative pl-12 md:pl-32 py-6 group">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16 group-hover:bg-rose-500/50 transition-colors duration-500" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20 group-hover:bg-rose-400 transition-colors duration-500" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0 group-hover:text-rose-400 transition-colors duration-500">
                04 GENERATE
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl relative overflow-hidden group-hover:border-rose-500/20 transition-colors duration-500">
                <div className="absolute right-0 top-0 opacity-[0.03] p-8">
                  <InferenceStreamIcon className="w-32 h-32 text-rose-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10 flex items-center gap-2">
                  Local Inference
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
                  </span>
                </h3>
                <p className="text-white/60 relative z-10">
                  The model calculates probabilities for the next token based on the mathematical weights stored on your phone. It uses your device&apos;s CPU/GPU to perform matrix multiplication, generating the answer one word at a time. The computation happens locally.
                </p>
              </div>
            </motion.div>

            {/* 05 RESPOND */}
            <motion.div variants={itemVars} className="relative pl-12 md:pl-32 py-6 group">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/10 to-transparent md:left-16 group-hover:from-violet-500/50 transition-colors duration-500" />
              <div className="absolute left-[-5px] md:left-[59px] top-10 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-violet-400 font-bold tracking-widest text-sm mb-4 md:mb-0">
                05 RESPOND
              </div>
              
              <div className="bg-[#111318] border border-violet-500/20 rounded-2xl p-8 shadow-[0_8px_32px_rgba(139,92,246,0.05)] relative overflow-hidden group-hover:border-violet-500/40 transition-colors duration-500">
                <h3 className="text-2xl font-bold text-white mb-4 relative z-10">De-tokenization</h3>
                <p className="text-white/60 mb-6 relative z-10">
                  The predicted tokens are converted back into human-readable text and streamed into your chat interface instantly. The entire loop completes within your physical device.
                </p>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden relative z-10">
                  <div className="h-full bg-violet-500 w-[80%] rounded-full relative">
                     <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </main>

    </div>
  );
}
