"use client";
import React from "react";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";

import { BLOG_POSTS } from "@/lib/constants";

export function BlogList() {
  const reduce = useReducedMotion();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.06 } },
  };

  const item = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
      initial={reduce ? undefined : "hidden"}
      whileInView={reduce ? undefined : "show"}
      viewport={{ once: true, amount: 0.12 }}
      variants={reduce ? undefined : container}
    >
      {BLOG_POSTS.map((post) => (
        <motion.article
          key={post.slug}
          variants={reduce ? undefined : item}
          className="bg-surface border border-white/[0.06] rounded-xl p-6"
        >
          <h2 className="text-xl md:text-2xl font-heading tracking-tight uppercase text-text-base">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h2>
          <p className="mt-2 text-text-muted">{post.excerpt}</p>
          <Link
            href={`/blog/${post.slug}`}
            className="inline-block mt-4 bg-primary text-dark rounded-full px-5 py-2 font-heading uppercase"
          >
            Read
          </Link>
        </motion.article>
      ))}
    </motion.div>
  );
}
