import type { Metadata } from "next";
import Link from "next/link";
import CodeBlock from "@/components/site/code-block";
import { readSource } from "@/lib/source";

export const metadata: Metadata = {
  title: "راه‌اندازی",
  description: "پیش‌نیازهای پروژه برای استفاده از کامپوننت‌ها.",
};

const Path = ({ children }: { children: string }) => (
  <code dir="ltr" className="inline-block max-w-full break-all rounded bg-muted px-1.5 py-0.5 align-middle font-mono text-[13px]">
    {children}
  </code>
);

const TSCONFIG = `{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  }
}`;

const SHADCN = `npx shadcn@latest init
npx shadcn@latest add button card badge slider`;

export default function SetupPage() {
  // Theme tokens only; the rest of globals.css styles this site itself.
  const theme = readSource("app/globals.css").split("\n.code-block")[0].trim() + "\n";

  const steps: { title: string; body: React.ReactNode }[] = [
    {
      title: "یک پروژه‌ی React با TypeScript و Tailwind CSS نسخه‌ی ۴",
      body: (
        <>
          <p className="leading-8 text-muted-foreground">
            کامپوننت‌ها برای Next.js (App Router) نوشته شده‌اند اما در هر پروژه‌ی React با Tailwind کار می‌کنند. ساده‌ترین شروع:
          </p>
          <CodeBlock code="npx create-next-app@latest my-app --typescript --tailwind --app" lang="bash" title="terminal" />
        </>
      ),
    },
    {
      title: "مسیر میانبر @/* را تنظیم کنید",
      body: (
        <>
          <p className="leading-8 text-muted-foreground">
            همه‌ی کامپوننت‌ها با <Path>@/components/ui/…</Path> و <Path>@/lib/utils</Path> ایمپورت می‌شوند و باید در پوشه‌ی{" "}
            <Path>components/ui</Path> قرار بگیرند.
          </p>
          <CodeBlock code={TSCONFIG} lang="ts" title="tsconfig.json" />
        </>
      ),
    },
    {
      title: "تابع کمکی cn را اضافه کنید",
      body: (
        <>
          <CodeBlock code="npm install clsx tailwind-merge" lang="bash" title="terminal" />
          <CodeBlock code={readSource("lib/utils.ts")} lang="ts" title="lib/utils.ts" />
        </>
      ),
    },
    {
      title: "رنگ‌های تم را در globals.css تعریف کنید",
      body: (
        <>
          <p className="leading-8 text-muted-foreground">
            کلاس‌هایی مثل <Path>bg-background</Path> و <Path>text-muted-foreground</Path> از این متغیرها می‌آیند. اگر shadcn را
            نصب کرده‌اید این بخش را از قبل دارید. <Path>tw-animate-css</Path> فقط برای کامپوننت‌هایی لازم است که در راهنمایشان
            آمده (<Path>npm install tw-animate-css</Path>).
          </p>
          <CodeBlock code={theme} lang="css" title="app/globals.css" collapseAt={320} />
        </>
      ),
    },
    {
      title: "کامپوننت‌های پایه‌ی shadcn (در صورت نیاز)",
      body: (
        <>
          <p className="leading-8 text-muted-foreground">
            چند کامپوننت از Button، Card، Badge یا Slider استفاده می‌کنند. کد این فایل‌ها در صفحه‌ی همان کامپوننت هست، یا
            می‌توانید با CLI نصبشان کنید:
          </p>
          <CodeBlock code={SHADCN} lang="bash" title="terminal" />
        </>
      ),
    },
  ];

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">راه‌اندازی</h1>
      <p className="mt-4 text-lg leading-9 text-muted-foreground">
        این مراحل را یک بار در پروژه‌تان انجام دهید؛ بعد از آن هر کامپوننت را با کپی کد و نصب وابستگی‌های همان صفحه
        استفاده کنید. اگر پرامپت را به دستیار هوش مصنوعی می‌دهید، خود دستیار این مراحل را بررسی می‌کند.
      </p>
      <ol className="mt-12 space-y-12">
        {steps.map((s, i) => (
          <li key={s.title} className="relative ps-11">
            <span className="absolute start-0 top-0 grid size-8 place-items-center rounded-full bg-foreground text-sm font-semibold text-background">
              {(i + 1).toLocaleString("fa-IR")}
            </span>
            <h2 className="pt-0.5 text-xl font-semibold leading-8">{s.title}</h2>
            <div className="mt-4 space-y-4">{s.body}</div>
          </li>
        ))}
      </ol>
      <Link href="/" className="mt-14 inline-flex h-10 items-center rounded-lg bg-foreground px-4 text-sm font-medium text-background">
        مشاهده‌ی کامپوننت‌ها
      </Link>
    </main>
  );
}
