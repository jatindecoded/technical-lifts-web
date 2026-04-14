import React from "react";

import { cn } from "@/lib/utils";

export function CardHeading({
  as = "h3",
  className = "",
  children,
}: {
  as?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const Tag: React.ElementType = as as React.ElementType;
  return (
    <Tag className={cn("font-heading font-bold tracking-tight uppercase", className)}>
      {children}
    </Tag>
  );
}
