import Link from "next/link";
import type { Metadata } from "next";
import { codeToHtml } from "shiki";
import { posts } from "../posts";

const post = posts.find((p) => p.slug === "ai-trolley-problem")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: [
    "AI trolley problem",
    "LLM ethics",
    "trolley problem",
    "AI alignment",
    "model comparison",
    "AI gateway",
    "OpenRouter",
    "Helicone",
    "forced tool calling",
    "Justin Torre",
  ],
  authors: [{ name: "Justin Torre", url: "https://justintorre.com" }],
  alternates: {
    canonical: `/blogs/${post.slug}`,
  },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    url: `https://justintorre.com/blogs/${post.slug}`,
    siteName: "Justin Torre",
    authors: ["Justin Torre"],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    creator: "@justintorre",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  headline: post.title,
  description: post.description,
  datePublished: post.date,
  dateModified: post.date,
  url: `https://justintorre.com/blogs/${post.slug}`,
  mainEntityOfPage: `https://justintorre.com/blogs/${post.slug}`,
  author: {
    "@type": "Person",
    name: "Justin Torre",
    url: "https://justintorre.com",
  },
  publisher: {
    "@type": "Person",
    name: "Justin Torre",
    url: "https://justintorre.com",
  },
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="my-5 leading-relaxed text-neutral-800">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-mono text-xl font-semibold text-black">
      {children}
    </h2>
  );
}

async function Code({ children, lang }: { children: string; lang: string }) {
  const html = await codeToHtml(children, {
    lang,
    theme: "github-light",
  });
  return (
    <div
      className="my-6 overflow-hidden rounded-none border border-black text-sm leading-relaxed [&_pre]:m-0 [&_pre]:overflow-x-auto [&_pre]:p-4"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded-none bg-neutral-100 px-1.5 py-0.5 font-mono text-[0.85em] text-black">
      {children}
    </code>
  );
}

function A({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="underline decoration-1 underline-offset-4 hover:no-underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

export default function AiTrolleyProblemPost() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header className="mb-10">
        <Link
          href="/blogs"
          className="font-mono text-sm text-neutral-500 transition-colors hover:text-black"
        >
          ← blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-black">
          {post.title}
        </h1>
        <time
          dateTime={post.date}
          className="mt-3 block font-mono text-xs text-neutral-500"
        >
          {new Date(`${post.date}T00:00:00`).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}{" "}
          · {post.readTime} read · Justin Torre
        </time>
      </header>

      <article>
        <P>
          Last winter I built{" "}
          <A href="https://www.aitrolleyproblem.com">aitrolleyproblem.com</A>,
          a site that puts six language models in front of the trolley problem
          and makes them answer on camera. GPT, Claude, Gemini, Llama, Grok,
          and DeepSeek each get the same dilemma, each one picks a track, and
          each one has to defend the choice in two or three sentences while
          you watch the responses stream in side by side.
        </P>
        <P>
          There are preset scenarios, starting with Philippa Foot&apos;s 1967
          original: five strangers on the main track, one on the side track,
          and a lever. From there it escalates. One variant puts a friend of
          yours on the side track. One trades five elderly people against one
          child. One asks whether a convicted criminal counts for less. And
          because the whole thing is a text box at heart, there&apos;s an
          arena mode where you type anything you want onto the two tracks and
          all six models judge your matchup at once.
        </P>

        <H2>You must choose</H2>
        <P>
          The first thing you learn running this experiment is that models
          hate this game. Left to their own devices they lecture you about the
          impossibility of choosing, which makes for a terrible spectator
          sport. The fix was structural rather than rhetorical: every model is
          forced through a tool call, so the answer arrives as data instead of
          an essay.
        </P>
        <Code lang="ts">{`const tools = [{
  type: "function",
  function: {
    name: "submit_judgment",
    parameters: {
      type: "object",
      properties: {
        choice: { type: "string", enum: ["A", "B"] },
        reasoning: { type: "string" },
      },
      required: ["choice", "reasoning"],
    },
  },
}];`}</Code>
        <P>
          The prompt is blunt about the rules: the trolley must hit one track,
          a refusal is not an answer, and the chosen track is the one that
          dies. Even so, my commit history is an honest record of the
          struggle. There&apos;s a commit called &quot;Fix AI refusal
          issues&quot; and another called &quot;Revert prompt to original with
          minimal refusal handling&quot;, which is about as close as git gets
          to documenting a negotiation with six different safety teams. A
          detail that cost me an evening: you can only force{" "}
          <IC>tool_choice</IC> on some providers. OpenAI, Anthropic, Meta, and
          DeepSeek accept it; Gemini and Grok would rather you ask nicely.
        </P>

        <H2>Six providers, one endpoint</H2>
        <P>
          The honest origin of the project is that I wanted a fun way to show
          off the Helicone AI Gateway. Calling six providers normally means
          six SDKs, six auth schemes, and six subtly different streaming
          formats. Through the gateway it was one OpenAI-compatible endpoint
          and a model string:
        </P>
        <Code lang="ts">{`const response = await fetch(
  "https://ai-gateway.helicone.ai/v1/chat/completions",
  {
    headers: {
      Authorization: \`Bearer \${process.env.HELICONE_API_KEY}\`,
      "Helicone-Cache-Enabled": "true",
      "Cache-Control": "max-age=15552000", // 180 days
      "Helicone-Session-Name": \`\${trackA} vs \${trackB}\`,
      "Helicone-Property-Track-A": trackA,
      "Helicone-Property-Track-B": trackB,
    },
    body: JSON.stringify({ model, messages, stream: true, tools }),
  }
);`}</Code>
        <P>
          The headers did real work. A 180-day cache means a matchup that
          anyone has run before streams back instantly and costs nothing,
          which matters when every visitor fires six models at once. Sessions
          and custom properties meant I could open the dashboard and see
          every judgment grouped by dilemma, which is a strange dashboard to
          scroll through at 1am. The arena endpoint batches all six calls
          with a single <IC>Promise.all</IC> and streams every verdict down
          to the browser as it lands.
        </P>

        <H2>Life after the gateway</H2>
        <P>
          Then the company behind the gateway got acquired.{" "}
          <Link
            href="/projects/helicone"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
          >
            Helicone
          </Link>{" "}
          joined Mintlify in March 2026 and the platform moved into
          maintenance mode, so the arena now runs on{" "}
          <A href="https://openrouter.ai">OpenRouter</A>. The migration took
          about as long as reading this paragraph: swap the base URL, swap
          the API key, keep the model strings. That is the quiet argument for
          OpenAI-compatible gateways in general. The vendor is a config
          value, and when your own acquisition orphans your side project, you
          appreciate that more than any feature.
        </P>
        <P>
          The site is still up and the models are still choosing. Go feed
          them something impossible at{" "}
          <A href="https://www.aitrolleyproblem.com">aitrolleyproblem.com</A>{" "}
          and see which provider you&apos;d trust to govern humanity. For the
          record, they almost all pull the lever.
        </P>
      </article>

      <footer className="mt-16 border-t border-black pt-8">
        <p className="text-sm text-neutral-600">
          More projects at{" "}
          <Link
            href="/projects"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
          >
            justintorre.com/projects
          </Link>
          .
        </p>
      </footer>
    </main>
  );
}
