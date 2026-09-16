# Moonlight Glass website update

Updated: September 16, 2026
Target: C:/Dev/Website_for_Moon/moonlight-website
App baseline: 1.6.1-preview, separate Android preview package.

## Design and content

- New crescent-lit hero, floating Glass screens, scroll-linked depth, animation pause, and reduced-motion fallback.
- Interactive Phone / Computer / Cloud explorer with explicit request destinations.
- Six-screen app gallery and five-theme preview, using 11 optimized WebP assets (about 245 KB total).
- Updated feature catalog, setup, download information, FAQ, deletion guidance, metadata and crescent branding.
- Privacy policy rewritten around actual local, computer and provider data flows; dated September 16, 2026.
- Existing working-tree changes preserved. No app source or APK modified, no Play publication or deployment performed.

## Evidence reviewed

App root: C:/Dev/moonligth_ai_nexus/NEXUS_LOCAL_PHONE_AL

- CONTINUE_MOONLIGHT_1_6_1.md and docs/LM_STUDIO_AND_LFM.md: preview identity, implemented scope, model eligibility and unverified boundaries.
- src/screens/ChatScreen.tsx: remote send confirmation, latest 20-message context, attached text, personal instructions, saved-memory isolation.
- src/services/providers.ts: providers, native requests, hostedSearch eligibility, web tools enabled unless explicitly disabled, provider payloads and citations.
- src/services/lmStudio.ts and native ProviderClient / ProviderEndpointPolicy: saved connection handling, HTTP opt-in and remote HTTPS behavior.
- Native SearchCredentialStore.kt: AES-GCM and Android Keystore credential storage, reused by ProviderClient.
- src/services/storage.ts: MMKV persistence without a separate chat encryption key.
- src/services/appUpdates.ts: foreground Google Play checks, one-hour in-process limit.
- src/config/compliance.ts: current app website/privacy URLs and inactive AI report endpoint.
- AndroidManifest.xml and package.json: internet permission, disabled backup, declared dependencies.
- output/glass-preview/*.png: existing browser captures of implemented app screens. These are not physical Android captures or proofs of inference.

The 11 website WebP files correspond to the same-name PNGs in that app output folder. They were encoded at quality 86 without inventing or changing screen content. Original files are unchanged.

## Privacy disclosure boundaries

Phone mode processes locally after setup. Computer and Cloud modes send recent context, personal instructions and current attached text. Saved memories are not automatically included. Existing recent messages can still contain information originating from earlier local turns. Connected services control their own logging/retention. Provider web tools are not search-only requests. Private-network HTTP can expose prompts and tokens without a separate protection layer. Removing local data does not delete remote copies.

Removed obsolete claims about the SearXNG interface, mandatory query review, guaranteed zero logging, all-network HTTPS, entirely local attachments, and absence of external processing. Website hosting and support email are covered separately.

Google Play disclosure guidance consulted: https://support.google.com/googleplay/android-developer/answer/10144311
This update describes verified implementation behavior; it is not a legal-compliance certification or a completed Play Data Safety submission.

## Validation

- npm run build: production build, TypeScript and static export passed.
- npm run lint: passed, no warnings.
- git diff --check: passed (Git may print configured LF/CRLF normalization notices).
- Browser results: see ../moonlight-website/output/website-qa/results.json.
- Reproduce: node scripts/serve-preview.mjs, then node scripts/check-glass-site.mjs in another terminal. Browser script uses the installed Edge and bundled Playwright path on this workstation.

## Remaining external validation

Physical-phone LFM inference, live LM Studio inference, actual provider billing/retention settings, Google Play availability and deployed-host configuration are outside these website checks. Image/video generation and vision remain excluded from the advertised preview feature set. Public download links are not invented.

## Final browser result

All checks passed in installed Microsoft Edge: moving hero and pause, three inference modes, six gallery screens, five themes, mobile-menu navigation, reduced motion, all seven supporting routes, and widths 375 / 768 / 1024 / 1440 px. No JavaScript runtime errors or HTTP failures.

During QA, fixed a decorative layer intercepting the pause control, constrained the mobile hero grid, and added a postbuild compatibility step for Next 16.3 Windows static segment filenames. Eight byte-identical aliases make client navigation/prefetch resolve on a basic static server without custom rewrites. The compatibility step preserves the original export files and refuses conflicting aliases.

Preview: http://127.0.0.1:4182
Privacy: http://127.0.0.1:4182/privacy
Static deployment output: C:/Dev/Website_for_Moon/moonlight-website/out
Screenshots and machine-readable results: C:/Dev/Website_for_Moon/moonlight-website/output/website-qa
