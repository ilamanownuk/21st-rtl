"use client"

import CardDeckCarousel from "@/components/ui/card-deck-carousel"

// عکس‌های واقعی منظره (Unsplash).
const U = (id: string) => "https://images.unsplash.com/photo-" + id + "?q=80&w=1800&auto=format&fit=crop"

export default function DemoPhotos() {
  return (
    <CardDeckCarousel aspect="3 / 4" scatter={9}
      slides={[
        { image: U("1506905925346-21bda4d32df4"), title: "بالای ابرها", caption: "ولیس، سوئیس — طلوع در ارتفاع ۳۱۰۰ متری." },
        { image: U("1501785888041-af3ef285b470"), title: "دریاچه‌ی شیشه‌ای", caption: "دریاچه‌ی برایس، یک قایق در ظهر." },
        { image: U("1469474968028-56623f02e42e"), title: "دره‌ی طلایی", caption: "نور دیروقت که روی خط‌الرأس می‌ریزد." },
        { image: U("1464822759023-fed622ff2c3b"), title: "مرز برف", caption: "کاج‌ها، دشت رودخانه و رشته‌کوه بلند." },
        { image: U("1500534314209-a25ddb2bd429"), title: "ستیغ‌های آبی", caption: "هفت لایه مه پیش از غروب." },
        { image: U("1433086966358-54859d0ed716"), title: "پل آبشار", caption: "آبشار مولتنوما پس از باران." },
      ]}
    />
  )
}
