"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";
import Image from "next/image";
import { RandomTextWrapper } from "../wrappers/text-wrapper";

export function WobbleCardDemo() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full">
            <WobbleCard
                key={1}
                containerClassName="relative col-span-1 lg:col-span-3 bg-white border-2 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] overflow-hidden"
            >
                {/* Text Section */}
                <div className="relative z-20 max-w-sm md:max-w-lg">
                    <RandomTextWrapper className="text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em]">
                        Inverted Orthodontic Retraction Loops with Occlusal Application
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left text-base/6">
                        Innovative inverted retraction loops delivering precise occlusal-direction force for efficient orthodontic space closure.
                    </RandomTextWrapper>
                </div>

                {/* Background Image */}
                <Image
                    src="/BW1.jpg"
                    alt=""
                    height={500}
                    width={500}
                    className="absolute -right-10 md:-right-0 -bottom-16 md:-bottom-20 lg:-bottom-15 object-contain rounded-2xl z-10 opacity-90"
                />
            </WobbleCard>

            <WobbleCard key={2} containerClassName="col-span-1 bg-blue-900 min-h-[200px]">
                <RandomTextWrapper className="max-w-80  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                    Orthodontic Auxiliary Bracket
                </RandomTextWrapper>
                <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                    Smart auxiliary bracket that designed to simplify complex mechanics and deliver greater control, flexibility, and efficiency in orthodontic treatment.
                </RandomTextWrapper>
            </WobbleCard>
            <WobbleCard key={3} containerClassName="col-span-1 lg:col-span-2 bg-white border-2 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <RandomTextWrapper className="max-w-sm md:max-w-lg  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em]">
                        Multi-Purpose Orthodontic Tweezer
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 ">
                        A smart, dual-action orthodontic tweezer that simplifies treatment by merging precision, versatility, and ergonomic design into one compact instrument.
                    </RandomTextWrapper>
                </div>
                <Image
                    src="/Group 11.png"
                    alt=""
                    height={400}
                    width={400}
                    className="absolute -right-10 md:-right-[0%] lg:-right-[14%] -bottom-20 md:-bottom-10 lg:-bottom-20 object-contain rounded-2xl"
                />
            </WobbleCard>
            <WobbleCard key={4} containerClassName="col-span-1 lg:col-span-2 bg-white border-2 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <RandomTextWrapper className="max-w-sm md:max-w-lg  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] ">
                        Orthodontic Archwire Bending Device
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 ">
                        Innovative orthodontic archwire bending device delivering accuracy, control, and comfort in every bend.
                    </RandomTextWrapper>
                </div>
                {/* <Image 
                    src="/BW4.jpg"
                    alt=""
                    height={350}
                    width={350}
                    className="absolute -right-35 -bottom-0 object-contain rounded-2xl"
                /> */}
            </WobbleCard>
            <WobbleCard key={5} containerClassName="col-span-1 bg-pink-800 min-h-[200px] lg:min-h-[600px] xl:min-h-[300px]">
                <div className="max-w-sm">
                    <RandomTextWrapper className="max-w-sm md:max-w-lg  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Hygienic Orthodontic Bracket
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        A next-generation orthodontic bracket integrating hygiene-focused design and advanced materials to keep braces cleaner and patients healthier.
                    </RandomTextWrapper>
                </div>
            </WobbleCard>
            <WobbleCard
                key={6}
                containerClassName="relative col-span-1 lg:col-span-3 bg-white border-2 min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] overflow-hidden"
            >
                {/* Text Section */}
                <div className="relative z-20 max-w-sm md:max-w-lg">
                    <RandomTextWrapper className="text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em]">
                        Self-Ligating Orthodontic Accessory Eyelet Bracket
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left text-base/6">
                        A next-generation self-ligating orthodontic eyelet that merges convenience, precision, and reduced friction for enhanced treatment efficiency.
                    </RandomTextWrapper>
                </div>

                {/* Background Image */}
                <Image
                    src="/BW4.jpg"
                    alt=""
                    height={500}
                    width={500}
                    className="absolute -right-10 lg:right-0 -bottom-22 md:-bottom-15 object-contain rounded-2xl z-10 opacity-90"
                />
            </WobbleCard>

            <WobbleCard
                key={7}
                containerClassName="relative col-span-1 lg:col-span-2 bg-white border-2 h-full min-h-[500px] lg:min-h-[200px] overflow-hidden"
                className=""
            >
                {/* Text Content */}
                <div className="relative z-20 max-w-xs">
                    <RandomTextWrapper className="text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em]">
                        Orthodontic Archwire Distal Bending Device
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 text-left text-base/6">
                        Advanced distal bending device delivering smooth, precise terminal wire bends with comfort, control, and least effort.
                    </RandomTextWrapper>
                </div>

                {/* Background Image */}
                <Image
                    src="/BW2.jpg"
                    alt=""
                    height={400}
                    width={400}
                    className="absolute -right-10 lg:-right-15 -bottom-15 object-contain rounded-2xl z-10 opacity-90"
                />
            </WobbleCard>

            <WobbleCard key={8} containerClassName="col-span-1 ">
                <div className="max-w-sm">
                    <RandomTextWrapper className="max-w-sm md:max-w-lg  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Orthodontic Accessory Bracket
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        A smart orthodontic accessory bracket that expands treatment possibilities with reliable auxiliary attachment and streamlined design.
                    </RandomTextWrapper>
                </div>
            </WobbleCard>
            <WobbleCard key={9} containerClassName="col-span-1 bg-amber-700 ">
                <div className="max-w-sm">
                    <RandomTextWrapper className="max-w-sm md:max-w-lg  text-left text-balance text-lg md:text-2xl lg:text-3xl font-semibold tracking-[-0.015em] text-white">
                        Orthodontic Retraction Loop
                    </RandomTextWrapper>
                    <RandomTextWrapper className="mt-4 max-w-[26rem] text-left  text-base/6 text-neutral-200">
                        An advanced retraction loop system redefining space closure mechanics through precision force control and ergonomic wire design.
                    </RandomTextWrapper>
                </div>
            </WobbleCard>
        </div>
    );
}
