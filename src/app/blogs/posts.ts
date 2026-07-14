export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "ai-trolley-problem",
    title: "Six models, one trolley: building the AI Trolley Problem Arena",
    description:
      "A weekend site that makes GPT, Claude, Gemini, Llama, Grok, and DeepSeek answer trolley problems on camera: forced tool calls, refusal wrangling, a 180-day cache, and a gateway migration after the acquisition.",
    date: "2026-07-14",
    readTime: "6 min",
  },
  {
    slug: "clickhouse-rls-query-parameters",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    description:
      "How we let Helicone customers run raw SQL against a shared ClickHouse table without ever seeing each other's rows: row policies, custom settings, and an AST parser that is deliberately not part of the security boundary.",
    date: "2026-07-13",
    readTime: "10 min",
  },
];
