import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { FaGithub, FaLinkedinIn, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { FaYCombinator } from "react-icons/fa";
import { FiArrowUpRight } from "react-icons/fi";

export const metadata = {
  title: "Justin Torre",
  description:
    "Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

const INK = "#211d18";
const PAPER = "#faf6ee";
const MUTED = "#6d6459";
const ACCENT = "#d5461d";

/* One weave per section. All paths start at (48,0) and end at (48,100) so
   segments connect no matter how tall each section renders. */
const SEG_HERO = "M48 4 C48 22 16 28 16 44 C16 62 80 60 80 78 C80 92 48 92 48 100";
const SEG_RIGHT = "M48 0 C48 12 80 18 80 34 C80 52 16 52 16 70 C16 86 48 88 48 100";
const SEG_LEFT = "M48 0 C48 12 16 18 16 34 C16 52 80 52 80 70 C80 86 48 88 48 100";
const SEG_END = "M48 0 C48 18 62 28 54 44 C46 60 48 62 48 72";

const stats = [
  { value: "14T+", label: "tokens processed" },
  { value: "36M+", label: "end users tracked" },
  { value: "30k+", label: "signups" },
  { value: "5.2k", label: "GitHub stars" },
  { value: "$1M+", label: "ARR" },
];

const updates: {
  date: string;
  title: string;
  note?: string;
  href: string;
  external: boolean;
}[] = [
  {
    date: "Jul 2026",
    title: "Helicone joins Mintlify",
    note: "The observability layer meets the docs platform. New chapter starts here.",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    date: "Jul 2026",
    title: "Tracer: One Line Puzzle",
    note: "iOS one-stroke puzzle game. 60+ levels, no ads, no tracking. This page is drawn the same way.",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    date: "Jul 2026",
    title: "Letting users query ClickHouse directly with raw SQL",
    note: "Row-level security and query parameters, in production.",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
  },
  {
    date: "Jul 2023",
    title: "Helicone re-launch",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    date: "Apr 2023",
    title: "YC W23 launch",
    note: "Open-source observability platform for generative AI.",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    date: "Feb 2023",
    title: "Scale AI Hackathon, 3rd place",
    note: "Tom Brady and Gisele in an AI rap battle. The SF Standard covered it.",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const socials = [
  { label: "X", handle: "@justintorre", href: "https://twitter.com/justintorre", Icon: FaXTwitter },
  { label: "GitHub", handle: "chitalian", href: "https://github.com/chitalian", Icon: FaGithub },
  { label: "LinkedIn", handle: "justintorre", href: "https://www.linkedin.com/in/justintorre/", Icon: FaLinkedinIn },
  { label: "YouTube", handle: "@justintorre694", href: "https://www.youtube.com/@justintorre694/featured", Icon: FaYoutube },
  { label: "Y Combinator", handle: "Helicone, W23", href: "https://www.ycombinator.com/companies/helicone", Icon: FaYCombinator },
];

function delay(s: number): CSSProperties {
  return { "--d": `${s}s` } as CSSProperties;
}

function RailSegment({ d, at }: { d: string; at: number }) {
  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 h-full w-full overflow-visible"
      viewBox="0 0 96 100"
      preserveAspectRatio="none"
    >
      <path
        d={d}
        pathLength={1}
        className="seg"
        style={delay(at)}
        fill="none"
        stroke={ACCENT}
        strokeWidth={2.5}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

function Node({ at, top, hollow = false }: { at: number; top: string; hollow?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className="absolute left-1/2 -translate-x-1/2"
      style={{ top }}
    >
      <span
        className="node block h-3 w-3 rounded-full"
        style={{
          ...delay(at),
          background: hollow ? PAPER : ACCENT,
          border: `2.5px solid ${ACCENT}`,
          boxShadow: `0 0 0 4px ${PAPER}`,
        }}
      />
    </span>
  );
}

function Section({
  title,
  seg,
  at,
  children,
}: {
  title: string;
  seg: string;
  at: number;
  children: ReactNode;
}) {
  return (
    <section className="grid grid-cols-[44px_minmax(0,1fr)] md:grid-cols-[96px_minmax(0,1fr)]">
      <div className="relative">
        <RailSegment d={seg} at={at} />
        <Node at={at} top="4px" />
      </div>
      <div className="rise pb-16 md:pb-24" style={delay(at + 0.15)}>
        <h2
          className="mb-6 text-xs font-semibold uppercase tracking-[0.22em]"
          style={{ color: ACCENT }}
        >
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
}

export default function RedesignV5() {
  return (
    <main
      className="min-h-screen antialiased"
      style={{ background: PAPER, color: INK }}
    >
      <style>{`
        @keyframes drawSeg { to { stroke-dashoffset: 0; } }
        @keyframes nodePop { from { opacity: 0; transform: scale(0); } to { opacity: 1; transform: scale(1); } }
        @keyframes riseIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        .seg {
          stroke-dasharray: 1;
          stroke-dashoffset: 1;
          animation: drawSeg 0.85s cubic-bezier(0.5, 0, 0.3, 1) forwards;
          animation-delay: var(--d, 0s);
        }
        .node {
          opacity: 0;
          animation: nodePop 0.3s cubic-bezier(0.2, 1.4, 0.4, 1) forwards;
          animation-delay: var(--d, 0s);
        }
        .rise {
          opacity: 0;
          animation: riseIn 0.6s ease forwards;
          animation-delay: var(--d, 0s);
        }
        .ink-link { text-decoration-color: #d8cfc2; text-underline-offset: 4px; transition: color 0.15s ease, text-decoration-color 0.15s ease; }
        .ink-link:hover { color: ${ACCENT}; text-decoration-color: ${ACCENT}; }
        .row-hover { transition: background 0.15s ease; }
        .row-hover:hover { background: #f2ebdf; }
        .row-hover:hover .row-arrow { transform: translate(2px, -2px); color: ${ACCENT}; }
        .row-arrow { transition: transform 0.15s ease, color 0.15s ease; }
        @media (prefers-reduced-motion: reduce) {
          .seg { animation: none; stroke-dashoffset: 0; }
          .node, .rise { animation: none; opacity: 1; transform: none; }
        }
      `}</style>

      <div className="mx-auto max-w-3xl px-4 md:px-6">
        {/* Top bar */}
        <header className="flex items-center justify-between py-6 text-sm">
          <span className="font-semibold tracking-tight">justintorre.com</span>
          <nav className="flex gap-6" style={{ color: MUTED }}>
            <Link href="/blogs" className="ink-link underline">Blog</Link>
            <Link href="/videos" className="ink-link underline">Videos</Link>
          </nav>
        </header>

        {/* Hero */}
        <section className="grid grid-cols-[44px_minmax(0,1fr)] md:grid-cols-[96px_minmax(0,1fr)]">
          <div className="relative">
            <RailSegment d={SEG_HERO} at={0.15} />
            <Node at={0.1} top="calc(4% - 6px)" hollow />
          </div>
          <div className="rise pb-16 pt-6 md:pb-24 md:pt-10" style={delay(0.25)}>
            <p
              className="mb-3 text-xs font-semibold uppercase tracking-[0.22em]"
              style={{ color: MUTED }}
            >
              Start here
            </p>
            <h1 className="text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
              Justin Torre
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed md:text-xl" style={{ color: "#3d3831" }}>
              This whole page is one continuous line. So was the last few years:
              start a company, open-source it, scale it, land it somewhere good.
            </p>
            <dl className="mt-10 grid grid-cols-2 gap-x-6 gap-y-6 border-t pt-8 sm:grid-cols-3 md:grid-cols-5" style={{ borderColor: "#e5dccd" }}>
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="order-last mt-1 text-xs" style={{ color: MUTED }}>
                    {s.label}
                  </dt>
                  <dd className="text-xl font-bold tracking-tight md:text-2xl">{s.value}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-3 text-xs" style={{ color: MUTED }}>
              From the Helicone run, 2023 to 2026.
            </p>
          </div>
        </section>

        {/* Now */}
        <Section title="Now" seg={SEG_RIGHT} at={1.0}>
          <p className="max-w-xl text-base leading-relaxed md:text-lg">
            Building the context layer for AI agents at{" "}
            <a href="https://mintlify.com" target="_blank" rel="noopener noreferrer" className="ink-link font-semibold underline">
              Mintlify
            </a>
            . Helicone joined Mintlify in July 2026.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed" style={{ color: MUTED }}>
            Before that I was co-founder and CEO of Helicone (YC W23),
            open-source LLM observability. We processed over 14 trillion tokens
            and watched a lot of agents think out loud.
          </p>
        </Section>

        {/* Projects */}
        <Section title="Projects" seg={SEG_LEFT} at={1.85}>
          <ul className="-mx-3">
            {updates.map((u) => {
              const inner = (
                <span className="row-hover flex items-baseline gap-4 rounded-lg px-3 py-3.5">
                  <span className="w-[4.6rem] shrink-0 text-xs tabular-nums" style={{ color: MUTED }}>
                    {u.date}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[15px] font-semibold leading-snug md:text-base">
                      {u.title}
                    </span>
                    {u.note && (
                      <span className="mt-1 block text-sm leading-relaxed" style={{ color: MUTED }}>
                        {u.note}
                      </span>
                    )}
                  </span>
                  <FiArrowUpRight className="row-arrow mt-0.5 shrink-0 self-start" size={16} style={{ color: "#b0a595" }} />
                </span>
              );
              return (
                <li key={u.title} className="border-b last:border-b-0" style={{ borderColor: "#eee5d6" }}>
                  {u.external ? (
                    <a href={u.href} target="_blank" rel="noopener noreferrer" className="block">
                      {inner}
                    </a>
                  ) : (
                    <Link href={u.href} className="block">
                      {inner}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </Section>

        {/* Writing */}
        <Section title="Writing" seg={SEG_RIGHT} at={2.7}>
          <p className="max-w-xl text-base leading-relaxed">
            Occasional posts on infrastructure and building in the open. Latest:{" "}
            <Link href="/blogs/clickhouse-rls-query-parameters" className="ink-link font-semibold underline">
              letting users query ClickHouse directly with raw SQL
            </Link>
            .
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/blogs"
              className="row-hover inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{ borderColor: "#dcd2c1" }}
            >
              All posts <FiArrowUpRight className="row-arrow" size={14} />
            </Link>
            <Link
              href="/videos"
              className="row-hover inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold"
              style={{ borderColor: "#dcd2c1" }}
            >
              Drone and engineering videos <FiArrowUpRight className="row-arrow" size={14} />
            </Link>
          </div>
        </Section>

        {/* Elsewhere */}
        <Section title="Elsewhere" seg={SEG_END} at={3.55}>
          <ul className="grid gap-1 sm:grid-cols-2">
            {socials.map(({ label, handle, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="row-hover flex items-center gap-3 rounded-lg px-3 py-2.5"
                >
                  <Icon size={16} style={{ color: "#8a7f70" }} />
                  <span className="text-sm font-semibold">{label}</span>
                  <span className="ml-auto text-xs" style={{ color: MUTED }}>
                    {handle}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Section>

        {/* End of the line */}
        <footer className="grid grid-cols-[44px_minmax(0,1fr)] md:grid-cols-[96px_minmax(0,1fr)] pb-16">
          <div className="relative h-16">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 96 100"
              preserveAspectRatio="none"
            >
              <path
                d="M48 0 C48 30 40 42 48 66"
                pathLength={1}
                className="seg"
                style={delay(4.3)}
                fill="none"
                stroke={ACCENT}
                strokeWidth={2.5}
                strokeLinecap="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <Node at={4.75} top="calc(66% - 6px)" />
          </div>
          <div className="rise flex h-16 items-center justify-between text-xs" style={{ ...delay(4.6), color: MUTED }}>
            <span>Drawn in one stroke, like a Tracer level.</span>
            <span>© {new Date().getFullYear()} Justin Torre</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
