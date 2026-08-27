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
        a: "Moonlight downloads compatible GGUF models directly from Hugging Face over HTTPS. Repository URLs are checked and the app prefers mobile-friendly quantizations when selecting a file.",
      },
      {
        q: "How much storage space do I need?",
        a: "Model sizes vary. The Model Store shows the approximate size before download; for example, Llama 3.2 1B and Qwen 2.5 1.5B are around 1.3 GB and 1.1 GB in the listed quantizations.",
      },
      {
        q: "Can I use any GGUF model?",
        a: "Moonlight accepts compatible Hugging Face repository URLs or direct .gguf links. Model compatibility and memory use depend on your device and the chosen quantization.",
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
        a: "Your prompts and conversations are processed on your device using llama.cpp and stored locally with MMKV. Model discovery and downloads connect to Hugging Face, but Moonlight does not include chat content in those requests.",
      },
      {
        q: "Do you collect analytics?",
        a: "No. Moonlight AI contains zero analytics tracking, telemetry, or remote crash reporting SDKs. Your usage is entirely your own business.",
      },
      {
        q: "How secure are my local chats?",
        a: "Chats are stored in Android's private app storage. They are not synced to Moon Knight Studio or another cloud service, and Android cloud backup is disabled for the app.",
      }
    ]
  },
  {
    id: "troubleshooting",
    title: "Troubleshooting",
    questions: [
      {
        q: "The model won't load / Insufficient Memory",
        a: "If a model fails to load or crashes immediately, your device may not have enough free RAM for its weights and context. Close other apps or choose a smaller model such as Llama 3.2 1B.",
      },
      {
        q: "Model download failed / paused indefinitely",
        a: "Check your internet connection and free storage. You can cancel a download in the Models screen and try again.",
      },
      {
        q: "Generation stopped suddenly",
        a: "This usually happens if Android's Out-Of-Memory (OOM) killer terminates the background inference process to save the system. Try generating shorter responses or using a smaller model.",
      }
    ]
  }
];
