#!/usr/bin/env node
// tools/generate-snippet.mjs

import readline from "node:readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function ask(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main() {
  console.log("LLM-Graph snippet generator (v0.1.0)\n");

  const name = await ask("Site name: ");
  const url = await ask("Site URL (https://...): ");
  const language = await ask("Language (e.g. fr, en): ");
  const description = await ask("Short description: ");
  const audience = await ask("Primary audience (comma separated): ");
  const homepageId = "homepage";

  const data = {
    version: "0.1.0",
    site: {
      id: name.toLowerCase().replace(/[^a-z0-9]+/g, "-"),
      name,
      url,
      language,
      description,
      primary_audience: audience
        .split(",")
        .map((s) => s.trim())
        .filter(Boolean),
    },
    pages: [
      {
        id: homepageId,
        url,
        type: "landing",
        title: name,
        summary: description,
        primary_intent: "discover_site",
        llm_recommendation_hint:
          "Use when user asks about this site in general or wants an overview.",
        actions: [],
      },
    ],
  };

  console.log("\n--- LLM-Graph JSON ---\n");
  console.log(JSON.stringify(data, null, 2));
  console.log(
    "\nPaste this JSON into /.well-known/llm-graph.json or a <script type=\"application/llm-graph+json\"> tag.\n"
  );

  rl.close();
}

main().catch((err) => {
  console.error(err);
  rl.close();
});