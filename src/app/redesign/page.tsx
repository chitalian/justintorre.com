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

export default function RedesignIndex() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <h1 className="font-mono text-2xl font-bold text-white">
        Frontpage redesign concepts
      </h1>
      <p className="mt-2 text-sm text-neutral-400">
        Ten directions for the new justintorre.com. Uncommitted drafts; click
        through and see what sticks.
      </p>
      <ul className="mt-10 flex flex-col gap-1">
        {variants.map((v) => (
          <li key={v.n}>
            <Link
              href={`/redesign/v${v.n}`}
              className="group flex items-baseline gap-4 rounded-lg px-3 py-3 transition-colors hover:bg-neutral-900"
            >
              <span className="w-9 shrink-0 font-mono text-sm text-neutral-500">
                v{v.n}
              </span>
              <span className="shrink-0 font-semibold text-white group-hover:text-cyan-400 transition-colors">
                {v.name}
              </span>
              <span className="truncate text-sm text-neutral-500">
                {v.vibe}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
