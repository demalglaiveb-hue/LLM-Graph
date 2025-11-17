# LLM-Graph Profiles Specification (Draft v0.2.0)

LLM-Graph defines **four complementary profiles**:
Web, Document, Product and App.

Each profile reuses common ideas (ids, names, descriptions, actions)
while staying tailored to its domain.

For full semantics, see **SPEC_v0.2.0.md**.
This document provides an overview and minimal examples.

---

## 1. Web Profile

```jsonc
{
  "version": "0.2.0",
  "profile": "web",
  "site": {
    "id": "my-site",
    "name": "My Site",
    "url": "https://example.com",
    "description": "Example website using LLM-Graph."
  },
  "pages": [
    {
      "id": "home",
      "url": "/",
      "title": "Home",
      "purpose": "Welcome and introduction"
    }
  ]
}
```

---

## 2. Document Profile

```jsonc
{
  "version": "0.2.0",
  "profile": "document",
  "document": {
    "title": "Irrigation Report 2025",
    "author": "Example Org",
    "date": "2025-01-15",
    "language": "fr",
    "summary": "Technical report on an irrigation project.",
    "topics": ["irrigation", "water management"]
  },
  "sections": [
    {
      "id": "intro",
      "title": "Introduction",
      "level": 1,
      "content": "This report describes..."
    }
  ]
}
```

---

## 3. Product Profile

```jsonc
{
  "version": "0.2.0",
  "profile": "product",
  "catalog": {
    "name": "Demo Catalog",
    "currency": "EUR",
    "category": "clothing"
  },
  "products": [
    {
      "id": "sku-123",
      "name": "Blue T-Shirt",
      "description": "Unisex cotton t-shirt, blue.",
      "price": 19.90,
      "tags": ["tshirt", "blue", "unisex"],
      "availability": "in_stock",
      "url": "https://example.com/products/blue-tshirt"
    }
  ]
}
```

---

## 4. App Profile

```jsonc
{
  "version": "0.2.0",
  "profile": "app",
  "app": {
    "name": "Example Analytics",
    "description": "An app to explore analytics dashboards.",
    "platforms": ["web"],
    "modules": ["dashboard", "reports"]
  },
  "features": [
    {
      "id": "view-dashboard",
      "name": "View Dashboard",
      "description": "Access the main analytics dashboard.",
      "actions": [
        {
          "id": "open-dashboard",
          "label": "Open dashboard",
          "description": "Open the analytics dashboard in the app.",
          "agent_behavior": "safe"
        }
      ]
    }
  ]
}
```

---

Profiles are meant to be **composable**:
a single system can expose multiple documents
(Document Profile), a web interface (Web Profile)
and a catalog (Product Profile) all at once.
