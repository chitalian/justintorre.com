import Link from "next/link";
import type { Metadata } from "next";
import { FaGithub, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { SiYcombinator } from "react-icons/si";

export const metadata: Metadata = {
  title: "justin@mintlify: ~",
  description:
    "Justin Torre. Building the context layer for AI agents at Mintlify. Previously co-founder and CEO of Helicone (YC W23).",
};

const GREEN = "#3dff88";
const GREEN_DIM = "#2a9d5c";
const AMBER = "#ffb454";
const BG = "#060907";
const BORDER = "#1c3626";

type Project = {
  perms: string;
  name: string;
  date: string;
  target: string;
  href: string;
  internal?: boolean;
};

const projects: Project[] = [
  {
    perms: "lrwxr-xr-x",
    name: "helicone-joins-mintlify",
    date: "jul 2026",
    target: "x.com/justinstorre",
    href: "https://x.com/justinstorre/status/2028878183949554127",
  },
  {
    perms: "lrwxr-xr-x",
    name: "tracer.app",
    date: "jul 2026",
    target: "apps.apple.com",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
  },
  {
    perms: "lrwxr-xr-x",
    name: "clickhouse-rls.md",
    date: "jul 2026",
    target: "~/blogs",
    href: "/blogs/clickhouse-rls-query-parameters",
    internal: true,
  },
  {
    perms: "lrwxr-xr-x",
    name: "helicone-relaunch",
    date: "jul 2023",
    target: "x.com/helicone_ai",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
  },
  {
    perms: "lrwxr-xr-x",
    name: "yc-w23-launch",
    date: "apr 2023",
    target: "ycombinator.com",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
  },
  {
    perms: "lrwxr-xr-x",
    name: "scale-hackathon-3rd",
    date: "feb 2023",
    target: "sfstandard.com",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
  },
];

type LogLine = {
  stamp: string;
  level: "INFO" | "SHIP" | "NEWS";
  text: string;
  href: string;
  internal?: boolean;
};

// tail order: oldest first, newest appended last
const logLines: LogLine[] = [
  {
    stamp: "2023-02-02 21:40",
    level: "INFO",
    text: 'placed 3rd at Scale AI hackathon. AI rap battle, long story',
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
  },
  {
    stamp: "2023-04-04 09:12",
    level: "SHIP",
    text: "launched Helicone at YC W23. open-source LLM observability",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
  },
  {
    stamp: "2023-07-31 10:02",
    level: "SHIP",
    text: "Helicone re-launch. new proxy, new dashboard",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
  },
  {
    stamp: "2026-07-02 14:26",
    level: "INFO",
    text: "wrote: let users query ClickHouse directly with raw SQL",
    href: "/blogs/clickhouse-rls-query-parameters",
    internal: true,
  },
  {
    stamp: "2026-07-08 19:55",
    level: "SHIP",
    text: "released Tracer for iOS. one-stroke puzzles, 60+ levels, no ads, no tracking",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
  },
  {
    stamp: "2026-07-10 08:00",
    level: "NEWS",
    text: "Helicone joins Mintlify",
    href: "https://x.com/justinstorre/status/2028878183949554127",
  },
];

const stats: [string, string][] = [
  ["tokens processed", "14T+"],
  ["signups", "30k+"],
  ["end users tracked", "36M+"],
  ["github stars", "5.2k"],
  ["ARR", "$1M+"],
];

const socials = [
  { key: "x", label: "twitter/x", href: "https://twitter.com/justintorre", Icon: FaTwitter },
  { key: "g", label: "github", href: "https://github.com/chitalian", Icon: FaGithub },
  { key: "in", label: "linkedin", href: "https://www.linkedin.com/in/justintorre/", Icon: FaLinkedinIn },
  { key: "yt", label: "youtube", href: "https://www.youtube.com/@justintorre694/featured", Icon: FaYoutube },
  { key: "yc", label: "ycombinator", href: "https://www.ycombinator.com/companies/helicone", Icon: SiYcombinator },
];

function Prompt({ cmd }: { cmd: string }) {
  return (
    <p className="leading-relaxed">
      <span style={{ color: GREEN_DIM }}>justin@mintlify</span>
      <span style={{ color: GREEN_DIM }}>:</span>
      <span style={{ color: AMBER }}>~</span>
      <span style={{ color: GREEN_DIM }}>$ </span>
      <span style={{ color: GREEN }}>{cmd}</span>
    </p>
  );
}

function PaneTitle({ index, name }: { index: number; name: string }) {
  return (
    <div
      className="flex items-center gap-0 px-2 py-1 text-xs select-none"
      style={{ borderBottom: `1px solid ${BORDER}`, color: GREEN_DIM }}
      aria-hidden="true"
    >
      <span className="truncate">
        ┌─[ <span style={{ color: AMBER }}>{index}:{name}</span> ]
      </span>
      <span className="flex-1 overflow-hidden whitespace-nowrap">
        ─────────────────────────────────────────────────────────────────────
      </span>
      <span>┐</span>
    </div>
  );
}

export default function TerminalHome() {
  return (
    <main
      className="min-h-screen w-full font-mono text-sm md:text-[15px] antialiased"
      style={{ backgroundColor: BG, color: GREEN }}
    >
      <style>{`
        @keyframes v1-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes v1-line-in { from { opacity: 0; transform: translateY(3px); } to { opacity: 1; transform: none; } }
        .v1-cursor { display: inline-block; width: 0.6em; height: 1.1em; vertical-align: text-bottom; background: ${GREEN}; animation: v1-blink 1.1s steps(1) infinite; }
        .v1-log-line { opacity: 0; animation: v1-line-in 0.25s ease-out forwards; }
        .v1-glow { text-shadow: 0 0 8px rgba(61, 255, 136, 0.25); }
        .v1-scanlines { pointer-events: none; position: fixed; inset: 0; z-index: 40;
          background: repeating-linear-gradient(to bottom, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 2px, rgba(0,0,0,0.16) 3px); }
        .v1-row:hover, .v1-row:focus-visible { background: ${GREEN}; color: ${BG} !important; outline: none; }
        .v1-row:hover *, .v1-row:focus-visible * { color: ${BG} !important; }
        .v1-key:hover, .v1-key:focus-visible { background: ${AMBER}; color: ${BG} !important; outline: none; }
        .v1-key:hover * , .v1-key:focus-visible * { color: ${BG} !important; }
        @media (prefers-reduced-motion: reduce) {
          .v1-cursor { animation: none; }
          .v1-log-line { animation: none; opacity: 1; }
        }
      `}</style>

      <div className="v1-scanlines" aria-hidden="true" />

      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-2 py-2 md:px-4 md:py-3">
        {/* top bar */}
        <header
          className="flex items-center justify-between gap-2 px-2 py-1 text-xs md:text-sm"
          style={{ backgroundColor: "#0c140e", border: `1px solid ${BORDER}` }}
        >
          <span className="truncate">
            <span style={{ color: AMBER }}>[main]</span>{" "}
            <span style={{ color: GREEN_DIM }}>0:whoami</span>{" "}
            <span className="hidden sm:inline" style={{ color: GREEN_DIM }}>
              1:projects
            </span>{" "}
            <span className="hidden sm:inline" style={{ color: GREEN }}>
              2:updates*
            </span>
          </span>
          <span className="shrink-0" style={{ color: GREEN_DIM }}>
            <span className="hidden md:inline">tmux 3.4 | </span>
            <span style={{ color: GREEN }}>▮▮▮▯</span> 78% | 08:00
          </span>
        </header>

        {/* panes */}
        <div className="mt-2 grid flex-1 grid-cols-1 gap-2 lg:grid-cols-5">
          {/* whoami */}
          <section
            className="lg:col-span-2 flex flex-col"
            style={{ border: `1px solid ${BORDER}`, backgroundColor: "#070c09" }}
            aria-label="whoami"
          >
            <PaneTitle index={0} name="whoami" />
            <div className="flex-1 space-y-4 p-3 md:p-4">
              <div>
                <Prompt cmd="whoami" />
                <h1 className="v1-glow mt-1 text-2xl font-bold tracking-tight md:text-3xl">
                  Justin Torre
                </h1>
              </div>

              <div>
                <Prompt cmd="cat now.txt" />
                <p className="mt-1 leading-relaxed" style={{ color: "#9fffc4" }}>
                  Building the context layer for AI agents at{" "}
                  <a
                    href="https://mintlify.com"
                    className="underline underline-offset-4"
                    style={{ color: AMBER }}
                  >
                    Mintlify
                  </a>
                  . Helicone joined Mintlify in March 2026.
                </p>
              </div>

              <div>
                <Prompt cmd="cat prev.txt" />
                <p className="mt-1 leading-relaxed" style={{ color: "#9fffc4" }}>
                  Co-founder and CEO of Helicone (YC W23). Open-source LLM
                  observability, from first commit to exit.
                </p>
              </div>

              <div>
                <Prompt cmd="helicone --stats" />
                <dl className="mt-1">
                  {stats.map(([k, v]) => (
                    <div key={k} className="flex items-baseline gap-2 leading-relaxed">
                      <dt style={{ color: GREEN_DIM }}>{k}</dt>
                      <span
                        aria-hidden="true"
                        className="flex-1 overflow-hidden whitespace-nowrap tracking-widest"
                        style={{ color: "#173322" }}
                      >
                        ....................................
                      </span>
                      <dd className="v1-glow font-bold" style={{ color: AMBER }}>
                        {v}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div>
                <Prompt cmd="ls ~/links" />
                <ul className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                  {socials.map(({ key, label, href, Icon }) => (
                    <li key={key}>
                      <a
                        href={href}
                        className="v1-row inline-flex items-center gap-1.5 px-1 leading-relaxed"
                        style={{ color: GREEN }}
                      >
                        <Icon aria-hidden="true" className="text-xs" />
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <p aria-hidden="true">
                <span style={{ color: GREEN_DIM }}>justin@mintlify</span>
                <span style={{ color: GREEN_DIM }}>:</span>
                <span style={{ color: AMBER }}>~</span>
                <span style={{ color: GREEN_DIM }}>$ </span>
                <span className="v1-cursor" />
              </p>
            </div>
          </section>

          <div className="lg:col-span-3 flex flex-col gap-2">
            {/* projects */}
            <section
              className="flex flex-col"
              style={{ border: `1px solid ${BORDER}`, backgroundColor: "#070c09" }}
              aria-label="projects"
            >
              <PaneTitle index={1} name="projects" />
              <div className="p-3 md:p-4">
                <Prompt cmd="ls -lt ~/projects" />
                <p className="leading-relaxed" style={{ color: GREEN_DIM }}>
                  total {projects.length}
                </p>
                <ul className="mt-1">
                  {projects.map((p) => {
                    const row = (
                      <span className="flex flex-wrap items-baseline gap-x-3 md:flex-nowrap">
                        <span className="hidden shrink-0 md:inline" style={{ color: GREEN_DIM }}>
                          {p.perms}
                        </span>
                        <span className="w-[4.5rem] shrink-0" style={{ color: GREEN_DIM }}>
                          {p.date}
                        </span>
                        <span className="v1-glow font-bold">{p.name}</span>
                        <span className="shrink-0" style={{ color: AMBER }}>
                          -&gt;
                        </span>
                        <span className="truncate" style={{ color: GREEN_DIM }}>
                          {p.target}
                        </span>
                      </span>
                    );
                    return (
                      <li key={p.name}>
                        {p.internal ? (
                          <Link href={p.href} className="v1-row block px-1 py-0.5 leading-relaxed">
                            {row}
                          </Link>
                        ) : (
                          <a href={p.href} className="v1-row block px-1 py-0.5 leading-relaxed">
                            {row}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>

            {/* updates */}
            <section
              className="flex flex-1 flex-col"
              style={{ border: `1px solid ${BORDER}`, backgroundColor: "#070c09" }}
              aria-label="updates"
            >
              <PaneTitle index={2} name="updates" />
              <div className="flex-1 p-3 md:p-4">
                <Prompt cmd="tail -f ~/updates.log" />
                <ul className="mt-1">
                  {logLines.map((l, i) => {
                    const line = (
                      <>
                        <span className="shrink-0" style={{ color: GREEN_DIM }}>
                          [{l.stamp}]
                        </span>{" "}
                        <span
                          className="shrink-0 font-bold"
                          style={{ color: l.level === "NEWS" ? AMBER : GREEN }}
                        >
                          {l.level}
                        </span>{" "}
                        <span style={{ color: "#9fffc4" }}>{l.text}</span>
                      </>
                    );
                    const cls = "v1-row v1-log-line block px-1 py-0.5 leading-relaxed";
                    const delay = { animationDelay: `${0.35 + i * 0.45}s` };
                    return (
                      <li key={l.stamp}>
                        {l.internal ? (
                          <Link href={l.href} className={cls} style={delay}>
                            {line}
                          </Link>
                        ) : (
                          <a href={l.href} className={cls} style={delay}>
                            {line}
                          </a>
                        )}
                      </li>
                    );
                  })}
                </ul>
                <p
                  className="v1-log-line mt-1 px-1"
                  style={{ animationDelay: `${0.35 + logLines.length * 0.45}s` }}
                  aria-hidden="true"
                >
                  <span className="v1-cursor" />
                </p>
              </div>
            </section>
          </div>
        </div>

        {/* status bar */}
        <footer
          className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 px-2 py-1 text-xs md:text-sm"
          style={{ backgroundColor: "#0c140e", border: `1px solid ${BORDER}` }}
        >
          <nav className="flex flex-wrap items-center gap-x-3 gap-y-1" aria-label="keyboard shortcuts">
            <Link href="/blogs" className="v1-key px-1">
              <span style={{ color: AMBER }}>[b]</span>
              <span style={{ color: GREEN }}>log</span>
            </Link>
            <Link href="/videos" className="v1-key px-1">
              <span style={{ color: AMBER }}>[v]</span>
              <span style={{ color: GREEN }}>ideos</span>
            </Link>
            {socials.map(({ key, label, href }) => (
              <a key={key} href={href} className="v1-key hidden px-1 sm:inline">
                <span style={{ color: AMBER }}>[{key}]</span>
                <span style={{ color: GREEN_DIM }}> {label}</span>
              </a>
            ))}
          </nav>
          <span className="shrink-0" style={{ color: GREEN_DIM }}>
            justin@mintlify | uptime: since 2023
          </span>
        </footer>
      </div>
    </main>
  );
}
