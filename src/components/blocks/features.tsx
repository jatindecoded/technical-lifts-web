"use client";


import Image from "next/image";

import { motion } from "framer-motion";

import { DashedLine } from "../dashed-line";
import { SectionHeader } from "../ui/section-header";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { FEATURE_SECTIONS, IMAGE_ASSETS, SITE, WHO_ITS_FOR } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Features = () => {
  return (
    <motion.section className="py-section bg-dark" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
      <div className="container">
        <SectionHeader 
          badge="Types of Training"
          title={FEATURE_SECTIONS.whoItsForHeading}
          description={SITE.subheadline}
          className="mb-16"
        />

        <Card className="mt-8 rounded-3xl bg-surface border-white/[0.08] md:mt-12 lg:mt-20 overflow-hidden shadow-2xl">
          <CardContent className="flex p-0 max-md:flex-col">
            {WHO_ITS_FOR.map((sectionItem, i) => (
              <motion.div key={i} variants={item} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-8 lg:p-12">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-white/[0.05] shadow-inner">
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
                      className="object-cover transition-transform duration-1000 hover:scale-105"
                    />
                  </div>

                  <div className="mt-10 space-y-6">
                    <CardHeading as="h4" className="text-3xl text-text-base tracking-tighter font-bold">
                      {sectionItem.title}?
                    </CardHeading>
                    <p className="font-medium text-primary">
                      {sectionItem.description}
                    </p>
                  </div>
                </div>
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" className="opacity-20" />
                  </div>
                )}
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" className="opacity-20" />
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
