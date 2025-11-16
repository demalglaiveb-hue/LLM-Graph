# LLM‑Graph Draft Specification (v0.1.0)

> Draft – subject to change. Use for experimentation and feedback.

## 1. Scope

LLM‑Graph defines a **JSON vocabulary** to describe:

- the **site** (brand, mission, audience)
- the main **pages** and their intents
- **entities** (products, services, locations…)
- **actions** LLMs can suggest safely
- **FAQs / intents** commonly asked by users

It is designed to be:

- **minimal**: easy to implement in a few hours
- **human‑writable**: no complex ontology
- **LLM‑friendly**: explicit intents, actions and audiences

---

## 2. Embedding

### 2.1 Recommended: `/.well‑known/llm‑graph.json`

Host a static JSON document at:

```text
https://your-domain.com/.well-known/llm-graph.json
```

`Content‑Type: application/json`.

### 2.2 Alternative: HTML `<script>` tag

Within the `<head>` of your pages:

```html
<script type="application/llm-graph+json">
{
  "version": "0.1.0",
  ...
}
</script>
```

---

## 3. Top‑level structure

```jsonc
{
  "version": "0.1.0",
  "site": { ... },
  "pages": [ ... ],
  "entities": [ ... ],
  "faqs": [ ... ],
  "metadata": { ... }
}
```

### 3.1 `version` (string, required)

Version of the LLM‑Graph spec used in this file.  
Example: `"0.1.0"`.

---

## 4. `site` object

```jsonc
"site": {
  "id": "my-site",
  "name": "My Product",
  "url": "https://example.com",
  "language": "en",
  "description": "Short description in plain language.",
  "primary_audience": ["developers", "marketers"],
  "topics": ["email-marketing", "automation"],
  "geo_focus": ["EU", "FR"],
  "contact": {
    "support_url": "https://example.com/support",
    "email": "support@example.com"
  }
}
```

**Required fields**

- `id` – short identifier (string)
- `name` – human readable name
- `url` – canonical URL
- `language` – primary language (BCP‑47, e.g. `en`, `fr‑FR`)
- `description` – concise description (1–3 phrases)

**Optional fields**

- `primary_audience` – array of audience tags (`"developers"`, `"smb"`, `"enterprise"`, `"consumers"`…)
- `topics` – array of topics / keywords
- `geo_focus` – array of country/region codes
- `contact` – object with `support_url`, `email`…

---

## 5. `pages` array

Each page describes **what problem it solves** and **what to do with it**.

```jsonc
"pages": [
  {
    "id": "pricing",
    "url": "https://example.com/pricing",
    "type": "pricing",
    "title": "Pricing",
    "summary": "Overview of all subscription plans and free tier.",
    "primary_intent": "compare_plans",
    "llm_recommendation_hint": "Use when user asks about price, plans, or free trial.",
    "audience": ["developers", "smb"],
    "actions": [
      {
        "id": "start-free-trial",
        "type": "navigate",
        "label": "Start free trial",
        "url": "https://example.com/signup",
        "safe_for_llm": true
      }
    ],
    "tags": ["pricing", "plans", "subscription"]
  }
]
```

Recommended `type` values (non‑exhaustive):

- `landing`
- `product`
- `pricing`
- `docs`
- `blog`
- `faq`
- `checkout`
- `contact`
- `dashboard`
- `legal`

---

## 6. `entities` array

Entities are **things** your site talks about: products, services, locations…

```jsonc
"entities": [
  {
    "id": "product-basic-plan",
    "type": "product",
    "name": "Basic Plan",
    "description": "Entry-level plan for small teams.",
    "url": "https://example.com/pricing#basic",
    "related_pages": ["pricing"],
    "attributes": {
      "price_monthly": 19,
      "currency": "EUR",
      "ideal_for": ["small-teams", "startups"]
    }
  }
]
```

Fields:

- `id` (required)
- `type` (required) – e.g. `"product"`, `"service"`, `"location"`, `"person"`
- `name`, `description`, `url`
- `related_pages` – array of page ids
- `attributes` – free‑form object with domain‑specific attributes

---

## 7. `faqs` array

```jsonc
"faqs": [
  {
    "id": "what-is-llm-graph",
    "question": "What is LLM-Graph?",
    "answer": "LLM-Graph is a JSON-based standard to describe websites for LLMs.",
    "related_pages": ["homepage", "docs-intro"],
    "tags": ["intro", "general"]
  }
]
```

These are **ready‑to‑use Q&A** that LLMs can reuse directly.

---

## 8. `actions` format (reused)

Actions can appear inside `pages[*].actions`.  

```jsonc
{
  "id": "book-demo",
  "type": "navigate",
  "label": "Book a demo",
  "url": "https://example.com/demo",
  "safe_for_llm": true,
  "constraints": {
    "geo_allowed": ["EU", "US"],
    "min_age": 18
  }
}
```

---

## 9. Backwards compatibility & evolution

- New fields MUST be **optional** by default.
- Unknown fields MUST be ignored by consumers.
- Breaking changes will increment the **major** version.

Feedback is welcome via GitHub issues / PRs.