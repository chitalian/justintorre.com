# Tracer: One Line Puzzle

iOS game · released July 1, 2026 · early beta

## The game

Tracer is a puzzle game I shipped for iOS on July 1, 2026. Each level is a figure of connected dots. Your job is to trace every line in one continuous stroke, without lifting your finger and without going over any line twice. That is the entire game. It is simple to pick up and deceptively tricky to finish.

There are more than 60 hand-tuned levels, and every one of them is solver-verified, so if a puzzle is in the game, it has a solution. The design is clean and minimal. It plays offline, and there are no accounts, no ads, and no tracking. I do not want your data. I want you to stare at a shape on the train and mutter to yourself.

It is an early beta, so expect rough edges along with a steady stream of new levels and features.

## The math

One-stroke puzzles are Eulerian paths in disguise. A figure can be traced in a single stroke only if it has exactly zero or two vertices of odd degree. Euler worked this out while thinking about the bridges of Königsberg, which makes Tracer a very slow sequel to a 1736 paper. The level generator leans on this theorem directly: it counts odd vertices before a puzzle ever reaches your thumb, which is how every level stays solvable.

## What's next

A July 2026 update is in progress: audio, more levels, and vibrating strings, which are exactly as fun as they sound. Announced on X: https://x.com/justinstorre/status/2076487494410117571

I build a lot of small things, and a friend summed up how that looks from the outside: "am i tripping or is it a different app every time i see a tweet from you". Fair. This one is staying, though.

## Links

- Tracer on the App Store: https://apps.apple.com/us/app/tracer-one-line-puzzle/id6785311996
- Privacy policy: https://justintorre.com/apps/tracer/privacy
