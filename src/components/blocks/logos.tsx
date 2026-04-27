import {
  Star,
  Trophy,
  Users,
  TrendingUp,
  Target,
  Dumbbell,
} from "lucide-react";
import Marquee from "react-fast-marquee";

import { TRUST_BAR } from "@/lib/constants";

const iconMap = {
  Star,
  Users,
  Trophy,
  TrendingUp,
  Target,
  Dumbbell,
};

export const Logos = () => {
  return (
    <section className="relative overflow-hidden py-12">
      {/* Background Glow */}
      <div className="bg-primary/5 pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 blur-[120px]" />

      <div className="relative z-10 mx-auto w-full">
        <Marquee
          gradient={true}
          gradientColor="black"
          speed={50}
          pauseOnHover={true}
        >
          <div className="flex items-center gap-16 pr-16">
            {TRUST_BAR.map((item, i) => {
              const Icon =
                iconMap[item.iconName as keyof typeof iconMap] || Dumbbell;
              return (
                <div
                  key={item.label + i}
                  className="group flex items-center gap-4 whitespace-nowrap"
                >
                  <div className="bg-surface group-hover:border-primary/40 flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] transition-all group-hover:scale-110">
                    <Icon className="text-primary size-5" />
                  </div>
                  <span className="text-text-base text-sm font-bold tracking-[0.2em] uppercase">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </Marquee>
      </div>
    </section>
  );
};
