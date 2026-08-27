import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BrainCircuit, Download, LockKeyhole, Plane, ShieldCheck, Smartphone, WifiOff } from "lucide-react";
import { HeroScene } from "@/components/animations/HeroScene";
import { PrivacySection } from "@/components/sections/PrivacySection";
import { CtaSection } from "@/components/sections/CtaSection";

const capabilities = [
  {
    icon: BrainCircuit,
    eyebrow: "On-device intelligence",
    title: "Real models. Local inference.",
    copy: "Run compatible GGUF language models through llama.cpp using your phone’s own hardware—without routing every thought through a remote AI service.",
  },
  {
    icon: WifiOff,
    eyebrow: "Offline by design",
    title: "Ready when the network isn’t.",
    copy: "After a model is installed, keep chatting on a flight, while travelling, or anywhere a reliable connection is unavailable.",
  },
  {
    icon: LockKeyhole,
    eyebrow: "Private by architecture",
    title: "Your conversations stay yours.",
    copy: "Chats are stored in the app’s private local storage. Moonlight has no accounts, no ad network, and no analytics pipeline following your activity.",
  },
];

const steps = [
  { number: "01", icon: Download, title: "Choose a model", copy: "Browse compatible models and download the one that fits your device." },
  { number: "02", icon: ShieldCheck, title: "Download securely", copy: "Moonlight downloads the selected GGUF file directly from Hugging Face over HTTPS." },
  { number: "03", icon: Smartphone, title: "Chat on your device", copy: "Prompts and responses are processed locally with no cloud inference required." },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--bg-base)] selection:bg-indigo-500/30 selection:text-white">
      <HeroScene />

      <section className="border-y border-white/6 bg-white/[0.018]" aria-label="Moonlight principles">
        <div className="container-page grid grid-cols-2 gap-px md:grid-cols-4">
          {[
            ["100%", "local AI inference"],
            ["0", "required accounts"],
            ["0", "advertising SDKs"],
            ["Offline", "after model setup"],
          ].map(([value, label]) => (
            <div key={label} className="px-4 py-7 text-center md:py-9">
              <div className="text-xl font-semibold tracking-tight text-white md:text-2xl">{value}</div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-[0.16em] text-white/35">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-premium" aria-labelledby="capabilities-heading">
        <div className="container-page">
          <div className="section-intro">
            <p className="eyebrow">A different kind of AI assistant</p>
            <h2 id="capabilities-heading">Useful intelligence.<br /><span className="text-white/42">Without giving up control.</span></h2>
            <p>Moonlight brings the model, the conversation, and the computing boundary together on the device already in your hand.</p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {capabilities.map(({ icon: Icon, eyebrow, title, copy }, index) => (
              <article key={title} className={`premium-card ${index === 0 ? "lg:-translate-y-3" : ""}`}>
                <div className="feature-icon"><Icon size={20} aria-hidden="true" /></div>
                <p className="mt-8 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-300/80">{eyebrow}</p>
                <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/48">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-premium border-y border-white/6 bg-[#0d0f14]" aria-labelledby="process-heading">
        <div className="container-page">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">From download to answer</p>
              <h2 id="process-heading" className="mt-5 max-w-md text-4xl font-semibold tracking-[-0.04em] text-white sm:text-5xl">Private AI in three clear steps.</h2>
              <p className="mt-6 max-w-md text-base leading-8 text-white/48">Internet access is used to get the app and model. The everyday intelligence happens locally after setup.</p>
              <Link href="/how-it-works" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-indigo-300">
                Explore the architecture <ArrowRight size={16} />
              </Link>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-white/8 bg-black/20">
              {steps.map(({ number, icon: Icon, title, copy }, index) => (
                <div key={title} className={`group grid gap-5 p-7 sm:grid-cols-[64px_1fr_auto] sm:items-center sm:p-9 ${index !== steps.length - 1 ? "border-b border-white/7" : ""}`}>
                  <span className="text-xs font-semibold tracking-[0.18em] text-white/25">{number}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{title}</h3>
                    <p className="mt-2 max-w-lg text-sm leading-6 text-white/45">{copy}</p>
                  </div>
                  <div className="feature-icon transition-transform duration-300 group-hover:scale-105"><Icon size={20} /></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-premium" aria-labelledby="app-preview-heading">
        <div className="container-page">
          <div className="section-intro">
            <p className="eyebrow">The real Android experience</p>
            <h2 id="app-preview-heading">Simple tools.<br /><span className="text-white/42">A clear privacy boundary.</span></h2>
            <p>Chat, choose a phone-friendly model, and control memory and response settings from a focused interface designed for on-device work.</p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["/app-screens/home.jpeg", "Home", "Start local chats and reusable tasks."],
              ["/app-screens/tools.jpeg", "Tools", "Move between chat, models, and settings."],
              ["/app-screens/models.jpeg", "Models", "Choose and download compatible GGUF models."],
              ["/app-screens/settings.jpeg", "Settings", "Control generation, memory, privacy, and storage."],
            ].map(([src, title, copy]) => (
              <figure key={title} className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.025] p-2 shadow-2xl shadow-black/30">
                <Image src={src} alt={`Moonlight AI ${title} screen`} width={716} height={1600} className="h-auto w-full rounded-[1.55rem]" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                <figcaption className="px-3 pb-4 pt-5">
                  <strong className="block text-sm text-white">{title}</strong>
                  <span className="mt-1 block text-xs leading-5 text-white/42">{copy}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <PrivacySection />

      <section className="pb-8" aria-label="Built for real life">
        <div className="container-page">
          <div className="flex flex-col gap-6 rounded-[2rem] border border-white/8 bg-gradient-to-r from-indigo-500/10 via-white/[0.025] to-violet-500/10 p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="flex items-start gap-4">
              <div className="feature-icon shrink-0"><Plane size={20} /></div>
              <div>
                <h2 className="text-xl font-semibold text-white">AI that travels with you.</h2>
                <p className="mt-2 text-sm leading-6 text-white/45">Use an installed model without a data connection—on a commute, on a flight, or off the grid.</p>
              </div>
            </div>
            <Link href="/features" className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-white hover:text-indigo-300">See every feature <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
