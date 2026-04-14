/* eslint-disable import/order */
import React from "react";

import { COMPONENT_PAGES, PRICING_PLANS, PAGES } from "@/lib/constants";

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

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {PRICING_PLANS.map((plan) => (
          <div key={plan.name} className="bg-surface border border-white/[0.06] rounded-xl p-6">
            <h3 className="font-heading uppercase text-text-base">{plan.name}</h3>
            <div className="mt-2 text-text-base">{plan.price} <span className="text-text-muted">{plan.priceNote}</span></div>
            <ul className="mt-3 text-text-muted space-y-1">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
