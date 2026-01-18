// "use client";

// import { cn } from "@/lib/utils";
// import React from "react";
// import { motion } from "motion/react";

// export const BackgroundGradient = ({
//   children,
//   className,
//   containerClassName,
//   animate = true,
// }: {
//   children?: React.ReactNode;
//   className?: string;
//   containerClassName?: string;
//   animate?: boolean;
// }) => {
//   const variants = {
//     initial: {
//       backgroundPosition: "0 50%",
//     },
//     animate: {
//       backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
//     },
//   };
//   return (
//     <div className={cn("relative p-0.5 md:p-[4px] group", containerClassName)}>
//       <motion.div
//         variants={animate ? variants : undefined}
//         initial={animate ? "initial" : undefined}
//         animate={animate ? "animate" : undefined}
//         transition={
//           animate
//             ? {
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }
//             : undefined
//         }
//         style={{
//           backgroundSize: animate ? "400% 400%" : undefined,
//         }}
//         className={cn(
//           "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-sm md:blur-md  transition duration-500 will-change-transform",
//           " bg-[radial-gradient(circle_farthest-side_at_0_100%,#121345,transparent),radial-gradient(circle_farthest-side_at_100%_0,#535ef9,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8661d2,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#58C4DC)]"
//         )}
//       />
//       <motion.div
//         variants={animate ? variants : undefined}
//         initial={animate ? "initial" : undefined}
//         animate={animate ? "animate" : undefined}
//         transition={
//           animate
//             ? {
//                 duration: 5,
//                 repeat: Infinity,
//                 repeatType: "reverse",
//               }
//             : undefined
//         }
//         style={{
//           backgroundSize: animate ? "400% 400%" : undefined,
//         }}
//         className={cn(
//           "absolute inset-0 rounded-3xl z-[1] will-change-transform",
//           "bg-[radial-gradient(circle_farthest-side_at_0_100%,#121345,transparent),radial-gradient(circle_farthest-side_at_100%_0,#535ef9,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#8661d2,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#58C4DC)]"
//         )}
//       />

//       <div className={cn("relative z-10", className)}>{children}</div>
//     </div>
//   );
// };


"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import React from "react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  return (
    <div className={cn("relative overflow-hidden rounded-3xl border shadow-[0_0_20px_rgba(99,102,241,0.3)] ", containerClassName)}>
      {/* Subtle diagonal striped background */}
      <motion.div
        initial={{ backgroundPosition: "0 0" }}
        animate={
          animate
            ? { backgroundPosition: ["0 0", "10px 10px", "0 0"] }
            : undefined
        }
        transition={
          animate
            ? {
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut",
              }
            : undefined
        }
        className={cn(
          "absolute inset-0 opacity-60",
          "[background-image:linear-gradient(45deg,theme(colors.gray.300)_12.5%,transparent_12.5%,transparent_50%,theme(colors.gray.300)_50%,theme(colors.gray.300)_62.5%,transparent_62.5%,transparent_100%)]",
          "[background-size:6px_6px]",
          "bg-white dark:bg-neutral-950"
        )}
      />

      {/* Optional soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-tr from-white/60 via-transparent to-gray-100/40 dark:from-neutral-900/70 dark:via-transparent dark:to-neutral-800/60 z-[1]" />

      {/* Your content */}
      <div className={cn("relative z-[2]", className)}>{children}</div>
    </div>
  );
};
