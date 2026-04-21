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
      <div className="container">
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {TRUST_BAR.map((item) => {
            const Icon = iconMap[item.iconName as keyof typeof iconMap];
            return (
              <div key={item.label} className="flex items-center gap-3">
                <Icon className="text-primary size-5 shrink-0" />
                <span className="font-heading text-base font-bold uppercase tracking-wide text-text-base underline decoration-dashed underline-offset-4 md:text-lg">
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
