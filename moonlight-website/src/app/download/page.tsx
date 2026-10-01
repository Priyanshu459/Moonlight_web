import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Download Moonlight AI",
  description: "Moonlight AI v1.7.2 for Android. Hardware requirements, compatibility checks, and execution options.",
};

export default function DownloadPage() {
  return (
    <div className="pt-32 pb-24 container-page">
      <div className="lunar-theme-layout">
        <div>
          <p className="lunar-eyebrow">MOONLIGHT AI / v1.7.2</p>
          <h1 className="text-display-lg mt-6 mb-6">
            Take Moonlight<br />with you.
          </h1>
          <p className="text-slate-300 leading-8">
            Run compatible GGUF models on-device in Phone mode, connect your LM Studio computer, or use your choice of cloud provider. Built for Android.
          </p>
          <div className="mt-8 mb-6">
            {siteConfig.playStoreUrl ? (
              <a className="lunar-primary" href={siteConfig.playStoreUrl}>
                Get it on Google Play
              </a>
            ) : (
              <div className="rounded-xl border border-white/15 p-5 text-sm text-slate-300 bg-white/[0.02]">
                <p className="font-semibold text-white mb-1">Coming to Google Play</p>
                <p className="text-slate-400">
                  Moonlight AI v1.7.2 is prepared for release on Android. The public store link will be updated here upon store publication.
                </p>
              </div>
            )}
          </div>
          <Link className="lunar-secondary" href="/support">
            Contact Moonlight support ↗
          </Link>
          <p className="text-sm text-slate-400 mt-5">
            No Moonlight account required. Third-party cloud providers may require an account, API credits, and separate fees.
          </p>
        </div>
        <figure className="lunar-theme-phone">
          <Image
            src="/app-screens/glass/lfm-models-new.webp"
            alt="Moonlight AI model catalog UI"
            width={390}
            height={844}
            sizes="280px"
          />
          <figcaption>Actual app UI · Model catalog</figcaption>
        </figure>
      </div>

      <section className="mt-24 max-w-3xl">
        <h2 className="text-3xl mb-8">Before you begin</h2>
        <dl className="grid gap-6 sm:grid-cols-2">
          {[
            [
              "Android platform",
              "Requires Android 7.0 (API 24) or newer on an ARM64 processor. Performance depends on device hardware.",
            ],
            [
              "Phone mode inference",
              "At least 4 GiB total RAM, plus available RAM exceeding the model file size by 1.5 GiB for local processing.",
            ],
            [
              "Model downloads",
              "Compatible GGUF models are downloaded from Hugging Face over an internet connection. Once downloaded, Phone mode can operate offline.",
            ],
            [
              "Computer & Cloud modes",
              "Requires a reachable LM Studio server or supported provider API keys. Remote LM Studio requires an authenticated HTTPS address and private network.",
            ],
          ].map(([title, copy]) => (
            <div key={title} className="border-t border-white/15 pt-5">
              <dt className="text-lg mb-3 text-white">{title}</dt>
              <dd className="text-sm leading-7 text-slate-400">{copy}</dd>
            </div>
          ))}
        </dl>
        <p className="text-sm text-slate-400 mt-8">
          In Phone mode, model files are limited to 1.3 GiB to help manage device memory. Compatibility checks reduce memory pressure but cannot guarantee compatibility on every phone. Computer and Cloud modes send prompts and context to the configured endpoint or provider under their respective policies.
        </p>
      </section>
    </div>
  );
}
