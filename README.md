# LLM-Graph — Open Standard for LLM-Ready Websites, Documents & Apps

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Spec Version](https://img.shields.io/badge/spec-0.2.0--draft-orange)
![Status](https://img.shields.io/badge/status-experimental-purple)

LLM-Graph is an **open, lightweight, LLM-native metadata standard** that enables websites,
documents, product catalogs and applications to be interpreted reliably by AI systems.

It is designed to be:

- **Simple** → one JSON snippet  
- **Universal** → Web, Document, Product, App  
- **LLM-Native** → aligned with agent workflows  
- **Interoperable** → compatible with OpenGraph, schema.org, sitemaps  
- **Action-oriented** → lets LLMs know what users can do

LLM-Graph aims to become the **core description layer of the AI-first internet**.

---

## 🧩 Supported Profiles

LLM-Graph currently defines four metadata profiles:

| Profile | Purpose |
|--------|---------|
| **Web** | Websites, SaaS, landing pages, blogs |
| **Document** | PDF, DOCX, PPT, MD, EPUB |
| **Product** | e-commerce catalogs, marketplaces |
| **App** | Desktop/mobile/web applications |

👉 See **PROFILES.md** for the detailed profile specification.

---

## ⚡ Quick Start

Add this snippet to your `<head>`:

```html
<script type="application/llm-graph+json">
{
  "version": "0.2.0",
  "profile": "web",
  "site": {
    "id": "my-website",
    "name": "My Website",
    "url": "https://example.com",
    "description": "A simple example website."
  },
  "pages": [
    {
      "id": "home",
      "url": "/",
      "title": "Home",
      "purpose": "Welcome users"
    }
  ]
}
</script>
```

Validate using the online validator:  
👉 https://llm-graph-hub.lovable.app

---

## 📚 Repository Structure

```
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
│   └── llm-graph.schema.json
├── examples/
│   ├── web/nextjs/
│   ├── web/wordpress/
│   └── web/shopify/
├── tools/
│   └── generate-snippet.mjs
└── docs/
    └── index.md
```

---

## 🛠 Tools

Included in this repository:

- **Snippet generator**  
  `tools/generate-snippet.mjs`

Planned:

- CLI validator  
- conversion tools from OpenGraph/schema.org  
- PDF/DOCX → LLM-Graph extractor  
- ebook metadata converter  

---

## 🗺 Roadmap

See **ROADMAP.md**.

---

## 🤝 Contributing

We welcome all contributions.

- For small changes → open an Issue  
- For major changes → submit an RFC using `.github/ISSUE_TEMPLATE/rfc.md`  

See **CONTRIBUTING.md**.

---

## 📜 License

Released under the **MIT License**.
