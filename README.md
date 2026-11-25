# getitdonetoday.in — marketing site

Static landing page for **GetItDoneToday**, the control plane for AI-powered engineering teams.
The product app lives in a separate repo at https://app.getitdonetoday.in.

Built with Next.js (App Router), TypeScript and Tailwind CSS v4. Every route is prerendered as static content. There is no backend, database or auth.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
npm run lint     # ESLint
```

## Project layout

```
app/
  layout.tsx            # Inter font, SEO metadata, skip link
  page.tsx              # composes the sections
  privacy/, terms/      # legal pages (plain-language, beta)
  opengraph-image.tsx   # 1200×630 share image (also twitter-image.tsx)
  globals.css           # design tokens (Tailwind @theme) + base styles
  icon.svg              # favicon (same "</>" mark as the header)
  robots.ts, sitemap.ts
components/
  sections/             # Navbar, Hero, ModelStrip, VideoTour, Problem, HowItWorks,
                        # Features, Audience, Testimonial (founder note), Pricing,
                        # FAQ, FinalCTA, Footer
  LegalPage.tsx         # shared layout for /privacy and /terms
  ui.tsx                # Container, ButtonLink, SmartLink, Logo, LogoMark, SectionHeading, Card
  icons.tsx             # inline stroke SVG icons
  ScrollReveal.tsx      # fade-in on scroll (respects prefers-reduced-motion)
lib/
  content.ts            # all copy, facts and data arrays: edit text here
  og-image.tsx          # drawing for the share image
design/
  Main.dc.html          # original visual reference
public/
  video/GetItDoneToday-Walkthrough-Voiced.mp4  # product tour (H.264/AAC, faststart)
  images/task-review-screenshot.jpg            # product screenshot in the Features section
```

Facts that appear in several places (key storage, GitHub behaviour, contact email, links) are constants at the top of `lib/content.ts`, so the page, FAQ and privacy policy can't drift apart.

### Replacing the product tour video

The page loads the video from jsDelivr, pinned to a commit (`VIDEO_CDN` in `lib/content.ts`), because the repo is public. To replace it, move the MP4 index to the front so playback starts quickly, commit it, then point `VIDEO_CDN` at the new commit (or at `/video/...` to serve it from this site):

```bash
ffmpeg -i input.mp4 -c copy -movflags +faststart public/video/GetItDoneToday-Walkthrough-Voiced.mp4
```

The poster before playback is drawn in HTML (`VideoTour.tsx`), so it needs no image.

### Replacing the product screenshot

Put the new image in `public/images/` and update `features.highlight.screenshot` (src, width, height, alt) in `lib/content.ts`. `next/image` serves it as WebP/AVIF automatically.

Colours, fonts and radii are defined as tokens in `app/globals.css` (for example `bg-card`, `text-muted`, `border-line` and `bg-brand`). Use those tokens instead of adding raw hex values.

## Deploy to Vercel

1. Push to `main` on GitHub.
2. In Vercel, click **Add New → Project** and import `HasanZaigam/getitdonetoday-website`. Vercel detects Next.js automatically, so no settings or environment variables are needed.
3. Under **Settings → Domains**, add `getitdonetoday.in` (and `www.getitdonetoday.in` redirecting to it), then set the DNS records Vercel shows at your registrar.

Every push to `main` deploys to production, and every other branch or PR gets a preview URL.

## TODO before launch

There are no placeholders left on the page. Still worth doing:

- [ ] **Founder note**: check the wording in `founderNote` (`lib/content.ts`) reads the way you'd say it.
- [ ] **Legal review**: `/privacy` and `/terms` are plain-language beta drafts, not legal advice. Have them reviewed, especially for your jurisdiction.
- [ ] **Customer quote**: when you have a real one, add it next to (or instead of) the founder note.
- [ ] **Inbox**: make sure `hello@getitdonetoday.in` receives mail. The footer, legal pages and the Team plan's "Notify me" button use it.
- [ ] **Share preview**: check `/opengraph-image` and test a link in LinkedIn/X/Slack after deploying.
- [ ] Optional: a fresh, higher-resolution product screenshot for the GitHub feature.
- [ ] Optional: a captions file (`.vtt`) for the product tour so the narration works without sound.
