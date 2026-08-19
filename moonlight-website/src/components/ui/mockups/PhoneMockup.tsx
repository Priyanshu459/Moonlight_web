"use client";

import { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";

export function PhoneMockup({ 
  children, 
  className = "", 
  animated = false 
}: { 
  children: ReactNode;
  className?: string;
  animated?: boolean;
}) {
  const prefersReducedMotion = useReducedMotion();
  const shouldAnimate = animated && !prefersReducedMotion;

  return (
    <div className={`perspective-1000 relative mx-auto w-full max-w-[320px] aspect-[9/19.5] group ${className}`}>
      {/* Device Frame */}
      <motion.div 
        className="absolute inset-0 rounded-[3rem] bg-[#0A0B0E] border-[6px] border-[#2c2d30] shadow-2xl overflow-hidden ring-1 ring-white/10 flex flex-col"
        initial={shouldAnimate ? { rotateY: 20, rotateX: 10, scale: 0.95, opacity: 0 } : false}
        animate={shouldAnimate ? { rotateY: 0, rotateX: 0, scale: 1, opacity: 1 } : false}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Dynamic Island / Camera cutout */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50">
          <div className="w-24 h-6 bg-black rounded-b-3xl shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)]" />
        </div>

        {/* Screen content area */}
        <div className="flex-1 w-full h-full bg-[#0d0e12] relative overflow-hidden flex flex-col">
          {/* Status bar mockup */}
          <div className="h-10 w-full flex justify-between items-center px-6 pt-2 shrink-0 z-40 relative">
            <span className="text-[10px] font-medium text-white/80">9:41</span>
            <div className="flex gap-1.5 items-center">
              {/* Cellular */}
              <div className="flex gap-0.5 items-end h-2.5">
                <div className="w-[2px] h-[4px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[6px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[8px] bg-white/80 rounded-sm"></div>
                <div className="w-[2px] h-[10px] bg-white/80 rounded-sm"></div>
              </div>
              {/* WiFi */}
              <svg width="12" height="10" viewBox="0 0 16 12" fill="none" className="text-white/80 opacity-90">
                <path d="M8 12C9.10457 12 10 11.1046 10 10C10 8.89543 9.10457 8 8 8C6.89543 8 6 8.89543 6 10C6 11.1046 6.89543 12 8 12Z" fill="currentColor"/>
                <path d="M11.5 6.5C10.5 5.5 9.3 5 8 5C6.7 5 5.5 5.5 4.5 6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                <path d="M14 4C12.3 2.3 10.2 1.5 8 1.5C5.8 1.5 3.7 2.3 2 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              {/* Battery */}
              <div className="w-5 h-2.5 border border-white/40 rounded-[3px] p-[1px] flex relative">
                <div className="w-[80%] h-full bg-white/90 rounded-[1px]"></div>
                <div className="absolute -right-[3px] top-[2px] w-[2px] h-[4px] bg-white/40 rounded-r-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Main injected content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar relative">
            {children}
          </div>

          {/* Android navigation bar mockup */}
          <div className="h-5 shrink-0 flex justify-center items-center pb-1 z-40 relative bg-gradient-to-t from-black/50 to-transparent">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>
        
        {/* Dynamic Screen Glare / Reflection (Responds to hover) */}
        {!prefersReducedMotion && (
          <div 
            className="absolute inset-0 rounded-[3rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 bg-gradient-to-tr from-white/0 via-white/5 to-white/0" 
            style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 20%)" }}
          />
        )}
      </motion.div>
      
      {/* Physical Device Shadow (Depth) */}
      <motion.div 
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-4 bg-black/60 blur-xl rounded-full -z-10"
        initial={shouldAnimate ? { scale: 0.8, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </div>
  );
}
