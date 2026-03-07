# Portfolio — Weerapat Buachuen

A modern, minimal personal portfolio website built with **Next.js 16** (App Router), **TypeScript**, and **Tailwind CSS 4**.

## Tech Stack

- **Framework:** Next.js 16 (App Router, Server Components)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 4
- **Font:** Inter (via `next/font/google`)
- **Deployment:** Vercel-ready

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint
npm run lint
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles & Tailwind config
│   ├── layout.tsx           # Root layout with metadata & SEO
│   └── page.tsx             # Home page assembling all sections
├── components/
│   ├── navigation.tsx       # Sticky nav with mobile menu (client)
│   ├── footer.tsx           # Site footer
│   ├── sections/
│   │   ├── hero.tsx         # Hero / landing section
│   │   ├── about.tsx        # About & engineering philosophy
│   │   ├── experience.tsx   # Work experience timeline
│   │   ├── skills.tsx       # Technical competencies grid
│   │   ├── education.tsx    # Education history
│   │   ├── awards.tsx       # Honors & awards
│   │   └── contact.tsx      # Contact cards
│   └── ui/
│       ├── badge.tsx        # Skill badge component
│       ├── section.tsx      # Reusable section wrapper
│       └── section-heading.tsx  # Section heading with underline
├── data/
│   ├── types.ts             # TypeScript interfaces for all content
│   └── site-content.ts      # All portfolio content in one place
└── lib/
    └── utils.ts             # Utility functions
```

## Customization

All portfolio content is centralized in **`src/data/site-content.ts`**. Update the typed objects to personalize:

- Personal info (name, title, location, email, LinkedIn)
- Professional summary & philosophy
- Work experience entries
- Technical skills by category
- Education records
- Honors & awards

The TypeScript interfaces in `src/data/types.ts` enforce the content structure.

### Resume PDF

Place your resume file at `public/resume.pdf` for the download button to work.

### Metadata & SEO

Update `metadata.url` in `site-content.ts` to your actual domain. Open Graph and Twitter Card meta tags are generated automatically from the content data.

## Design Principles

- White-based, minimal theme
- Server components by default; client components only for interactivity
- Semantic HTML with good accessibility defaults
- Responsive across mobile, tablet, and desktop
- Smooth scroll navigation with subtle hover transitions
- No heavy animations or unnecessary client-side JavaScript

## Deploy on Vercel

Push to GitHub and import in [Vercel](https://vercel.com/new). No additional configuration needed — it works out of the box.

```bash
npm run build  # Verify production build locally first
```

## License

MIT
