"use client";
import React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface OrbitSystemProps {
  className?: string;
  size?: number;
}

export function OrbitSystem({ className = "", size = 400 }: OrbitSystemProps) {
  const prefersReducedMotion = useReducedMotion();

  // The Moonlight Orbit: A very thin, elegant curved line
  // Representing MODEL -> DEVICE -> INTELLIGENCE
  
  return (
    <div 
      className={`relative flex items-center justify-center pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        {/* Subtle background track */}
        <circle 
          cx="200" 
          cy="200" 
          r="190" 
          stroke="rgba(255,255,255,0.03)" 
          strokeWidth="1" 
        />
        
        {/* The active orbit line */}
        <motion.circle
          cx="200"
          cy="200"
          r="190"
          stroke="url(#orbit-gradient)"
          strokeWidth="1.5"
          strokeLinecap="round"
          initial={{ strokeDasharray: "0 1200", rotate: -90 }}
          animate={{ 
            strokeDasharray: ["0 1200", "400 1200", "400 1200"],
            strokeDashoffset: [0, 0, -800],
          }}
          transition={{
            duration: prefersReducedMotion ? 0 : 8,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            times: [0, 0.5, 1]
          }}
          style={{ originX: "50%", originY: "50%" }}
        />

        <defs>
          <linearGradient id="orbit-gradient" x1="0" y1="0" x2="400" y2="400" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(91,124,249,0)" />
            <stop offset="0.5" stopColor="rgba(91,124,249,0.8)" />
            <stop offset="1" stopColor="rgba(167,139,250,0)" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Node: Model (Top Left) */}
      <motion.div 
        className="absolute top-[10%] left-[10%] w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(91,124,249,0.8)]"
        animate={{ opacity: prefersReducedMotion ? 1 : [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Node: Intelligence (Bottom Right) */}
      <motion.div 
        className="absolute bottom-[10%] right-[10%] w-1.5 h-1.5 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"
        animate={{ opacity: prefersReducedMotion ? 1 : [0.3, 1, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
    </div>
  );
}
