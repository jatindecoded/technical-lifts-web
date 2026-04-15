"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

import { Card } from "@/components/ui/card";
import { CTA } from "@/components/ui/cta";
import { cn } from "@/lib/utils";
import { BLOG_POSTS } from "@/lib/constants";

type Post = (typeof BLOG_POSTS)[0];

export function BlogArticle({ post }: { post: Post }) {
  const prefersReduced = useReducedMotion();

  const header = {
    hidden: { opacity: 0, y: 8 },
    enter: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
  };

  const paragraph = {
    hidden: { opacity: 0, y: 8 },
    enter: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.08 * i, duration: 0.35 } }),
  };

  const wordCount = post.content.join(" ").split(/\s+/).length;
  const readMins = Math.max(2, Math.round(wordCount / 200));

  return (
    <article className="py-section max-w-container mx-auto px-6">
      <motion.header
        initial={prefersReduced ? false : "hidden"}
        animate={prefersReduced ? false : "enter"}
        variants={header}
        className="mb-8"
      >
        <h1 className="text-4xl font-heading tracking-tight leading-none text-text-base uppercase">
          {post.title}
        </h1>
        <p className="mt-3 text-text-muted max-w-2xl">{post.excerpt}</p>

        <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-text-muted">
          <span className="uppercase tracking-wide font-semibold">{readMins} min read</span>
          <span className="h-1 w-1 rounded-full bg-white/20 inline-block" aria-hidden />
          {post.meta?.description && (
            <span className="text-text-muted">{post.meta.description}</span>
          )}
        </div>
      </motion.header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        <motion.div
          className="prose prose-invert max-w-none col-span-2 text-text-base"
          initial={prefersReduced ? false : "hidden"}
          animate={prefersReduced ? false : "enter"}
        >
          {post.content.map((p, i) => (
            <motion.p key={i} variants={paragraph} custom={i} className="mb-6">
              {p}
            </motion.p>
          ))}
        </motion.div>

        <aside>
          <Card className="sticky top-24">
            <h3 className="font-heading text-sm uppercase tracking-tight">Get started</h3>
            <p className="text-muted-foreground mt-2 text-sm">Book a free trial session or talk to a trainer to discuss programming.</p>
            <div className="mt-4">
              <CTA id="trial" />
            </div>
          </Card>

          <Card className="mt-6">
            <h4 className="font-heading text-xs uppercase tracking-tight">Other resources</h4>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href="/blog" className="underline underline-offset-4">All blog posts</a>
              </li>
              <li>
                <a href="/transformations" className="underline underline-offset-4">Transformations gallery</a>
              </li>
            </ul>
          </Card>
        </aside>
      </div>
    </article>
  );
}
