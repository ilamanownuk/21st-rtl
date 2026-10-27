"use client";

/**
 * @author: @dorianbaffier
 * @description: Carousel Cards
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { ChevronLeft, ChevronRight, Heart, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

export interface ExperienceItem {
  id: string;
  title: string;
  image: string;
  location: string;
  price: number;
  currency?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  date?: string;
  /** Where the card links to. Default "#". */
  href?: string;
}

export interface ExperienceGridProps {
  title: string;
  items: ExperienceItem[];
  viewAllHref?: string;
}

const sampleExperiences: ExperienceItem[] = [
  {
    id: "1",
    title: "یک روز اوتاکو با مگان دی استالیون",
    image: "https://cdn.21st.dev/assets/mirror/e6/e637dac088a6725c7c3b446aa4e9a885eeb1a349a0640a936bc269460b97dceb.jpg",
    location: "لس‌آنجلس، آمریکا",
    price: 120,
    currency: "یورو",
    rating: 4.97,
    reviewCount: 128,
    badge: "اختصاصی",
    date: "پایان: ۳۱ اردیبهشت",
  },
  {
    id: "2",
    title: "یک یکشنبه‌ی شاد با پاتریک ماهومز",
    image: "https://cdn.21st.dev/assets/mirror/8e/8ea802c3a2f07ebf0086632796e36be685b7f8cc7fb89463fe39f2b36dd1f35b.jpg",
    location: "کانزاس‌سیتی، آمریکا",
    price: 150,
    currency: "یورو",
    rating: 4.92,
    reviewCount: 86,
    badge: "اختصاصی",
    date: "امروز تمام می‌شود",
  },
  {
    id: "3",
    title: "جشن دهمین سالگرد گروه SEVENTEEN",
    image: "https://cdn.21st.dev/assets/mirror/50/501af93e434ec2dfced6a410ab261860549b8bf6889541e4cd0e699e40d087d1.jpg",
    location: "سئول، کره‌ی جنوبی",
    price: 200,
    currency: "یورو",
    rating: 4.98,
    reviewCount: 254,
    badge: "اختصاصی",
    date: "تمام شد: ۲۷ اردیبهشت",
  },
  {
    id: "4",
    title: "رازهای شیرینی‌پزی فرانسوی از زبان مادربزرگ‌ها",
    image: "https://cdn.21st.dev/assets/mirror/7c/7c61521a6e198201ee227146ae2738168bfb64fa09e446a0887c94073eb13bde.jpg",
    location: "پاریس، فرانسه",
    price: 70,
    currency: "یورو",
    rating: 4.97,
    reviewCount: 112,
    badge: "اختصاصی",
  },
  {
    id: "5",
    title: "سفر به دنیای کاباره با یک نمایش زنده",
    image: "https://cdn.21st.dev/assets/mirror/29/2921e4548b76ceafeaa36b96e599ee28e2b6b34098a83b389b6e76362d0e8bd2.jpg",
    location: "پاریس، فرانسه",
    price: 92,
    currency: "یورو",
    rating: 4.9,
    reviewCount: 78,
    badge: "اختصاصی",
  },
  {
    id: "6",
    title: "بازی خانوادگی ابرقدرت‌های هنر در لوور",
    image: "https://cdn.21st.dev/assets/mirror/86/8681621cbc0112b5cbf4c52a5be863421dcd63b5038da2d197cac87ca7f315c3.jpg",
    location: "پاریس، فرانسه",
    price: 90,
    currency: "یورو",
    rating: 4.98,
    reviewCount: 146,
    badge: "اختصاصی",
  },
  {
    id: "7",
    title: "شیرینی‌های گیاهی خوشمزه با یک سرآشپز گیاه‌خوار",
    image: "https://cdn.21st.dev/assets/mirror/01/01cda8751643ffeefdf2c4e3514d737670042988115b0cb2e1f1b68909ba1691.jpg",
    location: "پاریس، فرانسه",
    price: 75,
    currency: "یورو",
    rating: 4.95,
    reviewCount: 92,
    badge: "اختصاصی",
  },
];

const popularExperiences: ExperienceItem[] = [
  {
    id: "p1",
    title: "آموزش پخت کروسان فرانسوی",
    image: "https://cdn.21st.dev/assets/mirror/b5/b59d189f652821aee1bfa1332a520972ce8502c843da8c6d73f1eba27965e396.jpg",
    location: "پاریس، فرانسه",
    price: 95,
    currency: "یورو",
    rating: 4.95,
    reviewCount: 218,
    badge: "محبوب",
  },
  {
    id: "p2",
    title: "گشتی در کافه‌های پنهان شهر",
    image: "https://cdn.21st.dev/assets/mirror/5b/5b615acd8874bd3b23ee445afd073e417639d55d77360510fed04b75fadd34f1.jpg",
    location: "پاریس، فرانسه",
    price: 74,
    currency: "یورو",
    rating: 4.9,
    reviewCount: 165,
    badge: "محبوب",
  },
  {
    id: "p3",
    title: "تور دوچرخه‌سواری کاخ و غذاهای ورسای",
    image: "https://cdn.21st.dev/assets/mirror/b5/b59d189f652821aee1bfa1332a520972ce8502c843da8c6d73f1eba27965e396.jpg",
    location: "ورسای، فرانسه",
    price: 122,
    currency: "یورو",
    rating: 4.97,
    reviewCount: 89,
    badge: "محبوب",
  },
  {
    id: "p4",
    title: "تور پاریس اسرارآمیز؛ ارواح، افسانه‌ها و جنایت‌های واقعی",
    image: "https://cdn.21st.dev/assets/mirror/c9/c9721f5bab8148f961068af3fd31b132955f6dec0f78b2e848f3775599eabbef.jpg",
    location: "پاریس، فرانسه",
    price: 25,
    currency: "یورو",
    rating: 4.98,
    reviewCount: 345,
    badge: "محبوب",
  },
  {
    id: "p5",
    title: "آموزش ماکارون فرانسوی با سرآشپز",
    image: "https://cdn.21st.dev/assets/mirror/2a/2a08d0b6172df7a3ff06b11d85d7435ddac94bb232606999a4ec708eec0bdc5a.jpg",
    location: "پاریس، فرانسه",
    price: 110,
    currency: "یورو",
    rating: 4.95,
    reviewCount: 203,
    badge: "محبوب",
  },
  {
    id: "p6",
    title: "باشگاه بی‌رژیم؛ بهترین تور غذای محله‌ی ماره",
    image: "https://cdn.21st.dev/assets/mirror/20/20f6a12b03fea82d42ce9461469fc0379dd965112cf265b8ef587816cafa8a84.jpg",
    location: "پاریس، فرانسه",
    price: 65,
    currency: "یورو",
    rating: 4.92,
    reviewCount: 178,
    badge: "۵ جای خالی",
  },
  {
    id: "p7",
    title: "شب‌گردی در پاریس",
    image: "https://cdn.21st.dev/assets/mirror/3b/3b4a9d491a85f82c7bc04273980c150b7ca6d570985c1f44a30bcc86b461e42a.jpg",
    location: "پاریس، فرانسه",
    price: 20,
    currency: "یورو",
    rating: 4.94,
    reviewCount: 112,
    badge: "محبوب",
  },
];

/** Persian digits and separators, e.g. 4.97 → ۴٫۹۷. */
const fa = (n: number) => n.toLocaleString("fa-IR");

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => (
  <Card className="group relative flex h-[320px] w-full flex-col overflow-hidden rounded-xl border-0 shadow-sm transition-shadow duration-300 hover:shadow-md">
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-xl">
      <Image
        alt={experience.title}
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        fill
        src={experience.image}
      />
      <Button
        className="absolute top-2 end-2 z-10 rounded-full bg-white/80 text-neutral-700 backdrop-blur-sm hover:bg-white/90 hover:text-black"
        size="icon"
        variant="ghost"
      >
        <Heart className="h-4 w-4 stroke-[2px]" />
        <span className="sr-only">افزودن به علاقه‌مندی‌ها</span>
      </Button>
      {experience.badge && (
        <Badge className="absolute top-2 start-2 rounded-md bg-white/90 px-1.5 py-0.5 font-medium text-black text-xs">
          {experience.badge}
        </Badge>
      )}
    </div>

    <div className="flex flex-1 flex-col justify-between">
      <CardContent className="p-2 pt-3 pb-0">
        <h3 className="font-medium text-sm tracking-normal">
          {experience.title}
        </h3>
        <p className="text-muted-foreground text-xs tracking-normal">
          {experience.location}
        </p>
        {experience.date && (
          <p className="text-muted-foreground text-xs tracking-normal">
            {experience.date}
          </p>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex items-center gap-0.5 p-2 pt-0 text-xs">
        {experience.rating && (
          <span className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-current" />
            {fa(experience.rating)}
          </span>
        )}
        {experience.reviewCount && (
          <span className="text-muted-foreground text-xs tracking-normal">
            {experience.rating && "·"}
            {experience.reviewCount > 0 ? ` (${fa(experience.reviewCount)})` : ""}
          </span>
        )}
        <span className="ms-auto text-xs">
          {fa(experience.price)} {experience.currency || "یورو"} / نفر
        </span>
      </CardFooter>
    </div>
  </Card>
);

const ExperienceSection = ({
  title,
  items,
  viewAllHref = "#",
}: ExperienceGridProps) => {
  const scrollContainer = React.useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({
        left: -320,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollContainer.current) {
      scrollContainer.current.scrollBy({ left: 320, behavior: "smooth" });
    }
  };

  return (
    <div className="w-full py-4">
      <div className="mx-auto max-w-[1760px] px-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-medium text-lg tracking-normal md:text-xl">
            {title}
          </h2>
          <div className="flex items-center gap-1">
            {/* Right-to-left: the right arrow comes first and goes back toward the start. */}
            <Button
              className="h-7 w-7 rounded-full border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              onClick={handleScrollRight}
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">قبلی</span>
            </Button>
            <Button
              className="h-7 w-7 rounded-full border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              onClick={handleScrollLeft}
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">بعدی</span>
            </Button>
            {viewAllHref && (
              <Link
                className="ms-1 hidden font-medium text-xs hover:underline md:block"
                href={viewAllHref}
              >
                مشاهده‌ی همه
              </Link>
            )}
          </div>
        </div>

        <div
          className="scrollbar-hide -mx-1 flex snap-x snap-mandatory gap-3 overflow-x-auto px-1 pb-2"
          ref={scrollContainer}
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          {items.map((item) => (
            <div
              className="w-[240px] flex-none snap-start md:w-[260px]"
              key={item.id}
            >
              <Link
                className="block rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                href={item.href ?? "#"}
              >
                <ExperienceCard experience={item} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export interface CarouselCardsProps {
  /** One horizontal rail per section. Defaults to two sample rails. */
  sections?: ExperienceGridProps[];
  className?: string;
}

const DEFAULT_SECTIONS: ExperienceGridProps[] = [
  { items: sampleExperiences, title: "تجربه‌های اختصاصی ‹", viewAllHref: "#" },
  { items: popularExperiences, title: "تجربه‌های محبوب پاریس", viewAllHref: "#" },
];

export default function CarouselCards({
  sections = DEFAULT_SECTIONS,
  className = "",
}: CarouselCardsProps = {}) {
  return (
    <div dir="rtl" lang="fa" className={`mt-4 w-full space-y-4 ${className}`}>
      {sections.map((section) => (
        <ExperienceSection key={section.title} {...section} />
      ))}
    </div>
  );
}
