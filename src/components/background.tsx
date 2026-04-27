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
          "from-primary/20 rounded-t-3xl rounded-b-2xl bg-linear-to-b via-black via-5% to-black",
        variant === "bottom" &&
          "to-primary/33 rounded-t-2xl rounded-b-4xl bg-linear-to-b from-black via-black",
        className,
      )}
    >
      {children}
    </div>
  );
};
