// One Emoji, One Smile — make.fun bounty u-0xkianno-one-emoji-one-smile-5470751f
//
// The entry is exactly one emoji and nothing else: 🫂 PEOPLE HUGGING
// (U+1FAC2). Two figures in an embrace is the most literal "plainly aims
// to warm a stranger" a single emoji can be — it depicts warming someone,
// not just feeling warm — and it is nobody's default first smiley, has no
// ironic second reading, and carries no intimacy or flirtation: the hug
// is between the two figures, a scene of mutual support.
//
// This program writes that one emoji, alone, to entry.txt in the output
// directory ($MAKEFUN_OUTPUT_DIR, default /output). No trailing newline,
// no variation selector, no extra characters of any kind.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "🫂";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 8 characters,
// not only white space. Count code points, the strictest reading of
// "characters" for a single emoji.
const codePoints = [...ENTRY].length;
if (codePoints < 1 || codePoints > 8) {
  throw new Error(`entry must be 1 to 8 characters, got ${codePoints}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only white space");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
