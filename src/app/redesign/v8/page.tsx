import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Justin Torre",
  description:
    "Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

type Entry = {
  title: string;
  note?: string;
  date?: string;
  href: string;
  external?: boolean;
};

const now: Entry[] = [
  {
    title: "Mintlify",
    note: "the context layer for AI agents",
    date: "2026",
    href: "https://mintlify.com",
    external: true,
  },
];

const recently: Entry[] = [
  {
    title: "Helicone joins Mintlify",
    date: "Jul 2026",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    title: "Tracer",
    note: "one-stroke iOS puzzle, 60+ levels, no ads",
    date: "Jul 2026",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    title: "Letting users query ClickHouse with raw SQL",
    note: "writing",
    date: "Jul 2026",
    href: "/blogs/clickhouse-rls-query-parameters",
  },
  {
    title: "Helicone re-launch",
    date: "Jul 2023",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    title: "Helicone launches in YC W23",
    date: "Apr 2023",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    title: "Scale AI hackathon, 3rd place",
    date: "Feb 2023",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const elsewhere: Entry[] = [
  { title: "Blog", href: "/blogs" },
  { title: "Videos", note: "drone and engineering", href: "/videos" },
  { title: "X", href: "https://twitter.com/justintorre", external: true },
  { title: "GitHub", href: "https://github.com/chitalian", external: true },
  {
    title: "LinkedIn",
    href: "https://www.linkedin.com/in/justintorre/",
    external: true,
  },
  {
    title: "YouTube",
    href: "https://www.youtube.com/@justintorre694/featured",
    external: true,
  },
  {
    title: "Y Combinator",
    href: "https://www.ycombinator.com/companies/helicone",
    external: true,
  },
];

function Row({ entry }: { entry: Entry }) {
  const inner = (
    <span className="text-amber-200/70 transition-colors duration-150 group-hover:text-amber-200 group-hover:underline underline-offset-[5px] decoration-amber-200/40 decoration-1">
      {entry.title}
    </span>
  );
  return (
    <li>
      {entry.external ? (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-baseline gap-3 py-[3px]"
        >
          {inner}
          {entry.note && (
            <span className="text-stone-400/80">
              <span aria-hidden="true" className="mr-3 text-stone-600">
                &middot;
              </span>
              {entry.note}
            </span>
          )}
          {entry.date && (
            <span className="ml-auto shrink-0 pl-4 font-mono text-[0.72rem] tracking-wide text-stone-500">
              {entry.date}
            </span>
          )}
        </a>
      ) : (
        <Link href={entry.href} className="group flex items-baseline gap-3 py-[3px]">
          {inner}
          {entry.note && (
            <span className="text-stone-400/80">
              <span aria-hidden="true" className="mr-3 text-stone-600">
                &middot;
              </span>
              {entry.note}
            </span>
          )}
          {entry.date && (
            <span className="ml-auto shrink-0 pl-4 font-mono text-[0.72rem] tracking-wide text-stone-500">
              {entry.date}
            </span>
          )}
        </Link>
      )}
    </li>
  );
}

function Section({ label, entries }: { label: string; entries: Entry[] }) {
  return (
    <section className="mt-14">
      <h2 className="mb-4 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-stone-500">
        {label}
      </h2>
      <ul className="text-[0.95rem] leading-relaxed">
        {entries.map((e) => (
          <Row key={e.title} entry={e} />
        ))}
      </ul>
    </section>
  );
}

export default function QuietProse() {
  return (
    <main className="min-h-screen bg-[#0c0c0c] text-stone-200 antialiased">
      <style>{`::selection { background: rgba(253, 230, 138, 0.22); }`}</style>
      <div className="mx-auto max-w-xl px-6 pb-32 pt-24 sm:pt-36">
        <h1 className="text-[0.95rem] font-medium tracking-tight text-stone-100">
          Justin Torre
        </h1>
        <p className="mt-8 text-[1.15rem] leading-[1.85] tracking-[-0.005em] text-stone-300">
          I&rsquo;m building the context layer for AI agents at Mintlify. Before
          that I co-founded Helicone, an open-source LLM observability platform
          from YC W23 that processed 14 trillion tokens for 30,000 teams and
          passed $1M in revenue before joining Mintlify. I also like shipping
          small things, most recently a one-stroke puzzle game for the iPhone.
        </p>
        <Section label="Now" entries={now} />
        <Section label="Recently" entries={recently} />
        <Section label="Elsewhere" entries={elsewhere} />
        <footer className="mt-20 font-mono text-[0.68rem] tracking-[0.28em] text-stone-600">
          SAN FRANCISCO
        </footer>
      </div>
    </main>
  );
}
