"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Smartphone, Monitor, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const modes = [
  {
    name: "Phone",
    icon: Smartphone,
    label: "ON-DEVICE INFERENCE · PHONE MODE",
    title: "Run models directly on your device.",
    copy: "Run compatible GGUF models directly on your Android device. After the required model is downloaded, Phone mode can operate without an internet connection.",
    detail: "On-device GGUF inference · No cloud provider required",
    note: "Local Phone mode processes prompts directly on your device and does not require sending data to a cloud AI provider.",
    destination: "ON YOUR DEVICE (PHONE MODE)",
    nodes: ["Your prompt", "Local GGUF model", "On-device response"],
  },
  {
    name: "Computer",
    icon: Monitor,
    label: "USER-CONFIGURED · LM STUDIO",
    title: "Connect to your own computer.",
    copy: "Connect Moonlight to your own compatible LM Studio server and use models running on your computer.",
    detail: "LM Studio endpoint · Same Wi-Fi or authenticated private network",
    note: "Computer mode routes requests to the server address you configure, running on your computer rather than on-device.",
    destination: "YOUR LM STUDIO SERVER",
    nodes: ["Your phone", "Your computer", "Your response"],
  },
  {
    name: "Cloud",
    icon: Cloud,
    label: "BRING YOUR OWN KEYS · CLOUD PROVIDERS",
    title: "Connect supported cloud AI providers.",
    copy: "Connect your own API keys to supported cloud AI providers. When Cloud mode is used, requests are processed by the provider you select and their privacy and retention policies apply.",
    detail: "OpenAI · Anthropic · Google Gemini · Alibaba · NVIDIA",
    note: "When Cloud mode is used, relevant request data leaves your device to the selected provider under their privacy and retention policies.",
    destination: "YOUR SELECTED CLOUD PROVIDER",
    nodes: ["Your phone", "Cloud provider", "Your response"],
  },
];
export function LatestFeatures() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const mode = modes[active];
  return <section id="latest-moonlight" className="lunar-modes container-page" aria-labelledby="modes-title">
    <div className="lunar-section-top"><p className="lunar-eyebrow">01 / CHOOSE WHERE YOUR AI RUNS</p><span>LOCAL-FIRST, NOT LOCAL-ONLY</span></div>
    <h2 id="modes-title">Choose where<br /><em>your AI runs.</em></h2>
    <div className="lunar-mode-layout"><div>
      <div className="lunar-mode-tabs" role="group" aria-label="Explore inference modes">{modes.map(({ name, icon: Icon }, i) => <button key={name} aria-pressed={active === i} aria-controls="mode-panel" onClick={() => setActive(i)}><Icon size={19} />{name}</button>)}</div>
      <div id="mode-panel" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .25 }} className="lunar-mode-copy"><p className="lunar-eyebrow">{mode.label}</p><h3>{mode.title}</h3><p>{mode.copy}</p><strong>{mode.detail}</strong><p className="lunar-fineprint">{mode.note}</p></motion.div></AnimatePresence></div>
      <Link href="/features" className="lunar-secondary">Explore all capabilities <ArrowUpRight size={18} /></Link>
    </div><div className={`lunar-routing routing-${active}`} aria-label={`Data path: ${mode.nodes.join(" to ")}`}><div className="lunar-routing-circle" aria-hidden="true"><mode.icon size={64} strokeWidth={.8} /></div><p>{mode.destination}</p><div className="lunar-path">{mode.nodes.map((node,i) => <div key={i}><span>0{i+1}</span><strong>{node}</strong></div>)}</div><span className="lunar-routing-caption">You choose where each conversation goes.</span></div></div>
  </section>;
}
