"use client";

import React from "react";

import Link from "next/link";

import { SectionHeader } from "../ui/section-header";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQ_ITEMS, FAQ_SECTION } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const FAQ = ({
  className,
  className2,
  headerTag = "h2",
}: {
  className?: string;
  className2?: string;
  headerTag?: "h1" | "h2";
}) => {
  return (
    <section className={cn("py-section bg-dark", className)}>
      <div className="container">
        <div className={cn("grid gap-16 lg:grid-cols-12", className2)}>
          <div className="lg:col-span-5">
            <SectionHeader
              badge="FAQ"
              title={FAQ_SECTION.heading}
              className="mb-8"
              level={headerTag}
            />
            <p className="text-text-muted max-w-md text-lg leading-relaxed font-medium">
              {FAQ_SECTION.supportLinePrefix}{" "}
              <Link
                href="/contact"
                className="text-primary font-bold underline-offset-4 hover:underline"
              >
                {FAQ_SECTION.supportLinkLabel}
              </Link>
              .
            </p>
          </div>

          <div className="lg:col-span-7">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={i}
                  value={`${i}`}
                  className="bg-surface hover:border-primary/20 overflow-hidden rounded-2xl border border-white/[0.08] px-8 py-2 shadow-xl transition-all"
                >
                  <AccordionTrigger className="text-text-base text-left font-bold hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-text-muted pb-6 leading-relaxed font-medium">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
