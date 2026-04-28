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
      <Background className="-mt-30 relative overflow-hi via-black to-black/80 pt-36">
        <Image
          src={IMAGE_ASSETS.hero.src}
          alt={IMAGE_ASSETS.hero.alt}
          width={1000}
          height={1000}
          className="hidden rounded-2xl object-contain -mt-36 absolute object-left-top opacity-10 lg:block w-full t-0"
        />

        <Image
          src={"/photos-og/DSC02584.webp"}
          alt={IMAGE_ASSETS.hero.alt}
          width={1000}
          height={1000}
          className="object-contain absolute -mt-36 object-left-top opacity-10 lg:hidden"
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
