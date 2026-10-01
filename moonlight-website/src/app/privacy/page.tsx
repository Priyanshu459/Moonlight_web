import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Moonlight AI handles data on your phone, your LM Studio computer, and your chosen cloud providers. Applies to Moonlight AI 1.7.x.",
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="pb-20 pt-28">
      <article className="container-page max-w-3xl">
        <header className="mb-12 border-b border-white/10 pb-10">
          <p className="eyebrow mb-4">Moon Knight Studio / Moonlight AI</p>
          <h1 className="text-display-md">Privacy Policy</h1>
          <p className="mt-4 text-sm text-slate-400">
            Last Updated: {siteConfig.lastUpdated} · {siteConfig.releaseScope}
          </p>
          <p className="mt-3 text-sm text-slate-300">
            Android Application ID: {siteConfig.packageId}
          </p>
        </header>

        <div className="legal-content">
          <h2>1. Overview and Core Architecture</h2>
          <p>
            Moonlight AI is a privacy-focused, local-first artificial intelligence assistant application for Android, developed and published by {siteConfig.companyName}.
          </p>
          <p>
            <strong>Moonlight is local-first, not local-only.</strong> The application supports three distinct execution modes: Phone mode (on-device inference), Computer mode (connecting to your own LM Studio server), and Cloud mode (connecting to supported third-party cloud AI providers with your own API keys). Where your messages and prompts are processed depends directly on the execution mode you choose.
          </p>
          <p>
            Moonlight does not require you to create a Moonlight account. We do not operate a centralized user database, account system, or cloud chat synchronization service. This policy explains what data is stored on your device, how network requests are handled in each mode, and what controls you have over your data.
          </p>

          <h2>2. At a Glance: Where Your Data Goes</h2>
          <ul>
            <li>
              <strong>Phone Mode (On-Device Inference):</strong> Prompts, responses, conversation context, personal instructions, and attached text files are processed entirely by compatible GGUF language models running on your Android device. After required local models are downloaded, Phone mode can operate completely without an internet connection. No cloud AI provider is involved in Phone mode.
            </li>
            <li>
              <strong>Computer Mode (LM Studio):</strong> Requests are transmitted over your network to the LM Studio API endpoint that you configure. The AI runs on the designated computer rather than on your phone. Your server operator controls its logs, retention, and connected models.
            </li>
            <li>
              <strong>Cloud Mode (Third-Party Providers):</strong> Requests are transmitted to the cloud provider you select (such as OpenAI, Anthropic, Google Gemini, Alibaba Cloud, or NVIDIA) using your own API credentials. The selected provider processes the request, and their respective privacy, data handling, and retention policies apply.
            </li>
          </ul>

          <h2>3. Information Stored Locally on Your Phone</h2>
          <p>
            When you use Moonlight AI, the following data is stored locally in the application’s private Android sandboxed directory:
          </p>
          <ul>
            <li><strong>Conversations:</strong> Chat messages, conversation titles, and timestamps stored in private local app storage.</li>
            <li><strong>Memories &amp; Personal Instructions:</strong> User-defined response preferences, personal instructions, and saved local memories.</li>
            <li><strong>Downloaded AI Models:</strong> GGUF model files downloaded to your device’s internal app documents directory for use in Phone mode.</li>
            <li><strong>App Preferences:</strong> Selected appearance theme, Reduce Motion preference, and configuration flags.</li>
          </ul>
          <p>
            Android automatic cloud backup (Google Drive backup) is explicitly disabled for Moonlight AI to prevent automated transmission of local conversations. Local conversation storage uses private app sandboxing; it is not configured with an additional encryption layer over the database, so device-level security (passcode, biometric lock, full-disk encryption) is your primary defense against unauthorized physical access to your device.
          </p>

          <h2>4. Secure Credential Storage</h2>
          <p>
            API keys for third-party cloud providers and connection tokens for LM Studio servers are stored using a native encrypted credential store. Keys are encrypted using AES-GCM with cryptographic keys managed by the Android Keystore hardware-backed security enclave. Provider metadata (such as provider name or selected model identifier) is stored separately from the encrypted secret.
          </p>

          <h2>5. Computer and Cloud Mode Request Handling</h2>
          <p>
            When you initiate a chat in Computer or Cloud mode:
          </p>
          <ul>
            <li>The application displays a send disclosure indicating that the request will leave your device.</li>
            <li>The payload sent to the configured endpoint includes recent conversation messages (typically up to 20 recent messages for context), your saved personal instructions, the selected model name, and any currently attached text file content.</li>
            <li>Locally saved memories are not automatically injected into remote Computer or Cloud requests.</li>
            <li>Your stored API key is transmitted to the selected third-party provider to authenticate the request.</li>
          </ul>
          <p>
            Third-party providers process requests on their own infrastructure, which may be located in other jurisdictions. Moonlight AI does not control and cannot guarantee third-party providers’ logging, retention, or training practices. We encourage you to review the privacy policies of any provider you connect to Moonlight.
          </p>

          <h2>6. LM Studio and Network Security</h2>
          <p>
            In Computer mode:
          </p>
          <ul>
            <li><strong>Same Wi-Fi Network:</strong> Moonlight allows connection to reachable local private IPv4 addresses. An explicit opt-in is required for unencrypted HTTP connections on local networks. <strong>HTTP does not encrypt prompts or tokens in transit</strong>; if you require transport security, configure HTTPS or use a private VPN.</li>
            <li><strong>Remote Connections:</strong> For connections outside your local network, Moonlight requires an authenticated HTTPS address, which should be used over a secure private network (such as Tailscale) configured on both your phone and computer.</li>
          </ul>

          <h2>7. Provider Web Search and External Links</h2>
          <p>
            Supported cloud models (for example, specific models from OpenAI or Anthropic) can utilize provider-hosted web search tools when enabled in provider settings:
          </p>
          <ul>
            <li>When web search tools are active, the provider may submit queries to its search services to retrieve relevant context. This query is generated by the provider and contains contextual information from your prompt.</li>
            <li>Clicking on web citations or external source links returned in AI responses will open those links in your default web browser, which communicates directly with third-party websites under standard HTTP/HTTPS protocols.</li>
          </ul>

          <h2>8. Model Downloads from Hugging Face</h2>
          <p>
            Downloading models for Phone mode connects to Hugging Face (huggingface.co) and its content delivery network over secure HTTPS. Hugging Face receives standard network request information (such as your device’s IP address and requested file path). No chat conversations, memories, or user prompts are ever sent to Hugging Face during model downloads.
          </p>

          <h2>9. In-App AI Response Reporting</h2>
          <p>
            Moonlight provides an in-app feature that allows users to report AI-generated responses that are incorrect, unsafe, or inappropriate:
          </p>
          <ul>
            <li>When you submit a report, the report payload includes the specific AI response being flagged, the user prompt that generated it, the selected model/provider identifier, and the user-selected issue category or feedback.</li>
            <li>Submitting a report does NOT transmit your entire unrelated conversation history.</li>
            <li>Reports are transmitted securely to enable investigation of quality and safety issues. Reporting is entirely optional and user-initiated.</li>
          </ul>

          <h2>10. Device Permissions</h2>
          <p>
            Moonlight AI requests minimal device permissions:
          </p>
          <ul>
            <li><strong>Internet (`android.permission.INTERNET`):</strong> Required to download local models, communicate with your LM Studio server, and connect to cloud AI providers. Phone mode does not use network connectivity during inference once models are downloaded.</li>
            <li><strong>Speech Recognition:</strong> Voice input uses Android&apos;s system `SpeechRecognizer`. Audio is captured through the system speech service; Moonlight AI receives only the transcribed text and does not record or store raw audio recordings.</li>
            <li><strong>No Tracking Permissions:</strong> Moonlight does not request location, contacts, phone state, SMS, camera, or broad external storage permissions.</li>
          </ul>

          <h2>11. Analytics and Advertising</h2>
          <p>
            The Moonlight AI Android application contains:
          </p>
          <ul>
            <li><strong>No advertising SDKs</strong></li>
            <li><strong>No analytics, tracking, or telemetry SDKs</strong> (no Firebase Analytics, Mixpanel, Segment, or similar tools)</li>
            <li><strong>No third-party crash reporting SDKs</strong> (no Crashlytics, Sentry, or Bugsnag)</li>
          </ul>

          <h2>12. Data Retention and Deletion</h2>
          <p>
            Because Moonlight does not operate user accounts or central chat servers, managing your data is straightforward:
          </p>
          <ul>
            <li><strong>Delete within App:</strong> You can delete individual conversations, clear saved memories, remove installed models, or delete saved provider connections directly from the app interface.</li>
            <li><strong>Clear App Storage:</strong> In Android Settings &rarr; Apps &rarr; Moonlight AI &rarr; Storage, tapping &quot;Clear Data&quot; permanently removes all conversations, memories, credentials, and downloaded models from your device.</li>
            <li><strong>Uninstalling:</strong> Uninstalling the application automatically deletes all locally stored sandboxed data.</li>
            <li><strong>Third-Party Retention:</strong> For requests sent in Computer or Cloud mode, retention is governed by the LM Studio server operator or the respective cloud provider. You must use that provider&apos;s account portal to manage remote data retention.</li>
          </ul>
          <p>
            For step-by-step instructions, visit our dedicated <Link href="/delete-account">Data Deletion Guide</Link>.
          </p>

          <h2>13. Children&apos;s Privacy</h2>
          <p>
            Moonlight AI is intended for individuals aged 18 and older. We do not knowingly collect personal information from children. If you believe a child has provided personal information to us via support correspondence, please contact us immediately so we can remove it.
          </p>

          <h2>14. Changes to This Privacy Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in the application or applicable laws. The &quot;Last Updated&quot; date at the top of this document indicates when revisions were made. Continued use of the application following updates indicates your acknowledgement of the revised policy.
          </p>

          <h2>15. Contact Us</h2>
          <p>
            If you have questions, concerns, or feedback regarding this Privacy Policy or your data, please contact:
          </p>
          <p>
            <strong>{siteConfig.companyName}</strong><br />
            Email: <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a><br />
            Support: <Link href="/support">Help &amp; Support Centre</Link>
          </p>
        </div>
      </article>
    </div>
  );
}
