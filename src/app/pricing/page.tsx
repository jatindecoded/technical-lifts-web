import { Background } from "@/components/background";
import { Pricing } from "@/components/blocks/pricing";
import { PricingTable } from "@/components/blocks/pricing-table";
import { TrialCta } from "@/components/blocks/trial-cta";
import { DashedLine } from "@/components/dashed-line";

const Page = () => {
  return (
    <Background>
      <Pricing className="py-28 lg:pt-44 lg:pb-16" />
      <DashedLine className="container max-w-3xl" />
      <PricingTable />
      <DashedLine className="container max-w-3xl" />
      <TrialCta />
    </Background>
  );
};

export default Page;
