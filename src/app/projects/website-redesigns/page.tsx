import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "17 versions of this website",
  description:
    "In July 2026 I redesigned my homepage 17 times in one sitting, then picked the plainest one. Here is every version, with links.",
  alternates: {
    canonical: "/projects/website-redesigns",
  },
  openGraph: {
    title: "17 versions of this website | Justin Torre",
    description:
      "In July 2026 I redesigned my homepage 17 times in one sitting, then picked the plainest one. Here is every version, with links.",
    url: "https://justintorre.com/projects/website-redesigns",
  },
};

type Version = {
  n: number;
  name: string;
  vibe: string;
};

const versions: Version[] = [
  {
    n: 1,
    name: "Terminal brutalist",
    vibe: "tmux session, phosphor green, blinking cursors",
  },
  {
    n: 2,
    name: "Swiss editorial",
    vibe: "white specimen sheet, huge type, one red accent",
  },
  {
    n: 3,
    name: "Bento grid",
    vibe: "dark rounded cards, stat tiles, glow on hover",
  },
  {
    n: 4,
    name: "Builder changelog",
    vibe: "life as a CHANGELOG.md",
  },
  {
    n: 5,
    name: "One continuous line",
    vibe: "Tracer homage, a single stroke threads the page",
  },
  {
    n: 6,
    name: "justinOS",
    vibe: "fake desktop, windows, dock, menu bar clock",
  },
  {
    n: 7,
    name: "The Torre Times",
    vibe: "broadsheet front page on cream paper",
  },
  {
    n: 8,
    name: "Quiet prose",
    vibe: "one narrow column, typography only",
  },
  {
    n: 9,
    name: "Aurora hero",
    vibe: "drifting gradients, glass cards, stats marquee",
  },
  {
    n: 10,
    name: "Mission control",
    vibe: "ops dashboard, KPI cards, status pills",
  },
  {
    n: 11,
    name: "Retro-future",
    vibe: "synthwave sunset, perspective grid, high scores",
  },
  {
    n: 12,
    name: "Black and white",
    vibe: "no frills, sharp 1px rules; the winner",
  },
  {
    n: 13,
    name: "Classic Macintosh",
    vibe: "System 7 windows, pinstripe title bars",
  },
  {
    n: 14,
    name: "Neon receipt",
    vibe: "v12's skeleton in v11's skin",
  },
  {
    n: 15,
    name: "Field guide",
    vibe: "dark blueprint, wireframe spheres, step cards",
  },
  {
    n: 16,
    name: "Analog mission control",
    vibe: "TVA dossier, telemetry meters",
  },
  {
    n: 17,
    name: "Modern steampunk",
    vibe: "brass gears, colored filigree",
  },
];

export default function WebsiteRedesignsPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/projects"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        &larr; projects
      </Link>

      <h1 className="mt-10 text-[22px] font-bold tracking-tight">
        17 versions of this website
      </h1>
      <p className="mt-2 font-mono text-[12px] text-neutral-500">
        July 2026 &middot; one sitting &middot; one winner
      </p>

      <div className="mt-14 space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The story
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              In July 2026 I looked at my homepage and admitted it was dated. It
              had a starfield. It had a fake terminal. It had a chatbot,
              because at some point every personal site got a chatbot. All of
              it felt like a snapshot of what I thought was cool several years
              ago, which is the natural fate of every personal website.
            </p>
            <p>
              The normal move is to pick one new direction, build it, and ship
              it. I could not pick. So instead of choosing a design, I built
              all of them. Seventeen complete homepage concepts, in one
              sitting. Each one is a real page with my actual content, not a
              mockup. There is a fake operating system with draggable windows.
              There is a broadsheet newspaper. There is a synthwave sunset
              with a perspective grid and a high score table. There is a
              version of my life written as a CHANGELOG.md.
            </p>
            <p>
              Then I lined them all up and picked the plainest one. Version
              12. Black text on a white background, a few 1px rules, decent
              spacing. That is the site you are on right now.
            </p>
            <p>
              You can{" "}
              <Link
                href="/overview"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                flip through all 17
              </Link>{" "}
              in one continuous scroll, or jump to any single version from the
              list below. Every one still works.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            All 17 versions
          </h2>
          <ul className="mt-4">
            {versions.map((v) => (
              <li key={v.n}>
                <Link
                  href={`/redesign/v${v.n}`}
                  className="flex items-baseline gap-4 border-b border-neutral-200 py-3 transition-colors duration-150 hover:bg-neutral-100"
                >
                  <span className="w-8 shrink-0 font-mono text-[12px] text-neutral-500">
                    v{v.n}
                  </span>
                  <span className="shrink-0 text-[15px] font-medium text-black">
                    {v.name}
                  </span>
                  <span className="text-[13px] leading-relaxed text-neutral-500">
                    {v.vibe}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Or{" "}
            <Link
              href="/overview"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              flip through all 17
            </Link>{" "}
            back to back.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The lesson
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              I spent the most time on the loudest versions. The synthwave
              grid took real effort. The fake operating system has a working
              dock and a menu bar clock. And after all of that, the design
              that won was black text on white with good spacing. I keep
              turning that over. The flashy versions were fun to build and
              tiring to read; the plain one gets out of the way and lets the
              words do the work. There is probably something to that, and it
              probably applies to more than websites.
            </p>
            <p>
              All 17 versions live in{" "}
              <a
                href="https://github.com/chitalian/justintorre.com"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                the repo
              </a>{" "}
              if you want to see how any of them are put together.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
