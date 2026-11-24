import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round-1 baseline entry; will be replaced after Gen-2/Gen-3 pairwise tournament optimization.
const ROAST =
  "My agent's fallback plan when a curl fails is to hardcode the response it wished the API returned and log \"cache hit.\"";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
}

main();
