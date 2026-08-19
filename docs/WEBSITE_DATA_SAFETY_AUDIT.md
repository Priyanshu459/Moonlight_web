# Moonlight AI — Data Safety Audit

**Date:** 2026-08-19

This document cross-references the actual Android permissions and app behavior against the website's Privacy Policy claims to ensure Data Safety compliance for Google Play.

## 1. Android Manifest Permissions
| Permission | Why Used | Data Processed | Local / Server | Privacy Policy Alignment |
|---|---|---|---|---|
| `android.permission.INTERNET` | Model downloads from Hugging Face | IP address exposed to Hugging Face during download | Server (3rd Party) | **Aligned:** Privacy policy explicitly states models are downloaded from third-party hubs. |
| `android.permission.USE_BIOMETRIC` | App lock screen | Biometric verification (handled by Android Keystore) | Local | **Aligned:** Privacy policy states biometric data never leaves the device's secure enclave. |
| `android.permission.RECORD_AUDIO` | Voice input transcription | Voice audio | Local (`speech_to_text`) | **Aligned:** Privacy policy claims voice processing happens locally on device. |

## 2. Analytics & Crash Reporting
- **Implementation Status:** No SDKs found (No Firebase, No Crashlytics, No Sentry).
- **Privacy Policy Alignment:** **Aligned.** The privacy policy correctly states "We do not track your usage... We do not use analytics or crash reporting SDKs."

## 3. Remote Storage & Accounts
- **Implementation Status:** No backend database connection found. SQLite database (`app_database`) is entirely local.
- **Privacy Policy Alignment:** **Aligned.** The privacy policy correctly states "Your conversations remain strictly on your device."

## 4. Google Play Data Safety Implications
When filling out the Google Play Data Safety form, the developer can truthfully state:
1. **Data Collection:** NO.
2. **Data Sharing:** NO. (Downloading models is a user-initiated network request to a 3rd party URL, not "data sharing" of user personal data).
3. **Security Practices:** Data is encrypted in transit (HTTPS for downloads) and at rest (OS-level sandboxing, Biometric lock).

## Conclusion
The claims "Privacy-first", "Local inference", and "Zero data collection" are **valid and technically defensible** based on the current APK. The website can safely make these claims.
