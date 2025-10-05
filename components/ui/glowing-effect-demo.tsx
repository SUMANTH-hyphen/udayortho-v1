"use client";

// import { Box, Lock, Search, Settings, Sparkles } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import Image from "next/image";
import { RandomTextWrapper } from "../wrappers/text-wrapper";

// const affiliations = [
//     {
//         title: "Peer Reviewer – Cureus Journal",
//         icon: "/journal-book.png", // journal/reviewer
//     },
//     {
//         title: "Member – Indian Orthodontic Society",
//         icon: "/teeth.png", // dental/orthodontics
//     },
//     {
//         title: "Fellow – World Federation of Orthodontists",
//         icon: "/globe.png", // global membership
//     },
//     {
//         title: "Member – American Association of Orthodontists",
//         icon: "/usa-flag.png", // or flag-usa (FontAwesome)
//     },
//     {
//         title: "Member – International Orthodontics Foundation",
//         icon: "/network.png", // connections/global foundation
//     },
//     {
//         title: "Member – Emirates Orthodontic Society",
//         icon: "/landmark.png", // regional society
//     },
//     {
//         title: "Member – Indian Dental Association",
//         icon: "/hospital.png", // general dental/medical
//     },
//     {
//         title: "Member – Saudi Orthodontic Society",
//         icon: "/star.png", // recognition/society
//     },
// ];


export function GlowingEffectDemoSecond() {
    return (
        <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:grid-rows-3">
  {/* Row 1 */}
  <GridItem
    area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
    icon={<Image src="/teeth.png" alt="Indian Orthodontic Society" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – Indian Orthodontic Society"
    description="Advancing orthodontics in India through research and community collaboration."
  />

  <GridItem
    area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
    icon={<Image src="/landmark.png" alt="Emirates Orthodontic Society" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – Emirates Orthodontic Society"
    description="Supporting orthodontic education and clinical excellence across the Emirates."
  />

  {/* Row 2 */}
  <GridItem
    area="md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]"
    icon={<Image src="/usa-flag.png" alt="American Association of Orthodontists" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – American Association of Orthodontists"
    description="Engaging with global peers to adopt innovative orthodontic practices."
  />

  <GridItem
    area="md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/7]"
    icon={<Image src="/network.png" alt="International Orthodontics Foundation" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – International Orthodontics Foundation"
    description="Collaborating internationally for research, education, and dental innovation."
  />

  {/* Row 3 */}
  <GridItem
    area="md:[grid-area:3/1/4/13] xl:[grid-area:2/7/3/13]"
    icon={<Image src="/globe.png" alt="World Federation of Orthodontists" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Fellow – World Federation of Orthodontists"
    description="Recognized fellowship for advancing orthodontic science and patient care globally."
  />

  {/* Row 4 */}
  <GridItem
    area="md:[grid-area:4/1/5/5] xl:[grid-area:3/1/4/5]"
    icon={<Image src="/star.png" alt="Saudi Orthodontic Society" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – Saudi Orthodontic Society"
    description="Contributing to orthodontic progress through training and professional growth."
  />

  <GridItem
    area="md:[grid-area:4/5/5/9] xl:[grid-area:3/5/4/9]"
    icon={<Image src="/hospital.png" alt="Indian Dental Association" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Member – Indian Dental Association"
    description="Supporting dental health initiatives and promoting oral healthcare standards."
  />

  <GridItem
    area="md:[grid-area:4/9/5/13] xl:[grid-area:3/9/4/13]"
    icon={<Image src="/journal-book.png" alt="Cureus Journal" width={100} height={100} className="h-6 w-6 text-black dark:text-neutral-400" />}
    title="Peer Reviewer – Cureus Journal"
    description="Reviewing scientific orthodontic manuscripts for quality and academic rigor."
  />
</ul>

    );
}



interface GridItemProps {
    area: string;
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
    return (
        <li className={`min-h-[14rem] list-none ${area}`}>
            <div className="relative h-full rounded-2xl border-2 p-2 md:rounded-3xl md:p-3 lg:p-0">
                <GlowingEffect
                    blur={0}
                    borderWidth={3}
                    spread={80}
                    glow={true}
                    disabled={false}
                    proximity={64}
                    inactiveZone={0.01}
                />
                <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                    <div className="relative flex flex-1 flex-col justify-between gap-3">
                        <div className="w-fit rounded-lg border border-gray-600 p-2">
                            {icon}
                        </div>
                        <div className="space-y-3">
                            <RandomTextWrapper className="-tracking-4 pt-0.5 font-sans text-xl/[1.375rem] font-semibold text-balance text-black md:text-2xl/[1.875rem] dark:text-white">
                                {title}
                            </RandomTextWrapper>
                            <RandomTextWrapper className="font-sans text-sm/[1.125rem] text-black md:text-base/[1.375rem] dark:text-neutral-400 [&_b]:md:font-semibold [&_strong]:md:font-semibold">
                                {description}
                            </RandomTextWrapper>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
};
