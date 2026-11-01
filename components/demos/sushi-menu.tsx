"use client";

import * as React from "react";
import { ShoppingBag } from "lucide-react";
import SushiConveyorMenu from "@/components/ui/sushi-conveyor-menu";
import type { ConveyorDish } from "@/components/ui/sushi-conveyor-menu";

export const SUSHI_BELT_DISHES: ConveyorDish[] = [
  {
    id: "salmon-nigiri",
    name: "نیگیری سالمون",
    price: "۴٫۲۰ دلار",
    tier: 2,
    description: "دو تکه سالمون تازه روی برنج چاشنی‌دار، همراه با زنجبیل ترشی.",
    details: ["۲ تکه", "ماهی", "پیشنهاد سرآشپز"],
    image: "https://cdn.21st.dev/assets/mirror/e2/e2e31360457e8c31fe830c89bb3e618ef982a6a04ba3f988b074abefad47ab4d.webp",
  },
  {
    id: "tuna-nigiri",
    name: "نیگیری ماهی تن",
    price: "۶٫۸۰ دلار",
    tier: 4,
    description: "ماهی تن قرمز کم‌چرب روی برنج گرم در بشقاب لاکی مشکی.",
    details: ["۲ تکه", "ماهی"],
    image: "https://cdn.21st.dev/assets/mirror/dc/dc231956590214c669df43d2a95134c610bc01c4c8d5d245393fd48febc7b85d.webp",
  },
  {
    id: "ebi-nigiri",
    name: "نیگیری میگو",
    price: "۴٫۲۰ دلار",
    tier: 2,
    description: "میگوی آب‌پز بازشده روی برنج، با دم.",
    details: ["۲ تکه", "غذای دریایی"],
    image: "https://cdn.21st.dev/assets/mirror/ed/ed19038aa3d0ffb2b16e8daa4b21968e16038e1638446a55c90551e1e16b6b9f.webp",
  },
  {
    id: "california-roll",
    name: "رول کالیفرنیا",
    price: "۵٫۴۰ دلار",
    tier: 3,
    description: "خرچنگ، آووکادو و خیار، رول‌شده با تخم‌ماهی نارنجی توبیکو در بیرون.",
    details: ["۴ تکه", "غذای دریایی", "خاویار ماهی"],
    image: "https://cdn.21st.dev/assets/mirror/7a/7a57f85603a9a61497066e45bf6fbfb10dbf7b9369f83469221eb0e9ee9fd899.webp",
  },
  {
    id: "dragon-roll",
    name: "رول اژدها",
    price: "۸٫۵۰ دلار",
    tier: 5,
    description: "رول میگوی تمپورا پوشیده با آووکادو و سس مارماهی.",
    details: ["۴ تکه", "غذای دریایی", "گندم", "پیشنهاد سرآشپز"],
    image: "https://cdn.21st.dev/assets/mirror/81/816eddcbedeb62d59f7102783e13afd81ce1207e8180a9a83cde396a2d95f5f7.webp",
  },
  {
    id: "tamago",
    name: "نیگیری تاماگو",
    price: "۳٫۲۰ دلار",
    tier: 1,
    description: "املت شیرین رول‌شده که با نوار نوری به برنج بسته شده.",
    details: ["۲ تکه", "تخم‌مرغ"],
    image: "https://cdn.21st.dev/assets/mirror/2f/2fb834a44e170a6b2919da6441a7d8239b68a5f96782a3d032a031f78b96adb4.webp",
  },
  {
    id: "edamame",
    name: "ادامامه‌ی نمکی",
    price: "۳٫۲۰ دلار",
    tier: 1,
    description: "کاسه‌ی کوچکی از غلاف سویای بخارپز با نمک دریایی.",
    details: ["۱ کاسه", "سویا", "گیاهی"],
    image: "https://cdn.21st.dev/assets/mirror/12/1251847fad8f7d9288ff7f91954c54db0ef314f53dde2245bfc39497ee16fb42.webp",
  },
  {
    id: "mochi",
    name: "بستنی موچی",
    price: "۵٫۴۰ دلار",
    tier: 3,
    description: "بستنی موچی ماچا و توت‌فرنگی، از هر کدام یکی.",
    details: ["۲ تکه", "شیر", "دسر"],
    image: "https://cdn.21st.dev/assets/mirror/5c/5cbcce544cf25127b238252e69d6ea879115e85ae61b9a47231ebeb0719c51b5.webp",
  },
];

export const SUSHI_BELT_LEGEND = { 1: "۳٫۲۰ دلار", 2: "۴٫۲۰ دلار", 3: "۵٫۴۰ دلار", 4: "۶٫۸۰ دلار", 5: "۸٫۵۰ دلار" };

export default function SushiConveyorMenuDemo({ autoplay = true }: { autoplay?: boolean }) {
  const [count, setCount] = React.useState(0);
  const [flash, setFlash] = React.useState(false);
  const timer = React.useRef(0);

  React.useEffect(() => () => window.clearTimeout(timer.current), []);

  const add = () => {
    setCount((n) => n + 1);
    setFlash(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setFlash(false), 2400);
  };

  return (
    <div data-sushi-demo className="relative flex min-h-svh w-full items-center justify-center bg-background text-foreground">
      <div className="absolute left-4 top-4 z-20 flex items-center gap-2">
        <span aria-live="polite" className={`rounded-full bg-foreground px-2.5 py-1 text-[11px] font-medium text-background transition-[opacity,translate] duration-300 motion-reduce:transition-none ${flash ? "translate-x-0 opacity-100" : "translate-x-1 opacity-0"}`}>
          {flash ? "اضافه شد" : ""}
        </span>
        <button type="button" data-order-count aria-label={`سفارش شما: ${count} بشقاب`} className="inline-flex h-9 items-center gap-2 rounded-full border border-border bg-card px-3 text-sm font-medium text-card-foreground shadow-sm outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ShoppingBag aria-hidden="true" className="size-4" />
          <span data-order-total className="tabular-nums">{count}</span>
        </button>
      </div>
      <SushiConveyorMenu
        items={SUSHI_BELT_DISHES}
        legend={SUSHI_BELT_LEGEND}
        eyebrow="کایتن · نوار ناهار"
        heading="نوار سوشی که همیشه می‌چرخد، درست روی صفحه."
        caption="موس را ببرید تا نوار بایستد، بکشید تا بچرخد، بشقابی را برای سفارش انتخاب کنید."
        autoplay={autoplay}
        onAdd={add}
        action={
          <button type="button" className="rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sm outline-none transition-[translate,box-shadow] hover:-translate-y-px hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background motion-reduce:transition-none">
            دیدن منوی کامل
          </button>
        }
      />
    </div>
  );
}

