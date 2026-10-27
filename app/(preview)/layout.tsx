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

// Previews have no site chrome, so the iframe shows only the component.
export default function PreviewLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
