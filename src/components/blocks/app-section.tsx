"use client";

import Image from "next/image";

import { Check, Smartphone } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeader } from "../ui/section-header";

import { APP_SECTION } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const AppSection = () => {
  return (
    <section className="py-section bg-dark overflow-hidden">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          {/* Content */}
          <motion.div
            className="flex flex-col gap-8"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={container}
          >
            <SectionHeader
              badge={APP_SECTION.badge}
              title={`${APP_SECTION.heading} ${APP_SECTION.headingAccent}`}
              description={APP_SECTION.subheading}
              className="mb-0"
            />

            <motion.ul variants={container} className="space-y-3">
              {APP_SECTION.features.map((feature) => (
                <motion.li
                  key={feature}
                  variants={item}
                  className="flex items-center gap-3"
                >
                  <Check className="text-primary size-4 shrink-0" />
                  <span className="text-text-muted text-sm font-medium">
                    {feature}
                  </span>
                </motion.li>
              ))}
            </motion.ul>

            <motion.div variants={item} className="flex flex-wrap gap-4">
              <a
                href={APP_SECTION.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary text-dark font-heading flex items-center gap-2.5 rounded-full px-6 py-3 text-sm font-bold uppercase transition-opacity hover:opacity-90"
              >
                <Smartphone className="size-4" />
                Get on Android
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="text-text-muted text-xs italic opacity-60"
            >
              {APP_SECTION.footnote}
            </motion.p>
          </motion.div>

          {/* Phone mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow */}
              <div className="bg-primary/10 pointer-events-none absolute inset-0 -m-8 rounded-full blur-[60px]" />
              <div className="bg-surface relative overflow-hidden rounded-[2.5rem] border border-white/[0.08] p-4 shadow-2xl">
                <Image
                  src="/technical_lifts_logo.jpg"
                  alt="Technical Lifts FitWay App"
                  width={280}
                  height={560}
                  className="rounded-[2rem] object-cover"
                />
                {/* App badge overlay */}
                <div className="bg-dark/80 absolute right-6 bottom-6 flex items-center gap-2 rounded-full px-4 py-2 backdrop-blur-sm">
                  <div className="bg-primary size-2 rounded-full" />
                  <span className="text-text-base text-[10px] font-bold uppercase tracking-widest">
                    Technical Lifts · Official App
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
