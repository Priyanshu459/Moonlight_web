import Link from "next/link";
import { ArrowUpRight, Download, MessageSquare, ShieldCheck, WifiOff } from "lucide-react";
import { HeroScene } from "@/components/animations/HeroScene";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { ThemeShowcaseSection } from "@/components/sections/ThemeShowcaseSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { LatestFeatures } from "@/components/sections/LatestFeatures";

const principles = [
  { icon: MessageSquare, number: "01", title: "Room to think.", copy: "Write, summarize text, review code, or explore an idea with a compatible language model running on your phone." },
  { icon: WifiOff, number: "02", title: "Freedom to disconnect.", copy: "Download your model once. Then keep the conversation going on a flight, on your commute, or away from a connection." },
  { icon: ShieldCheck, number: "03", title: "Control stays with you.", copy: "Manage your conversations, saved memories, and local storage. No account is required to start using Moonlight." },
];

export default function Home() {
  return (
    <div className="orbit-home">
      <HeroScene />
      <LatestFeatures />
      <section id="inside-moonlight" className="orbit-section container-page" aria-labelledby="inside-title">
        <div className="orbit-section-heading orbit-reveal">
          <p className="orbit-label">01 / A DIFFERENT RELATIONSHIP WITH AI</p>
          <h2 id="inside-title">Big ideas.<br /><span>A smaller footprint.</span></h2>
          <p>Start with intelligence on your device.<br />Connect your computer or cloud when you choose.</p>
        </div>
        <div className="orbit-principles">
          {principles.map(({ icon: Icon, number, title, copy }) => (
            <article key={number} className="orbit-principle orbit-reveal">
              <div className="orbit-principle-top"><Icon size={24} strokeWidth={1.4} aria-hidden="true" /><span>{number}</span></div>
              <h3>{title}</h3><p>{copy}</p>
            </article>
          ))}
        </div>
      </section>
      <AppShowcase />
      <section className="orbit-section container-page orbit-process" aria-labelledby="setup-title">
        <div className="orbit-section-heading orbit-reveal">
          <p className="orbit-label">03 / MAKE IT YOURS</p>
          <h2 id="setup-title">From first download<br /><span>to your next idea.</span></h2>
          <Link href="/how-it-works" className="orbit-text-link">A closer look at how it works <ArrowUpRight size={16} /></Link>
        </div>
        <ol className="orbit-step-list">
          {[
            ["01", "Find your model.", "Choose Phone for local inference, Computer for LM Studio, or Cloud for your own provider."],
            ["02", "Bring it on board.", "Download a compatible phone model, or set up your chosen server and credentials."],
            ["03", "Make space for ideas.", "Start a conversation. Phone mode can work offline after setup; connected modes send your requests to the selected service."],
          ].map(([number, title, copy]) => <li key={number} className="orbit-reveal"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><Download size={18} aria-hidden="true" /></li>)}
        </ol>
      </section>
      <section className="orbit-privacy" aria-labelledby="privacy-title">
        <div className="container-page orbit-privacy-grid">
          <div className="orbit-section-heading orbit-reveal"><p className="orbit-label">04 / YOUR SPACE IS PERSONAL</p><h2 id="privacy-title">Privacy is<br /><span>the starting point.</span></h2></div>
          <div className="orbit-privacy-copy orbit-reveal">
            <ShieldCheck size={36} strokeWidth={1.2} aria-hidden="true" />
            <p>Local chat is processed on your device. You choose the model, manage your memories, and control what you keep.</p>
            <p className="orbit-muted">Computer and Cloud modes can send recent messages, personal instructions and attached text to the service you choose. Our policy explains those connections and your controls.</p>
            <div className="orbit-legal-links"><Link href="/privacy">Read the privacy policy <ArrowUpRight size={17} /></Link><Link href="/delete-account">Manage and delete your data <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>
      <div className="orbit-theme-section"><ThemeShowcaseSection /></div>
      <CtaSection />
    </div>
  );
}
