import Link from "next/link";
import {
  FaXTwitter,
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaYCombinator,
} from "react-icons/fa6";

const HIGH_SCORES = [
  { rank: "1ST", score: "14T+", feat: "TOKENS PROCESSED" },
  { rank: "2ND", score: "36M+", feat: "END USERS TRACKED" },
  { rank: "3RD", score: "30K+", feat: "SIGNUPS" },
  { rank: "4TH", score: "5.2K", feat: "GITHUB STARS" },
  { rank: "5TH", score: "$1M+", feat: "ARR" },
];

const STAGES = [
  {
    level: "LV.06",
    name: "Helicone joins Mintlify",
    year: "2026",
    blurb: "The observability layer meets the context layer. New game plus.",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
    accent: "magenta",
  },
  {
    level: "LV.05",
    name: "Tracer: One Line Puzzle",
    year: "2026",
    blurb: "iOS one-stroke puzzle game. 60+ levels, no ads, no tracking.",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
    accent: "cyan",
  },
  {
    level: "LV.04",
    name: "Raw SQL for your users",
    year: "2026",
    blurb: "Letting users query ClickHouse directly, safely. A blog post.",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
    accent: "orange",
  },
  {
    level: "LV.03",
    name: "Helicone Re-launch",
    year: "2023",
    blurb: "Open-source LLM observability, rebuilt and shipped again.",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
    accent: "cyan",
  },
  {
    level: "LV.02",
    name: "YC W23",
    year: "2023",
    blurb: "Helicone launches out of Y Combinator's winter batch.",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
    accent: "magenta",
  },
  {
    level: "LV.01",
    name: "Scale AI Hackathon",
    year: "2023",
    blurb: "3rd place. Tom Brady vs. Gisele in an AI rap battle. Long story.",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
    accent: "orange",
  },
];

const SOCIALS = [
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

const ACCENTS: Record<string, string> = {
  magenta: "v11-card-magenta",
  cyan: "v11-card-cyan",
  orange: "v11-card-orange",
};

export default function V11Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#0b0716] text-slate-200 selection:bg-fuchsia-500/40">
      <style>{`
        @keyframes v11-grid-scroll { from { background-position: 0 0; } to { background-position: 0 72px; } }
        @keyframes v11-blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes v11-rec { 0%, 60% { opacity: 1; } 61%, 100% { opacity: 0.15; } }
        .v11-grid {
          background-image:
            repeating-linear-gradient(to right, rgba(255, 41, 148, 0.45) 0 2px, transparent 2px 72px),
            repeating-linear-gradient(to bottom, rgba(56, 231, 255, 0.32) 0 2px, transparent 2px 72px);
          transform: perspective(340px) rotateX(62deg);
          transform-origin: top center;
          animation: v11-grid-scroll 2.6s linear infinite;
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 22%);
          mask-image: linear-gradient(to bottom, transparent, black 22%);
        }
        .v11-sun {
          background: linear-gradient(180deg, #ffd83d 0%, #ff9a3d 38%, #ff2994 78%, #b8127a 100%);
          box-shadow: 0 0 60px rgba(255, 122, 61, 0.4), 0 0 140px rgba(255, 41, 148, 0.3);
        }
        .v11-sun-slices {
          background: repeating-linear-gradient(
            to bottom,
            transparent 0 18px, #0b0716 18px 21px,
            transparent 21px 36px, #0b0716 36px 41px,
            transparent 41px 55px, #0b0716 55px 62px,
            transparent 62px 75px, #0b0716 75px 84px
          );
        }
        .v11-chrome {
          background: linear-gradient(180deg, #ffffff 0%, #dfe2f2 32%, #8a90bd 47%, #ffffff 52%, #c9cef0 68%, #7d84b6 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          filter:
            drop-shadow(0 0 2px rgba(255, 255, 255, 0.35))
            drop-shadow(0 0 14px rgba(255, 41, 148, 0.55))
            drop-shadow(0 0 34px rgba(56, 231, 255, 0.35));
        }
        .v11-neon-cyan { color: #7deeff; text-shadow: 0 0 8px rgba(56, 231, 255, 0.7), 0 0 24px rgba(56, 231, 255, 0.35); }
        .v11-neon-magenta { color: #ff6ec2; text-shadow: 0 0 8px rgba(255, 41, 148, 0.7), 0 0 24px rgba(255, 41, 148, 0.35); }
        .v11-neon-orange { color: #ffb46b; text-shadow: 0 0 8px rgba(255, 138, 61, 0.7), 0 0 24px rgba(255, 138, 61, 0.35); }
        .v11-scanlines {
          background: repeating-linear-gradient(to bottom, rgba(255, 255, 255, 0.028) 0 1px, transparent 1px 3px);
        }
        .v11-blink { animation: v11-blink 1.1s step-end infinite; }
        .v11-rec-dot { animation: v11-rec 1.6s linear infinite; }
        .v11-card {
          border: 1px solid;
          transition: transform 180ms ease, box-shadow 180ms ease, background-color 180ms ease;
        }
        .v11-card-magenta { border-color: rgba(255, 41, 148, 0.55); box-shadow: 0 0 10px rgba(255, 41, 148, 0.14), inset 0 0 18px rgba(255, 41, 148, 0.06); }
        .v11-card-magenta:hover, .v11-card-magenta:focus-visible { box-shadow: 0 0 26px rgba(255, 41, 148, 0.42), inset 0 0 24px rgba(255, 41, 148, 0.1); }
        .v11-card-cyan { border-color: rgba(56, 231, 255, 0.5); box-shadow: 0 0 10px rgba(56, 231, 255, 0.12), inset 0 0 18px rgba(56, 231, 255, 0.05); }
        .v11-card-cyan:hover, .v11-card-cyan:focus-visible { box-shadow: 0 0 26px rgba(56, 231, 255, 0.4), inset 0 0 24px rgba(56, 231, 255, 0.09); }
        .v11-card-orange { border-color: rgba(255, 138, 61, 0.55); box-shadow: 0 0 10px rgba(255, 138, 61, 0.13), inset 0 0 18px rgba(255, 138, 61, 0.06); }
        .v11-card-orange:hover, .v11-card-orange:focus-visible { box-shadow: 0 0 26px rgba(255, 138, 61, 0.42), inset 0 0 24px rgba(255, 138, 61, 0.1); }
        .v11-card:hover { transform: scale(1.02); background-color: rgba(255, 255, 255, 0.02); }
        .v11-icon-btn { transition: box-shadow 160ms ease, color 160ms ease, transform 160ms ease; }
        .v11-icon-btn:hover, .v11-icon-btn:focus-visible {
          color: #ffffff;
          transform: translateY(-2px);
          box-shadow: 0 0 18px rgba(56, 231, 255, 0.45), 0 0 34px rgba(255, 41, 148, 0.3);
        }
        @media (prefers-reduced-motion: reduce) {
          .v11-grid, .v11-blink, .v11-rec-dot { animation-play-state: paused; }
          .v11-card:hover { transform: none; }
        }
      `}</style>

      {/* VHS overlay */}
      <div aria-hidden className="v11-scanlines pointer-events-none fixed inset-0 z-40" />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 top-0 z-40 flex items-center justify-between px-4 py-3 font-mono text-[11px] tracking-[0.2em] text-slate-400 sm:px-6"
      >
        <span className="flex items-center gap-2">
          <span className="v11-rec-dot inline-block h-2 w-2 rounded-full bg-red-500" />
          REC
        </span>
        <span>SP 0:07:14 &middot; TRK 11</span>
      </div>

      {/* ================= HERO ================= */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden px-6 pb-24 pt-24">
        {/* sky */}
        <div
          aria-hidden
          className="absolute inset-0 bg-[linear-gradient(180deg,#0b0716_0%,#171040_45%,#31135e_72%,#0b0716_100%)]"
        />
        {/* sun */}
        <div aria-hidden className="absolute left-1/2 top-[46%] -translate-x-1/2 -translate-y-1/2">
          <div className="v11-sun relative h-56 w-56 rounded-full sm:h-72 sm:w-72">
            <div className="v11-sun-slices absolute inset-x-0 bottom-0 top-1/3 rounded-b-full" />
          </div>
        </div>
        {/* grid floor */}
        <div aria-hidden className="absolute inset-x-0 bottom-0 h-[42%] overflow-hidden">
          <div className="v11-grid absolute -left-1/2 top-0 h-[200%] w-[200%]" />
          <div className="absolute inset-x-0 top-0 h-px bg-fuchsia-400/70 shadow-[0_0_18px_rgba(255,41,148,0.8)]" />
        </div>

        <div className="relative z-10 flex flex-col items-center text-center">
          <p className="v11-neon-cyan mb-5 font-mono text-xs tracking-[0.45em]">
            PLAYER 1 &middot; PRESS START
          </p>
          <h1 className="v11-chrome text-6xl font-black uppercase leading-[0.9] tracking-tight sm:text-8xl lg:text-9xl">
            Justin
            <br />
            Torre
          </h1>
          <p className="v11-neon-magenta mt-7 max-w-md text-lg italic sm:text-xl">
            building the context layer for AI agents at Mintlify
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-300/90 sm:text-base">
            Previously co-founder &amp; CEO of Helicone (YC W23), open-source LLM
            observability. Helicone joined Mintlify in March 2026.
          </p>
        </div>
      </section>

      {/* ================= HIGH SCORES ================= */}
      <section className="relative z-10 mx-auto w-full max-w-3xl px-6 py-20">
        <h2 className="v11-neon-cyan text-center font-mono text-2xl font-bold tracking-[0.35em] sm:text-3xl">
          HIGH SCORES
        </h2>
        <p className="mt-2 text-center font-mono text-xs tracking-[0.25em] text-slate-500">
          THE HELICONE RUN &middot; 2023&ndash;2026
        </p>
        <div className="v11-card v11-card-cyan mt-8 rounded-lg bg-[#0e0a20]/80 p-4 sm:p-6">
          <table className="w-full border-collapse font-mono">
            <thead>
              <tr className="text-left text-[11px] tracking-[0.3em] text-slate-500">
                <th className="pb-3 pr-3 font-normal">RANK</th>
                <th className="pb-3 pr-3 font-normal">SCORE</th>
                <th className="pb-3 font-normal">FEAT</th>
              </tr>
            </thead>
            <tbody>
              {HIGH_SCORES.map((row, i) => (
                <tr
                  key={row.rank}
                  className="border-t border-white/5 text-sm sm:text-base"
                >
                  <td className="v11-neon-orange py-3 pr-3">{row.rank}</td>
                  <td
                    className={`py-3 pr-3 font-bold ${
                      i === 0 ? "v11-neon-magenta text-lg sm:text-xl" : "text-slate-100"
                    }`}
                  >
                    {row.score}
                  </td>
                  <td className="py-3 tracking-wider text-slate-400">{row.feat}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ================= SELECT STAGE ================= */}
      <section className="relative z-10 mx-auto w-full max-w-5xl px-6 py-20">
        <h2 className="v11-neon-magenta text-center font-mono text-2xl font-bold tracking-[0.35em] sm:text-3xl">
          SELECT STAGE
        </h2>
        <p className="mt-2 text-center font-mono text-xs tracking-[0.25em] text-slate-500">
          NEWEST LEVELS FIRST &middot; ALL UNLOCKED
        </p>
        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {STAGES.map((stage) => {
            const inner = (
              <>
                <div className="flex items-baseline justify-between font-mono text-xs tracking-[0.25em]">
                  <span
                    className={
                      stage.accent === "magenta"
                        ? "v11-neon-magenta"
                        : stage.accent === "cyan"
                        ? "v11-neon-cyan"
                        : "v11-neon-orange"
                    }
                  >
                    {stage.level}
                  </span>
                  <span className="text-slate-500">{stage.year}</span>
                </div>
                <h3 className="mt-4 text-lg font-bold text-slate-50">{stage.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {stage.blurb}
                </p>
                <p className="mt-5 font-mono text-[11px] tracking-[0.3em] text-slate-500">
                  INSERT COIN &rarr;
                </p>
              </>
            );
            const cls = `v11-card ${ACCENTS[stage.accent]} block rounded-lg bg-[#0e0a20]/70 p-5 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300`;
            return stage.external ? (
              <a
                key={stage.level}
                href={stage.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <Link key={stage.level} href={stage.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>

        {/* side quests */}
        <div className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-8">
          <span className="font-mono text-[11px] tracking-[0.3em] text-slate-500">
            SIDE QUESTS
          </span>
          <Link
            href="/blogs"
            className="v11-neon-cyan font-mono text-sm tracking-[0.2em] underline-offset-4 hover:underline"
          >
            BLOG
          </Link>
          <Link
            href="/videos"
            className="v11-neon-orange font-mono text-sm tracking-[0.2em] underline-offset-4 hover:underline"
          >
            VIDEOS &middot; DRONES &amp; ENGINEERING
          </Link>
        </div>
      </section>

      {/* ================= CONTINUE? ================= */}
      <footer className="relative z-10 mx-auto w-full max-w-3xl px-6 pb-20 pt-10 text-center">
        <div className="mx-auto mb-10 h-px w-40 bg-gradient-to-r from-transparent via-fuchsia-500/70 to-transparent" />
        <h2 className="v11-neon-orange font-mono text-2xl font-bold tracking-[0.35em] sm:text-3xl">
          CONTINUE?
          <span className="v11-blink ml-2 inline-block h-6 w-3 translate-y-0.5 bg-orange-300 align-baseline sm:h-7" />
        </h2>
        <p className="mt-3 font-mono text-xs tracking-[0.25em] text-slate-500">
          9 &hellip; 8 &hellip; 7 &hellip; pick a channel
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          {SOCIALS.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              title={label}
              className="v11-icon-btn flex h-12 w-12 items-center justify-center rounded-md border border-cyan-300/40 bg-[#0e0a20]/80 text-xl text-cyan-200/90 outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
            >
              <Icon aria-hidden />
            </a>
          ))}
        </div>
        <p className="mt-12 font-mono text-[11px] tracking-[0.3em] text-slate-600">
          &copy; 2026 JUSTIN TORRE &middot; BE KIND, REWIND
        </p>
      </footer>
    </main>
  );
}
