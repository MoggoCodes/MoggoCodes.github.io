# Moggo.dev

A personal portfolio for Amogh Agarwal, built with Astro, TypeScript, and CSS. The design follows the original Next.js site: blue accents, a round portrait, experience timeline, project and skill cards, and light/dark themes.

## Develop

Use Node.js 22.12 or newer (Node 24 is used in CI) and pnpm 10.11.1.

```sh
pnpm install
pnpm dev
```

Visit http://localhost:4321.

## Validate

```sh
pnpm build
pnpm exec playwright install chromium
pnpm test
pnpm format:check
```

The build includes Astro and TypeScript diagnostics. Browser tests run against the production preview on desktop and mobile and cover overflow, automated accessibility checks, project navigation, contact links, keyboard navigation, missing pages, and browsing without JavaScript. Screenshots and failure traces are written to `test-results/`.

```sh
pnpm preview
```

## Edit content

- `src/data/portfolio.ts`: public identity, email, LinkedIn, experience, and tools.
- `src/pages/index.astro`: homepage copy and section structure.
- `src/pages/work/moggo-dev.astro`: the featured project page.
- `src/styles/global.css`: palette, typography, layout, and responsive styles.
- `public/headshot.jpg`: the original portrait displayed in the hero.

Experience and role dates were carried forward from the previous site. Update the current role and dates here as needed. The only featured project is the portfolio; no placeholder projects or social profiles are published.

The email link opens the visitor’s email app. LinkedIn is a normal link. There is no contact form or backend.

## Deploy

`pnpm build` produces `dist/`, which can be hosted by any static host. Configure the host with:

- Project directory: `moggo-portfolio`
- Install command: `pnpm install --frozen-lockfile`
- Build command: `pnpm build`
- Output directory: `dist`
- Node.js: 24

The repository-root `.github/workflows/deploy.yml` builds this subdirectory and deploys to GitHub Pages on pushes to `main` or manual runs. GitHub Pages supplies the deployment origin and base path to the build, so assets, navigation, canonical URLs, robots, and the sitemap work at https://moggocodes.github.io/.

For a custom domain, configure its DNS and add the domain in the repository’s Pages settings, then rerun the deployment workflow. The workflow automatically uses the new origin and base path. Local development still serves at `/`.

To reproduce the GitHub Pages build locally:

```sh
SITE_URL=https://moggocodes.github.io BASE_PATH=/ pnpm build
```

## Design

The original Next.js portfolio layout recreated with native Astro components. Core content and navigation work without JavaScript; a small script handles the theme switch. Email and LinkedIn links use the real contact details. The previous simulated contact form has not been restored.
