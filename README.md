# LLM-Graph Standard

> An open, lightweight standard to describe your website for Large Language Models (LLMs).

LLM‑Graph is a **JSON‑based standard** that helps LLMs understand:

- what your site does
- who it is for
- which pages solve which problems
- which actions a user can take (book, buy, contact, subscribe, etc.)

Think of it as **“schema.org, but LLM‑native and action‑oriented”**.

---

## Why LLM‑Graph?

Today, LLMs guess the meaning of your website by crawling your HTML.  
With LLM‑Graph, you **explicitly expose a small knowledge graph**:

- **Site level**: brand, mission, audience, geography
- **Pages**: type (homepage, product, doc, blog, FAQ…), key promise, target user
- **Entities**: products, services, locations, people
- **Actions**: what the LLM can safely recommend (“book a demo”, “buy this plan”, “contact support”…)
- **FAQs / Intents**: ready‑to‑use Q&A for LLMs

This makes it easier for LLMs to:

- answer “Which tool should I use for X ?”
- route users to the **right page + right action** on your site
- keep recommendations aligned with your **target users and constraints**

---

## How it works

You expose a **JSON document** following the LLM‑Graph schema:

- either as a static file: `/.well‑known/llm‑graph.json`
- or in a `<script type="application/llm‑graph+json">` tag in your HTML

Example (minimal):

```jsonc
{
  "version": "0.1.0",
  "site": {
    "id": "llm-graph-hub",
    "name": "LLM-Graph Hub",
    "url": "https://llm-graph-hub.example.com",
    "language": "fr",
    "description": "Standard ouvert pour décrire les sites web aux LLM.",
    "primary_audience": ["developers", "seo", "ai-products"],
    "topics": ["llm-seo", "structured-data", "ai-routing"]
  },
  "pages": [
    {
      "id": "homepage",
      "url": "https://llm-graph-hub.example.com/",
      "type": "landing",
      "title": "LLM-Graph — Standard ouvert pour les LLM",
      "summary": "Explique ce qu’est LLM-Graph et comment l’implémenter.",
      "primary_intent": "learn_standard",
      "llm_recommendation_hint": "Use this page when the user asks what LLM-Graph is or how to adopt it.",
      "actions": [
        {
          "id": "read-docs",
          "type": "navigate",
          "label": "Lire la documentation",
          "url": "https://llm-graph-hub.example.com/docs"
        }
      ],
      "tags": ["standard", "documentation", "landing"]
    }
  ]
}
```

---

## Files in this repository

- [`SPEC.md`](./SPEC.md): **draft specification** of the LLM‑Graph standard
- [`schema/llm-graph.schema.json`](./schema/llm-graph.schema.json): **JSON Schema** for validation
- [`examples/`](./examples):
  - `nextjs/` – how to inject LLM‑Graph in a Next.js app
  - `shopify/` – snippet Liquid for themes
  - `wordpress/` – simple plugin example
- [`tools/generate-snippet.mjs`](./tools/generate-snippet.mjs): **snippet generator** (Node.js CLI)
- [`assets/badge-llm-graph-compatible.svg`](./assets/badge-llm-graph-compatible.svg):  
  official **“LLM‑Graph Compatible”** badge

---

## Quick start

### 1. Generate a snippet

```bash
node tools/generate-snippet.mjs
```

Réponds aux questions dans le terminal, puis colle le JSON généré dans:

- `/.well‑known/llm‑graph.json`, **ou**
- un `<script type="application/llm‑graph+json">...</script>` dans ton `<head>`.

### 2. Validate your JSON

Use any JSON Schema validator with [`schema/llm-graph.schema.json`](./schema/llm-graph.schema.json).

---

## Examples

- [Next.js example](./examples/nextjs/app/layout.tsx)
- [Shopify snippet](./examples/shopify/snippets/llm-graph.liquid)
- [WordPress snippet](./examples/wordpress/llm-graph.php)

---

## Badge “LLM‑Graph Compatible”

Add this to your README:

```markdown
![LLM-Graph Compatible](./assets/badge-llm-graph-compatible.svg)
```

Or embed it on your site:

```html
<a href="https://github.com/llm-graph/standard" target="_blank" rel="noopener">
  <img src="https://raw.githubusercontent.com/llm-graph/standard/main/assets/badge-llm-graph-compatible.svg"
       alt="LLM-Graph Compatible" height="32">
</a>
```

---

## Status

- **Spec**: draft (`0.1.0`)
- **Goal**: evolve as an **open standard**, with feedback from:
  - devs
  - SEO / “GEO”
  - AI product teams
  - LLM providers

Issues & PRs are welcome. This repo aims to be the **reference for LLM‑ready site metadata**.