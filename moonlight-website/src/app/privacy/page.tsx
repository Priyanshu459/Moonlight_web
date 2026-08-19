import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}. Understand how Moonlight AI handles your data.`,
  alternates: { canonical: `${siteConfig.url}/privacy` },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-page max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-muted)] rounded-full border border-[var(--accent)]/20 mb-4">
            Legal
          </div>
          <h1 className="text-display-md text-[var(--text-primary)] mb-3">
            Privacy Policy
          </h1>
          <p className="text-sm text-[var(--text-tertiary)]">
            Last Updated: {siteConfig.lastUpdated}
          </p>
        </div>

        <div className="legal-content">

          <h2>1. Introduction</h2>
          <p>
            This Privacy Policy describes how Moonlight AI (&quot;Moonlight AI,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) 
            handles information in connection with the Moonlight AI Android application (&quot;the App&quot;).
          </p>
          <p>
            Moonlight AI is a local-first AI assistant. The App is designed to process information on your device 
            rather than transmitting it to external servers. We encourage you to read this policy to understand 
            exactly what data flows exist.
          </p>

          <h2>2. Information We Do Not Collect</h2>
          <p>
            The following data is <strong>never collected, transmitted, or stored on any server operated by Moonlight AI</strong>:
          </p>
          <ul>
            <li>Your conversations with the AI</li>
            <li>Your memories, notes, or documents imported into the App</li>
            <li>AI prompts or responses</li>
            <li>Voice recordings or transcriptions</li>
            <li>Images captured with the camera</li>
            <li>Usage analytics or behavioral data</li>
            <li>Crash logs or diagnostic reports</li>
            <li>Device identifiers or advertising IDs</li>
          </ul>
          <p>
            The App does not include analytics SDKs (such as Firebase Analytics, Mixpanel, or Amplitude), 
            crash reporting services (such as Firebase Crashlytics or Sentry), or advertising frameworks.
          </p>

          <h2>3. Data Stored Locally on Your Device</h2>
          <p>
            The App stores the following information locally in a SQLite database on your device 
            (located within the App&apos;s private application documents directory):
          </p>
          <ul>
            <li><strong>Workspaces:</strong> Names and timestamps of workspaces you create</li>
            <li><strong>Conversations:</strong> Chat conversation titles and timestamps</li>
            <li><strong>Messages:</strong> Chat messages (your inputs and AI responses)</li>
            <li><strong>Memories:</strong> Context extracted from conversations, stored with vector embeddings</li>
            <li><strong>Knowledge Graph:</strong> Entity-relationship data extracted by the local AI model</li>
            <li><strong>Media File References:</strong> Paths to files you import</li>
            <li><strong>Installed Models:</strong> Information about AI models you have downloaded</li>
          </ul>
          <p>
            App preferences (such as theme selection and whether biometric lock is enabled) are stored 
            in Android SharedPreferences and device secure storage. All data remains on your device 
            and is not backed up to any Moonlight AI server.
          </p>

          <h2>4. AI Model Processing</h2>
          <p>
            AI inference is performed entirely on your device using the llama.cpp runtime. 
            Your prompts, conversation history, and retrieved memories are processed locally 
            and are not transmitted to any external AI service or API.
          </p>

          <h2>5. Model Downloads</h2>
          <p>
            When you download an AI model through the Model Store, the App connects to Hugging Face 
            (huggingface.co) to retrieve the model file. This is the primary network operation 
            performed by the App during normal use. The download is subject to Hugging Face&apos;s 
            privacy practices. After a model is downloaded and installed, it is stored locally on your device.
          </p>
          <p>
            Model downloads include SHA-256 checksum verification to ensure file integrity. 
            No personal information is transmitted during the download process.
          </p>

          <h2>6. Voice Recognition</h2>
          <p>
            The App includes a voice dictation feature that uses your Android device&apos;s built-in 
            speech recognition service (via the Android SpeechRecognizer API). This is a system-level 
            service provided by Android, not by Moonlight AI. The behavior of this service, 
            including whether audio is processed on-device or via Google&apos;s servers, depends on 
            your device, Android version, and Google account configuration. Moonlight AI does not 
            control or have access to how the Android speech service processes audio.
          </p>
          <p>
            Voice input is optional. You may use text input exclusively if you prefer.
          </p>

          <h2>7. Camera and OCR</h2>
          <p>
            When you use the camera capture feature, images are processed on your device using 
            Google ML Kit&apos;s Text Recognition (for OCR) or a locally installed multimodal AI model 
            (for visual analysis). Images are not transmitted to any external server by Moonlight AI. 
            Google ML Kit may require Google Play Services on your device. Please refer to Google&apos;s 
            privacy documentation for information about ML Kit&apos;s on-device processing.
          </p>

          <h2>8. Authentication and Biometrics</h2>
          <p>
            Moonlight AI does not have user accounts, login, or cloud-based authentication. 
            There is no sign-in process.
          </p>
          <p>
            The App optionally supports biometric app lock (fingerprint or face unlock) using 
            Android&apos;s Biometric API. Biometric data is handled entirely by Android and is 
            never transmitted to or processed by Moonlight AI.
          </p>

          <h2>9. Third-Party Services</h2>
          <p>The following third-party services are used by the App:</p>
          <ul>
            <li>
              <strong>Hugging Face (huggingface.co):</strong> Used for AI model downloads. 
              Subject to Hugging Face&apos;s Privacy Policy.
            </li>
            <li>
              <strong>Google ML Kit:</strong> Used for on-device OCR. Requires Google Play Services. 
              Subject to Google&apos;s Privacy Policy for on-device ML processing.
            </li>
            <li>
              <strong>Android Speech Recognition (SpeechRecognizer API):</strong> Used for voice dictation. 
              This is an Android system service. Subject to Google&apos;s Privacy Policy where applicable.
            </li>
          </ul>
          <p>
            No advertising networks, social media SDKs, or data broker services are integrated 
            into the App.
          </p>

          <h2>10. Permissions</h2>
          <p>The App requests the following Android permissions, used only for the stated purposes:</p>
          <ul>
            <li><strong>RECORD_AUDIO:</strong> Voice dictation in the chat interface</li>
            <li><strong>INTERNET:</strong> Downloading AI models</li>
            <li><strong>ACCESS_NETWORK_STATE:</strong> Checking connectivity before downloads</li>
            <li><strong>CAMERA:</strong> Capturing images for OCR or visual analysis</li>
            <li><strong>USE_BIOMETRIC / USE_FINGERPRINT:</strong> Optional app lock</li>
            <li><strong>WAKE_LOCK:</strong> Preventing device sleep during model loading</li>
            <li><strong>FOREGROUND_SERVICE:</strong> Maintaining downloads while the app is in the background</li>
            <li><strong>READ/WRITE_EXTERNAL_STORAGE:</strong> Legacy storage access on older Android versions</li>
          </ul>
          <p>
            Microphone and camera permissions are requested at runtime when you first use those features 
            and are not required for basic AI chat functionality.
          </p>

          <h2>11. Data Security</h2>
          <p>
            All user data is stored in the App&apos;s private storage directory on your device, 
            which is protected by Android&apos;s application sandboxing. Sensitive preferences are 
            stored using Android&apos;s KeyStore-backed secure storage. We do not operate any servers 
            that store your personal data.
          </p>

          <h2>12. Data Retention and Deletion</h2>
          <p>
            Since all data is stored locally on your device, you control its retention entirely. 
            You can delete individual conversations, memories, or workspaces within the App. 
            You can delete all App data by using Android&apos;s &quot;Clear Storage&quot; function 
            in your device Settings, or by uninstalling the App.
          </p>
          <p>
            For more information about clearing your data, see our{" "}
            <a href="/delete-account">Data Deletion page</a>.
          </p>

          <h2>13. Children&apos;s Privacy</h2>
          <p>
            Moonlight AI is not directed to children under 13 years of age. 
            We do not knowingly collect personal information from children under 13. 
            As the App does not collect any personal information from users, 
            this policy applies equally to all users.
          </p>

          <h2>14. International Users</h2>
          <p>
            Because Moonlight AI does not collect or transmit personal data to servers 
            operated by Moonlight AI, international data transfer considerations 
            (such as GDPR cross-border transfers) are not applicable to the App&apos;s 
            core functionality. Model downloads connect to Hugging Face servers, 
            which may be subject to applicable data protection regulations.
          </p>

          <h2>15. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; 
            date at the top of this page indicates when it was most recently revised. 
            We encourage you to review this policy periodically.
          </p>

          <h2>16. Contact</h2>
          <p>
            If you have questions about this Privacy Policy or Moonlight AI&apos;s data practices, 
            please contact us at:{" "}
            <a href={`mailto:${siteConfig.privacyEmail}`}>{siteConfig.privacyEmail}</a>
          </p>
          <p>
            Or visit our <a href="/support">Support page</a> for additional assistance.
          </p>

        </div>
      </div>
    </div>
  );
}
