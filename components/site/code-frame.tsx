"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import CopyButton from "@/components/site/copy-button";

type CodeFrameProps = {
  html: string;
  code: string;
  title?: string;
  lines: number;
  collapseAt: number;
};

export default function CodeFrame({ html, code, title, lines, collapseAt }: CodeFrameProps) {
  const collapsible = lines > collapseAt / 20;
  const [open, setOpen] = useState(false);
  const collapsed = collapsible && !open;

  return (
    <div className="overflow-hidden rounded-xl border bg-[#fbfbfc]">
      <div className="flex items-center justify-between gap-3 border-b bg-background px-3 py-1.5">
        <span dir="ltr" className="truncate font-mono text-xs text-muted-foreground">
          {title ?? ""}
        </span>
        <div className="flex items-center gap-2">
          {collapsible && (
            <span className="hidden font-mono text-xs text-muted-foreground sm:inline">
              {lines.toLocaleString("fa-IR")} خط
            </span>
          )}
          <CopyButton text={code} size="sm" variant="ghost" label={title ? `کپی ${title}` : "کپی کد"}>
            کپی
          </CopyButton>
        </div>
      </div>
      <div className="relative">
        <div
          dir="ltr"
          className="code-block overflow-auto text-[13px] leading-[1.65]"
          style={collapsed ? { maxHeight: collapseAt, overflow: "hidden" } : { maxHeight: 640 }}
          dangerouslySetInnerHTML={{ __html: html }}
        />
        {collapsible && (
          <div
            className={
              collapsed
                ? "absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-[#fbfbfc] via-[#fbfbfc]/90 to-transparent pb-3 pt-16"
                : "flex justify-center border-t py-2"
            }
          >
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-8 items-center gap-1.5 rounded-lg border bg-background px-3 text-xs font-medium shadow-sm hover:bg-accent"
            >
              {collapsed ? "نمایش کامل کد" : "بستن"}
              <ChevronDown className={`size-3.5 transition-transform ${collapsed ? "" : "rotate-180"}`} aria-hidden />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
