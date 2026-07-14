import Link from "next/link";

const variants: { n: number; name: string; vibe: string }[] = [
  { n: 1, name: "Terminal brutalist", vibe: "tmux session, phosphor green, blinking cursors" },
  { n: 2, name: "Swiss editorial", vibe: "white specimen sheet, huge type, one red accent" },
  { n: 3, name: "Bento grid", vibe: "dark rounded cards, stat tiles, glow on hover" },
  { n: 4, name: "Builder changelog", vibe: "life as a CHANGELOG.md, tags and timeline" },
  { n: 5, name: "One continuous line", vibe: "Tracer homage, a single stroke threads the page" },
  { n: 6, name: "justinOS", vibe: "fake desktop, windows, dock, menu bar clock" },
  { n: 7, name: "The Torre Times", vibe: "broadsheet front page on cream paper" },
  { n: 8, name: "Quiet prose", vibe: "one narrow column, typography only" },
  { n: 9, name: "Aurora hero", vibe: "drifting gradients, glass cards, stats marquee" },
  { n: 10, name: "Mission control", vibe: "personal ops dashboard, KPI cards, status pills" },
  { n: 11, name: "Retro-future", vibe: "synthwave sunset, perspective grid, high scores" },
  { n: 12, name: "Black and white", vibe: "no frills, sharp 1px rules, instant hover inversion" },
  { n: 13, name: "Classic Macintosh", vibe: "System 7 windows, pinstripe title bars, desktop icons" },
  { n: 14, name: "Neon receipt", vibe: "v12's no-frills skeleton in v11's synthwave skin" },
  { n: 15, name: "Field guide", vibe: "greptile dark blueprint, wireframe spheres, step cards" },
  { n: 16, name: "Analog mission control", vibe: "TVA dossier, radar sweep, segmented meters" },
  { n: 17, name: "Steampunk workshop", vibe: "brass gauges, rotating gears, letters patent" },
];

export default function OverviewPage() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-y-scroll bg-black">
      {/* dot nav */}
      <nav
        aria-label="Jump to variant"
        className="fixed right-3 top-1/2 z-50 flex -translate-y-1/2 flex-col gap-2"
      >
        {variants.map((v) => (
          <a
            key={v.n}
            href={`#v${v.n}`}
            title={`v${v.n} ${v.name}`}
            className="h-2.5 w-2.5 rounded-full border border-white/40 bg-white/10 transition-colors hover:bg-cyan-400"
          />
        ))}
      </nav>

      {variants.map((v, i) => (
        <section
          key={v.n}
          id={`v${v.n}`}
          className="relative h-screen w-full snap-start"
        >
          <iframe
            src={`/redesign/v${v.n}`}
            title={`v${v.n} ${v.name}`}
            loading={i < 2 ? "eager" : "lazy"}
            className="pointer-events-none h-full w-full border-0"
          />
          {/* HUD */}
          <div className="absolute bottom-5 left-5 z-40 flex items-center gap-3 rounded-full border border-white/15 bg-black/70 py-2 pl-4 pr-2 font-mono text-sm text-white backdrop-blur-md">
            <span className="text-cyan-400">
              v{v.n}
              <span className="text-white/40">/{variants.length}</span>
            </span>
            <span className="font-semibold">{v.name}</span>
            <span className="hidden max-w-[32ch] truncate text-white/50 md:inline">
              {v.vibe}
            </span>
            <Link
              href={`/redesign/v${v.n}`}
              className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-black transition-colors hover:bg-cyan-300"
            >
              open ↗
            </Link>
          </div>
          {/* prev / next */}
          <div className="absolute bottom-5 right-5 z-40 flex gap-2">
            {i > 0 && (
              <a
                href={`#v${variants[i - 1].n}`}
                aria-label="Previous design"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
              >
                ↑
              </a>
            )}
            {i < variants.length - 1 && (
              <a
                href={`#v${variants[i + 1].n}`}
                aria-label="Next design"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-black/70 text-white backdrop-blur-md transition-colors hover:bg-white hover:text-black"
              >
                ↓
              </a>
            )}
          </div>
        </section>
      ))}
    </main>
  );
}
