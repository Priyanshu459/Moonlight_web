import type { Metadata } from "next";
import Link from "next/link";
import { LatestFeatures } from "@/components/sections/LatestFeatures";

export const metadata: Metadata = {
  title: "How It Works",
  description: "Learn how Moonlight AI works: Choose between on-device Phone mode, your own LM Studio computer, or supported cloud AI providers.",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-32 pb-24">
      <header className="container-page mb-12">
        <p className="lunar-eyebrow">MOONLIGHT AI / HOW IT WORKS</p>
        <h1 className="text-display-lg mt-5 mb-6">
          Your AI. Your device.<br />Your choice.
        </h1>
        <p className="max-w-xl text-slate-400 leading-8">
          Moonlight is local-first, not local-only. Choose whether intelligence runs on your phone, connects to your computer, or uses a cloud provider. Each mode has a clear, distinct data path.
        </p>
      </header>

      <LatestFeatures />

      <section className="container-page max-w-3xl legal-content mt-16">
        <h2>1. Choose an execution mode</h2>
        <p>
          Moonlight puts you in control of where intelligence runs. You can switch between three modes at any time:
        </p>
        <ul>
          <li><strong>Phone mode:</strong> On-device AI inference. Compatible GGUF models run locally using your device’s processor. No cloud AI provider is needed, and conversations stay on your phone.</li>
          <li><strong>Computer mode:</strong> Connects to your own computer running LM Studio. You control the server endpoint, compute hardware, and model catalog.</li>
          <li><strong>Cloud mode:</strong> Connects to supported third-party providers (such as OpenAI, Anthropic, Google Gemini, Alibaba, or NVIDIA) using your own API keys.</li>
        </ul>

        <h2>2. Configure your model or provider</h2>
        <ol>
          <li>
            <strong>Phone mode setup:</strong> Open Models &amp; storage and choose an eligible GGUF model. Download it over an internet connection. Hardware capacity checks verify that your device has sufficient RAM. Once loaded, Phone mode can operate offline.
          </li>
          <li>
            <strong>Computer mode setup:</strong> Start the LM Studio API server on your computer. For same-Wi-Fi use, enter your computer’s reachable local IP address. For remote use, configure an authenticated HTTPS address via a secure private network (such as Tailscale). Keep your computer awake and connected.
          </li>
          <li>
            <strong>Cloud mode setup:</strong> Open AI providers, select a supported provider, and enter your own API key. Your credential is saved locally in encrypted storage.
          </li>
        </ol>

        <h2>3. Chat on your terms</h2>
        <p>
          Start a conversation in your chosen mode. You can attach supported UTF-8 text documents up to 512 KiB or use system voice input.
        </p>
        <ul>
          <li><strong>In Phone mode:</strong> Prompts, responses, and attached text remain on your device.</li>
          <li><strong>In Computer or Cloud mode:</strong> A clear send disclosure confirms before transmitting recent messages, personal instructions, and attached text to the configured server or provider.</li>
        </ul>

        <h2>4. Manage memories and reporting</h2>
        <p>
          Saved memories and personal instructions stay in private local app storage. You can review or clear memories at any time. If an AI response is incorrect, unsafe, or inappropriate, you can use the in-app reporting button to flag it directly from the chat screen.
        </p>

        <h2>5. Understand data boundaries</h2>
        <p>
          Moonlight does not operate a centralized account-based chat history. When using third-party cloud providers or an LM Studio server, the provider or server operator’s own retention policies apply. <Link href="/privacy" className="text-[var(--accent)] hover:underline">Read our complete Privacy Policy</Link> for detailed disclosure.
        </p>
      </section>
    </div>
  );
}
