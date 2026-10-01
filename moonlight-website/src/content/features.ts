import { Brain, Palette, Globe, ShieldCheck, Mic, MessageSquare, SlidersHorizontal, FileCheck, Cpu, Monitor, Cloud, Flag } from "lucide-react";

export type FeatureStatus = "RELEASED" | "MODEL-DEPENDENT" | "IN DEVELOPMENT";

export interface Feature {
  id: string;
  title: string;
  headline: string;
  description: string;
  technical: string;
  benefit: string;
  icon: import("lucide-react").LucideIcon;
  color: string;
  note?: string;
  status: FeatureStatus;
}

// Source: Moonlight AI v1.7.2 Android application capabilities
export const features: Feature[] = [
  {
    id: "local-inference",
    title: "On-device GGUF inference",
    headline: "Run models directly on your phone.",
    description: "Run compatible GGUF language models directly on your Android phone. In Phone mode, prompts and responses are processed on-device without sending data to a cloud AI provider.",
    technical: "Compatible GGUF models running via native on-device execution. Phone mode can operate without internet access once the required model is downloaded.",
    benefit: "On-device AI inference in Phone mode.",
    icon: Brain,
    color: "indigo",
    status: "RELEASED",
  },
  {
    id: "lmstudio",
    title: "Your computer, connected",
    headline: "Connect Moonlight to your LM Studio server.",
    description: "Connect to your own compatible LM Studio server to chat with models running on your computer. Guided setup covers same-Wi-Fi and private network access.",
    technical: "User-configured endpoint. Requests route to your computer's LM Studio API address over your local network or a separately configured private network (such as Tailscale).",
    benefit: "Use your own desktop compute.",
    icon: Monitor,
    color: "cyan",
    status: "RELEASED",
  },
  {
    id: "providers",
    title: "Your choice of cloud",
    headline: "Connect your own provider API keys.",
    description: "Connect OpenAI, Google Gemini, Anthropic, Alibaba Cloud, NVIDIA, or compatible providers. When Cloud mode is used, requests are processed by the selected provider.",
    technical: "Requests include recent messages, personal instructions and attached text after a send confirmation. Provider privacy policies, retention practices and billing apply.",
    benefit: "Use cloud models when you need additional capabilities.",
    icon: Cloud,
    color: "blue",
    status: "RELEASED",
  },
  {
    id: "reporting",
    title: "Report AI responses",
    headline: "In-app reporting for quality and safety.",
    description: "Moonlight provides an in-app way to report AI responses that are incorrect, unsafe, or inappropriate.",
    technical: "Users can report specific problematic outputs directly from the chat screen with a category selection, submitting relevant response details so issues can be reviewed.",
    benefit: "Flag incorrect or inappropriate responses.",
    icon: Flag,
    color: "amber",
    status: "RELEASED",
  },
  {
    id: "web-tools",
    title: "Answers with sources",
    headline: "Explore source material.",
    description: "Supported OpenAI and Anthropic cloud models can use provider web search to return answers with clickable citations.",
    technical: "Provider web tools are enabled unless disabled in provider settings. Search queries and chat context are processed by the provider's search infrastructure.",
    benefit: "Explore source material with citations.",
    icon: Globe,
    color: "cyan",
    status: "MODEL-DEPENDENT",
  },
  {
    id: "credentials",
    title: "Secure credential storage",
    headline: "Encrypted API keys and server tokens.",
    description: "Store provider API keys and LM Studio tokens securely on your Android device with hardware-backed encryption.",
    technical: "Native AES-GCM encryption backed by the Android Keystore. Chat history is stored separately in private app MMKV storage.",
    benefit: "Secure local credential protection.",
    icon: ShieldCheck,
    color: "emerald",
    status: "RELEASED",
  },
  {
    id: "five-themes",
    title: "Five shades of Moonlight",
    headline: "Find your light.",
    description: "Glass, Glass Night, Paper, Mono, and Midnight themes, with system appearance following and a saved Reduce Motion preference.",
    technical: "Appearance preferences persist locally in private app storage. Full accessibility support including system reduced-motion detection.",
    benefit: "Personalized comfort and accessibility.",
    icon: Palette,
    color: "violet",
    status: "RELEASED",
  },
  {
    id: "conversations",
    title: "Private conversations & controls",
    headline: "You control your chat history.",
    description: "Search, rename, and delete conversations. Review or clear locally saved memories at any time. No Moonlight account or centralized chat history.",
    technical: "Conversations and memories persist in private app storage. Android cloud backup is disabled. Deleting data removes it immediately from local storage.",
    benefit: "No Moonlight account or centralized tracking.",
    icon: MessageSquare,
    color: "amber",
    status: "RELEASED",
  },
  {
    id: "files",
    title: "Text with context",
    headline: "Bring your notes along.",
    description: "Attach supported UTF-8 text documents to summarize notes, review code, or analyze text.",
    technical: "Native bounded reader accepts up to 512 KiB of text. Stays local in Phone mode; transmitted to the configured endpoint in Computer or Cloud mode after confirmation.",
    benefit: "Work with your documents.",
    icon: FileCheck,
    color: "blue",
    status: "RELEASED",
  },
  {
    id: "model-checks",
    title: "Model management & capacity checks",
    headline: "A careful use of device memory.",
    description: "Capacity checks filter local model downloads and verify available RAM before loading on-device models.",
    technical: "ARM64 verification, total RAM and available RAM checks against model size to reduce memory pressure. Serialized model loading.",
    benefit: "Informed device compatibility.",
    icon: Cpu,
    color: "emerald",
    status: "RELEASED",
  },
  {
    id: "responses",
    title: "Response style preferences",
    headline: "A little more you.",
    description: "Choose concise, balanced, or detailed response styles and save custom personal instructions.",
    technical: "Personal instructions apply to conversations and are included in Computer and Cloud requests. Saved memories are not automatically injected into remote requests.",
    benefit: "Set the response tone.",
    icon: SlidersHorizontal,
    color: "orange",
    status: "RELEASED",
  },
  {
    id: "voice",
    title: "Voice input",
    headline: "Speak your prompt.",
    description: "Use Android speech recognition to dictate prompts directly into your conversation.",
    technical: "Uses Android system SpeechRecognizer. Transcripts follow the data path of the selected Phone, Computer, or Cloud mode. Moonlight does not record raw audio.",
    benefit: "Hands-free speech-to-text.",
    icon: Mic,
    color: "pink",
    status: "RELEASED",
  },
];

export const comingSoonFeatures: Feature[] = [];

