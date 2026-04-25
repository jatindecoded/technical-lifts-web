"use client";

import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { DashedLine } from "../dashed-line";
import { SectionHeader } from "../ui/section-header";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { TRANSFORMATIONS, TRANSFORMATIONS_SECTION, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Testimonials = ({
  className,
  dashedLineClassName,
}: {
  className?: string;
  dashedLineClassName?: string;
}) => {
  return (
    <>
      <motion.section id="transformations" className={cn("overflow-hidden py-section bg-surface", className)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
        <div className="container">
          <SectionHeader 
            badge="Success Stories"
            title={TRANSFORMATIONS_SECTION.heading}
            description={TRANSFORMATIONS_SECTION.subheading}
            className="mb-12"
          />

          <div className="relative mt-12 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] lg:mt-20">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {TRANSFORMATIONS.map((transformation, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%] flex"
                  >
                    <motion.div variants={item} className="flex-1">
                      <div className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.08] bg-dark shadow-2xl transition-all hover:border-primary/20">
                        <div className="flex-none bg-linear-to-br from-primary/5 via-surface to-dark/5 p-10 text-center">
                          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }}>
                            <div className="text-[10px] font-bold tracking-[0.2em] text-primary ">Transformation</div>
                            <div className="mt-4 text-3xl font-extrabold tracking-tighter text-text-base font-heading">{transformation.name}</div>
                          </motion.div>
                          </div>
                          <div className="flex flex-1 flex-col justify-between gap-10 p-10">
                          <blockquote className="text-xl font-bold italic leading-tight text-text-base md:text-2xl font-heading">
                            "{transformation.result}"
                          </blockquote>
                          <div className="space-y-1">
                            <div className="text-xs font-bold tracking-widest text-primary font-heading ">
                              {transformation.name}
                            </div>
                            <div className="text-text-muted text-sm font-medium">
                              {transformation.duration}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-12 flex gap-4">
                <CarouselPrevious className="static size-14 translate-x-0 translate-y-0 border-white/[0.08] bg-dark hover:bg-dark/80 transition-all [&>svg]:size-6" />
                <CarouselNext className="static size-14 translate-x-0 translate-y-0 border-white/[0.08] bg-dark hover:bg-dark/80 transition-all [&>svg]:size-6" />
              </div>
            </Carousel>
          </div>

          <motion.p variants={item} className="mt-12">
            <Link
              href={SITE.googleReviewsUrl || "#"}
              className="text-xs font-bold tracking-widest text-text-muted underline underline-offset-8 transition-colors hover:text-primary"
            >
              {TRANSFORMATIONS_SECTION.googleReviewsLine}
            </Link>
          </motion.p>
        </div>
      </motion.section>
      <DashedLine
        orientation="horizontal"
        className={cn("opacity-20", dashedLineClassName)}
      />
    </>
  );
};
