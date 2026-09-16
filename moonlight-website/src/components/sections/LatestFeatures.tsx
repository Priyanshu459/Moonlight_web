"use client";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Smartphone, Monitor, Cloud, ArrowUpRight } from "lucide-react";
import Link from "next/link";
const modes = [
  { name: "Phone", icon: Smartphone, label: "SMALL MODELS. BIG POSSIBILITIES.", title: "Take your thoughts offline.", copy: "Download a compatible LFM model, then write, explore and think with AI running on your phone. Your local conversations can work without an internet connection.", detail: "LFM2 350M · LFM2 700M · LFM2.5 1.2B", note: "Available models depend on your device’s memory. Physical-phone LFM inference is still being tested.", destination: "ON YOUR DEVICE", nodes: ["Your idea", "Phone model", "Your answer"] },
  { name: "Computer", icon: Monitor, label: "YOUR DESKTOP, WITHIN REACH.", title: "More room for intelligence.", copy: "Connect to your own LM Studio server and choose its available models. Guided setup covers the same Wi-Fi network and remote HTTPS access through a separately configured private network.", detail: "LM Studio · Model discovery · Connection status", note: "Remote access needs your own VPN setup and an awake, reachable computer. Direct LM Link pairing is not included.", destination: "YOUR LM STUDIO SERVER", nodes: ["Your phone", "Your computer", "Your answer"] },
  { name: "Cloud", icon: Cloud, label: "BRING YOUR OWN CONNECTION.", title: "A wider world of models.", copy: "Connect OpenAI, Gemini, Anthropic, Alibaba Cloud, NVIDIA, or a compatible provider with your own API key. Supported OpenAI and Anthropic models can use provider web search with citations.", detail: "Your API key · Model selection · Source links", note: "Online chats send recent messages, instructions and attached text to your selected provider. Provider and tool charges may apply.", destination: "YOUR SELECTED PROVIDER", nodes: ["Your phone", "Cloud provider", "Your answer"] },
];
export function LatestFeatures() {
  const [active, setActive] = useState(0);
  const reduced = useReducedMotion();
  const mode = modes[active];
  return <section id="latest-moonlight" className="lunar-modes container-page" aria-labelledby="modes-title">
    <div className="lunar-section-top"><p className="lunar-eyebrow">01 / CHOOSE YOUR KIND OF INTELLIGENCE</p><span>THREE WAYS. ONE MOONLIGHT.</span></div>
    <h2 id="modes-title">Closer to you.<br /><em>Open to more.</em></h2>
    <div className="lunar-mode-layout"><div>
      <div className="lunar-mode-tabs" role="group" aria-label="Explore inference modes">{modes.map(({ name, icon: Icon }, i) => <button key={name} aria-pressed={active === i} aria-controls="mode-panel" onClick={() => setActive(i)}><Icon size={19} />{name}</button>)}</div>
      <div id="mode-panel" aria-live="polite" aria-atomic="true"><AnimatePresence mode="wait" initial={false}><motion.div key={active} initial={reduced ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduced ? 0 : .25 }} className="lunar-mode-copy"><p className="lunar-eyebrow">{mode.label}</p><h3>{mode.title}</h3><p>{mode.copy}</p><strong>{mode.detail}</strong><p className="lunar-fineprint">{mode.note}</p></motion.div></AnimatePresence></div>
      <Link href="/features" className="lunar-secondary">All the new possibilities <ArrowUpRight size={18} /></Link>
    </div><div className={`lunar-routing routing-${active}`} aria-label={`Data path: ${mode.nodes.join(" to ")}`}><div className="lunar-routing-circle" aria-hidden="true"><mode.icon size={64} strokeWidth={.8} /></div><p>{mode.destination}</p><div className="lunar-path">{mode.nodes.map((node,i) => <div key={i}><span>0{i+1}</span><strong>{node}</strong></div>)}</div><span className="lunar-routing-caption">You choose where the conversation goes.</span></div></div>
  </section>;
}
