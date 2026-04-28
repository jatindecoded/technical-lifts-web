import React from "react";

import { Card } from "@/components/ui/card";
import { COMPONENT_PAGES, PAGES } from "@/lib/constants";

export default function CardVariants() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "card-variants");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="font-heading text-text-base text-4xl leading-none uppercase">
          {page?.title ?? PAGES.componentsHeading}
        </h1>
        <p className="text-text-muted mt-3">{page?.excerpt}</p>
      </header>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="bg-surface border border-white/[0.06] p-6">
          <h3 className="font-heading text-text-base uppercase">
            Trainer Card
          </h3>
          <p className="text-text-muted mt-2">Used for trainer profiles.</p>
        </Card>
        <Card className="bg-surface border border-white/[0.06] p-6">
          <h3 className="font-heading text-text-base uppercase">
            Transformation Card
          </h3>
          <p className="text-text-muted mt-2">
            Used for before/after showcases.
          </p>
        </Card>
        <Card className="bg-surface border border-white/[0.06] p-6">
          <h3 className="font-heading text-text-base uppercase">Blog Teaser</h3>
          <p className="text-text-muted mt-2">Used for news and updates.</p>
        </Card>
      </div>
    </section>
  );
}
