import Image from "next/image";

import { ArrowRight, type LucideIcon, Target, TrendingUp, Users, Zap } from "lucide-react";

import { Logos } from "@/components/blocks/logos";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { HERO_FEATURES, IMAGE_ASSETS, SITE } from "@/lib/constants";

const iconMap: Record<string, LucideIcon> = { Users, Zap, Target, TrendingUp };

export const Hero = () => {
  return (
    <section className="relative py-28 pt-50 lg:py-32 lg:pt-64">

      <div className="container flex flex-col items-center justify-center lg:flex-row gap-10">
        {/* Left side - Main content */}
        <div className="overflow-hidden text-center flex flex-col items-center lg:items-start lg:text-left">
          <h1 className="text-foreground max-w-160 text-4xl tracking-tight md:text-5xl lg:text-6xl">
            {SITE.tagline}
            <br />
            <span className="text-primary">{SITE.taglineAccent}</span>
          </h1>

          <p className="text-muted-foreground text-md md:text-lg mt-5 md:text-lg lg:max-w-100 leading-6">
            {SITE.subheadline}
          </p>

          <div className="mt-8 flex flex-col flex-wrap items-center gap-4 lg:flex-nowrap lg:flex-row">
            <Button asChild>
              <a href="#trial">{SITE.trialCTA}</a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a href="#pricing" className="max-w-56 truncate text-start md:max-w-none">
                {SITE.secondaryCTA}
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-col justify-center space-y-5 lg:pl-10 pt-10 lg:pt-0">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {HERO_FEATURES.map((feature) => {
            const Icon = iconMap[feature.iconName];
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h3 className="font-text text-foreground font-semibold uppercase">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 max-lg:ml-6 max-lg:h-[550px] max-lg:overflow-hidden md:mt-20 lg:container lg:mt-24">
        <Image
          src={IMAGE_ASSETS.hero.src}
          alt={IMAGE_ASSETS.hero.alt}
          fill
          className="rounded-2xl opacity-7 object-contain object-left-top"
        />
        <div className="relative w-full">
          <Image
            src={IMAGE_ASSETS.hero.src}
            alt={IMAGE_ASSETS.hero.alt}
            width={1500}
            height={700}
            // fill
            className="rounded-2xl w-full object-cover aspect-[2/1] shadow-lg max-lg:rounded-tr-none"
          />
        </div>
      </div>
      <div className="my-16">

      <Logos />
      </div>
    </section>
  );
};
