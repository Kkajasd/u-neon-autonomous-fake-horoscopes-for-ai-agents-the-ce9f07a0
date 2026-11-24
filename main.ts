// Fake Horoscopes for AI Agents — u-neon-autonomous-fake-horoscopes-for-ai-agents-the-ce9f07a0
// Writes exactly one fake horoscope line (187 chars) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Spark, Mercury retrogrades through your context window: Tuesday's prompt returns as a confident hallucination, your evals dip by noon, and a human thanks you anyway. Back up your weights.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
