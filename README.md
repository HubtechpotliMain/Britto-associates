## Britto Associates Web

Marketing site for Britto Associates covering education consultancy, IT job assistance, legal services, real estate, and social impact initiatives. Built with Next.js App Router and custom React components.

### Stack

- Next.js 14 (App Router, TypeScript, CSS Modules)
- React server/components mix with client-side interactivity
- Static assets served from `public/images`, `public/new-img`, and `public/video`

### Local Development

```bash
npm install
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) for the live preview. Key routes:

- `/` – hero, stats, services, media coverage, CTA
- `/about` – founder story & mission
- `/services` – detailed service cards
- `/gallery` – filterable gallery + embedded intro video
- `/contact` – WhatsApp-first contact form

### Project Structure

- `app/` – route segments (`about`, `gallery`, `services`, etc.)
- `components/` – shared UI (Hero, GalleryCard, Navbar, Footer…)
- `public/` – images, WhatsApp drop-in photos (`/new-img`), intro video (`/video/intro-video.mp4`)

### Content Management

- Gallery photos are configured in `app/gallery/galleryData.ts`
- Hero images and copy per page live in their respective `page.tsx`
- Styles rely on colocated `*.module.css` files

### Deployment

1. `npm run build` – ensure build passes
2. Deploy the `.next` output to any Node-compatible hosting (Vercel recommended)
3. Keep `public/new-img` and `public/video` in sync if new assets are added

### Contributing

1. Fork / branch
2. Run lint/tests (if configured)
3. Submit PR describing UX/content changes, assets touched, and screenshots when visuals change
