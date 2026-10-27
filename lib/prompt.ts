import type { ComponentDoc } from "@/lib/registry";
import { readSource } from "@/lib/source";

const fence = (lang: string, title: string, code: string) => "```" + lang + "\n" + title + "\n" + code.trimEnd() + "\n```";

/**
 * A Persian prompt in the same shape as the 21st.dev ones, built from the files
 * in this project so it installs the right-to-left version shown here.
 */
export function buildPrompt(doc: ComponentDoc): string {
  const name = doc.file.split("/").pop()!;
  const deps = [...doc.dependencies, ...(doc.animateCss ? ["tw-animate-css"] : [])];
  const parts = [
    "وظیفه‌ی تو افزودن یک کامپوننت React آماده به این پروژه است.",
    "",
    "پروژه باید این موارد را پشتیبانی کند:",
    "- ساختار پروژه‌ی shadcn",
    "- Tailwind CSS",
    "- TypeScript",
    "",
    "اگر پشتیبانی نمی‌کند، توضیح بده چطور پروژه را با shadcn CLI راه‌اندازی کند و Tailwind یا TypeScript را نصب کند.",
    "",
    "مسیر پیش‌فرض کامپوننت‌ها و استایل‌ها را پیدا کن.",
    "اگر مسیر پیش‌فرض کامپوننت‌ها /components/ui نیست، توضیح بده چرا ساختن این پوشه مهم است.",
    "این کامپوننت فارسی و راست‌به‌چپ (RTL) است. متن‌ها، ارقام و جهت چیدمان و حرکتش را تغییر نده.",
    "برای نمایش درست، یک فونت فارسی مثل Vazirmatn در پروژه بارگذاری کن (در Next.js با next/font/google)؛ در غیر این صورت کامپوننت از Tahoma استفاده می‌کند.",
    "",
    "این کامپوننت را در پوشه‌ی /components/ui کپی کن:",
    fence("tsx", name, readSource(doc.file)),
    "",
    "نمونه‌ی استفاده:",
    fence("tsx", "demo.tsx", readSource(`components/demos/${doc.slug}.tsx`)),
  ];
  if (doc.extraFiles.length) {
    parts.push("", "این فایل‌های وابسته را هم (اگر در پروژه نیستند) کپی کن:");
    for (const f of doc.extraFiles) parts.push(fence(f.endsWith(".ts") ? "ts" : "tsx", f, readSource(f)));
  }
  if (deps.length || doc.devDependencies?.length) {
    parts.push("", "وابستگی‌های npm را نصب کن:", fence("bash", "", [...deps, ...(doc.devDependencies ?? [])].join(", ")).replace("```bash\n\n", "```bash\n"));
  }
  if (doc.animateCss) {
    parts.push("", 'کلاس‌های animate-in از tw-animate-css می‌آیند؛ در globals.css بعد از @import "tailwindcss" این خط را اضافه کن: @import "tw-animate-css";');
  }
  return parts.join("\n") + "\n";
}
