import React from "react";

import { COMPONENT_PAGES, PAGES } from "@/lib/constants";
import { Pricing } from "@/components/blocks/pricing";

export default function SchedulePricing() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "schedule-pricing");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {page?.title ?? PAGES.componentsHeading}
        </h1>
        <p className="mt-3 text-text-muted">{page?.excerpt}</p>
      </header>

      <Pricing />
    </section>
  );
}
