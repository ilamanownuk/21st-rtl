"use client";

import TeamLanyardRail from "@/components/ui/team-lanyard-rail";
import type { LanyardMember } from "@/components/ui/team-lanyard-rail";

export const LANYARD_DEMO_TEAM: LanyardMember[] = [
  {
    id: "ada",
    name: "آدا لیندکویست",
    role: "مدیر طراحی",
    team: "اکمی · طراحی",
    tone: 1,
    image: "https://cdn.21st.dev/assets/mirror/01/0129a921379e99ffcfab45433afaff19fce694d988053594aca9f81bdc84030b.jpg",
    bio: "ایده‌های مبهم محصول را به رابط‌هایی آرام و صادقانه تبدیل می‌کند. نقد طراحی روزهای جمعه را برگزار می‌کند.",
    tags: ["سیستم طراحی", "از ۲۰۱۹"],
    links: [{ label: "ایمیل", href: "#" }, { label: "نمونه‌کار", href: "#" }],
  },
  {
    id: "ravi",
    name: "راوی منون",
    role: "سرپرست مهندسی",
    team: "اکمی · پلتفرم",
    tone: 2,
    image: "https://cdn.21st.dev/assets/mirror/b3/b30528dd471f65d68c0a32c02007e30235fb6f0292b70cee0b8ce8efc65a0370.jpg",
    bio: "بیلد را سالم و شیفت آنکال را آرام نگه می‌دارد. از حذف کدهای قدیمی لذت می‌برد.",
    tags: ["پلتفرم", "Rust", "از ۲۰۲۰"],
    links: [{ label: "ایمیل", href: "#" }, { label: "تقویم", href: "#" }],
  },
  {
    id: "imani",
    name: "ایمانی اوکافور",
    role: "مدیر محصول",
    team: "Acme · Product",
    tone: 3,
    image: "https://cdn.21st.dev/assets/mirror/31/3192d5cfd93963226a5f4c8a6a8cbc6913f975b44ac4e39299fe57ee85367f1e.jpg",
    bio: "هفته‌ای با پنج مشتری حرف می‌زند و برنامه‌ی یک‌صفحه‌ای می‌نویسد که همه واقعاً می‌خوانند.",
    tags: ["پژوهش", "از ۲۰۲۱"],
    links: [{ label: "ایمیل", href: "#" }, { label: "یادداشت‌ها", href: "#" }],
  },
  {
    id: "kenji",
    name: "کنجی آراتا",
    role: "مهندس iOS",
    team: "Acme · Mobile",
    tone: 4,
    image: "https://cdn.21st.dev/assets/mirror/3c/3cfeb559f917fcbdf360c177307aff2a9ea4db2f283175f2079d152d8e66a16e.jpg",
    bio: "روی ده درصد پایانی هر انیمیشن وسواس دارد. اپ را با ۹۹٫۹٪ پایداری منتشر می‌کند.",
    tags: ["Swift", "موشن", "از ۲۰۲۲"],
    links: [{ label: "ایمیل", href: "#" }, { label: "نمونه‌کار", href: "#" }],
  },
  {
    id: "lucia",
    name: "لوسیا فریرا",
    role: "منابع انسانی و فرهنگ",
    team: "Acme · People",
    tone: 5,
    image: "https://cdn.21st.dev/assets/mirror/7c/7c4026ddb84a32bdc2c78f11ef8f6ba8f9f88e4f716c9d3c8bf06fb3690c9a7e.jpg",
    bio: "افراد مهربان و کنجکاو استخدام می‌کند و هفته‌ی اول‌شان را دلپذیر می‌کند.",
    tags: ["استخدام", "از ۲۰۱۸"],
    links: [{ label: "ایمیل", href: "#" }, { label: "فرصت‌های شغلی", href: "#" }],
  },
  {
    id: "mateo",
    name: "ماتئو رویز",
    role: "مهندس بک‌اند",
    team: "اکمی · پلتفرم",
    tone: 2,
    image: "https://cdn.21st.dev/assets/mirror/3f/3f7507b8577ffc6f2647006f918735f239d409fe50c5e74c70b924bf618fbcd9.jpg",
    bio: "APIهایی طراحی می‌کند که بقیه‌ی تیم‌ها دوست دارند صدایشان بزنند. مستندات را قبل از کد می‌نویسد.",
    tags: ["APIs", "Go", "از ۲۰۲۱"],
    links: [{ label: "ایمیل", href: "#" }, { label: "تقویم", href: "#" }],
  },
  {
    id: "mila",
    name: "میلا نواک",
    role: "طراح برند",
    team: "اکمی · طراحی",
    tone: 1,
    image: "https://cdn.21st.dev/assets/mirror/a2/a23846f7e9338b8b753b523dcb11db8cb275e76e13eaf1bb738590728f892970.jpg",
    bio: "تصویرسازی می‌کند، فونت انتخاب می‌کند و از برند در برابر کلیپ‌آرت محافظت می‌کند.",
    tags: ["تصویرسازی", "از ۲۰۲۳"],
    links: [{ label: "ایمیل", href: "#" }, { label: "نمونه‌کار", href: "#" }],
  },
  {
    id: "noah",
    name: "نوآ منسا",
    role: "موفقیت مشتری",
    team: "Acme · Support",
    tone: 3,
    image: "https://cdn.21st.dev/assets/mirror/86/86f167053b1fc186b169482c15450834272b8a55993e9f0fb465f047de4b26a6.jpg",
    bio: "ظرف یک ساعت پاسخ می‌دهد و هر تیکت پیچیده را به مقاله‌ی مرکز راهنما تبدیل می‌کند.",
    tags: ["پشتیبانی", "از ۲۰۲۰"],
    links: [{ label: "ایمیل", href: "#" }, { label: "تقویم", href: "#" }],
  },
];

export default function TeamLanyardRailDemo({ autoplay = true }: { autoplay?: boolean }) {
  return (
    <div data-lanyard-demo className="flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <TeamLanyardRail
        items={LANYARD_DEMO_TEAM}
        eyebrow="با تیم آشنا شوید · هشت نفر"
        heading="دیوار تیمی که می‌توانید ورقش بزنید، درست روی صفحه."
        caption="روی ریل بکشید تا با کسی آشنا شوید، کارت را پایین بکشید و برای چرخاندن کلیک کنید."
        autoplay={autoplay}
        action={
          <button type="button" className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[transform,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-chart-2" />
            We&apos;re hiring
          </button>
        }
      />
    </div>
  );
}

