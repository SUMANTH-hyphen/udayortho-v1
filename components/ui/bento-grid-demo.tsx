import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";
import { header } from "motion/react-client";

const Skeleton2 = ({ imgKey }: { imgKey: string }) => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl overflow-hidden">
    <Image
      src={`/patent${imgKey}.jpg`}
      alt={`patent image ${imgKey}`}
      height={300}
      width={500}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
    />
    {/* ✅ Tint overlay */}
    <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
  </div>
);


const items = [
  {
    title: "Inverted Orthodontic Retraction Loops with Occlusal Application",
    description: "Innovative inverted retraction loops delivering precise occlusal-direction force for efficient orthodontic space closure.",
    header: <Skeleton2 imgKey="1" />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Multi-Purpose Orthodontic Tweezer",
    description: "A smart, dual-action orthodontic tweezer that simplifies treatment by merging precision, versatility, and ergonomic design into one compact instrument.",
    header: <Skeleton2 imgKey="2" />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orthodontic Retraction Loop",
    description: "An advanced retraction loop system redefining space closure mechanics through precision force control and ergonomic wire design.",
    header: <Skeleton2 imgKey="3" />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Self-Ligating Orthodontic Accessory Eyelet Bracket",
    description: "A next-generation self-ligating orthodontic eyelet that merges convenience, precision, and reduced friction for enhanced treatment efficiency.",
    header: <Skeleton2 imgKey="9" />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orthodontic Accessory Bracket",
    description: "A smart orthodontic accessory bracket that expands treatment possibilities with reliable auxiliary attachment and streamlined design.",
    header: <Skeleton2 imgKey="5" />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orthodontic Archwire Bending Device",
    description: "Innovative orthodontic archwire bending device delivering accuracy, control, and comfort in every bend.",
    header: <Skeleton2 imgKey="6" />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orthodontic Archwire Distal Bending Device",
    description: "Advanced distal bending device delivering smooth, precise terminal wire bends with comfort, control, and least effort.",
    header: <Skeleton2 imgKey="7" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Hygienic Orthodontic Bracket",
    description: "A next-generation orthodontic bracket integrating hygiene-focused design and advanced materials to keep braces cleaner and patients healthier.",
    header: <Skeleton2 imgKey="8" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Orthodontic Auxiliary Bracket",
    description: "Smart auxiliary bracket that designed to simplify complex mechanics and deliver greater control, flexibility, and efficiency in orthodontic treatment.",
    header: <Skeleton2 imgKey="4" />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];


export function BentoGridDemo() {
  return (
    <BentoGrid className="max-w-450 mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          // optional: make some cards larger for visual balance
          // className={
          //   i === 0 || i === 3 || i === 8 ? "md:col-span-2" : ""
          // }
        />
      ))}
    </BentoGrid>
  );
}

const Skeleton = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br">
    <Image
      src="/patent1.jpg"
      alt=""
      height={300}
      width={500}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
    />
    <div className="absolute inset-0 bg-black/30 rounded-xl" /> {/* tint overlay */}
  </div>
);

const Skeleton1 = () => (
  <div className="relative flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br">
    <Image
      src="/patent1.jpg"
      alt=""
      height={300}
      width={500}
      className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl object-cover"
    />
    <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" /> {/* tint overlay */}
  </div>
);
