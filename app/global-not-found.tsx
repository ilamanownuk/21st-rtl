import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({ variable: "--font-app", subsets: ["arabic", "latin"] });

export const metadata: Metadata = { title: "صفحه پیدا نشد" };

export default function GlobalNotFound() {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="grid min-h-svh place-items-center p-6 text-center">
        <div>
          <p className="font-mono text-6xl font-bold">۴۰۴</p>
          <h1 className="mt-4 text-xl font-semibold">صفحه‌ای که دنبالش بودید پیدا نشد.</h1>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- global-not-found renders outside the app router */}
          <a href="/" className="mt-6 inline-flex h-10 items-center rounded-lg bg-foreground px-4 text-sm font-medium text-background">
            بازگشت به کامپوننت‌ها
          </a>
        </div>
      </body>
    </html>
  );
}
