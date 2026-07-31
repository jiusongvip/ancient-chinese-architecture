# AI Search Readiness Findings

## AI Crawler Access

### Medium: No llms.txt or llms-full.txt
The site does not have an `llms.txt` file at the root. For an educational site with rich, structured content about ancient Chinese architecture, an llms.txt file would help LLM crawlers (ChatGPT, Claude, Perplexity) understand the site structure and access content for training and citation.

### Medium: No structured content markers
While content is well-organized with semantic HTML, there are no explicit markers optimized for LLM extraction (e.g., `data-llm-section`, `data-citation` attributes).

## Citability

### Good: Factual, citable content
Building profiles contain specific, verifiable facts (dates, dimensions, materials, UNESCO status) that are highly citable. Example: "980 buildings across 72 hectares" (Forbidden City), "67 meters tall" (Yingxian Pagoda), "857 CE" (Foguang Temple).

### Medium: No citation anchors
Content lacks paragraph-level anchors or IDs that would make specific facts easy to cite with fragment URLs.

### Medium: No author bylines for citation credit
LLMs that cite content by referencing author names have no author to attribute to.

## Brand Mention Signals

### Good: Strong brand identity in content
The site name "Ancient Chinese Architecture" is used consistently in titles, footer, and body content. The domain is descriptive and memorable.

### Medium: No social media presence
No social media links or sharing buttons. While this is a content site rather than a business, social signals help with brand recognition.

## Structural Improvements for AI

### Recommendation 1: Create llms.txt
An llms.txt file should list all major sections with their URLs and brief descriptions, helping LLM crawlers navigate the site.

### Recommendation 2: Add data-citable attributes
Key factual claims could use `data-citable` attributes to make them machine-extractable.

### Recommendation 3: Add author metadata
Adding author information via meta tags and schema would improve attribution in LLM citations.

### Good: Semantic HTML structure
The use of `<details>/<summary>`, proper heading hierarchy, and `<article>`-like content sections (though not using actual `<article>` tags) provides good structure for AI extraction.
