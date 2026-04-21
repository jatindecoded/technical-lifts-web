import Image from "next/image";

import { CTA } from "@/components/ui/cta";
import { ABOUT_SECTIONS, IMAGE_ASSETS } from "@/lib/constants";
import { cn } from "@/lib/utils";

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Left column: images → text */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[IMAGE_ASSETS.about[0], IMAGE_ASSETS.about[1]]}
          className="xl:-translate-x-10"
        />
        <TextSection section={ABOUT_SECTIONS[0]} />
      </div>

      {/* Right column: text → images */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection section={ABOUT_SECTIONS[1]} />
        <ImageSection
          images={[IMAGE_ASSETS.about[2], IMAGE_ASSETS.about[3]]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image src={image.src} alt={image.alt} fill className="object-cover" />
        </div>
      ))}
    </div>
  );
}

interface AboutSection {
  title: string;
  paragraphs: string[];
  cta?: { href: string; text: string };
}

interface TextSectionProps {
  section: AboutSection;
}

export function TextSection({ section }: TextSectionProps) {
  return (
    <div className="flex-1 space-y-4 md:space-y-6">
      <h2 className="text-foreground text-3xl font-heading font-bold tracking-tight md:text-4xl">
        {section.title}
      </h2>
      <div className="text-muted-foreground max-w-xl space-y-4 text-lg leading-relaxed">
        {section.paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {section.cta && (
        <div className="mt-8">
          <CTA id="bookContact" />
        </div>
      )}
    </div>
  );
}
