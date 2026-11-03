"use client"

import IsometricLiftCarousel, { type IsometricLiftItem } from "@/components/ui/isometric-lift-carousel"

const u = (id: string) =>
  "https://images.unsplash.com/photo-" + id + "?q=80&w=600&auto=format&fit=crop&ixlib=rb-4.1.0"

const photos: IsometricLiftItem[] = [
  { title: "پیاده‌رو", src: u("1779525822769-d1bbd2c0e4bd") },
  { title: "بام قرمز", src: u("1779525822818-07a55330f964") },
  { title: "تابلوها", src: u("1779525822831-a3f03711c7d7") },
  { title: "محدودیت سرعت", src: u("1779525822819-8ddef8f8ee18") },
  { title: "درخت یاس بنفش", src: u("1779525822839-26386802c4fd") },
  { title: "خانه‌ی روشن", src: u("1778494824647-af2adeacd8b8") },
  { title: "تیر چراغ خیابان", src: u("1779525822731-4bde2805c932") },
  { title: "خیابان درختی", src: u("1779618258222-556cd048c6d0") },
]

export default function Demo() {
  // w-full is load-bearing: 21st centres every demo in a flex wrapper, and a
  // flex item left at width:auto shrinks to fit its contents.
  return (
    <div className="w-full">
      <IsometricLiftCarousel items={photos} />
    </div>
  )
}
