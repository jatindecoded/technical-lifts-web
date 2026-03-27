import Link from "next/link";

import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { TRIAL_CTA } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface TrialCtaProps {
  className?: string;
}

export function TrialCta({ className }: TrialCtaProps) {
  return (
    <section
      id={TRIAL_CTA.id}
      className={cn(
        "py-24 lg:py-32",
        className,
      )}
    >
      <div className="container max-w-3xl text-center">
        <span className="inline-block rounded-full border border-primary/40 bg-primary/10 px-4 py-1 font-heading text-xs font-semibold uppercase tracking-widest text-primary">
          {TRIAL_CTA.badge}
        </span>

        <h2 className="mt-6 text-4xl tracking-tight md:text-5xl lg:text-6xl">
          {TRIAL_CTA.heading}
          <br />
          <span className="text-primary">{TRIAL_CTA.headingAccent}</span>
        </h2>

        <p className="text-muted-foreground mx-auto mt-6 max-w-lg text-lg leading-relaxed">
          {TRIAL_CTA.body}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild>
            <Link href={TRIAL_CTA.primaryCtaHref}>
              {TRIAL_CTA.primaryCTA}
              <ArrowRight className="ml-1 size-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href={TRIAL_CTA.secondaryCtaHref}>{TRIAL_CTA.secondaryCTA}</Link>
          </Button>
        </div>

        <p className="text-muted-foreground mt-4 text-sm">{TRIAL_CTA.note}</p>
      </div>
    </section>
  );
}
