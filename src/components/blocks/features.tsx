"use client";

import React from "react";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { FEATURE_SECTIONS, FEATURES_TAGLINE, IMAGE_ASSETS, SITE, WHO_ITS_FOR } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Features = () => {
  return (
    <motion.section className="py-28 lg:py-32" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
      <div className="container">
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            {FEATURES_TAGLINE}
          </span>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl flex-col items-center justify-center gap-3 text-center lg:mt-24 lg:max-w-4xl">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {FEATURE_SECTIONS.whoItsForHeading}
          </h2>
          <p className="text-muted-foreground max-w-2xl leading-snug">
            {SITE.subheadline}
          </p>
        </div>

        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {WHO_ITS_FOR.map((sectionItem, i) => (
              <motion.div key={i} variants={item} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0!">
                  <div className="relative aspect-[2/1] overflow-hidden md:aspect-[1.28/1]">
                    <Image
                      src={
                        IMAGE_ASSETS.whoItsFor[i % IMAGE_ASSETS.whoItsFor.length]
                          .src
                      }
                      alt={
                        IMAGE_ASSETS.whoItsFor[i % IMAGE_ASSETS.whoItsFor.length]
                          .alt
                      }
                      fill
                      className="mt-2 rounded-l-2xl object-cover object-left-top"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="#trial"
                    className="group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                  >
                    <div className="space-y-2">
                      <CardHeading as="h3" className="max-w-60 text-2xl leading-tight">
                        {sectionItem.title}
                      </CardHeading>
                      <p className="text-foreground max-w-76 text-base leading-6">
                        {sectionItem.description}
                      </p>
                    </div>
                  </Link>
                </div>
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </motion.div>
            ))}
          </CardContent>
        </Card>
      </div>
    </motion.section>
  );
};
