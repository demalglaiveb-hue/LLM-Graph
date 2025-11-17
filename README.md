# LLM-Graph — Open Standard for LLM-Ready Websites, Documents, Products & Apps

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Spec Version](https://img.shields.io/badge/spec-0.2.0--draft-orange)
![Status](https://img.shields.io/badge/status-experimental-purple)

**LLM-Graph** is an open, lightweight, LLM-native metadata standard that allows:

- Websites (Web Profile)
- Documents such as PDF / DOCX / PPT / MD / EPUB (Document Profile)
- Product catalogs & marketplaces (Product Profile)
- Applications & features (App Profile)

to be interpreted reliably by AI systems and LLM-based agents.

It complements existing standards (OpenGraph, schema.org, sitemaps)
by focusing on **LLM reasoning, intents and safe actions**.

---

## 🔍 Why LLM-Graph?

LLM-Graph gives AI systems explicit information about:

- What this resource is (site, document, product, app)
- Who it is for (audience)
- What main sections/pages/features exist
- Which user intents can be served
- Which actions an AI agent may safely take or suggest

This improves:

- Answer quality
- Routing (which page/doc/feature matches the request)
- Safety (no hidden or dangerous actions)
- Interoperability between tools and agents

---

## 🧩 Profiles

LLM-Graph v0.2.0 defines four profiles:

- **Web Profile** — websites, blogs, SaaS, marketing pages
- **Document Profile** — reports, manuals, contracts, slide decks
- **Product Profile** — product catalogs, plans, SKUs
- **App Profile** — apps, modules, features, in-app actions

👉 See **[PROFILES.md](PROFILES.md)** for profile-specific details.

---

## ⚡ Quick Start (Web Profile)

Add this snippet to your HTML `<head>`:

```html
<script type="application/llm-graph+json">
{
  "version": "0.2.0",
  "profile": "web",
  "site": {
    "id": "my-site",
    "name": "My Site",
    "url": "https://example.com",
    "description": "Example website using LLM-Graph.",
    "primary_audience": ["developers", "customers"],
    "topics": ["ai", "metadata", "standard"]
  },
  "pages": [
    {
      "id": "home",
      "url": "/",
      "title": "Home",
      "purpose": "Welcome and explain what the site does",
      "primary_intents": ["discover", "learn"],
      "keywords": ["llm-graph", "standard"],
      "actions": ["contact", "signup"]
    }
  ],
  "actions": [
    {
      "id": "contact",
      "label": "Contact us",
      "description": "Open the contact form.",
      "url": "/contact",
      "agent_behavior": "safe"
    }
  ]
}
</script>
```

Validate using the online validator:  
👉 https://llm-graph-hub.lovable.app

---

## 📚 Repository Structure

```text
/
├── README.md
├── SPEC_v0.2.0.md
├── PROFILES.md
├── ROADMAP.md
├── GOVERNANCE.md
├── LICENSE
├── CONTRIBUTING.md
├── CHANGELOG.md
├── VERSION
├── schema/
│   ├── llm-graph.schema.json
│   ├── web.schema.json
│   ├── document.schema.json
│   ├── product.schema.json
│   └── app.schema.json
├── examples/
│   ├── web/
│   │   ├── nextjs/app/layout.tsx
│   │   ├── shopify/snippets/llm-graph.liquid
│   │   └── wordpress/llm-graph.php
│   ├── document/report.llm-graph.json
│   ├── product/catalog.llm-graph.json
│   └── app/app-profile.llm-graph.json
├── tools/
│   └── generate-snippet.mjs
├── assets/
│   ├── badge-llm-graph-compatible.svg
│   └── logo-llm-graph.svg
└── .github/
    └── ISSUE_TEMPLATE/
        ├── bug_report.md
        ├── feature_request.md
        └── rfc.md
```

---

## 🛠 Tools

- `tools/generate-snippet.mjs` — interactive CLI generator for LLM-Graph JSON.

Planned:

- CLI validator
- conversion tools (OpenGraph/schema.org → LLM-Graph)
- document extractors (PDF/DOCX → LLM-Graph)

---

## 🗺 Roadmap

See **[ROADMAP.md](ROADMAP.md)**.

---

## 🤝 Contributing

Contributions are welcome!

- For small fixes → open a regular Issue.
- For significant changes → open an RFC using
  `.github/ISSUE_TEMPLATE/rfc.md`.

Please read **[CONTRIBUTING.md](CONTRIBUTING.md)** before contributing.

---

## 📜 License

LLM-Graph is released under the **MIT License**. See **[LICENSE](LICENSE)**.
