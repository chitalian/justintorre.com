import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Scale AI Hackathon",
  description:
    "Third place at Scale AI's February 2023 hackathon in San Francisco, where an AI rap battle between Tom Brady and Gisele Bündchen made the local paper.",
  alternates: {
    canonical: "/projects/scale-ai-hackathon",
  },
  openGraph: {
    title: "Scale AI Hackathon | Justin Torre",
    description:
      "Third place at Scale AI's February 2023 hackathon in San Francisco, right before starting YC W23.",
    url: "https://justintorre.com/projects/scale-ai-hackathon",
    siteName: "Justin Torre",
    type: "website",
  },
};

export default function ScaleAiHackathonPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/projects"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        &larr; projects
      </Link>

      <h1 className="mt-8 text-[22px] font-bold tracking-tight">
        Scale AI Hackathon
      </h1>
      <p className="mt-1 font-mono text-[12px] text-neutral-500">
        3rd place / San Francisco / Feb 2023
      </p>

      <div className="mt-14 space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The weekend
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              In February 2023 I took 3rd place at Scale AI&apos;s hackathon in
              San Francisco. This was days before I started the YC W23 batch,
              so it doubled as my last unstructured weekend for a very long
              time. I spent it making language models rap.
            </p>
            <p>
              The demo was an AI rap battle between Tom Brady and Gisele
              B&uuml;ndchen, which was topical at the time and absurd in
              exactly the way early LLM demos were supposed to be. It was
              apparently absurd enough to make the local news, because{" "}
              <a
                href="https://sfstandard.com/2023/02/02/tom-brady-and-gisele-bundchen-face-off-in-ai-rap-battle/"
                className="underline decoration-1 underline-offset-4 hover:no-underline"
              >
                the SF Standard wrote it up
              </a>
              . I did not expect a weekend project to end up in a newspaper. In
              early 2023 that kind of thing just happened.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The era
          </h2>
          <div className="mt-4 space-y-4 text-[15px] leading-relaxed text-neutral-800">
            <p>
              It is hard to overstate how strange that stretch of San
              Francisco was. LLMs had just gotten good, nobody fully knew what
              they were for yet, and hackathons were the fastest way to find
              out. You would show up with a vague idea, wire a model into
              something by Sunday, and occasionally discover a real capability
              hiding under a joke. The rap battle was a joke. The fact that a
              model could hold two distinct voices and trade coherent verses
              between them was not.
            </p>
            <p>
              Everyone in the room was doing some version of the same
              experiment: poke the model, see what falls out, ship the demo
              before the weekend ends.
            </p>
          </div>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            What it turned into
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            That same energy is what became{" "}
            <Link
              href="/projects/helicone"
              className="underline decoration-1 underline-offset-4 hover:no-underline"
            >
              Helicone
            </Link>{" "}
            a couple of months later. Once you have watched a room full of
            people wire LLMs into everything over a single weekend, the
            question of who is going to watch all that traffic in production
            answers itself. The hackathon was the last project I built for
            fun before building the company. Third place, one newspaper
            article, and a pretty good weekend.
          </p>
        </section>
      </div>
    </main>
  );
}
