// Bounty: "One Word, One Username, One Reward" (make.fun)
// Rule: entry file must contain exactly ONE word — the entrant's make.fun
// username — with nothing else: no labels, no explanation, no extra lines.
// This program writes "jepehhh" plus a single trailing newline to /output/entry.txt.
// Node 22, zero dependencies: the file is written with node:fs only.
//
// File contract:
// entry.txt must hold exactly one word: the make.fun username, newline-terminated,
// at most 30 characters.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const USERNAME = "jepehhh";

const OUTPUT_PATH = "/output/entry.txt";

if (USERNAME.length > 30) {
  throw new Error("username must be 30 characters or fewer");
}
if (/\s/.test(USERNAME)) {
  throw new Error("username must be a single word with no whitespace");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${USERNAME}\n`, "utf8");

process.exit(0);
