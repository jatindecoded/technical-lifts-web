"use client";

import Link from "next/link";

import { Background } from "@/components/background";
import { TrialCta } from "@/components/blocks/trial-cta";
import { DashedLine } from "@/components/dashed-line";
import {
  SITE,
  TRANSFORMATIONS,
  TRANSFORMATIONS_SECTION,
} from "@/lib/constants";

export default function TransformationsPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl">
          <h1 className="font-heading text-3xl font-bold sm:text-4xl md:text-5xl lg:text-6xl">
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
              className="group bg-surface overflow-hidden rounded-2xl border border-white/[0.08]"
            >
              <div className="from-primary/10 via-surface to-muted/10 flex h-36 flex-none items-center justify-center bg-gradient-to-br">
                <div className="px-6 text-center">
                  <div className="text-primary font-heading text-xs uppercase">
                    Transformation
                  </div>
                  <div className="font-heading text-text-base mt-2 text-2xl leading-tight font-bold">
                    {transformation.name}
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between space-y-1 p-6">
                <div>
                  <p className="font-heading text-2xl leading-tight font-bold">
                    {transformation.result}
                  </p>
                </div>
                <div>
                  <p className="font-heading text-primary text-sm font-bold uppercase">
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

        <div className="container mt-12 max-w-5xl">
          <p className="text-muted-foreground text-sm">
            {TRANSFORMATIONS_SECTION.googleReviewsLine}{" "}
            <Link
              href={SITE.googleReviewsUrl || "#"}
              className="hover:text-foreground underline underline-offset-4 transition-colors"
            >
              Read on Google
            </Link>
          </p>
        </div>

        <DashedLine className="container mt-16 max-w-5xl scale-x-115" />
        <TrialCta />
      </div>
    </Background>
  );
}
