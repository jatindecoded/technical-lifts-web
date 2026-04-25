import { Star, Trophy, Users, TrendingUp } from "lucide-react";

import { TRUST_BAR } from "@/lib/constants";

const iconMap = {
  Star,
  Users,
  Trophy,
  TrendingUp,
};

export const Logos = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
          {TRUST_BAR.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];
            return (
              <div key={item.label} className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-muted/20">
                  <Icon className="text-primary size-5" />
                </span>
                <span className="font-heading text-sm font-bold uppercase tracking-tight text-foreground md:text-base">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
