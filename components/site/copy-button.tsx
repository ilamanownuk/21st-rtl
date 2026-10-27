"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Check, Copy } from "lucide-react";
import { cn } from "@/lib/utils";

function legacyCopy(text: string) {
  const el = document.createElement("textarea");
  el.value = text;
  el.setAttribute("readonly", "");
  el.style.position = "fixed";
  el.style.opacity = "0";
  document.body.appendChild(el);
  el.select();
  const ok = document.execCommand("copy");
  el.remove();
  return ok;
}

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return;
    } catch {}
  }
  if (!legacyCopy(text)) throw new Error("copy failed");
}

/** Copies from a URL without losing the click's user activation (Safari). */
async function copyFromUrl(src: string) {
  if (navigator.clipboard && window.isSecureContext && typeof ClipboardItem !== "undefined") {
    try {
      const blob = fetch(src).then((r) => {
        if (!r.ok) throw new Error(r.statusText);
        return r.text().then((t) => new Blob([t], { type: "text/plain" }));
      });
      await navigator.clipboard.write([new ClipboardItem({ "text/plain": blob })]);
      return;
    } catch {}
  }
  const res = await fetch(src);
  if (!res.ok) throw new Error(res.statusText);
  await copyText(await res.text());
}

type CopyButtonProps = {
  /** Text to copy, or… */
  text?: string;
  /** …a URL whose response body is copied. */
  src?: string;
  children?: ReactNode;
  /** Accessible name, needed when the button is icon-only. */
  label?: string;
  variant?: "solid" | "outline" | "ghost";
  size?: "sm" | "md" | "icon";
  className?: string;
};

const VARIANTS = {
  solid: "bg-foreground text-background hover:opacity-90",
  outline: "border bg-background hover:bg-accent",
  ghost: "text-muted-foreground hover:bg-accent hover:text-foreground",
};

const SIZES = {
  sm: "h-8 gap-1.5 px-2.5 text-xs",
  md: "h-9 gap-2 px-3.5 text-sm",
  icon: "size-8 justify-center",
};

export default function CopyButton({
  text,
  src,
  children,
  label,
  variant = "outline",
  size = "md",
  className,
}: CopyButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  const onClick = async () => {
    try {
      if (src) await copyFromUrl(src);
      else await copyText(text ?? "");
      setState("copied");
    } catch {
      setState("error");
    }
  };

  const Icon = state === "copied" ? Check : Copy;
  const status = state === "copied" ? "کپی شد" : state === "error" ? "خطا در کپی" : null;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex shrink-0 items-center rounded-lg font-medium transition-[background-color,opacity,transform] active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2",
        VARIANTS[variant],
        SIZES[size],
        className,
      )}
    >
      <Icon className={size === "sm" || size === "icon" ? "size-3.5" : "size-4"} aria-hidden />
      {size !== "icon" && <span aria-live="polite">{status ?? children}</span>}
      {size === "icon" && <span className="sr-only" aria-live="polite">{status}</span>}
    </button>
  );
}
