import fs from "node:fs";
import path from "node:path";

export type PromptEntry = {
  slug: string;
  title: string;
  file: string;
  component: string;
};

export const PROMPTS: PromptEntry[] = [
  { slug: "agentic-factory", title: "Agentic Factory 3D", file: "agentic-factory.md", component: "agentic-factory-3d.tsx" },
  { slug: "bank-card", title: "Holo Bank Card", file: "bank-card.md", component: "holo-card.tsx" },
  { slug: "card-image-carousel", title: "Tilt Cascade Carousel", file: "card-image-carousel.md", component: "tilt-cascade-carousel.tsx" },
  { slug: "carousel-of-cards-flex-col", title: "Carousel Cards", file: "carousel-of-cards-flex-col.md", component: "carousel-cards.tsx" },
  { slug: "circular-navigation-menu", title: "Circular Navigation Menu", file: "circular-navigation-menu.md", component: "cicular-navigation-bar.tsx" },
  { slug: "glassmorphism-folder", title: "Glassmorphism Folder", file: "glassmorphism-folder.md", component: "glass-folder-cards.tsx" },
  { slug: "image-upload-cropper", title: "Image Upload Cropper", file: "image-upload-cropper.md", component: "file-upload-05.tsx" },
  { slug: "panoramid-spread-hero", title: "Panoramic Spread Hero", file: "panoramid-spread-hero.md", component: "panoramic-spread-hero.tsx" },
  { slug: "polaroid-image-carousel", title: "Polaroid Line Carousel", file: "polaroid-image-carousel.md", component: "polaroid-line-carousel.tsx" },
  { slug: "product-rail-gallery-fashion-store", title: "Product Rail Gallery", file: "product-rail-gallery-fashion-store.md", component: "product-rail-gallery.tsx" },
  { slug: "tilted-grid-hero", title: "Tilted Grid Hero", file: "tilted-grid-hero.md", component: "tilted-grid-hero.tsx" },
  { slug: "wallet-card", title: "Wallet Card", file: "wallet-card.md", component: "wallet-card-2.tsx" },
];

const PROMPTS_DIR = path.join(process.cwd(), "21st-prompts");

/** Raw, unmodified markdown of a prompt file. */
export function readPrompt(entry: PromptEntry): string {
  return fs.readFileSync(path.join(PROMPTS_DIR, entry.file), "utf8");
}

/** The 21st.dev link some prompts carry on their first line. */
export function sourceUrl(prompt: string): string | undefined {
  const first = prompt.split("\n", 1)[0].trim();
  return /^https:\/\/21st\.dev\//.test(first) ? first : undefined;
}
