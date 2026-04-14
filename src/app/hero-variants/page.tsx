/* eslint-disable import/order */
import React from "react";
import { Hero } from "@/components/blocks/hero";
import { COMPONENT_PAGES, PAGES } from "@/lib/constants";

export default function HeroVariants() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "hero-variants");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {page?.title ?? PAGES.componentsHeading}
        </h1>
        <p className="mt-3 text-text-muted">{page?.excerpt}</p>
      </header>

      <div className="space-y-8">
        {/* Default hero */}
        <div className="bg-surface border border-white/[0.06] rounded-xl p-6">
          <Hero />
        </div>
        {/* Small hero variant (reuse Hero with props later) */}
        <div className="bg-surface border border-white/[0.06] rounded-xl p-6">
          <h3 className="font-heading uppercase text-text-base">Compact Variant</h3>
          <p className="mt-2 text-text-muted">A compact hero for inner pages.</p>
        </div>
      </div>
    </section>
  );
}
