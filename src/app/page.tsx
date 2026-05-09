
import { Background } from "@/components/background";
import { AppSection } from "@/components/blocks/app-section";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Founder } from "@/components/blocks/founder";
import { GroupClasses } from "@/components/blocks/group-classes";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { Trainers } from "@/components/blocks/trainers";
import { TrialCta } from "@/components/blocks/trial-cta";

export default function Home() {
  return (
    <>
      <Background className="-mt-32 md:-mt-30 relative overflow-hi via-black to-black/80">

        <Hero />
        <Features />
        <ResourceAllocation />
        <GroupClasses />
        <Founder />
        <Trainers />
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <AppSection />
        <Pricing />
        <FAQ />
        <TrialCta />
      </Background>
    </>
  );
}
