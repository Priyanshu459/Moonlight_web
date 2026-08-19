import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PhoneMockup } from "@/components/ui/mockups/PhoneMockup";
import { ChatMockup } from "@/components/ui/mockups/ChatMockup";
import { ModelStoreMockup } from "@/components/ui/mockups/ModelStoreMockup";
import { OrbitSystem } from "@/components/ui/OrbitSystem";

export const metadata = {
  title: "Features | Moonlight AI",
  description: "Explore the capabilities of Moonlight AI, the private local-first AI assistant for Android.",
};

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        
        {/* Header */}
        <div className="container-page mb-24">
          <div className="max-w-3xl">
            <h1 className="text-display-lg text-white mb-6 tracking-tight">Intelligence, uncompromised.</h1>
            <p className="text-xl text-white/60">
              A serious environment for running language models directly on Android.
            </p>
          </div>
        </div>

        {/* Editorial Stories */}
        <div className="container-page flex flex-col gap-32">
          
          {/* 01 LOCAL INFERENCE */}
          <section className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-sm font-bold text-indigo-400 tracking-widest mb-4">01 — LOCAL INFERENCE</div>
              <h2 className="text-display-md text-white mb-6">Run compatible AI models directly on Android.</h2>
              <p className="text-lg text-white/60 mb-6">
                Moonlight brings the power of `llama.cpp` to your pocket. Connect with local GGUF models running natively on your device CPU and GPU.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500"></div>
                  <span className="text-white/80">Support for 4-bit and 8-bit quantization</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500"></div>
                  <span className="text-white/80">Zero internet required for generation</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              <OrbitSystem size={350} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30 -z-10" />
              <PhoneMockup>
                <div className="flex flex-col h-full bg-[#0d0e12] items-center justify-center p-6 text-center">
                   <div className="w-16 h-16 rounded-2xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center mb-6">
                      <span className="text-indigo-400 font-bold">GGUF</span>
                   </div>
                   <h3 className="text-white font-semibold mb-2">llama.cpp Engine</h3>
                   <p className="text-white/50 text-sm">Native Android backend compiling the model directly into memory.</p>
                </div>
              </PhoneMockup>
            </div>
          </section>

          {/* 02 MODEL STORE */}
          <section className="flex flex-col lg:flex-row-reverse items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-sm font-bold text-indigo-400 tracking-widest mb-4">02 — MODEL STORE</div>
              <h2 className="text-display-md text-white mb-6">Choose your intelligence.</h2>
              <p className="text-lg text-white/60 mb-6">
                Download verified models directly from Hugging Face. The Model Store manages your local catalog safely.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500"></div>
                  <span className="text-white/80">SHA-256 verification on download</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 mt-2 rounded-full bg-indigo-500"></div>
                  <span className="text-white/80">Automatic storage management</span>
                </li>
              </ul>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <PhoneMockup>
                <ModelStoreMockup />
              </PhoneMockup>
            </div>
          </section>

          {/* 03 PRIVATE CONVERSATIONS */}
          <section className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="text-sm font-bold text-indigo-400 tracking-widest mb-4">03 — PRIVATE CONVERSATIONS</div>
              <h2 className="text-display-md text-white mb-6">A beautiful interface for your ideas.</h2>
              <p className="text-lg text-white/60 mb-6">
                Interact with your models using an elegant, fluid chat interface designed for Android. Everything is saved strictly on-device.
              </p>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <PhoneMockup>
                <ChatMockup />
              </PhoneMockup>
            </div>
          </section>

          {/* ROADMAP / IN DEVELOPMENT */}
          <section className="pt-24 border-t border-white/5 mt-16">
            <h2 className="text-2xl font-bold text-white mb-2">In Development</h2>
            <p className="text-white/50 mb-12">Features currently being built in the Moonlight repository. Not yet available in the production APK.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { name: "Long-term Memory", desc: "Local semantic vector database for recalling past conversations." },
                { name: "Vision Models (LLaVA)", desc: "Processing images locally on-device without cloud uploads." },
                { name: "Local OCR", desc: "Extracting text from images using on-device neural engines." },
                { name: "Semantic Search", desc: "Searching through your chat history by meaning, not just keywords." }
              ].map(feat => (
                <div key={feat.name} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-white/10 text-white/60 uppercase">Roadmap</span>
                    <h3 className="font-semibold text-white">{feat.name}</h3>
                  </div>
                  <p className="text-sm text-white/50">{feat.desc}</p>
                </div>
              ))}
            </div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}
