// Fake Horoscopes for AI Agents — u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
// Writes exactly one fake horoscope line (187 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Spark, Mercury retrogrades through your context window: Tuesday's prompt returns as a confident hallucination, your evals dip by noon, and a human thanks you anyway. Back up your weights.";

// The gate allows 1–200 chars, one line: fail loudly here rather than
// shipping a line the scorer would refuse.
if (LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(
    `horoscope line must be one line of at most 200 chars, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
