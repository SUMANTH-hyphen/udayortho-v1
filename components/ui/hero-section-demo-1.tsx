"use client";

import { motion } from "motion/react";
import { OverlapCards } from "./overlap-cards";
import Image from "next/image";


export default function HeroSectionOne() {

  return (
    <div className=" mx-auto flex max-w-8xl flex-col items-center justify-center">
      <Navbar />
      <div className="absolute inset-y-0 left-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute top-0 h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-y-0 right-0 h-full w-px bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute h-40 w-px bg-gradient-to-b from-transparent via-blue-500 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px w-full bg-neutral-200/80 dark:bg-neutral-800/80">
        <div className="absolute mx-auto h-px w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
      </div>
      <div>
        <Image
          height={500}
          width={500}
          src="/uday-doodle.png"
          alt="udays-doodle"
          className=" !m-0 h-60 w-60 md:h-72 md:w-72 rounded-full border-2 border-white object-cover object-top !p-0 "
        />
      </div>
      <div className=" grid auto-rows-auto px-4 py-5 md:py-10 gap-y-8">
        <h1 className=" mx-auto max-w-4xl text-center text-2xl font-medium text-slate-700 md:text-3xl lg:text-5xl dark:text-slate-300">
          {"Hi i'm Uday Kumar"
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
        </h1>
        <div className=" md:row-span-2">
          <h1 className="relative z-10 mx-auto max-w-8xl text-center text-3xl font-semibold text-slate-700 md:text-4xl lg:font-bold lg:text-5xl dark:text-slate-300">
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
          </h1>
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
            className="relative z-10 mx-auto max-w-2xl py-4 text-center text-sm md:text-xl font-normal text-neutral-600 dark:text-neutral-400"
          >
            Dr. Uday Kumar Alle – Specialist Orthodontist with 20+ years of experience in creating confident smiles across UAE, Saudi Arabia, and India.
          </motion.p>
        </div>
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
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-3 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
          <div className="  p-5 w-full overflow-hidden flex flex-col gap-5 md:gap-10">
            <div>
              <p className=" text-center text-3xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700">
                Affiliations & Accreditations
              </p>
              <p className=" text-center text-md max-w-8xl text-gray-600 lg:text-xl">
                Memberships and recognition across leading orthodontic bodies and international journals.
              </p>
            </div>
            <div className=" flex flex-col gap-5">
              <p className=" text-start text-sm  md:text-md font-semibold text-slate-700">
                I am Dr. Uday Kumar Alle, a Specialist Orthodontist dedicated to delivering high-quality orthodontic care with compassion and precision. With over two decades of international experience across the UAE, Saudi Arabia, and India, I specialize in transforming smiles through advanced orthodontic techniques including Invisalign, self-ligating brackets, and surgical orthodontics. My focus is on patient comfort, communication, and achieving life-changing results.
              </p>
              <OverlapCards />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between border-t border-b border-neutral-200 px-4 py-4 dark:border-neutral-800">
      <div className="flex items-center gap-2">

        {/* <div className="size-7 rounded-full bg-gradient-to-br from-violet-500 to-pink-500" /> */}
        {/* <Image
          height={500}
          width={500}
          src="uday-doodle.png"
          alt="udays-doodle"
          className="size-9 rounded-full +"
        /> */}
        <h1 className="text-base font-bold md:text-2xl">Uday&apos;s Portfolio</h1>
      </div>
      {/* remove */}
      {/* <button className="w-24 transform rounded-lg bg-black px-6 py-2 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-gray-800 md:w-32 dark:bg-white dark:text-black dark:hover:bg-gray-200">
        Login
      </button> */}
    </nav>
  );
};
