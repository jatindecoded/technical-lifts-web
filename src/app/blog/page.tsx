/* eslint-disable import/order */
import React from "react";
import Link from "next/link";

import { BLOG_POSTS, PAGES } from "@/lib/constants";

export default function BlogIndex() {
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {PAGES.blogIndexHeading}
        </h1>
        <p className="mt-3 text-text-muted">Latest from the training floor.</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {BLOG_POSTS.map((post) => (
          <article key={post.slug} className="bg-surface border border-white/[0.06] rounded-xl p-6">
            <h2 className="text-2xl font-heading tracking-tight uppercase text-text-base">
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </h2>
            <p className="mt-2 text-text-muted">{post.excerpt}</p>
            <Link
              href={`/blog/${post.slug}`}
              className="inline-block mt-4 bg-primary text-dark rounded-full px-5 py-2 font-heading uppercase"
            >
              Read
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
