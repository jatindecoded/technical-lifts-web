"use client";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PRICING_PLANS, PRICING_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Pricing = ({ className }: { className?: string }) => {
  return (
    <section id="pricing" className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-8xl">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {PRICING_SECTION.heading}
          </h2>
        </div>

        <div className="mt-8 grid items-start gap-5 text-start md:mt-12 md:grid-cols-4 lg:mt-20">
          {PRICING_PLANS.map((plan) => (
            <Card
              key={plan.name}
              className={`${plan.isPopular
                  ? "outline-primary origin-top outline-4"
                  : ""
                } h-full`}
            >
              <CardContent className="flex flex-col items-stretch gap-7 px-6 py-5 h-full">
                <div className="space-y-2">
                  <h3 className="text-foreground font-semibold">{plan.name}</h3>
                  <div className="space-y-1">
                    <div className="text-muted-foreground text-lg font-medium">
                      {plan.price}
                    </div>
                    <span className="text-muted-foreground text-sm">
                      {plan.duration}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 flex-1">
                  {plan.features.map((feature) => (
                    <div
                      key={feature}
                      className="text-muted-foreground flex items-center gap-1.5"
                    >
                      <Check className="size-5 shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className="w-fit"
                  variant={plan.isPopular ? "default" : "outline"}
                >
                  {PRICING_SECTION.ctaLabel}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          {PRICING_SECTION.footnote}
        </p>
      </div>
    </section>
  );
};
