"use client";

import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

import { SectionHeader } from "../ui/section-header";

import { GROUP_CLASSES_SCHEDULE, GROUP_CLASSES_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

const DAYS_ORDER = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const ACTIVITY_COLORS: Record<string, string> = {
  Aerobics: "bg-primary/10 text-primary border-primary/20",
  Yoga: "bg-blue-500/10 text-blue-300 border-blue-500/20",
  Zumba: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  Bhangra: "bg-orange-500/10 text-orange-300 border-orange-500/20",
  HIIT: "bg-red-500/10 text-red-300 border-red-500/20",
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const GroupClasses = () => {
  const byDay = DAYS_ORDER.map((day) => ({
    day,
    classes: GROUP_CLASSES_SCHEDULE.filter((c) => c.day === day),
  }));

  return (
    <section
      id={GROUP_CLASSES_SECTION.id}
      className="py-section bg-surface overflow-hidden"
    >
      <div className="container">
        <SectionHeader
          badge={GROUP_CLASSES_SECTION.badge}
          title={`${GROUP_CLASSES_SECTION.heading} ${GROUP_CLASSES_SECTION.headingAccent}`}
          description={GROUP_CLASSES_SECTION.subheading}
          className="mb-16"
        />

        <motion.div
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          variants={container}
        >
          {byDay.map(({ day, classes }) => (
            <motion.div
              key={day}
              variants={item}
              className="bg-dark flex flex-col gap-4 rounded-2xl border border-white/[0.08] p-6"
            >
              <h4 className="font-heading text-text-base text-sm font-bold tracking-widest">
                {day}
              </h4>

              {classes.length === 0 ? (
                <p className="text-text-muted text-xs italic">Rest Day</p>
              ) : (
                <ul className="flex flex-col gap-3">
                  {classes.map((cls, i) => (
                    <li
                      key={i}
                      className={cn(
                        "flex flex-col gap-1.5 rounded-xl border px-4 py-3",
                        ACTIVITY_COLORS[cls.activity] ??
                          "bg-muted/10 text-text-muted border-white/[0.08]",
                      )}
                    >
                      <div className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider opacity-70">
                        {cls.period === "Morning" ? (
                          <Sun className="size-3" />
                        ) : (
                          <Moon className="size-3" />
                        )}
                        {cls.time}
                      </div>
                      <span className="text-sm font-bold">{cls.activity}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-text-muted mt-10 text-center text-sm font-medium"
        >
          All classes included in your membership. Slots are limited — show up early.
        </motion.p>
      </div>
    </section>
  );
};
