import Link from "next/link";
import {
  FiExternalLink,
  FiGithub,
  FiLinkedin,
  FiYoutube,
  FiArrowUpRight,
} from "react-icons/fi";
import { FaXTwitter, FaYCombinator } from "react-icons/fa6";

export const metadata = {
  title: "Justin Torre — Mission Control",
  description:
    "Justin Torre. Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

type Kpi = {
  label: string;
  value: string;
  sub: string;
  points: string;
  stroke: string;
};

const KPIS: Kpi[] = [
  {
    label: "TOKENS_PROCESSED",
    value: "14T+",
    sub: "lifetime, Helicone",
    points: "0,26 12,24 24,25 36,21 48,19 60,14 72,12 84,7 100,3",
    stroke: "#34d399",
  },
  {
    label: "END_USERS_TRACKED",
    value: "36M+",
    sub: "across customer apps",
    points: "0,27 12,25 24,22 36,23 48,18 60,16 72,11 84,10 100,4",
    stroke: "#22d3ee",
  },
  {
    label: "GITHUB_STARS",
    value: "5.2k",
    sub: "open source, day one",
    points: "0,28 12,26 24,24 36,20 48,21 60,15 72,13 84,9 100,5",
    stroke: "#a78bfa",
  },
  {
    label: "ARR",
    value: "$1M+",
    sub: "at time of acquisition",
    points: "0,29 12,28 24,26 36,25 48,20 60,19 72,12 84,8 100,2",
    stroke: "#fbbf24",
  },
];

type Deploy = {
  status: string;
  statusClass: string;
  name: string;
  desc: string;
  date: string;
  href: string;
  external: boolean;
};

const DEPLOYS: Deploy[] = [
  {
    status: "ACQUIRED",
    statusClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400",
    name: "Helicone joins Mintlify",
    desc: "The observability layer meets the context layer.",
    date: "2026-07",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    status: "LIVE",
    statusClass: "border-cyan-500/40 bg-cyan-500/10 text-cyan-400",
    name: "Tracer: One Line Puzzle",
    desc: "iOS one-stroke puzzle. 60+ levels, no ads.",
    date: "2026-07",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    status: "PUBLISHED",
    statusClass: "border-violet-500/40 bg-violet-500/10 text-violet-400",
    name: "Querying ClickHouse with raw SQL",
    desc: "Letting users run their own SQL, safely, with RLS.",
    date: "2026-07",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
  },
  {
    status: "SHIPPED",
    statusClass: "border-slate-500/40 bg-slate-500/10 text-slate-400",
    name: "Helicone Re-launch",
    desc: "One line of code for full LLM observability.",
    date: "2023-07",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    status: "GRADUATED",
    statusClass: "border-orange-500/40 bg-orange-500/10 text-orange-400",
    name: "YC W23",
    desc: "Open-source observability platform for generative AI.",
    date: "2023-04",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    status: "3RD PLACE",
    statusClass: "border-slate-500/40 bg-slate-500/10 text-slate-400",
    name: "Scale AI Hackathon",
    desc: "Tom Brady vs. Gisele in an AI rap battle. It made the news.",
    date: "2023-02",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const SOCIALS = [
  { label: "X", href: "https://twitter.com/justintorre", icon: FaXTwitter },
  { label: "GitHub", href: "https://github.com/chitalian", icon: FiGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justintorre/",
    icon: FiLinkedin,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@justintorre694/featured",
    icon: FiYoutube,
  },
  {
    label: "Y Combinator",
    href: "https://www.ycombinator.com/companies/helicone",
    icon: FaYCombinator,
  },
];

function Sparkline({ points, stroke }: { points: string; stroke: string }) {
  return (
    <svg
      viewBox="0 0 100 32"
      className="h-8 w-full"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <polyline
        points={points}
        fill="none"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.85"
      />
    </svg>
  );
}

export default function MissionControl() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 antialiased">
      <style>{`
        @keyframes v10-pulse {
          0%, 100% { opacity: 1; box-shadow: 0 0 0 0 rgba(52, 211, 153, 0.45); }
          50% { opacity: 0.6; box-shadow: 0 0 0 5px rgba(52, 211, 153, 0); }
        }
        .v10-dot { animation: v10-pulse 2s ease-in-out infinite; }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Top bar */}
        <header className="flex items-center justify-between gap-3 border-b border-slate-800 py-4">
          <div className="flex items-center gap-3 sm:gap-6">
            <Link
              href="/"
              className="flex h-9 w-9 items-center justify-center border border-slate-700 font-mono text-sm font-bold text-slate-100 transition-colors hover:border-slate-400"
            >
              JT
            </Link>
            <nav className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
              <Link
                href="/redesign/v10"
                className="px-2 py-1.5 text-slate-100 sm:px-3"
              >
                overview
              </Link>
              <Link
                href="/blogs"
                className="px-2 py-1.5 text-slate-500 transition-colors hover:text-slate-100 sm:px-3"
              >
                blog
              </Link>
              <Link
                href="/videos"
                className="px-2 py-1.5 text-slate-500 transition-colors hover:text-slate-100 sm:px-3"
              >
                videos
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2 border border-emerald-500/40 bg-emerald-500/10 px-2.5 py-1.5 font-mono text-[10px] tracking-wider text-emerald-400 sm:px-3 sm:text-xs">
            <span className="v10-dot h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">ALL SYSTEMS BUILDING</span>
            <span className="sm:hidden">BUILDING</span>
          </div>
        </header>

        {/* Intro */}
        <section className="border-b border-slate-800 py-10 sm:py-14">
          <p className="font-mono text-xs uppercase tracking-widest text-slate-500">
            operator
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-50 sm:text-5xl">
            Justin Torre
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
            Building the context layer for AI agents at{" "}
            <span className="text-slate-200">Mintlify</span>. Before that,
            co-founder and CEO of{" "}
            <span className="text-slate-200">Helicone</span> (YC W23),
            open-source LLM observability. Helicone joined Mintlify in March 2026.
          </p>
        </section>

        {/* KPI row */}
        <section
          aria-label="Key metrics"
          className="grid grid-cols-1 border-b border-slate-800 sm:grid-cols-2 lg:grid-cols-4"
        >
          {KPIS.map((kpi, i) => (
            <div
              key={kpi.label}
              className={`group border-slate-800 px-5 py-6 transition-colors hover:bg-slate-900/60 ${
                i > 0 ? "border-t sm:border-t-0" : ""
              } ${i % 2 === 1 ? "sm:border-l" : ""} ${
                i > 1 ? "sm:border-t lg:border-t-0" : ""
              } ${i > 0 ? "lg:border-l" : ""}`}
            >
              <p className="font-mono text-[10px] tracking-widest text-slate-500">
                {kpi.label}
              </p>
              <p className="mt-2 text-3xl font-semibold tabular-nums tracking-tight text-slate-50">
                {kpi.value}
              </p>
              <p className="mt-1 text-xs text-slate-500">{kpi.sub}</p>
              <div className="mt-4 opacity-60 transition-opacity group-hover:opacity-100">
                <Sparkline points={kpi.points} stroke={kpi.stroke} />
              </div>
            </div>
          ))}
        </section>

        {/* Main grid */}
        <section className="grid grid-cols-1 gap-px lg:grid-cols-3">
          {/* Deployments */}
          <div className="border-b border-slate-800 lg:col-span-2 lg:border-b-0 lg:border-r">
            <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Deployments
              </h2>
              <span className="font-mono text-[10px] text-slate-600">
                {DEPLOYS.length} records
              </span>
            </div>
            <ul>
              {DEPLOYS.map((d) => {
                const inner = (
                  <>
                    <span
                      className={`w-24 shrink-0 border px-1.5 py-0.5 text-center font-mono text-[9px] tracking-wider ${d.statusClass}`}
                    >
                      {d.status}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium text-slate-100 group-hover:text-white">
                        {d.name}
                      </span>
                      <span className="mt-0.5 block truncate text-xs text-slate-500">
                        {d.desc}
                      </span>
                    </span>
                    <span className="hidden shrink-0 font-mono text-xs text-slate-500 sm:block">
                      {d.date}
                    </span>
                    <FiExternalLink
                      aria-hidden="true"
                      className="shrink-0 text-slate-600 transition-colors group-hover:text-slate-300"
                    />
                  </>
                );
                const rowClass =
                  "group flex items-center gap-3 border-b border-slate-800/70 px-5 py-4 transition-colors last:border-b-0 hover:bg-slate-900/70 sm:gap-4";
                return (
                  <li key={d.name}>
                    {d.external ? (
                      <a
                        href={d.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={rowClass}
                      >
                        {inner}
                      </a>
                    ) : (
                      <Link href={d.href} className={rowClass}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Side panel */}
          <aside className="flex flex-col">
            <div className="border-b border-slate-800 px-5 py-3">
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Current focus
              </h2>
            </div>
            <div className="border-b border-slate-800 px-5 py-5">
              <p className="text-sm leading-relaxed text-slate-400">
                Agents are only as good as what they know. At Mintlify I work
                on the context layer: getting the right docs, data, and state
                in front of every agent that needs it.
              </p>
              <a
                href="https://x.com/justinstorre/status/2028878183949554127"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-emerald-400 transition-colors hover:text-emerald-300"
              >
                READ_THE_ANNOUNCEMENT <FiArrowUpRight aria-hidden="true" />
              </a>
            </div>

            <div className="border-b border-slate-800 px-5 py-3 lg:border-t-0">
              <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400">
                Uptime
              </h2>
            </div>
            <div className="px-5 py-5 font-mono text-xs leading-6 text-slate-500">
              <div className="flex justify-between gap-4">
                <span>years_shipping</span>
                <span className="text-slate-200">3.2</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>signups_handled</span>
                <span className="text-slate-200">30k+</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>drone_crashes</span>
                <span className="text-slate-200">unlogged</span>
              </div>
              <div className="flex justify-between gap-4">
                <span>scheduled_downtime</span>
                <span className="text-slate-200">none planned</span>
              </div>
              <p className="mt-4 border-t border-slate-800 pt-3 text-[10px] text-slate-600">
                Incidents are self-reported. Reviewer: also me.
              </p>
            </div>
          </aside>
        </section>

        {/* Footer */}
        <footer className="flex flex-col items-start justify-between gap-4 border-t border-slate-800 py-6 sm:flex-row sm:items-center">
          <p className="font-mono text-[10px] tracking-wider text-slate-600">
            JUSTIN_TORRE // SF // {new Date().getFullYear()}
          </p>
          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-9 w-9 items-center justify-center border border-slate-800 text-slate-500 transition-colors hover:border-slate-500 hover:text-slate-100"
              >
                <s.icon size={15} aria-hidden="true" />
              </a>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
}
