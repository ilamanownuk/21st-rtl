import fs from "node:fs";
import path from "node:path";
import type { ComponentDoc } from "@/lib/registry";

/** Reads a project file as-is, so what is shown and copied is what runs here. */
export function readSource(file: string): string {
  return fs.readFileSync(path.join(/*turbopackIgnore: true*/ process.cwd(), file), "utf8");
}

export function readPrompt(doc: ComponentDoc): string {
  return readSource(path.join("21st-prompts", doc.promptFile));
}

/** The 21st.dev link some prompts carry on their first line. */
export function sourceUrl(prompt: string): string | undefined {
  const first = prompt.split("\n", 1)[0].trim();
  return /^https:\/\/21st\.dev\//.test(first) ? first : undefined;
}
