import Link from "next/link";
import { ArrowUpRight, Maximize2 } from "lucide-react";
import CopyPromptButton from "@/components/copy-prompt-button";
import { PROMPTS, readPrompt, sourceUrl } from "@/lib/prompts";

export default function Home() {
  const items = PROMPTS.map((entry) => {
    const prompt = readPrompt(entry);
    return { ...entry, prompt, source: sourceUrl(prompt) };
  });

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 sm:mb-14">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
          21st prompts · {items.length} components
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Component prompt gallery</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Live previews of every prompt in <code className="font-mono text-sm">21st-prompts/</code>. Copy a prompt to
          get the exact markdown it was written in.
        </p>
      </header>

      <div className="flex flex-col gap-12 sm:gap-16">
        {items.map((item, i) => (
          <section key={item.slug} id={item.slug} aria-labelledby={`${item.slug}-title`} className="scroll-mt-6">
            <div className="mb-4 flex flex-wrap items-end justify-between gap-x-6 gap-y-3">
              <div className="min-w-0">
                <p className="font-mono text-xs text-muted-foreground">
                  {String(i + 1).padStart(2, "0")} · {item.file}
                </p>
                <h2 id={`${item.slug}-title`} className="mt-1 text-xl font-semibold tracking-tight">
                  {item.title}
                </h2>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                {item.source && (
                  <a
                    href={item.source}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors hover:bg-accent"
                  >
                    21st.dev
                    <ArrowUpRight className="size-4" aria-hidden />
                  </a>
                )}
                <Link
                  href={`/preview/${item.slug}`}
                  target="_blank"
                  className="inline-flex h-9 items-center gap-1.5 rounded-lg border px-3 text-sm font-medium transition-colors hover:bg-accent"
                >
                  <Maximize2 className="size-4" aria-hidden />
                  Full screen
                </Link>
                <CopyPromptButton prompt={item.prompt} label={item.title} />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border bg-muted shadow-sm">
              <iframe
                src={`/preview/${item.slug}`}
                title={`${item.title} preview`}
                loading="lazy"
                className="block h-[560px] w-full bg-white sm:h-[680px]"
              />
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
