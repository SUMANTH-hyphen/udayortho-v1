"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: any;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative dark:bg-neutral-900 overflow-hidden h-[25rem] md:h-[25rem] lg:h-[31rem] w-full transition-all duration-500 ease-out transform",
        hovered === index && " md:scale-[1.06] z-10", // zoom effect on hover
        hovered !== null && hovered !== index && "md:blur-sm scale-[0.97]"
      )}
    >
      <Image
        height={500}
        width={500}
        src={card.src}
        alt={card.title}
        className="object-cover absolute inset-0"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/5 flex items-end py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      ></div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    // <div className="grid grid-cols-1 md:grid-cols-3 gap-3 lg:gap-5 max-w-6xl mx-auto w-full">
    //   {cards.map((card, index) => (
    //     <Card
    //       key={index}
    //       card={card}
    //       index={index}
    //       hovered={hovered}
    //       setHovered={setHovered}
    //     />
    //   ))}
    // </div>
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-5 max-w-6xl md:mx-auto w-full" >
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${index === 2 ? "col-span-1 justify-normal w-full md:col-span-2 md:justify-self-center md:w-1/2 lg:col-span-1 lg:justify-normal lg:w-full" : ""}`}
        >
          <Card
            card={card}
            index={index}
            hovered={hovered}
            setHovered={setHovered}
          />
        </div>
      ))}
    </div>

  );
}
