import Link from "next/link";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaYCombinator,
  FaArrowRight,
  FaArrowUpRightFromSquare,
} from "react-icons/fa6";

const stats = [
  "14T+ tokens processed",
  "36M+ end users tracked",
  "30k+ signups",
  "5.2k GitHub stars",
  "$1M+ ARR",
];

type Project = {
  title: string;
  date: string;
  description: string;
  href: string;
  external: boolean;
  tag: string;
  glow: string; // rgba glow color
  accent: string; // tailwind text color for tag
  border: string; // hover border tint
};

const projects: Project[] = [
  {
    title: "Helicone joins Mintlify",
    date: "Jul 2026",
    description:
      "Helicone is now part of Mintlify. Same mission, bigger surface: the context layer for AI agents.",
    href: "https://x.com/justinstorre/status/2028878183949554127",
    external: true,
    tag: "Announcement",
    glow: "rgba(34,211,238,0.35)",
    accent: "text-cyan-300",
    border: "hover:border-cyan-400/40",
  },
  {
    title: "Tracer: One Line Puzzle",
    date: "Jul 2026",
    description:
      "An iOS one-stroke puzzle game I built for fun. 60+ levels, no ads, no tracking.",
    href: "https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996",
    external: true,
    tag: "iOS App",
    glow: "rgba(167,139,250,0.35)",
    accent: "text-violet-300",
    border: "hover:border-violet-400/40",
  },
  {
    title: "Querying ClickHouse directly with raw SQL",
    date: "Jul 2026",
    description:
      "How we let users run raw SQL against ClickHouse safely, with row-level security and query parameters.",
    href: "/blogs/clickhouse-rls-query-parameters",
    external: false,
    tag: "Blog Post",
    glow: "rgba(52,211,153,0.3)",
    accent: "text-emerald-300",
    border: "hover:border-emerald-400/40",
  },
  {
    title: "Helicone Re-launch",
    date: "Jul 2023",
    description:
      "Rebuilt the product around what users actually needed. Open-source observability for every LLM call.",
    href: "https://x.com/helicone_ai/status/1686840508658876419",
    external: true,
    tag: "Launch",
    glow: "rgba(56,189,248,0.32)",
    accent: "text-sky-300",
    border: "hover:border-sky-400/40",
  },
  {
    title: "Y Combinator W23",
    date: "Apr 2023",
    description:
      "Launched Helicone through YC: open-source observability platform for generative AI.",
    href: "https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai",
    external: true,
    tag: "YC Launch",
    glow: "rgba(251,146,60,0.3)",
    accent: "text-orange-300",
    border: "hover:border-orange-400/40",
  },
  {
    title: "Scale AI Hackathon, 3rd place",
    date: "Feb 2023",
    description:
      "Placed third with an AI rap battle between Tom Brady and Gisele. The SF Standard covered it.",
    href: "https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/",
    external: true,
    tag: "Hackathon",
    glow: "rgba(244,114,182,0.3)",
    accent: "text-pink-300",
    border: "hover:border-pink-400/40",
  },
];

const socials = [
  { label: "X", href: "https://twitter.com/justintorre", Icon: FaXTwitter },
  { label: "GitHub", href: "https://github.com/chitalian", Icon: FaGithub },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/justintorre/",
    Icon: FaLinkedin,
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

export default function AuroraPage() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#05060f] text-white antialiased">
      <style>{`
        @keyframes v9-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(8vw, 6vh) scale(1.15); }
          66% { transform: translate(-4vw, 10vh) scale(0.95); }
        }
        @keyframes v9-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          40% { transform: translate(-10vw, -5vh) scale(1.1); }
          75% { transform: translate(5vw, -8vh) scale(0.9); }
        }
        @keyframes v9-drift-c {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(6vw, -10vh) scale(1.2); }
        }
        @keyframes v9-drift-d {
          0%, 100% { transform: translate(0, 0) scale(1.05); }
          50% { transform: translate(-8vw, 6vh) scale(0.9); }
        }
        @keyframes v9-marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .v9-blob-a { animation: v9-drift-a 26s ease-in-out infinite; }
        .v9-blob-b { animation: v9-drift-b 32s ease-in-out infinite; }
        .v9-blob-c { animation: v9-drift-c 24s ease-in-out infinite; }
        .v9-blob-d { animation: v9-drift-d 38s ease-in-out infinite; }
        .v9-marquee-track { animation: v9-marquee 40s linear infinite; }
        .v9-marquee:hover .v9-marquee-track { animation-play-state: paused; }
        .v9-grain {
          background-image: radial-gradient(rgba(255,255,255,0.14) 1px, transparent 1px);
          background-size: 22px 22px;
        }
        @media (prefers-reduced-motion: reduce) {
          .v9-blob-a, .v9-blob-b, .v9-blob-c, .v9-blob-d, .v9-marquee-track {
            animation: none;
          }
        }
      `}</style>

      {/* Aurora background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="v9-blob-a absolute -top-[15%] -left-[10%] h-[55vh] w-[55vw] min-w-[320px] rounded-full bg-cyan-500/25 blur-[120px]" />
        <div className="v9-blob-b absolute top-[5%] right-[-15%] h-[60vh] w-[50vw] min-w-[320px] rounded-full bg-violet-600/25 blur-[130px]" />
        <div className="v9-blob-c absolute top-[45%] left-[20%] h-[45vh] w-[45vw] min-w-[280px] rounded-full bg-blue-500/15 blur-[110px]" />
        <div className="v9-blob-d absolute top-[25%] left-[45%] h-[40vh] w-[35vw] min-w-[240px] rounded-full bg-fuchsia-500/10 blur-[100px]" />
        <div className="v9-grain absolute inset-0 opacity-[0.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#05060f]" />
      </div>

      {/* Hero */}
      <section className="relative flex min-h-screen flex-col">
        <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8">
          <span className="font-mono text-sm tracking-widest text-white/60">JT</span>
          <nav className="flex items-center gap-6 text-sm text-white/60">
            <Link href="/blogs" className="transition-colors hover:text-white">
              Blog
            </Link>
            <Link href="/videos" className="transition-colors hover:text-white">
              Videos
            </Link>
            <a
              href="https://github.com/chitalian"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-white"
            >
              GitHub
            </a>
          </nav>
        </header>

        <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 py-24">
          <p className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-cyan-200/90 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400" />
            </span>
            Now at Mintlify. Helicone joined July 2026.
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            <span className="bg-gradient-to-r from-cyan-300 via-sky-300 to-violet-400 bg-clip-text text-transparent">
              Justin Torre
            </span>{" "}
            builds the tools that watch AI think.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70 sm:text-xl">
            Building the context layer for AI agents at Mintlify. Before that,
            co-founder and CEO of Helicone (YC W23), open-source LLM
            observability trusted with trillions of tokens.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/blogs"
              className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3.5 text-sm font-semibold text-black shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all hover:shadow-[0_0_45px_rgba(34,211,238,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
            >
              Read the blog
              <FaArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-white/30 hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/60"
            >
              See what I ship
            </a>
          </div>
        </div>

        {/* Stats marquee */}
        <div className="v9-marquee relative w-full overflow-hidden border-y border-white/10 bg-white/[0.03] py-4 backdrop-blur-sm">
          <div className="v9-marquee-track flex w-max whitespace-nowrap">
            {[0, 1].map((copy) => (
              <div
                key={copy}
                aria-hidden={copy === 1}
                className="flex items-center"
              >
                {stats.map((stat) => (
                  <span
                    key={`${copy}-${stat}`}
                    className="flex items-center font-mono text-sm tracking-wider text-white/60"
                  >
                    <span className="px-8">{stat}</span>
                    <span className="text-cyan-400/70">·</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work */}
      <section id="work" className="relative mx-auto w-full max-w-6xl px-6 py-24 sm:py-32">
        <div className="mb-12 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 font-mono text-xs uppercase tracking-[0.25em] text-cyan-300/80">
              Shipped
            </p>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I ship
            </h2>
          </div>
          <Link
            href="/videos"
            className="hidden items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white sm:inline-flex"
          >
            Drone and engineering videos
            <FaArrowRight className="h-3 w-3" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => {
            const inner = (
              <>
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-16 -right-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: p.glow }}
                />
                <div className="relative flex items-center justify-between">
                  <span
                    className={`rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-wider ${p.accent}`}
                  >
                    {p.tag}
                  </span>
                  <span className="font-mono text-xs text-white/40">{p.date}</span>
                </div>
                <h3 className="relative mt-5 text-lg font-semibold leading-snug text-white">
                  {p.title}
                </h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/60">
                  {p.description}
                </p>
                <span className="relative mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/50 transition-colors group-hover:text-white">
                  {p.external ? "Open link" : "Read post"}
                  <FaArrowUpRightFromSquare className="h-2.5 w-2.5" />
                </span>
              </>
            );
            const cardClass = `group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.07] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${p.border}`;
            return p.external ? (
              <a
                key={p.title}
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <Link key={p.title} href={p.href} className={cardClass}>
                {inner}
              </Link>
            );
          })}
        </div>

        <Link
          href="/videos"
          className="mt-10 inline-flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white sm:hidden"
        >
          Drone and engineering videos
          <FaArrowRight className="h-3 w-3" />
        </Link>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-white/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-8 px-6 py-14 sm:flex-row sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-sm font-semibold text-white">Justin Torre</p>
            <p className="mt-1 text-sm text-white/50">
              Context layer for AI agents at Mintlify.
            </p>
          </div>
          <div className="flex items-center gap-2">
            {socials.map(({ label, href, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 backdrop-blur-sm transition-all hover:border-cyan-400/40 hover:text-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 pb-8">
          <p className="text-center text-xs text-white/30 sm:text-left">
            © {new Date().getFullYear()} Justin Torre
          </p>
        </div>
      </footer>
    </main>
  );
}
