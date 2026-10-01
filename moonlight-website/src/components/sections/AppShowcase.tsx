"use client";
import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
const screens = [
  { id: "settings-new", label: "Your space", title: "Everything, in its place.", copy: "A new glass settings experience brings appearance, responses, models and connections together." },
  { id: "lmstudio-new", label: "LM Studio", title: "Your computer. Now closer.", copy: "Connect your LM Studio server, discover models and follow the in-app setup guide." },
  { id: "lmstudio-remote-guide", label: "Remote setup", title: "A connection beyond Wi-Fi.", copy: "Step-by-step guidance for your own private network and authenticated HTTPS server. Your computer must remain awake and reachable." },
  { id: "lfm-models-new", label: "Phone models", title: "Small enough to take with you.", copy: "A refreshed catalog of compact Liquid AI models, with device capacity checks before downloading and loading." },
  { id: "providers", label: "AI providers", title: "Bring your favorite models.", copy: "Add your own provider credentials and choose the model you want to talk to. Online requests use that provider’s service." },
  { id: "appearance-new", label: "Appearance", title: "Make yourself at home.", copy: "Five themes, system appearance and a saved Reduce Motion preference make Moonlight feel like your space." },
];
export function AppShowcase() {
  const [selected, setSelected] = useState(0);
  const reduced = useReducedMotion();
  const screen = screens[selected];
  return <section id="app-gallery" className="lunar-gallery" aria-labelledby="showcase-title"><div className="container-page lunar-gallery-grid"><div className="lunar-gallery-copy"><p className="lunar-eyebrow">02 / A CLOSER LOOK</p><h2 id="showcase-title">Feels different.<br /><em>Feels like yours.</em></h2>
    <div className="lunar-screen-selector" role="group" aria-label="Choose an app screen">{screens.map((item, i) => <button key={item.id} aria-pressed={selected === i} aria-controls="app-screen-preview" onClick={() => setSelected(i)}><span>0{i+1}</span>{item.label}<ArrowUpRight size={17} /></button>)}</div>
    <div className="lunar-screen-description" aria-live="polite" aria-atomic="true"><h3>{screen.title}</h3><p>{screen.copy}</p></div></div>
    <figure id="app-screen-preview" className="lunar-gallery-stage"><div className="lunar-gallery-rings" aria-hidden="true" /><span className="lunar-gallery-index">0{selected+1}<small> / 06</small></span><div className="lunar-gallery-phone"><AnimatePresence mode="wait" initial={false}><motion.div key={screen.id} initial={reduced ? false : { opacity: 0, x: 24, filter: "blur(6px)" }} animate={{ opacity: 1, x: 0, filter: "blur(0px)" }} exit={{ opacity: 0, x: -12 }} transition={{ duration: reduced ? 0 : .25 }}><Image src={`/app-screens/glass/${screen.id}.webp`} alt={`Moonlight AI ${screen.label} UI`} width={390} height={844} sizes="(max-width: 600px) 260px, 300px" /></motion.div></AnimatePresence></div><figcaption>Moonlight AI 1.7.x · Actual app UI captures.<br />Execution follows your selected Phone, Computer, or Cloud mode.</figcaption></figure>
  </div></section>;
}
