# SprintStudy

SvelteKit marketing site and blog automation for the SprintStudy digital template bundle.

## Routes

- `/` Landing page
- `/templates/sprintstudy` Product page
- `/blog` Blog index
- `/blog/[slug]` Blog post page
- `/sitemap.xml` Dynamic sitemap

## Scripts

- `npm run dev` Start local dev server
- `npm run check` Type + Svelte checks
- `npm run build` Production build
- `npm run content:dry-run` Preview next generated post
- `npm run content:generate` Generate next blog draft and advance topic cursor
- `npm run indexnow:ping` Ping IndexNow with changed URLs

## Required setup

1. Replace the Etsy URL in `src/routes/templates/sprintstudy/+page.svelte`.
2. Set your production domain (currently `https://sprintstudy.co`) where needed.
3. In GitHub repo secrets, add:
   - `INDEXNOW_KEY`
   - `INDEXNOW_HOST`
4. Host `<INDEXNOW_KEY>.txt` at your site root.