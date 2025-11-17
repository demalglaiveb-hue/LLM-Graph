# LLM-Graph Governance (Draft)

LLM-Graph aims to evolve as an **open standard** with transparent changes.

## Principles

- Openness — spec, schemas and docs are public and MIT-licensed.
- Backward compatibility — breaking changes are minimized and versioned.
- Use-driven — changes are motivated by real-world use-cases.
- Vendor-neutral — not tied to any single provider or platform.

## Decision Process

1. Propose changes via GitHub Issue or RFC.
2. Discuss with maintainers and community.
3. Iterate on the proposal and schema changes.
4. Merge changes into the spec and schemas.
5. Update `CHANGELOG.md` and `VERSION`.

## RFCs (Request for Comments)

For substantial changes, open an RFC using:

- `.github/ISSUE_TEMPLATE/rfc.md`

RFCs should clearly describe:

- Motivation
- Proposed design
- Backward compatibility impact
- Alternatives considered
- Open questions

## Versioning

LLM-Graph uses semantic versioning at the spec level:

- `MAJOR` — breaking structural changes
- `MINOR` — new fields or profiles, backward compatible
- `PATCH` — clarifications, non-breaking fixes
