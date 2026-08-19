# Moonlight AI Website Product Audit
Generated: 2026-08-19 | Codebase: C:\Dev\Moonlight_llm (v0.9.0+1)

## Stack
- Flutter (Dart SDK >=3.12), Android primary target
- LLM Runtime: llama_cpp_dart ^0.2.2 (llama.cpp via FFI, on-device only)
- State: flutter_riverpod + get_it/injectable
- Navigation: go_router
- Database: Drift/SQLite (WAL mode, LOCAL ONLY, no remote DB)
- Network: Dio (model downloads ONLY)

## Local Storage (SQLite tables confirmed in app_database.dart v5)
- Workspaces, Conversations, ChatMessages, Memories, KnowledgeGraph, MediaFiles, InstalledModels
- All data stays on device. No Supabase, Firebase, or cloud DB found.

## Network Usage
DOES use network: Model downloads (Dio -> huggingface.co), cached model avatars (huggingface.co images)
DOES NOT use network: inference, chat, memories, embeddings, search, OCR, voice, analytics, crash reporting

## Permissions (AndroidManifest.xml)
RECORD_AUDIO: voice dictation | INTERNET: model downloads | ACCESS_NETWORK_STATE: connectivity check
USE_BIOMETRIC/USE_FINGERPRINT: local biometric lock | CAMERA: camera/multimodal capture
WAKE_LOCK: background loading | FOREGROUND_SERVICE: downloads | READ/WRITE_EXTERNAL_STORAGE: legacy Android

## Third-Party SDKs
- llama_cpp_dart: on-device only, no network
- speech_to_text: uses Android system STT (may contact Google servers via system, not Moonlight)
- google_mlkit_text_recognition: on-device OCR (requires Google Play Services)
- drift+sqlite3, flutter_secure_storage, shared_preferences: local storage only
- dio: model downloads only
- local_auth: biometric lock, device-local
- NO analytics SDK (Firebase Analytics, Mixpanel, Amplitude, etc.)
- NO crash reporting SDK (Crashlytics, Sentry, etc.)
- NO ad SDK, NO Supabase, NO Firebase, NO cloud auth, NO user accounts

## Feature Status (from source code inspection)
RELEASED:
- Local LLM Inference (llama_cpp_dart, RuntimeManager, LlamaCppBackend)
- Model Store + Download (DownloadManager, SHA-256 verify, resume support)
- Model Catalog 10+ models (Llama 3, Mistral, Phi-3, Gemma 2, DeepSeek R1, Qwen2, LLaVA, CodeLlama)
- Local Chat + Conversations (ConversationScreen, streaming)
- Local Memory (MemoryManager, MemoryExtractor, MemoryRanker, MemoryRetriever)
- Local Embeddings (LocalEmbeddingEngine via llama_cpp_dart)
- Semantic Search (LocalSemanticSearchEngine, cosine similarity)
- Voice Input/STT (VoiceEngine, speech_to_text, wired to chat InputBar)
- OCR (OCREngine, google_mlkit_text_recognition)
- Vision/Multimodal (VisionEngine -> LLaVA via llama.cpp)
- Biometric App Lock (BiometricLockWrapper, local_auth)
- Knowledge Graph (KnowledgeGraphEngine, LLM-extracted entity-relationships)
- Workspace + Import Pipeline (ImportPipeline: PDF/image/text -> memories)
- Dark/Light Theme

PARTIALLY IMPLEMENTED:
- Universal Search (keyword only for workspaces/convos; semantic memory search noted TODO)
- Performance Monitor (screen exists, partial implementation)

IN DEVELOPMENT (NOT production-ready, code is scaffolded):
- Agents (AgentRuntime uses mock Future.delayed stubs)
- Workflows (WorkflowEngine _executeNode is a stub)
- Plugins (no UI, managers scaffolded)

## Privacy Claims
SAFE TO CLAIM:
- AI inference runs on your device using llama.cpp
- Conversations stored locally in SQLite on your device
- Memories stored locally, never sent to external servers
- No analytics data collected
- No crash reporting services
- No user accounts required
- Biometric lock is device-local
- Models downloaded from Hugging Face; no other external network requests during normal use
- Voice recognition uses the device built-in STT
- OCR processes images on-device via ML Kit

MUST NOT CLAIM:
- 100% private / zero network requests (model downloads use network)
- No data ever leaves your device (downloads are an exception)
- Completely offline (runtime is offline post-download, but downloads need internet)
- Specific performance benchmarks
- User/download counts, awards, press, fake testimonials
- Voice recognition never touches Google (Android system service, outside Moonlight control)
