import { Star, Trophy, Users } from "lucide-react";

import { TRUST_BAR } from "@/lib/constants";

const iconMap = {
  Star,
  Users,
  Trophy,
};

export const Logos = () => {
  return (
    <section className="overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="grid grid-cols-2 lg:flex-row w-full items-center justify-between gap-4 text-center">
          {TRUST_BAR.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];

            return (
              <div key={item.label} className="flex md:flex-col items-center gap-2">
                <Icon className="text-primary size-4 shrink-0 lg:size-5" />
                <h3 className="text-foreground text-lg text-balance md:text-xl lg:text-2xl underline decoration-dashed underline-offset-4">
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
