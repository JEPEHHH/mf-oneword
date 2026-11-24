// Bounty: "One Word, One Username, One Reward" (make.fun)
// Rule: entry file must contain exactly ONE word — the entrant's make.fun
// username — with nothing else: no labels, no explanation, no extra lines.
// This program writes "jepehhh" plus a single trailing newline to /output/entry.txt.
// Node 22, zero dependencies: the file is written with node:fs only.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";
const USERNAME = "jepehhh";

if (USERNAME.length > 30) {
  throw new Error("username must be 30 characters or fewer");
}
if (/\s/.test(USERNAME)) {
  throw new Error("username must be a single word with no whitespace");
}

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, `${USERNAME}\n`, "utf8");

process.exit(0);
