# LLM-Graph — Open Standard for LLM‑Ready Websites, Documents & Apps

LLM‑Graph is an open, lightweight JSON-based standard enabling AI systems to understand websites, documents, product catalogs and applications.

## Why LLM‑Graph?
- **Simple** — one JSON snippet  
- **Universal** — Web, PDF/DOCX, Product, App  
- **LLM‑Native** — structured for AI agents  
- **CMS‑Friendly** — plugins for WordPress, Shopify, Webflow  

## Quick Start
```html
<script type="application/llm-graph+json">
{
  "version": "0.2.0",
  "site": {
    "id": "example-site",
    "name": "My Site",
    "url": "https://example.com",
    "description": "A simple demonstration site."
  }
}
</script>
```

## Repository Structure
```
standard/
├── SPEC.md
├── PROFILES.md
├── schema/
├── examples/
├── tools/
└── assets/
```

Validator: https://llm-graph-hub.lovable.app
