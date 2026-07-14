import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Things Justin Torre has built and shipped: Helicone, Mintlify, Tracer, and assorted side projects.",
  alternates: {
    canonical: "/projects",
  },
  openGraph: {
    title: "Projects | Justin Torre",
    description:
      "Things Justin Torre has built and shipped: Helicone, Mintlify, Tracer, and assorted side projects.",
    type: "website",
    url: "https://justintorre.com/projects",
  },
};

const projects = [
  {
    slug: "/projects/mintlify",
    title: "Mintlify",
    line: "Building the context layer for AI agents. Helicone joined in March 2026.",
  },
  {
    slug: "/projects/helicone",
    title: "Helicone",
    line: "Open-source LLM observability, YC W23. 14T+ tokens, $1M+ ARR, acquired.",
  },
  {
    slug: "/projects/tracer",
    title: "Tracer: One Line Puzzle",
    line: "An iOS puzzle game. Trace every line in one continuous stroke.",
  },
  {
    slug: "/projects/website-redesigns",
    title: "17 versions of this website",
    line: "One homepage, seventeen designs, one very plain winner.",
  },
  {
    slug: "/projects/scale-ai-hackathon",
    title: "Scale AI Hackathon",
    line: "3rd place in February 2023, with an AI rap battle in the demo.",
  },
];

const elsewhere = [
  {
    href: "https://www.aitrolleyproblem.com",
    title: "aitrolleyproblem.com",
    line: "Which model provider would you trust to govern humanity?",
  },
  {
    href: "https://github.com/chitalian/offensive-ai-speak",
    title: "offensive-ai-speak",
    line: "A Claude skill that stops AI from writing slop.",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <header className="mb-14">
        <Link
          href="/"
          className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
        >
          ~/justin-torre
        </Link>
        <h1 className="mt-4 text-[22px] font-bold tracking-tight">Projects</h1>
        <p className="mt-3 text-[15px] text-neutral-600">
          Things I&apos;ve built, shipped, and occasionally handed off.
        </p>
      </header>

      <div className="space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Main quests
          </h2>
          <div className="mt-4">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={p.slug}
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
              >
                <span>
                  <span className="text-[15px] font-semibold">{p.title}</span>
                  <span className="ml-3 hidden text-sm text-neutral-600 sm:inline">
                    {p.line}
                  </span>
                </span>
                <span aria-hidden="true" className="font-mono text-[13px]">
                  &rarr;
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Side quests
          </h2>
          <div className="mt-4">
            {elsewhere.map((p) => (
              <a
                key={p.href}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="grid grid-cols-[1fr_auto] items-baseline gap-x-4 border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
              >
                <span>
                  <span className="text-[15px] font-semibold">{p.title}</span>
                  <span className="ml-3 hidden text-sm text-neutral-600 sm:inline">
                    {p.line}
                  </span>
                </span>
                <span aria-hidden="true" className="font-mono text-[13px]">
                  &rarr;
                </span>
              </a>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
