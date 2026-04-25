"use client";

import React from "react";

import Image from "next/image";

import { motion } from "framer-motion";
import { DumbbellIcon } from "lucide-react";

import { DashedLine } from "../dashed-line";
import { SplitReveal } from "../ui/split-reveal";

import { CTA } from "@/components/ui/cta";
import {
  FACILITIES,
  FEATURE_SECTIONS,
  IMAGE_ASSETS,
  PT_INCLUDES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

// motion tokens
const motionItem = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface SectionItem {
  title: string;
  description: string;
  images: {
    src: string;
    alt: string;
    width: number;
    height: number;
  }[];
  className: string;
  fade: string[];
  listItems?: string[];
  cta?: {
    href: string;
    label: string;
  };
}

const topItems: SectionItem[] = [
  {
    title: "",
    description: FEATURE_SECTIONS.personalTrainingBody,
    images: [],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [""],
    listItems: PT_INCLUDES,
    cta: {
      href: FEATURE_SECTIONS.personalTrainingCtaHref,
      label: FEATURE_SECTIONS.personalTrainingCTA,
    },
  },
  {
    title: "",
    description: "",
    images: [
      {
        src: IMAGE_ASSETS.personalTraining.src,
        alt: IMAGE_ASSETS.personalTraining.alt,
        width: 495,
        height: 420,
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [],
  },
];

const bottomItems: SectionItem[] = FACILITIES.map((facility, index) => ({
  title: facility,
  description: "",
  images: [
    {
      src: IMAGE_ASSETS.whoItsFor[index]?.src,
      alt: IMAGE_ASSETS.whoItsFor[index]?.alt,
      width: 495,
      height: 420,
    },
  ],
  className: "",
  fade: index % 2 === 0 ? ["bottom"] : [""],
}));

export const ResourceAllocation = () => {
  return (
    <section
      id="personal-training"
      className="py-section bg-dark overflow-hidden"
    >
      <div className="container">
        <div className="mb-16 flex flex-col items-center justify-center gap-6 text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase"
          >
            Personal Training
          </motion.div>
          <h2 className="">
            <SplitReveal text={FEATURE_SECTIONS.personalTrainingHeading} />
          </h2>
        </div>

        <div className="mt-8 md:mt-12">
          <DashedLine orientation="horizontal" className="opacity-30" />

          <motion.div
            className="relative flex max-md:flex-col lg:items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.12 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {topItems.map((item, i) => (
              <Item key={i} item={item} isLast={i === topItems.length - 1} />
            ))}
          </motion.div>

          <DashedLine orientation="horizontal" className="opacity-30" />

          <div
            className="my-24 flex flex-col items-center justify-center gap-6 text-center lg:my-32 lg:items-start lg:text-left"
            id="facilities"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-primary text-[10px] font-bold tracking-[0.2em] uppercase"
            >
              Facilities
            </motion.div>
            <h2 className="">
              <SplitReveal text={FEATURE_SECTIONS.facilitiesHeading} />
            </h2>
          </div>

          <motion.div
            className="relative grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.08 } },
            }}
          >
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                isLast={i === bottomItems.length - 1}
                className="md:pb-0"
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-text-muted font-heading mt-16 text-center text-sm font-bold tracking-widest"
          >
            "{FEATURE_SECTIONS.facilitiesFootnote}"
          </motion.p>
        </div>

        <DashedLine orientation="horizontal" className="mt-16 opacity-30" />
      </div>
    </section>
  );
};

interface ItemProps {
  item: SectionItem;
  isLast?: boolean;
  className?: string;
}

const Item = ({ item, isLast, className }: ItemProps) => {
  return (
    <motion.div
      variants={motionItem}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.12 }}
      className={cn(
        "relative flex flex-col items-center justify-between px-0 py-10 md:px-8",
        className,
        item.className,
      )}
    >
      {(item.title || item.description) && (
        <div className="title-container mb-8 text-center">
          <h3 className="inline text-2xl font-bold">{item.title} </h3>
          <span className="text-text-muted text-base leading-relaxed">
            {" "}
            {item.description}
          </span>
        </div>
      )}

      {item.listItems && (
        <ul className="text-text-muted mb-10 space-y-3 text-xs font-bold tracking-widest uppercase">
          {item.listItems.map((listItem) => (
            <li key={listItem} className="flex items-center gap-3">
              <DumbbellIcon className="text-primary size-4" />
              {listItem}
            </li>
          ))}
        </ul>
      )}

      {item.cta && (
        <div className="mb-4">
          <CTA id="personalTraining" />
        </div>
      )}

      {/* {item.fade.includes("bottom") && (
                <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
            )} */}
      {item.images.length > 4 ? (
        <div className="relative overflow-hidden">
          <div className="flex flex-col gap-5">
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-video size-16 place-items-center rounded-2xl p-2 lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-cover object-left-top"
                  />
                  <div className="from-muted/80 absolute inset-y-0 right-0 z-10 w-16 bg-linear-to-l to-transparent" />
                </div>
              ))}
            </div>
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <div
                  key={j}
                  className="bg-background grid aspect-square size-16 place-items-center rounded-2xl lg:size-20"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="object-contain object-left-top"
                  />
                  <div className="from-muted absolute inset-y-0 bottom-0 left-0 z-10 w-14 bg-linear-to-r to-transparent" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : item.images.length > 0 ? (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <Image
              key={j}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="aspect-[9/16] rounded-2xl object-cover object-left-top"
            />
          ))}
        </div>
      ) : null}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </motion.div>
  );
};
