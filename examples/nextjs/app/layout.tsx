// examples/nextjs/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "My LLM-Graph Enabled App",
  description: "Example Next.js app using LLM-Graph standard.",
};

const llmGraph = {
  version: "0.1.0",
  site: {
    id: "nextjs-example",
    name: "Next.js Example",
    url: "https://example.com",
    language: "en",
    description: "Demo app showcasing LLM-Graph.",
    primary_audience: ["developers"],
    topics: ["nextjs", "llm-graph"],
  },
  pages: [
    {
      id: "homepage",
      url: "https://example.com/",
      type: "landing",
      title: "Welcome",
      summary: "Homepage of the Next.js LLM-Graph example.",
      primary_intent: "discover_app",
      llm_recommendation_hint: "Use when user asks about the product homepage.",
      actions: [
        {
          id: "go-to-signup",
          type: "navigate",
          label: "Sign up",
          url: "https://example.com/signup",
          safe_for_llm: true,
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/llm-graph+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(llmGraph),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}