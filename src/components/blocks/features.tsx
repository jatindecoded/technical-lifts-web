import Image from "next/image";
import Link from "next/link";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";
import { FEATURE_SECTIONS, IMAGE_ASSETS, SITE, WHO_ITS_FOR } from "@/lib/constants";

export const Features = () => {
  return (
    <section id="about" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line with text */}
        <div className="relative flex items-center justify-center">
          <DashedLine className="text-muted-foreground" />
          <span className="bg-muted text-muted-foreground absolute px-3 font-mono text-sm font-medium tracking-wide max-md:hidden">
            MEASURE TWICE. CUT ONCE.
          </span>
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 flex flex-col justify-center max-w-xl lg:max-w-4xl items-center gap-3 lg:mt-24 text-center">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            {FEATURE_SECTIONS.whoItsForHeading}
          </h2>
          <p className="text-muted-foreground leading-snug max-w-2xl">
            {SITE.subheadline}
          </p>
        </div>

        {/* Features Card */}
        <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
          <CardContent className="flex p-0 max-md:flex-col">
            {WHO_ITS_FOR.map((item, i) => (
              <div key={i} className="flex flex-1 max-md:flex-col">
                <div className="flex-1 p-4 pe-0!">
                  <div className="relative aspect-[2/1] md:aspect-[1.28/1] overflow-hidden">
                    <Image
                      src={IMAGE_ASSETS.whoItsFor[i % IMAGE_ASSETS.whoItsFor.length].src}
                      alt={IMAGE_ASSETS.whoItsFor[i % IMAGE_ASSETS.whoItsFor.length].alt}
                      fill
                      className="object-cover object-left-top mt-2 rounded-l-2xl"
                    />
                    <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                  </div>

                  <Link
                    href="#trial"
                    className={
                      "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                    }
                  >
                    <div className="space-y-2">
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-foreground text-md leading-6 max-w-76">
                        {item.description}
                      </p>
                    </div>
                    {/* <div className="rounded-full border p-2">
                      <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                    </div> */}
                  </Link>
                </div>
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative hidden md:block">
                    <DashedLine orientation="vertical" />
                  </div>
                )}
                {i < WHO_ITS_FOR.length - 1 && (
                  <div className="relative block md:hidden">
                    <DashedLine orientation="horizontal" />
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
