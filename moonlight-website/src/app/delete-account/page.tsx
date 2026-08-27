import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";
import { Trash2, HardDrive, Smartphone, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Data Deletion",
  description: `How to delete your data from ${siteConfig.name}. Since Moonlight AI stores all data locally on your device, you have full control.`,
  alternates: { canonical: `${siteConfig.url}/delete-account` },
};

export default function DeleteAccountPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container-page max-w-3xl">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--accent)] bg-[var(--accent-muted)] rounded-full border border-[var(--accent)]/20 mb-4">
            Your Data
          </div>
          <h1 className="text-display-md text-[var(--text-primary)] mb-3">
            Data Deletion
          </h1>
          <p className="text-[var(--text-secondary)] leading-relaxed max-w-2xl">
            Moonlight AI does not require accounts and does not store your data on any server. 
            All your data lives on your device, which means you have full control over deleting it.
          </p>
        </div>

        {/* No accounts notice */}
        <div className="card-glow p-6 mb-10 border-green-500/20 bg-green-500/5">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-green-500/15 border border-green-500/25 flex items-center justify-center shrink-0">
              <HardDrive size={18} className="text-green-400" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-1">
                No Server-Side Data
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Moonlight AI does not have user accounts, and does not store your conversations, 
                memories, or personal data on any server operated by Moonlight AI. 
                There is no account to &quot;delete&quot; — your data exists only on your device.
              </p>
            </div>
          </div>
        </div>

        {/* Deletion methods */}
        <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">
          How to Delete Your Data
        </h2>

        <div className="space-y-5 mb-12">
          {/* Method 1 */}
          <div className="card-glow p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Trash2 size={18} className="text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Method 1 — Delete Within the App
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  You can delete specific data within the app without removing everything:
                </p>
                <ul className="text-sm text-[var(--text-secondary)] space-y-1.5 list-disc list-inside">
                  <li>Delete individual memories or clear all memories from Settings</li>
                  <li>Delete downloaded AI models from the Models screen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Method 2 */}
          <div className="card-glow p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Smartphone size={18} className="text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Method 2 — Clear All App Data (Android Settings)
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-3">
                  To delete all data stored by the app at once:
                </p>
                <ol className="text-sm text-[var(--text-secondary)] space-y-1.5 list-decimal list-inside">
                  <li>Open your device&apos;s <strong className="text-[var(--text-primary)]">Settings</strong></li>
                  <li>Go to <strong className="text-[var(--text-primary)]">Apps</strong> (or Application Manager)</li>
                  <li>Find and tap <strong className="text-[var(--text-primary)]">Moonlight AI</strong></li>
                  <li>Tap <strong className="text-[var(--text-primary)]">Storage</strong></li>
                  <li>Tap <strong className="text-[var(--text-primary)]">Clear Storage</strong></li>
                </ol>
                <p className="text-xs text-[var(--text-tertiary)] mt-3">
                  This permanently deletes conversations, memories, workspaces, preferences, and models stored in the app&apos;s private directory.
                </p>
              </div>
            </div>
          </div>

          {/* Method 3 */}
          <div className="card-glow p-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
                <Trash2 size={18} className="text-[var(--accent)]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                  Method 3 — Uninstall the App
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  Uninstalling Moonlight AI from your Android device will remove all app data, 
                  including conversations, memories, workspaces, and model files stored within 
                  the app&apos;s private storage. Long-press the app icon and select Uninstall, 
                  or go to Settings &rarr; Apps &rarr; Moonlight AI &rarr; Uninstall.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* What data exists */}
        <div className="card-glow p-6 mb-10">
          <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
            What Data Exists and Where
          </h2>
          <div className="space-y-3">
            {[
              {
                item: "Conversations, memories & workspaces",
                location: "Local MMKV storage",
                notes: "Deleted when you clear app data or uninstall",
              },
              {
                item: "Downloaded AI models",
                location: "App documents directory on device",
                notes: "Removed in Models, by clearing app data, or on uninstall",
              },
              {
                item: "App preferences & settings",
                location: "Local MMKV storage",
                notes: "Deleted when you clear app data or uninstall",
              },
              {
                item: "Server-side data",
                location: "None",
                notes: "Moonlight AI does not store user data on servers",
              },
            ].map((row) => (
              <div key={row.item} className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm py-3 border-b border-white/5 last:border-0">
                <span className="font-medium text-[var(--text-primary)] sm:w-48 shrink-0">{row.item}</span>
                <span className="text-[var(--text-secondary)] sm:w-48 shrink-0">{row.location}</span>
                <span className="text-[var(--text-tertiary)] text-xs">{row.notes}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="card-glow p-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[var(--accent-muted)] border border-[var(--accent)]/20 flex items-center justify-center shrink-0">
              <Mail size={18} className="text-[var(--accent)]" />
            </div>
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)] mb-2">
                Need Further Assistance?
              </h2>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                If you have questions about your data or need additional assistance, 
                please contact us at{" "}
                <a
                  href={`mailto:${siteConfig.privacyEmail}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {siteConfig.privacyEmail}
                </a>
                {" "}or visit our <a href="/support" className="text-[var(--accent)] hover:underline">Support page</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
