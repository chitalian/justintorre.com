import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Justin Torre",
  description:
    "Engineering notes from building Helicone: ClickHouse, LLM observability, and whatever else I'm working on.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Justin Torre",
    description:
      "Engineering notes from building Helicone: ClickHouse, LLM observability, and whatever else I'm working on.",
    type: "website",
    url: "https://justintorre.com/blogs",
  },
  twitter: {
    card: "summary",
    title: "Blog | Justin Torre",
    description: "Engineering notes from building Helicone.",
    creator: "@justintorre",
  },
};

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogsPage() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-14">
        <Link
          href="/"
          className="font-mono text-sm text-neutral-500 hover:text-cyan-400 transition-colors"
        >
          ~/justin-torre
        </Link>
        <h1 className="mt-4 font-mono text-3xl font-bold text-white">Blog</h1>
        <p className="mt-3 text-neutral-400">
          Engineering notes from building{" "}
          <a
            href="https://helicone.ai"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helicone
          </a>
          .
        </p>
      </header>

      <ul className="flex flex-col gap-10">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blogs/${post.slug}`} className="group block">
              <time
                dateTime={post.date}
                className="font-mono text-xs text-neutral-500"
              >
                {formatDate(post.date)} · {post.readTime} read
              </time>
              <h2 className="mt-1 text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
