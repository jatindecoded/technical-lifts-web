"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { TRANSFORMATIONS, TRANSFORMATIONS_SECTION } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const card = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export default function MemberStories() {
  return (
    <section className="py-section max-w-container mx-auto px-6">
      <header className="mb-8">
        <h1 className="font-heading text-text-base text-4xl leading-none uppercase">
          {TRANSFORMATIONS_SECTION.heading}
        </h1>
        <p className="text-text-muted mt-3">
          {TRANSFORMATIONS_SECTION.subheading}
        </p>
      </header>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.12 }}
        variants={container}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      >
        {TRANSFORMATIONS.map((t) => (
          <motion.article
            key={t.name}
            variants={card}
            className="bg-surface rounded-xl border border-white/[0.06] p-6"
          >
            <div className="bg-background mb-4 h-56 w-full overflow-hidden rounded-lg">
              {/* Photo placeholder — TODO: Replace with actual member photo when available */}
              <Image
                src={t.photo}
                alt={t.name}
                width={800}
                height={450}
                className="h-full w-full object-cover"
              />
            </div>
            <h2 className="font-heading text-text-base uppercase">{t.name}</h2>
            <p className="text-text-muted mt-1">
              {t.result} • {t.duration}
            </p>
            <div className="text-text-base mt-4">
              <p>
                {/* Placeholder longform content — expand to full member story when assets and consent are available. */}
                This space will contain a detailed account of the member's
                starting point, program, nutrition changes, and measurable
                outcomes. TODO: replace with permissioned story and photos.
              </p>
            </div>
            <div className="mt-4">
              <Link href={`/transformations`} className="underline">
                Read more
              </Link>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}
