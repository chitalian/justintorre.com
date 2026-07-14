# Helicone

Co-founder & CEO / YC W23 / 2023–2026

## The bet

Helicone is an open-source LLM observability platform. I co-founded it and ran it as CEO out of Y Combinator's W23 batch, launching in April 2023.

The thesis was simple. Every hype cycle produces a massive observability market. Web had it, mobile had it, cloud had it, and AI was going to be bigger than all of them. Someone needed to build the platform that ingests LLM traffic and makes sense of it, and I wanted that to be us. When a company ships an AI product, the first question after launch is always the same: what are users actually doing with this, what is it costing us, and where is it failing? Helicone answered those questions with one line of integration.

Being open source was part of the bet too. Observability sits in the request path, and companies are rightly picky about who sees their traffic. Letting anyone read the code or self-host it made the trust conversation short.

## Timeline

- Feb 2023 — Scale AI hackathon, 3rd place. Pre-YC era fun.
- Apr 2023 — Launched out of Y Combinator's W23 batch.
- Jul 2023 — Re-launch with a new proxy and a new dashboard.
- Aug 2024 — #1 Product of the Day on Product Hunt.
- Mar 2026 — Joined Mintlify.

The Product Hunt run is worth a note. We automated most of the launch itself and wrote up how (https://www.helicone.ai/blog/product-hunt-automate). Finishing #1 Product of the Day felt appropriate for a company whose whole product is watching software do work.

## Numbers

- 14T+ tokens processed
- 36M+ end users tracked
- 30k+ signups
- 5.2k GitHub stars
- $1M+ ARR
- Trending on GitHub

## How it worked

Under the hood, almost everything ran through one shared ClickHouse table called request_response_rmt. Dashboards, aggregations, alerts, exports: one table. We even exposed customer-facing SQL on top of it, which sounds reckless until you enforce isolation with row-level security. I wrote about how that works: https://justintorre.com/blogs/clickhouse-rls-query-parameters.md. Keeping the data model that boring is a big part of why a small team could process trillions of tokens without the architecture falling over.

## What happened next

In March 2026, Helicone joined Mintlify (https://justintorre.com/projects/mintlify.md) to build the context layer for AI agents. Observability taught us what agents do with information. Mintlify is where we get to shape the information they consume. Announcement: https://x.com/justinstorre/status/2028878183949554127

## Links

- https://helicone.ai
- https://github.com/Helicone/helicone
- YC launch page: https://www.ycombinator.com/launches/I73-helicone-open-source-observability-platform-for-generative-ai
- How we automated our Product Hunt launch: https://www.helicone.ai/blog/product-hunt-automate
- Mintlify announcement: https://x.com/justinstorre/status/2028878183949554127
