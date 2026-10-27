"use client"

import GlassFolder from "@/components/ui/glass-folder-cards"

/**
 * Three folders on a dotted desk: milk glass over a long-exposure print with a
 * key that adds files, a plain archive with a menu, and smoked glass over red
 * ink. Hover one to lean its glass toward you, click it to open it.
 */
export default function GlassFolderCardsDemo() {
  return (
    <div
      dir="rtl"
      className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-background px-6 py-16"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.13]"
        style={{
          backgroundImage: "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />
      <div className="relative grid max-w-[1180px] grid-cols-1 items-end justify-items-center gap-x-14 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
        <GlassFolder label="فایل‌های من" art="aurora" seed={3} appearDelay={0} />
        <GlassFolder
          label="بایگانی"
          art="none"
          action="more"
          labelPlacement="top-left"
          appearDelay={140}
          files={[
            { name: "لوک‌بوک ۱۴۰۳", meta: "۳۸ تصویر", art: "dusk" },
            { name: "فاکتورها", meta: "۱۲ فایل PDF" },
            { name: "عکاسی — کیش", meta: "RAW · ۲٫۱ گیگابایت", art: "ember" },
            { name: "قرارداد", meta: "PDF · ۳۲۰ کیلوبایت" },
          ]}
          menu={[{ label: "تغییر نام" }, { label: "اشتراک‌گذاری…" }, { label: "انتقال به سطل زباله", danger: true }]}
        />
        <GlassFolder
          label="فایل‌های من"
          meta="چهارشنبه ۲۹ مرداد"
          tone="dark"
          art="ember"
          seed={11}
          action="none"
          labelPlacement="top-right"
          appearDelay={280}
          files={[
            { name: "عکس‌های صحنه", meta: "۶۴ تصویر", art: "verdant" },
            { name: "یادداشت‌های تدوین", meta: "TXT · ۴ کیلوبایت" },
            { name: "اصلاح رنگ نسخه‌ی ۳", meta: "DRX · ۱۸ مگابایت", art: "aurora" },
          ]}
        />
      </div>
      <p className="relative mt-14 text-xs text-muted-foreground">
        نشانگر را ببرید تا خم شود · کلیک کنید تا باز شود · با + فایل اضافه کنید
      </p>
    </div>
  )
}
