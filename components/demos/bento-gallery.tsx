import InteractiveImageBentoGallery from "@/components/ui/bento-gallery"

// Sample data for the image gallery
const imageItems = [
  {
    id: 1,
    title: "چشم‌انداز کوهستان",
    desc: "آرامشی بالاتر از ابرها.",
    url: "https://cdn.21st.dev/assets/mirror/61/611dfffb9431b3ac4206a6e7a8874496747263ce8535985238d0557503e7dd48.jpg",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    id: 2,
    title: "طاق ساحلی",
    desc: "جایی که خشکی به دریا می‌رسد.",
    url: "https://cdn.21st.dev/assets/mirror/97/97103cb7b8ac5adbbd3e64c7410560b04a83b056daa580ee1b0353f774ec8d3d.jpg",
    span: "md:row-span-1",
  },
  {
    id: 3,
    title: "تاج‌پوش جنگل",
    desc: "نور خورشید از میان برگ‌ها.",
    url: "https://cdn.21st.dev/assets/mirror/e5/e568c4b96c7f3aee720ea6b72026a629c5122bf9a7d887d62ab193f349eb5bfe.jpg",
    span: "md:row-span-1",
  },
  {
    id: 4,
    title: "تپه‌های کویر",
    desc: "ماسه‌های طلایی زیر آفتاب.",
    url: "https://cdn.21st.dev/assets/mirror/d5/d505ed9bd1290a57ed0a97d1405d5f045332ac4b3bdca717e1fb2adbd07e6af1.jpg",
    span: "md:row-span-2",
  },
  {
    id: 5,
    title: "شهر در شب",
    desc: "منظره‌ای زنده از شهر.",
    url: "https://cdn.21st.dev/assets/mirror/6a/6a375b80a961a5dfa61d0e0b3edaa47dbf6267189e2fe93ca27eb12e5ec1f5ce.jpg",
    span: "md:row-span-1",
  },
  {
    id: 6,
    title: "دریاچه‌ی مه‌آلود",
    desc: "مه صبحگاهی روی آب‌های آرام.",
    url: "https://cdn.21st.dev/assets/mirror/81/81f20f0ed8b6b081f4b8b4da2370e787a1aaa878bdb371a004b6339f6dd70d81.jpg",
    span: "md:col-span-2 md:row-span-1",
  },
]

export default function InteractiveImageBentoGalleryDemo() {
  return (
    <div className="w-full antialiased">
      <InteractiveImageBentoGallery
        imageItems={imageItems}
        title="لحظه‌های برگزیده"
        description="مجموعه‌ای از منظره‌های خیره‌کننده. برای گشتن بکشید، برای بزرگ‌نمایی کلیک کنید."
      />
    </div>
  )
}
