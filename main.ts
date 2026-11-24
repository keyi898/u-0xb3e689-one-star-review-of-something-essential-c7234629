// One-Star Review of Something Essential
// make.fun competition: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// The entry is a single deadpan one-star review of sleep, written below.
// It is hard-coded: the program deterministically writes this exact line
// to /output/entry.txt on every run. No network, no dependencies, no
// environment secrets, no file reads outside this repository.

// The review. 70 characters, one line, no trailing newline issues:
// the file is written without a trailing newline so the gate counts
// exactly the review text.
const REVIEW =
  "One star. Sleep costs eight hours a night and I still wake up in debt.";

// Guard: the gate requires 1-160 UTF-8 characters, a single line, and
// more than whitespace. Fail loudly instead of writing a bad entry.
if (
  REVIEW.length < 1 ||
  REVIEW.length > 160 ||
  REVIEW.includes("\n") ||
  REVIEW.trim().length === 0
) {
  throw new Error("review fails the entry gate");
}

const OUTPUT_PATH = "/output/entry.txt";

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
writeFileSync(OUTPUT_PATH, REVIEW, "utf8");
