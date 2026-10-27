import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowUpRight, ChevronLeft, Info, Maximize2 } from "lucide-react";
import CodeBlock from "@/components/site/code-block";
import CopyButton from "@/components/site/copy-button";
import PropsTable from "@/components/site/props-table";
import { COMPONENTS, getComponent, installCommand, type ComponentDoc } from "@/lib/registry";
import { buildPrompt } from "@/lib/prompt";
import { readPrompt, readSource, sourceUrl } from "@/lib/source";

export function generateStaticParams() {
  return COMPONENTS.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/components/[slug]">): Promise<Metadata> {
  const doc = getComponent((await params).slug);
  return doc ? { title: doc.nameFa, description: doc.summary } : {};
}

export default function ComponentPage({ params }: PageProps<"/components/[slug]">) {
  return (
    <Suspense>
      {params.then(({ slug }) => {
        const doc = getComponent(slug);
        if (!doc) notFound();
        return <ComponentDocs doc={doc} />;
      })}
    </Suspense>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20">
      <h2 id={`${id}-title`} className="mb-4 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Step({ n, title, children }: { n: number; title: React.ReactNode; children?: React.ReactNode }) {
  return (
    <li className="relative ps-10">
      <span className="absolute start-0 top-0 grid size-7 place-items-center rounded-full border bg-background text-xs font-semibold">
        {n.toLocaleString("fa-IR")}
      </span>
      <h3 className="pt-0.5 font-medium leading-7">{title}</h3>
      {children && <div className="mt-3 space-y-3">{children}</div>}
    </li>
  );
}

const Path = ({ children }: { children: string }) => (
  <code dir="ltr" className="inline-block max-w-full break-all rounded bg-muted px-1.5 py-0.5 align-middle font-mono text-[13px]">
    {children}
  </code>
);

function ComponentDocs({ doc }: { doc: ComponentDoc }) {
  const prompt = buildPrompt(doc);
  const original = readPrompt(doc);
  const code = readSource(doc.file);
  const demo = readSource(`components/demos/${doc.slug}.tsx`);
  const source = sourceUrl(original);
  const install = installCommand(doc);
  const index = COMPONENTS.indexOf(doc);
  const next = COMPONENTS[(index + 1) % COMPONENTS.length];

  let step = 0;
  const toc = [
    ["preview", "پیش‌نمایش"],
    ["install", "نصب"],
    ["usage", "نحوه‌ی استفاده"],
    ["props", "پراپ‌ها"],
    ...(doc.notes.length ? [["notes", "نکته‌ها"]] : []),
    ["example", "نمونه‌ی کامل"],
    ["prompt", "پرامپت"],
  ];

  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
      <nav aria-label="مسیر" className="mb-6 flex items-center gap-1 text-sm text-muted-foreground">
        <Link href="/" className="hover:text-foreground">
          کامپوننت‌ها
        </Link>
        <ChevronLeft className="size-4" aria-hidden />
        <span className="text-foreground">{doc.nameFa}</span>
      </nav>

      <header className="max-w-3xl">
        <div className="flex flex-wrap gap-1.5">
          {doc.tags.map((t) => (
            <span key={t} className="rounded-full bg-muted px-2.5 py-0.5 text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">{doc.nameFa}</h1>
        <p className="mt-1 font-mono text-sm text-muted-foreground">
          <bdi>{doc.name}</bdi>
        </p>
        <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">{doc.summary}</p>
        <p className="mt-3 leading-8">{doc.description}</p>
        <div className="mt-6 flex flex-wrap items-center gap-2">
          <CopyButton src={`/raw/${doc.slug}/code`} variant="solid" label={`کپی کد ${doc.nameFa}`}>
            کپی کد کامپوننت
          </CopyButton>
          <CopyButton src={`/raw/${doc.slug}/prompt`} label={`کپی پرامپت ${doc.nameFa}`}>
            کپی پرامپت
          </CopyButton>
          <Link
            href={`/preview/${doc.slug}`}
            target="_blank"
            className="inline-flex h-9 items-center gap-2 rounded-lg border px-3.5 text-sm font-medium hover:bg-accent"
          >
            <Maximize2 className="size-4" aria-hidden />
            تمام‌صفحه
          </Link>
          {source && (
            <a
              href={source}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center gap-1.5 rounded-lg px-3 text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
            >
              <span dir="ltr">21st.dev</span>
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          )}
        </div>
      </header>

      <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_180px]">
        <div className="min-w-0 space-y-14">
          <Section id="preview" title="پیش‌نمایش">
            <div className="overflow-hidden rounded-2xl border bg-muted shadow-sm">
              <iframe
                src={`/preview/${doc.slug}`}
                title={`پیش‌نمایش ${doc.nameFa}`}
                className="block h-[520px] w-full bg-white sm:h-[640px]"
              />
            </div>
          </Section>

          <Section id="install" title="نصب">
            <p className="mb-6 leading-8 text-muted-foreground">
              پیش از شروع، پروژه باید{" "}
              <Link href="/setup" className="font-medium text-foreground underline underline-offset-4">
                پیش‌نیازها
              </Link>{" "}
              (Tailwind CSS، TypeScript و مسیر <Path>@/*</Path>) را داشته باشد.
            </p>
            <ol className="space-y-8">
              {install ? (
                <Step n={++step} title="وابستگی‌ها را نصب کنید">
                  <CodeBlock code={install} lang="bash" title="terminal" />
                </Step>
              ) : (
                <Step n={++step} title="این کامپوننت به هیچ پکیج اضافه‌ای جز React نیاز ندارد." />
              )}
              {doc.extraFiles.length > 0 && (
                <Step n={++step} title="فایل‌های وابسته را بسازید (اگر از قبل ندارید)">
                  {doc.extraFiles.map((f) => (
                    <CodeBlock key={f} code={readSource(f)} title={f} collapseAt={240} />
                  ))}
                </Step>
              )}
              <Step
                n={++step}
                title={
                  <>
                    کد کامپوننت را در <Path>{doc.file}</Path> قرار دهید
                  </>
                }
              >
                <CodeBlock code={code} title={doc.file} />
              </Step>
              {doc.animateCss && (
                <Step n={++step} title="انیمیشن‌های tw-animate-css را به globals.css اضافه کنید">
                  <CodeBlock code={`@import "tailwindcss";\n@import "tw-animate-css";`} lang="css" title="app/globals.css" />
                </Step>
              )}
            </ol>
          </Section>

          <Section id="usage" title="نحوه‌ی استفاده">
            <CodeBlock code={doc.usage} title="example.tsx" />
          </Section>

          <Section id="props" title="پراپ‌ها (ورودی‌ها)">
            <PropsTable props={doc.props} />
            {doc.types?.map((t) => (
              <div key={t.name} className="mt-8">
                <h3 className="mb-3 font-medium">
                  ساختار <code dir="ltr" className="font-mono text-[15px]">{t.name}</code>
                </h3>
                <PropsTable props={t.props} />
              </div>
            ))}
          </Section>

          {doc.notes.length > 0 && (
            <Section id="notes" title="نکته‌ها">
              <ul className="space-y-3">
                {doc.notes.map((n) => (
                  <li key={n} className="flex gap-3 rounded-xl border bg-amber-50/50 p-4 leading-7">
                    <Info className="mt-1 size-4 shrink-0 text-amber-600" aria-hidden />
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section id="example" title="نمونه‌ی کامل">
            <p className="mb-4 leading-8 text-muted-foreground">کد دقیق پیش‌نمایش بالای همین صفحه:</p>
            <CodeBlock code={demo} title="demo.tsx" />
          </Section>

          <Section id="prompt" title="پرامپت">
            <p className="mb-4 leading-8 text-muted-foreground">
              این متن را به دستیار هوش مصنوعی‌تان بدهید تا نسخه‌ی فارسی و راست‌به‌چپ همین کامپوننت را با همه‌ی وابستگی‌هایش
              در پروژه نصب کند.
            </p>
            <CodeBlock code={prompt} lang="markdown" title="prompt.md" collapseAt={320} />
            <div className="mt-4 flex flex-wrap items-center gap-3 rounded-xl border border-dashed p-4 text-sm">
              <span className="flex-1 leading-7 text-muted-foreground">
                پرامپت اصلی <span dir="ltr">21st.dev</span> (انگلیسی و چپ‌به‌راست) هم در دسترس است.
              </span>
              <CopyButton src={`/raw/${doc.slug}/original`} size="sm" label={`کپی پرامپت اصلی ${doc.nameFa}`}>
                کپی پرامپت اصلی
              </CopyButton>
            </div>
          </Section>

          <Link
            href={`/components/${next.slug}`}
            className="flex items-center justify-between rounded-2xl border p-5 transition-colors hover:bg-accent"
          >
            <span>
              <span className="block text-xs text-muted-foreground">کامپوننت بعدی</span>
              <span className="mt-1 block font-semibold">{next.nameFa}</span>
            </span>
            <ChevronLeft className="size-5" aria-hidden />
          </Link>
        </div>

        <aside className="hidden lg:block">
          <nav aria-label="فهرست صفحه" className="sticky top-24 text-sm">
            <p className="mb-3 font-medium">در این صفحه</p>
            <ul className="space-y-2 border-s ps-4">
              {toc.map(([id, label]) => (
                <li key={id}>
                  <a href={`#${id}`} className="text-muted-foreground hover:text-foreground">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      </div>
    </main>
  );
}
