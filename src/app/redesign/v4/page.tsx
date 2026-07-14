import Link from "next/link";
import type { Metadata } from "next";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { SiYcombinator } from "react-icons/si";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";

export const metadata: Metadata = {
  title: "Justin Torre — changelog",
  description:
    "Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

type Tag = "ACQUIRED" | "SHIPPED" | "WROTE" | "MILESTONE" | "WON";

const TAG_STYLES: Record<Tag, string> = {
  ACQUIRED: "text-amber-300 bg-amber-400/10 ring-amber-400/30",
  SHIPPED: "text-emerald-300 bg-emerald-400/10 ring-emerald-400/25",
  WROTE: "text-sky-300 bg-sky-400/10 ring-sky-400/25",
  MILESTONE: "text-violet-300 bg-violet-400/10 ring-violet-400/25",
  WON: "text-rose-300 bg-rose-400/10 ring-rose-400/25",
};

interface Entry {
  date: string;
  tag: Tag;
  title: string;
  detail: string;
  href: string;
  external: boolean;
  stats?: string[];
}

const FEED: { year: string; entries: Entry[] }[] = [
  {
    year: "2026",
    entries: [
      {
        date: "Jul 2026",
        tag: "ACQUIRED",
        title: "Helicone joins Mintlify",
        detail:
          "Three and a half years of open-source LLM observability, folded into the context layer for AI agents.",
        href: "https://x.com/justinstorre/status/2028878183949554127",
        external: true,
        stats: [
          "14T+ tokens processed",
          "30k+ signups",
          "36M+ end users tracked",
          "5.2k GitHub stars",
          "$1M+ ARR",
        ],
      },
      {
        date: "Jul 2026",
        tag: "SHIPPED",
        title: "Tracer: One Line Puzzle",
        detail:
          "iOS one-stroke puzzle game. 60+ levels, no ads, no tracking.",
        href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
        external: true,
      },
      {
        date: "Jul 2026",
        tag: "WROTE",
        title:
          "Allowing your users to query ClickHouse directly using raw SQL",
        detail:
          "Row-level security with query parameters, so user SQL stays user-scoped.",
        href: "/blogs/clickhouse-rls-query-parameters",
        external: false,
      },
    ],
  },
  {
    year: "2023",
    entries: [
      {
        date: "Jul 2023",
        tag: "SHIPPED",
        title: "Helicone re-launch",
        detail:
          "Rebuilt product, rebuilt pitch. The version that stuck.",
        href: "https://x.com/helicone_ai/status/1686840508658876419",
        external: true,
      },
      {
        date: "Apr 2023",
        tag: "MILESTONE",
        title: "Y Combinator, W23 batch",
        detail:
          "Launched Helicone: open-source observability for generative AI.",
        href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
        external: true,
      },
      {
        date: "Feb 2023",
        tag: "WON",
        title: "Scale AI Hackathon, 3rd place",
        detail:
          "Tom Brady vs. Gisele in an AI rap battle. The SF Standard covered it.",
        href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
        external: true,
      },
    ],
  },
];

const SOCIALS: { label: string; href: string; icon: IconType }[] = [
  { label: "X", href: "https://twitter.com/justintorre", icon: FaXTwitter },
  { label: "GitHub", href: "https://github.com/chitalian", icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justintorre/",
    icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@justintorre694/featured",
    icon: FaYoutube,
  },
  {
    label: "Y Combinator",
    href: "https://www.ycombinator.com/companies/helicone",
    icon: SiYcombinator,
  },
];

function TagBadge({ tag }: { tag: Tag }) {
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide ring-1 ring-inset ${TAG_STYLES[tag]}`}
    >
      [{tag}]
    </span>
  );
}

function EntryRow({ entry }: { entry: Entry }) {
  const inner = (
    <>
      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5">
        <TagBadge tag={entry.tag} />
        <span className="font-mono text-xs text-stone-500 sm:hidden">
          {entry.date}
        </span>
      </div>
      <h3 className="mt-2 flex items-baseline gap-1.5 text-[15px] font-medium leading-snug text-stone-100 transition-colors group-hover:text-amber-200 sm:text-base">
        <span>{entry.title}</span>
        <FiArrowUpRight
          aria-hidden
          className="h-4 w-4 shrink-0 translate-y-0.5 text-stone-600 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0 group-hover:text-amber-300"
        />
      </h3>
      <p className="mt-1 max-w-lg text-sm leading-relaxed text-stone-400">
        {entry.detail}
      </p>
      {entry.stats && (
        <ul className="mt-3 flex flex-wrap gap-1.5">
          {entry.stats.map((s) => (
            <li
              key={s}
              className="rounded border border-stone-800 bg-stone-900/70 px-2 py-1 font-mono text-[11px] text-stone-400"
            >
              {s}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  return (
    <article className="group grid grid-cols-[1.5rem_1fr] gap-x-3 sm:grid-cols-[5.5rem_1.5rem_1fr]">
      <span className="hidden pt-1 text-right font-mono text-xs leading-5 text-stone-500 sm:block">
        {entry.date}
      </span>
      <span className="relative flex justify-center pt-[7px]">
        <span
          aria-hidden
          className="z-[1] h-[9px] w-[9px] rounded-full border-2 border-stone-600 bg-stone-950 transition-colors group-hover:border-amber-400"
        />
      </span>
      {entry.external ? (
        <a
          href={entry.href}
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-md pb-1 outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          {inner}
        </a>
      ) : (
        <Link
          href={entry.href}
          className="block rounded-md pb-1 outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
        >
          {inner}
        </Link>
      )}
    </article>
  );
}

export default function ChangelogHome() {
  return (
    <main className="min-h-screen bg-stone-950 text-stone-200 antialiased">
      <style>{`
        @keyframes v4-blink { 0%, 55% { opacity: 1; } 56%, 100% { opacity: 0; } }
        @keyframes v4-ping {
          0%, 100% { box-shadow: 0 0 0 0 rgba(251, 191, 36, 0.35); }
          50% { box-shadow: 0 0 0 5px rgba(251, 191, 36, 0); }
        }
        .v4-cursor { animation: v4-blink 1.1s steps(1) infinite; }
        .v4-now-dot { animation: v4-ping 2.2s ease-in-out infinite; }
      `}</style>

      <div className="mx-auto max-w-2xl px-5 pb-24 pt-14 sm:px-6 sm:pt-20">
        {/* Header */}
        <header>
          <p className="font-mono text-xs text-stone-500">
            <span className="text-amber-400/80"># </span>CHANGELOG.md
            <span className="v4-cursor text-amber-400/80">_</span>
          </p>
          <div className="mt-3 flex flex-wrap items-start justify-between gap-x-6 gap-y-4">
            <div className="max-w-md">
              <h1 className="text-2xl font-semibold tracking-tight text-stone-50 sm:text-3xl">
                Justin Torre
              </h1>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-400">
                Building the context layer for AI agents at Mintlify.
                Previously co-founder and CEO of Helicone (YC W23),
                open-source LLM observability.
              </p>
            </div>
            <nav aria-label="Social links" className="flex items-center gap-0.5">
              {SOCIALS.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="rounded-md p-2 text-stone-500 transition-colors hover:bg-stone-800/70 hover:text-stone-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400/60"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </nav>
          </div>
          <nav
            aria-label="Site pages"
            className="mt-5 flex gap-5 font-mono text-[13px]"
          >
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-1 text-stone-400 transition-colors hover:text-amber-300"
            >
              /blogs
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/videos"
              className="group inline-flex items-center gap-1 text-stone-400 transition-colors hover:text-amber-300"
            >
              /videos
              <FiArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </nav>
        </header>

        {/* Pinned: Unreleased */}
        <section aria-label="Now" className="mt-10">
          <p className="font-mono text-sm text-stone-500">
            <span className="text-amber-400/80">## </span>[Unreleased]
          </p>
          <div className="mt-3 rounded-lg border border-amber-400/25 bg-amber-400/[0.04] p-4 sm:p-5">
            <div className="flex items-center gap-2.5">
              <span
                aria-hidden
                className="v4-now-dot h-2 w-2 rounded-full bg-amber-400"
              />
              <span className="inline-flex items-center rounded bg-amber-400/10 px-1.5 py-0.5 font-mono text-[11px] font-medium tracking-wide text-amber-300 ring-1 ring-inset ring-amber-400/30">
                [NOW]
              </span>
            </div>
            <h2 className="mt-2.5 text-base font-medium text-stone-50 sm:text-lg">
              Building the context layer for AI agents at Mintlify
            </h2>
            <p className="mt-1.5 max-w-lg text-sm leading-relaxed text-stone-400">
              Helicone joined Mintlify in March 2026. Same problem, bigger
              surface: giving agents the context they need to actually work.
            </p>
          </div>
        </section>

        {/* Feed */}
        <section aria-label="Changelog" className="relative mt-4">
          <span
            aria-hidden
            className="absolute bottom-2 left-[calc(0.75rem-0.5px)] top-4 w-px bg-stone-800 sm:left-[calc(7rem-0.5px)]"
          />
          {FEED.map(({ year, entries }) => (
            <div key={year}>
              <h2 className="sticky top-0 z-10 -mx-5 bg-stone-950/85 px-5 py-3 font-mono text-sm text-stone-300 backdrop-blur sm:-mx-6 sm:px-6">
                <span className="text-amber-400/80">## </span>[{year}]
              </h2>
              <div className="space-y-9 pb-12 pt-4">
                {entries.map((entry) => (
                  <EntryRow key={entry.title} entry={entry} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-2 border-t border-stone-800/80 pt-6">
          <p className="font-mono text-xs leading-relaxed text-stone-500">
            <span className="text-amber-400/80">$ </span>tail -f justintorre.com
            <span className="mx-2 text-stone-700">·</span>
            last updated Jul 2026
          </p>
        </footer>
      </div>
    </main>
  );
}
