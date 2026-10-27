"use client";

import { useState } from "react";
import CircularNavigation from "@/components/ui/cicular-navigation-bar";
import { Home, Film, Music, Trophy, FileText, Settings, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "خانه", icon: Home, href: "/" },
  { name: "فیلم", icon: Film, href: "/movies" },
  { name: "موسیقی", icon: Music, href: "/music" },
  { name: "ورزش", icon: Trophy, href: "/sports" },
  { name: "اخبار", icon: FileText, href: "/news" },
  { name: "تنظیمات", icon: Settings, href: "/settings" },
  { name: "جستجو", icon: Search, href: "/search" },
];

export default function CircularNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div dir="rtl" className="h-screen w-full flex items-center justify-center">
        <Button onClick={toggleMenu}>باز کردن منو</Button>
      </div>
      <CircularNavigation navItems={navItems} isOpen={isOpen} toggleMenu={toggleMenu} />
    </>
  );
}
