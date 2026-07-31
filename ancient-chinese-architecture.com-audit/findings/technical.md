# Technical SEO Findings

## Crawlability

### Critical: No robots.txt
No `robots.txt` file exists at the site root. Search engines have no crawl directives, which means they may waste crawl budget on irrelevant paths (e.g., asset directories, script files). A robots.txt should at minimum reference the sitemap location and block unnecessary paths.

### Critical: No sitemap.xml
No XML sitemap exists. With ~24 pages across 8 sections, a sitemap is essential for discovery of deep pages like dynasty detail pages (`/dynasties/tang/`, `/dynasties/song/`, etc.) and building detail pages (`/buildings/forbidden-city/`, `/buildings/foguang-temple/`, etc.).

### High: Image-based navigation cards
Building listing cards use gradient backgrounds with large single letters as placeholders instead of actual images. While functional, these provide no semantic value to crawlers.

## Indexability

### Critical: No canonical tags
Every page is missing `<link rel="canonical">`. While the site structure is clean with no duplicate paths, canonicals are a best practice that protects against parameter-based duplicates and ensures the correct URL is indexed.

### High: No hreflang annotations
The site is English-only but does not declare this with `<link rel="alternate" hreflang="en">`. For a globally relevant topic like Chinese architecture, this is a missed opportunity to signal language targeting.

## URL Structure

### Good: Clean, descriptive URLs
All URLs are clean and descriptive: `/dynasties/tang/`, `/buildings/forbidden-city/`, `/elements/dougong/`. No query parameters or file extensions. Trailing slashes are consistent.

### Medium: Non-existent pages linked via href="#"
Multiple "notable buildings" links in dynasty data use `href="#"` for pages that don't exist yet (e.g., Nanchan Temple, Yinxu Palace Complex, Chengde Mountain Resort). These create dead-end links and missed content opportunities.

## Security

### Good: UTF-8 charset declared
All pages declare `<meta charset="UTF-8">`.

### Good: Viewport configured
All pages include `<meta name="viewport" content="width=device-width, initial-scale=1.0">`.

### Medium: No Content-Security-Policy
Static sites benefit from a CSP header. Since the site loads fonts from Google Fonts and images from Unsplash, a CSP would add a layer of protection.

### Info: No HTTPS enforcement visible in code
The astro.config.mjs declares `site: 'https://ancient-chinese-architecture.com'`, but there is no built-in HTTP-to-HTTPS redirect logic visible. This would need to be configured at the hosting/CDN level.

## Core Web Vitals Estimates (Lab)

### High: Google Fonts from external CDN
The site loads Outfit font from `fonts.googleapis.com` and `fonts.gstatic.com`. This adds 2-3 external DNS lookups and render-blocking CSS requests. Self-hosting the font or using `font-display: swap` (which is already set via `&display=swap`) mitigates but does not eliminate the performance cost.

### Medium: No resource preloading
No `<link rel="preload">` for critical hero image or font files. The hero image is loaded as `loading="eager"` which is correct, but preloading could reduce LCP further.

### Good: Hero image uses loading="eager"
The homepage hero image correctly uses `loading="eager"` since it's the LCP element.

### Medium: No lazy loading on below-fold images
No images below the fold use `loading="lazy"`. The IntersectionObserver with `.reveal` class provides a visual reveal animation but does not lazy-load image resources.

### Info: Single CSS file
The entire site ships a single CSS file (`/dist/_astro/Footer.3IdbhXC6.css`). While minified by Astro's build, an analysis of the CSS bundle size would be useful.

## Internal Linking

### Good: Rich internal link structure
The site has a well-developed internal linking structure across sections. Buildings link to their dynasty pages, elements link to related elements, and the footer provides global navigation.

### Medium: Blog posts have no actual content pages
The blog section shows 3 article previews on the homepage but checking the blog listing suggests these are external or generate-only links. No `/dist/blog/` detail subdirectories exist beyond the listing page.

### Good: Breadcrumb navigation on detail pages
The building detail pages include a "Back to All Buildings" link serving as a breadcrumb. Dynasty detail pages should have similar navigation.
