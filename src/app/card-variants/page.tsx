import React from "react";

import { Card } from "@/components/ui/card";
import { COMPONENT_PAGES, PAGES } from "@/lib/constants";

export default function CardVariants() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "card-variants");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {page?.title ?? PAGES.componentsHeading}
        </h1>
        <p className="mt-3 text-text-muted">{page?.excerpt}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6 bg-surface border border-white/[0.06]">
          <h3 className="font-heading uppercase text-text-base">Trainer Card</h3>
          <p className="mt-2 text-text-muted">Used for trainer profiles.</p>
        </Card>
        <Card className="p-6 bg-surface border border-white/[0.06]">
          <h3 className="font-heading uppercase text-text-base">Transformation Card</h3>
          <p className="mt-2 text-text-muted">Used for before/after showcases.</p>
        </Card>
        <Card className="p-6 bg-surface border border-white/[0.06]">
          <h3 className="font-heading uppercase text-text-base">Blog Teaser</h3>
          <p className="mt-2 text-text-muted">Used for news and updates.</p>
        </Card>
      </div>
    </section>
  );
}
