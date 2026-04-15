import React from "react";

import { notFound } from "next/navigation";

import { BlogArticle } from "@/components/blocks/blog-article";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPost(props: unknown) {
  const { params } = props as { params: { slug: string } };
  const post = BLOG_POSTS.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return <BlogArticle post={post} />;
}
