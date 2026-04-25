"use client";

import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { TRIAL_CTA, CTA_REGISTRY } from "@/lib/constants";

type CTAProps = {
  id?: string; // id from CTA_REGISTRY, e.g., 'trial' or 'personalTraining'
  kind?: "primary" | "secondary"; // legacy fallback
  buttonVariant?: "default" | "outline" | "ghost";
  className?: string;
  icon?: React.ReactNode;
};

export function CTA({
  id,
  kind = "primary",
  buttonVariant,
  className,
  icon,
}: CTAProps) {
  const isPrimary = kind === "primary";
  // Prefer registry id if provided
  const registry = id ? CTA_REGISTRY[id] : undefined;
  const label = registry
    ? registry.label
    : isPrimary
      ? TRIAL_CTA.primaryCTA
      : TRIAL_CTA.secondaryCTA;
  const href = registry
    ? registry.href
    : isPrimary
      ? TRIAL_CTA.primaryCtaHref
      : TRIAL_CTA.secondaryCtaHref;
  const variant =
    buttonVariant ?? registry?.variant ?? (isPrimary ? "default" : "outline");

  return (
    <motion.div
      whileHover={variant === "default" ? { scale: 1.03 } : {}}
      whileTap={{ scale: 0.98 }}
    >
      <Link href={href}>
        <Button
          asChild
          variant={variant}
          size={"lg"}
          className={`${className} w-full sm:w-fit`}
        >
          <span className="z-10 flex items-center gap-2">
            {label}
            {icon}
          </span>
        </Button>
      </Link>
    </motion.div>
  );
}
