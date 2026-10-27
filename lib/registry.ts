export type PropDoc = {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
};

export type ComponentDoc = {
  slug: string;
  /** Markdown prompt inside 21st-prompts/. */
  promptFile: string;
  name: string;
  nameFa: string;
  summary: string;
  description: string;
  tags: string[];
  /** Main component file, relative to the project root. */
  file: string;
  /** Other project files the component imports (shadcn primitives, utils). */
  extraFiles: string[];
  dependencies: string[];
  devDependencies?: string[];
  /** Uses `animate-in` / `fade-in` classes from tw-animate-css. */
  animateCss?: boolean;
  usage: string;
  props: PropDoc[];
  /** Extra type tables, e.g. the shape of an item in an array prop. */
  types?: { name: string; props: PropDoc[] }[];
  notes: string[];
};

export const COMPONENTS: ComponentDoc[] = [
  {
    slug: "agentic-factory",
    promptFile: "agentic-factory.md",
    name: "Agentic Factory 3D",
    nameFa: "کارخانه‌ی سه‌بعدی",
    summary: "یک ماشین سه‌بعدی تعاملی با three.js که می‌شود چرخاند، ایستگاه‌هایش را انتخاب کرد و حالت‌هایش را عوض کرد.",
    description:
      "صحنه‌ی کاملاً پروسیجرال three.js (بدون مدل یا تصویر) با چهار حالت نمایش، پنج زاویه‌ی دوربین و ایستگاه‌هایی که با هاور و کلیک واکنش نشان می‌دهند. برای هیروی صفحه‌های محصول و لندینگ‌های فنی مناسب است.",
    tags: ["سه‌بعدی", "three.js", "هیرو"],
    file: "components/ui/agentic-factory-3d.tsx",
    extraFiles: [],
    dependencies: ["three"],
    devDependencies: ["@types/three"],
    usage: `import AgenticFactory3D from "@/components/ui/agentic-factory-3d";

export default function Page() {
  return (
    <AgenticFactory3D
      height={720}
      onStation={(id) => console.log("station:", id)}
    />
  );
}`,
    props: [
      { name: "height", type: "number | string", default: "'100vh'", description: "ارتفاع کادر صحنه؛ عدد (پیکسل) یا هر طول CSS مثل '720px' یا '100vh'." },
      { name: "embed", type: "boolean", default: "false", description: "حالت هیروی تمیز: پنل‌ها حذف می‌شوند و ماشین در سمت راست یک کادر عریض قرار می‌گیرد." },
      { name: "onStation", type: "(id: StationId) => void", description: "وقتی روی یک ایستگاه کلیک شود صدا زده می‌شود. مقدارها: 'engine' | 'admin' | 'storefront' | 'cabinet' | 'cashdesk'." },
      { name: "onReady", type: "() => void", description: "بعد از رسم اولین فریم واقعی صدا زده می‌شود؛ برای برداشتن لودر مناسب است." },
      { name: "className", type: "string", description: "کلاس اضافه برای کادر بیرونی." },
    ],
    notes: [
      "این کامپوننت فقط در سمت کلاینت اجرا می‌شود (\"use client\" دارد). در Next.js اگر می‌خواهید از رندر سمت سرور صرف‌نظر کنید، آن را با next/dynamic و ssr: false بارگذاری کنید.",
      "استایل‌هایش داخل خود فایل تعریف شده و به تنظیمات Tailwind وابسته نیست.",
      "کامپوننت فارسی و راست‌به‌چپ است و فونتش Vazirmatn (و در نبودش Tahoma) است؛ وزیرمتن را در پروژه بارگذاری کنید (در Next.js با next/font/google). متن روی صفحه‌های داخل صحنه هم با جهت راست‌به‌چپ روی canvas رسم می‌شود.",
    ],
  },
  {
    slug: "bank-card",
    promptFile: "bank-card.md",
    name: "Holo Card",
    nameFa: "کارت بانکی هولوگرافیک",
    summary: "کارت تیتانیومی با لایه‌ی هولوگرام که با نشانگر موس یا شیب گوشی کج می‌شود، با کشیدن می‌چرخد و با لمس برمی‌گردد.",
    description:
      "شماره‌ی کارت تا زمان نمایش فقط چهار رقم آخرش دیده می‌شود و هنگام نمایش با افکت درهم‌ریختگی ظاهر می‌شود. از طریق ref می‌توانید کارت را برگردانید یا شماره را نمایش دهید.",
    tags: ["کارت", "سه‌بعدی", "فین‌تک"],
    file: "components/ui/holo-card.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `"use client";

import * as React from "react";
import { HoloCard, type HoloCardHandle } from "@/components/ui/holo-card";

export default function Example() {
  const card = React.useRef<HoloCardHandle>(null);

  return (
    <div className="flex flex-col items-center gap-4">
      <HoloCard
        ref={card}
        holder="Sara Ahmadi"
        number="6037 9912 3456 7890"
        expires="08/30"
        tier="Gold"
      />
      <button onClick={() => card.current?.flip()}>برگرداندن کارت</button>
    </div>
  );
}`,
    props: [
      { name: "holder", type: "string", default: "'سارا احمدی'", description: "نام دارنده‌ی کارت." },
      { name: "number", type: "string", default: "'6037 9918 2540 4242'", description: "شماره‌ی ۱۶ رقمی (فاصله اختیاری). تا قبل از نمایش فقط ۴ رقم آخر دیده می‌شود." },
      { name: "expires", type: "string", default: "'09/29'", description: "تاریخ انقضا." },
      { name: "cvv", type: "string", default: "'731'", description: "کد CVV2 پشت کارت." },
      { name: "tier", type: "string", default: "'تیتانیوم'", description: "برچسب کوچک گوشه‌ی بالا." },
      { name: "logo", type: "ReactNode", description: "لوگوی بالای کارت؛ اگر ندهید یک لوگوی نمونه نمایش داده می‌شود." },
      { name: "network", type: "ReactNode", description: "نشان شبکه‌ی پرداخت در پایین کارت؛ پیش‌فرض دو دایره‌ی خنثی است." },
      { name: "maxTilt", type: "number", default: "14", description: "حداکثر زاویه‌ی کج شدن بر حسب درجه." },
      { name: "foil", type: "number", default: "1", description: "شدت هولوگرام، بین ۰ تا ۱.۵." },
      { name: "motion", type: "boolean", default: "true", description: "در صورت اجازه، کارت با شیب گوشی هم حرکت کند." },
      { name: "onFlip", type: "(side: 'front' | 'back') => void", description: "بعد از برگشتن کارت صدا زده می‌شود." },
      { name: "onReveal", type: "(shown: boolean) => void", description: "وقتی شماره نمایش داده یا مخفی شود." },
      { name: "className", type: "string", description: "کلاس اضافه." },
    ],
    types: [
      {
        name: "HoloCardHandle (ref)",
        props: [
          { name: "flip", type: "() => void", description: "کارت را برمی‌گرداند." },
          { name: "reveal", type: "(show?: boolean) => void", description: "شماره‌ی کارت را نمایش می‌دهد یا مخفی می‌کند." },
          { name: "enableMotion", type: "() => Promise<boolean>", description: "در iOS برای خواندن شیب گوشی اجازه می‌گیرد؛ باید داخل رویداد لمس صدا زده شود." },
        ],
      },
    ],
    notes: [
      "کامپوننت فارسی و راست‌به‌چپ است و فونتش Vazirmatn (و در نبودش Tahoma) است؛ وزیرمتن را در پروژه بارگذاری کنید (در Next.js با next/font/google).",
      "شماره‌ی کارت، تاریخ انقضا و CVV2 مثل کارت‌های بانکی ایرانی با ارقام لاتین و چپ‌به‌راست نمایش داده می‌شوند.",
    ],
  },
  {
    slug: "card-image-carousel",
    promptFile: "card-image-carousel.md",
    name: "Tilt Cascade Carousel",
    nameFa: "اسلایدر آبشاری کج",
    summary: "عکس‌های مربعی روی یک خط مورب؛ عکس جلو صاف و بزرگ است و بقیه با چرخش و کوچک شدن پشت سرش ردیف می‌شوند.",
    description:
      "حرکت با دو فنر انجام می‌شود: یکی برای جابه‌جایی و دیگری برای چرخش، که حس تاب خوردن می‌دهد. با کشیدن، اسکرول افقی ترک‌پد، کلیدهای جهت‌نما، نقطه‌ها و دکمه‌ها کار می‌کند و به هیچ کتابخانه‌ای جز React نیاز ندارد.",
    tags: ["اسلایدر", "گالری", "بدون وابستگی"],
    file: "components/ui/tilt-cascade-carousel.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `import TiltCascadeCarousel, { type TiltCascadeItem } from "@/components/ui/tilt-cascade-carousel";

const items: TiltCascadeItem[] = [
  { title: "کوه", src: "/images/mountain.jpg" },
  { title: "دریا", caption: "شمال ایران", src: "/images/sea.jpg" },
  { title: "جنگل", src: "/images/forest.jpg" },
];

export default function Example() {
  return (
    <div className="w-full">
      <TiltCascadeCarousel items={items} height="600px" loop autoplay={4000} />
    </div>
  );
}`,
    props: [
      { name: "items", type: "TiltCascadeItem[]", required: true, description: "فهرست کارت‌ها." },
      { name: "height", type: "string", default: "'100svh'", description: "ارتفاع ریشه؛ حتماً باید یک طول مشخص باشد." },
      { name: "slideSize", type: "string", default: "'clamp(120px, 80vmin, 300px)'", description: "عرض و ارتفاع کارت جلو." },
      { name: "angle", type: "number", default: "30", description: "چرخش هر کارت به ازای هر قدم فاصله از جلو (درجه)." },
      { name: "drop", type: "number", default: "0.5", description: "میزان پایین رفتن هر قدم، به نسبت اندازه‌ی کارت." },
      { name: "inactiveScale", type: "number", default: "0.6", description: "مقیاس کارت‌هایی که جلو نیستند." },
      { name: "radius", type: "number", default: "16", description: "گردی گوشه‌ی کارت (پیکسل)." },
      { name: "bounce", type: "number", default: "0.2", description: "میزان جهش فنر، از ۰ تا حدود ۰.۵." },
      { name: "duration", type: "number", default: "0.8", description: "مدت تقریبی هر حرکت (ثانیه)." },
      { name: "loop", type: "boolean", default: "false", description: "بعد از آخرین کارت به اولی برگردد." },
      { name: "autoplay", type: "number", default: "0", description: "فاصله‌ی حرکت خودکار به میلی‌ثانیه؛ ۰ یعنی خاموش." },
      { name: "titles", type: "boolean", default: "true", description: "نمایش عنوان بالای کارت جلو." },
      { name: "captions", type: "boolean", default: "true", description: "نمایش توضیح زیر کارت جلو." },
      { name: "controls", type: "boolean", default: "true", description: "نمایش نوار قبلی / نقطه‌ها / بعدی." },
      { name: "background", type: "string", description: "پس‌زمینه‌ی ریشه؛ هر رنگ یا گرادیان CSS." },
      { name: "color", type: "string", description: "رنگ متن، نقطه‌ها و دکمه‌ها." },
      { name: "fontFamily", type: "string", default: "'Vazirmatn, Tahoma, …'", description: "فونت متن‌ها." },
      { name: "fontHref", type: "string | null", default: "null", description: "آدرس استایل‌شیت فونت (مثلاً Google Fonts)." },
      { name: "index", type: "number", description: "اندیس کنترل‌شده؛ برای حالت کنترل‌نشده ندهید." },
      { name: "defaultIndex", type: "number", default: "3", description: "اندیس اولیه در حالت کنترل‌نشده." },
      { name: "onIndexChange", type: "(index: number) => void", description: "هنگام تغییر کارت جلو." },
      { name: "onSelect", type: "(item, index) => void", description: "کلیک یا Enter روی کارتی که جلو است." },
      { name: "dir", type: "'rtl' | 'ltr'", default: "'rtl'", description: "جهت. در rtl کارت بعدی پایین و سمت چپ است و کلید ← و کشیدن به راست به اسلاید بعدی می‌روند." },
      { name: "ariaLabel", type: "string", default: "'گالری تصاویر'", description: "برچسب دسترس‌پذیری." },
      { name: "className", type: "string", description: "کلاس اضافه." },
    ],
    types: [
      {
        name: "TiltCascadeItem",
        props: [
          { name: "title", type: "string", required: true, description: "عنوانی که بالای کارت جلو نمایش داده می‌شود." },
          { name: "caption", type: "string", description: "خط کوچک زیر کارت جلو." },
          { name: "src", type: "string", description: "آدرس تصویر؛ بدون آن کارت یک گرادیان ملایم است." },
          { name: "alt", type: "string", description: "متن جایگزین تصویر." },
        ],
      },
    ],
    notes: ["والد کامپوننت باید عرض داشته باشد (مثلاً w-full)؛ در غیر این صورت در یک flex جمع می‌شود.", "شمارنده و برچسب‌های دسترس‌پذیری با ارقام فارسی نوشته می‌شوند."],
  },
  {
    slug: "carousel-of-cards-flex-col",
    promptFile: "carousel-of-cards-flex-col.md",
    name: "Carousel Cards",
    nameFa: "ریل کارت‌های تجربه",
    summary: "ردیف‌های افقی کارت با تصویر، امتیاز، قیمت و نشان، به سبک صفحه‌ی تجربه‌های Airbnb.",
    description:
      "هر بخش یک عنوان، دکمه‌های اسکرول چپ و راست و یک ریل اسکرول‌شونده با snap دارد. با پراپ sections می‌توانید هر تعداد ریل با داده‌ی خودتان بسازید.",
    tags: ["کارت", "اسلایدر", "shadcn"],
    file: "components/ui/carousel-cards.tsx",
    extraFiles: ["components/ui/card.tsx", "components/ui/badge.tsx", "components/ui/button.tsx", "lib/utils.ts"],
    dependencies: ["lucide-react", "@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"],
    usage: `import CarouselCards from "@/components/ui/carousel-cards";

export default function Example() {
  return (
    <CarouselCards
      sections={[
        {
          title: "تورهای پیشنهادی",
          viewAllHref: "/tours",
          items: [
            {
              id: "1",
              title: "یک روز در ماسوله",
              image: "https://cdn.21st.dev/assets/mirror/…/photo.jpg",
              location: "گیلان، ایران",
              price: 1850000,
              currency: "تومان",
              rating: 4.9,
              reviewCount: 120,
              badge: "محبوب",
              href: "/tours/masuleh",
            },
          ],
        },
      ]}
    />
  );
}`,
    props: [
      { name: "sections", type: "ExperienceGridProps[]", default: "دو ریل نمونه", description: "هر عضو یک ریل افقی با عنوان و کارت‌های خودش است." },
      { name: "className", type: "string", description: "کلاس اضافه برای کادر بیرونی." },
    ],
    types: [
      {
        name: "ExperienceGridProps",
        props: [
          { name: "title", type: "string", required: true, description: "عنوان ریل." },
          { name: "items", type: "ExperienceItem[]", required: true, description: "کارت‌های ریل." },
          { name: "viewAllHref", type: "string", default: "'#'", description: "لینک «مشاهده‌ی همه»؛ با رشته‌ی خالی پنهان می‌شود." },
        ],
      },
      {
        name: "ExperienceItem",
        props: [
          { name: "id", type: "string", required: true, description: "شناسه‌ی یکتا." },
          { name: "title", type: "string", required: true, description: "عنوان کارت." },
          { name: "image", type: "string", required: true, description: "آدرس تصویر (با next/image نمایش داده می‌شود)." },
          { name: "location", type: "string", required: true, description: "مکان." },
          { name: "price", type: "number", required: true, description: "قیمت؛ با ارقام و جداکننده‌ی فارسی نمایش داده می‌شود." },
          { name: "currency", type: "string", default: "'یورو'", description: "واحد پول؛ بعد از قیمت نوشته می‌شود." },
          { name: "rating", type: "number", description: "امتیاز." },
          { name: "reviewCount", type: "number", description: "تعداد نظرها." },
          { name: "badge", type: "string", description: "نشان گوشه‌ی تصویر." },
          { name: "date", type: "string", description: "تاریخ یا وضعیت زیر مکان." },
          { name: "href", type: "string", default: "'#'", description: "لینک کارت." },
        ],
      },
    ],
    notes: [
      "تصاویر با next/image نمایش داده می‌شوند؛ دامنه‌ی تصاویر خارجی را در images.remotePatterns فایل next.config اضافه کنید.",
      "به کامپوننت‌های shadcn یعنی Card، Badge و Button نیاز دارد. فایل‌هایشان پایین همین صفحه هست، یا با npx shadcn@latest add card badge button نصبشان کنید.",
      "ریل‌ها راست‌به‌چپ اسکرول می‌شوند: نشان روی گوشه‌ی راست تصویر و دکمه‌ی علاقه‌مندی سمت چپ است.",
    ],
  },
  {
    slug: "circular-navigation-menu",
    promptFile: "circular-navigation-menu.md",
    name: "Circular Navigation",
    nameFa: "منوی ناوبری دایره‌ای",
    summary: "منوی تمام‌صفحه که آیتم‌هایش با انیمیشن framer-motion دور یک دایره چیده می‌شوند.",
    description:
      "با باز شدن، یک پوشش تیره کل صفحه را می‌گیرد و آیتم‌ها با آیکون و نام دور دکمه‌ی بستن قرار می‌گیرند. هاور روی هر آیتم، نامش را در مرکز نشان می‌دهد. باز و بسته بودن منو را خودتان کنترل می‌کنید.",
    tags: ["ناوبری", "منو", "انیمیشن"],
    file: "components/ui/cicular-navigation-bar.tsx",
    extraFiles: ["components/ui/button.tsx", "lib/utils.ts"],
    dependencies: ["framer-motion", "lucide-react", "@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"],
    usage: `"use client";

import { useState } from "react";
import { Home, Search, Settings } from "lucide-react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";

const navItems = [
  { name: "خانه", icon: Home, href: "/" },
  { name: "جستجو", icon: Search, href: "/search" },
  { name: "تنظیمات", icon: Settings, href: "/settings" },
];

export default function Example() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);

  return (
    <>
      <button onClick={toggleMenu}>باز کردن منو</button>
      <CircularNavigation navItems={navItems} isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}`,
    props: [
      { name: "navItems", type: "NavItem[]", required: true, description: "آیتم‌های منو." },
      { name: "isOpen", type: "boolean", required: true, description: "باز بودن منو (کنترل‌شده)." },
      { name: "toggleMenu", type: "() => void", required: true, description: "با کلیک روی پوشش یا دکمه‌ی بستن صدا زده می‌شود." },
    ],
    types: [
      {
        name: "NavItem",
        props: [
          { name: "name", type: "string", required: true, description: "نام آیتم؛ هنگام هاور در مرکز نمایش داده می‌شود." },
          { name: "icon", type: "ComponentType<{ className?: string }>", required: true, description: "کامپوننت آیکون، مثلاً از lucide-react." },
          { name: "href", type: "string", required: true, description: "آدرس لینک (با next/link)." },
        ],
      },
    ],
    notes: ["منو با position: fixed روی کل صفحه باز می‌شود و z-index بالایی دارد.", "آیتم‌ها از بالای دایره شروع می‌شوند و پادساعتگرد (راست‌به‌چپ) چیده می‌شوند."],
  },
  {
    slug: "glassmorphism-folder",
    promptFile: "glassmorphism-folder.md",
    name: "Glass Folder",
    nameFa: "پوشه‌ی شیشه‌ای",
    summary: "پوشه‌ای واقعی از سه لایه: پنل پشتی با اثر هنری، فایل‌ها و پنل جلوی شیشه‌ی مات.",
    description:
      "با هاور، پنل جلو به سمت شما خم می‌شود؛ با کلیک باز می‌شود و فایل‌ها بیرون می‌آیند و بادبزنی باز می‌شوند. دکمه‌ی + فایل جدید اضافه می‌کند و حالت more یک منو باز می‌کند. اثر هنری پشت پوشه به‌صورت پروسیجرال ساخته می‌شود.",
    tags: ["کارت", "شیشه‌ای", "تعاملی"],
    file: "components/ui/glass-folder-cards.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `"use client";

import GlassFolder from "@/components/ui/glass-folder-cards";

export default function Example() {
  return (
    <GlassFolder
      label="پروژه‌ها"
      art="aurora"
      files={[
        { name: "طرح اولیه", meta: "PDF · 2 MB" },
        { name: "عکس‌ها", meta: "48 تصویر", art: "ember" },
      ]}
      onFileSelect={(file) => console.log(file.name)}
    />
  );
}`,
    props: [
      { name: "label", type: "string", default: "'فایل‌های من'", description: "عنوان پوشه." },
      { name: "meta", type: "string", default: "تعداد فایل‌ها", description: "خط دوم زیر عنوان." },
      { name: "tone", type: "'light' | 'dark'", default: "'light'", description: "light شیشه‌ی شیری و dark شیشه‌ی دودی است." },
      { name: "art", type: "ArtPreset | ArtRecipe | 'none'", default: "'aurora'", description: "اثر هنری پنل پشتی: یک پریست ('aurora' | 'ember' | 'dusk' | 'glacier' | 'verdant')، دستور دلخواه، یا none." },
      { name: "seed", type: "number", default: "3", description: "چیدمان متفاوت از همان دستور هنری." },
      { name: "image", type: "string", description: "تصویر دلخواه برای پنل پشتی به‌جای اثر تولیدی." },
      { name: "files", type: "FolderFile[]", description: "محتوای پوشه؛ فقط یک بار خوانده می‌شود." },
      { name: "action", type: "'add' | 'more' | 'none'", default: "'add'", description: "add فایل اضافه می‌کند، more منو باز می‌کند، none دکمه را پنهان می‌کند." },
      { name: "onAdd", type: "(files) => FolderFile | void", description: "فایلی که add اضافه می‌کند را برمی‌گرداند؛ در غیر این صورت یک برگه‌ی «بدون عنوان»." },
      { name: "onFilesChange", type: "(files: FolderFile[]) => void", description: "هنگام تغییر فهرست فایل‌ها." },
      { name: "menu", type: "FolderMenuItem[]", default: "[]", description: "آیتم‌های منوی more؛ گزینه‌ی باز/بستن همیشه اول است." },
      { name: "labelPlacement", type: "'bottom-left' | 'top-left' | 'top-right'", default: "'bottom-left'", description: "جای عنوان روی پنل جلو؛ در حالت rtl چپ و راست جابه‌جا می‌شوند." },
      { name: "dir", type: "'rtl' | 'ltr'", default: "'rtl'", description: "جهت. در rtl کل پوشه قرینه می‌شود: زبانه، دکمه و عنوان جابه‌جا می‌شوند و متن‌ها خوانا می‌مانند." },
      { name: "open", type: "boolean", description: "حالت باز کنترل‌شده." },
      { name: "defaultOpen", type: "boolean", default: "false", description: "حالت باز اولیه." },
      { name: "onOpenChange", type: "(open: boolean) => void", description: "هنگام باز یا بسته شدن." },
      { name: "onFileSelect", type: "(file, index) => void", description: "انتخاب یک فایل وقتی پوشه باز است." },
      { name: "width", type: "number", default: "340", description: "عرض به پیکسل؛ ارتفاع ۰.۹۶ برابر عرض است." },
      { name: "appear", type: "boolean", default: "true", description: "انیمیشن ورود اولین باری که دیده می‌شود." },
      { name: "appearDelay", type: "number", default: "0", description: "تأخیر انیمیشن ورود (میلی‌ثانیه)، برای پوشه‌های پشت سر هم." },
      { name: "className", type: "string", description: "کلاس اضافه." },
      { name: "style", type: "CSSProperties", description: "استایل اضافه." },
    ],
    types: [
      {
        name: "FolderFile",
        props: [
          { name: "name", type: "string", required: true, description: "نام فایل." },
          { name: "meta", type: "string", description: "خط دوم: حجم، تاریخ یا نوع." },
          { name: "art", type: "ArtPreset | ArtRecipe", description: "فایل را به یک تصویر هنری تولیدی تبدیل می‌کند." },
          { name: "image", type: "string", description: "یا تصویر دلخواه؛ بدون هر دو، فایل یک برگه‌ی کاغذ است." },
          { name: "href", type: "string", description: "وقتی پوشه باز است، فایل به این آدرس لینک می‌شود." },
        ],
      },
      {
        name: "FolderMenuItem",
        props: [
          { name: "label", type: "string", required: true, description: "متن آیتم." },
          { name: "onSelect", type: "() => void", description: "با انتخاب آیتم صدا زده می‌شود." },
          { name: "danger", type: "boolean", description: "آیتم قرمز، برای کارهای خطرناک مثل حذف." },
        ],
      },
    ],
    notes: ["تمام استایل‌ها داخل خود فایل است و به تنظیمات Tailwind وابسته نیست.", "کامپوننت فارسی و راست‌به‌چپ است و فونتش Vazirmatn (و در نبودش Tahoma) است؛ وزیرمتن را در پروژه بارگذاری کنید (در Next.js با next/font/google)."],
  },
  {
    slug: "image-upload-cropper",
    promptFile: "image-upload-cropper.md",
    name: "Image Upload Cropper",
    nameFa: "آپلود و برش تصویر",
    summary: "آپلود تصویر با کشیدن و رها کردن، سپس زوم، جابه‌جایی و چرخش داخل قاب دایره‌ای و خروجی برش‌خورده.",
    description:
      "سه مرحله دارد: انتخاب فایل (کشیدن و رها کردن یا انتخاب)، ویرایش (زوم با اسلایدر، کشیدن برای جابه‌جایی، چرخش ۹۰ درجه) و نتیجه‌ی نهایی. برای آپلود آواتار پروفایل مناسب است.",
    tags: ["فرم", "آپلود", "shadcn"],
    file: "components/ui/file-upload-05.tsx",
    extraFiles: ["components/ui/button.tsx", "components/ui/card.tsx", "components/ui/slider.tsx", "lib/utils.ts"],
    dependencies: ["react-dropzone", "lucide-react", "@radix-ui/react-slider", "@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"],
    animateCss: true,
    usage: `import FileUpload from "@/components/ui/file-upload-05";

export default function Example() {
  return (
    <div className="flex w-full items-center justify-center p-10">
      <FileUpload />
    </div>
  );
}`,
    props: [
      { name: "initialStage", type: "'idle' | 'editing' | 'done'", default: "'idle'", description: "مرحله‌ی شروع؛ بیشتر برای پیش‌نمایش و دمو." },
      { name: "initialImageUrl", type: "string", description: "تصویر اولیه، همراه با initialStage برابر 'editing' یا 'done'." },
    ],
    notes: [
      "کلاس‌های انیمیشن animate-in از tw-animate-css می‌آیند؛ آن را نصب و در globals.css با @import \"tw-animate-css\" وارد کنید.",
      "تصویر برش‌خورده به‌صورت data URL ساخته می‌شود؛ برای ارسال به سرور، تابع تأیید داخل کامپوننت را مطابق نیازتان تغییر دهید.",
      "اسلایدر بزرگ‌نمایی با dir=\"rtl\" از راست پر می‌شود.",
    ],
  },
  {
    slug: "panoramid-spread-hero",
    promptFile: "panoramid-spread-hero.md",
    name: "Panoramic Spread Hero",
    nameFa: "هیروی پانورامیک",
    summary: "دسته‌ای از عکس‌ها که با اسکرول از هم باز می‌شوند و یک قوس سه‌بعدی پانورامیک می‌سازند.",
    description:
      "بخش ۴۰۰vh ارتفاع دارد و صحنه به‌صورت sticky می‌ماند. با اسکرول، کارت‌ها از حالت روی‌هم به قوس باز می‌شوند و متن عنوان ظاهر می‌شود. بعد از باز شدن کامل، صحنه با حرکت موس کمی کج می‌شود.",
    tags: ["هیرو", "اسکرول", "motion"],
    file: "components/ui/panoramic-spread-hero.tsx",
    extraFiles: [],
    dependencies: ["motion"],
    usage: `import PanoramicSpreadHero from "@/components/ui/panoramic-spread-hero";

export default function Page() {
  return (
    <PanoramicSpreadHero
      eyebrow="نمایشگاه"
      title="فضای منتخب"
      description="اسکرول کنید تا مجموعه باز شود."
      images={[
        { src: "/images/1.jpg", alt: "خانه" },
        { src: "/images/2.jpg", alt: "داخلی" },
        { src: "/images/3.jpg", alt: "برج" },
        { src: "/images/4.jpg", alt: "دفتر" },
        { src: "/images/5.jpg", alt: "ساختمان" },
        { src: "/images/6.jpg", alt: "مینیمال" },
      ]}
    />
  );
}`,
    props: [
      { name: "images", type: "PanoramicImage[]", default: "۸ تصویر نمونه", description: "کارت‌های قوس به ترتیب؛ ۶ تا ۱۰ تصویر بهترین نتیجه را دارد. هر عضو { src, alt? } است." },
      { name: "eyebrow", type: "string", default: "'نمایشگاه'", description: "خط کوچک بالای عنوان." },
      { name: "title", type: "string", default: "'فضای منتخب.'", description: "عنوان اصلی." },
      { name: "description", type: "string", description: "متن زیر عنوان." },
      { name: "className", type: "string", description: "کلاس اضافه برای section." },
    ],
    notes: [
      "اسکرول پنجره را دنبال می‌کند؛ کامپوننت را مستقیم در صفحه بگذارید، نه داخل یک کادر با overflow اسکرول‌شونده.",
      "آرایه‌ی images را بیرون از کامپوننت تعریف کنید (یا با useMemo) تا در هر رندر دوباره ساخته نشود.",
      "اولین تصویر در سمت راست قوس قرار می‌گیرد.",
    ],
  },
  {
    slug: "polaroid-image-carousel",
    promptFile: "polaroid-image-carousel.md",
    name: "Polaroid Line Carousel",
    nameFa: "اسلایدر عکس‌های پولاروید",
    summary: "عکس‌های فوری که با گیره به یک طناب آویزان‌اند و با کشیدن روی طناب می‌لغزند و تاب می‌خورند.",
    description:
      "عکس‌ها با سرعتی که می‌دهید تاب می‌خورند و با کمی جهش آرام می‌گیرند؛ حتی در حالت سکون با نسیم ملایمی تکان می‌خورند. اسلایدی که تصویر نداشته باشد یک منظره‌ی نقاشی‌شده می‌گیرد، پس بدون هیچ تصویری هم کار می‌کند.",
    tags: ["اسلایدر", "گالری", "بدون وابستگی"],
    file: "components/ui/polaroid-line-carousel.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `"use client";

import PolaroidLineCarousel from "@/components/ui/polaroid-line-carousel";

export default function Example() {
  return (
    <PolaroidLineCarousel
      height={640}
      slides={[
        { image: "/images/damavand.jpg", title: "دماوند", caption: "طلوع از قله" },
        { image: "/images/caspian.jpg", title: "خزر", caption: "ساحل در ظهر" },
        { title: "منظره‌ی نقاشی", palette: "dusk", seed: 4 },
      ]}
    />
  );
}`,
    props: [
      { name: "slides", type: "Slide[]", default: "اسلایدهای نمونه", description: "عکس‌ها." },
      { name: "height", type: "number | string", default: "'100svh'", description: "ارتفاع؛ هر طول CSS." },
      { name: "cardWidth", type: "number", default: "300", description: "عرض هر عکس به پیکسل (در صفحه‌های باریک کوچک می‌شود)." },
      { name: "sag", type: "number", default: "46", description: "میزان شکم دادن طناب در وسط (پیکسل)." },
      { name: "swing", type: "number", default: "1", description: "شدت تاب خوردن؛ ۰ عکس‌ها را ثابت نگه می‌دارد." },
      { name: "autoplay", type: "number", default: "4500", description: "میلی‌ثانیه برای هر عکس؛ ۰ خاموش. هنگام تعامل کاربر صبر می‌کند." },
      { name: "string", type: "string", default: "'#8a7f72'", description: "رنگ طناب و گیره‌ها." },
      { name: "background", type: "string", default: "var(--color-background)", description: "رنگ پس‌زمینه." },
      { name: "ink", type: "string", default: "var(--color-foreground)", description: "رنگ متن‌ها." },
      { name: "onChange", type: "(index: number) => void", description: "هنگام تغییر عکس وسط." },
            { name: "dir", type: "'rtl' | 'ltr'", default: "'rtl'", description: "جهت. در rtl اولین عکس سمت راست آویزان است و کلید ← و کشیدن به راست به عکس بعدی می‌روند." },
      { name: "ariaLabel", type: "string", default: "'گالری عکس'", description: "برچسب دسترس‌پذیری." },
      { name: "className", type: "string", description: "کلاس اضافه." },
      { name: "style", type: "CSSProperties", description: "استایل اضافه." },
    ],
    types: [
      {
        name: "Slide",
        props: [
          { name: "image", type: "string", description: "آدرس تصویر؛ بدون آن یک منظره‌ی نقاشی‌شده رسم می‌شود." },
          { name: "title", type: "string", description: "عنوان زیر عکس و پایین صفحه." },
          { name: "caption", type: "string", description: "توضیح پایین صفحه." },
          { name: "alt", type: "string", description: "متن جایگزین." },
          { name: "palette", type: "'dawn' | 'alpine' | 'dusk' | 'mist'", description: "پالت منظره‌ی نقاشی‌شده." },
          { name: "seed", type: "number", description: "عدد تصادفی منظره‌ی نقاشی‌شده." },
        ],
      },
    ],
    notes: ["با کلیدهای ← و → و کلیک روی هر عکس هم کار می‌کند.", "کامپوننت فارسی و راست‌به‌چپ است و فونتش Vazirmatn (و در نبودش Tahoma) است؛ وزیرمتن را در پروژه بارگذاری کنید (در Next.js با next/font/google)."],
  },
  {
    slug: "product-rail-gallery-fashion-store",
    promptFile: "product-rail-gallery-fashion-store.md",
    name: "Product Rail Gallery",
    nameFa: "گالری رگال لباس",
    summary: "لباس‌ها روی رگال آویزان‌اند؛ با هاور تاب می‌خورند، رو به شما می‌چرخند و با کلیک جزئیاتشان باز می‌شود.",
    description:
      "هر لباس می‌تواند عکس جلو، پشت و نیم‌رخ داشته باشد؛ بدون عکس، یک تصویرسازی داخلی (تیشرت، بافت، هودی، پیراهن، کت، پالتو) با رنگ دلخواه رسم می‌شود. در موبایل به اسلایدر تبدیل می‌شود و نمای جزئیات به‌صورت دیالوگ تمام‌صفحه باز می‌شود.",
    tags: ["فروشگاه", "گالری", "تعاملی"],
    file: "components/ui/product-rail-gallery.tsx",
    extraFiles: [],
    dependencies: [],
    animateCss: true,
    usage: `"use client";

import ClothingRailHero, { type RailGarment } from "@/components/ui/product-rail-gallery";

const items: RailGarment[] = [
  { id: "tee", name: "تیشرت سفید", kind: "tee", color: "#EFEBE2", tag: "۴۸۰ ت", details: ["نخ پنبه", "سایز آزاد"] },
  { id: "hoodie", name: "هودی طوسی", kind: "hoodie", color: "#A0A5AB", tag: "۸۸۰ ت" },
  { id: "coat", name: "پالتو شتری", kind: "coat", color: "#B08D5B", tag: "۲٬۴۰۰ ت" },
];

export default function Example() {
  return (
    <ClothingRailHero
      items={items}
      eyebrow="فصل جدید"
      heading="رگال لباس‌ها"
      autoplay
    />
  );
}`,
    props: [
      { name: "items", type: "RailGarment[]", required: true, description: "لباس‌های روی رگال." },
      { name: "eyebrow", type: "string", description: "خط کوچک بالای عنوان." },
      { name: "heading", type: "string", description: "عنوان اصلی." },
      { name: "caption", type: "string", description: "متن زیر رگال وقتی هیچ لباسی رو به جلو نیست." },
      { name: "action", type: "ReactNode", description: "دکمه‌ی فراخوان زیر متن." },
      { name: "autoplay", type: "boolean", default: "false", description: "لباس‌ها یکی‌یکی رو به جلو بچرخند تا کاربر تعامل کند." },
      { name: "interval", type: "number", default: "2600", description: "مدت رو به جلو ماندن هر لباس در autoplay (میلی‌ثانیه)." },
      { name: "hanger", type: "'wood' | 'matte' | 'none'", default: "'wood'", description: "نوع چوب‌لباسی؛ اگر عکس‌ها خودشان چوب‌لباسی دارند none بدهید." },
      { name: "labels", type: "{ front, back, close, show }", default: "جلو، پشت، بستن، نمایش", description: "متن دکمه‌ها و برچسب‌ها." },
      { name: "onOpenChange", type: "(index: number | null) => void", description: "هنگام باز یا بسته شدن نمای جزئیات؛ اندیس بر اساس ترتیب آرایه‌ی items است." },
      { name: "dir", type: "'rtl' | 'ltr'", default: "'rtl'", description: "جهت. در rtl اولین لباس سمت راست رگال است و پخش خودکار به سمت چپ پیش می‌رود." },
      { name: "...section props", type: "ComponentProps<'section'>", description: "هر پراپ دیگر section مثل className یا id." },
    ],
    types: [
      {
        name: "RailGarment",
        props: [
          { name: "id", type: "string", required: true, description: "شناسه‌ی یکتا." },
          { name: "name", type: "string", required: true, description: "نام؛ برای دسترس‌پذیری، زیرنویس و عنوان جزئیات." },
          { name: "description", type: "string", description: "توضیح." },
          { name: "kind", type: "'tee' | 'knit' | 'hoodie' | 'shirt' | 'jacket' | 'coat'", description: "نوع تصویرسازی داخلی وقتی عکس ندارد." },
          { name: "color", type: "string", description: "رنگ پارچه‌ی تصویرسازی." },
          { name: "trim", type: "string", description: "رنگ حاشیه، بند و دکمه‌ها." },
          { name: "image", type: "string", description: "عکس جلو؛ بهتر است PNG/WebP بدون پس‌زمینه روی بوم ۲۰۰×۳۱۰ باشد." },
          { name: "backImage", type: "string", description: "عکس پشت؛ در صورت نبود از عکس جلو استفاده می‌شود." },
          { name: "sideImage", type: "string", description: "عکس نیم‌رخ برای حالت آویزان." },
          { name: "tag", type: "string", description: "متن برچسب آویز، مثل قیمت یا سایز." },
          { name: "details", type: "string[]", description: "ویژگی‌های کوتاه در نمای جزئیات." },
        ],
      },
    ],
    notes: [
      "عکس‌ها با CSS mask رسم می‌شوند؛ اگر از دامنه‌ی دیگری می‌آیند آن دامنه باید هدر CORS بدهد. ساده‌ترین راه، گذاشتن عکس‌ها در پوشه‌ی public است.",
      "کلاس‌های animate-in از tw-animate-css می‌آیند.",
    ],
  },
  {
    slug: "tilted-grid-hero",
    promptFile: "tilted-grid-hero.md",
    name: "Tilted Grid Hero",
    nameFa: "هیروی ردیف خمیده",
    summary: "یک ردیف تصویر که دور داخل یک استوانه از راست به چپ حرکت می‌کند؛ وسط صاف و دو سر خمیده و محو.",
    description:
      "هر کاشی به چند نوار عمودی تقسیم می‌شود تا تصویر واقعاً روی قوس خم شود. سرعت به ازای هر کاشی است، پس در موبایل و مانیتور عریض یکسان حرکت می‌کند. محتوای شما (children) روی نوار تصاویر قرار می‌گیرد.",
    tags: ["هیرو", "گالری", "سه‌بعدی"],
    file: "components/ui/tilted-grid-hero.tsx",
    extraFiles: ["lib/utils.ts"],
    dependencies: ["clsx", "tailwind-merge"],
    usage: `import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

const images = [
  { src: "/images/1.jpg", alt: "" },
  { src: "/images/2.jpg", alt: "" },
  { src: "/images/3.jpg", alt: "" },
];

export default function Hero() {
  return (
    <TiltedGridHero dir="rtl" images={images} speed={5} className="h-[560px] w-full">
      <div className="relative z-10 flex h-full items-start justify-center pt-12">
        <h1 className="text-5xl font-medium">هر قاب، در کانون توجه</h1>
      </div>
    </TiltedGridHero>
  );
}`,
    props: [
      { name: "images", type: "{ src: string; alt?: string }[]", required: true, description: "تصاویر به ترتیب؛ فهرست کوتاه تکرار می‌شود." },
      { name: "speed", type: "number", default: "4", description: "ثانیه برای جلو رفتن به اندازه‌ی یک کاشی." },
      { name: "tileHeight", type: "number", default: "26", description: "ارتفاع کاشی، درصدی از ارتفاع هیرو." },
      { name: "aspectRatio", type: "number", default: "16 / 9", description: "نسبت عرض به ارتفاع کاشی." },
      { name: "gap", type: "number", default: "6", description: "فاصله‌ی کاشی‌ها، درصدی از ارتفاع کاشی." },
      { name: "axis", type: "number", default: "56", description: "مرکز عمودی ردیف، درصدی از ارتفاع هیرو." },
      { name: "curve", type: "number", default: "80", description: "میزان خمیدگی دو سر به درجه (۵ تا ۸۵)." },
      { name: "fade", type: "number", default: "12", description: "پهنای محو شدن هر سر، درصدی از عرض." },
      { name: "children", type: "ReactNode", description: "محتوایی که روی نوار تصاویر رندر می‌شود." },
      { name: "className", type: "string", description: "کلاس اضافه؛ ارتفاع هیرو را اینجا تعیین کنید." },
    ],
    notes: ["هیرو باید ارتفاع مشخص داشته باشد (مثلاً h-[560px]).", "تصاویر از راست وارد می‌شوند و به چپ می‌روند. برای راست‌به‌چپ بودن محتوای children، dir=\"rtl\" را به خود هیرو بدهید (همه‌ی پراپ‌های div پشتیبانی می‌شوند)."],
  },
  {
    slug: "wallet-card",
    promptFile: "wallet-card.md",
    name: "Wallet Card",
    nameFa: "کارت کیف پول",
    summary: "کارت خلاصه‌ی کیف پول با موجودی حساب‌ها، موجودی کل و دکمه‌های واریز، برداشت، انتقال و تاریخچه.",
    description:
      "یک کارت تمیز برای داشبوردهای مالی و رمزارز. مبلغ‌ها و رویداد دکمه‌ها با پراپ تعیین می‌شوند و بر پایه‌ی Card و Button از shadcn ساخته شده است.",
    tags: ["کارت", "فین‌تک", "shadcn"],
    file: "components/ui/wallet-card-2.tsx",
    extraFiles: ["components/ui/card.tsx", "components/ui/button.tsx", "lib/utils.ts"],
    dependencies: ["lucide-react", "@radix-ui/react-slot", "class-variance-authority", "clsx", "tailwind-merge"],
    usage: `"use client";

import WalletCard from "@/components/ui/wallet-card-2";

export default function Example() {
  return (
    <WalletCard
      fundingBalance="۱۲٬۴۰۰ دلار"
      tradingBalance="۸٬۲۵۰٫۷۵ دلار"
      totalBalance="۲۰٬۶۵۰٫۷۵ دلار"
      cryptoBalance="۰٫۳۵۲۱ بیت‌کوین"
      onDeposit={() => alert("واریز")}
      onWithdraw={() => alert("برداشت")}
    />
  );
}`,
    props: [
      { name: "fundingBalance", type: "string", default: "'۲۴۳٬۹۴۰٫۰۳ دلار'", description: "موجودی حساب صورتی «تأمین وجه»." },
      { name: "tradingBalance", type: "string", default: "'۳۱۰٬۴۹۵٫۵۰ دلار'", description: "موجودی حساب بنفش «معاملات»." },
      { name: "totalBalance", type: "string", default: "'۵۳۴٬۴۳۵٫۵۳ دلار'", description: "موجودی کل که بزرگ نمایش داده می‌شود." },
      { name: "cryptoBalance", type: "string", default: "'۹٫۳۰۰۵۵۴ بیت‌کوین'", description: "خط زیر موجودی کل." },
      { name: "onDeposit", type: "() => void", description: "کلیک دکمه‌ی واریز." },
      { name: "onWithdraw", type: "() => void", description: "کلیک دکمه‌ی برداشت." },
      { name: "onTransfer", type: "() => void", description: "کلیک دکمه‌ی انتقال." },
      { name: "onHistory", type: "() => void", description: "کلیک دکمه‌ی تاریخچه." },
      { name: "onRefresh", type: "() => void", description: "کلیک آیکون به‌روزرسانی." },
      { name: "className", type: "string", description: "کلاس اضافه." },
    ],
    notes: ["به کامپوننت‌های shadcn یعنی Card و Button نیاز دارد. فایل‌هایشان پایین همین صفحه هست، یا با npx shadcn@latest add card button نصبشان کنید."],
  },
];

export function getComponent(slug: string) {
  return COMPONENTS.find((c) => c.slug === slug);
}

export function installCommand(doc: ComponentDoc) {
  const lines: string[] = [];
  const deps = [...doc.dependencies, ...(doc.animateCss ? ["tw-animate-css"] : [])];
  if (deps.length) lines.push(`npm install ${deps.join(" ")}`);
  if (doc.devDependencies?.length) lines.push(`npm install -D ${doc.devDependencies.join(" ")}`);
  return lines.join("\n");
}
