# Final Privacy & Data Safety Audit

**Project**: Moonlight AI
**Date**: August 19, 2026

This document presents the definitive Privacy & Data Safety Audit for Moonlight AI, cross-referencing website claims against the actual Android application source code (`C:\Dev\Moonlight_llm`).

## 1. Network Activity vs Local Processing
**Claim**: "Moonlight AI runs models locally on your device."
**Verdict: PASS**
- **Evidence**: The core inference loop via `llama_cpp_backend.dart` relies purely on local compute (CPU/GPU) with no external network calls during generation.

**Claim**: "Internet is only required to download models."
**Verdict: PASS**
- **Evidence**: `download_manager.dart` makes outgoing HTTP range requests to Hugging Face (`huggingface.co`) to download GGUF files. Once downloaded, inference is isolated from the network.

## 2. Telemetry and Analytics
**Claim**: "No data harvesting. Zero analytics tracking, telemetry, or remote crash reporting SDKs."
**Verdict: PASS**
- **Evidence**: The codebase contains no imports for Firebase Analytics, Crashlytics, Sentry, Mixpanel, Amplitude, or any other telemetry SDKs. The app is completely silent in the background.

## 3. Storage and Persistence
**Claim**: "Chats stay on your device."
**Verdict: PASS**
- **Evidence**: Conversations are stored using the Drift package in a local SQLite database on the device's internal storage (`app_database.sqlite`). 
- There are no cloud sync mechanisms or backup APIs present in the codebase.

## 4. Device Permissions
**Verdict: PASS WITH NOTES**
- **Microphone**: Used by `speech_to_text.dart` for Voice Input. The permission is requested honestly (`Permission.microphone`). Audio processing happens via Android's native SpeechRecognizer.
- **Camera**: Used by `security_center_screen.dart` and `vision_engine.dart` for the Multimodal Vision feature (In Development). 
- **Storage**: Standard Android storage access for model files.

## 5. External Services
**Verdict: PASS**
- Model downloading connects to Hugging Face.
- No other third-party API keys or remote service connections (e.g., OpenAI, Anthropic, Google Cloud) exist in the source code.

## 6. Absolute Claim Correction
- Previous claims such as "100% private", "Completely anonymous", or "Data never leaves your device" have been removed from the website and replaced with accurate architectural descriptions (e.g., "Privacy by Architecture: Chats stay on your device"). This prevents regulatory friction with Google Play policies that frown upon unprovable absolute claims.

## 7. Legal Documentation Readiness
**Verdict: PASS**
- **Privacy Policy**: Accurately describes the local inference architecture and permissions.
- **Terms of Service**: Available and linked in the footer.
- **Data Deletion Policy**: The dedicated `/delete-account` page exists, explaining that deleting the app or clearing its data completely wipes all local conversations, satisfying Google Play's Data Safety requirements.

---
## Conclusion
The Moonlight AI application strictly adheres to its privacy-first, local-first claims. The website's privacy documentation is now fully aligned with the technical reality of the Android application.
