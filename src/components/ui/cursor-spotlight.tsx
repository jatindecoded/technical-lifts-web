"use client";

import { useEffect, useRef } from "react";

export const CursorSpotlight = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Use CSS custom properties + CSS transition for smoothness — zero JS frame loop
    let rafId: number;
    let tx = -9999, ty = -9999;
    let cx = -9999, cy = -9999;

    const onMove = (e: MouseEvent) => { tx = e.clientX; ty = e.clientY; };

    const tick = () => {
      cx += (tx - cx) * 0.1;
      cy += (ty - cy) * 0.1;
      el.style.transform = `translate(${cx}px,${cy}px)`;
      rafId = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    rafId = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed top-0 left-0 z-[9999] -translate-x-1/2 -translate-y-1/2"
      aria-hidden
    >
      <div className="h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(232,255,0,0.05)_0%,transparent_68%)]" />
    </div>
  );
};
