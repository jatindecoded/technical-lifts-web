"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

import { cn } from "@/lib/utils";

interface SplitRevealProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function SplitReveal({
  text,
  className = "",
  delay = 0,
  duration = 0.6,
}: SplitRevealProps) {
  const reduceMotion = useReducedMotion();
  const words = text.split(" ");

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: delay / 1000,
      },
    },
  };

  const child: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: duration,
        ease: [0.215, 0.61, 0.355, 1], // easeOutCubic
      },
    },
  };

  return (
    <motion.span
      initial={reduceMotion ? false : "hidden"}
      whileInView={reduceMotion ? undefined : "show"}
      viewport={{ once: true, amount: 0.12 }}
      variants={container}
      className={cn("inline-flex flex-wrap", className)}
    >
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.2em] last:mr-0">
          <motion.span
            variants={child}
            className="inline-block"
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
