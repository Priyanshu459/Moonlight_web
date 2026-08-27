"use client";

import { Download, CheckCircle2, Search, ArrowLeft, Database, Zap } from "lucide-react";
import { motion } from "framer-motion";

export function ModelStoreMockup() {
  return (
    <div className="flex flex-col h-full bg-[#0d0e12] font-sans">
      {/* App Bar */}
      <div className="px-4 py-3 border-b border-white/5 bg-[#121318]/90 backdrop-blur-md flex items-center gap-3 sticky top-0 z-10">
        <ArrowLeft size={16} className="text-white/70" />
        <div className="text-sm font-semibold text-white">Model Catalog</div>
      </div>

      <div className="flex-1 p-4 space-y-4 overflow-y-auto hide-scrollbar">
        {/* Search */}
        <div className="bg-[#1a1b20] border border-white/5 rounded-xl p-2.5 flex items-center gap-2">
          <Search size={14} className="text-white/40" />
          <div className="text-xs text-white/40">Search models...</div>
        </div>

        {/* Section: Installed */}
        <div>
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2 px-1">Installed</div>
          <div className="bg-[#1a1b20] border border-white/5 rounded-xl p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                <span className="text-indigo-400 text-xs font-bold">L1</span>
              </div>
              <div>
                <div className="text-xs font-semibold text-white">Llama 3.2 1B</div>
                <div className="text-[10px] text-white/50">1.3 GB • Offline Ready</div>
              </div>
            </div>
            <div className="w-6 h-6 rounded-full bg-green-500/10 flex items-center justify-center">
              <CheckCircle2 size={12} className="text-green-400" />
            </div>
          </div>
        </div>

        {/* Section: Model Installation Demonstration */}
        <div>
          <div className="text-[10px] font-semibold text-indigo-400 uppercase tracking-widest mb-2 px-1 flex items-center gap-1">
            <Zap size={10} /> How model installation works
          </div>
          <div className="bg-[#1a1b20] border border-indigo-500/20 rounded-xl p-3 flex flex-col gap-3 relative overflow-hidden">
            {/* Active highlight */}
            <div className="absolute inset-x-0 top-0 h-0.5 bg-indigo-500" />
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center relative overflow-hidden">
                   <div className="absolute inset-0 bg-emerald-500/10 animate-pulse" />
                  <span className="text-emerald-400 text-xs font-bold z-10">D1</span>
                </div>
                <div>
                  <div className="text-xs font-semibold text-white">Qwen 2.5 1.5B</div>
                  <div className="text-[10px] text-white/50 flex items-center gap-1">
                    <motion.span 
                      animate={{ opacity: [0.5, 1, 0.5] }} 
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      Downloading over HTTPS...
                    </motion.span>
                  </div>
                </div>
              </div>
              <div className="text-[10px] font-mono text-indigo-400 font-medium">Wait</div>
            </div>
            
            {/* Installation Pipeline visualization */}
            <div className="flex justify-between items-center text-[8px] text-white/40 px-1 mt-1 font-mono uppercase">
               <div className="flex flex-col items-center gap-1 text-emerald-400">
                  <Download size={10} />
                  <span>Download</span>
               </div>
               <div className="h-[1px] flex-1 bg-white/10 mx-2" />
               <div className="flex flex-col items-center gap-1 text-indigo-400"><Database size={10} /><span>Save</span></div>
               <div className="h-[1px] flex-1 bg-white/10 mx-2" />
               <div className="flex flex-col items-center gap-1">
                  <Database size={10} />
                  <span>Install</span>
               </div>
            </div>

            {/* Progress Bar */}
            <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden mt-1">
              <div className="h-full bg-indigo-500 rounded-full w-[60%] relative">
                <div className="absolute inset-0 bg-white/20 animate-pulse" />
              </div>
            </div>
          </div>
        </div>

        {/* Section: Available */}
        <div>
          <div className="text-[10px] font-semibold text-white/40 uppercase tracking-widest mb-2 px-1">Available Models</div>
          <div className="bg-[#1a1b20] border border-white/5 rounded-xl flex flex-col divide-y divide-white/5">
            {[
              { id: 'Q2', name: 'Qwen 2.5 1.5B', size: '1.1 GB', color: 'purple', author: 'Alibaba' },
              { id: 'L1', name: 'Llama 3.2 1B', size: '1.3 GB', color: 'cyan', author: 'Meta AI' },
            ].map((model) => (
              <div key={model.id} className="p-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg bg-${model.color}-500/10 border border-${model.color}-500/20 flex items-center justify-center`}>
                    <span className={`text-${model.color}-400 text-xs font-bold`}>{model.id}</span>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">{model.name}</div>
                    <div className="text-[10px] text-white/50">{model.size} • {model.author}</div>
                  </div>
                </div>
                <button className="w-6 h-6 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors">
                  <Download size={12} className="text-white/70" />
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
