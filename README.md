# Surajit Maji — portfolio

A statically exported Next.js portfolio with a time-travel career view and a plain, no-animation alternative. It uses TypeScript and Tailwind CSS and has no backend, database, CMS, analytics, or third-party embeds.

## Update the content

Edit [`content/profile.ts`](./content/profile.ts) to update the typed profile, experience, projects, skills, education, certifications, contact details, and public site URL. Both views read from this file.

Replace [`public/resume.pdf`](./public/resume.pdf) with the final resume PDF before publishing.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local address printed by Next.js. To create and check the production export:

```bash
pnpm build
```

The static site is written to `out/`.

## Deploy on Vercel

1. Push this repository to your GitHub account.
2. Sign in to Vercel with GitHub and choose **Add New → Project**.
3. Import `Jeet1922/Surajit-Portfolio-Dummy`.
4. Set the project name to `surajit-maji` if Vercel offers it.
5. Choose **Deploy**. Vercel detects Next.js and the static export; no environment variables or custom build settings are needed.

If the `surajit-maji` project name is unavailable, stop before deployment and choose another project name. If the chosen Vercel address differs, update the single `siteUrl` value in `content/profile.ts` before deploying.
