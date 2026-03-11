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
        <div className="flex w-full items-center justify-between gap-8">
          {TRUST_BAR.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];

            return (
              <div key={item.label} className="flex items-center gap-2.5 lg:gap-5">
                <Icon className="text-muted-foreground size-4 shrink-0 lg:size-5" />
                <p className="text-muted-foreground text-xl text-balance md:text-2xl lg:text-3xl">
                  {item.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
