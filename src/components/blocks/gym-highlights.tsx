"use client";

import { motion } from "motion/react";

import { CountUp } from "@/components/ui/count-up";
import { GYM_HIGHLIGHTS } from "@/lib/constants";

// Parse numeric value and suffix from stat string e.g. "500+" → { value: 500, suffix: "+" }
function parseStat(stat: string): { value: number; prefix: string; suffix: string } | null {
  const match = stat.match(/^([₹]?)(\d+)([+%]?)$/);
  if (!match) return null;
  return { prefix: match[1], value: parseInt(match[2]), suffix: match[3] };
}

export function GymHighlights() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="font-heading text-4xl font-bold">Why Members Stay</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GYM_HIGHLIGHTS.map((item, i) => {
          const parsed = parseStat(item.stat);
          return (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-surface space-y-2 rounded-xl border border-white/[0.08] p-6"
            >
              <div className="font-heading text-primary text-3xl leading-none font-bold">
                {parsed ? (
                  <CountUp
                    to={parsed.value}
                    prefix={parsed.prefix}
                    suffix={parsed.suffix}
                  />
                ) : (
                  item.stat
                )}
              </div>
              <div className="font-heading text-text-base text-sm font-semibold uppercase">
                {item.label}
              </div>
              <p className="text-muted-foreground text-sm leading-snug">
                {item.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
