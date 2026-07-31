# Image SEO Findings

## Alt Text

### Good: Hero image has descriptive alt text
The homepage hero image includes `alt="Ancient Chinese architecture at dusk"` which is descriptive and relevant.

### Medium: Data model images lack alt text in build
Building and element data models define `images` arrays with Unsplash URLs but no `alt` text fields. This means dynamically rendered images in building/dynasty/element pages may lack alt text.

### Recommendation
Add an `alt` field to the Building, Dynasty, and Element TypeScript interfaces and populate it for all entries.

## Image Format & Optimization

### High: No local image optimization
All images are loaded from Unsplash CDN. The Astro Image component (built-in) could optimize these with automatic format conversion (WebP/AVIF), resizing, and lazy loading if images were stored locally.

### Medium: Unsplash CDN URLs could be optimized
Current Unsplash URLs include `w=800`, `w=1200`, and `w=1920` parameters with `q=80` and `auto=format`. While reasonable, these could add `fm=webp` for explicit WebP delivery.

### Good: Responsive image parameters
Unsplash URLs already include width (`w=`) and quality (`q=`) parameters, providing some level of responsive sizing.

### Medium: No srcset or sizes attributes
No images use `srcset` or `sizes` for responsive delivery. The hero image is always loaded at 1920px regardless of viewport.

## Image Quantity

### Good: Image-to-content ratio
The site uses images judiciously with substantial text content on each page. The gallery page, if well-implemented, provides a visual browsing experience.

## Lazy Loading

### High: No lazy loading on below-fold images
Only the hero image explicitly sets `loading="eager"`. No other images use `loading="lazy"`. The IntersectionObserver with `.reveal` class provides visual animation but does not defer image loading.

### Recommendation
Add `loading="lazy"` to all images below the fold and `decoding="async"` for non-critical images.

## Image Sitemap

### Medium: No image sitemap
For an architecture/visual site, an image sitemap would help Google discover and index the Unsplash-sourced images associated with each building and dynasty page.

## Social Image

### Critical: No Open Graph image
No `og:image` meta tag is set on any page. When shared on social media or messaging apps, the site will show no preview image.

### Recommendation
Create a default 1200x630 OG image for the site, and page-specific OG images for building and dynasty detail pages.
