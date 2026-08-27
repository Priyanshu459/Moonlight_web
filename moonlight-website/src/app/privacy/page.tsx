import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name} (${siteConfig.packageId}), an on-device Android AI assistant from ${siteConfig.companyName}.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="pb-20 pt-28">
      <article className="container-page max-w-3xl">
        <header className="mb-12 border-b border-white/8 pb-10">
          <p className="eyebrow mb-4">Google Play privacy disclosure</p>
          <h1 className="text-display-md text-[var(--text-primary)]">Privacy Policy</h1>
          <p className="mt-4 text-sm text-[var(--text-tertiary)]">Last updated: {siteConfig.lastUpdated}</p>
          <dl className="mt-7 grid gap-3 rounded-2xl border border-white/8 bg-white/[0.025] p-5 text-sm sm:grid-cols-2">
            <div><dt className="text-white/40">Developer</dt><dd className="mt-1 text-white">{siteConfig.companyName}</dd></div>
            <div><dt className="text-white/40">Android package</dt><dd className="mt-1 break-all text-white">{siteConfig.packageId}</dd></div>
          </dl>
        </header>

        <div className="legal-content">
          <h2>1. Overview</h2>
          <p>Moonlight AI is a local-first AI assistant for Android. AI prompts and responses are processed on your device using a compatible GGUF model. Moon Knight Studio does not operate an account, analytics, advertising, or cloud-AI service for the App.</p>

          <h2>2. Data we collect</h2>
          <p><strong>Moon Knight Studio does not collect personal data through Moonlight AI.</strong> The App does not send us:</p>
          <ul>
            <li>chat messages, AI responses, or conversation history;</li>
            <li>saved memories, system prompts, settings, or preferences;</li>
            <li>attached document text;</li>
            <li>voice recordings or speech-to-text results;</li>
            <li>device identifiers, location, contacts, advertising data, analytics, telemetry, or crash reports.</li>
          </ul>
          <p>The App contains no advertising, analytics, crash-reporting, social-login, cloud-storage, or push-notification SDKs.</p>

          <h2>3. Data stored on your device</h2>
          <p>The following information can be stored locally in the App&apos;s private storage:</p>
          <ul>
            <li><strong>App settings:</strong> model URL, system prompt, response settings, and memory preference;</li>
            <li><strong>Chat history:</strong> conversation messages for each workspace;</li>
            <li><strong>Saved memories:</strong> plain-text facts the AI explicitly marks to remember, together with a timestamp;</li>
            <li><strong>Workspaces:</strong> names and their separate chat contexts;</li>
            <li><strong>Downloaded models:</strong> GGUF model files in the App&apos;s private documents directory.</li>
          </ul>
          <p>Settings, chat history, and memories are stored with MMKV. This information is not synced to Moon Knight Studio or any cloud service, and Android cloud backup is disabled for the App.</p>

          <h2>4. On-device AI processing</h2>
          <p>Moonlight AI uses the llama.rn on-device inference engine. Prompts, conversation context, memories, attached text, and generated responses are processed locally. They are not sent to OpenAI, Google Gemini, Anthropic, Moon Knight Studio, or another cloud AI provider.</p>

          <h2>5. Internet use and model downloads</h2>
          <p>The App uses the internet only when you ask it to find or download a model from Hugging Face:</p>
          <ul>
            <li>a public Hugging Face model API request may include the repository name from the URL you entered; and</li>
            <li>the selected GGUF file is downloaded directly from huggingface.co over HTTPS.</li>
          </ul>
          <p>Chat content, memories, and settings are not included in these requests. As with any internet connection, Hugging Face may receive standard connection information such as your IP address and user agent under its own privacy practices. Moon Knight Studio does not receive this information. After a model is installed, chat inference works without an internet connection.</p>

          <h2>6. Voice input</h2>
          <p>Voice input is optional and uses Android&apos;s system speech-recognition service. Moonlight AI receives the recognized text result and does not record or store raw audio. The Android service&apos;s audio processing may depend on your device and system configuration and is governed by the provider of that system service.</p>

          <h2>7. File attachments</h2>
          <p>When you choose a supported text file, its text is read into the local chat context. Moonlight AI does not upload the file or its contents to Moon Knight Studio or a cloud AI service.</p>

          <h2>8. Android permissions</h2>
          <p>The production App declares:</p>
          <ul><li><strong>INTERNET:</strong> used only for Hugging Face model discovery and model-file downloads.</li></ul>
          <p>The App does not request camera, location, contacts, SMS, microphone recording, or external-storage permissions. Model files are stored in the App&apos;s private directory.</p>

          <h2>9. Sharing, selling, and advertising</h2>
          <p>Moon Knight Studio does not sell or share personal data. The App shows no ads and has no advertising identifier or advertising SDK. Hugging Face is used only as the user-initiated source for public model metadata and files; Android speech recognition is an optional system service.</p>

          <h2>10. Security</h2>
          <p>Accepted model URLs must use HTTPS and the huggingface.co domain. Local information and models are held in Android&apos;s private app storage, which is sandboxed from other apps on a standard, non-rooted device. Cleartext HTTP is not permitted in release builds.</p>

          <h2>11. Retention and deletion</h2>
          <p>You control locally stored data:</p>
          <ul>
            <li>delete individual saved memories or clear all memories in Settings;</li>
            <li>delete downloaded models from the Models screen;</li>
            <li>use Android Settings &gt; Apps &gt; Moonlight AI &gt; Clear data to remove all App data; or</li>
            <li>uninstall Moonlight AI to remove its local storage and downloaded model files.</li>
          </ul>
          <p>Moon Knight Studio cannot retrieve or delete this data remotely because it is never received. See the <Link href="/delete-account">Data Deletion page</Link> for step-by-step instructions.</p>

          <h2>12. Children&apos;s privacy</h2>
          <p>Moonlight AI is intended for adults aged 18 and over and is not directed to children. The App does not knowingly collect personal information from children or any other user.</p>

          <h2>13. Changes to this policy</h2>
          <p>We may update this policy when the App or applicable requirements change. The latest revision date appears at the top of this page.</p>

          <h2>14. Contact</h2>
          <p>Privacy questions may be sent to <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>. Developer: {siteConfig.companyName}.</p>
        </div>
      </article>
    </div>
  );
}
