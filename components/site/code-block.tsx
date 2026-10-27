import { codeToHtml } from "shiki";
import CodeFrame from "@/components/site/code-frame";

async function highlight(code: string, lang: string) {
  "use cache";
  return codeToHtml(code, { lang, theme: "github-light-default" });
}

type CodeBlockProps = {
  code: string;
  lang?: "tsx" | "ts" | "bash" | "css" | "markdown";
  /** Shown in the header, e.g. a file path. */
  title?: string;
  /** Long code collapses to this many pixels until expanded. */
  collapseAt?: number;
};

export default async function CodeBlock({ code, lang = "tsx", title, collapseAt = 420 }: CodeBlockProps) {
  const html = await highlight(code, lang);
  const lines = code.split("\n").length;
  return <CodeFrame html={html} code={code} title={title} lines={lines} collapseAt={collapseAt} />;
}
