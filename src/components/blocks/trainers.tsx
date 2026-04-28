"use client";

import React from "react";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { SectionHeader } from "../ui/section-header";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { TRAINERS, TRAINERS_SECTION } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export const Trainers = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={TRAINERS_SECTION.id} className="py-section">
      <div className="container">
        <SectionHeader
          badge="Our Coaches"
          title={TRAINERS_SECTION.heading}
          description={TRAINERS_SECTION.subline}
          className="mb-16"
        />

        <motion.div
          className="relative mt-12 grid gap-8 md:grid-cols-2 lg:mt-20 lg:grid-cols-3"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {TRAINERS.map((trainer, index) => (
            <motion.div
              key={index}
              variants={item}
              whileHover={reduceMotion ? {} : { y: -8 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Card className="bg-surface h-full overflow-hidden border border-white/[0.08] shadow-2xl">
                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative aspect-[4/5] w-full overflow-hidden">
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      fill
                      className="hover:-0 object-cover transition-all duration-700"
                    />
                  </div>
                  <div className="flex-1 space-y-4 p-8">
                    <div className="space-y-1">
                      <CardHeading as="div" className="text-primary text-2xl">
                        {trainer.name}
                      </CardHeading>
                      <div className="text-text-muted text-[10px] font-bold">
                        {trainer.certification}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 border-y border-white/[0.05] py-4">
                      <div className="space-y-1">
                        <div className="text-text-muted text-[10px] font-bold">
                          Experience
                        </div>
                        <div className="text-text-base text-sm font-bold">
                          {trainer.experience}
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="text-text-muted text-[10px] font-bold">
                          Impact
                        </div>
                        <div className="text-text-base truncate text-sm font-bold">
                          {trainer.results.split(" ")[1]} Clients
                        </div>
                      </div>
                    </div>

                    <div className="text-text-base space-y-2">
                      <div className="text-text-muted text-[10px] font-bold">
                        Specialization
                      </div>
                      <p className="text-sm leading-relaxed">
                        {trainer.speciality}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <div className="text-text-muted text-[10px] font-bold">
                        Approach
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed italic">
                        "{trainer.approach}"
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
