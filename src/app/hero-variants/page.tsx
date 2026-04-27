import React from "react";

import { Hero } from "@/components/blocks/hero";
import { COMPONENT_PAGES, PAGES } from "@/lib/constants";

export default function HeroVariants() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "hero-variants");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="font-heading text-text-base text-4xl leading-none tracking-tight uppercase">
          {page?.title ?? PAGES.componentsHeading}
        </h1>
        <p className="text-text-muted mt-3">{page?.excerpt}</p>
      </header>

      <div className="space-y-8">
        {/* Default hero */}
        <div className="bg-surface rounded-xl border border-white/[0.06] p-6">
          <Hero />
        </div>
        {/* Small hero variant (reuse Hero with props later) */}
        <div className="bg-surface rounded-xl border border-white/[0.06] p-6">
          <h3 className="font-heading text-text-base uppercase">
            Compact Variant
          </h3>
          <p className="text-text-muted mt-2">
            A compact hero for inner pages.
          </p>
        </div>
      </div>
    </section>
  );
}
