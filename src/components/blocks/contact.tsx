"use client";

import React from "react";

import Link from "next/link";

import { Clock, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { Card, CardContent } from "@/components/ui/card";
import { CardHeading } from "@/components/ui/card-heading";
import { CTA } from "@/components/ui/cta";
import { SectionHeader } from "@/components/ui/section-header";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="bg-dark py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-5xl">
        <SectionHeader
          badge="Contact"
          title="Come Train With Us"
          description="Drop in, call, or send a message. We'll get back to you fast."
          align="center"
          className="mb-16"
        />

        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="bg-surface h-full overflow-hidden rounded-2xl border-white/[0.08] shadow-2xl">
            <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
              <div className="space-y-4">
                <MapPin className="text-primary size-6" />
                <CardHeading as="h3" className="text-xl">
                  Where We Train
                </CardHeading>
                <p className="text-text-muted text-sm leading-relaxed">
                  {SITE.address}
                </p>
              </div>
              <CTA id="mapsOpen" buttonVariant="outline" className="w-full" />
            </CardContent>
          </Card>

          <Card className="bg-surface h-full overflow-hidden rounded-2xl border-white/[0.08] shadow-2xl">
            <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
              <div className="space-y-4">
                <Phone className="text-primary size-6" />
                <CardHeading as="h3" className="text-xl">
                  Call / WhatsApp
                </CardHeading>
                <div className="space-y-1">
                  <Link
                    href={`tel:${SITE.phone}`}
                    className="text-text-base hover:text-primary text-lg font-bold transition-colors"
                  >
                    {SITE.phone}
                  </Link>
                  <p className="text-text-muted text-xs font-bold">
                    WhatsApp same number
                  </p>
                </div>
              </div>
              <div className="grid gap-2">
                <CTA id="callNow" className="w-full" />
                <CTA id="whatsapp" buttonVariant="outline" className="w-full" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-surface h-full overflow-hidden rounded-2xl border-white/[0.08] shadow-2xl">
            <CardContent className="flex h-full flex-col justify-between gap-8 p-8">
              <div className="space-y-4">
                <Clock className="text-primary size-6" />
                <CardHeading as="h3" className="text-xl">
                  Hours
                </CardHeading>
                <div className="space-y-1">
                  <p className="text-text-base text-sm font-bold">
                    Open 7 Days
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {SITE.timings}
                  </p>
                </div>
              </div>
              {SITE.instagramUrl && (
                <CTA
                  id="instagram"
                  buttonVariant="outline"
                  className="w-full"
                />
              )}
            </CardContent>
          </Card>
        </div>

        <DashedLine className="my-24 opacity-20" />

        <div className="mx-auto max-w-2xl">
          <div className="mb-12 space-y-4 text-center">
            <div className="text-primary text-[10px] font-bold">Enquiry</div>
            <h2 className="font-heading text-3xl font-bold">Send a Message</h2>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
