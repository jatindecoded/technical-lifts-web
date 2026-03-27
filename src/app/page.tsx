import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { Trainers } from "@/components/blocks/trainers";
import { TrialCta } from "@/components/blocks/trial-cta";

export default function Home() {
  return (
    <>
      <Background className="via-black to-black/80">
        <Hero />
        <Features />
        <ResourceAllocation />
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
