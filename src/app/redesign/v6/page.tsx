"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FaGithub,
  FaXTwitter,
  FaLinkedin,
  FaYoutube,
  FaPenNib,
  FaVideo,
  FaYCombinator,
  FaHandshake,
  FaGamepad,
  FaDatabase,
  FaRocket,
  FaMicrophone,
  FaWifi,
  FaBatteryFull,
} from "react-icons/fa6";

const projects = [
  {
    icon: FaHandshake,
    iconColor: "text-emerald-400",
    name: "Helicone joins Mintlify",
    date: "Jul 2026",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
  },
  {
    icon: FaGamepad,
    iconColor: "text-sky-400",
    name: "Tracer: One Line Puzzle",
    date: "Jul 2026",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
  },
  {
    icon: FaDatabase,
    iconColor: "text-amber-400",
    name: "Querying ClickHouse with raw SQL",
    date: "Jul 2026",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
  },
  {
    icon: FaRocket,
    iconColor: "text-rose-400",
    name: "Helicone Re-launch",
    date: "Jul 2023",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
  },
  {
    icon: FaYCombinator,
    iconColor: "text-orange-500",
    name: "YC W23 launch",
    date: "Apr 2023",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
  },
  {
    icon: FaMicrophone,
    iconColor: "text-violet-400",
    name: "Scale AI Hackathon, 3rd place",
    date: "Feb 2023",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
  },
];

const logLines = [
  { t: "2026-07-08 09:14", tag: "SHIP", msg: "Helicone joins Mintlify. Building the context layer for AI agents." },
  { t: "2026-07-02 21:47", tag: "SHIP", msg: "Tracer hits the App Store. 60+ levels, no ads, no tracking." },
  { t: "2026-07-01 11:02", tag: "POST", msg: "Wrote up ClickHouse row-level security with query parameters." },
  { t: "2023-07-31 08:00", tag: "SHIP", msg: "Helicone re-launch. Open-source LLM observability, take two." },
  { t: "2023-04-06 10:30", tag: "MILESTONE", msg: "Launched out of YC W23." },
];

const dockApps = [
  { icon: FaGithub, label: "GitHub", href: "https://github.com/chitalian", external: true },
  { icon: FaXTwitter, label: "X", href: "https://twitter.com/justintorre", external: true },
  { icon: FaLinkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/justintorre/", external: true },
  { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@justintorre694/featured", external: true },
  { icon: FaYCombinator, label: "Y Combinator", href: "https://www.ycombinator.com/companies/helicone", external: true },
  { icon: FaPenNib, label: "Blog", href: "/blogs", external: false },
  { icon: FaVideo, label: "Videos", href: "/videos", external: false },
];

function TrafficLights() {
  return (
    <span className="flex items-center gap-1.5" aria-hidden="true">
      <span className="h-3 w-3 rounded-full bg-[#ff5f57] ring-1 ring-black/20" />
      <span className="h-3 w-3 rounded-full bg-[#febc2e] ring-1 ring-black/20" />
      <span className="h-3 w-3 rounded-full bg-[#28c840] ring-1 ring-black/20" />
    </span>
  );
}

function Window({
  title,
  className = "",
  children,
}: {
  title: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      className={`group rounded-xl border border-white/10 bg-[#15171f]/90 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.65)] backdrop-blur-md transition-all duration-300 hover:z-30 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_28px_70px_-12px_rgba(0,0,0,0.85)] ${className}`}
    >
      <header className="flex items-center gap-3 rounded-t-xl border-b border-white/[0.07] bg-white/[0.04] px-3.5 py-2.5">
        <TrafficLights />
        <h2 className="flex-1 text-center text-xs font-medium tracking-wide text-zinc-400 group-hover:text-zinc-200">
          {title}
        </h2>
        <span className="w-[52px]" aria-hidden="true" />
      </header>
      {children}
    </section>
  );
}

export default function JustinOS() {
  const [clock, setClock] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const day = d.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
      const time = d.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" });
      setClock(`${day}  ${time}`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#0b0d14] font-sans text-zinc-100">
      <style>{`
        @keyframes traceLine {
          0% { stroke-dashoffset: 340; }
          55% { stroke-dashoffset: 0; }
          75% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -340; }
        }
        .trace-path { stroke-dasharray: 340; animation: traceLine 6s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) { .trace-path { animation: none; stroke-dashoffset: 0; } }
      `}</style>

      {/* Wallpaper */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#101322] via-[#141a2e] to-[#0b0d14]" />
        <div className="absolute -top-32 left-1/4 h-[480px] w-[640px] rounded-full bg-indigo-600/15 blur-[120px]" />
        <div className="absolute bottom-0 right-1/5 h-[380px] w-[520px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="absolute top-1/3 -left-24 h-[300px] w-[360px] rounded-full bg-fuchsia-600/[0.07] blur-[100px]" />
      </div>

      {/* Menu bar */}
      <nav className="relative z-40 flex items-center gap-1 border-b border-white/[0.06] bg-black/40 px-3 py-1.5 text-[13px] backdrop-blur-xl sm:px-5">
        <span className="mr-2 font-semibold tracking-tight text-white"> justinOS</span>
        <span className="hidden cursor-default rounded px-2 py-0.5 text-zinc-300 hover:bg-white/10 hover:text-white sm:inline">
          File
        </span>
        <a href="#projects" className="rounded px-2 py-0.5 text-zinc-300 hover:bg-white/10 hover:text-white">
          Projects
        </a>
        <Link href="/blogs" className="rounded px-2 py-0.5 text-zinc-300 hover:bg-white/10 hover:text-white">
          Blog
        </Link>
        <span className="flex-1" />
        <FaWifi className="mx-1.5 hidden h-3.5 w-3.5 text-zinc-400 sm:block" aria-hidden="true" />
        <FaBatteryFull className="mx-1.5 hidden h-4 w-4 text-zinc-400 sm:block" aria-hidden="true" />
        <time className="whitespace-pre tabular-nums text-zinc-300" suppressHydrationWarning>
          {clock || " "}
        </time>
      </nav>

      {/* Desktop */}
      <main className="relative z-10 mx-auto max-w-[1400px] space-y-5 px-4 pb-40 pt-6 lg:h-[780px] lg:space-y-0 lg:px-0 lg:pb-0 lg:pt-0">
        {/* about.txt */}
        <Window title="about.txt" className="lg:absolute lg:left-[4%] lg:top-[6%] lg:w-[400px] lg:-rotate-[0.4deg]">
          <div className="px-5 py-5 font-mono text-[13px] leading-relaxed text-zinc-300">
            <h1 className="mb-1 font-sans text-xl font-semibold tracking-tight text-white">Justin Torre</h1>
            <p className="mb-3 text-zinc-400">San Francisco. Builds things, flies drones.</p>
            <p className="mb-3">
              <span className="text-emerald-400">now:</span> building the context layer for AI agents at{" "}
              <span className="text-white">Mintlify</span>. Helicone joined Mintlify in March 2026.
            </p>
            <p>
              <span className="text-sky-400">prev:</span> co-founder and CEO of{" "}
              <span className="text-white">Helicone</span> (YC W23), open-source LLM observability.
            </p>
            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2 border-t border-white/[0.07] pt-4 text-xs sm:grid-cols-3">
              {[
                ["14T+", "tokens"],
                ["36M+", "end users"],
                ["30k+", "signups"],
                ["5.2k", "GH stars"],
                ["$1M+", "ARR"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-sans text-base font-semibold text-white">{n}</div>
                  <div className="text-zinc-500">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </Window>

        {/* ~/projects */}
        <Window title="~/projects" className="scroll-mt-16 lg:absolute lg:left-[36%] lg:top-[10%] lg:w-[470px] lg:rotate-[0.3deg]">
          <div id="projects" className="p-2">
            {projects.map((p) => {
              const Icon = p.icon;
              const row = (
                <>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-white/[0.06]">
                    <Icon className={`h-4 w-4 ${p.iconColor}`} aria-hidden="true" />
                  </span>
                  <span className="flex-1 truncate text-sm text-zinc-200 group-hover/row:text-white">{p.name}</span>
                  <span className="shrink-0 font-mono text-xs text-zinc-500">{p.date}</span>
                </>
              );
              const cls =
                "group/row flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-indigo-500/15";
              return p.external ? (
                <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={cls}>
                  {row}
                </a>
              ) : (
                <Link key={p.name} href={p.href} className={cls}>
                  {row}
                </Link>
              );
            })}
            <div className="border-t border-white/[0.06] px-3 py-2 font-mono text-[11px] text-zinc-500">
              6 items, plenty of disk space
            </div>
          </div>
        </Window>

        {/* updates.log */}
        <Window title="updates.log" className="lg:absolute lg:left-[9%] lg:top-[56%] lg:w-[520px] lg:rotate-[0.2deg]">
          <div className="space-y-2 overflow-x-auto px-5 py-4 font-mono text-xs leading-relaxed">
            {logLines.map((l) => (
              <p key={l.t} className="whitespace-nowrap lg:whitespace-normal">
                <span className="text-zinc-600">{l.t}</span>{" "}
                <span className={l.tag === "SHIP" ? "text-emerald-400" : l.tag === "POST" ? "text-sky-400" : "text-amber-400"}>
                  [{l.tag}]
                </span>{" "}
                <span className="text-zinc-300">{l.msg}</span>
              </p>
            ))}
            <p className="text-zinc-600">
              <span className="animate-pulse text-zinc-300">▍</span> tail -f
            </p>
          </div>
        </Window>

        {/* tracer.app */}
        <Window title="tracer.app" className="lg:absolute lg:right-[5%] lg:top-[48%] lg:w-[270px] lg:rotate-[0.6deg]">
          <a
            href="https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-5 py-4"
          >
            <svg viewBox="0 0 120 120" className="mx-auto h-32 w-32" role="img" aria-label="One-stroke puzzle animation">
              {[20, 60, 100].map((x) =>
                [20, 60, 100].map((y) => <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" className="fill-zinc-600" />)
              )}
              <path
                d="M20 20 L100 20 L100 60 L20 60 L20 100 L100 100"
                fill="none"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="trace-path stroke-sky-400"
              />
            </svg>
            <p className="mt-2 text-center text-sm text-zinc-300">
              One stroke, 60+ levels. <span className="text-zinc-500">No ads, no tracking.</span>
            </p>
            <p className="mt-2 text-center text-xs font-medium text-sky-400 hover:text-sky-300">Get it on iOS →</p>
          </a>
        </Window>
      </main>

      {/* Dock */}
      <footer className="fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
        <div className="flex items-end gap-2 rounded-2xl border border-white/10 bg-white/[0.07] px-3 py-2.5 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:gap-3 sm:px-4">
          {dockApps.map((app) => {
            const Icon = app.icon;
            const inner = (
              <>
                <Icon className="h-5 w-5 text-zinc-100 sm:h-6 sm:w-6" aria-hidden="true" />
                <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-black/80 px-2 py-1 text-[11px] text-zinc-200 opacity-0 transition-opacity group-hover/dock:opacity-100">
                  {app.label}
                </span>
              </>
            );
            const cls =
              "group/dock relative flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/10 transition-transform duration-200 hover:-translate-y-1.5 hover:scale-110 hover:bg-white/20 sm:h-12 sm:w-12";
            return app.external ? (
              <a key={app.label} href={app.href} target="_blank" rel="noopener noreferrer" aria-label={app.label} className={cls}>
                {inner}
              </a>
            ) : (
              <Link key={app.label} href={app.href} aria-label={app.label} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </footer>
    </div>
  );
}
