import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tracer: One Line Puzzle",
  description:
    "Tracer is a one-line puzzle game for iOS. Trace every line in one continuous stroke. 60+ solver-verified levels, offline play, no accounts, no ads, no tracking.",
  alternates: {
    canonical: "/projects/tracer",
  },
  openGraph: {
    title: "Tracer: One Line Puzzle",
    description:
      "A one-line puzzle game for iOS. Trace every line in one continuous stroke, without lifting your finger and without repeating a line.",
    url: "https://justintorre.com/projects/tracer",
    type: "website",
  },
};

export default function TracerPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/projects"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        &larr; projects
      </Link>

      <h1 className="mt-10 text-[22px] font-bold tracking-tight">
        Tracer: One Line Puzzle
      </h1>
      <p className="mt-2 font-mono text-[12px] text-neutral-500">
        ios game &middot; released july 1, 2026 &middot; early beta
      </p>

      <figure className="mt-10">
        <svg
          width="160"
          height="150"
          viewBox="0 0 120 112"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="A house shape drawn in a single continuous stroke, with a dot marking the starting point"
        >
          <path
            d="M20 100 L100 100 L100 52 L20 52 L20 100 L100 52 L60 16 L20 52 L100 100"
            stroke="black"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="20" cy="100" r="4.5" fill="black" />
        </svg>
        <figcaption className="mt-3 font-mono text-[12px] text-neutral-500">
          one figure, one stroke, no repeats
        </figcaption>
      </figure>

      <div className="mt-14 space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The game
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              Tracer is a puzzle game I shipped for iOS on July 1, 2026. Each
              level is a figure of connected dots. Your job is to trace every
              line in one continuous stroke, without lifting your finger and
              without going over any line twice. That is the entire game. It is
              simple to pick up and deceptively tricky to finish.
            </p>
            <p>
              There are more than 60 hand-tuned levels, and every one of them
              is solver-verified, so if a puzzle is in the game, it has a
              solution. The design is clean and minimal. It plays offline, and
              there are no accounts, no ads, and no tracking. I do not want
              your data. I want you to stare at a shape on the train and
              mutter to yourself.
            </p>
            <p>
              It is an early beta, so expect rough edges along with a steady
              stream of new levels and features.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The math
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              One-stroke puzzles are Eulerian paths in disguise. A figure can
              be traced in a single stroke only if it has exactly zero or two
              vertices of odd degree. Euler worked this out while thinking
              about the bridges of K&ouml;nigsberg, which makes Tracer a very
              slow sequel to a 1736 paper. The level generator leans on this
              theorem directly: it counts odd vertices before a puzzle ever
              reaches your thumb, which is how every level stays solvable.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            What&apos;s next
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              A July 2026 update is in progress: audio, more levels, and
              vibrating strings, which are exactly as fun as they sound. I{" "}
              <a
                href="https://x.com/justinstorre/status/2076487494410117571"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                announced it on X
              </a>
              .
            </p>
            <p>
              I build a lot of small things, and a friend summed up how that
              looks from the outside: &ldquo;am i tripping or is it a
              different app every time i see a tweet from you&rdquo;. Fair. This
              one is staying, though.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Links
          </h2>
          <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-neutral-800">
            <li>
              <a
                href="https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                Tracer on the App Store
              </a>
            </li>
            <li>
              <Link
                href="/apps/tracer/privacy"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                Privacy policy
              </Link>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
}
