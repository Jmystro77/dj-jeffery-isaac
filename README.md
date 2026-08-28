# DJ Jeffery Isaac

Custom cinematic marketing site for [djjefferyisaac.com](https://www.djjefferyisaac.com/). Replaces the Kartra sales letter. Booking later becomes a GoHighLevel embed on this site — not a GHL page and not Kartra.

**Live site (GitHub Pages):** [https://jmystro77.github.io/dj-jeffery-isaac/](https://jmystro77.github.io/dj-jeffery-isaac/)

[djjefferyisaac.com](https://www.djjefferyisaac.com/) still points at the Kartra sales letter until DNS is changed later. This repo does not use Vercel.

**DJ Jeffery Isaac** (never Issac). Voice is first person. Weddings first. Warren, Youngstown, and Trumbull / Mahoning / Portage / Columbiana only.

## Local

The site is configured as a project Pages export (`basePath` and `assetPrefix` are `/dj-jeffery-isaac`).

```bash
npm install
npm run dev
```

Open [http://localhost:3000/dj-jeffery-isaac/](http://localhost:3000/dj-jeffery-isaac/).

```bash
npm run build
```

Writes a static export to `out/`. A GitHub Actions workflow deploys that folder to GitHub Pages on every push to `main`. Do not put the site on GHL pages or Kartra.

## Pages

| URL | Purpose |
| --- | --- |
| `/` | Cinematic home |
| `/weddings/` | Day-of flow, gear, portal, deposit |
| `/add-ons/` | Photo booth and videography |
| `/live-music/` | Piano / jazz (available, not a guarantee) |
| `/areas/` | Service map |
| `/stories/` | Named proof + film frames |
| `/faq/` | Questions |
| `/inquire/` | Check my date |

Primary CTA everywhere: **Check my date**. Secondary: **Call 330-240-0915**. Pricing is on the call — there is no Prices button.

## Swap in a GoHighLevel form

The inquire page already contains this HTML comment:

```html
<!-- GHL_FORM_EMBED -->
```

It lives at the top of the local form in `components/InquireForm.tsx`.

1. In GHL, create the form (first name, last name, email, phone, wedding date, venue, city, guest count, services).
2. Copy the embed snippet.
3. Replace the `<form>…</form>` in `InquireForm.tsx` (or the inquire page) with the embed. Keep the comment so the next person can find it.
4. Remove the mailto fallback once the embed is live.
5. Do not fake a success state. If GHL is not connected, the current form opens the couple’s email app to `djjefferyisaac@gmail.com` and says so in plain language.

## Wire real couple films

Four films exist. Frames on `/stories/` and the home page are placeholders — no video files are invented.

| Couple | Slug | Where to add the URL |
| --- | --- | --- |
| Rocky & Jess | `rocky-jess` | `lib/site.ts` → `films` |
| Craig & Chelsea | `craig-chelsea` | same |
| Marco & Charlotte | `marco-charlotte` | same |
| Byan & Rena | `byan-rena` | same |

Add an optional `src` (YouTube, Vimeo, or file URL) on each film object, then update `components/FilmCard.tsx` to render a muted, click-to-play or poster-and-link player. No autoplay sound.

## Brand

- Phone: 330-240-0915
- Email: djjefferyisaac@gmail.com only
- Offer: DJ + photo booth + videography
- Proof names only: Maria Panning, Deb Hall, Valarie Mountfort, Chelsea Heilman (names Kyaira on the booth), Tessa Parker (Champion Beach House)
- Do not publish Jeff Feuerwerker on the public site
- Do not claim Akron, Canton, or Cleveland
- Copyright year: 2026

## Photos

Hero and supporting stills are graded Pexels photographs (night tent reception, champagne toast, sheet music). They are placeholders until Jeff’s own frames replace them in `public/images/`.

## Stack

Next.js App Router, static export, no CMS. Shared copy lives in `lib/site.ts`. Hosted on GitHub Pages from `main`.
