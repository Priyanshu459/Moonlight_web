// ============================================================
// MOONLIGHT AI — SITE CONFIGURATION
// Update these values before launch.
// ============================================================

export const siteConfig = {
  name: "Moonlight AI",
  tagline: "Your AI. Your device. Your choice.",
  description:
    "Moonlight AI is a private, local-first AI assistant for Android. Run compatible GGUF models on-device in Phone mode, connect your own LM Studio computer, or use your choice of cloud provider.",
  shortDescription: "Private AI for Android. Local-first, not local-only.",

  // --- URLs ---
  url: "https://moonlight-ai-app.pages.dev",
  
  // --- Google Play ---
  // TODO: Replace with actual Play Store URL when published
  playStoreUrl: null as string | null, // Set to actual URL after publishing
  playStoreComingSoon: true,

  // --- Contact ---
  supportEmail: "priyanshu09016@gmail.com",
  privacyEmail: "priyanshu09016@gmail.com",

  // --- Social ---
  // TODO: Add actual social links when available
  twitter: null as string | null,
  github: null as string | null,

  // --- Legal ---
  lastUpdated: "October 1, 2026",
  copyrightYear: "2026",
  companyName: "Moon Knight Studio",

  // --- App Details ---
  appVersion: "v1.7.2",
  versionCode: 21,
  releaseScope: "Applies to Moonlight AI 1.7.x",
  packageId: "com.moonknightstudio.moonlightai",
  previewPackageId: "com.moonknightstudio.moonlightai.preview",
  minAndroidVersion: "Android 7.0 (API 24)",
  
  // --- Meta ---
  ogImage: "/og-image.png",
  twitterHandle: null as string | null,
};

export type SiteConfig = typeof siteConfig;
