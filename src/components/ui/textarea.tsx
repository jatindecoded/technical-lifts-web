import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "bg-surface placeholder:text-text-muted focus:border-primary/50 focus:ring-primary/10 flex min-h-24 w-full rounded-lg border border-white/[0.08] px-4 py-2 text-base transition-all outline-none focus:ring-4 disabled:opacity-50 md:text-sm",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };
