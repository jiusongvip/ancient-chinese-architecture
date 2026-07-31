# SEO Audit Report: ancient-chinese-architecture.com

**Date:** 2026-07-31
**Audit Scope:** Full website (~24 static pages)
**Platform:** Astro 5 static site, Tailwind CSS
**Business Type:** Educational / Informational — Digital museum for ancient Chinese architectural heritage

---

## Executive Summary

**Overall SEO Health Score: 38/100**

Ancient Chinese Architecture is a beautifully designed educational site with strong content depth and excellent topical authority on Chinese architectural history. However, it is missing almost all foundational SEO infrastructure. No sitemap, robots.txt, canonical tags, schema markup, or Open Graph tags exist. These are not complex issues — they are configuration gaps that can be resolved quickly.

Once the basics are fixed, the site's content quality and clean architecture position it well to rank for informational queries about Chinese architecture.

### Top 5 Critical Issues

1. **No sitemap.xml** — 24 pages are not being proactively submitted to search engines
2. **No robots.txt** — No crawl directives at all
3. **No canonical tags** — Missing on every page
4. **No structured data / schema** — Zero JSON-LD markup sitewide
5. **No Open Graph or Twitter Card tags** — No social sharing previews

### Top 5 Quick Wins

1. Generate sitemap.xml and robots.txt (Astro has a `@astrojs/sitemap` integration)
2. Add canonical tags to Layout.astro
3. Add Organization + WebSite JSON-LD schema to Layout.astro
4. Add Open Graph meta tags (title, description, image) to Layout.astro
5. Fix truncated meta descriptions by adding explicit 150-160 char meta description fields

---

## Scoring Breakdown

| Category | Score | Weight | Weighted |
|----------|-------|--------|----------|
| Technical SEO | 22/100 | 22% | 4.8 |
| Content Quality | 68/100 | 23% | 15.6 |
| On-Page SEO | 35/100 | 20% | 7.0 |
| Schema / Structured Data | 0/100 | 10% | 0.0 |
| Performance (CWV) | 62/100 | 10% | 6.2 |
| AI Search Readiness | 40/100 | 10% | 4.0 |
| Images | 20/100 | 5% | 1.0 |
| **Total** | | | **38.6** |

---

## 1. Technical SEO — Score: 22/100

**What works:**
- Clean, descriptive URL structure with consistent trailing slashes
- Proper UTF-8 charset and viewport declarations
- Rich internal linking between sections (dynasties to buildings, elements to related elements)
- Proper HTML lang attribute (`lang="en"`)
- Single minified CSS file per page from Astro build

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | No robots.txt — search engines have zero crawl guidance | Critical |
| 2 | No sitemap.xml — 24 pages not submitted for discovery | Critical |
| 3 | No canonical tags on any page | Critical |
| 4 | No hreflang annotations (English-only site) | High |
| 5 | href="#" dead links for non-existent notable building pages | Medium |
| 6 | No Content-Security-Policy header | Medium |

See [findings/technical.md](findings/technical.md) for full details.

---

## 2. Content Quality — Score: 68/100

**What works:**
- Strong subject-matter expertise with accurate technical terminology
- Long-form, substantive content on building and dynasty detail pages
- Clear heading hierarchy (H1 > H2 > sidebar cards)
- FAQ page uses semantic `<details>/<summary>` widgets
- Scannable feature lists with visual checkmarks

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | Truncated meta descriptions on 3 pages (Forbidden City, Dougong, Roofs) | High |
| 2 | No author attribution or credentials visible | Medium |
| 3 | No cited academic sources or references | Medium |
| 4 | Blog section has previews but no actual blog detail pages | Low |
| 5 | Gallery page may be thin if image-only (needs verification) | Medium |

See [findings/content.md](findings/content.md) for full details.

---

## 3. On-Page SEO — Score: 35/100

**What works:**
- Descriptive, keyword-rich title tags across all pages
- Meta descriptions present on all pages (though 3 are truncated)
- Proper single H1 per page with clear topic focus
- Internal linking uses descriptive anchor text

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | No Open Graph tags (og:title, og:description, og:image, og:url, og:type) | Critical |
| 2 | No Twitter Card tags | Critical |
| 3 | Title tag inconsistency — some use "| Ancient Chinese Architecture" suffix, homepage does not | Medium |
| 4 | No article-like semantic wrapper (no `<article>` tags on content pages) | Low |
| 5 | Homepage `<br>` tag in H1 may cause keyword fragmentation for crawlers | Low |

---

## 4. Schema & Structured Data — Score: 0/100

The site has zero structured data. This is the single biggest missed opportunity, as structured data directly enables rich results in SERPs.

**Missing schema types:**

| Schema Type | Priority | Pages |
|-------------|----------|-------|
| Organization | Critical | Homepage |
| WebSite (with SearchAction) | Critical | Homepage |
| BreadcrumbList | High | All detail pages |
| FAQPage | Medium | /faq/ |
| Article | Medium | /blog/ posts |
| TouristAttraction / Landmark | Medium | Building detail pages |
| ImageObject | Low | Gallery, all pages with images |

See [findings/schema.md](findings/schema.md) for implementation guidance.

---

## 5. Performance (Core Web Vitals) — Score: 62/100

**What works:**
- Static HTML with minimal JavaScript (only IntersectionObserver for scroll animations)
- Single minified CSS file per page
- SVG favicon eliminates extra image request
- Font loaded with `font-display: swap` for fast text rendering

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | Google Fonts loads from external CDN (2 DNS lookups + render-blocking CSS) | High |
| 2 | All images loaded from Unsplash CDN (no local optimization, third-party dependency) | High |
| 3 | No `<link rel="preload">` for critical hero image or fonts | Medium |
| 4 | Image dimensions not set on hero image — potential CLS | Medium |
| 5 | No Cache-Control strategy (must be configured at CDN/server level) | Medium |
| 6 | No lazy loading on below-fold images | High |

**CWV Estimates (lab):**
- LCP: ~2.0-2.5s (Good, assuming fast Unsplash CDN)
- INP: <50ms (Excellent, minimal JS)
- CLS: ~0.05 (Good, but image dimension gaps could cause shift)

See [findings/performance.md](findings/performance.md) for full details.

---

## 6. Images — Score: 20/100

**What works:**
- Hero image has descriptive alt text
- Unsplash URLs include width and quality parameters for some responsive sizing

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | No `og:image` — zero social sharing previews | Critical |
| 2 | No local image optimization pipeline — all images from Unsplash CDN | High |
| 3 | No `loading="lazy"` or `decoding="async"` on below-fold images | High |
| 4 | Data model images have no alt text field — dynamically rendered images may lack alt text | Medium |
| 5 | No `srcset` or `sizes` for responsive image delivery | Medium |
| 6 | No image sitemap | Medium |

See [findings/images.md](findings/images.md) for full details.

---

## 7. AI Search Readiness — Score: 40/100

**What works:**
- Highly citable, factual content (specific dates, dimensions, names)
- Semantic HTML structure with proper heading hierarchy
- FAQ content in semantic `<details>/<summary>` widgets
- Strong, consistent brand identity

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | No llms.txt or llms-full.txt for LLM crawler guidance | Medium |
| 2 | No author metadata for citation credit | Medium |
| 3 | No paragraph-level anchors for fragment URL citations | Medium |
| 4 | No social media presence or sharing signals | Low |

See [findings/geo.md](findings/geo.md) for full details.

---

## 8. Visual & Mobile — Score: N/A (qualitative)

**What works:**
- Professional, restrained design palette inspired by traditional Chinese architecture
- Fully responsive layout with Tailwind CSS breakpoints
- Touch-friendly navigation with adequate tap targets
- Clear above-fold value proposition

**What needs fixing:**

| # | Finding | Severity |
|---|---------|----------|
| 1 | Building/dynasty cards use gradient placeholders instead of real images | Medium |
| 2 | Brand name hidden on mobile nav (`hidden sm:block`) | Low |
| 3 | Hero CTA cards stack vertically on mobile, pushing content down | Low |

See [findings/visual.md](findings/visual.md) for full details.

---

## Page-by-Page Audit Summary

| Page | Title OK | Meta Desc | Canonical | Schema | OG Tags | Issues |
|------|----------|-----------|-----------|--------|---------|--------|
| Homepage | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /dynasties/ | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /dynasties/[id]/ | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /buildings/ | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /buildings/[id]/ | Good | Truncated | Missing | Missing | Missing | Truncated desc, no schema |
| /elements/ | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /elements/[id]/ | Good | Truncated (2/4) | Missing | Missing | Missing | Truncated desc, no schema |
| /compare/ | Good | Good | Missing | Missing | Missing | No schema, no OG |
| /gallery/ | Good | Good | Missing | Missing | Missing | Missing image schema |
| /blog/ | Good | Good | Missing | Missing | Missing | No blog detail pages |
| /faq/ | Good | Good | Missing | Missing | Missing | Missing FAQPage schema |
| /about/ | Good | Good | Missing | Missing | Missing | No schema |

---

## Implementation Effort Estimate

| Phase | Tasks | Effort |
|-------|-------|--------|
| Phase 1: Critical Fixes | Sitemap, robots.txt, canonicals, OG tags, fix truncated descriptions | 2-4 hours |
| Phase 2: Structured Data | Organization, WebSite, BreadcrumbList, FAQPage schema | 3-5 hours |
| Phase 3: Content & Authority | Author pages, citations, blog content, compare expansion | 8-16 hours |
| Phase 4: Performance & Images | Local images, lazy loading, font self-hosting, preloading | 4-8 hours |
| **Total** | | **17-33 hours** |