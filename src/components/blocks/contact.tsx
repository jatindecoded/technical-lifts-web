import React from "react";

import Link from "next/link";

import { Clock, MapPin, Phone } from "lucide-react";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
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
          <Card className="h-full">
            <CardHeader className="p-6">
              <MapPin className="text-primary size-5 mb-2" />
              <CardTitle className="text-3xl md:text-4xl font-heading font-bold tracking-tight uppercase">
                Where We Train
              </CardTitle>
              <CardDescription className="mt-3 text-sm leading-relaxed">
                {SITE.address}
              </CardDescription>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
              <CTA id="mapsOpen" buttonVariant="outline" />
            </CardFooter>
          </Card>

          <Card className="h-full">
            <CardHeader className="p-6">
              <Phone className="text-primary size-5 mb-2" />
              <CardTitle className="text-3xl md:text-4xl font-heading font-bold tracking-tight uppercase">
                Call / WhatsApp
              </CardTitle>
              <Link
                href={`tel:${SITE.phone}`}
                className="text-muted-foreground mt-3 block text-sm hover:text-foreground transition-colors"
              >
                {SITE.phone}
              </Link>
              <CardDescription className="mt-2 text-xs">WhatsApp same number</CardDescription>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
              <div className="flex flex-wrap gap-2">
                <CTA id="callNow" />
                <CTA id="whatsapp" />
              </div>
            </CardFooter>
          </Card>

          <Card className="h-full">
            <CardHeader className="p-6">
              <Clock className="text-primary size-5 mb-2" />
              <CardTitle className="text-3xl md:text-4xl font-heading font-bold tracking-tight uppercase">
                Hours
              </CardTitle>
              <CardDescription className="mt-3 text-sm leading-relaxed">{SITE.timings}</CardDescription>
            </CardHeader>
            <CardFooter className="p-6 pt-0">
              {SITE.instagramUrl && <CTA id="instagram" />}
            </CardFooter>
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
