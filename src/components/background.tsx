import React from "react";

import { cn } from "@/lib/utils";

type BackgroundProps = {
  children: React.ReactNode;
  variant?: "top" | "bottom";
  className?: string;
};

export const Background = ({
  children,
  variant = "top",
  className,
}: BackgroundProps) => {
  return (
    <div
      className={cn(
        "relative mx-2.5 mt-2.5",
        variant === "top" &&
          "from-primary/33 via-black to-black rounded-t-4xl rounded-b-2xl bg-linear-to-b via-10%",
        variant === "bottom" &&
          "from-black via-black to-primary/33 rounded-t-2xl rounded-b-4xl bg-linear-to-b",
        className,
      )}
    >
      {children}
    </div>
  );
};
