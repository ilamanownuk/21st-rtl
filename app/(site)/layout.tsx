import type { Metadata } from "next";
import Link from "next/link";
import { Geist_Mono, Vazirmatn } from "next/font/google";
import "../globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-app",
  subsets: ["arabic", "latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: { default: "کتابخانه‌ی کامپوننت‌ها", template: "%s · کتابخانه‌ی کامپوننت‌ها" },
  description: "کامپوننت‌های React آماده‌ی کپی، همراه با پرامپت، کد و راهنمای استفاده.",
};

export default function SiteLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-40 border-b bg-background/80 backdrop-blur-md">
          <div className="mx-auto flex h-14 w-full max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="grid size-7 place-items-center rounded-lg bg-foreground font-mono text-xs text-background">
                21
              </span>
              کتابخانه‌ی کامپوننت‌ها
            </Link>
            <nav className="flex items-center gap-1 text-sm">
              <Link href="/" className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                کامپوننت‌ها
              </Link>
              <Link href="/setup" className="rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                راه‌اندازی
              </Link>
            </nav>
          </div>
        </header>
        <div className="flex-1">{children}</div>
        <footer className="border-t py-8 text-center text-sm text-muted-foreground">
          کامپوننت‌ها از <span dir="ltr">21st.dev</span> گردآوری شده‌اند؛ برای استفاده، پرامپت یا کد را کپی کنید.
        </footer>
      </body>
    </html>
  );
}
