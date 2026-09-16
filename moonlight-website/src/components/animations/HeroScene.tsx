"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Pause, Play } from "lucide-react";
export function HeroScene() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-9, 9]);
  const still = reduced || paused;
  return <section ref={ref} className={`lunar-hero ${still ? "lunar-still" : ""}`} aria-labelledby="lunar-title">
    <div className="lunar-grain" aria-hidden="true" />
    <div className="lunar-orbit lunar-orbit-one" aria-hidden="true" /><div className="lunar-orbit lunar-orbit-two" aria-hidden="true" />
    <div className="container-page lunar-hero-grid"><div className="lunar-hero-copy">
      <p className="lunar-eyebrow"><span /> THE GLASS CHAPTER · 1.6.1 PREVIEW</p>
      <h1 id="lunar-title">A little light.<br />A limitless<br /><em>state of mind.</em></h1>
      <p className="lunar-lede">Your phone. Your computer. Your choice of cloud.<br className="lunar-desktop-break" /> One beautiful space for everything on your mind.</p>
      <div className="lunar-actions"><Link className="lunar-primary" href="/download">Meet the new Moonlight <ArrowUpRight size={19} /></Link><a href="#app-gallery" className="lunar-secondary">Explore the app <ArrowDown size={17} /></a></div>
      <div className="lunar-hero-notes"><span>LOCAL FIRST</span><i /><span>MADE FOR ANDROID</span><i /><span>NO MOONLIGHT ACCOUNT</span></div>
    </div><motion.div className="lunar-cosmos" style={{ y: still ? 0 : y }}>
      <div className="lunar-halo" aria-hidden="true" /><div className="lunar-moon" aria-hidden="true" />
      <span className="lunar-star star-one" aria-hidden="true">+</span><span className="lunar-star star-two" aria-hidden="true">+</span>
      <div className="lunar-orbit-tag">INTELLIGENCE, IN YOUR ORBIT</div>
      <motion.div className="lunar-phone lunar-phone-back" style={{ rotate: still ? -9 : rotate }}><Image src="/app-screens/glass/responses-glass-night.webp" alt="Moonlight Glass Night response settings preview" width={390} height={844} sizes="(max-width: 600px) 175px, 240px" preload /></motion.div>
      <div className="lunar-phone lunar-phone-front"><Image src="/app-screens/glass/settings-new.webp" alt="Moonlight Glass settings with computer and cloud connections" width={390} height={844} sizes="(max-width: 600px) 200px, 260px" preload /></div>
      <div className="lunar-floating-label"><span className="lunar-signal" />Your intelligence.<br /><strong>In a whole new light.</strong></div>
    </motion.div></div>
    <div className="container-page lunar-hero-footer"><a href="#latest-moonlight">SCROLL TO DISCOVER <ArrowDown size={14} /></a><span>App UI preview captures · 1.6.1</span><button onClick={() => setPaused(!paused)} aria-pressed={paused} aria-label={paused ? "Play hero animation" : "Pause hero animation"}>{paused ? <Play size={15} /> : <Pause size={15} />}<span>{paused ? "Play motion" : "Pause motion"}</span></button></div>
  </section>;
}
