import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "file:text-foreground placeholder:text-text-muted selection:bg-primary selection:text-dark bg-surface border-white/[0.08] h-11 w-full min-w-0 rounded-lg border px-4 py-2 text-base transition-all outline-none disabled:pointer-events-none disabled:opacity-50 md:text-sm",
        "focus:border-primary/50 focus:ring-4 focus:ring-primary/10",
        "aria-invalid:border-destructive",
        className,
      )}
      {...props}
    />
  );
}

export { Input };
