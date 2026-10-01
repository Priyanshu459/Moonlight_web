export interface FaqItem {
  q: string;
  a: string;
}

export interface FaqCategory {
  id: string;
  title: string;
  questions: FaqItem[];
}

export const faqCategories: FaqCategory[] = [
  {
    id: "getting-started",
    title: "Getting Started",
    questions: [
      {
        q: "What is Moonlight AI?",
        a: "Moonlight AI is a private, local-first AI assistant for Android with Phone, Computer, and Cloud execution modes. Version 1.7.2 offers on-device GGUF inference, user-controlled LM Studio connectivity, and support for major cloud AI providers with your own API keys.",
      },
      {
        q: "Do I need an account to use Moonlight?",
        a: "No Moonlight account is required, and Moonlight does not operate a centralized chat history. Phone mode runs locally on your device. When you choose to use third-party cloud providers, you provide your own API credentials, and that provider's account terms and billing apply.",
      },
      {
        q: "Does Moonlight work offline?",
        a: "Phone mode can operate without an internet connection after you download a compatible GGUF model to your device. Computer mode requires a reachable LM Studio server on your network, and Cloud mode requires network access to the selected provider.",
      },
    ],
  },
  {
    id: "models",
    title: "Models & Connections",
    questions: [
      {
        q: "Which models can I run in Phone mode?",
        a: "Phone mode supports compatible GGUF quantized models downloaded from Hugging Face. The app checks your device memory and architecture to verify compatibility before downloading and loading.",
      },
      {
        q: "How much storage and memory is required for Phone mode?",
        a: "Phone mode requires an Android device running Android 7.0 (API 24) or newer with an ARM64 processor, at least 4 GiB of total RAM, and available RAM exceeding the model file size by 1.5 GiB. Downloads typically range from 200 MB to 1.3 GB depending on model size.",
      },
      {
        q: "Can I connect to LM Studio on another computer?",
        a: "Yes. Computer mode connects to your own compatible LM Studio server. You can connect over your local Wi-Fi or configure an authenticated HTTPS address through a secure private network (such as Tailscale). Your computer must remain awake and reachable.",
      },
      {
        q: "Which cloud providers are supported?",
        a: "Moonlight supports popular providers including OpenAI, Anthropic, Google Gemini, Alibaba Cloud, and NVIDIA, as well as compatible custom endpoints. You supply your own API keys.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy & Data Safety",
    questions: [
      {
        q: "Where does my data go?",
        a: "Moonlight is local-first, not local-only. In Phone mode, conversations, memories, and prompts are processed on your device. In Computer or Cloud mode, a send disclosure confirms before transmitting recent messages, personal instructions, and attached text to the server or provider you select. That provider's privacy and retention policies apply.",
      },
      {
        q: "How are API credentials protected?",
        a: "API keys and server tokens are encrypted locally using AES-GCM backed by the Android Keystore hardware-backed security enclave. Chat history is stored separately in private app MMKV storage.",
      },
      {
        q: "Does deleting a conversation delete it everywhere?",
        a: "Deleting a conversation removes it from your device's local storage. If you used Computer or Cloud mode for that conversation, logs or records held by your LM Studio server or the third-party provider must be managed through that service.",
      },
      {
        q: "Does Moonlight contain advertising or analytics SDKs?",
        a: "No. The Moonlight AI Android app contains no advertising SDKs and no analytics or telemetry tracking SDKs.",
      },
      {
        q: "Can I report incorrect or unsafe AI responses?",
        a: "Yes. Moonlight provides an in-app way to report AI responses that are incorrect, unsafe, or inappropriate directly from the chat screen.",
      },
    ],
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    questions: [
      {
        q: "LM Studio does not show models or connect",
        a: "Verify that the LM Studio server is running on your computer, CORS is enabled, and your computer is reachable from your phone's network. Check the connection status indicator in the app settings.",
      },
      {
        q: "My cloud provider request failed",
        a: "Check that your API key is valid, your account has active billing/credits, and the selected model ID is supported by that provider in your region.",
      },
      {
        q: "Phone mode model download failed or model won't load",
        a: "Ensure you have a stable internet connection and sufficient free internal storage. If loading fails, your device may not have enough available free RAM to run the model safely.",
      },
    ],
  },
];
