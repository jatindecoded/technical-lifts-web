"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  SITE,
  TRANSFORMATIONS,
  TRANSFORMATIONS_SECTION,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

// motion tokens
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
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
      <motion.section id="transformations" className={cn("overflow-hidden py-24 lg:py-32", className)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
        <div className="container">
          <div className="space-y-3">
            <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl text-center">
              {TRANSFORMATIONS_SECTION.heading}
            </h2>
            <p className="text-muted-foreground text-center text-sm md:text-base">
              {TRANSFORMATIONS_SECTION.subheading}
            </p>
          </div>

          <div className="relative mt-8 -mr-[max(3rem,calc((100vw-80rem)/2+3rem))] md:mt-12 lg:mt-16">
            <Carousel
              opts={{ align: "start", loop: true }}
              className="w-full"
            >
              <CarouselContent>
                {TRANSFORMATIONS.map((transformation, index) => (
                  <CarouselItem
                    key={index}
                    className="xl:basis-1/3.5 grow basis-4/5 sm:basis-3/5 md:basis-2/5 lg:basis-[28%] 2xl:basis-[24%]"
                  >
                    <motion.div variants={item}>
                      <Card className="bg-muted h-full overflow-hidden border-none">
                        <CardContent className="flex h-full flex-col p-0">
                          <div className="relative h-[288px] lg:h-[328px]">
                            <motion.div whileHover={{ y: -8 }} transition={{ type: 'spring', stiffness: 260, damping: 18 }} className="h-full">
                              <Image
                                src={transformation.photo}
                                alt={transformation.name}
                                fill
                                className="object-cover object-top"
                              />
                            </motion.div>
                          </div>
                          <div className="flex flex-1 flex-col justify-between gap-6 p-6">
                            <blockquote className="font-heading text-xl font-bold leading-tight tracking-tight md:text-2xl">
                              {transformation.result}
                            </blockquote>
                            <div className="space-y-0.5">
                              <div className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
                                {transformation.name}
                              </div>
                              <div className="text-muted-foreground text-sm">
                                {transformation.duration}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="mt-8 flex gap-3">
                <CarouselPrevious className="bg-muted hover:bg-muted/80 static size-14 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
                <CarouselNext className="bg-muted hover:bg-muted/80 static size-14 translate-x-0 translate-y-0 transition-colors [&>svg]:size-6 lg:[&>svg]:size-8" />
              </div>
            </Carousel>
          </div>

          <p className="mt-8">
            <Link
              href={SITE.googleReviewsUrl || "#"}
              className="font-heading text-sm uppercase tracking-wide text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
            >
              {TRANSFORMATIONS_SECTION.googleReviewsLine}
            </Link>
          </p>
        </div>
      </motion.section>
      <DashedLine
        orientation="horizontal"
        className={cn("mx-auto max-w-[80%]", dashedLineClassName)}
      />
    </>
  );
};
