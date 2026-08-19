import { 
  Brain, 
  Database, 
  MessageSquare, 
  Search, 
  Mic, 
  Lock,
  Zap,
  HardDrive,
  Eye,
  FileText
} from "lucide-react";

export type FeatureStatus = "RELEASED" | "BETA" | "MODEL-DEPENDENT" | "COMING SOON" | "NOT AVAILABLE";

export interface Feature {
  id: string;
  title: string;
  headline: string;
  description: string;
  technical: string;
  benefit: string;
  icon: import('lucide-react').LucideIcon;
  color: string;
  note?: string;
  status: FeatureStatus;
}

export const features: Feature[] = [
  {
    id: "local-inference",
    title: "Local LLM Inference",
    headline: "Run AI models directly on your device.",
    description: "Moonlight executes language models locally on your Android device's hardware. Your prompts are processed on-device without sending data to the cloud.",
    technical: "Powered by llama.cpp via FFI. Supports optimized GGUF format with Q4_K_M quantization.",
    benefit: "Zero latency from network roundtrips, complete privacy, and works anywhere you have your phone.",
    icon: Brain,
    color: "indigo",
    status: "RELEASED"
  },
  {
    id: "model-store",
    title: "Model Store",
    headline: "Download and manage models easily.",
    description: "Browse a curated catalog of local AI models. Download them directly to your device storage. Supports pausing, resuming, and background downloads.",
    technical: "Implements HTTP range requests. All downloads are verified with SHA-256 checksums before installation.",
    benefit: "You control which models you want. Delete models you no longer need to free up storage space.",
    icon: Database,
    color: "emerald",
    status: "RELEASED"
  },
  {
    id: "conversations",
    title: "Private Conversations",
    headline: "Chat securely with no remote history.",
    description: "Your entire conversation history is stored strictly on your device's local storage. Nobody else can read it.",
    technical: "Uses SQLite via the Drift package for fast, local persistence.",
    benefit: "You can discuss sensitive information, code, or personal matters with zero fear of data harvesting.",
    icon: MessageSquare,
    color: "blue",
    status: "RELEASED"
  },
  {
    id: "voice-input",
    title: "Voice Input",
    headline: "Speak directly to your local models.",
    description: "Use your device's built-in speech recognition to dictate prompts to Moonlight without typing.",
    technical: "Integrates with Android's native SpeechToText service.",
    benefit: "Hands-free interaction that seamlessly bridges into your local LLM workflow.",
    icon: Mic,
    color: "violet",
    status: "RELEASED"
  },
  {
    id: "biometric-lock",
    title: "Biometric Security",
    headline: "Lock the app with your fingerprint.",
    description: "Ensure your private AI conversations remain private even if you hand your unlocked phone to someone else.",
    technical: "Uses the Android KeyStore and standard biometric authentication APIs.",
    benefit: "An extra layer of physical security for your locally stored data.",
    icon: Lock,
    color: "rose",
    status: "RELEASED"
  },
  {
    id: "offline-mode",
    title: "Offline Inference",
    headline: "No internet? No problem.",
    description: "Once you have downloaded a model, Moonlight can generate responses without any active internet connection.",
    technical: "Pure local CPU/GPU execution via llama.cpp.",
    benefit: "Use AI on an airplane, in remote areas, or when you want to save cellular data.",
    icon: Zap,
    color: "amber",
    status: "MODEL-DEPENDENT",
    note: "Requires internet for the initial model download."
  }
];

export const comingSoonFeatures: Feature[] = [
  {
    id: "local-memory",
    title: "Local Memory",
    headline: "Continuous context extraction",
    description: "Moonlight is currently wiring up its backend MemoryEngine. Soon, it will extract facts from your conversations and store them in a local vector database.",
    technical: "Will use an internal embedding model (via llama.cpp) to store vector representations in SQLite.",
    benefit: "The AI will remember things about you across different conversations.",
    icon: HardDrive,
    color: "slate",
    status: "COMING SOON"
  },
  {
    id: "semantic-search",
    title: "Semantic Search",
    headline: "Search by meaning, not keywords",
    description: "The SemanticSearchEngine is being integrated into the UI. It will allow you to find past conversations based on meaning.",
    technical: "Will compute cosine similarity between query embeddings and stored memory embeddings.",
    benefit: "Instantly recall past topics even if you don't remember the exact words used.",
    icon: Search,
    color: "slate",
    status: "COMING SOON"
  },
  {
    id: "vision",
    title: "Multimodal Vision",
    headline: "Analyze images locally",
    description: "Integration for Vision models (like LLaVA) is in development. You will be able to share images with Moonlight for local analysis.",
    technical: "Will route images through LlamaCppBackend using multimodal GGUF weights.",
    benefit: "Ask questions about photos without uploading them to cloud servers.",
    icon: Eye,
    color: "slate",
    status: "COMING SOON"
  },
  {
    id: "ocr",
    title: "OCR Document Scanning",
    headline: "Extract text from the real world",
    description: "The CameraEngine is being wired up to allow on-device text extraction from photos and documents.",
    technical: "Will use Google ML Kit for on-device text recognition.",
    benefit: "Quickly scan physical documents and feed the text into your local LLM.",
    icon: FileText,
    color: "slate",
    status: "COMING SOON"
  }
];
