import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function Footer() {
  const navigation = [
    { name: "Facilities", href: "/#facilities" },
    { name: "Trainers", href: "/#trainers" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const social = SITE.instagramUrl
    ? [{ name: "Instagram", href: SITE.instagramUrl }]
    : [];

  const legal = [{ name: "Privacy Policy", href: "/privacy" }];
  const footerWordmark = SITE.name;

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Your First Session Is On Us
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Walk in, train once, see if it fits. Free trial for website visitors.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <a href="/contact">{SITE.trialCTA}</a>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
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
          {legal.map((item) => (
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
        <div className="opacity-80 font-heading mx-auto w-full max-w-[1570px] bg-linear-to-b from-primary to-white/40 bg-clip-text text-center text-[clamp(1rem,16vw,15.5rem)] leading-[0.78] tracking-tight text-transparent lowercase whitespace-nowrap select-none translate-y-[30%]">
          {footerWordmark}
        </div>
      </div>
    </footer>
  );
}
