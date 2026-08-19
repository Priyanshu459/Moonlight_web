import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "How It Works | Moonlight AI",
  description: "Understand the technical architecture behind Moonlight AI&apos;s local inference engine.",
};

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-[#0A0B0E] flex flex-col">
      <Navbar />

      <main className="flex-1 pt-32 pb-24">
        
        {/* Header */}
        <div className="container-page mb-24 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-6 tracking-wide uppercase">
            Architecture
          </div>
          <h1 className="text-display-lg text-white mb-6 tracking-tight">How Moonlight thinks.</h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            A transparent look at the lifecycle of a prompt inside a local inference engine.
          </p>
        </div>

        <div className="container-page max-w-4xl">
          
          <div className="space-y-12">
            {/* 01 DOWNLOAD */}
            <div className="relative pl-12 md:pl-32 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16" />
              <div className="absolute left-[-5px] md:left-[59px] top-10 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_rgba(99,102,241,0.8)]" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-indigo-400 font-bold tracking-widest text-sm mb-4 md:mb-0">
                01 DOWNLOAD
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Acquiring the Intelligence</h3>
                <p className="text-white/60 mb-6">
                  Before Moonlight can think, it needs a brain. Models are downloaded from verified Hugging Face repositories directly to your device&apos;s internal storage.
                </p>
                <div className="bg-[#0A0B0E] p-4 rounded-xl border border-white/5 text-sm font-mono text-emerald-400 flex flex-col gap-2">
                  <span>&gt; Connecting to huggingface.co</span>
                  <span>&gt; Downloading weights (Q4_K_M)</span>
                  <span>&gt; Verifying SHA-256 signature</span>
                  <span className="text-indigo-400">&gt; Saved to local storage</span>
                </div>
              </div>
            </div>

            {/* 02 LOAD */}
            <div className="relative pl-12 md:pl-32 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0">
                02 LOAD
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Memory Mapping</h3>
                <p className="text-white/60">
                  When you start a chat, Moonlight uses `llama.cpp` to map the model weights into your device&apos;s RAM. This prepares the neural network for inference without fully uncompressing it, preserving your device&apos;s memory.
                </p>
              </div>
            </div>

            {/* 03 PROCESS */}
            <div className="relative pl-12 md:pl-32 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0">
                03 PROCESS
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Tokenization & Context</h3>
                <p className="text-white/60 mb-6">
                  Your text prompt is converted into tokens (numbers) that the model understands. These tokens are passed into the model along with the system prompt, which defines the AI&apos;s behavior.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70">&quot;What&quot; → 1245</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70">&quot;is&quot; → 342</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded text-xs text-white/70">&quot;privacy?&quot; → 8901</span>
                </div>
              </div>
            </div>

            {/* 04 GENERATE */}
            <div className="relative pl-12 md:pl-32 py-6">
              <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 md:left-16" />
              <div className="absolute left-[-4px] md:left-[60px] top-10 w-2 h-2 rounded-full bg-white/20" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-white/40 font-bold tracking-widest text-sm mb-4 md:mb-0">
                04 GENERATE
              </div>
              
              <div className="bg-[#111318] border border-white/5 rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-4">Local Inference</h3>
                <p className="text-white/60">
                  The model calculates probabilities for the next token based entirely on the mathematical weights stored on your phone. It uses your device&apos;s CPU/GPU to perform matrix multiplication, generating the answer one word at a time. No data is sent to a server.
                </p>
              </div>
            </div>

            {/* 05 RESPOND */}
            <div className="relative pl-12 md:pl-32 py-6">
              <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-white/10 to-transparent md:left-16" />
              <div className="absolute left-[-5px] md:left-[59px] top-10 w-3 h-3 rounded-full bg-violet-500 shadow-[0_0_12px_rgba(139,92,246,0.8)]" />
              
              <div className="md:absolute md:left-[-120px] md:top-8 text-violet-400 font-bold tracking-widest text-sm mb-4 md:mb-0">
                05 RESPOND
              </div>
              
              <div className="bg-[#111318] border border-violet-500/20 rounded-2xl p-8 shadow-[0_8px_32px_rgba(139,92,246,0.05)]">
                <h3 className="text-2xl font-bold text-white mb-4">De-tokenization</h3>
                <p className="text-white/60 mb-6">
                  The predicted tokens are converted back into human-readable text and streamed into your chat interface instantly. The entire loop completes entirely within your physical device.
                </p>
                <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 w-[80%] rounded-full relative">
                     <div className="absolute top-0 right-0 bottom-0 w-20 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
