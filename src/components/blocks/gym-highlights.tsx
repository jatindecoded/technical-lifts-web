import { GYM_HIGHLIGHTS } from "@/lib/constants";

export function GymHighlights() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="font-heading text-4xl font-bold">Why Members Stay</h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GYM_HIGHLIGHTS.map((item) => (
          <div
            key={item.label}
            className="bg-surface space-y-2 rounded-xl border border-white/[0.08] p-6"
          >
            <div className="font-heading text-primary text-3xl leading-none font-bold">
              {item.stat}
            </div>
            <div className="font-heading text-text-base text-sm font-semibold uppercase">
              {item.label}
            </div>
            <p className="text-muted-foreground text-sm leading-snug">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
