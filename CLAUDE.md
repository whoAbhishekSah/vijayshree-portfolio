# CLAUDE.md

Guidance for working in this repository.

## Project

Personal portfolio site for **Vijayshree Pukale** — a Next.js (App Router) app
styled with Tailwind CSS, written in TypeScript. Deployed on **Vercel**, which
builds and deploys automatically from the `main` branch.

## Running locally

Install dependencies once, then start the dev server:

```bash
npm install
npm run dev
```

The site runs at **http://localhost:3000**. The dev server hot-reloads on save.

Notes when previewing:
- The home page is `/`, plus separate routes at `/now` and `/blog`. If a change
  doesn't appear, confirm you're viewing the right URL (e.g. `/now` edits won't
  show on the home tab).
- If the browser shows stale content, do a hard refresh (`Cmd+Shift+R`).

Type-check before committing:

```bash
npx tsc --noEmit
```

## Git workflow (important — avoid conflicts)

`main` is the live branch and is sometimes edited **directly on GitHub**, so the
local copy can fall behind without any local changes. Always assume `main` may
have moved.

**Always follow this flow:**

1. Sync `main` first — never start from a stale base:
   ```bash
   git checkout main
   git pull --rebase origin main
   ```
2. Create a **new branch** for the change:
   ```bash
   git checkout -b <short-descriptive-name>
   ```
3. Make changes, type-check, then commit.
4. Push the branch and open a **pull request** — `main` is protected and changes
   should go through a PR:
   ```bash
   git push -u origin <branch-name>
   gh pr create --base main
   ```

**Do not** push or force-push directly to `main`. Merging the PR is what
triggers the Vercel deploy.

## Content structure

- `app/page.tsx` — home page: intro, "What I Work With", Experience, contact.
- `app/now/page.tsx` — `/now` page: what Vijayshree is focused on right now.
- `app/blog/page.tsx` — blog index (lists posts from frontmatter).
- `app/blog/posts/*.mdx` — blog posts. Each needs frontmatter:
  ```
  ---
  title: '...'
  publishedAt: 'YYYY-MM-DD'
  summary: '...'
  ---
  ```
- `app/components/` — shared components (nav, footer, posts list, MDX renderer).

## Conventions

- In JSX text, write a literal ampersand as `&amp;` and apostrophes as `&apos;`.
- Match the existing Tailwind class patterns already used on each page rather
  than introducing new styling conventions.
