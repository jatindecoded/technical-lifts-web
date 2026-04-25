"use client";

import Image from "next/image";

import { Background } from "@/components/background";
import { TrialCta } from "@/components/blocks/trial-cta";
import { DashedLine } from "@/components/dashed-line";
import { TRAINERS, TRAINERS_SECTION } from "@/lib/constants";

export default function TrainersPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <div className="container max-w-5xl">
          <h1 className="text-3xl font-heading font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {TRAINERS_SECTION.heading}
          </h1>
          <p className="text-muted-foreground mt-4 max-w-xl text-lg leading-relaxed">
            {TRAINERS_SECTION.subline}
          </p>
        </div>

        <div className="container mt-12 grid max-w-5xl gap-6 sm:grid-cols-2 md:grid-cols-3 lg:mt-16">
          {TRAINERS.map((trainer, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-white/[0.08] bg-surface"
            >
              <div className="relative aspect-[3/2] overflow-hidden">
                <Image
                  src={trainer.photo}
                  alt={trainer.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5 space-y-1">
                <div className="font-heading text-base font-bold uppercase tracking-wide text-primary">
                  {trainer.name}
                </div>
                <div className="text-muted-foreground text-sm">
                  {trainer.certification}
                </div>
                <div className="text-muted-foreground text-sm">
                  {trainer.speciality}
                </div>
              </div>
            </div>
          ))}
        </div>

        <DashedLine className="container max-w-5xl scale-x-115 mt-16" />
        <TrialCta />
      </div>
    </Background>
  );
}
