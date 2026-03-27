import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  FOOTER_CTA,
  FOOTER_LEGAL,
  FOOTER_NAV,
  SITE,
} from "@/lib/constants";

export function Footer() {
  const social = SITE.instagramUrl
    ? [{ name: "Instagram", href: SITE.instagramUrl }]
    : [];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          {FOOTER_CTA.heading}
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          {FOOTER_CTA.subheading}
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contact">{SITE.trialCTA}</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_NAV.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {FOOTER_LEGAL.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 w-full overflow-hidden md:mt-14 lg:mt-20">
        <div className="font-heading mx-auto w-full max-w-[1570px] bg-linear-to-b from-primary to-white/40 bg-clip-text text-center text-[clamp(1rem,16vw,15.5rem)] leading-[0.78] tracking-tight text-transparent opacity-80 lowercase select-none translate-y-[30%] whitespace-nowrap">
          {SITE.name}
        </div>
      </div>
    </footer>
  );
}
