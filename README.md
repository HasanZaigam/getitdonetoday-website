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
  layout.tsx        # Inter font, SEO metadata, Open Graph
  page.tsx          # composes the sections
  globals.css       # design tokens (Tailwind @theme) + base styles
  icon.svg          # favicon (blue "</>" mark)
  robots.ts, sitemap.ts
components/
  sections/         # Navbar, Hero, ModelStrip, Problem, HowItWorks, Features,
                    # Audience, Testimonial, Pricing, FAQ, FinalCTA, Footer
  ui.tsx            # Container, ButtonLink, Logo, SectionHeading, Card
  icons.tsx         # inline stroke SVG icons
  ScrollReveal.tsx  # fade-in on scroll (respects prefers-reduced-motion)
lib/
  content.ts        # all copy and data arrays, edit text here
design/
  Main.dc.html      # original visual reference
```

Colours, fonts and radii are defined as tokens in `app/globals.css` (for example `bg-card`, `text-muted`, `border-line` and `bg-brand`). Use those tokens instead of adding raw hex values.

## Deploy to Vercel

1. Push to `main` on GitHub.
2. In Vercel, click **Add New → Project** and import `HasanZaigam/getitdonetoday-website`. Vercel detects Next.js automatically, so no settings or environment variables are needed.
3. Under **Settings → Domains**, add `getitdonetoday.in` (and `www.getitdonetoday.in` redirecting to it), then set the DNS records Vercel shows at your registrar.

Every push to `main` deploys to production, and every other branch or PR gets a preview URL.

## TODO before launch

These placeholders are intentionally left in `lib/content.ts`:

- [ ] **Customer quote**: replace `[ADD A CUSTOMER QUOTE …]` and `[NAME], [ROLE, COMPANY]` in `testimonial`.
- [ ] **Team price**: replace `[YOUR PRICE]` in `pricing.plans`.
- [ ] **API-key storage answer**: replace `[YOUR ANSWER — explain how keys are stored and encrypted.]` in `faq.items`.
- [ ] **Confirm the model list**: check that OpenAI, Anthropic, Google Gemini, Mistral and DeepSeek (`modelStrip.providers`) and the board mock's model chips match what the app supports.
- [ ] **Confirm the features**: check that every item in `features.items` (Google sign-in, instant notifications, and so on) is live in the app.
- [ ] Optional: add an Open Graph image (`app/opengraph-image.png`, 1200×630) for nicer link previews.
