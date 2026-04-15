"use client";

import { useState } from "react";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const handleNavClick = async (href: string) => {
    // If the link is an anchor to home, ensure we navigate to root then scroll
    if (href.startsWith("/#")) {
      const anchor = href.replace("/#", "");
      if (pathname === "/") {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        await router.push("/");
        // small delay to allow DOM to render
        setTimeout(() => {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 150);
      }
    } else {
      // normal navigation
      router.push(href);
    }
  };

  return (
    <section className="fixed inset-x-0 top-0 z-50 pointer-events-auto">
      {/* small full-width top strip to avoid visible background gap at the very top */}
      <div className="w-full bg-background h-4" />
      <div
        className={cn(
          "bg-background shadow-xl w-[min(90%,900px)] mx-auto rounded-4xl border backdrop-blur-md transition-all duration-300 py-2",
        )}
      >
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex text-primary shrink-0 items-center gap-2 font-heading uppercase">
          {SITE.name}
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="max-lg:hidden">
          <NavigationMenuList className="flex gap-4 whitespace-nowrap overflow-x-auto no-scrollbar">
            {NAV_LINKS.map((link) => (
              <NavigationMenuItem key={link.label} className="">
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={cn(
                    "relative bg-transparent px-1.5 text-sm font-medium transition-opacity hover:opacity-75",
                    pathname === link.href && "text-muted-foreground",
                  )}
                >
                  {link.label}
                </button>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Auth Buttons */}
        <div className="flex items-center gap-2.5">
          <Link href="#trial" className="max-lg:hidden">
            <Button variant="outline">
              <span className="relative z-10">{SITE.trialCTA}</span>
            </Button>
          </Link>

          {/* Hamburger Menu Button (Mobile Only) */}
          <button
            className="text-muted-foreground relative flex size-8 lg:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="absolute top-1/2 left-1/2 block w-[18px] -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "opacity-0" : ""}`}
              ></span>
              <span
                aria-hidden="true"
                className={`absolute block h-0.5 w-full rounded-full bg-current transition duration-500 ease-in-out ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}
              ></span>
            </div>
          </button>
        </div>
      </div>

      {/*  Mobile Menu Navigation */}
      <div
        className={cn(
          "bg-background fixed inset-x-0 top-[calc(100%+1rem)] flex flex-col rounded-2xl border p-6 transition-all duration-300 ease-in-out lg:hidden",
          isMenuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0",
        )}
      >
        <nav className="divide-border flex flex-1 flex-col divide-y">
          {NAV_LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => {
                setIsMenuOpen(false);
                handleNavClick(link.href);
              }}
              className={cn(
                "text-primary hover:text-primary/80 py-4 text-base font-medium transition-colors first:pt-0 last:pb-0 text-left w-full",
                pathname === link.href && "text-muted-foreground",
              )}
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
      </div>
    </section>
  );
};
