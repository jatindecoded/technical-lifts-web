"use client";

import { useEffect, useRef } from "react";

import { animate } from "motion";

import { cn } from "@/lib/utils";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

interface ScrambleTextProps {
  text: string;
  className?: string;
  trigger?: boolean;
  speed?: number;
}

export const ScrambleText = ({
  text,
  className,
  trigger = true,
  speed = 0.035,
}: ScrambleTextProps) => {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!trigger || !ref.current) return;
    const el = ref.current;

    const ctrl = animate(0, text.length, {
      duration: text.length * speed,
      ease: "linear",
      delay: 0.3,
      onUpdate(val) {
        el.textContent = text
          .split("")
          .map((char, i) => {
            if (char === " ") return " ";
            if (i < val) return text[i];
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");
      },
      onComplete() {
        el.textContent = text;
      },
    });

    return () => ctrl.stop();
  }, [text, trigger, speed]);

  return <span ref={ref} className={cn(className)}>{text}</span>;
};
