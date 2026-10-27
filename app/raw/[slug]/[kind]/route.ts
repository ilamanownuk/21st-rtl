import { COMPONENTS, getComponent } from "@/lib/registry";
import { readPrompt, readSource } from "@/lib/source";

const KINDS = ["prompt", "code"] as const;

export function generateStaticParams() {
  return COMPONENTS.flatMap(({ slug }) => KINDS.map((kind) => ({ slug, kind })));
}

export async function GET(_req: Request, ctx: RouteContext<"/raw/[slug]/[kind]">) {
  const { slug, kind } = await ctx.params;
  const doc = getComponent(slug);
  if (!doc || !KINDS.includes(kind as (typeof KINDS)[number])) {
    return new Response("Not found", { status: 404 });
  }
  const body = kind === "prompt" ? readPrompt(doc) : readSource(doc.file);
  return new Response(body, { headers: { "content-type": "text/plain; charset=utf-8" } });
}
