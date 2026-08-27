// ============================================================
// MOONLIGHT AI — SITE CONFIGURATION
// Update these values before launch.
// ============================================================

export const siteConfig = {
  name: "Moonlight AI",
  tagline: "AI that stays with you.",
  description:
    "Moonlight AI is a local-first AI assistant that runs compatible AI models directly on your Android device — designed around on-device inference, privacy, and offline-capable intelligence.",
  shortDescription: "Private. Local. On-device AI.",

  // --- URLs ---
  url: "https://moonlight-ai.pages.dev",
  
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
  lastUpdated: "August 27, 2026",
  copyrightYear: "2026",
  companyName: "Moon Knight Studio",

  // --- App Details ---
  appVersion: "1.0",
  packageId: "com.moonknightstudio.moonlightai",
  minAndroidVersion: "Android 8.0 (API 26)",
  
  // --- Meta ---
  ogImage: "/og-image.png",
  twitterHandle: null as string | null,
};

export type SiteConfig = typeof siteConfig;
