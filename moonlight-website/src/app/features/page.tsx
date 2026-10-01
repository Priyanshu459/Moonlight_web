import type { Metadata } from "next";
import { features } from "@/content/features";
import { LatestFeatures } from "@/components/sections/LatestFeatures";
import { ThemeShowcaseSection } from "@/components/sections/ThemeShowcaseSection";
import { AppShowcase } from "@/components/sections/AppShowcase";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Moonlight AI: On-device GGUF inference in Phone mode, LM Studio Computer mode, Cloud providers, secure credentials, and in-app AI response reporting.",
};
export default function FeaturesPage() {
  return <div className="feature-universe">
    <header className="container-page feature-page-header">
      <p className="orbit-label">MOONLIGHT AI / CAPABILITIES</p>
      <h1>Your AI. Your device.<br /><span>Your choice.</span></h1>
      <p>Explore the capabilities of Moonlight AI 1.7.x. Choose where AI runs — on your phone, your computer, or your choice of cloud provider. In Phone mode, conversations remain on-device. Computer and Cloud modes send data to your selected endpoints.</p>
    </header>
    <LatestFeatures />
    <section className="container-page feature-index" aria-label="Features in Moonlight AI 1.7.x">{features.map(({id,icon:Icon,title,headline,description,technical,status},index)=><article key={id}><div className="feature-index-top"><Icon size={25} strokeWidth={1.4}/><span>0{index+1} / {status}</span></div><h2>{title}</h2><h3>{headline}</h3><p>{description}</p><details><summary>How it works</summary><p>{technical}</p></details></article>)}</section>
    <ThemeShowcaseSection /><AppShowcase />
  </div>;
}
