"use client";

import Image from "next/image";
import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { CTA } from "@/components/ui/cta";
import { BLOG_POSTS } from "@/lib/constants";
import { cn } from "@/lib/utils";

type PostBase = (typeof BLOG_POSTS)[0];
type Post = PostBase & {
  heroImage?: string;
  heroAlt?: string;
  pullQuote?: string;
};

export function BlogArticle({ post }: { post: Post }) {
  const prefersReduced = useReducedMotion();

  const wordCount = post.content.join(" ").split(/\s+/).length;
  const readMins = Math.max(2, Math.round(wordCount / 200));

  const related = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <article className="py-section max-w-container mx-auto px-6">
      <div className="max-w-3xl">
        <motion.header
          initial={prefersReduced ? false : { opacity: 0, y: 10 }}
          animate={prefersReduced ? false : { opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="text-primary mb-6 flex items-center gap-3 text-[10px] font-bold uppercase">
            <span>{readMins} Min Read</span>
            <span className="h-1 w-1 rounded-full bg-white/20" />
            <span>Technical Lifts Blog</span>
          </div>
          <h1 className="uppercase">{post.title}</h1>
          <p className="text-text-muted mt-6 text-xl leading-relaxed font-medium">
            {post.excerpt}
          </p>
        </motion.header>

        {post.heroImage && (
          <figure className="mb-12">
            <div className="relative aspect-[21/9] overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl">
              <Image
                src={post.heroImage}
                alt={post.heroAlt || post.title}
                fill
                className="hover:-0 object-cover transition-all duration-1000"
              />
            </div>
          </figure>
        )}

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="text-text-base space-y-8 lg:col-span-8">
            <div className="prose prose-invert max-w-none">
              {post.content.map((p, i) => (
                <p
                  key={i}
                  className={cn(
                    "text-lg leading-relaxed",
                    i === 0 && "text-text-base text-xl font-medium",
                  )}
                >
                  {p}
                </p>
              ))}
            </div>

            {post.pullQuote && (
              <blockquote className="border-primary font-heading text-text-base my-12 border-l-4 pl-8 text-2xl font-bold italic">
                "{post.pullQuote}"
              </blockquote>
            )}

            <hr className="border-white/10" />

            <div className="pt-4">
              <h3 className="text-text-muted mb-6 text-xs font-bold uppercase">
                Related Articles
              </h3>
              <div className="grid gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/blog/${r.slug}`}
                    className="group bg-surface hover:border-primary/20 flex items-center justify-between rounded-xl border border-white/[0.06] p-6 transition-all"
                  >
                    <span className="font-heading group-hover:text-primary font-bold uppercase transition-colors">
                      {r.title}
                    </span>
                    <ArrowRight className="text-primary size-4 opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-8 lg:col-span-4">
            <div className="sticky top-24 space-y-6">
              <div className="bg-surface rounded-2xl border border-white/[0.08] p-8 shadow-2xl">
                <h3 className="text-primary mb-4 text-xs font-bold uppercase">
                  Get Started
                </h3>
                <p className="text-text-muted mb-6 text-sm leading-relaxed">
                  Ready to apply these principles? Book a free session and
                  let&apos;s build your plan.
                </p>
                <CTA id="trial" className="w-full" />
              </div>

              <div className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8">
                <h4 className="text-text-muted mb-4 text-xs font-bold uppercase">
                  Navigation
                </h4>
                <ul className="space-y-4 text-sm font-bold">
                  <li>
                    <Link
                      href="/blog"
                      className="text-text-muted hover:text-primary flex items-center gap-2 transition-colors"
                    >
                      <ArrowRight className="size-3" /> All Articles
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/transformations"
                      className="text-text-muted hover:text-primary flex items-center gap-2 transition-colors"
                    >
                      <ArrowRight className="size-3" /> Transformations
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
