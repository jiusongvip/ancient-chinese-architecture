# SEO Action Plan: ancient-chinese-architecture.com

**Generated:** 2026-07-31
**Health Score:** 38/100 → Target: 85+

---

## Phase 1: Critical Fixes (Week 1 — 2-4 hours)

These issues directly prevent search engines from properly crawling, indexing, and displaying the site in results.

### 1.1 Generate sitemap.xml and robots.txt

**Effort:** 30 minutes
**Files to change:** astro.config.mjs, new files

Install Astro's official sitemap integration:
```
npm install @astrojs/sitemap
```

Add to `astro.config.mjs`:
```js
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: 'https://ancient-chinese-architecture.com',
  integrations: [sitemap()],
  // ...
});
```

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://ancient-chinese-architecture.com/sitemap-index.xml
```

### 1.2 Add canonical tags to every page

**Effort:** 15 minutes
**File:** src/layouts/Layout.astro

Add canonical link to `<head>` using Astro's `Astro.url`:
```astro
<link rel="canonical" href={new URL(Astro.url.pathname, Astro.site).href} />
```

### 1.3 Add Open Graph and Twitter Card meta tags

**Effort:** 30 minutes
**File:** src/layouts/Layout.astro

Add to Layout.astro `<head>`:
```html
<meta property="og:title" content={title} />
<meta property="og:description" content={description} />
<meta property="og:url" content={new URL(Astro.url.pathname, Astro.site).href} />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Ancient Chinese Architecture" />
<meta property="og:image" content="https://ancient-chinese-architecture.com/og-default.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content={title} />
<meta name="twitter:description" content={description} />
<meta name="twitter:image" content="https://ancient-chinese-architecture.com/og-default.jpg" />
```

Also set `og:type` to `"article"` on blog and detail pages.

### 1.4 Fix truncated meta descriptions

**Effort:** 1 hour
**Files:** src/data/buildings.ts, src/data/elements.ts

The issue is that the `description` field from Building and Element data models is used directly as the meta description. Add a dedicated `metaDescription` field (150-160 characters) to each data entry, or add a utility function that truncates with ellipsis at word boundaries.

Example fix for building data interface:
```ts
export interface Building {
  // ... existing fields
  metaDescription: string; // 150-160 chars for SEO
}
```

### 1.5 Create a default OG image

**Effort:** 1 hour

Create a 1200x630px image featuring the site logo/name on a branded background. Save as `public/og-default.jpg`.

---

## Phase 2: Structured Data Implementation (Weeks 1-2 — 3-5 hours)

### 2.1 Add Organization + WebSite JSON-LD to Layout.astro

**Effort:** 30 minutes
**File:** src/layouts/Layout.astro

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ancient Chinese Architecture",
  "url": "https://ancient-chinese-architecture.com",
  "description": "A digital museum exploring 3,000 years of Chinese architectural heritage.",
  "logo": "https://ancient-chinese-architecture.com/og-default.jpg"
}
</script>
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Ancient Chinese Architecture",
  "url": "https://ancient-chinese-architecture.com",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://ancient-chinese-architecture.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
</script>
```

### 2.2 Add BreadcrumbList schema to detail pages

**Effort:** 1.5 hours
**Files:** src/pages/buildings/[building].astro, src/pages/dynasties/[dynasty].astro, src/pages/elements/[element].astro

Add BreadcrumbList JSON-LD using Astro.props or frontmatter data.

### 2.3 Add FAQPage schema to /faq/

**Effort:** 1 hour
**File:** src/pages/faq/index.astro

### 2.4 Add TouristAttraction schema to building pages

**Effort:** 1 hour
**Files:** src/pages/buildings/[building].astro

Add for buildings marked as visitable in the data model.

---

## Phase 3: Content & Authority (Month 1 — 8-16 hours)

### 3.1 Add author attribution

**Effort:** 2 hours

Add an author name and bio to the About page. Add author meta tags:
```html
<meta name="author" content="Author Name" />
```

### 3.2 Add source citations to content

**Effort:** 3 hours

Add a references section to building and dynasty pages citing key sources (Liang Sicheng's works, UNESCO documentation, academic papers).

### 3.3 Create actual blog posts

**Effort:** 4-8 hours

Create content for the 3 blog posts previewed:
- The Mathematics of Dougong
- Lost and Found: Tang Dynasty Temple Ruins
- Feng Shui and Architecture

Each post should be a proper page with Article schema, author attribution, and citations.

### 3.4 Fix "#" placeholder links

**Effort:** 1 hour

Replace `href="#"` in data files with either:
- The URL of a page to create later
- A removal of the link until pages exist
- External links to Wikipedia or other authoritative sources

### 3.5 Create llms.txt

**Effort:** 30 minutes

Create `public/llms.txt` listing all sections with descriptions.

---

## Phase 4: Performance & Images (Month 2 — 4-8 hours)

### 4.1 Migrate images from Unsplash to local

**Effort:** 2-3 hours

Download optimized versions of Unsplash images. Use Astro's Image component:
```astro
import { Image } from 'astro:assets';
<Image src={localImage} alt={building.name} width={800} loading="lazy" />
```

### 4.2 Add lazy loading to below-fold images

**Effort:** 1 hour

Add `loading="lazy"` and `decoding="async"` to all images below the hero section.

### 4.3 Add resource preloading

**Effort:** 30 minutes

```html
<link rel="preload" as="image" href={heroImage} fetchpriority="high" />
<link rel="preload" as="font" href="/fonts/outfit-regular.woff2" crossorigin />
```

### 4.4 Self-host Google Fonts

**Effort:** 1 hour

Download Outfit font files, convert to woff2, and serve from the public directory instead of Google CDN.

### 4.5 Add image dimensions and srcset

**Effort:** 1-2 hours

Use Astro Image with explicit width/height and responsive srcset generation.

---

## Progress Tracker

- [ ] Phase 1.1: Sitemap + robots.txt
- [ ] Phase 1.2: Canonical tags
- [ ] Phase 1.3: OG + Twitter tags
- [ ] Phase 1.4: Fix truncated meta descriptions
- [ ] Phase 1.5: Create OG image
- [ ] Phase 2.1: Organization + WebSite schema
- [ ] Phase 2.2: BreadcrumbList schema
- [ ] Phase 2.3: FAQPage schema
- [ ] Phase 2.4: TouristAttraction schema
- [ ] Phase 3.1: Author attribution
- [ ] Phase 3.2: Source citations
- [ ] Phase 3.3: Blog content
- [ ] Phase 3.4: Fix placeholder links
- [ ] Phase 3.5: llms.txt
- [ ] Phase 4.1: Local images
- [ ] Phase 4.2: Lazy loading
- [ ] Phase 4.3: Resource preloading
- [ ] Phase 4.4: Self-host fonts
- [ ] Phase 4.5: Image dimensions + srcset