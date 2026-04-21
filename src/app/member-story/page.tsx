import React from "react";

import { COMPONENT_PAGES } from "@/lib/constants";

export default function MemberStory() {
  const page = COMPONENT_PAGES.find((p) => p.slug === "member-story");
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {page?.title}
        </h1>
        <p className="mt-3 text-text-muted">{page?.excerpt}</p>
      </header>

      <article className="bg-surface border border-white/[0.06] rounded-xl p-6">
        <h2 className="text-2xl font-heading uppercase text-text-base">Ravi’s 16-Week Change</h2>
        <p className="mt-3 text-text-muted">
          {page?.content?.[0]}
        </p>
        <div className="mt-4 text-text-muted">
          <p>Highlights:</p>
          <ul className="list-disc ml-6 mt-2">
            <li>Consistent 3x/week strength training.</li>
            <li>Simple nutrition adjustments to support recovery.</li>
            <li>Technique-first coaching reduced injury risk and improved lifts.</li>
          </ul>
        </div>
      </article>
    </section>
  );
}
