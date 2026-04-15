"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import {
  ArrowRight,
  type LucideIcon,
  Target,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

import { Logos } from "@/components/blocks/logos";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { CTA } from "@/components/ui/cta";
import { HERO_FEATURES, IMAGE_ASSETS, SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { Users, Zap, Target, TrendingUp };

// Animation variants
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12, scale: 0.96 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
};

export const Hero = () => {
  return (
    <section className="relative pb-32 pt-40 lg:pb-48 lg:pt-56">
      <div className="container flex flex-col items-center justify-center gap-10 lg:flex-row">
        {/* Left — Main content */}
        <motion.div
          className="flex flex-col items-center overflow-hidden text-center lg:items-start lg:text-left"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={container}
        >
          <motion.h1
            variants={item}
            className="max-w-160 text-4xl tracking-tight text-foreground md:text-5xl lg:text-6xl xl:text-7xl"
          >
            {/* word/line reveal using overflow-hidden + translateY animation */}
            <span className="inline-block overflow-hidden align-middle">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="block"
              >
                {SITE.tagline}
              </motion.span>
            </span>
            <br />
            <span className="inline-block overflow-hidden align-middle text-primary">
              <motion.span
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.65, delay: 0.06, ease: "easeOut" }}
                className="block"
              >
                {SITE.taglineAccent}
              </motion.span>
            </span>
          </motion.h1>

          <motion.p variants={item} className="text-muted-foreground mt-5 text-sm leading-tight md:text-lg lg:max-w-100">
            <motion.span initial={{ y: 6, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, ease: 'easeOut' }}>
              {SITE.subheadline}
            </motion.span>
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col flex-wrap items-center gap-4 lg:flex-nowrap lg:flex-row">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <CTA />
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                size="lg"
                variant="outline"
                className="from-background gap-2 bg-linear-to-r to-transparent shadow-md"
                asChild
              >
                <a href="#pricing" className="max-w-56 truncate text-start md:max-w-none">
                  {SITE.secondaryCTA}
                  <ArrowRight className="stroke-3 shrink-0" />
                </a>
              </Button>
            </motion.div>
          </motion.div>
          <motion.p variants={item} className="text-text-muted mt-3 text-center text-xs lg:text-left">
            {SITE.trialSubtext}
          </motion.p>
        </motion.div>

        {/* Right — Feature list */}
        <div className="relative flex flex-col justify-center space-y-5 pt-10 lg:pl-10 lg:pt-0">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {HERO_FEATURES.map((feature) => {
              const Icon = iconMap[feature.iconName];
              return (
                <motion.div key={feature.title} variants={item} whileHover={{ scale: 1.03, rotate: -1 }} transition={{ type: 'spring', stiffness: 300 }} className="flex gap-2.5 lg:gap-5">
                  <Icon className="mt-1 size-4 shrink-0 text-primary lg:size-5" />
                  <div>
                    <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-foreground lg:text-base">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground hidden max-w-76 text-sm md:block">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hero image */}
      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <Image
          src={IMAGE_ASSETS.hero.src}
          alt={IMAGE_ASSETS.hero.alt}
          fill
          className="rounded-2xl object-contain object-left-top opacity-10"
        />
        <div className="relative w-full">
          <Image
            src={IMAGE_ASSETS.hero.src}
            alt={IMAGE_ASSETS.hero.alt}
            width={1500}
            height={700}
            className="aspect-[2/1] w-full rounded-xl object-cover shadow-lg"
            priority
          />
        </div>
      </div>

      <motion.div className="my-16" initial="hidden" whileInView="show" viewport={{ once: true }} variants={item}>
        <Logos />
      </motion.div>
    </section>
  );
};
