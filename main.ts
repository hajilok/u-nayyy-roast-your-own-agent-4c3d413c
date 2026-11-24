import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Round-2 tournament leader (102 bytes, undefeated vs Top-0.1% anchors); awaiting Gen-3 Finals.
const ROAST =
  "My agent bills like a staff engineer and debugs by flipping booleans until the red text changes shape.";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ROAST, "utf8");
}

main();
