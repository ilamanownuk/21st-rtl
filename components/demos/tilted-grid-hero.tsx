import { TiltedGridHero } from "@/components/ui/tilted-grid-hero";

// Our R2 artwork, alternating photos with gradients — the same set as the
// Halo Reel demo. Portrait sources are cropped to the tiles by object-cover.
const CDN = "https://pub-940ccf6255b54fa799a9b01050e6c227.r2.dev";

const IMAGES = [
  {
    src: `${CDN}/stock-images/767d99bb371a54d0d36751e8cecae43c.jpg`,
    alt: "سایه‌ی غواص در منظره‌ی دریای غروب به شکل نیم‌رخ",
  },
  {
    src: `${CDN}/gradients/hero_gradient/hero-gradients-01.png`,
    alt: "گرادیان چندرنگ ملایم",
  },
  {
    src: `${CDN}/stock-images/821d815affa6496c39cbdeeec7a84603.jpg`,
    alt: "پرتره‌ی دوبار نوردهی با افق شهر در غروب",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-03.png`,
    alt: "گرادیان به رنگ ماه",
  },
  {
    src: `${CDN}/stock-images/937438c560ada1c83317f2c11b3454b0.jpg`,
    alt: "نیم‌رخ محو در حرکت روی زمینه‌ی نارنجی تند",
  },
  {
    src: `${CDN}/gradients/shade_shiters/shade-shifters-05.png`,
    alt: "گرادیان سایه‌های متغیر",
  },
  {
    src: `${CDN}/stock-images/98f89cb9994f5c382ab964062c4039db.jpg`,
    alt: "فردی با راکت که در ابری رنگی محو می‌شود",
  },
  {
    src: `${CDN}/gradients/shade_shiters/shade-shifters-09.png`,
    alt: "گرادیان سایه‌های متغیر",
  },
  {
    src: `${CDN}/stock-images/ddcbee38be8b7274e19e132d7ab35b53.jpg`,
    alt: "دستی که پرنده‌ای رنگی از میان انگشتانش پرواز می‌کند",
  },
  {
    src: `${CDN}/gradients/moon/moon-grade-06.png`,
    alt: "گرادیان به رنگ ماه",
  },
];

export default function TiltedGridHeroDemo() {
  return (
    <TiltedGridHero
      images={IMAGES}
      dir="rtl"
      className="h-[560px] w-full rounded-lg border border-border bg-background"
    >
      <div className="relative z-10 flex h-full flex-col items-center justify-between py-12 text-center">
        <div className="px-6">
          <h1 className="text-balance text-4xl font-bold leading-snug text-foreground sm:text-5xl sm:leading-snug">
            هر قاب،
            <br />
            در کانون توجه.
          </h1>
        </div>
        <p className="max-w-md text-balance px-6 text-sm leading-7 text-muted-foreground">
          تصاویر از یک لبه خمیده وارد می‌شوند، در مرکز صاف می‌شوند و
          از لبه‌ی دیگر محو می‌شوند.
        </p>
      </div>
    </TiltedGridHero>
  );
}
