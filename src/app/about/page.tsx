"use client";

import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { GymHighlights } from "@/components/blocks/gym-highlights";
import { TrialCta } from "@/components/blocks/trial-cta";
import { DashedLine } from "@/components/dashed-line";

export default function AboutPage() {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />
        <About />
        <div className="pt-20 lg:pt-28">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <GymHighlights />
        </div>
        <DashedLine className="container max-w-5xl scale-x-115 mt-12" />
        <TrialCta />
      </div>
    </Background>
  );
}
