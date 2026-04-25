"use client";

import Link from "next/link";

import { Background } from "@/components/background";
import { TrialCta } from "@/components/blocks/trial-cta";
import { DashedLine } from "@/components/dashed-line";
import { SITE, TRANSFORMATIONS, TRANSFORMATIONS_SECTION } from "@/lib/constants";

export default function TransformationsPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl">
          <h1 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {TRANSFORMATIONS_SECTION.heading}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-relaxed">
            {TRANSFORMATIONS_SECTION.subheading}
          </p>
        </div>

        <div className="container mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-2">
          {TRANSFORMATIONS.map((transformation, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-2xl border border-white/[0.08] bg-surface"
            >
              <div className="h-36 flex-none bg-gradient-to-br from-primary/10 via-surface to-muted/10 flex items-center justify-center">
                <div className="px-6 text-center">
                  <div className="text-xs uppercase tracking-widest text-primary font-heading">Transformation</div>
                  <div className="mt-2 text-2xl font-heading font-bold leading-tight text-text-base">{transformation.name}</div>
                </div>
              </div>
              <div className="p-6 space-y-1 flex-1 flex flex-col justify-between">
                <div>
                  <p className="font-heading text-2xl font-bold leading-tight tracking-tight">
                    {transformation.result}
                  </p>
                </div>
                <div>
                  <p className="font-heading text-sm font-bold uppercase tracking-widest text-primary">
                    {transformation.name}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {transformation.duration}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="container max-w-5xl mt-12">
          <p className="text-muted-foreground text-sm">
            {TRANSFORMATIONS_SECTION.googleReviewsLine}{" "}
            <Link
              href={SITE.googleReviewsUrl || "#"}
              className="underline underline-offset-4 hover:text-foreground transition-colors"
            >
              Read on Google
            </Link>
          </p>
        </div>

        <DashedLine className="container max-w-5xl scale-x-115 mt-16" />
        <TrialCta />
      </div>
    </Background>
  );
}
