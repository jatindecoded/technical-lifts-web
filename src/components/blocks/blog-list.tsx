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
          whileHover={reduce ? undefined : { y: -6 }}
          transition={reduce ? undefined : { type: 'spring', stiffness: 260, damping: 20 }}
          className="group relative bg-surface border border-white/[0.06] rounded-2xl p-8"
        >
          <Link href={`/blog/${post.slug}`} className="absolute inset-0 z-10">
            <span className="sr-only">Read {post.title}</span>
          </Link>
          <div className="flex flex-col h-full justify-between">
            <div>
              <h2 className="text-2xl uppercase text-text-base group-hover:text-primary transition-colors">
                {post.title}
              </h2>
              <p className="mt-4 text-text-muted leading-relaxed">{post.excerpt}</p>
            </div>
            <div className="mt-8 flex items-center gap-2 text-primary font-bold tracking-widest text-xs">
              Read Article <span className="group-hover:translate-x-1 transition-transform">→</span>
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  );
}
