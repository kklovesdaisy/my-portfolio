# Htet Nandar Winn — Portfolio

A personal portfolio website for **Htet Nandar Winn**, an IT student and aspiring
web developer. Built as a single-page React app with Vite and Tailwind CSS v4.
**Frontend only** — no backend, database, or server code.

## Features

- Sticky, responsive navigation with scroll-spy and a keyboard-accessible mobile menu
- Hero, About, Technical Skills, Education, Featured Projects, Learning Journey, and Contact sections
- Contact via phone (`tel:`), email (`mailto:`) and GitHub links — **no contact form and no backend**
- LinkedIn and CV stay hidden until you provide them
- Subtle section entrance animations that respect `prefers-reduced-motion`
- Professional footer with a dynamic copyright year and a floating back-to-top button
- Accessible by design: skip link, visible focus states, semantic landmarks, ARIA where needed

## Tech stack

- React 19 + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`)
- oxlint

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # lint
```

## Customize

**All of your personal information lives in one file: `src/data/portfolio.js`.**
Edit any value there and the site updates — no component edits are needed.

| Section in `portfolio.js` | What it controls |
| --- | --- |
| `profile` | Full name, professional title, short intro, location, photo, CV path, email, phone, GitHub and LinkedIn URLs |
| `hero` | The greeting line and the headline at the top of the page |
| `about` | "About Me" text, quick facts and info cards |
| `skills` | Technical-skill categories and the technologies in each |
| `projects` | Project titles, descriptions, technologies, repository URLs, demo URLs and screenshots |
| `education` | Education timeline entries (degree, institution, dates, optional campus `image`, coursework, certifications) |
| `learning` | The "Learning Journey" section — groups of technologies and concepts you're learning |
| `contact` | Contact-section copy |
| `navItems` | The links in the top navigation bar |

Brand colours for technology chips live in `src/data/techColors.js`.

### Things that hide automatically

Leave these empty (`""`) in `profile` and the related UI disappears — nothing breaks:

- `linkedin` — every LinkedIn link is hidden while this is empty.
- `cv` — the "Download CV" button is hidden.
- `phone` — the phone row in the Contact section is hidden.
- `avatar` — if the image can't be loaded, the built-in initials placeholder is
  shown instead, so there is never a broken image.

To add them later:

- **Photo** — the current photo is `public/images/kk.jpg` (set via
  `profile.avatar`). Replace that file, or update `profile.avatar` to a new path.
- **Phone** — shown above the email in the Contact section; edit `profile.phone`.
- **CV** — drop the file in `public/` and set `profile.cv` (e.g. `"/cv.pdf"`).
- **LinkedIn** — set `profile.linkedin` to your full profile URL.

### Education campus image

The Education card starts with a wide banner. It uses
`education.entries[0].image` (currently `/images/university.jpg`).

- Add a real photo at `public/images/university.jpg` and it appears automatically.
- Until that file exists, a neutral banner is shown — **no unrelated image is
  used, and no university logo is invented**.
- Add an authentic logo only if you actually have one; otherwise it is omitted.

### Adding or editing a project

Edit the `projects` array in `src/data/portfolio.js`. Each object supports:

| Field | Meaning |
| --- | --- |
| `title` | Project name |
| `type` | Short label under the title (e.g. `"Web application"`); `""` hides it |
| `description` | One or two sentences about the project |
| `tech` | Array of technology names shown as coloured chips (`[]` = none) |
| `architecture` | Architecture label (e.g. `"Domain-Driven Design (DDD)"`); `""` hides it |
| `image` | Screenshot path in `/public` (e.g. `"/projects/foo.png"`); `""` shows a placeholder |
| `repo` | GitHub URL — the "Code" button only appears when this is a real `http(s)` URL |
| `demo` | Live demo URL — the "Live Demo" button only appears when this is a real `http(s)` URL |

`MediaLibrary` and `BloodConnect System` are shown with the confirmed details
(PHP + Laravel, Domain-Driven Design). Only details you provide are displayed —
nothing is invented, and the Code / Live Demo buttons stay hidden until you paste
real URLs into `repo` / `demo`.

## Notes

- There is **no contact form and no backend**. Visitors reach you through the
  phone, email and GitHub links in the Contact section and the footer.
- The site is fully responsive and has no horizontal overflow from 320px upward.
- Your profile photo lives at `public/images/kk.jpg`; if it is missing, the hero
  falls back to an initials placeholder automatically.

## Deploying

### 1. Push the code to GitHub

This folder is a plain project (it is not a Git repository yet). From the project
folder in PowerShell:

```powershell
git init
git add .
git commit -m "Personal portfolio"
git branch -M main
git remote add origin https://github.com/kklovesdaisy/<repo-name>.git
git push -u origin main
```

Create the empty repository on GitHub first (github.com/new), then replace
`<repo-name>` with the name you chose.

### 2. Deploy on Vercel

1. Sign in at <https://vercel.com> with your GitHub account.
2. Choose **Add New… → Project** and import the repository you just pushed.
3. Vercel detects Vite automatically. Confirm these settings:
   - **Framework preset:** Vite
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Your site goes live at `https://<repo-name>.vercel.app`,
   and every later `git push` to `main` redeploys it automatically.

Prefer the command line? Install the CLI (`npm i -g vercel`) and run `vercel`
inside this folder.

### Node version

Use **Node 20.19+** (or 22+) so Vite and Tailwind CSS v4 build correctly. On
Vercel you can pin it under **Settings → General → Node.js Version**.
