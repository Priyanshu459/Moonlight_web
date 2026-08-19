"use client";

import { useState } from "react";
import { ChevronDown, Mail, Search, MessageCircleQuestion } from "lucide-react";
import { faqCategories } from "@/content/faq";
import { siteConfig } from "@/lib/config";

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/5 last:border-0">
      <button
        className="w-full flex items-start justify-between gap-6 py-6 text-left group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-white/90 group-hover:text-white transition-colors">
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0 transition-transform duration-300 ${open ? "rotate-180 bg-white/10" : ""}`}>
          <ChevronDown size={16} className="text-white/50 group-hover:text-white/80" />
        </div>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? "max-h-96 opacity-100 pb-6" : "max-h-0 opacity-0"}`}
      >
        <p className="text-sm text-white/60 leading-relaxed max-w-3xl pr-12">{a}</p>
      </div>
    </div>
  );
}

export default function SupportPage() {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0].id);

  return (
    <div className="pt-32 pb-20">
      {/* Header */}
      <div className="container-page text-center mb-20 border-b border-white/5 pb-20">
        <div className="inline-block px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 rounded-full border border-indigo-500/20 mb-6">
          Support Center
        </div>
        <h1 className="text-display-lg text-white mb-6">
          How can we <span className="gradient-text">help?</span>
        </h1>
        <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed mb-10">
          Find answers to common questions about Moonlight AI, local inference, and troubleshooting.
        </p>

        {/* Search Mock */}
        <div className="max-w-xl mx-auto relative group">
          <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
            <Search size={18} className="text-white/40 group-focus-within:text-indigo-400 transition-colors" />
          </div>
          <input 
            type="text" 
            placeholder="Search for answers..." 
            className="w-full bg-[#121318] border border-white/10 rounded-2xl py-4 pl-12 pr-6 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all shadow-[0_0_24px_rgba(0,0,0,0.5)]"
          />
        </div>
      </div>

      <div className="container-page max-w-5xl">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Tabs */}
          <div className="lg:w-1/3 shrink-0">
            <div className="sticky top-28 space-y-2">
              <h3 className="text-[10px] font-bold text-white/40 uppercase tracking-widest mb-6 px-4">Categories</h3>
              {faqCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all ${
                    activeCategory === cat.id
                      ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 shadow-[0_0_15px_rgba(99,102,241,0.05)]"
                      : "bg-transparent text-white/50 border border-transparent hover:bg-white/5 hover:text-white/80"
                  }`}
                >
                  <MessageCircleQuestion size={16} className={activeCategory === cat.id ? "text-indigo-400" : "text-white/30"} />
                  {cat.title}
                </button>
              ))}

              <div className="mt-12 p-6 rounded-3xl bg-[#121318] border border-white/5">
                <h4 className="text-sm font-bold text-white mb-2">Still need help?</h4>
                <p className="text-xs text-white/50 leading-relaxed mb-6">
                  If you couldn&apos;t find an answer to your problem, reach out to our support team.
                </p>
                <a
                  href={`mailto:${siteConfig.supportEmail}`}
                  className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-white/5 hover:bg-white/10 text-white text-xs font-bold rounded-xl transition-colors border border-white/10"
                >
                  <Mail size={14} />
                  Contact Support
                </a>
              </div>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:w-2/3">
            <div className="p-8 md:p-10 rounded-[2.5rem] bg-[#121318] border border-white/5 shadow-2xl relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-white/2 to-transparent pointer-events-none"></div>
              
              <h2 className="text-2xl font-bold text-white mb-2">
                {faqCategories.find((c) => c.id === activeCategory)?.title}
              </h2>
              <p className="text-sm text-white/40 mb-8 pb-8 border-b border-white/5">
                Frequently asked questions and solutions.
              </p>

              <div>
                {faqCategories
                  .find((cat) => cat.id === activeCategory)
                  ?.questions.map((item, idx) => (
                    <FaqItem key={idx} q={item.q} a={item.a} />
                  ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
