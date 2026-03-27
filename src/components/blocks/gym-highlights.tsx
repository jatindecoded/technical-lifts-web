import { GYM_HIGHLIGHTS } from "@/lib/constants";

export function GymHighlights() {
  return (
    <section className="container max-w-5xl py-12">
      <h2 className="font-heading text-4xl font-bold tracking-tight">
        Why Members Stay
      </h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {GYM_HIGHLIGHTS.map((item) => (
          <div
            key={item.label}
            className="rounded-xl border border-white/[0.08] bg-surface p-6 space-y-2"
          >
            <div className="font-heading text-primary text-3xl font-bold tracking-tight leading-none">
              {item.stat}
            </div>
            <div className="font-heading text-sm uppercase font-semibold tracking-wide text-text-base">
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
