# Moggo.dev

Amogh Agarwal’s personal website, featuring professional experience, projects, skills, and contact information. Built with Astro, TypeScript, and CSS.

**Live site:** [moggocodes.github.io](https://moggocodes.github.io/)

## Local development

Requirements: Node.js 22.12 or newer and pnpm 10.11.1. The deployment workflow uses Node.js 24.

```sh
cd moggo-portfolio
pnpm install
pnpm dev
```

Open the local URL printed in the terminal, usually `http://localhost:4321`.

Run all commands below from `moggo-portfolio/`.

## Commands

| Command | Purpose |
| --- | --- |
| `pnpm dev` | Start the development server |
| `pnpm check` | Run Astro and TypeScript diagnostics |
| `pnpm build` | Run diagnostics and generate the static site in `dist/` |
| `pnpm preview` | Serve the production build locally |
| `pnpm test` | Run desktop and mobile browser tests |
| `pnpm format` | Format the project source |
| `pnpm format:check` | Check source formatting |

## Editing the site

Paths below are relative to the repository root.

| File or directory | Contents |
| --- | --- |
| `moggo-portfolio/src/data/portfolio.ts` | Profile, contact details, and experience entries |
| `moggo-portfolio/src/pages/index.astro` | Homepage layout, project listing, and skills cards |
| `moggo-portfolio/src/pages/work/moggo-dev.astro` | Portfolio project page |
| `moggo-portfolio/src/components/Contact.astro` | Contact section |
| `moggo-portfolio/src/layouts/Layout.astro` | Shared navigation, metadata, theme switch, and footer |
| `moggo-portfolio/src/styles/global.css` | Colors, typography, and responsive layout |
| `moggo-portfolio/public/` | Static assets, including the profile photo and favicon |
| `moggo-portfolio/src/lib/urls.ts` | Links and asset paths that account for the deployment base path |

Pages are generated as static HTML. Core content and navigation work without JavaScript; a small script controls the light/dark theme. Contact links open email and LinkedIn directly.

## Validation

Build the site before running browser tests. Install Chromium the first time you run them:

```sh
pnpm build
pnpm exec playwright install chromium
pnpm test
pnpm format:check
```

Playwright tests cover desktop and mobile layouts, navigation, contact links, keyboard access, missing pages, and browsing without JavaScript. Automated accessibility checks use axe. Screenshots and failure traces are saved in `moggo-portfolio/test-results/` relative to the repository root.

## Deployment

[The GitHub Pages workflow](.github/workflows/deploy.yml) builds and deploys the site when changes are pushed to `main`. It can also be started manually from GitHub Actions. Feature branch pushes do not deploy.

The workflow installs dependencies from the lockfile, runs the production build, and publishes `moggo-portfolio/dist/`. GitHub Pages provides `SITE_URL` and `BASE_PATH`, which determine navigation, asset paths, canonical URLs, and sitemap URLs.

To reproduce the live build locally:

```sh
SITE_URL=https://moggocodes.github.io BASE_PATH=/ pnpm build
pnpm preview
```

For another static host, use these settings:

| Setting | Value |
| --- | --- |
| Project directory | `moggo-portfolio` |
| Node.js version | `24` |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Output directory | `dist` |

To use a custom domain with GitHub Pages, configure its DNS, add it in the repository’s Pages settings, and rerun the deployment workflow.
