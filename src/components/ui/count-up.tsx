"use client";

import { useEffect, useRef } from "react";

import { animate, useInView } from "motion/react";

interface CountUpProps {
  to: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

export const CountUp = ({
  to,
  suffix = "",
  prefix = "",
  duration = 1.8,
  className,
}: CountUpProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView || !ref.current) return;
    const el = ref.current;

    const ctrl = animate(0, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(val) {
        el.textContent = `${prefix}${Math.round(val)}${suffix}`;
      },
    });

    return () => ctrl.stop();
  }, [isInView, to, duration, prefix, suffix]);

  return (
    <span ref={ref} className={className}>
      {prefix}0{suffix}
    </span>
  );
};
