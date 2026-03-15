import { Background } from "@/components/background";
import { FAQ } from "@/components/blocks/faq";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Pricing } from "@/components/blocks/pricing";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import { Trainers } from "@/components/blocks/trainers";

export default function Home() {
  return (
    <>
      <Background className="via-black to-black/80">
        <div className="space-y-48">
          <Hero />
          <Features />
          <ResourceAllocation />
          <Trainers />
        </div>
      </Background>
      <Testimonials />
      <Background variant="bottom">
        <div className="space-y-48">
          <Pricing />
          <FAQ />
        </div>
      </Background >
    </>
  );
}
