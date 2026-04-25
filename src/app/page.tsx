import Image from "next/image";

import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Founder } from "@/components/blocks/founder";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { Trainers } from "@/components/blocks/trainers";
import { TrialCta } from "@/components/blocks/trial-cta";
import { IMAGE_ASSETS } from "@/lib/constants";


export default function Home() {
  return (
    <>
      <Background className="-mt-30 via-black to-black/80 pt-36">
        <Image
          src={IMAGE_ASSETS.hero.src}
          alt={IMAGE_ASSETS.hero.alt}
          fill
          className="rounded-2xl object-contain object-left-top opacity-10"
        />

        <Hero />
        <Features />
        <ResourceAllocation />
        <Founder />
        <Trainers />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <Pricing />
        <FAQ />
        <TrialCta />
      </Background>
    </>
  );
}
