import React from "react";

import { COMPONENT_PAGES } from "@/lib/constants";

export default function MemberStory() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "member-story");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="font-heading text-text-base text-4xl leading-none tracking-tight uppercase">
          {page?.title}
        </h1>
        <p className="text-text-muted mt-3">{page?.excerpt}</p>
      </header>

      <article className="bg-surface rounded-xl border border-white/[0.06] p-6">
        <h2 className="font-heading text-text-base text-2xl uppercase">
          Ravi’s 16-Week Change
        </h2>
        <p className="text-text-muted mt-3">{page?.content?.[0]}</p>
        <div className="text-text-muted mt-4">
          <p>Highlights:</p>
          <ul className="mt-2 ml-6 list-disc">
            <li>Consistent 3x/week strength training.</li>
            <li>Simple nutrition adjustments to support recovery.</li>
            <li>
              Technique-first coaching reduced injury risk and improved lifts.
            </li>
          </ul>
        </div>
      </article>
    </section>
  );
}
