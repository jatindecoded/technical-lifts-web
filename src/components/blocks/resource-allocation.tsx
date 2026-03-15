import Image from "next/image";
import Link from "next/link";

import { DumbbellIcon } from "lucide-react";

import { DashedLine } from "../dashed-line";

import { Button } from "@/components/ui/button";
import {
    FACILITIES,
    FEATURE_SECTIONS,
    IMAGE_ASSETS,
    PT_INCLUDES,
} from "@/lib/constants";
import { cn } from "@/lib/utils";

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
        title: FEATURE_SECTIONS.personalTrainingHeading,
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
            src: IMAGE_ASSETS.whoItsFor[index%2]?.src,
            alt: IMAGE_ASSETS.whoItsFor[index%2]?.alt,
            width: 495,
            height: 420,
        },
    ],
    className: "",
    fade: index % 2 === 0 ? ["bottom"] : [""],
}));

export const ResourceAllocation = () => {
    return (
        <section id="personal-training" className="overflow-hidden pb-28 lg:pb-32">
            <div className="">
                <h2 className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl">
                    {FEATURE_SECTIONS.personalTrainingHeading}
                </h2>

                <div className="mt-8 md:mt-12 lg:mt-20">
                    <DashedLine
                        orientation="horizontal"
                        className="container scale-x-105"
                    />

                    <div className="relative container flex max-md:flex-col">
                        {topItems.map((item, i) => (
                            <Item key={i} item={item} isLast={i === topItems.length - 1} />
                        ))}
                    </div>

                    <DashedLine
                        orientation="horizontal"
                        className="container max-w-7xl scale-x-110"
                    />

                    <h2
                        id="facilities"
                        className="container my-16 text-center text-3xl tracking-tight text-balance sm:text-4xl md:mt-12 md:text-5xl lg:mt-20 lg:text-6xl"
                    >
                        {FEATURE_SECTIONS.facilitiesHeading}
                    </h2>

                    <div className="relative container grid max-w-7xl md:grid-cols-3">
                        {bottomItems.map((item, i) => (
                            <Item
                                key={i}
                                item={item}
                                isLast={i === bottomItems.length - 1}
                                className="md:pb-0"
                            />
                        ))}
                    </div>

                    <p className="text-muted-foreground container text-lg m-6 text-center uppercase font-semibold font-heading tracking-wide">
                        "{FEATURE_SECTIONS.facilitiesFootnote}"
                    </p>
                </div>

                <DashedLine
                    orientation="horizontal"
                    className="container max-w-7xl scale-x-110"
                />
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
        <div
            className={cn(
                "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
                className,
                item.className,
            )}
        >
            {(item.title || item.description) && (
                <div className="title-container text-center mb-4">
                    <h3 className="inline font-semibold text-xl">{item.title} </h3>
                    <span className="text-muted-foreground"> {item.description}</span>
                </div>
            )}

            {item.listItems && (
                <ul className="text-muted-foreground mb-6 ml-4 list-disc space-y-2 uppercase text-sm font-semibold">
                    {item.listItems.map((listItem) => (
                        <ul key={listItem}><DumbbellIcon className="inline size-4 mx-2" />{listItem}</ul>
                    ))}
                </ul>
            )}

            {item.cta && (
                <div className="mb-4">
                    <Button variant="outline" className="shadow-md" asChild>
                        <Link href={item.cta.href}>{item.cta.label}</Link>
                    </Button>
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
                            className="object-cover aspect-video object-left-top rounded-2xl"
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
        </div>
    );
};
