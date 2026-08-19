"use client";

import { HeroScene } from "@/components/animations/HeroScene";
import { ScrollScene } from "@/components/animations/ScrollScene";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { CtaSection } from "@/components/sections/CtaSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] selection:bg-indigo-500/30 selection:text-white">
      
      {/* 1. Cinematic Hero Experience */}
      <HeroScene />

      {/* 2. Signature Scroll Story: Model -> Device -> Inference */}
      <ScrollScene />

      {/* 3. Privacy by Architecture */}
      <PrivacySection />

      {/* 4. Final CTA */}
      <CtaSection />
      
    </div>
  );
}
