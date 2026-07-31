# Schema & Structured Data Findings

## Current Implementation

### Critical: No structured data of any kind
The site has zero structured data markup. Not a single page contains JSON-LD, Microdata, or RDFa. This is a significant missed opportunity for rich results in SERPs.

## Missing Opportunities

### Critical: Missing Organization schema
The homepage should have Organization schema declaring the site name, URL, logo, and description. This is the baseline for brand visibility in knowledge panels.

### Critical: Missing WebSite schema with Sitelinks Searchbox
The homepage should declare WebSite schema with SearchAction to enable the sitelinks searchbox in Google SERPs.

### High: Missing Article/BlogPosting schema
Blog post previews exist but no Article schema is present. When actual blog pages are created, each should include Article schema with author, datePublished, and headline.

### High: Missing BreadcrumbList schema
All detail pages (buildings, dynasties, elements) lack BreadcrumbList schema despite having functional breadcrumb-like navigation in the UI.

### Medium: Missing FAQPage schema
The /faq/ page uses semantic `<details>` elements but lacks FAQPage JSON-LD schema, which could earn FAQ rich results in SERPs.

### Medium: Missing ImageObject schema
The gallery page and building detail pages include image references but no ImageObject schema to help images appear in Google Images search.

### Medium: Missing TouristAttraction / Landmark schema
Building detail pages like Forbidden City, Great Wall, and Temple of Heaven represent physical landmarks. TouristAttraction or Landmark schema would enable rich results for travel-related queries.

## Validation

### Recommended schema priority
1. Organization + WebSite on homepage (one JSON-LD block)
2. BreadcrumbList on all detail pages
3. FAQPage on /faq/
4. Article on blog posts
5. TouristAttraction on building detail pages

## Implementation Path

Since the site uses Astro with a shared Layout component, Organization and WebSite schema can be added once in Layout.astro and propagated to all pages. BreadcrumbList can be added to individual page components.
