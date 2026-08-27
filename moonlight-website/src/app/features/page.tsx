import type { Metadata } from "next";
import Image from "next/image";
import { BrainCircuit, FileText, MessagesSquare, Mic, SlidersHorizontal, WifiOff } from "lucide-react";

export const metadata: Metadata = {
  title: "Features",
  description: "Explore Moonlight AI's verified on-device chat, model, memory, file, voice, and workspace features for Android.",
};

const features = [
  { icon: BrainCircuit, title: "On-device inference", copy: "Compatible quantized GGUF models run through llama.rn on your phone's CPU/GPU. Prompts and responses are not sent to a cloud AI API." },
  { icon: MessagesSquare, title: "Streaming local chat", copy: "Watch responses appear token by token, with conversation history saved privately for each workspace." },
  { icon: WifiOff, title: "Offline after setup", copy: "Once a model has been downloaded, everyday chat does not need an internet connection." },
  { icon: SlidersHorizontal, title: "Model and response controls", copy: "Switch downloaded models and tune response style, temperature, Top P, Top K, system prompt, and memory." },
  { icon: FileText, title: "Text-file context", copy: "Select text from a supported file and use it in the local chat context without uploading it to Moon Knight Studio." },
  { icon: Mic, title: "Optional voice input", copy: "Use Android's system speech recognition. Moonlight receives recognized text and does not record or store raw audio." },
];

const screens = [
  ["/app-screens/home.jpeg", "Home and suggested tasks"],
  ["/app-screens/models.jpeg", "Model Store"],
  ["/app-screens/settings.jpeg", "Generation and memory settings"],
];

export default function FeaturesPage() {
  return (
    <div className="pb-24 pt-32">
      <div className="container-page">
        <header className="max-w-3xl">
          <p className="eyebrow">Version 1.0 for Android</p>
          <h1 className="mt-5 text-display-lg text-white">Private AI, with the controls visible.</h1>
          <p className="mt-6 text-lg leading-8 text-white/55">Moonlight is built for focused local work: download the model that fits your phone, chat without cloud inference, and decide what remains in local memory.</p>
        </header>

        <section className="mt-20 grid gap-4 md:grid-cols-2 lg:grid-cols-3" aria-label="Moonlight AI features">
          {features.map(({ icon: Icon, title, copy }) => (
            <article key={title} className="premium-card min-h-0">
              <div className="feature-icon"><Icon size={20} aria-hidden="true" /></div>
              <h2 className="mt-7 text-xl font-semibold text-white">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-white/48">{copy}</p>
            </article>
          ))}
        </section>

        <section className="mt-28 border-t border-white/8 pt-20" aria-labelledby="screens-heading">
          <div className="max-w-2xl">
            <p className="eyebrow">Inside the app</p>
            <h2 id="screens-heading" className="mt-5 text-display-md text-white">The actual Moonlight interface.</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {screens.map(([src, label]) => (
              <figure key={label} className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-2">
                <Image src={src} alt={`Moonlight AI ${label} screenshot`} width={716} height={1600} className="h-auto w-full rounded-[1.55rem]" sizes="(max-width: 768px) 100vw, 33vw" />
                <figcaption className="px-4 py-5 text-sm font-medium text-white/70">{label}</figcaption>
              </figure>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
