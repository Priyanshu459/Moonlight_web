import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/lib/config";

export function CtaSection() {
  return (
    <section className="orbit-closing container-page" aria-labelledby="cta-section-heading">
      <p className="orbit-label">YOUR AI. YOUR DEVICE. YOUR CHOICE.</p>
      <h2 id="cta-section-heading">Private AI for Android.<br /><span>A space of your own.</span></h2>
      <div className="orbit-actions">
        <Link href={siteConfig.playStoreUrl || "/download"} className="orbit-button">
          {siteConfig.playStoreUrl ? "Get Moonlight on Google Play" : "Google Play launch details"}
          <ArrowUpRight size={18} />
        </Link>
        <Link href="/support" className="orbit-text-link">
          Have a question? <ArrowUpRight size={16} />
        </Link>
      </div>
      <p className="orbit-footnote">
        {siteConfig.playStoreUrl ? "Available for Android." : "Coming to Google Play."} No Moonlight account required.
      </p>
    </section>
  );
}
