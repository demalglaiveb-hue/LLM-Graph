# LLM-Graph Specification v0.2.0 (Draft)

This document describes version **0.2.0** of the LLM-Graph metadata standard.

LLM-Graph is a structured JSON vocabulary intended for interpretation by LLMs,
AI agents and intelligent assistants.

---

# 1. Goals

LLM-Graph aims to:

- provide LLMs with **high-quality content and action metadata**
- enable **safe and deterministic agent behaviour**
- unify metadata across **websites, documents, products and applications**
- remain **simple**, **human-readable** and easy to generate
- complement (not replace) OpenGraph, schema.org and sitemaps

---

# 2. Core Concepts

LLM-Graph documents always contain:

```jsonc
{
  "version": "0.2.0",
  "profile": "web | document | product | app"
}
```

Each profile defines its own required fields.

---

# 3. Profiles

See **PROFILES.md** for extended details.

Summary:

## 3.1 Web Profile (v0.2.0)

Fields:

- `site`
  - id, name, url, description
  - primary_audience
  - topics

- `pages[]`
  - id, url, title
  - purpose
  - keywords
  - actions (allowed on page)

- `actions[]`
  - id
  - description
  - agent_behavior (“safe”, “restricted”, “external”)

- `faqs[]`
  - question
  - answer
  - related_page

---

## 3.2 Document Profile (v0.2.0)

Fields:

- `document`
  - title, author, date, language, summary, topics

- `sections[]`
  - id, title, content, keywords

- `entities[]`
  - id, type, name, metadata

- `tables[]`
  - id, title, description, columns

- `claims[]`
  - id, statement, evidence_required

---

## 3.3 Product Profile (v0.2.0)

Fields:

- `catalog`
  - name, currency, category

- `products[]`
  - id, name, description
  - price
  - tags
  - availability
  - images[]

---

## 3.4 App Profile (v0.2.0)

Fields:

- `app`
  - name, description
  - platforms[]
  - permissions[]
  - modules[]

- `features[]`
  - id, name, description
  - actions[]

---

# 4. Versioning Rules

- **Major** → breaking changes  
- **Minor** → add new fields  
- **Patch** → clarifications  

---

# 5. Compatibility

LLM-Graph is compatible with:

- OpenGraph
- schema.org
- JSON-LD
- sitemaps

Mappings will be published in future versions.

---

# 6. License

LLM-Graph is released under MIT.
