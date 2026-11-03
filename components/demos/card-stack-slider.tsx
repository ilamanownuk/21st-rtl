"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "عملکرد لوکس",
    description: "هیجان مهندسی دقیق را تجربه کنید",
    imageSrc: "https://cdn.21st.dev/assets/mirror/1c/1c40e9d2fc325643f20991f6c4361c803b8d0ad690ad1e7529c7377151a282eb.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 2,
    title: "طراحی برازنده",
    description: "جایی که زیبایی و کارایی به هم می‌رسند",
    imageSrc: "https://cdn.21st.dev/assets/mirror/ba/baa07e4ac6f0a4420a74083de7959083153be3dbfa7732dc26378fb69c1bf2eb.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 3,
    title: "قدرت و سرعت",
    description: "توان واقعی جاده را آزاد کنید",
    imageSrc: "https://cdn.21st.dev/assets/mirror/80/80e27ca27a44306f03e4708cb8a7d622e480996fdb40955ecbe735109c62ca69.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 4,
    title: "ظرافت ماندگار",
    description: "ساخته‌شده با عشق، رانده‌شده با کمال",
    imageSrc: "https://cdn.21st.dev/assets/mirror/5c/5c9f812d112ce28b3524a9bc44bc65ad85da3958f45492845ba060af904cb189.jpg",
    href: "https://www.ruixen.com/",
  },
  {
    id: 5,
    title: "آینده‌ی حرکت",
    description: "نوآوری‌ای که شما را به جلو می‌برد",
    imageSrc: "https://cdn.21st.dev/assets/mirror/37/37ea3835df0f51289154b990eb4d61b95b3ad63d4bf71cd79554cc56f2f134a8.jpg",
    href: "https://www.ruixen.com/",
  },
];

export default function CardStackDemoPage() {
  return (
    <div className="w-full overflow-x-clip">
      <div className="mx-auto w-full max-w-5xl p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2000}
          pauseOnHover
          showDots
        />
      </div>
    </div>
  );
}
