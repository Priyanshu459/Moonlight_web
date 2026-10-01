# Deployment Architecture Audit

**Date:** August 2026
**Target Environment:** `https://moonlight-ai.pages.dev`

## 1. Codebase Analysis
- **Framework:** Next.js 16.3.1 (App Router)
- **Language:** TypeScript
- **Dependencies:** React, React DOM, Framer Motion, TailwindCSS
- **Server Side Features Used:** None.
- **API Routes:** None.
- **Server Actions:** None.
- **Middleware:** None.
- **Database:** None (App relies entirely on local device processing).
- **Environment Variables:** None required for the public static build.

## 2. Configuration Settings
The `next.config.ts` has been configured specifically for **Static Export**:
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
};
export default nextConfig;
```

## 3. Architecture Decision
**Decision:** Cloudflare Pages (Static Hosting)
**Alternative Rejected:** Oracle Cloud VPS

### Justification
Because the website produces a purely static build (`out/` directory with HTML/CSS/JS), a Node.js runtime is completely unnecessary. 

Using an Oracle Cloud VPS would:
- Introduce OS patch management and server maintenance.
- Require setting up Nginx as a reverse proxy.
- Break the simplicity of CDN-first global distribution.
- Introduce potential attack vectors through exposed ports and SSH keys.

Deploying statically to Cloudflare Pages provides a globally distributed CDN, automatic SSL (Full/Strict equivalent by default on Pages), and zero server-side attack surface. 

**Verdict: Proceed with Cloudflare Pages.**
