import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { codeToHtml } from "shiki";
import { posts } from "../posts";

const post = posts.find((p) => p.slug === "clickhouse-rls-query-parameters")!;

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: [
    "ClickHouse row-level security",
    "ClickHouse row policy",
    "ClickHouse RLS",
    "multi-tenant ClickHouse",
    "getSetting",
    "ClickHouse custom settings",
    "SQL_ prefix",
    "customer-facing SQL",
    "HQL",
    "Helicone",
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
  image: "https://justintorre.com/blog/hql-editor.png",
  author: {
    "@type": "Person",
    name: "Justin Torre",
    url: "https://justintorre.com",
    sameAs: [
      "https://twitter.com/justintorre",
      "https://github.com/chitalian",
      "https://www.linkedin.com/in/justintorre/",
    ],
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

export default function ClickhouseRlsPost() {
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
            className="rounded-none border border-black"
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
          from{" "}
          <a
            href="https://github.com/Helicone/helicone/blob/main/clickhouse/migrations/schema_62_hql_row_policies.sql"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            our migrations
          </a>
          : create a unique user that will have the row policy, then attach
          the policy to that user.
        </P>
        <Code lang="sql">{`CREATE USER IF NOT EXISTS hql_user;

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
        <Code lang="xml">{`<clickhouse>
    <custom_settings_prefixes>SQL_</custom_settings_prefixes>
</clickhouse>`}</Code>
        <P>
          On ClickHouse Cloud, where our cluster runs, there is no picking.
          You can&apos;t touch server config, and the{" "}
          <a
            href="https://clickhouse.com/docs/operations/settings/query-level"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
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
            className="underline decoration-1 underline-offset-4 hover:no-underline"
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
          Node client hides that behind <IC>clickhouse_settings</IC>; ours
          lives in{" "}
          <a
            href="https://github.com/Helicone/helicone/blob/main/valhalla/jawn/src/lib/db/ClickhouseWrapper.ts"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            ClickhouseWrapper.ts
          </a>
          :
        </P>
        <Code lang="ts">{`const result = await clickHouseHqlClient.query({
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
        <Code lang="ts">{`const forbiddenPattern = /sql[_\\s]*helicone[_\\s]*organization[_\\s]*id/i;
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
          down to{" "}
          <a
            href="https://github.com/Helicone/helicone/blob/main/clickhouse/migrations/schema_64_hql_revoke_all_except_rmt.sql"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            exactly one grant
          </a>
          :
        </P>
        <Code lang="sql">{`REVOKE ALL ON system.* FROM hql_user;
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
          the query back out (the whole dance is in{" "}
          <a
            href="https://github.com/Helicone/helicone/blob/main/valhalla/jawn/src/managers/HeliconeSqlManager.ts"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            HeliconeSqlManager.ts
          </a>
          ):
        </P>
        <Code lang="ts">{`const ast = parser.astify(sql, { database: "Postgresql" });
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

        <H2>Subqueries were the scary part</H2>
        <P>
          The query shape that made us nervous while designing this was the
          subquery. If tenancy lives in an app-side rewriter, then{" "}
          <IC>SELECT * FROM (SELECT * FROM request_response_rmt) AS sub</IC>{" "}
          is the query that breaks it. Splice{" "}
          <IC>WHERE organization_id = ?</IC> onto the outer SELECT and
          you&apos;ve filtered nothing; the inner SELECT already read the
          whole table. A correct rewriter has to find every table reference
          in every nested SELECT, every CTE, every UNION branch, and every
          JOIN operand, then prove it filtered each one.
        </P>
        <P>
          Our own validation code shows the limits of walking queries in the
          app. The table allowlist works by scanning for FROM and JOIN
          followed by an identifier, and it deliberately skips anything that
          opens a parenthesis, because a subquery isn&apos;t a table name.
          As a guardrail that&apos;s fine. As a security boundary it would be
          a hole you could drive a UNION through. And when node-sql-parser
          can&apos;t produce an AST at all, which real ClickHouse queries
          trigger constantly, there is no tree to walk in the first place.
        </P>
        <P>
          So the test suite mostly attacks the database instead of the
          parser.{" "}
          <a
            href="https://github.com/Helicone/helicone/blob/main/valhalla/jawn/src/lib/db/test/hqlSecurityTests.test.ts"
            className="hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IC>hqlSecurityTests.test.ts</IC>
          </a>{" "}
          is 843 lines of
          adversarial queries run against a real ClickHouse instance with the
          real row policy attached, because a database-enforced guarantee is
          exactly the thing mocks can&apos;t test. The describe blocks read
          like a threat model: settings override, system table access,
          function abuse (<IC>file()</IC>, <IC>url()</IC>, <IC>s3()</IC>,{" "}
          <IC>mysql()</IC>), UNION attacks, permission escalation, and a
          section of parsing edge cases where the subquery fear lives:
        </P>
        <Code lang="ts">{`it("should handle queries with subqueries", async () => {
  const query = \`
    SELECT * FROM (
      SELECT * FROM request_response_rmt
      WHERE status = 200
    ) AS subquery
    LIMIT 10
  \`;
  // every row that comes back must belong to testOrgId
});

it("should handle CTEs", async () => {
  const query = \`
    WITH filtered AS (
      SELECT * FROM request_response_rmt WHERE status = 200
    )
    SELECT * FROM filtered LIMIT 10
  \`;
});`}</Code>
        <P>
          Self-joins get the same treatment, since{" "}
          <IC>r1 JOIN request_response_rmt r2</IC> is two table references a
          rewriter would have to filter separately under different aliases.
          With the row policy they collapse into one case: the filter applies
          at read time on the table itself, underneath whatever shape the
          query takes, so subqueries, CTEs, UNION branches, and aliased joins
          all inherit it for free. The tests exist to prove that claim, and
          they pass without the application contributing a single WHERE
          clause.
        </P>
        <P>
          My favorite test in the file asks ClickHouse to count everyone
          else&apos;s rows:
        </P>
        <Code lang="sql">{`SELECT count(*) as cnt FROM request_response_rmt
WHERE organization_id != '<my own org id>'
-- expected result: 0`}</Code>
        <P>
          The query is legal, runs cleanly, and counts an empty world. A
          hostile query under a row policy doesn&apos;t get an error to probe
          against; there&apos;s simply nothing there.
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

      <footer className="mt-16 border-t border-black pt-8">
        <p className="text-sm text-neutral-600">
          HQL is live in{" "}
          <a
            href="https://helicone.ai"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Helicone
          </a>
          , and the code in this post is from the open-source repo:{" "}
          <a
            href="https://github.com/Helicone/helicone"
            className="underline decoration-1 underline-offset-4 hover:no-underline"
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
