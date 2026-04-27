"use client";

import React from "react";

import { motion } from "framer-motion";

import { SectionHeader } from "../ui/section-header";

import { CTA } from "@/components/ui/cta";
import { TRIAL_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

interface TrialCtaProps {
  className?: string;
}

export function TrialCta({ className }: TrialCtaProps) {
  return (
    <motion.section
      id={TRIAL_CTA.id}
      className={cn("py-section bg-surface", className)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      variants={container}
    >
      <div className="container max-w-4xl text-center">
        <SectionHeader
          badge={TRIAL_CTA.badge}
          title={TRIAL_CTA.heading + " " + TRIAL_CTA.headingAccent}
          description={TRIAL_CTA.body}
          align="center"
          className="mb-12"
        />

        <motion.div
          className="mt-12 flex flex-wrap items-center justify-center gap-6"
          variants={item}
        >
          <CTA id="trial" />
          <CTA id="trialSecondary" />
        </motion.div>

        <motion.p
          variants={item}
          className="text-text-muted mt-8 text-sm italic opacity-60"
        >
          {TRIAL_CTA.note}
        </motion.p>
      </div>
    </motion.section>
  );
}
