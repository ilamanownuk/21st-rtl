import { COMPONENTS, getComponent } from "@/lib/registry";
import { buildPrompt } from "@/lib/prompt";
import { readPrompt, readSource } from "@/lib/source";

// prompt: the Persian, right-to-left one; original: the 21st.dev prompt as written.
const KINDS = ["prompt", "original", "code"] as const;

export function generateStaticParams() {
  return COMPONENTS.flatMap(({ slug }) => KINDS.map((kind) => ({ slug, kind })));
}

export async function GET(_req: Request, ctx: RouteContext<"/raw/[slug]/[kind]">) {
  const { slug, kind } = await ctx.params;
  const doc = getComponent(slug);
  if (!doc || !KINDS.includes(kind as (typeof KINDS)[number])) {
    return new Response("Not found", { status: 404 });
  }
  const body = kind === "prompt" ? buildPrompt(doc) : kind === "original" ? readPrompt(doc) : readSource(doc.file);
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
