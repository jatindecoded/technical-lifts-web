import React from "react";

import { BlogList } from "@/components/blocks/blog-list";
import { PAGES } from "@/lib/constants";

export default function BlogIndex() {
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-3xl font-heading tracking-tight leading-none text-text-base uppercase">
          {PAGES.blogIndexHeading}
        </h1>
        <p className="mt-3 text-text-muted">Latest from the training floor.</p>
      </header>

      <div>
        <BlogList />
      </div>
    </section>
  );
}
