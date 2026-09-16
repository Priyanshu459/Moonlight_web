import type { Metadata } from "next";
import { features } from "@/content/features";
import { LatestFeatures } from "@/components/sections/LatestFeatures";
import { ThemeShowcaseSection } from "@/components/sections/ThemeShowcaseSection";
import { AppShowcase } from "@/components/sections/AppShowcase";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Moonlight 1.6.1: Phone, Computer and Cloud modes, LM Studio, LFM models, five themes and provider web tools.",
};
export default function FeaturesPage() {
  return <div className="feature-universe">
    <header className="container-page feature-page-header"><p className="orbit-label">MOONLIGHT / THE CAPABILITIES</p><h1>A world of possibility.<br /><span>Within your reach.</span></h1><p>Explore the 1.6.1 preview. Choose where AI runs, shape how it responds, and make the new Glass interface your own. Online features send data to your selected services.</p></header>
    <LatestFeatures />
    <section className="container-page feature-index" aria-label="Features in the current preview">{features.map(({id,icon:Icon,title,headline,description,technical,status},index)=><article key={id}><div className="feature-index-top"><Icon size={25} strokeWidth={1.4}/><span>0{index+1} / {status}</span></div><h2>{title}</h2><h3>{headline}</h3><p>{description}</p><details><summary>How it works</summary><p>{technical}</p></details></article>)}</section>
    <ThemeShowcaseSection /><AppShowcase />
  </div>;
}
