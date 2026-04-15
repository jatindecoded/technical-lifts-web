"use client";

import React from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";
import { TRIAL_CTA } from "@/lib/constants";

type CTAProps = {
  kind?: "primary" | "secondary";
  buttonVariant?: "default" | "outline";
  className?: string;
  icon?: React.ReactNode;
};

export function CTA({ kind = "primary", buttonVariant, className, icon }: CTAProps) {
  const isPrimary = kind === "primary";
  const label = isPrimary ? TRIAL_CTA.primaryCTA : TRIAL_CTA.secondaryCTA;
  const href = isPrimary ? TRIAL_CTA.primaryCtaHref : TRIAL_CTA.secondaryCtaHref;
  const variant = buttonVariant ?? (isPrimary ? "default" : "outline");

  return (
    <Link href={href} className={className}>
      <Button variant={variant} size="lg" className="w-full sm:w-fit">
        <span className="relative z-10 flex items-center gap-2">
          {label}
          {icon}
        </span>
      </Button>
    </Link>
  );
}
