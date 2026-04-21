"use client";

import React from "react";

import Image from "next/image";

import { motion, useReducedMotion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { TRAINERS, TRAINERS_SECTION } from "@/lib/constants";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const Trainers = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section id={TRAINERS_SECTION.id} className="py-24 lg:py-32">
      <div className="container">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {TRAINERS_SECTION.heading}
          </h2>
          <p className="text-muted-foreground max-w-md leading-snug">
            {TRAINERS_SECTION.subline}
          </p>
        </div>

        <motion.div
          className="relative mt-8 grid gap-4 md:mt-12 md:grid-cols-3 lg:mt-16"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          variants={container}
        >
          {TRAINERS.map((trainer, index) => (
            <motion.div key={index} variants={item} whileHover={reduceMotion ? {} : { scale: 1.03 }} whileTap={reduceMotion ? {} : { scale: 0.995 }} transition={{ type: 'spring', stiffness: 300 }}>
              <Card className="bg-muted h-full overflow-hidden border-none">                <CardContent className="flex h-full flex-col p-0">
                  <div className="relative aspect-[3/2] w-full overflow-hidden">
                    <Image
                      src={trainer.photo}
                      alt={trainer.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="space-y-1 p-5">
                    <CardHeading as="div" className="text-base text-primary">
                      {trainer.name}
                    </CardHeading>
                    <div className="text-muted-foreground text-sm">
                      {trainer.certification}
                    </div>
                    <div className="text-muted-foreground text-sm">
                      {trainer.speciality}
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
