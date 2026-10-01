import Link from "next/link";
import { ArrowUpRight, Download, Flag, MessageSquare, ShieldCheck, WifiOff } from "lucide-react";
import { HeroScene } from "@/components/animations/HeroScene";
import { AppShowcase } from "@/components/sections/AppShowcase";
import { ThemeShowcaseSection } from "@/components/sections/ThemeShowcaseSection";
import { CtaSection } from "@/components/sections/CtaSection";
import { LatestFeatures } from "@/components/sections/LatestFeatures";

const principles = [
  {
    icon: MessageSquare,
    number: "01",
    title: "On-device intelligence.",
    copy: "Run compatible GGUF models directly on your Android device in Phone mode. Keep prompts and responses on your phone without sending them to a cloud AI provider.",
  },
  {
    icon: WifiOff,
    number: "02",
    title: "Freedom to disconnect.",
    copy: "Download your local model once. Phone mode can operate without an internet connection after the required model is available on your device.",
  },
  {
    icon: ShieldCheck,
    number: "03",
    title: "No central account or history.",
    copy: "No Moonlight account or centralized chat history. No advertising SDK. No analytics SDK. Manage your conversations, saved memories, and local storage directly.",
  },
];

export default function Home() {
  return (
    <div className="orbit-home">
      <HeroScene />
      <LatestFeatures />
      <section id="inside-moonlight" className="orbit-section container-page" aria-labelledby="inside-title">
        <div className="orbit-section-heading orbit-reveal">
          <p className="orbit-label">02 / A DIFFERENT RELATIONSHIP WITH AI</p>
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
            ["01", "Choose where AI runs.", "Select Phone for on-device inference, Computer for your LM Studio server, or Cloud for your own provider API keys."],
            ["02", "Configure your model.", "Download a compatible GGUF model for Phone mode, or configure your computer server address or cloud provider credentials."],
            ["03", "Chat on your own terms.", "Phone mode can work offline after setup. Computer and Cloud modes send requests to the endpoint you configure."],
          ].map(([number, title, copy]) => <li key={number} className="orbit-reveal"><span>{number}</span><div><h3>{title}</h3><p>{copy}</p></div><Download size={18} aria-hidden="true" /></li>)}
        </ol>
      </section>

      {/* AI Response Reporting */}
      <section className="orbit-section container-page" aria-labelledby="reporting-title">
        <div className="card-glow p-8 md:p-10 border-white/10 bg-[#0c0e17]/80">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-amber-400/20 bg-amber-400/10 text-amber-300 text-xs font-mono uppercase tracking-wider mb-4">
              <Flag size={13} aria-hidden="true" /> In-App Quality & Safety
            </div>
            <h2 id="reporting-title" className="text-2xl md:text-3xl font-semibold text-white mb-3">
              Report AI responses
            </h2>
            <p className="text-slate-300 leading-relaxed mb-4">
              Moonlight provides an in-app way to report AI responses that are incorrect, unsafe, or inappropriate.
            </p>
            <p className="text-xs text-slate-400 leading-relaxed">
              When using any execution mode, you can flag problematic outputs directly from the conversation screen. Reporting captures the relevant response details and category so issues can be reviewed and addressed.
            </p>
          </div>
        </div>
      </section>

      <section className="orbit-privacy" aria-labelledby="privacy-title">
        <div className="container-page orbit-privacy-grid">
          <div className="orbit-section-heading orbit-reveal"><p className="orbit-label">04 / YOUR SPACE IS PERSONAL</p><h2 id="privacy-title">Privacy is<br /><span>the starting point.</span></h2></div>
          <div className="orbit-privacy-copy orbit-reveal">
            <ShieldCheck size={36} strokeWidth={1.2} aria-hidden="true" />
            <p><strong>Local-first, not local-only.</strong> On-device AI inference in Phone mode processes prompts and responses on your device. No Moonlight account or centralized chat history is operated.</p>
            <p className="orbit-muted">Moonlight does not operate a centralized account-based chat history. When you connect to your LM Studio computer or use a third-party cloud provider, requests are processed by that configured endpoint and their privacy and retention policies apply.</p>
            <div className="orbit-legal-links"><Link href="/privacy">Read the privacy policy <ArrowUpRight size={17} /></Link><Link href="/delete-account">Manage and delete your data <ArrowUpRight size={17} /></Link></div>
          </div>
        </div>
      </section>
      <div className="orbit-theme-section"><ThemeShowcaseSection /></div>
      <CtaSection />
    </div>
  );
}
