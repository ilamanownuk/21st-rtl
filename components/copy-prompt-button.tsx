"use client";

import { useEffect, useState } from "react";
import { Check, Copy } from "lucide-react";

function fallbackCopy(text: string) {
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

export default function CopyPromptButton({ prompt, label }: { prompt: string; label: string }) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  useEffect(() => {
    if (state === "idle") return;
    const t = setTimeout(() => setState("idle"), 2000);
    return () => clearTimeout(t);
  }, [state]);

  const copy = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(prompt);
      } else if (!fallbackCopy(prompt)) {
        throw new Error("copy failed");
      }
      setState("copied");
    } catch {
      setState(fallbackCopy(prompt) ? "copied" : "error");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${label} prompt`}
      className="inline-flex h-9 items-center gap-2 rounded-lg bg-foreground px-3.5 text-sm font-medium text-background transition-[opacity,transform] hover:opacity-90 active:scale-[.97] focus-visible:outline-2 focus-visible:outline-offset-2"
    >
      {state === "copied" ? <Check className="size-4" aria-hidden /> : <Copy className="size-4" aria-hidden />}
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "error" ? "Copy failed" : "Copy prompt"}
      </span>
    </button>
  );
}
