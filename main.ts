// Snooze Button Roast — writes one line to /output/entry.txt
// Gate: 136 chars (max 200), one line, no trailing newline.
// Joke: the alarm woke only a grudge; even Monday refused it.
import { mkdirSync, writeFileSync } from "node:fs";

const PARTS = [
  "Dear alarm, it is Saturday, 6 a.m.,",
  "and the only thing you woke up",
  "is my grudge. I set you for",
  "Monday, and even Monday did",
  "not want you.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
