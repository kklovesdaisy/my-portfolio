# Deployment

This project can be published to GitHub Pages, Vercel, or Netlify.
All three build the same `dist/` folder — the only difference is the **base path**.

## The one thing that matters: the base path

Vite needs to know where the site lives so that CSS, JS, and images resolve:

| Where the site lives | Base path | Example URL |
| --- | --- | --- |
| GitHub Pages **project** site (subfolder) | `/my-portfolio/` | `https://kklovesdaisy.github.io/my-portfolio/` |
| Vercel / Netlify / any root domain | `/` | `https://my-portfolio.vercel.app/` |

- Default: `vite.config.js` is set to `base: "/my-portfolio/"` so GitHub Pages works out of the box.
- Vercel and Netlify override it to `/` automatically (see `vercel.json` and `netlify.toml`).
- Got a **blank/unstyled page**? The base path does not match the URL — fix the table above.

The profile photo follows the base path automatically, so it works on every host.

## GitHub Pages (currently live)

Live at: <https://kklovesdaisy.github.io/my-portfolio/>

It deploys through `.github/workflows/deploy.yml` on every push to `main`.

### Update the site

```powershell
git add -A
git commit -m "Describe what you changed"
git push
```

Then open <https://github.com/kklovesdaisy/my-portfolio/actions> — a green ✓ means it is live
(usually 1–2 minutes). Hard-refresh the live page with `Ctrl` + `F5`.

### First-time setup (already done)

1. Push the code to GitHub.
2. Repo **Settings → Pages → Build and deployment → Source = GitHub Actions**.
3. Wait for the workflow run under the **Actions** tab.

## Vercel

1. Go to <https://vercel.com/new> and import the `my-portfolio` GitHub repository.
2. Framework preset: **Vite** (detected automatically).
3. Click **Deploy** — `vercel.json` handles the build command and base path.

Every push to `main` then deploys automatically.

## Netlify

1. Go to <https://app.netlify.com/start> and pick the `my-portfolio` repository.
2. Build command, publish directory, and base path come from `netlify.toml`.
3. Click **Deploy**.

## Custom domain

You need a domain you own (for example from Namecheap, Cloudflare, or a free
provider). Without a domain, use the default `*.github.io` / `*.vercel.app` URL.

### On GitHub Pages

1. Add a file named `CNAME` in the **`public/`** folder containing only your domain,
   for example `htetnandarwinn.com`. Vite copies it into `dist/` on build.
2. Repo **Settings → Pages → Custom domain** → enter the same domain → **Save**.
3. At your DNS provider, add records for the domain:

   | Type | Name | Value |
   | --- | --- | --- |
   | CNAME | `www` | `kklovesdaisy.github.io` |
   | A | `@` | `185.199.108.153` |
   | A | `@` | `185.199.109.153` |
   | A | `@` | `185.199.110.153` |
   | A | `@` | `185.199.111.153` |

4. Back in **Settings → Pages**, tick **Enforce HTTPS** once the certificate is ready.

### On Vercel / Netlify

Add the domain in the project's **Domains** settings and follow the CNAME /
A-record instructions shown there. HTTPS is issued automatically.

> **Important:** after adding a custom domain, keep the base path as `/`. If you
> switch to a subfolder URL again, update `base` in `vite.config.js` accordingly.
