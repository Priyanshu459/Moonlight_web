"use client";

import { ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";

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
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tilt motion values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural organic tilt physics
  const springConfig = { damping: 24, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [9, -9]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-9, 9]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`perspective-1000 relative mx-auto w-full max-w-[320px] aspect-[9/19.5] group cursor-default ${className}`}
    >
      {/* Device Frame */}
      <motion.div
        className="absolute inset-0 rounded-[3rem] bg-[#050508] border-[6px] border-[#222430] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] overflow-hidden ring-1 ring-white/10 flex flex-col transition-shadow duration-500 group-hover:shadow-[0_30px_70px_-10px_rgba(114,92,255,0.25)]"
        initial={shouldAnimate ? { rotateY: 15, rotateX: 8, scale: 0.95, opacity: 0 } : false}
        animate={shouldAnimate ? { rotateY: 0, rotateX: 0, scale: 1, opacity: 1 } : false}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        style={{
          transformStyle: "preserve-3d",
          rotateX: prefersReducedMotion ? 0 : rotateX,
          rotateY: prefersReducedMotion ? 0 : rotateY,
        }}
      >
        {/* Dynamic Island / Camera cutout */}
        <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-50 pointer-events-none">
          <div className="w-24 h-6 bg-black rounded-b-3xl shadow-[inset_0_-2px_4px_rgba(255,255,255,0.1)]" />
        </div>

        {/* Screen content area */}
        <div className="flex-1 w-full h-full bg-[#080a10] relative overflow-hidden flex flex-col">
          {/* Status bar mockup */}
          <div className="h-10 w-full flex justify-between items-center px-6 pt-2 shrink-0 z-40 relative">
            <span className="text-[10px] font-medium text-white/80 font-mono">9:41</span>
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
                <div className="w-[80%] h-full bg-[#10b981] rounded-[1px]"></div>
                <div className="absolute -right-[3px] top-[2px] w-[2px] h-[4px] bg-white/40 rounded-r-sm"></div>
              </div>
            </div>
          </div>

          {/* Main injected content */}
          <div className="flex-1 overflow-y-auto hide-scrollbar relative">
            {children}
          </div>

          {/* Android navigation bar mockup */}
          <div className="h-5 shrink-0 flex justify-center items-center pb-1 z-40 relative bg-gradient-to-t from-black/60 to-transparent">
            <div className="w-24 h-1 bg-white/30 rounded-full" />
          </div>
        </div>

        {/* Dynamic Screen Glare / Reflection (Responds smoothly to tilt) */}
        {!prefersReducedMotion && (
          <motion.div
            className="absolute inset-0 rounded-[3rem] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent"
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 20%)",
            }}
          />
        )}
      </motion.div>

      {/* Physical Device Shadow (Depth) */}
      <motion.div
        className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-5 bg-[#725cff]/20 blur-2xl rounded-full -z-10 transition-transform duration-300 group-hover:scale-105"
        initial={shouldAnimate ? { scale: 0.8, opacity: 0 } : false}
        animate={shouldAnimate ? { scale: 1, opacity: 1 } : false}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      />
    </div>
  );
}
