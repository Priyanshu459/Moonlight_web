# Moonlight AI Production Deployment Guide

**Target Domain:** `https://moonlight-ai.pages.dev`
**Architecture:** Static Export via Cloudflare Pages

This document outlines the exact steps to deploy the Moonlight AI website to production. Since the application is statically exported (SSG), we do not need an Oracle VPS or a running Node.js server. Cloudflare Pages will serve the static files from its global CDN for free.

## Prerequisites
1. A free Cloudflare account.
2. The GitHub repository `Priyanshu459/Moonlight_web` must be pushed with the latest code.

## Step 1: Deploy to Cloudflare Pages
1. Log in to your Cloudflare dashboard and go to **Workers & Pages**.
2. Click **Create application** -> **Pages** -> **Connect to Git**.
3. Select your GitHub repository: `Priyanshu459/Moonlight_web`.
4. Set up the build configuration:
   - **Project name:** `moonlight-ai` (This gives you the `moonlight-ai.pages.dev` URL)
   - **Framework preset:** Next.js (Static HTML Export)
   - **Build command:** `npm run build`
   - **Build output directory:** `out`
   - **Root directory:** `moonlight-website`
5. Click **Save and Deploy**. Cloudflare will clone the repo, run the build, and deploy the `out` folder to their CDN.

## Step 2: Access Your Free Domain
1. Once the deployment finishes, Cloudflare will automatically generate the URL.
2. Your live website will be available at **`https://moonlight-ai.pages.dev`**.
3. SSL is automatically provisioned and managed by Cloudflare.

## Step 3: Environment Configuration (If needed)
The current configuration does not require any secret environment variables for the build. The `Play Store URL` and contact emails are managed in `src/lib/config.ts`. If you need to update them, simply edit the file and push to `main` — Cloudflare Pages will automatically trigger a new deployment.

## Rollback Procedure
Because Cloudflare Pages creates an immutable build for every Git commit, rolling back is instant.
1. Go to the **Deployments** tab in your Cloudflare Pages project.
2. Find the previous successful deployment.
3. Click the three dots (...) and select **Rollback to this deployment**.
