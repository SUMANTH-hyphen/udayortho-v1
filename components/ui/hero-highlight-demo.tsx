"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "../ui/hero-highlight";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <motion.h1
        initial={{
          opacity: 0,
          y: 30,
        }}
        whileInView={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 0.6,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        <Highlight className="text-black dark:text-white">
            Innovations
        </Highlight>
        &nbsp;shaping the future of orthodontics
      </motion.h1>
    </HeroHighlight>
  );
}


// "use client";
// import { motion } from "motion/react";
// import { HeroHighlight, Highlight } from "../ui/hero-highlight";

// export function HeroHighlightDemo() {
//   return (
//     <HeroHighlight>
//       <motion.h1
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         viewport={{ once: true, amount: 0.4 }} // triggers when 40% is visible
//         transition={{
//           duration: 0.6,
//           ease: [0.4, 0, 0.2, 1],
//         }}
//         className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto"
//       >
//         With insomnia, nothing&apos;s real. Everything is far away. Everything
//         is a{" "}
//         <Highlight className="text-black dark:text-white">
//           copy, of a copy, of a copy.
//         </Highlight>
//       </motion.h1>
//     </HeroHighlight>
//   );
// }
