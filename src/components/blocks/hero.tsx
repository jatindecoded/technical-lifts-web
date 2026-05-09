"use client";

import React from "react";

import Image from "next/image";

import {
  ArrowRight,
  Target,
  TrendingUp,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type Variants,
} from "motion/react";

import { Logos } from "@/components/blocks/logos";
import { CTA } from "@/components/ui/cta";
import { ScrambleText } from "@/components/ui/scramble-text";
import { HERO_FEATURES, IMAGE_ASSETS, SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { Users, Zap, Target, TrendingUp };

const item: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.215, 0.61, 0.355, 1] },
  },
};

const stagger: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), {
    stiffness: 300,
    damping: 30,
  });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - r.left) / r.width - 0.5);
    y.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export const Hero = () => {
  const reduceMotion = useReducedMotion();
  const taglineWords = SITE.tagline.split(" ");
  const accentWords = SITE.taglineAccent.split(" ");
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const show = () => { video.style.opacity = "1"; };
    // loadeddata = first frame decoded (fast); canplay = fallback
    video.addEventListener("loadeddata", show);
    video.addEventListener("canplay", show);
    return () => {
      video.removeEventListener("loadeddata", show);
      video.removeEventListener("canplay", show);
    };
  }, []);

  return (
    <section className="relative -mt-30 flex min-h-screen flex-col overflow-hidden rounded-3xl">
      {/* Full-bleed video background — poster shows until video buffers, then fades in */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: 0 }}
          poster={IMAGE_ASSETS.hero.src}
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        {/* Poster as persistent bg so there's never a black flash */}
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGE_ASSETS.hero.src})` }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,10,0.72)_0%,rgba(10,10,10,0.30)_40%,rgba(10,10,10,0.88)_100%)]" />
      </div>

      {/* Centred headline block */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-12 text-center md:pt-32 md:pb-20">
        <motion.div
          className="flex flex-col items-center gap-5 md:gap-8"
          initial="hidden"
          animate={reduceMotion ? "show" : undefined}
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          variants={stagger}
        >
          {/* Eyebrow badge — hidden on mobile to avoid redundancy with headline */}
          <motion.span
            variants={item}
            className="bg-primary/10 text-primary border-primary/20 hidden sm:inline-flex items-center rounded-full border px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest backdrop-blur-sm"
          >
            {SITE.motto}
          </motion.span>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="max-w-4xl leading-none"
          >
            <span className="flex flex-wrap justify-center gap-x-2">
              {taglineWords.map((word, i) => (
                <span key={i} className="inline-block">{word}</span>
              ))}
              {accentWords.map((word, i) => (
                <span key={`a${i}`} className="text-primary inline-block">
                  <ScrambleText text={word} />
                </span>
              ))}
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-text-muted max-w-sm text-base font-medium leading-relaxed md:max-w-xl md:text-lg"
          >
            {SITE.subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={item}
            className="flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row sm:gap-4"
          >
            <CTA id="trial" />
            <CTA id="seePricing" icon={<ArrowRight className="size-5" />} />
          </motion.div>

          {/* Social proof */}
          <motion.div variants={item} className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="border-dark bg-muted ring-primary/10 size-8 overflow-hidden rounded-full border-2 ring-2"
                >
                  <Image
                    src={`/gym/trainers/trainer-${i}.webp`}
                    alt="Member"
                    width={32}
                    height={32}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-text-muted text-xs font-bold">{SITE.trialSubtext}</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Feature cards pinned at bottom of video section */}
      <div className="relative z-10 px-4 pb-0 md:px-6">
        <motion.div
          className="mx-auto grid max-w-5xl grid-cols-2 gap-px overflow-hidden rounded-t-2xl border border-b-0 border-white/[0.08] bg-white/[0.04] lg:grid-cols-4"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
        >
          {HERO_FEATURES.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <motion.div key={feature.title} variants={item}>
                <TiltCard className="bg-dark/80 flex h-full cursor-default flex-col items-center gap-1.5 p-4 text-center backdrop-blur-sm sm:items-start sm:text-left md:gap-2 md:p-6">
                  <Icon className="text-primary size-4 shrink-0 md:size-5" />
                  <h4 className="text-text-base text-xs font-bold md:text-sm">{feature.title}</h4>
                  <p className="text-text-muted hidden text-xs font-medium leading-relaxed sm:block">
                    {feature.description}
                  </p>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Trust marquee */}
      <div className="bg-dark relative z-10">
        <Logos />
      </div>
    </section>
  );
};
