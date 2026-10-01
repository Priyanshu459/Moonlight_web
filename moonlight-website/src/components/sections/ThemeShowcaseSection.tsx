"use client";
import Image from "next/image";
import { useState } from "react";
const themes = [{id:"glass",name:"Glass",copy:"A little daylight, wherever you are."},{id:"glass-night",name:"Glass Night",copy:"For thoughts that arrive after dark."},{id:"paper",name:"Paper",copy:"A softer space for a longer read."},{id:"mono",name:"Mono",copy:"Less color. More clarity."},{id:"midnight",name:"Midnight",copy:"A quiet backdrop for your next idea."}];
export function ThemeShowcaseSection(){
  const [selected,setSelected]=useState(0);
  const theme=themes[selected];
  return <section className="lunar-themes container-page" aria-labelledby="theme-title"><div className="lunar-theme-layout"><div className="lunar-theme-copy"><p className="lunar-eyebrow">03 / FIVE WAYS TO FEEL AT HOME</p><h2 id="theme-title">Same Moonlight.<br/><em>A different mood.</em></h2><p>Glass, Glass Night, Paper, Mono and Midnight. Choose the light you like, follow your system appearance, or reduce motion. Your preferences stay saved.</p><div className="lunar-theme-buttons" role="group" aria-label="Preview Moonlight themes">{themes.map((t,i)=><button key={t.id} onClick={()=>setSelected(i)} aria-pressed={selected===i} aria-controls="theme-preview">{t.name}</button>)}</div><p className="lunar-theme-caption" aria-live="polite" style={{marginTop:24}}>{theme.copy}</p></div><figure id="theme-preview" className="lunar-theme-phone"><Image src={`/app-screens/glass/responses-${theme.id}.webp`} alt={`Moonlight ${theme.name} theme, Responses screen UI preview`} width={390} height={844} sizes="280px"/><figcaption>App UI captures · Moonlight AI 1.7.x</figcaption></figure></div></section>;
}
