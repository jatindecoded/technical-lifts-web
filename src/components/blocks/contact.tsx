import React from "react";

import Link from "next/link";

import { Clock, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { Card } from "@/components/ui/card";
import { CTA } from "@/components/ui/cta";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-4xl">
        <h1 className="text-center text-3xl font-heading font-bold tracking-tight md:text-5xl lg:text-6xl">
          Come Train With Us
        </h1>
        <p className="text-muted-foreground mt-3 text-center leading-tight md:text-lg">
          Drop in, call, or send a message. We&apos;ll get back to you fast.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
          <Card>
            <MapPin className="text-primary size-5" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
              Where We Train
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.address}
            </p>
            <div>
              <CTA id="mapsOpen" buttonVariant="outline" />
            </div>
          </Card>

          <Card>
            <Phone className="text-primary size-5" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
              Call / WhatsApp
            </h2>
            <Link
              href={`tel:${SITE.phone}`}
              className="text-muted-foreground text-sm hover:text-foreground transition-colors block"
            >
              {SITE.phone}
            </Link>
            <p className="text-muted-foreground text-xs">
              WhatsApp same number
            </p>
            <div className="flex flex-wrap gap-2">
              <CTA id="callNow" />
              <CTA id="whatsapp" />
            </div>
          </Card>

          <Card>
            <Clock className="text-primary size-5" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
              Hours
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.timings}
            </p>
            {SITE.instagramUrl && (
              <div>
                <CTA id="instagram" />
              </div>
            )}
          </Card>
        </div>

        <DashedLine className="my-12" />

        <div className="mx-auto max-w-2xl">
          <h2 className="font-heading mb-6 text-xl font-bold uppercase tracking-tight">
            Send a Message
          </h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
