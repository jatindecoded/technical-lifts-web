import { Star, Trophy, Users, TrendingUp, Target, Dumbbell } from "lucide-react";
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
    <section className="overflow-hidden py-12 relative">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto w-full relative z-10">
        <Marquee gradient={true} gradientColor="black" speed={50} pauseOnHover={true}>
          <div className="flex items-center gap-16 pr-16">
            {TRUST_BAR.map((item, i) => {
              const Icon = iconMap[item.iconName as keyof typeof iconMap] || Dumbbell;
              return (
                <div key={item.label + i} className="flex items-center gap-4 whitespace-nowrap group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-surface border border-white/[0.08] transition-all group-hover:border-primary/40 group-hover:scale-110">
                    <Icon className="text-primary size-5" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-base">
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
