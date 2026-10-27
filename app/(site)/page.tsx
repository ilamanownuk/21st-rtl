import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Code2, Sparkles } from "lucide-react";
import CopyButton from "@/components/site/copy-button";
import { COMPONENTS } from "@/lib/registry";

const fa = (n: number) => n.toLocaleString("fa-IR");

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <section className="mb-12 max-w-3xl sm:mb-16">
        <p className="text-sm font-medium text-muted-foreground">{fa(COMPONENTS.length)} کامپوننت آماده</p>
        <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight sm:text-5xl sm:leading-tight">
          کامپوننت‌های قابل استفاده‌ی مجدد، آماده‌ی کپی
        </h1>
        <p className="mt-5 text-base leading-8 text-muted-foreground sm:text-lg sm:leading-9">
          برای هر کامپوننت دو راه دارید: <strong className="font-semibold text-foreground">پرامپت</strong> را کپی کنید و
          به دستیار هوش مصنوعی‌تان بدهید تا آن را در پروژه نصب کند، یا <strong className="font-semibold text-foreground">کد</strong>{" "}
          را کپی کنید و طبق راهنمای همان کامپوننت خودتان استفاده کنید.
        </p>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border p-4">
            <Sparkles className="size-5 text-amber-500" aria-hidden />
            <h2 className="mt-3 font-semibold">کپی پرامپت</h2>
            <p className="mt-1 text-sm leading-7 text-muted-foreground">
              متن کامل دستورالعمل نصب، شامل کد و وابستگی‌ها، برای Claude یا هر دستیار دیگر.
            </p>
          </div>
          <div className="rounded-xl border p-4">
            <Code2 className="size-5 text-sky-600" aria-hidden />
            <h2 className="mt-3 font-semibold">کپی کد</h2>
            <p className="mt-1 text-sm leading-7 text-muted-foreground">
              فایل کامپوننت را مستقیم در پروژه بگذارید؛ ورودی‌ها و روش استفاده در صفحه‌ی هر کامپوننت آمده است.{" "}
              <Link href="/setup" className="font-medium text-foreground underline underline-offset-4">
                پیش‌نیازها
              </Link>
            </p>
          </div>
        </div>
      </section>

      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {COMPONENTS.map((c) => (
          <li key={c.slug} className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card shadow-sm transition-shadow hover:shadow-md">
            <Link href={`/components/${c.slug}`} className="block aspect-[16/10] overflow-hidden border-b bg-muted">
              <Image
                src={`/previews/${c.slug}.jpg`}
                alt={`پیش‌نمایش ${c.nameFa}`}
                width={1280}
                height={800}
                sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </Link>
            <div className="flex flex-1 flex-col p-5">
              <div className="flex flex-wrap gap-1.5">
                {c.tags.map((t) => (
                  <span key={t} className="rounded-full bg-muted px-2 py-0.5 text-[11px] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <h2 className="mt-3 text-lg font-semibold">
                <Link href={`/components/${c.slug}`} className="after:absolute after:inset-0">
                  {c.nameFa}
                </Link>
              </h2>
              <p className="font-mono text-xs text-muted-foreground">
                <bdi>{c.name}</bdi>
              </p>
              <p className="mt-2 line-clamp-3 flex-1 text-sm leading-7 text-muted-foreground">{c.summary}</p>
              <div className="relative z-10 mt-5 flex items-center gap-2">
                <CopyButton src={`/raw/${c.slug}/prompt`} size="sm" variant="solid" label={`کپی پرامپت ${c.nameFa}`}>
                  کپی پرامپت
                </CopyButton>
                <CopyButton src={`/raw/${c.slug}/code`} size="sm" label={`کپی کد ${c.nameFa}`}>
                  کپی کد
                </CopyButton>
                <Link
                  href={`/components/${c.slug}`}
                  className="ms-auto inline-flex h-8 items-center gap-1 rounded-lg px-2 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-foreground"
                >
                  راهنما
                  <ArrowLeft className="size-3.5" aria-hidden />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </main>
  );
}
