https://21st.dev/?q=product+page&preview=%2F%40kokonutd%2Fcomponents%2Fcarousel-cards

You are given a task to integrate an existing React component in the codebase

The codebase should support:
- shadcn project structure  
- Tailwind CSS
- Typescript

If it doesn't, provide instructions on how to setup project via shadcn CLI, install Tailwind or Typescript.

Determine the default path for components and styles. 
If default path for components is not /components/ui, provide instructions on why it's important to create this folder
Copy-paste this component to /components/ui folder:
```tsx
carousel-cards.tsx
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

interface ExperienceItem {
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
}

interface ExperienceGridProps {
  title: string;
  items: ExperienceItem[];
  viewAllHref?: string;
}

const sampleExperiences: ExperienceItem[] = [
  {
    id: "1",
    title: "Become an Otaku Hottie with Megan Thee Stallion",
    image: "https://cdn.21st.dev/assets/mirror/e6/e637dac088a6725c7c3b446aa4e9a885eeb1a349a0640a936bc269460b97dceb.jpg",
    location: "Los Angeles, United States",
    price: 120,
    currency: "€",
    rating: 4.97,
    reviewCount: 128,
    badge: "Original",
    date: "Closes May 21",
  },
  {
    id: "2",
    title: "Spend a Sunday Funday with Patrick Mahomes",
    image: "https://cdn.21st.dev/assets/mirror/8e/8ea802c3a2f07ebf0086632796e36be685b7f8cc7fb89463fe39f2b36dd1f35b.jpg",
    location: "Kansas City, United States",
    price: 150,
    currency: "€",
    rating: 4.92,
    reviewCount: 86,
    badge: "Original",
    date: "Closes Today",
  },
  {
    id: "3",
    title: "Celebrate with SEVENTEEN on their 10th anniversary",
    image: "https://cdn.21st.dev/assets/mirror/50/501af93e434ec2dfced6a410ab261860549b8bf6889541e4cd0e699e40d087d1.jpg",
    location: "Seoul, South Korea",
    price: 200,
    currency: "€",
    rating: 4.98,
    reviewCount: 254,
    badge: "Original",
    date: "Closed May 17",
  },
  {
    id: "4",
    title: "Learn the secrets of French pastry with nonnas",
    image: "https://cdn.21st.dev/assets/mirror/7c/7c61521a6e198201ee227146ae2738168bfb64fa09e446a0887c94073eb13bde.jpg",
    location: "Paris, France",
    price: 70,
    currency: "€",
    rating: 4.97,
    reviewCount: 112,
    badge: "Original",
  },
  {
    id: "5",
    title: "Uncover the world of cabaret with a burlesque show",
    image: "https://cdn.21st.dev/assets/mirror/29/2921e4548b76ceafeaa36b96e599ee28e2b6b34098a83b389b6e76362d0e8bd2.jpg",
    location: "Paris, France",
    price: 92,
    currency: "€",
    rating: 4.9,
    reviewCount: 78,
    badge: "Original",
  },
  {
    id: "6",
    title: "The Super Powers of Art-family Game at the Louvre",
    image: "https://cdn.21st.dev/assets/mirror/86/8681621cbc0112b5cbf4c52a5be863421dcd63b5038da2d197cac87ca7f315c3.jpg",
    location: "Paris, France",
    price: 90,
    currency: "€",
    rating: 4.98,
    reviewCount: 146,
    badge: "Original",
  },
  {
    id: "7",
    title: "Savor tasty vegan pastries with a plant-based pro",
    image: "https://cdn.21st.dev/assets/mirror/01/01cda8751643ffeefdf2c4e3514d737670042988115b0cb2e1f1b68909ba1691.jpg",
    location: "Paris, France",
    price: 75,
    currency: "€",
    rating: 4.95,
    reviewCount: 92,
    badge: "Original",
  },
];

const popularExperiences: ExperienceItem[] = [
  {
    id: "p1",
    title: "Learn to bake the French Croissant",
    image: "https://cdn.21st.dev/assets/mirror/b5/b59d189f652821aee1bfa1332a520972ce8502c843da8c6d73f1eba27965e396.jpg",
    location: "Paris, France",
    price: 95,
    currency: "€",
    rating: 4.95,
    reviewCount: 218,
    badge: "Popular",
  },
  {
    id: "p2",
    title: "Seek out hidden speakeasy bars in the city",
    image: "https://cdn.21st.dev/assets/mirror/5b/5b615acd8874bd3b23ee445afd073e417639d55d77360510fed04b75fadd34f1.jpg",
    location: "Paris, France",
    price: 74,
    currency: "€",
    rating: 4.9,
    reviewCount: 165,
    badge: "Popular",
  },
  {
    id: "p3",
    title: "Versailles Food and Palace Bike Tour",
    image: "https://cdn.21st.dev/assets/mirror/b5/b59d189f652821aee1bfa1332a520972ce8502c843da8c6d73f1eba27965e396.jpg",
    location: "Versailles, France",
    price: 122,
    currency: "€",
    rating: 4.97,
    reviewCount: 89,
    badge: "Popular",
  },
  {
    id: "p4",
    title: "Haunted Paris Tour - Ghosts, Legends, True Crime",
    image: "https://cdn.21st.dev/assets/mirror/c9/c9721f5bab8148f961068af3fd31b132955f6dec0f78b2e848f3775599eabbef.jpg",
    location: "Paris, France",
    price: 25,
    currency: "€",
    rating: 4.98,
    reviewCount: 345,
    badge: "Popular",
  },
  {
    id: "p5",
    title: "Learn to make the French macarons with a chef",
    image: "https://cdn.21st.dev/assets/mirror/2a/2a08d0b6172df7a3ff06b11d85d7435ddac94bb232606999a4ec708eec0bdc5a.jpg",
    location: "Paris, France",
    price: 110,
    currency: "€",
    rating: 4.95,
    reviewCount: 203,
    badge: "Popular",
  },
  {
    id: "p6",
    title: "No Diet Club - Best food tour in Le Marais",
    image: "https://cdn.21st.dev/assets/mirror/20/20f6a12b03fea82d42ce9461469fc0379dd965112cf265b8ef587816cafa8a84.jpg",
    location: "Paris, France",
    price: 65,
    currency: "€",
    rating: 4.92,
    reviewCount: 178,
    badge: "5 spots left",
  },
  {
    id: "p7",
    title: "Soak up the nightlife of Paris",
    image: "https://cdn.21st.dev/assets/mirror/3b/3b4a9d491a85f82c7bc04273980c150b7ca6d570985c1f44a30bcc86b461e42a.jpg",
    location: "Paris, France",
    price: 20,
    currency: "€",
    rating: 4.94,
    reviewCount: 112,
    badge: "Popular",
  },
];

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
        className="absolute top-2 right-2 z-10 rounded-full bg-white/80 text-neutral-700 backdrop-blur-sm hover:bg-white/90 hover:text-black"
        size="icon"
        variant="ghost"
      >
        <Heart className="h-4 w-4 stroke-[2px]" />
        <span className="sr-only">Add to favorites</span>
      </Button>
      {experience.badge && (
        <Badge className="absolute top-2 left-2 rounded-md bg-white/90 px-1.5 py-0.5 font-medium text-black text-xs">
          {experience.badge}
        </Badge>
      )}
    </div>

    <div className="flex flex-1 flex-col justify-between">
      <CardContent className="p-2 pt-3 pb-0">
        <h3 className="font-medium text-sm tracking-tight">
          {experience.title}
        </h3>
        <p className="text-muted-foreground text-xs tracking-tight">
          {experience.location}
        </p>
        {experience.date && (
          <p className="text-muted-foreground text-xs tracking-tight">
            {experience.date}
          </p>
        )}
      </CardContent>

      <CardFooter className="mt-auto flex items-center gap-0.5 p-2 pt-0 text-xs">
        {experience.rating && (
          <span className="flex items-center gap-0.5">
            <Star className="h-3 w-3 fill-current" />
            {experience.rating}
          </span>
        )}
        {experience.reviewCount && (
          <span className="text-muted-foreground text-xs tracking-tight">
            {experience.rating && "·"}
            {experience.reviewCount > 0 ? ` (${experience.reviewCount})` : ""}
          </span>
        )}
        <span className="ml-auto text-xs tracking-tight">
          {experience.currency || "€"} {experience.price} / guest
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
          <h2 className="font-medium text-lg tracking-tight md:text-xl">
            {title}
          </h2>
          <div className="flex items-center gap-1">
            <Button
              className="h-7 w-7 rounded-full border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              onClick={handleScrollLeft}
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Scroll left</span>
            </Button>
            <Button
              className="h-7 w-7 rounded-full border-neutral-200 hover:bg-neutral-100 dark:border-neutral-800 dark:hover:bg-neutral-900"
              onClick={handleScrollRight}
              size="icon"
              variant="outline"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Scroll right</span>
            </Button>
            <Link
              className="ml-1 hidden font-medium text-xs hover:underline md:block"
              href="#"
            >
              Show all
            </Link>
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
                href="#"
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

export default function CarouselCards() {
  return (
    <div className="mt-4 w-full space-y-4">
      <ExperienceSection
        items={sampleExperiences}
        title="Airbnb Originals ›"
        viewAllHref="#"
      />
      <ExperienceSection
        items={popularExperiences}
        title="Popular experiences in Paris"
        viewAllHref="#"
      />
    </div>
  );
}


demo.tsx
import CarouselCards from "@/components/ui/carousel-cards";

export default function Default() {
  return <CarouselCards />;
}

```

Copy-paste these files for dependencies:
```tsx
shadcn/card
import * as React from "react"

import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      className,
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className,
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }

```
```tsx
shadcn/badge
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

```
```tsx
shadcn/button
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  },
)
Button.displayName = "Button"

export { Button, buttonVariants }

```

Install NPM dependencies:
```bash
next, lucide-react, class-variance-authority, @radix-ui/react-slot
```
