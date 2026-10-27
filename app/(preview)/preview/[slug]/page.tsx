import { Suspense } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DemoView from "@/components/demo-view";
import { COMPONENTS, getComponent } from "@/lib/registry";

export const metadata: Metadata = { title: "Preview" };

export function generateStaticParams() {
  return COMPONENTS.map(({ slug }) => ({ slug }));
}

function Preview({ slug }: { slug: string }) {
  if (!getComponent(slug)) notFound();
  return <DemoView slug={slug} />;
}

export default function PreviewPage({ params }: PageProps<"/preview/[slug]">) {
  return (
    <main className="flex min-h-svh w-full flex-col items-center justify-center">
      <Suspense>{params.then(({ slug }) => <Preview slug={slug} />)}</Suspense>
    </main>
  );
}
