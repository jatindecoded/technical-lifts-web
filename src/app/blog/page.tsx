"use client";

import React from "react";

import { BlogList } from "@/components/blocks/blog-list";
import { PAGES } from "@/lib/constants";

export default function BlogIndex() {
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="font-heading text-text-base text-3xl leading-none uppercase">
          {PAGES.blogIndexHeading}
        </h1>
        <p className="text-text-muted mt-3">Latest from the training floor.</p>
      </header>

      <div>
        <BlogList />
      </div>
    </section>
  );
}
