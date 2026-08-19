import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with ${siteConfig.name}. Find answers to common questions about on-device AI, model downloads, voice input, and privacy.`,
  alternates: { canonical: `${siteConfig.url}/support` },
};

// Re-export the client component as the page metadata wrapper
export { default } from "./page";
