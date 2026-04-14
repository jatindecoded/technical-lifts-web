"use client";

import React from "react";

import Link from "next/link";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { PRICING_PLANS, PRICING_SECTION, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section id="pricing" className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {PRICING_SECTION.heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md leading-snug">
            {PRICING_SECTION.subheading}
          </p>
        </div>

        <motion.div className="mt-8 grid items-start gap-4 text-start md:mt-12 md:grid-cols-4 lg:mt-16" initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.12 }} variants={container}>
          {PRICING_PLANS.map((plan) => (
            <motion.div key={plan.name} variants={item}>
              <Card
                className={cn(
                  "relative h-full transition-all",
                  plan.isPopular &&
                    "border-primary/60 shadow-[0_0_0_1px_var(--color-primary)]",
                )}
              >
              {plan.isPopular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="rounded-full bg-primary px-3 py-0.5 font-heading text-xs font-bold uppercase tracking-widest text-dark">
                    Most Popular
                  </span>
                </div>
              )}
              <CardContent className="flex h-full flex-col gap-6 px-6 py-5">
                <div className="space-y-1">
                  <CardHeading as="h3" className="text-lg uppercase tracking-tight">
                    {plan.name}
                  </CardHeading>
                  <div className={cn("font-heading text-3xl font-bold tracking-tight", plan.isPopular && "text-primary")}>
                    {plan.price}
                  </div>
                  <div className="text-muted-foreground text-sm">
                    {plan.duration} · {plan.priceNote}
                  </div>
                </div>

                <div className="flex-1 space-y-2.5">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-2"
                    >
                      <Check className="text-primary size-4 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-full"
                  variant={plan.isPopular ? "default" : "outline"}
                  asChild
                >
                  <Link href={`/contact?inquiry=membership`}>
                    {PRICING_SECTION.ctaLabel}
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
        </motion.div>

        <p className="text-muted-foreground mt-6 text-sm">
          {PRICING_SECTION.footnote}{" "}
          <Link
            href={`tel:${SITE.phone}`}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {SITE.phone}
          </Link>
        </p>
      </div>
    </section>
  );
};
