import Link from "next/link";
import type { Metadata } from "next";
import { posts } from "./posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Writing from Justin Torre: ClickHouse, LLM observability, and whatever else I'm working on.",
  alternates: {
    canonical: "/blogs",
  },
  openGraph: {
    title: "Blog | Justin Torre",
    description:
      "Writing from Justin Torre: ClickHouse, LLM observability, and whatever else I'm working on.",
    type: "website",
    url: "https://justintorre.com/blogs",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Justin Torre",
    description: "Writing from Justin Torre.",
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
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <header className="mb-14">
        <Link
          href="/"
          className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
        >
          ~/justin-torre
        </Link>
        <h1 className="mt-4 text-[22px] font-bold tracking-tight">Blog</h1>
      </header>

      <ul className="flex flex-col border-t border-black">
        {posts.map((post) => (
          <li key={post.slug} className="border-b border-black">
            <Link
              href={`/blogs/${post.slug}`}
              className="group block py-5 transition-colors duration-150 hover:bg-neutral-100"
            >
              <time
                dateTime={post.date}
                className="font-mono text-xs text-neutral-500"
              >
                {formatDate(post.date)} · {post.readTime} read
              </time>
              <h2 className="mt-1 text-xl font-semibold text-black">
                {post.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {post.description}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
