import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { posts } from "../posts";

const post = posts.find((p) => p.slug === "clickhouse-rls-query-parameters")!;

export const metadata: Metadata = {
  title: `${post.title} | Justin Torre`,
  description: post.description,
  alternates: {
    canonical: `/blogs/${post.slug}`,
  },
  openGraph: {
    title: post.title,
    description: post.description,
    type: "article",
    publishedTime: post.date,
    url: `https://justintorre.com/blogs/${post.slug}`,
    authors: ["Justin Torre"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
    creator: "@justintorre",
  },
};

function P({ children }: { children: React.ReactNode }) {
  return <p className="my-5 leading-relaxed text-neutral-300">{children}</p>;
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mt-12 mb-4 font-mono text-xl font-semibold text-white">
      {children}
    </h2>
  );
}

function Code({ children }: { children: string }) {
  return (
    <pre className="my-6 overflow-x-auto rounded-lg border border-neutral-800 bg-neutral-950 p-4 text-sm leading-relaxed text-neutral-200">
      <code>{children}</code>
    </pre>
  );
}

function IC({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded bg-neutral-800 px-1.5 py-0.5 font-mono text-[0.85em] text-cyan-300">
      {children}
    </code>
  );
}

export default function ClickhouseRlsPost() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <header className="mb-10">
        <Link
          href="/blogs"
          className="font-mono text-sm text-neutral-500 hover:text-cyan-400 transition-colors"
        >
          ← blog
        </Link>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-white">
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
          We added a SQL editor to Helicone called HQL. Customers get a text
          box, they write SELECT statements, and the queries run directly
          against our ClickHouse cluster. Every org&apos;s request data lives
          in the same table, <IC>request_response_rmt</IC>, separated only by
          an <IC>organization_id</IC> column.
        </P>
        <P>
          Letting strangers run arbitrary SQL against a shared table sounds
          like a security incident with extra steps, so before shipping we
          needed the database itself to guarantee that a query from org A can
          never read a row belonging to org B. ClickHouse can do this with two
          features that don&apos;t get much attention: row policies and custom
          settings. Here&apos;s how we wired them together, and what the
          app-side code (including an AST parser) still has to do.
        </P>

        <figure className="my-8">
          <Image
            src="/blog/hql-editor.png"
            alt="The HQL editor in Helicone showing a SQL query that aggregates token usage per day from request_response_rmt, with saved queries in a sidebar and the Helix assistant panel on the right"
            width={2000}
            height={1314}
            className="rounded-lg border border-neutral-800"
          />
          <figcaption className="mt-3 text-center font-mono text-xs text-neutral-500">
            HQL in production. Every query on this screen runs against the
            same shared table.
          </figcaption>
        </figure>

        <H2>The row policy</H2>
        <P>
          A row policy in ClickHouse is a filter the server appends to every
          read, per table, per user. The setup is two statements, straight
          from our migrations: create a unique user that will have the row
          policy, then attach the policy to that user.
        </P>
        <Code>{`CREATE USER IF NOT EXISTS hql_user;

CREATE ROW POLICY hql_organization_filter ON request_response_rmt
    FOR SELECT
    USING organization_id = getSetting('SQL_helicone_organization_id')
    TO hql_user;`}</Code>
        <P>
          The unique user is the whole point of the first statement.{" "}
          <IC>hql_user</IC> exists purely to serve HQL traffic, and the policy
          binds to it through the <IC>TO hql_user</IC> clause. Our ingest and
          dashboard code connects as a different user and never sees the
          policy. For <IC>hql_user</IC>, every SELECT on{" "}
          <IC>request_response_rmt</IC> behaves as if{" "}
          <IC>
            WHERE organization_id =
            getSetting(&apos;SQL_helicone_organization_id&apos;)
          </IC>{" "}
          were part of the query, no matter what SQL the customer actually
          wrote.
        </P>
        <P>
          <IC>getSetting</IC> is the interesting part. It reads a setting from
          the context of the current query. ClickHouse rejects setting names
          it doesn&apos;t recognize, and custom ones are only legal when they
          start with a declared prefix. If you self-host, you pick that
          prefix in the server config:
        </P>
        <Code>{`<clickhouse>
    <custom_settings_prefixes>SQL_</custom_settings_prefixes>
</clickhouse>`}</Code>
        <P>
          On ClickHouse Cloud, where our cluster runs, there is no picking.
          You can&apos;t touch server config, and the{" "}
          <a
            href="https://clickhouse.com/docs/operations/settings/query-level"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClickHouse docs
          </a>{" "}
          state that &quot;it is not possible to specify a custom
          prefix&quot;. Every custom setting begins with <IC>SQL_</IC>, no
          exceptions. So ours is called{" "}
          <IC>SQL_helicone_organization_id</IC> instead of something cleaner,
          and that awkward prefix is load-bearing rather than a naming
          choice. You&apos;ll notice there&apos;s no{" "}
          <IC>custom_settings_prefixes</IC> entry anywhere in our repo; on
          Cloud there&apos;s nothing to configure.
        </P>
        <P>
          The prefix has a history, too. MySQL clients set session variables
          like <IC>SQL_AUTO_IS_NULL</IC> when they connect, and ClickHouse
          accepts those as no-ops (
          <a
            href="https://github.com/ClickHouse/ClickHouse/pull/50013"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClickHouse PR #50013
          </a>
          ) so MySQL-speaking tools like Tableau don&apos;t fall over when
          they connect. My guess is that&apos;s why Cloud standardized on{" "}
          <IC>SQL_</IC> as the one allowed prefix, which means our tenancy
          filter rides on a naming convention built for MySQL drivers.
        </P>

        <H2>Where the query parameters come in</H2>
        <P>
          Settings in ClickHouse can be set per query. Over the HTTP interface
          they travel as URL query parameters, so every HQL request carries
          the tenant id in the query string:{" "}
          <IC>?SQL_helicone_organization_id=&lt;org&gt;</IC>. The official
          Node client hides that behind <IC>clickhouse_settings</IC>:
        </P>
        <Code>{`const result = await clickHouseHqlClient.query({
  query: userSql,
  format: "JSONEachRow",
  clickhouse_settings: {
    SQL_helicone_organization_id: organizationId,
    readonly: "1",
    allow_ddl: 0,
    max_execution_time: 30,
    max_memory_usage: "4000000000",
    max_result_rows: "10000",
  },
});`}</Code>
        <P>
          The <IC>organizationId</IC> comes from our auth layer, never from
          anything the customer typed. The other settings exist because
          customers share the cluster with our ingest pipeline and with each
          other: a 30 second timeout, a memory cap, a cap on result rows.
        </P>
        <P>
          <IC>readonly</IC> deserves its own paragraph. A ClickHouse SELECT
          can end with a SETTINGS clause, which means a customer could try{" "}
          <IC>
            SELECT * FROM request_response_rmt SETTINGS
            SQL_helicone_organization_id = &apos;victim-org&apos;
          </IC>{" "}
          and overwrite the value we passed. With <IC>readonly = 1</IC> the
          server rejects any settings change at query time, which closes that
          hole. On top of that, the app refuses any query that so much as
          mentions the setting name:
        </P>
        <Code>{`const forbiddenPattern = /sql[_\\s]*helicone[_\\s]*organization[_\\s]*id/i;
if (forbiddenPattern.test(query)) {
  return err("Query contains a reserved setting name");
}`}</Code>
        <P>
          ClickHouse enforces the actual block. The regex means an attempt
          shows up in our logs as a rejected query rather than a database
          error.
        </P>

        <H2>Revoking everything else</H2>
        <P>
          A row policy on one table does nothing for the rest of the
          database, and ClickHouse ships with very readable system tables.{" "}
          <IC>system.query_log</IC> alone contains every query every tenant
          has ever run, SQL text included. So <IC>hql_user</IC> gets stripped
          down to exactly one grant:
        </P>
        <Code>{`REVOKE ALL ON system.* FROM hql_user;
REVOKE ALL ON information_schema.* FROM hql_user;
REVOKE ALL ON default.* FROM hql_user;

GRANT SELECT ON default.request_response_rmt TO hql_user;`}</Code>
        <P>
          We also filter the <IC>organization_id</IC> column out of the
          DESCRIBE results that power the editor&apos;s autocomplete. The
          column still exists and the policy still references it, but from
          inside the editor there&apos;s no visible sign the table is shared
          at all.
        </P>

        <H2>What the AST is for</H2>
        <P>
          None of the tenancy enforcement happens in the application, and
          that&apos;s deliberate. The tempting design is to parse each query,
          walk the AST, and splice <IC>organization_id = ?</IC> into the
          WHERE clause before execution. Then your security boundary is a
          JavaScript SQL parser keeping up with ClickHouse syntax, and
          ClickHouse syntax includes things like{" "}
          <IC>properties[&apos;user_id&apos;]</IC> map subscripts and{" "}
          <IC>arrayJoin</IC> that most parsers choke on. A query the parser
          mishandles becomes a query that leaks.
        </P>
        <P>
          We still parse queries, but only for things that are allowed to
          fail. node-sql-parser has no ClickHouse dialect, so we parse with
          its Postgres one, clamp or insert a LIMIT on the AST, and serialize
          the query back out:
        </P>
        <Code>{`const ast = parser.astify(sql, { database: "Postgresql" });
const limitedAst = addLimit(normalizeAst(ast)[0], limit);
firstSql = parser.sqlify(limitedAst, { database: "Postgresql" });`}</Code>
        <P>
          When ClickHouse-specific syntax breaks the parse, we catch the
          exception and fall back to clamping the LIMIT with a regex on the
          raw string. That fallback would be terrifying if the org filter
          depended on it. Since the filter lives in the database, the worst a
          parser bug can do here is let a query return more rows than
          we&apos;d like, and <IC>max_result_rows</IC> catches that anyway.
        </P>
        <P>
          Before any of this runs, a validation pass rejects everything that
          isn&apos;t a plain SELECT, along with any table reference outside an
          allowlist that currently contains exactly one name.
        </P>

        <H2>Failing closed</H2>
        <P>
          My favorite property of this setup is that a missing setting fails
          loudly. If app code ever forgets to send{" "}
          <IC>SQL_helicone_organization_id</IC>, <IC>getSetting</IC> throws
          and the query dies. Misconfiguration produces an error, never a
          response containing someone else&apos;s rows. Compare that with
          app-side filtering, where a forgotten WHERE clause returns
          everything and looks like success.
        </P>
        <P>
          Our admin tooling bypasses all of this on purpose by connecting as
          our normal database user, since the policy is granted to{" "}
          <IC>hql_user</IC> only. The bypass is a different connection string
          rather than a flag on the query, which makes it hard to trip over
          by accident.
        </P>
        <P>
          If you&apos;re adding customer-facing SQL to a ClickHouse-backed
          product, the whole mechanism costs about ten lines of SQL in
          migrations plus one setting per query. The parser work is real, but
          you get to do it for ergonomics instead of for safety, and
          that&apos;s a much better place to be.
        </P>
      </article>

      <footer className="mt-16 border-t border-neutral-800 pt-8">
        <p className="text-sm text-neutral-400">
          HQL is live in{" "}
          <a
            href="https://helicone.ai"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helicone
          </a>
          , and the code in this post is from the open-source repo:{" "}
          <a
            href="https://github.com/Helicone/helicone"
            className="text-cyan-400 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Helicone/helicone
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
