"use client";

import React from "react";

import Script from "next/script";

import { Input as BaseInput } from "@/components/ui/input";
import { Textarea as BaseTextarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

type TallyWindow = { Tally?: { loadEmbeds?: () => void } };

export default function UnifiedForm() {
  // Keep it simple: render a Tally iframe embed and load the widget script

  React.useEffect(() => {
    function handleMessage(e: MessageEvent) {
      if (
        typeof e.data === "string" &&
        e.data.includes("Tally.FormSubmitted")
      ) {
        try {
          const parsed = JSON.parse(e.data);
          const payload = parsed.payload;
          window.dispatchEvent(
            new CustomEvent("lead-submitted", { detail: payload }),
          );
        } catch {}
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return (
    <div className="bg-surface w-full rounded-2xl border border-white/[0.08] p-8">
      <iframe
        data-tally-src="https://tally.so/embed/81PqoY?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="265"
        frameBorder={0}
        marginHeight={0}
        marginWidth={0}
        title="Registration Form Template"
      />

      <Script
        src="https://tally.so/widgets/embed.js"
        onLoad={() => {
          try {
            (window as TallyWindow).Tally?.loadEmbeds?.();
          } catch {}
        }}
      />
    </div>
  );
}

// Small field helpers to keep consistent styles
export function Field({
  id,
  label,
  children,
  className,
}: {
  id?: string;
  label?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label htmlFor={id} className="text-text-muted block text-xs font-bold">
          {label}
        </label>
      )}
      {children}
    </div>
  );
}

export function Input(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return <BaseInput {...props} />;
}

export function Select({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & {
  children: React.ReactNode;
}) {
  // We keep simple native select for simpler integration if needed,
  // but styled to match our system
  return (
    <div className="relative">
      <select
        {...props}
        className={cn(
          "bg-surface text-text-base h-11 w-full appearance-none rounded-lg border border-white/[0.08] px-4 py-2 text-base transition-all outline-none md:text-sm",
          "focus:border-primary/50 focus:ring-primary/10 focus:ring-4",
          props.className,
        )}
      >
        {children}
      </select>
      <div className="text-text-muted pointer-events-none absolute inset-y-0 right-4 flex items-center">
        <svg
          className="size-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 9l-7 7-7-7"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
        </svg>
      </div>
    </div>
  );
}

export function Textarea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>,
) {
  return <BaseTextarea {...props} />;
}

export function Checkbox(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input {...props} className={cn("mt-1", props.className)} type="checkbox" />
  );
}
