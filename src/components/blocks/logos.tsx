import { Star, Trophy, Users } from "lucide-react";

import { TRUST_BAR } from "@/lib/constants";

const iconMap = {
  Star,
  Users,
  Trophy,
};

export const Logos = () => {
  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="flex flex-col lg:flex-row w-full items-center justify-between gap-8">
          {TRUST_BAR.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];

            return (
              <div key={item.label} className="flex items-center gap-2.5 lg:gap-5">
                <Icon className="text-primary size-4 shrink-0 lg:size-5" />
                <h3 className="text-foreground text-xl text-balance md:text-xl lg:text-2xl">
                  {item.label}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
