# Performance Findings

## Lab Estimates (build analysis, no live CWV data)

### High: Google Fonts external dependency
The site loads the Outfit font family from Google Fonts CDN. This creates:
- 2 DNS lookups (fonts.googleapis.com, fonts.gstatic.com)
- 1 render-blocking CSS request
- Dependency on third-party availability

Mitigation: Self-host the font files or use a subset. Already using `&display=swap` parameter which is correct.

### High: Unsplash external image dependency
All building and element images are loaded from `images.unsplash.com`. For a production site, this means:
- No control over image availability
- No image optimization pipeline
- Third-party performance dependency
- Unsplash rate limits may apply

Recommendation: Download optimized images and serve them locally through Astro's image optimization.

### Medium: No resource preloading
No `<link rel="preload">` directives for critical resources (hero image, font files). Preloading the LCP image could reduce Largest Contentful Paint.

### Medium: No Cache-Control headers
As a static site, cache headers must be configured at the web server/CDN level. Static assets like CSS and JS change on every build (hashed filenames) and should be cached aggressively.

### Good: Single minified CSS file
Astro builds to a single, hashed CSS file per page. The homepage ships one CSS file (Footer.3IdbhXC6.css), minimizing round trips.

### Good: HTML is reasonably compact
Built HTML is minified (no whitespace between tags). The homepage HTML is approximately 14KB gzipped.

### Good: SVG favicon
Using SVG favicon avoids additional image format downloads.

## Core Web Vitals Estimates

### LCP (Largest Contentful Paint) — Estimated: Good
The hero image uses `loading="eager"` with `fetchpriority` not set (defaults to high for viewport images). The image loads from Unsplash CDN. With a fast CDN and 1920px source, LCP should be under 2.5s on good connections.

### INP (Interaction to Next Paint) — Estimated: Good
The site is static with minimal JavaScript (only an IntersectionObserver for scroll animations). No heavy JS frameworks, no client-side routing. INP should be excellent.

### CLS (Cumulative Layout Shift) — Estimated: Good
Font is loaded with `&display=swap`, which may cause a brief flash of unstyled text but the site uses system font fallbacks. The fixed nav bar uses `position: fixed` correctly. Image dimensions are not explicitly set on all images (the hero image uses CSS `object-cover` inside an absolute container).

### Medium: Image dimensions not set on all images
The hero image lacks explicit `width` and `height` attributes. While the image container uses `absolute inset-0`, browsers cannot reserve space for images without dimensions, potentially causing layout shift before the image loads.
