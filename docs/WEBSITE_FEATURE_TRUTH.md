# Moonlight AI — Feature Truth Audit

**Date:** 2026-08-19
**Source Code Inspected:** `C:\Dev\Moonlight_llm`

This document represents the absolute ground truth of the current Android APK's capabilities. The website **MUST** conform to these statuses.

## Three-Tier System
- **AVAILABLE**: Usable in the production APK today.
- **BETA / EXPERIMENTAL**: Implemented but still being validated or subject to limitations.
- **COMING SOON**: Not currently available to normal users.

---

### Local LLM Inference
- **Status:** AVAILABLE
- **UI Entry Point:** `ConversationScreen` -> `InputBar`
- **Implementation:** `LlamaCppBackend` via FFI
- **Evidence:** Code exists and is wired to the generation loop.
- **Website Wording:** "Run supported language models directly on your phone."

### Model Store (Downloading & Installation)
- **Status:** AVAILABLE
- **UI Entry Point:** `ModelStoreScreen`
- **Implementation:** `DownloadManager` (HTTP range requests, SHA-256 verify)
- **Evidence:** Code is wired and manages local `GGUF` files.
- **Website Wording:** "Download and manage supported models from one place."

### Local Conversations
- **Status:** AVAILABLE
- **UI Entry Point:** `ConversationScreen`
- **Implementation:** SQLite `app_database`, `ConversationProvider`
- **Evidence:** Wired to UI.
- **Website Wording:** "Local, private chat."

### Offline Inference
- **Status:** AVAILABLE (with qualification)
- **UI Entry Point:** N/A (System level)
- **Implementation:** Native execution requires no network post-download.
- **Evidence:** `LlamaCppBackend` relies purely on local file paths.
- **Website Wording:** "Use Moonlight offline after required resources are installed."

### Voice Input
- **Status:** AVAILABLE
- **UI Entry Point:** Microphone icon in `InputBar`
- **Implementation:** `VoiceEngine` (`speech_to_text` plugin)
- **Evidence:** Wired to text field in `ConversationScreen`.
- **Website Wording:** "Speak directly to your local models."

### Biometric App Lock
- **Status:** AVAILABLE
- **UI Entry Point:** App startup
- **Implementation:** `BiometricLockWrapper` using `local_auth`
- **Evidence:** Wraps `MaterialApp` in `app.dart`.
- **Website Wording:** "Secure your chats with device biometrics."

---

### Local Memory
- **Status:** COMING SOON
- **UI Entry Point:** NONE (Disconnected)
- **Implementation:** `MemoryEngine` exists in backend, but `StreamingEngine` does not use it.
- **Evidence:** Unused provider in `context_engine.dart`.
- **Website Wording:** "Coming Soon: Memory context."

### Semantic Search
- **Status:** COMING SOON
- **UI Entry Point:** NONE (Disconnected)
- **Implementation:** `SemanticSearchEngine` exists, unused by UI.
- **Evidence:** Unused provider.
- **Website Wording:** "Coming Soon: Semantic retrieval."

### OCR (Text Recognition)
- **Status:** COMING SOON
- **UI Entry Point:** NONE
- **Implementation:** `OCREngine` exists, unused by UI.
- **Evidence:** `cameraEngineProvider` is never injected into any widget.
- **Website Wording:** "Coming Soon: OCR support."

### Vision / Multimodal (LLaVA)
- **Status:** COMING SOON
- **UI Entry Point:** NONE
- **Implementation:** `VisionEngine` exists, unused by UI.
- **Evidence:** `visionEngineProvider` unused.
- **Website Wording:** "Coming Soon: Multimodal vision."

### Knowledge Graph & Document Import
- **Status:** COMING SOON
- **UI Entry Point:** NONE
- **Implementation:** `KnowledgeGraphEngine` exists, unused by UI.
- **Evidence:** Providers unused.
- **Website Wording:** "Coming Soon: Workspaces and Knowledge Graph."

### Agents & Workflows
- **Status:** COMING SOON
- **UI Entry Point:** NONE
- **Implementation:** Scaffold code with `Future.delayed` mocks.
- **Evidence:** Stub implementations.
- **Website Wording:** "Coming Soon: Agentic workflows."
