import React from "react";

import Link from "next/link";

import { Clock, Instagram, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
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
          <div className="rounded-xl border border-white/[0.08] bg-surface p-6 space-y-3">
            <MapPin className="text-primary size-5" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
              Where We Train
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.address}
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link
                href={
                  SITE.googleMapsUrl ||
                  "https://maps.google.com/?q=C-596%2C+Vikas+Puri%2C+Near+PVR+Cinema%2C+New+Delhi+-+110018"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Open in Maps
              </Link>
            </Button>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-surface p-6 space-y-3">
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
              <Button size="sm" asChild>
                <Link href={`tel:${SITE.phone}`}>Call Now</Link>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <Link
                  href={`https://wa.me/${(SITE.whatsapp || SITE.phone).replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </Link>
              </Button>
            </div>
          </div>

          <div className="rounded-xl border border-white/[0.08] bg-surface p-6 space-y-3">
            <Clock className="text-primary size-5" />
            <h2 className="font-heading text-sm font-bold uppercase tracking-wide">
              Hours
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {SITE.timings}
            </p>
            {SITE.instagramUrl && (
              <Link
                href={SITE.instagramUrl}
                className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 text-sm transition-colors"
              >
                <Instagram className="size-4" /> Instagram
              </Link>
            )}
          </div>
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
