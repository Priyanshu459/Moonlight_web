# Moonlight AI — Website Feature Status
Source of truth for what is shown on the website vs. what is in development.
Derived from: docs/WEBSITE_PRODUCT_AUDIT.md (source code inspection of C:\Dev\Moonlight_llm)
Last Updated: 2026-08-19

| Feature | Current Status | Website Treatment | Evidence |
|---------|----------------|-------------------|----------|
| Local LLM Inference | RELEASED | Main feature | llama_cpp_dart, LlamaCppBackend, RuntimeManager |
| Model Store | RELEASED | Main feature | DownloadManager, GGUF verify, SHA-256, resume |
| Model Catalog (10+ models) | RELEASED | Main feature | model_info.dart: Llama3, Mistral, Phi-3, Gemma2, DeepSeek R1, Qwen2, LLaVA, CodeLlama |
| Local Conversations | RELEASED | Main feature | ConversationScreen, ConversationProvider, streaming |
| Local Memory | RELEASED | Main feature | MemoryManager, MemoryExtractor, MemoryRanker, MemoryRetriever |
| Local Embeddings | RELEASED | Main feature | LocalEmbeddingEngine via llama_cpp_dart |
| Semantic Search | RELEASED | Main feature | LocalSemanticSearchEngine, cosine similarity, VectorMath |
| Voice Input (STT) | RELEASED | Main feature | VoiceEngine, speech_to_text, wired to chat InputBar |
| OCR (via ML Kit) | RELEASED | Main feature | OCREngine, google_mlkit_text_recognition |
| Vision / Multimodal | RELEASED (model-dependent) | Main feature (with note) | VisionEngine -> LLaVA via StreamingEngine |
| Biometric App Lock | RELEASED | Main feature | BiometricLockWrapper, local_auth |
| Knowledge Graph | RELEASED | Main feature | KnowledgeGraphEngine, LLM-extracted entity-relationships |
| Workspace + Import Pipeline | RELEASED | Main feature | ImportPipeline: PDF/image/text -> memories |
| Dark/Light Theme | RELEASED | Mentioned in UI | ThemeProvider, complete AppTheme |
| Universal Search | PARTIALLY IMPLEMENTED | Not prominently featured | Keyword only; semantic memory search is TODO in search_engine.dart |
| Performance Monitor | PARTIALLY IMPLEMENTED | Not featured on website | PerformanceScreen + PerformanceMonitor exist |
| Agents (AgentRuntime) | IN DEVELOPMENT | Listed in Coming Soon section | Code scaffold; execution loop uses mock Future.delayed stubs — NOT production ready |
| Workflows (WorkflowEngine) | IN DEVELOPMENT | Listed in Coming Soon section | DAG engine scaffold; _executeNode is a Future.delayed stub — NOT production ready |
| Plugins | IN DEVELOPMENT | Listed in Coming Soon section | Manager/Sandbox/Validator exist, no UI |

## Instructions for Updating

When a feature graduates to RELEASED:
1. Update this table.
2. Verify the feature is working in the actual app.
3. Move it from "Coming Soon" section in content/features.ts to the main features array.
4. Update website copy, FAQ if needed.
5. Review Privacy Policy implications (any new data collection or permissions?).
6. Run npm run build to verify no issues.

When a feature is removed or degraded:
1. Update this table immediately.
2. Remove or downgrade it in content/features.ts.
3. Rebuild the website.
