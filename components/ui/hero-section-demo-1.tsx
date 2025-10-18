"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HeadingTextWrapper, NormalTextWrapper, RandomTextWrapper, TaglineTextWrapper } from "../wrappers/text-wrapper";
import { BackgroundGradient } from "./background-gradient";
import { GlowingEffectDemoSecond } from "./glowing-effect-demo";


export default function HeroSectionOne() {

  return (
    <div className=" mx-auto flex max-w-8xl flex-col items-center justify-center my-10">
      {/* <Navbar /> */}
      {/* <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div> */}
      <div>
        <Image
          height={500}
          width={500}
          src="/profile-pic.jpg"
          alt="udays-pic"
          className=" mt-10 h-60 w-60 md:h-72 md:w-72 rounded-full border-2 border-white object-cover object-top  "
        />
      </div>
      <div className=" grid auto-rows-auto px-4 py-5 md:py-10 gap-y-8">
        <HeadingTextWrapper className=" mx-auto max-w-4xl md:text-4xl ">
          {"Hello I'm Dr. Uday Kumar"
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                  ease: "easeInOut",
                }}
                className="mr-2 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </HeadingTextWrapper>
        <div className=" md:row-span-2">
          <HeadingTextWrapper className=" relative z-10 mx-auto max-w-8xl text-3xl">
            {"Transforming Smiles with Expertise & Compassion"
              .split(" ")
              .map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.2,
                    ease: "easeInOut",
                  }}
                  className="mr-2 inline-block"
                >
                  {word}
                </motion.span>
              ))}
          </HeadingTextWrapper>
          <TaglineTextWrapper className=" relative z-10 mx-auto max-w-4xl md:max-w-3xl lg:max-w-4xl py-4 text-sm">
            <motion.p
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 0.3,
                delay: 0.8,
              }}
            >
              Dr. Uday Kumar Alle – Specialist Orthodontist with 20+ years of experience in creating confident smiles across UAE, Saudi Arabia, and India.
            </motion.p>
          </TaglineTextWrapper>
        </div>

        {/* Future - Buttons */}
        {/* <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 flex flex-wrap items-center justify-center gap-4"
        >
          <button className="w-60 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Explore Now
          </button>
          <button className="w-60 transform rounded-lg border border-gray-300 bg-white px-6 py-2 font-medium text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-100 dark:border-gray-700 dark:bg-black dark:text-white dark:hover:bg-gray-900">
            Contact Support
          </button>
        </motion.div> */}
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20  "
        >
        <BackgroundGradient className="rounded-[22px] md:p-4 bg-white dark:bg-zinc-900"> 
          <div className="  p-4 w-full overflow-hidden flex flex-col gap-5 md:gap-10">
            <div>
              <HeadingTextWrapper className="">
                Affiliations & Accreditations
              </HeadingTextWrapper>
              <TaglineTextWrapper className="">
                Memberships and recognition across leading orthodontic bodies and international journals.
              </TaglineTextWrapper>
            </div>
            <div className=" flex flex-col gap-5">
              <NormalTextWrapper>
                I am Dr. Uday Kumar Alle, a Specialist Orthodontist dedicated to delivering high-quality orthodontic care with compassion and precision. With over two decades of international experience across the UAE, Saudi Arabia, and India, I specialize in transforming smiles through advanced orthodontic techniques including Invisalign, self-ligating brackets, and surgical orthodontics. My focus is on patient comfort, communication, and achieving life-changing results.
              </NormalTextWrapper>
              <GlowingEffectDemoSecond />
            </div>
          </div>
        </BackgroundGradient>

        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">

        {/* Future - Logo */}
        {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" /> */}
        <Image
          height={500}
          width={500}
          src="/logo.png"
          alt="udays-logo"
          className="size-9 +"
        />
        {/* <RandomTextWrapper className="text-base font-bold md:text-2xl">Uday&apos;s Portfolio</RandomTextWrapper> */}
      </div>
    </nav>
  );
};
