import Link from "next/link";

import { Check, Minus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { PT_PLAN } from "@/lib/constants";

interface ComparisonRow {
  feature: string;
  regular: boolean | string;
  pt: boolean | string;
}

const COMPARISON_ROWS: ComparisonRow[] = [
  { feature: "Full gym access", regular: true, pt: true },
  { feature: "Weekly group classes", regular: true, pt: true },
  { feature: "Locker & shower", regular: true, pt: true },
  { feature: "General trainer guidance", regular: true, pt: true },
  { feature: "Dedicated personal trainer", regular: false, pt: true },
  { feature: "Custom workout program", regular: false, pt: true },
  { feature: "Personalised diet plan", regular: false, pt: true },
  { feature: "Weekly progress check-ins", regular: false, pt: true },
  { feature: "Body composition tracking", regular: false, pt: true },
];

const renderValue = (value: boolean | string) => {
  if (value === true) return <Check className="text-primary size-5" />;
  if (value === false) return <Minus className="text-muted-foreground/40 size-5" />;
  return <span className="text-sm text-muted-foreground">{value}</span>;
};

export const PricingTable = () => {
  return (
    <section className="pb-28 lg:pb-32">
      <div className="container max-w-3xl">
        <h2 className="mb-2 text-2xl tracking-tight md:text-3xl">
          {PT_PLAN.heading}
        </h2>
        <p className="text-muted-foreground mb-8 text-sm">{PT_PLAN.subheading}</p>

        {/* Header row */}
        <div className="grid grid-cols-3 border-b border-white/[0.08] pb-4">
          <div />
          <div className="text-center">
            <div className="font-heading text-sm font-bold uppercase tracking-wide text-muted-foreground">
              Regular
            </div>
          </div>
          <div className="text-center">
            <div className="font-heading text-sm font-bold uppercase tracking-wide text-primary">
              Personal Training
            </div>
          </div>
        </div>

        {/* Feature rows */}
        {COMPARISON_ROWS.map((row) => (
          <div
            key={row.feature}
            className="grid grid-cols-3 items-center border-b border-white/[0.08] py-3.5"
          >
            <span className="text-sm text-muted-foreground pr-4">{row.feature}</span>
            <div className="flex justify-center">{renderValue(row.regular)}</div>
            <div className="flex justify-center">{renderValue(row.pt)}</div>
          </div>
        ))}

        {/* CTA row */}
        <div className="mt-6 grid grid-cols-3 items-center gap-4">
          <div />
          <div className="flex justify-center">
            <Button variant="outline" asChild>
              <Link href="/contact?inquiry=membership">Get Started</Link>
            </Button>
          </div>
          <div className="flex justify-center">
            <Button asChild>
              <Link href={PT_PLAN.ctaHref}>{PT_PLAN.cta}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
