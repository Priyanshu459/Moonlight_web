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
        a: "Moonlight AI is an Android application that allows you to run large language models (LLMs) locally on your device. It provides a private, offline-capable chat interface for AI assistance.",
      },
      {
        q: "Is it free to use?",
        a: "Yes, Moonlight AI is free to use. There are no subscriptions or hidden cloud fees, because you provide the compute by running the models on your own device hardware.",
      },
      {
        q: "Do I need an internet connection?",
        a: "You need an internet connection to download models initially from the Model Store. Once a model is downloaded and installed locally on your device, you can use it completely offline.",
      }
    ]
  },
  {
    id: "models",
    title: "Models",
    questions: [
      {
        q: "Where do the models come from?",
        a: "Moonlight downloads verified GGUF models from Hugging Face. The app acts as a secure download manager that verifies SHA-256 checksums before installing the models.",
      },
      {
        q: "How much storage space do I need?",
        a: "Model sizes vary significantly. A small model like Phi-3 Mini requires around 2.2 GB, while a larger model like Llama 3 8B requires around 4.5 GB. Ensure you have enough free storage on your device.",
      },
      {
        q: "Can I use any GGUF model?",
        a: "Moonlight currently supports a curated list of models optimized for mobile devices (usually Q4_K_M quantization). Support for sideloading custom GGUF models is planned for a future update.",
      }
    ]
  },
  {
    id: "performance",
    title: "Performance",
    questions: [
      {
        q: "Will this drain my battery?",
        a: "Running AI models locally requires significant CPU and GPU power. Yes, prolonged use will drain your battery faster than normal apps and may cause your device to warm up. We recommend using Moonlight while plugged in for long sessions.",
      },
      {
        q: "How fast is it?",
        a: "Speed depends entirely on your device's processor (SoC) and RAM speed. On modern high-end Android phones, you can expect between 10 to 25 tokens per second. Older devices will be slower.",
      }
    ]
  },
  {
    id: "privacy",
    title: "Privacy & Security",
    questions: [
      {
        q: "Does my data leave my phone?",
        a: "No. Your prompts and conversations are processed strictly on your device using llama.cpp and stored in a local SQLite database. Moonlight does not send your chats to any cloud server.",
      },
      {
        q: "Do you collect analytics?",
        a: "No. Moonlight AI contains zero analytics tracking, telemetry, or remote crash reporting SDKs. Your usage is entirely your own business.",
      },
      {
        q: "How secure are my local chats?",
        a: "Your chats are stored within the app's sandboxed storage. You can additionally enable Biometric Lock (fingerprint/face) to require authentication before opening the app.",
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    questions: [
      {
        q: "The model won't load / Insufficient Memory",
        a: "If a model fails to load or crashes immediately, your device likely does not have enough free RAM to hold the model weights. Try closing other apps, or download a smaller model (e.g., Phi-3 Mini instead of Llama 3 8B).",
      },
      {
        q: "Model download failed / paused indefinitely",
        a: "Check your internet connection and ensure you have enough free storage space. If a download is stuck, you can cancel it in the Model Store and try again. The app supports HTTP resume, so it will attempt to pick up where it left off.",
      },
      {
        q: "Generation stopped suddenly",
        a: "This usually happens if Android's Out-Of-Memory (OOM) killer terminates the background inference process to save the system. Try generating shorter responses or using a smaller model.",
      }
    ]
  }
];
