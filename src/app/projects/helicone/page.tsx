import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Helicone",
  description:
    "Helicone is the open-source LLM observability platform I co-founded out of Y Combinator W23. 14T+ tokens processed, 36M+ end users tracked, and a March 2026 exit to Mintlify.",
  alternates: {
    canonical: "/projects/helicone",
  },
  openGraph: {
    title: "Helicone | Justin Torre",
    description:
      "The open-source LLM observability platform I co-founded out of Y Combinator W23.",
    url: "https://justintorre.com/projects/helicone",
    siteName: "Justin Torre",
    type: "website",
  },
};

const timeline = [
  {
    date: "Feb 2023",
    event: "Scale AI hackathon, 3rd place. Pre-YC era fun.",
  },
  {
    date: "Apr 2023",
    event: "Launched out of Y Combinator's W23 batch.",
  },
  {
    date: "Jul 2023",
    event: "Re-launch with a new proxy and a new dashboard.",
  },
  {
    date: "Aug 2024",
    event: "#1 Product of the Day on Product Hunt.",
  },
  {
    date: "Mar 2026",
    event: "Joined Mintlify.",
  },
];

const numbers = [
  { value: "14T+", label: "tokens processed" },
  { value: "36M+", label: "end users tracked" },
  { value: "30k+", label: "signups" },
  { value: "5.2k", label: "GitHub stars" },
  { value: "$1M+", label: "ARR" },
  { value: "Trending", label: "on GitHub" },
];

const links = [
  { href: "https://helicone.ai", label: "helicone.ai" },
  { href: "https://github.com/Helicone/helicone", label: "github.com/Helicone/helicone" },
  {
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    label: "YC launch page",
  },
  {
    href: "https://www.helicone.ai/blog/product-hunt-automate",
    label: "How we automated our Product Hunt launch",
  },
  {
    href: "https://x.com/justinstorre/status/2028878183949554127",
    label: "Mintlify announcement",
  },
];

export default function HeliconePage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/projects"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        &larr; projects
      </Link>

      <h1 className="mt-8 text-[22px] font-bold tracking-tight">Helicone</h1>
      <p className="mt-1 font-mono text-[12px] text-neutral-500">
        co-founder &amp; CEO / YC W23 / 2023&ndash;2026
      </p>

      <div className="mt-14 space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The bet
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              Helicone is an open-source LLM observability platform. I
              co-founded it and ran it as CEO out of Y Combinator&apos;s W23
              batch, launching in April 2023.
            </p>
            <p>
              The thesis was simple. Every hype cycle produces a massive
              observability market. Web had it, mobile had it, cloud had it,
              and AI was going to be bigger than all of them. Someone needed to
              build the platform that ingests LLM traffic and makes sense of
              it, and I wanted that to be us. When a company ships an AI
              product, the first question after launch is always the same:
              what are users actually doing with this, what is it costing us,
              and where is it failing? Helicone answered those questions with
              one line of integration.
            </p>
            <p>
              Being open source was part of the bet too. Observability sits in
              the request path, and companies are rightly picky about who sees
              their traffic. Letting anyone read the code or self-host it made
              the trust conversation short.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Timeline
          </h2>
          <div className="mt-2">
            {timeline.map((item) => (
              <div
                key={item.date}
                className="flex gap-6 border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
              >
                <span className="w-24 shrink-0 font-mono text-[12px] text-neutral-500">
                  {item.date}
                </span>
                <span className="text-[15px] leading-relaxed text-neutral-800">
                  {item.event}
                </span>
              </div>
            ))}
          </div>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            The Product Hunt run is worth a note. We automated most of the
            launch itself and{" "}
            <a
              href="https://www.helicone.ai/blog/product-hunt-automate"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              wrote up how
            </a>
            . Finishing #1 Product of the Day felt appropriate for a company
            whose whole product is watching software do work.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Numbers
          </h2>
          <div className="mt-2">
            {numbers.map((item) => (
              <div
                key={item.label}
                className="flex gap-6 border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
              >
                <span className="w-24 shrink-0 font-mono text-[12px] text-neutral-500">
                  {item.value}
                </span>
                <span className="text-[15px] leading-relaxed text-neutral-800">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            How it worked
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Under the hood, almost everything ran through one shared ClickHouse
            table called request_response_rmt. Dashboards, aggregations,
            alerts, exports: one table. We even exposed customer-facing SQL on
            top of it, which sounds reckless until you enforce isolation with
            row-level security. I wrote about how that works in{" "}
            <Link
              href="/blogs/clickhouse-rls-query-parameters"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              this post
            </Link>
            . Keeping the data model that boring is a big part of why a small
            team could process trillions of tokens without the architecture
            falling over.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            What happened next
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            In March 2026, Helicone joined{" "}
            <Link
              href="/projects/mintlify"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              Mintlify
            </Link>{" "}
            to build the context layer for AI agents. Observability taught us
            what agents do with information. Mintlify is where we get to shape
            the information they consume. I shared the{" "}
            <a
              href="https://x.com/justinstorre/status/2028878183949554127"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              announcement
            </a>{" "}
            when it happened.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Links
          </h2>
          <div className="mt-2">
            {links.map((item) => (
              <div
                key={item.href}
                className="border-b border-black py-3 transition-colors duration-150 hover:bg-neutral-100"
              >
                <a
                  href={item.href}
                  className="text-[15px] leading-relaxed text-neutral-800 underline decoration-1 underline-offset-4 hover:no-underline"
                >
                  {item.label}
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
