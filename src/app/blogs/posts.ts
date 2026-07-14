export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string; // ISO date
  readTime: string;
};

export const posts: BlogPost[] = [
  {
    slug: "clickhouse-rls-query-parameters",
    title: "Allowing your users to query ClickHouse directly using raw SQL",
    description:
      "How we let Helicone customers run raw SQL against a shared ClickHouse table without ever seeing each other's rows: row policies, custom settings, and an AST parser that is deliberately not part of the security boundary.",
    date: "2026-07-13",
    readTime: "8 min",
  },
];
