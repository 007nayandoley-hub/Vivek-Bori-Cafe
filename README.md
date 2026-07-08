# Vivek Bori Cafe — Website

Built by **N9ne** — Build. Automate. Scale.

Stack: Next.js 14 (App Router) · TypeScript · Tailwind CSS · React Hook Form · Zod

## Local Development

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## Deployment (Netlify)

This project includes `netlify.toml` pre-configured for the Next.js runtime.

1. Push this repo to GitHub
2. Connect the repo in Netlify
3. Netlify auto-detects the build command and publish directory
4. Deploy

## Replacing Placeholder Images

All photography is currently a placeholder (`components/PlaceholderImage.tsx`)
labeled with what should go there. Once real cafe photos are supplied:

1. Add images to `public/images/`
2. Replace `<PlaceholderImage label="..." />` with `<Image src="/images/your-photo.jpg" alt="..." fill />` (using `next/image`)

## Outstanding Items (flagged during build)

- [ ] Business email address
- [ ] Business address (needed for Footer, Contact page, Google Maps embed)
- [ ] Real cafe photography (hero, gallery, menu items)
- [ ] Logo file (currently text wordmark — "Vivek Bori" in Playfair Display)
- [ ] Confirm WhatsApp number for booking button (currently using contact phone: 6001887283)
- [ ] Menu items/prices are placeholder — confirm final menu with client
- [ ] Google Maps embed — needs confirmed business address
- [ ] Domain connection in Netlify once client provides domain

## Scope Notes

- Dual theme (light/dark toggle) is **not included** — flagged as a Phase 2
  upsell per the signed agreement. This build is dark-theme only.
- Table booking is a WhatsApp CTA button only — no real-time calendar system
  (that was descoped to stay within Starter tier).
