"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import { SectionHeader } from "../ui/section-header";

import { FOUNDER } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Founder = () => {
  return (
    <section className="py-section bg-surface overflow-hidden">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/[0.08] shadow-2xl">
              <Image
                src={FOUNDER.photo}
                alt={FOUNDER.name}
                fill
                className="object-cover"
              />
              <div className="from-dark/60 absolute inset-0 bg-linear-to-t via-transparent to-transparent" />
            </div>

            {/* Experience Badge */}
            <div className="bg-primary text-dark absolute -right-8 -bottom-8 z-20 hidden max-w-48 rounded-2xl p-8 shadow-2xl md:block">
              <div className="font-heading text-4xl leading-none font-extrabold">
                10+
              </div>
              <div className="mt-2 text-[10px] leading-tight font-bold">
                Years of Elite Experience
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-10">
            <SectionHeader
              badge="The Founder"
              title={FOUNDER.name}
              description={FOUNDER.title}
              className="mb-0"
            />

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-text-base max-w-xl text-lg leading-relaxed font-medium"
            >
              {FOUNDER.bio}
            </motion.p>

            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="grid gap-6 sm:grid-cols-2"
            >
              {FOUNDER.highlights.map((highlight) => (
                <motion.div
                  key={highlight}
                  variants={item}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-primary size-5 shrink-0" />
                  <span className="text-text-muted text-xs font-bold">
                    {highlight}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
