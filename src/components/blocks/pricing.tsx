"use client";

import React, { useState } from "react";

import Link from "next/link";

import { motion, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { PRICING_PLANS, PRICING_SECTION, SITE, CONTACT_FORM } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
};

// Simple inline lead form used only on this block. Keeps pricing and lead together as requested.
function LeadForm({ onSuccess }: { onSuccess: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [inquiry, setInquiry] = useState("membership");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      // Simulate submission; integrate real API where needed.
      await new Promise((r) => setTimeout(r, 700));
      setSuccess(true);
      onSuccess();
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="rounded-xl bg-surface p-6">
        <h4 className="mb-2 font-heading text-lg uppercase">{CONTACT_FORM.successHeading}</h4>
        <p className="text-sm text-muted-foreground">{CONTACT_FORM.successBody}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3 rounded-xl bg-surface p-6">
      <h4 className="font-heading text-lg uppercase">{CONTACT_FORM.heading}</h4>

      <label className="block text-sm">
        <span className="sr-only">Name</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          className="mt-1 w-full rounded-md bg-muted px-3 py-2 text-text-base"
          required
        />
      </label>

      <label className="block text-sm">
        <span className="sr-only">Phone or WhatsApp</span>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone or WhatsApp"
          className="mt-1 w-full rounded-md bg-muted px-3 py-2 text-text-base"
          required
        />
      </label>

      <label className="block text-sm">
        <select
          value={inquiry}
          onChange={(e) => setInquiry(e.target.value)}
          className="mt-1 w-full rounded-md bg-muted px-3 py-2 text-text-base"
        >
          {CONTACT_FORM.inquiryOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </label>

      <Button type="submit" className="w-full" disabled={submitting}>
        {submitting ? CONTACT_FORM.submittingLabel : CONTACT_FORM.submitLabel}
      </Button>
    </form>
  );
}

export const Pricing = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <section id="pricing" className={cn("py-24 lg:py-32", className)}>
      <div className="container">
        <div className="space-y-3 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {PRICING_SECTION.heading}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-md leading-snug">
            {PRICING_SECTION.subheading}
          </p>
        </div>

        {/* Parent grid: pricing cards + lead form */}
        <div className="mt-8 grid gap-6 md:mt-12 md:grid-cols-6 lg:mt-16">
          <motion.div className="md:col-span-4 grid gap-4 text-start" initial={reduceMotion ? "show" : "hidden"} whileInView={reduceMotion ? undefined : "show"} viewport={{ once: true, amount: 0.12 }} variants={container}>
            {PRICING_PLANS.map((plan) => (
              <motion.div key={plan.name} variants={item} whileHover={reduceMotion ? {} : { y: -8 }} whileTap={reduceMotion ? {} : { scale: 0.995 }} transition={{ type: 'spring', stiffness: 280, damping: 20 }}>
                <Card
                  className={cn(
                    "relative h-full transition-all",
                    plan.isPopular &&
                      "border-primary/60 shadow-[0_0_0_1px_var(--color-primary)]",
                  )}
                >
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-primary px-3 py-0.5 font-heading text-xs font-bold uppercase tracking-widest text-dark">
                      Most Popular
                    </span>
                  </div>
                )}
                <CardContent className="flex h-full flex-col gap-6 px-6 py-5">
                  <div className="space-y-1">
                    <CardHeading as="h3" className="text-lg uppercase tracking-tight">
                      {plan.name}
                    </CardHeading>

                    {/* Price reveal logic: show actual price only after form submission */}
                    {formSubmitted ? (
                      <div className={cn("font-heading text-3xl font-bold tracking-tight", plan.isPopular && "text-primary")}>
                        {plan.price}
                      </div>
                    ) : (
                      <div>
                        <div className={cn("font-heading text-3xl font-bold tracking-tight blur-sm select-none", plan.isPopular && "text-primary")}>
                          {/* simple obfuscated number to entice submission */}
                          {`₹${Math.floor(1000 + Math.random() * 9000)}`}
                        </div>
                        <p className="mt-2 text-sm text-muted-foreground">{PRICING_SECTION.lockedMessage}</p>
                      </div>
                    )}

                    <div className="text-muted-foreground text-sm">
                      {plan.duration} · {plan.priceNote}
                    </div>
                  </div>

                  <div className="flex-1 space-y-2.5">
                    {plan.features.map((feature) => (
                      <div
                        key={feature}
                        className="text-muted-foreground flex items-center gap-2"
                      >
                        <Check className="text-primary size-4 shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full"
                    variant={plan.isPopular ? "default" : "outline"}
                    asChild
                  >
                    <Link href={`/contact?inquiry=membership`}>
                      {PRICING_SECTION.ctaLabel}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
          </motion.div>

          {/* Lead form sits alongside pricing cards */}
          <div className="md:col-span-2">
            <LeadForm onSuccess={() => setFormSubmitted(true)} />
          </div>
        </div>

        <p className="text-muted-foreground mt-6 text-sm">
          {PRICING_SECTION.footnote}{" "}
          <Link
            href={`tel:${SITE.phone}`}
            className="underline underline-offset-4 hover:text-foreground transition-colors"
          >
            {SITE.phone}
          </Link>
        </p>
      </div>
    </section>
  );
};
