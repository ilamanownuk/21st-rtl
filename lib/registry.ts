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
    slug: "3d-carousel",
    promptFile: "3d-carousel.md",
    name: "3D Photo Carousel",
    nameFa: "کاروسل سه‌بعدی عکس",
    summary: "استوانه‌ی سه‌بعدی از عکس‌ها که با کشیدن می‌چرخد و با کلیک روی هر عکس، آن را بزرگ نشان می‌دهد.",
    description:
      "عکس‌ها دور یک استوانه‌ی سه‌بعدی چیده شده‌اند و با کشیدن افقی (با اینرسی فنری) می‌چرخند. کلیک روی هر عکس آن را با انیمیشن مشترک framer-motion در یک لایه‌ی بزرگ باز می‌کند و کلیک دوباره می‌بندد. در موبایل استوانه کوچک‌تر می‌شود.",
    tags: ["سه‌بعدی", "کاروسل", "گالری"],
    file: "components/ui/3d-carousel.tsx",
    extraFiles: [],
    dependencies: ["framer-motion"],
    usage: `import { ThreeDPhotoCarousel } from "@/components/ui/3d-carousel";

export default function Page() {
  return (
    <div className="w-full max-w-4xl">
      <ThreeDPhotoCarousel />
    </div>
  );
}`,
    props: [],
    notes: [
      "کامپوننت ThreeDPhotoCarousel پراپ ندارد؛ فهرست عکس‌ها از آرایه‌ی keywords (آدرس picsum.photos) ساخته می‌شود و برای شخصی‌سازی باید همان‌جا عوض شود.",
      "هوک useMediaQuery هم از همین فایل export می‌شود.",
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "هندسه‌ی استوانه همیشه چپ‌به‌راست کار می‌کند و تغییر جهت راست‌به‌چپ تأثیری روی آن ندارد؛ کامپوننت متنی ندارد و به فونت وابسته نیست.",
    ],
  },
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
    slug: "bento-gallery",
    promptFile: "bento-gallery.md",
    name: "Interactive Bento Gallery",
    nameFa: "گالری بنتوی تعاملی",
    summary: "گالری افقی از کارت‌های تصویر با چیدمان بنتو که با کشیدن حرکت می‌کند و با کلیک در یک مودال باز می‌شود.",
    description:
      "عنوان و توضیح با اسکرول ظاهر می‌شوند، کارت‌ها پشت‌سرهم وارد می‌شوند و با هاور عنوان و توضیح هر عکس دیده می‌شود. اندازه‌ی هر کارت با کلاس‌های span تیلویند در هر آیتم تعیین می‌شود.",
    tags: ["گالری", "بنتو", "framer-motion"],
    file: "components/ui/bento-gallery.tsx",
    extraFiles: [],
    dependencies: ["framer-motion", "lucide-react"],
    usage: `import InteractiveImageBentoGallery from "@/components/ui/bento-gallery";

const imageItems = [
  { id: 1, title: "چشم‌انداز کوهستان", desc: "آرامشی بالاتر از ابرها.", url: "/images/1.jpg", span: "md:col-span-2 md:row-span-2" },
  { id: 2, title: "طاق ساحلی", desc: "جایی که خشکی به دریا می‌رسد.", url: "/images/2.jpg", span: "md:row-span-1" },
];

export default function Example() {
  return (
    <InteractiveImageBentoGallery
      imageItems={imageItems}
      title="لحظه‌های برگزیده"
      description="برای گشتن بکشید، برای بزرگ‌نمایی کلیک کنید."
    />
  );
}`,
    props: [
      { name: "imageItems", type: "ImageItem[]", description: "کارت‌های گالری به ترتیب." },
      { name: "title", type: "string", description: "عنوان بالای گالری." },
      { name: "description", type: "string", description: "متن زیر عنوان." },
    ],
    types: [
      { name: "ImageItem", props: [
        { name: "id", type: "number | string", description: "شناسه‌ی یکتا." },
        { name: "title", type: "string", description: "عنوان روی کارت و alt تصویر." },
        { name: "desc", type: "string", description: "توضیح کوتاه که با هاور دیده می‌شود." },
        { name: "url", type: "string", description: "آدرس تصویر." },
        { name: "span", type: "string", description: "کلاس‌های span تیلویند، مثل md:col-span-2." },
      ] },
    ],
    notes: [
      "تصاویر با تگ img ساده نمایش داده می‌شوند، پس برای هاست‌های بیرونی نیازی به تنظیم next.config نیست.",
      "به lib/utils.ts (تابع cn) نیاز دارد. مسیر کشیدن همیشه چپ‌به‌راست است تا محاسبه‌ی محدوده‌ی drag درست بماند، اما متن‌ها راست‌به‌چپ‌اند.",
      "متن‌ها فارسی و راست‌به‌چپ‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ اگر فونت را در layout بارگذاری نمی‌کنید، متغیر --font-vazirmatn را تعریف کنید.",
    ],
  },
  {
    slug: "card-deck-carousel",
    promptFile: "card-deck-carousel.md",
    name: "Card Deck Carousel",
    nameFa: "کاروسل دسته‌کارت",
    summary: "دسته‌ای از کارت‌های عکس که با کشیدن یا ضربه پرتاب می‌شوند و زیر دسته برمی‌گردند.",
    description:
      "کارت‌ها مثل یک دسته ورق روی هم قرار دارند؛ کارت رو را می‌کشید تا پرتاب شود و زیر دسته برود. دکمه‌ها، کلیدهای جهت‌دار و autoplay هم پشتیبانی می‌شود. اگر برای اسلایدی عکس نباشد، یک منظره‌ی نقاشی‌شده با canvas ساخته می‌شود.",
    tags: ["کاروسل", "کارت", "گالری"],
    file: "components/ui/card-deck-carousel.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `import CardDeckCarousel from "@/components/ui/card-deck-carousel";

export default function Page() {
  return (
    <CardDeckCarousel
      aspect="3 / 4"
      scatter={9}
      slides={[
        { image: "/photos/a.jpg", title: "بالای ابرها", caption: "طلوع در ارتفاع ۳۱۰۰ متری." },
        { image: "/photos/b.jpg", title: "دریاچه‌ی شیشه‌ای" },
      ]}
    />
  );
}`,
    props: [
      { name: "slides", type: "Slide[]", description: "اسلایدها؛ بدون مقدار، اسلایدهای پیش‌فرض (منظره‌های نقاشی‌شده) نمایش داده می‌شود." },
      { name: "height", type: "number | string", default: "'100svh'", description: "ارتفاع کادر؛ هر طول CSS." },
      { name: "cardWidth", type: "string", default: "'min(78vw, 440px)'", description: "عرض هر کارت." },
      { name: "aspect", type: "string", default: "'4 / 5'", description: "نسبت ابعاد کارت (aspect-ratio)." },
      { name: "scatter", type: "number", default: "6", description: "بیشترین زاویه‌ی کج‌شدن کارت‌های پشت دسته، به درجه." },
      { name: "autoplay", type: "number", default: "4200", description: "میلی‌ثانیه برای هر کارت؛ ۰ یعنی خاموش. هنگام تعامل کاربر متوقف می‌شود." },
      { name: "background", type: "string", default: "var(--color-background)", description: "پس‌زمینه." },
      { name: "ink", type: "string", default: "var(--color-foreground)", description: "رنگ متن و دکمه‌ها." },
      { name: "onChange", type: "(index: number) => void", description: "با عوض شدن کارت رو صدا زده می‌شود." },
      { name: "className", type: "string", description: "کلاس اضافه برای ریشه." },
      { name: "style", type: "React.CSSProperties", description: "استایل اضافه برای ریشه." },
      { name: "ariaLabel", type: "string", default: "'کاروسل تصاویر'", description: "برچسب دسترس‌پذیری ناحیه." },
    ],
    types: [
      { name: "Slide", props: [
        { name: "image", type: "string", description: "آدرس تصویر؛ بدون آن منظره‌ی نقاشی‌شده ساخته می‌شود." },
        { name: "title", type: "string", description: "عنوان زیر کارت." },
        { name: "caption", type: "string", description: "زیرنویس." },
        { name: "alt", type: "string", description: "متن جایگزین تصویر." },
        { name: "palette", type: "LandPalette", description: "پالت منظره‌ی نقاشی‌شده وقتی image خالی است." },
        { name: "seed", type: "number", description: "بذر تصادفی منظره‌ی نقاشی‌شده." },
      ] },
    ],
    notes: [
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "هندسه‌ی کارت‌ها و جهت پرتاب چپ‌به‌راست است (ریشه dir=\"ltr\" دارد)؛ فقط متن عنوان و زیرنویس فارسی است.",
      "متن‌ها فارسی‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ وزیرمتن را در layout بارگذاری کنید (در Next.js با next/font/google).",
      "در حالت prefers-reduced-motion کج‌شدن کارت‌های پشتی کم می‌شود.",
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
    slug: "card-stack-slider",
    promptFile: "card-stack-slider.md",
    name: "Card Stack Slider",
    nameFa: "اسلایدر کارت‌های بادبزنی",
    summary: "کارت‌ها به شکل بادبزن سه‌بعدی چیده می‌شوند؛ با کلیک، کشیدن یا autoplay کارت فعال عوض می‌شود.",
    description:
      "کارت فعال وسط و کمی بالا می‌آید و کارت‌های دو طرف با زاویه، عمق و همپوشانی قابل تنظیم پشت آن قرار می‌گیرند. با فنر framer-motion جابه‌جا می‌شود، با نقطه‌ها قابل هدایت است و اگر href داشته باشد لینک کارت فعال کنار نقطه‌ها دیده می‌شود. renderCard برای کارت دلخواه دارد.",
    tags: ["کاروسل", "کارت", "سه‌بعدی"],
    file: "components/ui/card-stack.tsx",
    extraFiles: ["lib/utils.ts"],
    dependencies: ["framer-motion", "lucide-react", "clsx", "tailwind-merge"],
    usage: `import { CardStack, type CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  { id: 1, title: "عملکرد لوکس", description: "هیجان مهندسی دقیق", imageSrc: "/cars/1.jpg", href: "https://example.com" },
  { id: 2, title: "طراحی برازنده", imageSrc: "/cars/2.jpg" },
];

export default function Page() {
  return (
    <CardStack items={items} autoAdvance intervalMs={2000} pauseOnHover showDots />
  );
}`,
    props: [
      { name: "items", type: "T[] (T extends CardStackItem)", required: true, description: "کارت‌ها." },
      { name: "initialIndex", type: "number", default: "0", description: "اندیس کارت فعال در شروع." },
      { name: "maxVisible", type: "number", default: "7", description: "تعداد کارت‌های دیده‌شده دور کارت فعال (فرد توصیه می‌شود)." },
      { name: "cardWidth", type: "number", default: "520", description: "عرض کارت به پیکسل." },
      { name: "cardHeight", type: "number", default: "320", description: "ارتفاع کارت به پیکسل." },
      { name: "overlap", type: "number", default: "0.48", description: "همپوشانی کارت‌ها، از ۰ تا ۰٫۸." },
      { name: "spreadDeg", type: "number", default: "48", description: "زاویه‌ی کل بادبزن به درجه." },
      { name: "perspectivePx", type: "number", default: "1100", description: "پرسپکتیو سه‌بعدی." },
      { name: "depthPx", type: "number", default: "140", description: "عمق بین کارت‌ها." },
      { name: "tiltXDeg", type: "number", default: "12", description: "شیب حول محور X." },
      { name: "activeLiftPx", type: "number", default: "22", description: "بالا آمدن کارت فعال." },
      { name: "activeScale", type: "number", default: "1.03", description: "مقیاس کارت فعال." },
      { name: "inactiveScale", type: "number", default: "0.94", description: "مقیاس کارت‌های غیرفعال." },
      { name: "springStiffness", type: "number", default: "280", description: "سختی فنر." },
      { name: "springDamping", type: "number", default: "28", description: "میرایی فنر." },
      { name: "loop", type: "boolean", default: "true", description: "چرخش بی‌پایان." },
      { name: "autoAdvance", type: "boolean", default: "false", description: "جلو رفتن خودکار." },
      { name: "intervalMs", type: "number", default: "2800", description: "فاصله‌ی autoplay به میلی‌ثانیه." },
      { name: "pauseOnHover", type: "boolean", default: "true", description: "توقف autoplay با هاور." },
      { name: "showDots", type: "boolean", default: "true", description: "نمایش نقاط ناوبری." },
      { name: "className", type: "string", description: "کلاس اضافه برای ریشه." },
      { name: "onChangeIndex", type: "(index: number, item: T) => void", description: "با عوض شدن کارت فعال صدا زده می‌شود." },
      { name: "renderCard", type: "(item: T, state: { active: boolean }) => ReactNode", description: "رندر دلخواه کارت به‌جای کارت پیش‌فرض." },
    ],
    types: [
      { name: "CardStackItem", props: [
        { name: "id", type: "string | number", required: true, description: "شناسه‌ی یکتا." },
        { name: "title", type: "string", required: true, description: "عنوان کارت." },
        { name: "description", type: "string", description: "توضیح کوتاه." },
        { name: "imageSrc", type: "string", description: "آدرس تصویر." },
        { name: "href", type: "string", description: "لینک کارت؛ کنار نقطه‌ها نمایش داده می‌شود." },
        { name: "ctaLabel", type: "string", description: "متن دکمه‌ی فراخوان." },
        { name: "tag", type: "string", description: "برچسب کوچک روی کارت." },
      ] },
    ],
    notes: [
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "از cn در lib/utils و رنگ‌های تم shadcn (foreground و muted-foreground) استفاده می‌کند.",
      "متن‌ها فارسی‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ وزیرمتن را در layout بارگذاری کنید (در Next.js با next/font/google).",
      "هندسه‌ی بادبزن چپ‌به‌راست است (ریشه dir=\"ltr\" دارد)؛ فقط متن‌ها فارسی‌اند.",
    ],
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
    slug: "fisometric-lift-carousel",
    promptFile: "fisometric-lift-carousel.md",
    name: "Isometric Lift Carousel",
    nameFa: "کاروسل ایزومتریک با بالا آمدن کارت",
    summary: "ردیف کارت‌های ایزومتریک که کارت انتخاب‌شده با حرکت فنری بالا می‌آید و بزرگ می‌شود.",
    description:
      "کارت‌ها در یک خط مایل سه‌بعدی چیده می‌شوند؛ کارت انتخاب‌شده بالا می‌آید و عریض می‌شود. با کلیک، کشیدن، کلیدهای جهت‌دار، دکمه‌ها و نقاط قابل هدایت است و حرکت با فنر جاوااسکریپتی حل می‌شود. تنها وابستگی آن React است.",
    tags: ["کاروسل", "ایزومتریک", "سه‌بعدی"],
    file: "components/ui/isometric-lift-carousel.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `import IsometricLiftCarousel, { type IsometricLiftItem } from "@/components/ui/isometric-lift-carousel";

const items: IsometricLiftItem[] = [
  { title: "پیاده‌رو", src: "/photos/1.jpg" },
  { title: "بام قرمز", src: "/photos/2.jpg" },
];

export default function Page() {
  return <IsometricLiftCarousel items={items} height="560px" />;
}`,
    props: [
      { name: "items", type: "IsometricLiftItem[]", required: true, description: "کارت‌ها." },
      { name: "height", type: "string", description: "ارتفاع ریشه؛ باید طول مشخص CSS باشد." },
      { name: "cardWidth", type: "string", description: "عرض کارت ایستاده." },
      { name: "activeWidth", type: "string", description: "عرض کارت بالا آمده." },
      { name: "lift", type: "number", description: "مقدار بالا آمدن کارت انتخاب‌شده به پیکسل." },
      { name: "gap", type: "number", description: "فاصله‌ی کارت‌ها به پیکسل." },
      { name: "tiltX", type: "number", description: "شیب کل ردیف به درجه." },
      { name: "rotateY", type: "number", description: "چرخش حول محور Y به درجه." },
      { name: "radius", type: "number", description: "گردی گوشه‌ی کارت به پیکسل." },
      { name: "bounce", type: "number", description: "جهندگی فنر؛ از ۰ تا حدود ۰٫۵." },
      { name: "duration", type: "number", description: "مدت تقریبی حرکت به ثانیه." },
      { name: "titles", type: "boolean", description: "نمایش عنوان کارت انتخاب‌شده." },
      { name: "controls", type: "boolean", description: "نمایش قرص قبلی/نقاط/بعدی." },
      { name: "background", type: "string", description: "پس‌زمینه‌ی ریشه؛ هر رنگ یا گرادیان CSS." },
      { name: "color", type: "string", description: "رنگ متن، نقاط و دکمه‌ها." },
      { name: "fontFamily", type: "string", default: "var(--font-app), Vazirmatn, Tahoma", description: "فونت." },
      { name: "fontHref", type: "string | null", default: "null", description: "آدرس stylesheet برای بارگذاری fontFamily." },
      { name: "index", type: "number", description: "اندیس فعال (کنترل‌شده)." },
      { name: "defaultIndex", type: "number", description: "اندیس اولیه (غیرکنترل‌شده)." },
      { name: "onIndexChange", type: "(index: number) => void", description: "با تغییر کارت فعال صدا زده می‌شود." },
      { name: "onSelect", type: "(item: IsometricLiftItem, index: number) => void", description: "کلیک روی کارت از قبل بالا آمده." },
      { name: "ariaLabel", type: "string", default: "'کاروسل تصاویر'", description: "برچسب دسترس‌پذیری." },
      { name: "className", type: "string", description: "کلاس اضافه برای ریشه." },
    ],
    types: [
      { name: "IsometricLiftItem", props: [
        { name: "title", type: "string", required: true, description: "عنوان کارت." },
        { name: "src", type: "string", description: "آدرس تصویر؛ بدون آن کارت یک گرادیان ملایم است." },
        { name: "alt", type: "string", description: "متن جایگزین؛ پیش‌فرض title." },
      ] },
    ],
    notes: [
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "هندسه‌ی ایزومتریک چپ‌به‌راست است (ریشه dir=\"ltr\" دارد)؛ فقط متن‌ها فارسی‌اند.",
      "متن‌ها فارسی‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ وزیرمتن را در layout بارگذاری کنید (در Next.js با next/font/google).",
      "height باید یک طول مشخص باشد و در والد flex بهتر است کامپوننت داخل div با w-full قرار گیرد.",
    ],
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
    slug: "scroll-morth-hero",
    promptFile: "scroll-morth-hero.md",
    name: "Scroll Morph Hero",
    nameFa: "هیروی تغییرشکل با اسکرول",
    summary: "کارت‌های تصویر که از حالت پخش‌شده به خط، دایره و در نهایت قوس تبدیل می‌شوند و با اسکرول می‌چرخند.",
    description:
      "معرفی انیمیشنی که کارت‌ها ابتدا پراکنده‌اند، سپس در یک دایره جمع می‌شوند و با اسکرول مجازی (wheel/touch) به قوس پایین صفحه تبدیل می‌شوند. هر کارت با هاور برمی‌گردد و پشت آن دیده می‌شود.",
    tags: ["هیرو", "اسکرول", "سه‌بعدی"],
    file: "components/ui/scroll-morph-hero.tsx",
    extraFiles: [],
    dependencies: ["framer-motion"],
    usage: `import IntroAnimation from "@/components/ui/scroll-morph-hero";

export default function Page() {
  return (
    <div className="w-full h-[800px] border rounded-lg overflow-hidden relative">
      <IntroAnimation />
    </div>
  );
}`,
    props: [

    ],
    notes: [
      "کامپوننت پراپ ندارد؛ تصاویر و متن‌ها داخل فایل تعریف شده‌اند (آرایه‌ی IMAGES و تعداد TOTAL_IMAGES) و برای شخصی‌سازی باید همان‌جا عوض شوند.",
      "کامپوننت ۱۰۰٪ ارتفاع و عرض والدش را پر می‌کند، پس والد باید ارتفاع مشخص داشته باشد. اسکرول مجازی است و اسکرول صفحه را نمی‌گیرد.",
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "متن‌ها فارسی و راست‌به‌چپ‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ اگر فونت را در layout بارگذاری نمی‌کنید، متغیر --font-vazirmatn را تعریف کنید.",
    ],
  },
  {
    slug: "sushi-menu",
    promptFile: "sushi-menu.md",
    name: "Sushi Conveyor Menu",
    nameFa: "منوی نوار گردان سوشی",
    summary: "نوار گردان سه‌بعدی از بشقاب‌ها که می‌چرخد، با موس متوقف می‌شود و با کلیک جزئیات هر غذا را در دیالوگ نشان می‌دهد.",
    description:
      "منوی رستوران به شکل کایتن‌زوشی. با کشیدن نوار می‌چرخد، با autoplay بشقاب‌ها را یکی‌یکی جلو می‌آورد و هر بشقاب یک دیالوگ با توضیح، چیپ جزئیات و دکمه‌ی افزودن به سفارش دارد.",
    tags: ["منو", "رستوران", "سه‌بعدی"],
    file: "components/ui/sushi-conveyor-menu.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `import SushiConveyorMenu from "@/components/ui/sushi-conveyor-menu";
import type { ConveyorDish } from "@/components/ui/sushi-conveyor-menu";

const dishes: ConveyorDish[] = [
  { id: "salmon", name: "نیگیری سالمون", price: "۴٫۲۰ دلار", tier: 2, description: "دو تکه سالمون تازه روی برنج.", details: ["۲ تکه", "ماهی"], image: "/images/salmon.webp" },
  { id: "tuna", name: "نیگیری ماهی تن", price: "۶٫۸۰ دلار", tier: 4, image: "/images/tuna.webp" },
];

export default function Example() {
  return (
    <SushiConveyorMenu
      items={dishes}
      heading="نوار سوشی که همیشه می‌چرخد"
      caption="یک بشقاب را برای سفارش انتخاب کنید."
      autoplay
      onAdd={(dish) => console.log(dish.id)}
    />
  );
}`,
    props: [
      { name: "items", type: "ConveyorDish[]", description: "بشقاب‌های نوار؛ ۸ تا ۱۲ مورد بهترین نتیجه را دارد." },
      { name: "eyebrow", type: "string", description: "خط کوچک بالای عنوان." },
      { name: "heading", type: "string", description: "عنوان اصلی؛ aria-label بخش هم هست." },
      { name: "caption", type: "string", description: "متن زیر نوار وقتی بشقابی انتخاب نشده." },
      { name: "action", type: "ReactNode", description: "دکمه یا لینک زیر کپشن." },
      { name: "speed", type: "number", default: "26", description: "سرعت نوار بر حسب px/s." },
      { name: "paused", type: "boolean", description: "توقف نوار (کنترل‌شده)." },
      { name: "onPausedChange", type: "(paused: boolean) => void", description: "تغییر وضعیت توقف." },
      { name: "autoplay", type: "boolean", default: "false", description: "جلو آوردن خودکار بشقاب‌ها تا زمان تعامل کاربر." },
      { name: "interval", type: "number", default: "3000", description: "فاصله‌ی بشقاب‌ها در autoplay به میلی‌ثانیه." },
      { name: "active", type: "number | null", description: "اندیس بشقاب بالاآمده (کنترل‌شده)." },
      { name: "onActiveChange", type: "(index: number | null) => void", description: "تغییر بشقاب فعال." },
      { name: "onOpenChange", type: "(index: number | null) => void", description: "باز و بسته شدن دیالوگ." },
      { name: "onAdd", type: "(item: ConveyorDish) => void", description: "کلیک دکمه‌ی «افزودن به سفارش»." },
      { name: "legend", type: "{ [tier: number]: string }", description: "قیمت هر ردیف برای راهنما؛ در غیر این صورت از آیتم‌ها گرفته می‌شود." },
      { name: "labels", type: "SushiConveyorMenuLabels", default: "فارسی", description: "برچسب‌های دسترس‌پذیری و دکمه‌ها." },
    ],
    types: [
      { name: "ConveyorDish", props: [
        { name: "id", type: "string", description: "شناسه‌ی یکتا." },
        { name: "name", type: "string", description: "نام غذا." },
        { name: "price", type: "string", description: "قیمت به‌صورت متن." },
        { name: "tier", type: "1 | 2 | 3 | 4 | 5", description: "رنگ حلقه‌ی بشقاب." },
        { name: "description", type: "string", description: "توضیح در کپشن و دیالوگ." },
        { name: "details", type: "string[]", description: "چیپ‌های دیالوگ." },
        { name: "image", type: "string", description: "عکس بشقاب از بالا با پس‌زمینه‌ی شفاف." },
      ] },
      { name: "SushiConveyorMenuLabels", props: [
        { name: "add", type: "string", description: "متن دکمه‌ی افزودن." },
        { name: "close", type: "string", description: "متن دکمه‌ی بستن." },
        { name: "previous", type: "string", description: "برچسب دکمه‌ی قبلی." },
        { name: "next", type: "string", description: "برچسب دکمه‌ی بعدی." },
        { name: "pause", type: "string", description: "برچسب دکمه‌ی توقف." },
      ] },
    ],
    notes: [
      "از متغیرهای رنگ تم shadcn مثل --color-chart-1 تا --color-chart-5 استفاده می‌کند.",
      "هندسه‌ی نوار چپ‌به‌راست محاسبه می‌شود؛ فقط دیالوگ و متن‌ها راست‌به‌چپ‌اند.",
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "متن‌ها فارسی و راست‌به‌چپ‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ اگر فونت را در layout بارگذاری نمی‌کنید، متغیر --font-vazirmatn را تعریف کنید.",
    ],
  },
  {
    slug: "team-rail",
    promptFile: "team-rail.md",
    name: "Team Lanyard Rail",
    nameFa: "ریل کارت‌های تیم",
    summary: "دیوار تیم با کارت‌های آویزان از ریل که با حرکت موس تاب می‌خورند و با کلیک می‌چرخند و پشتشان را نشان می‌دهند.",
    description:
      "هر عضو تیم یک کارت شناسایی با بند آویز است. با کشیدن روی ریل کارت‌ها جابه‌جا می‌شوند، کارت انتخاب‌شده به جلو می‌آید و با کلیک برمی‌گردد تا بیو، تگ‌ها و لینک‌ها دیده شوند. در موبایل به کاروسل با نقطه تبدیل می‌شود.",
    tags: ["تیم", "کارت", "فیزیک"],
    file: "components/ui/team-lanyard-rail.tsx",
    extraFiles: [],
    dependencies: [],
    usage: `import TeamLanyardRail from "@/components/ui/team-lanyard-rail";
import type { LanyardMember } from "@/components/ui/team-lanyard-rail";

const team: LanyardMember[] = [
  {
    id: "ada",
    name: "آدا لیندکویست",
    role: "مدیر طراحی",
    team: "اکمی · طراحی",
    tone: 1,
    image: "/images/ada.jpg",
    bio: "ایده‌های مبهم را به رابط‌های آرام تبدیل می‌کند.",
    tags: ["سیستم طراحی"],
    links: [{ label: "ایمیل", href: "mailto:ada@example.com" }],
  },
];

export default function Example() {
  return <TeamLanyardRail items={team} heading="با تیم آشنا شوید" autoplay />;
}`,
    props: [
      { name: "items", type: "LanyardMember[]", description: "اعضای تیم." },
      { name: "eyebrow", type: "string", description: "خط کوچک بالای عنوان." },
      { name: "heading", type: "string", description: "عنوان اصلی." },
      { name: "caption", type: "string", description: "متن زیر ریل وقتی کسی انتخاب نشده." },
      { name: "action", type: "ReactNode", description: "دکمه یا لینک زیر کپشن." },
      { name: "autoplay", type: "boolean", default: "false", description: "چرخاندن خودکار کارت‌ها تا زمان تعامل کاربر." },
      { name: "interval", type: "number", default: "2800", description: "مدت نمایش پشت کارت در autoplay به میلی‌ثانیه." },
      { name: "active", type: "number | null", description: "کارت رو به جلو (کنترل‌شده)." },
      { name: "onActiveChange", type: "(index: number | null) => void", description: "تغییر کارت فعال." },
      { name: "flipped", type: "number | null", description: "کارت برگشته (کنترل‌شده)." },
      { name: "onFlippedChange", type: "(index: number | null) => void", description: "تغییر کارت برگشته." },
      { name: "labels", type: "TeamLanyardRailLabels", default: "فارسی", description: "راهنماهای زیر نام و برچسب نقطه‌ها." },
    ],
    types: [
      { name: "LanyardMember", props: [
        { name: "id", type: "string", description: "شناسه‌ی یکتا." },
        { name: "name", type: "string", description: "نام روی هر دو سمت کارت." },
        { name: "role", type: "string", description: "سمت شغلی." },
        { name: "team", type: "string", description: "خط شرکت یا تیم." },
        { name: "image", type: "string", description: "عکس پرتره؛ مربع بهتر است." },
        { name: "bio", type: "string", description: "متن پشت کارت." },
        { name: "tags", type: "string[]", description: "تا ۳ چیپ پشت کارت." },
        { name: "links", type: "LanyardLink[]", description: "تا ۳ لینک پشت کارت، هر کدام { label, href }." },
        { name: "tone", type: "1 | 2 | 3 | 4 | 5", description: "رنگ نوار کارت از توکن chart." },
        { name: "drop", type: "number", description: "طول اضافه‌ی بند به پیکسل." },
      ] },
      { name: "TeamLanyardRailLabels", props: [
        { name: "flip", type: "string", description: "راهنما وقتی کارت رو به جلوست." },
        { name: "back", type: "string", description: "راهنما وقتی پشت کارت دیده می‌شود." },
        { name: "show", type: "string", description: "پیشوند برچسب نقطه‌های کاروسل." },
      ] },
    ],
    notes: [
      "از متغیرهای رنگ تم shadcn مثل --color-chart-1 تا --color-chart-5 استفاده می‌کند.",
      "هندسه‌ی ریل چپ‌به‌راست محاسبه می‌شود؛ پشت کارت و متن‌ها راست‌به‌چپ‌اند. آیکون لینک ایمیل با برچسب‌های شامل «ایمیل» یا mail تشخیص داده می‌شود.",
      "تصاویر با تگ img ساده نمایش داده می‌شوند و نیازی به تنظیم next.config نیست.",
      "متن‌ها فارسی و راست‌به‌چپ‌اند و فونت به‌صورت پیش‌فرض Vazirmatn (با جایگزین Tahoma) است؛ اگر فونت را در layout بارگذاری نمی‌کنید، متغیر --font-vazirmatn را تعریف کنید.",
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
