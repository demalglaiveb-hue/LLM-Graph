# LLM-Graph Specification v0.2.0 (Draft)

This document describes version **0.2.0** of the LLM-Graph metadata standard.

LLM-Graph is a structured JSON vocabulary intended for interpretation by LLMs,
AI agents and intelligent assistants.

---

## 1. Goals

LLM-Graph aims to:

- provide LLMs with **high-quality content and action metadata**
- enable **safe and deterministic agent behaviour**
- unify metadata across **websites, documents, products and applications**
- remain **simple**, **human-readable** and easy to generate
- complement (not replace) OpenGraph, schema.org and sitemaps

---

## 2. Core Envelope

Every LLM-Graph document MUST include:

```jsonc
{
  "version": "0.2.0",
  "profile": "web | document | product | app"
}
```

- `version` — the LLM-Graph spec version (string).
- `profile` — the profile used (`"web"`, `"document"`, `"product"`, `"app"`).

Additional top-level fields then depend on the chosen profile.

---

## 3. Web Profile (v0.2.0)

### 3.1 Purpose

The Web Profile describes:

- a website / SaaS / online service
- its main pages and routes
- the primary intents each page serves
- actions that agents can safely suggest

### 3.2 Top-level Structure

```jsonc
{
  "version": "0.2.0",
  "profile": "web",
  "site": { ... },
  "pages": [ ... ],
  "actions": [ ... ],
  "faqs": [ ... ],
  "entities": [ ... ]
}
```

### 3.3 Fields

#### 3.3.1 `site` (object, required)

| Field              | Type     | Description                           |
|--------------------|----------|---------------------------------------|
| id                 | string   | Stable identifier for the site       |
| name               | string   | Human-readable site name             |
| url                | string   | Canonical base URL                   |
| description        | string   | Short description of the site        |
| primary_audience   | string[] | Target audiences                      |
| topics             | string[] | Main topics / domains                 |

#### 3.3.2 `pages[]` (array of objects)

| Field            | Type     | Description                                           |
|------------------|----------|-------------------------------------------------------|
| id               | string   | Stable page id                                       |
| url              | string   | URL path (`/`, `/pricing`, `/docs`, ...)             |
| title            | string   | Human-readable page title                            |
| purpose          | string   | Short description of what the page is for            |
| primary_intents  | string[] | Intents best served by this page                     |
| keywords         | string[] | SEO/semantic keywords                                |
| actions          | string[] | IDs of actions available on this page (optional)     |

#### 3.3.3 `actions[]` (array of objects)

| Field           | Type   | Description                                                    |
|-----------------|--------|----------------------------------------------------------------|
| id              | string | Stable action identifier                                      |
| label           | string | User-facing label                                             |
| description     | string | What the action does                                          |
| url             | string | URL to trigger or start the action (if applicable)           |
| agent_behavior  | string | `"safe"`, `"restricted"`, or `"external"`                     |

- `safe` → may be suggested and triggered by an agent
- `restricted` → may be suggested, but user confirmation required
- `external` → links to a 3rd party or out-of-scope action

#### 3.3.4 `faqs[]` (array of objects)

| Field         | Type   | Description                         |
|---------------|--------|-------------------------------------|
| question      | string | Common user question                |
| answer        | string | Canonical answer                    |
| related_page  | string | Optional reference to a `pages.id` |

#### 3.3.5 `entities[]` (array of objects)

Free-form list of important site-specific entities
(e.g. brands, locations, plans, etc.).

---

## 4. Document Profile (v0.2.0)

### 4.1 Purpose

The Document Profile describes **static documents** such as PDF, DOCX, PPT,
Markdown files, EPUB, etc.

It provides structure and metadata for:

- title, author, date, topics
- sections and headings
- key entities, claims, tables

### 4.2 Top-level Structure

```jsonc
{
  "version": "0.2.0",
  "profile": "document",
  "document": { ... },
  "sections": [ ... ],
  "entities": [ ... ],
  "claims": [ ... ],
  "tables": [ ... ]
}
```

### 4.3 Fields

#### 4.3.1 `document` (object, required)

| Field     | Type     | Description                      |
|-----------|----------|----------------------------------|
| title     | string   | Document title                   |
| author    | string   | Main author or organization      |
| date      | string   | ISO 8601 date                    |
| language  | string   | Language code (e.g. `en`, `fr`)  |
| summary   | string   | Short summary                    |
| topics    | string[] | Topics covered                   |

#### 4.3.2 `sections[]`

| Field     | Type     | Description                     |
|-----------|----------|---------------------------------|
| id        | string   | Section identifier              |
| title     | string   | Section title                   |
| level     | integer  | Logical level (1 = top-level)   |
| content   | string   | Section text (may be truncated) |
| keywords  | string[] | Important keywords              |

#### 4.3.3 `entities[]`

| Field    | Type   | Description                     |
|----------|--------|---------------------------------|
| id       | string | Identifier                      |
| type     | string | Type (person, place, org, ...) |
| name     | string | Human-readable name             |
| meta     | object | Additional attributes           |

#### 4.3.4 `claims[]`

| Field             | Type   | Description                   |
|-------------------|--------|-------------------------------|
| id                | string | Claim id                      |
| statement         | string | Claim text                    |
| evidence_required | bool   | Needs verification?           |

#### 4.3.5 `tables[]`

| Field       | Type     | Description                   |
|-------------|----------|-------------------------------|
| id          | string   | Table id                      |
| title       | string   | Table title                   |
| description | string   | Short description             |
| columns     | string[] | Column headers                |

---

## 5. Product Profile (v0.2.0)

### 5.1 Purpose

The Product Profile describes **products** in a catalog or marketplace.

### 5.2 Top-level Structure

```jsonc
{
  "version": "0.2.0",
  "profile": "product",
  "catalog": { ... },
  "products": [ ... ]
}
```

### 5.3 Fields

#### 5.3.1 `catalog`

| Field    | Type   | Description                 |
|----------|--------|-----------------------------|
| name     | string | Catalog name                |
| currency | string | ISO currency code           |
| category | string | High-level catalog category |

#### 5.3.2 `products[]`

| Field        | Type      | Description                    |
|--------------|-----------|--------------------------------|
| id           | string    | Product id                     |
| name         | string    | Name                           |
| description  | string    | Description                    |
| price        | number    | Price in `catalog.currency`    |
| tags         | string[]  | Tags / facets                  |
| availability | string    | e.g. `in_stock`, `out_of_stock`|
| images       | string[]  | Image URLs                     |
| url          | string    | Product page URL               |

---

## 6. App Profile (v0.2.0)

### 6.1 Purpose

The App Profile describes **applications** and their features/modules.

### 6.2 Top-level Structure

```jsonc
{
  "version": "0.2.0",
  "profile": "app",
  "app": { ... },
  "features": [ ... ]
}
```

### 6.3 Fields

#### 6.3.1 `app`

| Field       | Type     | Description                     |
|-------------|----------|---------------------------------|
| name        | string   | Application name                |
| description | string   | Short description               |
| platforms   | string[] | e.g. `["web", "ios", "android"]`|
| permissions | string[] | Permissions required (optional) |
| modules     | string[] | Logical modules/areas           |

#### 6.3.2 `features[]`

| Field       | Type     | Description                     |
|-------------|----------|---------------------------------|
| id          | string   | Feature id                      |
| name        | string   | Feature name                    |
| description | string   | What the feature does           |
| actions     | object[] | Actions available in this feature |

Each `actions[]` object has same shape as Web Profile actions.

---

## 7. Versioning Rules

- **Major** → breaking changes to core structures  
- **Minor** → addition of new fields or profiles (backward compatible)  
- **Patch** → clarifications, wording, non-breaking fixes  

---

## 8. Compatibility

LLM-Graph is designed to be compatible with:

- OpenGraph
- schema.org / JSON-LD
- sitemaps

Future versions will include recommended mappings and converters.

---

## 9. License

LLM-Graph is released under the MIT License.
