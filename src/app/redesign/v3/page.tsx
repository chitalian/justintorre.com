import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaYCombinator,
  FaApple,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Justin Torre",
  description:
    "Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

const cardBase =
  "group relative flex rounded-2xl border border-white/10 bg-white/[0.03] transition duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.05] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950";

const stats = [
  { value: "14T+", label: "tokens processed" },
  { value: "36M+", label: "end users tracked" },
  { value: "5.2k", label: "GitHub stars" },
  { value: "$1M+", label: "ARR at Helicone" },
];

const earlier = [
  {
    title: "Helicone Re-launch",
    date: "Jul 2023",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
  },
  {
    title: "YC W23 launch",
    date: "Apr 2023",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
  },
  {
    title: "Scale AI Hackathon, 3rd place",
    date: "Feb 2023",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
  },
];

const socials = [
  { label: "X", href: "https://twitter.com/justintorre", Icon: FaXTwitter },
  { label: "GitHub", href: "https://github.com/chitalian", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justintorre/",
    Icon: FaLinkedinIn,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@justintorre694/featured",
    Icon: FaYoutube,
  },
  {
    label: "Y Combinator",
    href: "https://www.ycombinator.com/companies/helicone",
    Icon: FaYCombinator,
  },
];

export default function RedesignV3() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <style>{`
        .tracer-path {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          transition: stroke-dashoffset 1.3s cubic-bezier(0.6, 0, 0.2, 1);
        }
        .group:hover .tracer-path,
        .group:focus-visible .tracer-path {
          stroke-dashoffset: 0;
        }
        @media (prefers-reduced-motion: reduce) {
          .tracer-path { transition: none; stroke-dashoffset: 0; }
        }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-12">
          {/* Intro / identity */}
          <section
            className={`${cardBase} col-span-2 flex-col justify-between p-6 sm:p-8 lg:col-span-6 lg:row-span-2`}
          >
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                San Francisco
              </p>
              <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Justin Torre
              </h1>
              <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400 sm:text-lg">
                Building the context layer for AI agents at{" "}
                <span className="text-zinc-200">Mintlify</span>. Before that,
                co-founder and CEO of{" "}
                <span className="text-zinc-200">Helicone</span> (YC W23),
                open-source LLM observability.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
              <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
              Currently shipping at Mintlify
            </div>
          </section>

          {/* Stat tiles */}
          {stats.map((s) => (
            <div
              key={s.label}
              className={`${cardBase} col-span-1 flex-col justify-between p-5 sm:p-6 lg:col-span-3`}
            >
              <p className="text-3xl font-semibold tracking-tight text-white tabular-nums sm:text-4xl">
                {s.value}
              </p>
              <p className="mt-3 text-xs leading-snug text-zinc-500 sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}

          {/* Mintlify announcement */}
          <a
            href="https://x.com/justinstorre/status/2028878183949554127"
            target="_blank"
            rel="noreferrer"
            className="group relative col-span-2 rounded-2xl transition duration-300 ease-out hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 lg:col-span-8"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/25 to-violet-500/25 opacity-40 blur-xl transition-opacity duration-300 group-hover:opacity-70"
            />
            <div className="relative rounded-2xl bg-gradient-to-br from-cyan-400/50 via-white/10 to-violet-500/50 p-px">
              <div className="flex h-full flex-col justify-between rounded-[calc(1rem-1px)] bg-zinc-950/95 p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <p className="text-xs font-medium uppercase tracking-[0.2em] text-cyan-300/90">
                    Jul 2026
                  </p>
                  <FaArrowUpRightFromSquare className="mt-0.5 h-3.5 w-3.5 shrink-0 text-zinc-600 transition-colors group-hover:text-cyan-300" />
                </div>
                <div className="mt-8 sm:mt-12">
                  <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                    Helicone joins Mintlify
                  </h2>
                  <p className="mt-3 max-w-lg text-sm leading-relaxed text-zinc-400 sm:text-base">
                    Three years of LLM observability, now powering the context
                    layer for AI agents. Read the announcement on X.
                  </p>
                </div>
              </div>
            </div>
          </a>

          {/* Tracer */}
          <a
            href="https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996"
            target="_blank"
            rel="noreferrer"
            className={`${cardBase} col-span-2 flex-col justify-between p-6 sm:p-8 lg:col-span-4`}
          >
            <div className="flex items-start justify-between gap-4">
              <svg
                viewBox="0 0 120 120"
                className="h-16 w-16 sm:h-20 sm:w-20"
                aria-hidden="true"
              >
                <path
                  d="M20 100 L20 20 L100 20 L100 100 L44 100 L44 44 L80 44 L80 78 L62 78"
                  fill="none"
                  stroke="rgba(255,255,255,0.08)"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 100 L20 20 L100 20 L100 100 L44 100 L44 44 L80 44 L80 78 L62 78"
                  fill="none"
                  stroke="#a78bfa"
                  strokeWidth="9"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  pathLength={1}
                  className="tracer-path"
                />
                <circle cx="20" cy="100" r="6" fill="#a78bfa" />
              </svg>
              <FaApple className="h-5 w-5 text-zinc-600 transition-colors group-hover:text-zinc-300" />
            </div>
            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-300/80">
                Jul 2026 · iOS
              </p>
              <h2 className="mt-2 text-xl font-semibold tracking-tight text-white">
                Tracer: One Line Puzzle
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Draw every line without lifting your finger. 60+ levels, no
                ads, no tracking.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-300">
                Get it on the App Store
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </a>

          {/* Blog post */}
          <Link
            href="/blogs/clickhouse-rls-query-parameters"
            className={`${cardBase} col-span-2 flex-col overflow-hidden lg:col-span-5`}
          >
            <div className="relative overflow-hidden border-b border-white/10">
              <Image
                src="/blog/hql-editor.png"
                alt="Screenshot of a SQL editor querying ClickHouse"
                width={2000}
                height={1314}
                className="aspect-[2/1] w-full object-cover object-top opacity-80 transition duration-300 group-hover:scale-[1.02] group-hover:opacity-100"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                  Blog · Jul 2026
                </p>
                <h2 className="mt-2 text-lg font-semibold leading-snug tracking-tight text-white">
                  Allowing your users to query ClickHouse directly using raw
                  SQL
                </h2>
              </div>
              <p className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-cyan-300">
                Read the post
                <FaArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </p>
            </div>
          </Link>

          {/* Earlier */}
          <section
            className={`${cardBase} col-span-2 flex-col p-6 sm:p-8 lg:col-span-7`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              Earlier
            </p>
            <ul className="mt-4 divide-y divide-white/5">
              {earlier.map((item) => (
                <li key={item.title}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group/row -mx-2 flex items-center justify-between gap-4 rounded-lg px-2 py-3.5 transition-colors hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  >
                    <span className="text-sm font-medium text-zinc-200 group-hover/row:text-white sm:text-base">
                      {item.title}
                    </span>
                    <span className="flex shrink-0 items-center gap-3 text-xs text-zinc-500">
                      {item.date}
                      <FaArrowUpRightFromSquare className="h-3 w-3 text-zinc-700 transition-colors group-hover/row:text-zinc-400" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>

          {/* More on this site */}
          <section
            className={`${cardBase} col-span-2 flex-col justify-between gap-4 p-6 lg:col-span-4`}
          >
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
              More
            </p>
            <div className="flex flex-col gap-2">
              <Link
                href="/blogs"
                className="group/link flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
              >
                <span className="text-sm font-medium text-zinc-200">
                  Blog
                </span>
                <FaArrowRight className="h-3 w-3 text-zinc-600 transition group-hover/link:translate-x-1 group-hover/link:text-zinc-300" />
              </Link>
              <Link
                href="/videos"
                className="group/link flex items-center justify-between rounded-xl border border-white/10 px-4 py-3 transition-colors hover:border-white/25 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
              >
                <span className="text-sm font-medium text-zinc-200">
                  Videos
                  <span className="ml-2 text-xs font-normal text-zinc-500">
                    drone + engineering
                  </span>
                </span>
                <FaArrowRight className="h-3 w-3 text-zinc-600 transition group-hover/link:translate-x-1 group-hover/link:text-zinc-300" />
              </Link>
            </div>
          </section>

          {/* Socials */}
          <section
            className={`${cardBase} col-span-2 flex-col justify-center p-6 lg:col-span-8`}
          >
            <div className="flex flex-wrap items-center justify-between gap-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-zinc-500">
                Elsewhere
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {socials.map(({ label, href, Icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    title={label}
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 text-zinc-400 transition-colors hover:border-white/25 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </section>
        </div>

        <p className="mt-10 text-center text-xs text-zinc-600">
          © 2026 Justin Torre
        </p>
      </div>
    </main>
  );
}
