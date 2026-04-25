"use client";

import React, { useState, useEffect } from "react";

import Link from "next/link";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, X } from "lucide-react";

import { SectionHeader } from "../ui/section-header";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import UnifiedForm, { Field, Input, Select } from "@/components/ui/unified-form";
import { CONTACT_FORM, PRICING_PLANS, PRICING_SECTION, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

function LeadDialog({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) {
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    function onLeadSubmitted() {
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
        onClose();
      }, 1500);
    }

    if (isOpen) {
      window.addEventListener('lead-submitted', onLeadSubmitted as EventListener);
    }

    return () => window.removeEventListener('lead-submitted', onLeadSubmitted as EventListener);
  }, [isOpen, onClose, onSuccess]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/[0.08] bg-surface p-8 shadow-2xl lg:p-12"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-text-muted hover:text-primary transition-colors"
            >
              <X className="size-6" />
            </button>

            {success ? (
              <div className="text-center py-8">
                <div className="mb-6 flex justify-center text-primary">
                  <Check className="size-16" />
                </div>
                <h3 className="mb-4 text-2xl">{CONTACT_FORM.successHeading}</h3>
                <p className="text-text-muted text-lg">{CONTACT_FORM.successBody}</p>
              </div>
            ) : (
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="text-primary text-[10px] font-bold  tracking-[0.2em]">Unlock Access</div>
                  <h3 className="text-3xl font-bold">See Membership Pricing</h3>
                  <p className="text-text-muted leading-relaxed">
                    Submit your details to reveal our plans. No commitment required.
                  </p>
                </div>

                <UnifiedForm />
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export const Pricing = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="pricing" className={cn("py-section bg-dark", className)}>
      <div className="container">
        <SectionHeader 
          badge="Membership"
          title={PRICING_SECTION.heading}
          description={PRICING_SECTION.subheading}
          align="center"
          className="mb-16"
        />

        <div className="mt-16 max-w-5xl mx-auto">
          <motion.div
            className="grid gap-8 lg:grid-cols-2"
            initial={reduceMotion ? "show" : "hidden"}
            whileInView={reduceMotion ? undefined : "show"}
            viewport={{ once: true, amount: 0.1 }}
            variants={container}
          >
            {PRICING_PLANS.map((plan) => (
              <motion.div
                key={plan.name}
                variants={item}
                whileHover={reduceMotion ? {} : { scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <Card
                  className={cn(
                    "relative h-full flex flex-col bg-surface border-white/[0.08] rounded-3xl transition-all",
                    plan.isPopular && "border-primary/50 ring-1 ring-primary/20",
                  )}
                >
                  {plan.isPopular && (
                    <div className="absolute top-0 right-0 bg-primary px-6 py-2 rounded-tr-3xl rounded-bl-3xl shadow-xl z-20">
                      <span className="text-[10px] font-bold  tracking-widest text-dark">
                        Popular
                      </span>
                    </div>
                  )}
                  <CardContent className="flex flex-1 flex-col p-10 gap-6 text-text-base relative z-10">
                    <div>
                      <div className="text-sm text-primary font-bold mb-2 tracking-wide">
                        {plan.duration}
                      </div>
                      <CardHeading as="h3" className="text-3xl tracking-tight font-bold">
                        {plan.name}
                      </CardHeading>
                    </div>

                    <div>
                      {formSubmitted ? (
                        <div className="flex items-baseline gap-2">
                          <span className={cn("text-4xl font-extrabold tracking-tighter font-heading", plan.isPopular ? "text-primary" : "")}>
                            {plan.price}
                          </span>
                          {/* <span className="text-lg text-text-muted font-medium italic">/{plan.priceNote.split(' ')[1]}</span> */}
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="text-5xl font-extrabold tracking-tighter font-heading blur">
                            {PRICING_SECTION.pricePlaceholder}
                          </div>
                          <Button 
                            onClick={() => setIsDialogOpen(true)}
                          >
                            Click to View Pricing
                          </Button>
                        </div>
                      )}
                    </div>

                    <div className="flex-1 space-y-2">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-4">
                          <Check className="mt-1 size-4 shrink-0 text-primary" />
                          <span className="text-sm font-medium opacity-80 leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>

                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="mt-16 text-center">
            <div className="inline-block p-8 rounded-3xl bg-white/[0.03] border border-white/[0.05] italic max-w-2xl">
              <p className="text-sm text-text-muted leading-relaxed">
                {PRICING_SECTION.footnote}{" "}
                <Link
                  href={`tel:${SITE.phone.replace(/\D/g, "")}`}
                  className="text-primary hover:underline font-bold not-italic"
                >
                  {SITE.phone}
                </Link>
              </p>
            </div>
        </div>
      </div>

      <LeadDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
        onSuccess={() => setFormSubmitted(true)}
      />
    </section>
  );
};
