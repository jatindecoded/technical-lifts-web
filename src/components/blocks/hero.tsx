"use client";

import Image from "next/image";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type Variants,
} from "framer-motion";
import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";

import { Logos } from "@/components/blocks/logos";
import { DashedLine } from "@/components/dashed-line";
import { CTA } from "@/components/ui/cta";
import { HERO_FEATURES, IMAGE_ASSETS, SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { Users, Zap, Target, TrendingUp };

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.215, 0.61, 0.355, 1] },
  },
};

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -30]);

  return (
    <section className="relative pt-16 pb-32 lg:pt-24">
      <motion.div className="max-w-container mx-auto flex flex-col items-center justify-center gap-16 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-24"
        // initial={reduceMotion ? undefined : { scale: 4 }}
        // whileInView={reduceMotion ? undefined : { scale: 1 }}
        // transition={{ duration: 0.5, ease: "easeOut" }}
        // viewport={{ once: true }}
      >
        {/* Left — Main content */}
        <motion.div
          className="flex flex-col items-center text-center lg:flex-1 lg:items-start lg:text-left"
          initial={reduceMotion ? "show" : "hidden"}
          whileInView={reduceMotion ? undefined : "show"}
          viewport={{ once: true, amount: 0.82 }}
          variants={container}
        >
          <motion.h1 variants={item} className="">
            <span className="sr-only">
              {SITE.tagline} {SITE.taglineAccent}
            </span>
            <span className="">{SITE.tagline} </span>
            <span className="text-primary">{SITE.taglineAccent}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-text-muted mt-8 text-lg font-medium lg:max-w-120"
          >
            {SITE.subheadline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 grid w-full max-w-md grid-cols-1 gap-4 sm:flex sm:flex-row sm:items-center lg:max-w-none"
          >
            <CTA id="trial" className="sm:w-fit" />
            <CTA id="seePricing" icon={<ArrowRight className="size-5" />} />
          </motion.div>

          <motion.div variants={item} className="mt-8 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-dark bg-muted ring-primary/10 size-8 overflow-hidden rounded-full border-2 ring-2"
                >
                  <Image
                    src={`/gym/trainers/trainer-${i}.webp`}
                    alt="User"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs font-bold tracking-widest">
              {SITE.trialSubtext}
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Feature list */}
        <div className="relative flex flex-col justify-center space-y-6 pt-10 md:pt-0 lg:w-lg">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 opacity-30 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 opacity-30 lg:hidden"
          />
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:pl-10">
            {HERO_FEATURES.map((feature) => {
              const Icon = iconMap[feature.iconName];
              return (
                <motion.div
                  key={feature.title}
                  variants={item}
                  // whileHover={reduceMotion ? {} : { y: -5, scale: 1.02 }}
                  // transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className=" flex flex-col items-start rounded-2xl p-4"
                >
                  <h4 className="font-body mb-2 text-sm font-bold tracking-widest">
                    <Icon className="text-primary m-2 inline size-4" />
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </motion.div>

      {/* Hero image */}
      <div className="mt-24 px-6 lg:container">
        <motion.div
          style={{ y }}
          initial={reduceMotion ? { opacity: 0, y: 40 } : { opacity: 0, y: 40, scale: 1.08 }}
          whileInView={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative w-full overflow-hidden rounded-3xl border border-white/[0.08] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] will-change-transform"
        >
          <Image
            src={IMAGE_ASSETS.hero.src}
            alt={IMAGE_ASSETS.hero.alt}
            width={1500}
            height={700}
            className="aspect-[21/9] w-full object-cover"
            priority
          />
          <div className="from-dark pointer-events-none absolute inset-0 bg-linear-to-t via-transparent to-transparent opacity-60" />
        </motion.div>
      </div>

      <motion.div
        className="mt-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={item}
      >
        <Logos />
      </motion.div>
    </section>
  );
};
