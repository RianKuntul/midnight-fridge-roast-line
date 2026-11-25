// Midnight Fridge Roast — entry for make.fun competition
// u-carbon-forge-midnight-fridge-roast-fc5d44a7
//
// Writes a single-line roast of a smart fridge that refuses to open
// after midnight to $MAKEFUN_OUTPUT_DIR/entry.txt.
// Gate: UTF-8 text, 1-200 characters, not only whitespace, one line,
// no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "My smart fridge locks at midnight like I'm a burglar in my own kitchen — relax, mate, I paid for the leftovers and the electricity.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
