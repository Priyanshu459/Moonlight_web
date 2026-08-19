"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { faqCategories } from "@/content/faq";
import { ChevronDown, Search, Mail, BookOpen } from "lucide-react";
import { siteConfig } from "@/lib/config";

export default function SupportPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  
  const faqData = faqCategories.flatMap(c => c.questions);
  
  return (
    <div className="min-h-screen bg-[#0A0B0E] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        
        {/* Header */}
        <div className="container-page mb-16 text-center">
          <h1 className="text-display-lg text-white mb-6 tracking-tight">Need help with Moonlight?</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Everything you need to know about running local AI models on your Android device.
          </p>
        </div>

        {/* Quick Links */}
        <div className="container-page max-w-4xl mb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl bg-[#111318] border border-white/5 hover:border-indigo-500/30 transition-colors group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <BookOpen size={20} className="text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Read the Documentation</h3>
              <p className="text-white/50 text-sm">Detailed guides on model formats, GGUF quantization, and device optimization.</p>
            </div>
            
            <a href={`mailto:${siteConfig.supportEmail}`} className="p-6 rounded-2xl bg-[#111318] border border-white/5 hover:border-violet-500/30 transition-colors group cursor-pointer block">
              <div className="w-12 h-12 rounded-full bg-violet-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Mail size={20} className="text-violet-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Contact Support</h3>
              <p className="text-white/50 text-sm">Reach out to our engineering team directly for advanced troubleshooting.</p>
            </a>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="container-page max-w-3xl">
          <div className="flex items-center gap-3 mb-8">
            <Search size={20} className="text-white/40" />
            <h2 className="text-2xl font-bold text-white">Frequently Asked Questions</h2>
          </div>
          
          <div className="space-y-4">
            {faqData.map((faq, idx) => {
              const isOpen = openIndex === idx;
              
              return (
                <div 
                  key={idx}
                  className="bg-[#111318] border border-white/5 rounded-2xl overflow-hidden"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-6 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    aria-expanded={isOpen}
                  >
                    <span className="font-semibold text-white pr-8">{faq.q}</span>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="shrink-0 text-white/40"
                    >
                      <ChevronDown size={20} />
                    </motion.div>
                  </button>
                  
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-white/60 leading-relaxed text-sm">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}
