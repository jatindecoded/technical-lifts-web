import React from "react";

import { notFound } from "next/navigation";

import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPost(props: unknown) {
  const { params } = props as { params: { slug: string } };
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <article className="py-section max-w-container mx-auto px-6">
      <header className="mb-6">
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {post.title}
        </h1>
        <p className="mt-2 text-text-muted">{post.excerpt}</p>
      </header>

      <div className="prose prose-invert max-w-none text-text-base">
        {post.content.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}
