// ============================================================
// MOONLIGHT AI — SITE CONFIGURATION
// Update these values before launch.
// ============================================================

export const siteConfig = {
  name: "Moonlight AI",
  tagline: "AI that stays with you.",
  description:
    "Moonlight AI brings phone models, your LM Studio computer and your choice of cloud into one Android app. Explore the 1.6.1 Glass preview.",
  shortDescription: "Phone. Computer. Cloud. Your choice.",

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
  lastUpdated: "September 16, 2026",
  copyrightYear: "2026",
  companyName: "Moon Knight Studio",

  // --- App Details ---
  appVersion: "1.6.1 preview",
  latestPreviewVersion: "1.6.1",
  packageId: "com.moonknightstudio.moonlightai",
  previewPackageId: "com.moonknightstudio.moonlightai.preview",
  minAndroidVersion: "Android 7.0 (API 24)",
  
  // --- Meta ---
  ogImage: "/og-image.png",
  twitterHandle: null as string | null,
};

export type SiteConfig = typeof siteConfig;
