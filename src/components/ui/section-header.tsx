"use client";

import React from "react";

import { motion } from "framer-motion";

import { SplitReveal } from "./split-reveal";

import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  badge: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  level?: "h1" | "h2" | "h3";
}

export const SectionHeader = ({
  badge,
  title,
  description,
  align = "left",
  className,
  level = "h2",
}: SectionHeaderProps) => {
  const Tag = level as React.ElementType;

  return (
    <div
      className={cn(
        "flex flex-col gap-6",
        align === "center"
          ? "items-center text-center"
          : "items-start text-left",
        className,
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-primary text-[10px] font-bold uppercase"
      >
        {badge}
      </motion.div>
      <Tag className="max-w-4xl">
        <SplitReveal text={title} />
      </Tag>
      {description && (
        <p
          className={cn(
            "text-text-muted text-lg leading-relaxed font-medium",
            align === "center" ? "max-w-xl" : "max-w-2xl",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
