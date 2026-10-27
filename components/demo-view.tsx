"use client";

import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Demos render client-only: several read window/WebGL/matchMedia on mount and
// they only ever run inside the preview iframe.
const DEMOS: Record<string, ComponentType> = {
  "agentic-factory": dynamic(() => import("@/components/demos/agentic-factory"), { ssr: false }),
  "bank-card": dynamic(() => import("@/components/demos/bank-card"), { ssr: false }),
  "card-image-carousel": dynamic(() => import("@/components/demos/card-image-carousel"), { ssr: false }),
  "carousel-of-cards-flex-col": dynamic(() => import("@/components/demos/carousel-of-cards-flex-col"), { ssr: false }),
  "circular-navigation-menu": dynamic(() => import("@/components/demos/circular-navigation-menu"), { ssr: false }),
  "glassmorphism-folder": dynamic(() => import("@/components/demos/glassmorphism-folder"), { ssr: false }),
  "image-upload-cropper": dynamic(() => import("@/components/demos/image-upload-cropper"), { ssr: false }),
  "panoramid-spread-hero": dynamic(() => import("@/components/demos/panoramid-spread-hero"), { ssr: false }),
  "polaroid-image-carousel": dynamic(() => import("@/components/demos/polaroid-image-carousel"), { ssr: false }),
  "product-rail-gallery-fashion-store": dynamic(() => import("@/components/demos/product-rail-gallery-fashion-store"), { ssr: false }),
  "tilted-grid-hero": dynamic(() => import("@/components/demos/tilted-grid-hero"), { ssr: false }),
  "wallet-card": dynamic(() => import("@/components/demos/wallet-card"), { ssr: false }),
};

export default function DemoView({ slug }: { slug: string }) {
  const Demo = DEMOS[slug];
  return Demo ? <Demo /> : null;
}
