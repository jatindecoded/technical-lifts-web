import React from "react";

import Link from "next/link";

import { Instagram, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Come Train With Us
        </h1>
        <p className="text-muted-foreground mt-2 text-center leading-tight font-medium lg:mx-auto">
          Drop in, call, or send a message. We'll get back to you fast.
        </p>

        <div className="mt-10 flex flex-col justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          <div>
            <h2 className="font-medium">Where We Train</h2>
            <p className="text-muted-foreground mt-3">
              {SITE.address}
            </p>
            <div className="mt-3">
              <Button variant="outline" asChild>
                <Link
                  href={
                    SITE.googleMapsUrl ||
                    "https://maps.google.com/?q=C-596%2C+Vikas+Puri%2C+Near+PVR+Cinema%2C+New+Delhi+-+110018"
                  }
                >
                  <MapPin className="size-4" /> Open in Google Maps
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="font-medium">Call / WhatsApp</h2>
            <div className="mt-3 space-y-1">
              <Link
                href={`tel:${SITE.phone}`}
                className="text-muted-foreground hover:text-foreground flex items-center gap-1.5"
              >
                <Phone className="size-4" /> {SITE.phone}
              </Link>
              <p className="text-muted-foreground text-sm">
                WhatsApp same number
              </p>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button asChild>
                <Link href={`tel:${SITE.phone}`}>
                  <Phone className="size-4" /> Call Now
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href={`https://wa.me/${(SITE.whatsapp || SITE.phone).replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Now
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h2 className="font-medium">Hours</h2>
            <p className="text-muted-foreground mt-3 text-sm">
              {SITE.timings}
            </p>
            {SITE.instagramUrl && (
              <Link
                href={SITE.instagramUrl}
                className="text-muted-foreground hover:text-foreground mt-3 inline-flex items-center gap-1.5 text-sm"
              >
                <Instagram className="size-4" /> Instagram
              </Link>
            )}
          </div>
        </div>

        <DashedLine className="my-12" />

        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Send a Message</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
