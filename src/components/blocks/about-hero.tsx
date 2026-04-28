import { DashedLine } from "@/components/dashed-line";
import { ABOUT_HERO, GYM_STATS } from "@/lib/constants";

export function AboutHero() {
  return (
    <section>
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            {ABOUT_HERO.heading}
            <br />
            <span className="text-primary">{ABOUT_HERO.headingAccent}</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-lg text-lg leading-snug md:text-xl lg:mt-8">
            {ABOUT_HERO.subheading}
          </p>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-6 pt-10 lg:pt-0 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {/* Animated gym stats (staggered) */}
          <div className="grid grid-cols-3 gap-4">
            {GYM_STATS.map((stat, idx) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <div
                  className="font-heading text-primary motion-safe:animate-fade-in-up text-4xl font-bold md:text-5xl"
                  style={{ animationDelay: `${idx * 70}ms` }}
                >
                  {stat.value}
                </div>
                <div className="text-muted-foreground text-sm font-semibold uppercase">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
