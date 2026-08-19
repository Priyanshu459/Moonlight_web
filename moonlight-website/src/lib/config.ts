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
  // TODO: Replace with actual production domain before launch
  url: "https://moonlightai.app",
  
  // --- Google Play ---
  // TODO: Replace with actual Play Store URL when published
  playStoreUrl: null as string | null, // Set to actual URL after publishing
  playStoreComingSoon: true,

  // --- Contact ---
  // TODO: Set up actual support email
  supportEmail: "support@moonlightai.app",
  privacyEmail: "privacy@moonlightai.app",

  // --- Social ---
  // TODO: Add actual social links when available
  twitter: null as string | null,
  github: null as string | null,

  // --- Legal ---
  lastUpdated: "August 19, 2026",
  copyrightYear: "2026",
  companyName: "Moonlight AI",

  // --- App Details ---
  appVersion: "0.9.0",
  minAndroidVersion: "Android 8.0 (API 26)",
  
  // --- Meta ---
  ogImage: "/og-image.png",
  twitterHandle: null as string | null,
};

export type SiteConfig = typeof siteConfig;
