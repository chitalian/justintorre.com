import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mintlify",
  description:
    "Helicone joined Mintlify in March 2026. Why I'm building the context layer for AI agents, and what three years of Helicone taught me.",
  alternates: {
    canonical: "/projects/mintlify",
  },
  openGraph: {
    title: "Mintlify | Justin Torre",
    description:
      "Helicone joined Mintlify in March 2026. Why I'm building the context layer for AI agents, and what three years of Helicone taught me.",
    url: "https://justintorre.com/projects/mintlify",
  },
};

const linkClass = "underline decoration-1 underline-offset-4 hover:no-underline";

export default function MintlifyPage() {
  return (
    <main className="mx-auto max-w-[680px] px-6 py-20 text-black sm:py-28">
      <Link
        href="/projects"
        className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
      >
        ← projects
      </Link>

      <h1 className="mt-10 text-[22px] font-bold tracking-tight">Mintlify</h1>
      <p className="mt-2 font-mono text-[12px] text-neutral-500">
        2026 – present · context layer for AI agents
      </p>

      <div className="mt-14 space-y-14">
        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The move
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Helicone joined Mintlify in March 2026. I now build the context
            layer for AI agents at Mintlify. If you want the short version, the{" "}
            <a
              href="https://x.com/justinstorre/status/2028878183949554127"
              className={linkClass}
            >
              announcement
            </a>{" "}
            covers it. This page is the longer one.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            Why
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            In a world full of AI agents, the thing companies most need to
            invest in is a knowledge and context infrastructure layer. The
            analogy I used in the announcement: Waymo didn&apos;t reinvent the
            roads, but it still needed to learn about them. Agents are in the
            same position. They inherit the systems we already have, and they
            need a reliable way to understand them.{" "}
            <a href="https://mintlify.com" className={linkClass}>
              Mintlify
            </a>{" "}
            is the information layer for agents building the systems of the
            future. The overlap with Helicone was obvious to me from the first
            conversation: same world, different angle.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            There was a simpler reason too. I genuinely like the team and the
            product. After talking to a dozen companies, that combination
            turned out to be rarer than you&apos;d think. Cole and I both
            admire what Han and Hahnbee have built and how they operate.
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            What Helicone taught me
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Three years of building Helicone left me with a few underrated
            lessons. The biggest one: a 5-person team can do an absurd amount
            if everyone is locked in. Headcount was never the constraint for
            us. Focus was. Mintlify runs the same way, which made the decision
            easier. You can read the full Helicone story{" "}
            <Link href="/projects/helicone" className={linkClass}>
              here
            </Link>
            .
          </p>
        </section>

        <section className="border-t border-black pt-4">
          <h2 className="font-mono text-[11px] uppercase tracking-[0.25em]">
            The context layer
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-neutral-800">
            Practically, the work comes down to one observation: agents are
            only as good as the context you hand them. You can swap models and
            tune prompts all day, and an agent with stale or missing context
            will still fail. Mintlify already powers documentation for
            thousands of dev tools, which is exactly the surface agents read
            when they try to use those tools. My job is to make that surface
            work as well for agents as it does for people. That is the context
            layer, and it is the most leveraged place I could be working right
            now.
          </p>
        </section>
      </div>
    </main>
  );
}
