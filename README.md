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

## Deploy on GitHub Pages

The `main` branch is deployed to GitHub Pages by [`.github/workflows/deploy-pages.yml`](./.github/workflows/deploy-pages.yml). The workflow installs dependencies, builds the static export, and publishes `out/`.

The first time, open the repository's **Settings → Pages** and ensure **Build and deployment → Source** is set to **GitHub Actions**. Each push to `main` then publishes the site at:

<https://jeet1922.github.io/Surajit-Portfolio-Dummy/>

The single public URL is in [`content/site-config.mjs`](./content/site-config.mjs). The GitHub Pages base path, resume URL, canonical URL, share-image URL, sitemap, and robots sitemap reference derive from it.
