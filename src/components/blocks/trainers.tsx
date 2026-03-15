import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import { TRAINERS, TRAINERS_SECTION } from "@/lib/constants";

export const Trainers = () => {
    return (
        <section id={TRAINERS_SECTION.id} className="pb-28 lg:pb-32">
            <div className="container">
                <div className="space-y-4">
                    <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                        {TRAINERS_SECTION.heading}
                    </h2>
                    <p className="text-muted-foreground max-w-md leading-snug">
                        {TRAINERS_SECTION.subline}
                    </p>
                </div>

                <div className="relative mt-8 grid max-w-7xl gap-3 md:mt-12 md:grid-cols-3 lg:mt-20">
                    {TRAINERS.map((trainer, index) => (
                        <Card key={index} className="bg-muted h-full overflow-hidden border-none">
                            <CardContent className="flex h-full flex-col p-0">
                                <Image
                                    src={trainer.photo}
                                    alt={trainer.name}
                                    width={600}
                                    height={600}
                                    className="aspect-[2/1] w-full object-cover"
                                />
                                <div className="space-y-0.5 p-6">
                                    <div className="text-primary font-semibold">{trainer.name}</div>
                                    <div className="text-muted-foreground text-sm">
                                        {trainer.certification}
                                    </div>
                                    <div className="text-muted-foreground text-sm">
                                        {trainer.speciality}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};
