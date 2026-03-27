import { DashedLine } from "@/components/dashed-line";
import { ABOUT_HERO, GYM_STATS } from "@/lib/constants";

export function AboutHero() {
  return (
    <section>
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24">
        <div className="flex-[1.5]">
          <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
            {ABOUT_HERO.heading}
            <br />
            <span className="text-primary">{ABOUT_HERO.headingAccent}</span>
          </h1>
          <p className="text-muted-foreground mt-5 max-w-lg text-lg leading-snug md:text-xl lg:mt-8">
            {ABOUT_HERO.subheading}
          </p>
        </div>

        <div className="relative flex flex-1 flex-col justify-center gap-6 pt-10 lg:pl-10 lg:pt-0">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {GYM_STATS.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-0.5">
              <div className="font-heading text-primary text-4xl font-bold tracking-tight md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground uppercase text-sm font-semibold tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
