"use client";
import React from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect";
import { RandomTextWrapper } from "../wrappers/text-wrapper";

export function CanvasRevealEffectDemo() {
  return (
    <>
      <div className="py-20 flex flex-col md:flex-row items-center justify-center bg-white dark:bg-black w-full gap-4 mx-auto px-8">
        <Card title="Published as a book chapter in IntechOpen Textbook, December 2023. This work introduces a structured approach to understanding and categorizing self-ligating bracket systems for orthodontic practice." icon={<CardIcon1 />}>
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-[#8661D2]"
          />
        </Card>

        {/* <Card title="Nisha is Munni" icon={<AceternityIcon />}>
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          
          <div className="absolute inset-0 [mask-image:radial-gradient(400px_at_center,white,transparent)] bg-black/50 dark:bg-black/90" />
        </Card> */}

        <Card title="Published in Cureus Journal of Medical Science (Springer Nature), July 2023. The article explores innovative methods to improve orthodontic extractions through interproximal reduction techniques." icon={<CardIcon2 />}>
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-[#121345]"
            colors={[[125, 211, 252]]}
          />
        </Card>

        <Card title="A Novel Appointment Protocol to Accelerate Orthodontic Treatment: A Case Report, published May 25, 2025 in the Cureus Journal of Medical Science, part of Springer Nature." icon={<CardIcon3 />}>
          <CanvasRevealEffect
            animationSpeed={4}
            containerClassName="bg-[#535EF9]"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </>
  );
}

const Card = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 h-[25rem] relative"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 items-center justify-center flex flex-col">
        <div className="text-center group-hover/canvas-card:-translate-y-1 group-hover/canvas-card:opacity-0 transition duration-200 w-full mx-auto flex items-center justify-center text-slate-700 text-2xl ">
          {icon}
        </div>
        <RandomTextWrapper className="dark:text-white text-xl opacity-0 group-hover/canvas-card:opacity-100 text-black w-full mx-auto flex items-center justify-center font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-4 transition duration-200">
          {title}
        </RandomTextWrapper>
        <RandomTextWrapper className=" text-xs font-medium text-slate-500 dark:text-slate-300 tracking-wide group-hover/canvas-card:-translate-y-1 group-hover/canvas-card:opacity-0 transition duration-200 border rounded-lg p-2 w-fit it  ">Hover to Reveal</RandomTextWrapper>
      </div>
    </div>
  );
};

const CardIcon1 = () => {
  return (
    <div>
        <RandomTextWrapper>Classification System for Self-Ligating Brackets</RandomTextWrapper>
    </div>
  );
};
const CardIcon2 = () => {
  return (
    <div>
        <RandomTextWrapper>Interproximal Reduction Facilitating Orthodontic Teeth Extraction</RandomTextWrapper>
    </div>
  );
};
const CardIcon3 = () => {
  return (
    <div>
        <RandomTextWrapper>A Novel Appointment protocol to Accelerate Orthodontic Treatment</RandomTextWrapper>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
