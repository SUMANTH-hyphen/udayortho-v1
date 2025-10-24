"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { HeadingTextWrapper, NormalTextWrapper, RandomTextWrapper, TaglineTextWrapper } from "../wrappers/text-wrapper";
import { BackgroundGradient } from "./background-gradient";
import { GlowingEffectDemoSecond } from "./glowing-effect-demo";
import ScreenWrapper from "../wrappers/screen-wrapper";
import { useEffect, useState } from "react";
import Link from "next/link";


export default function HeroSectionOne() {

  return (
    <ScreenWrapper id="/" className=" mx-auto flex max-w-8xl flex-col items-center justify-center pt-20 md:pt-0 lg:pt-20">
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
          className="  h-60 w-60 md:h-72 md:w-72 rounded-full border-2 border-white object-cover object-top  "
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


        {/* <motion.div
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

        </motion.div> */}
      </div>
    </ScreenWrapper>
  );
}


// export const Navbar = () => {
//   const [open, setOpen] = useState(false);
//   const [active, setActive] = useState<string>("home");

//   const navItems = [
//     "Patents",
//     "Recognitions",
//     "Books",
//     "Publications",
//     "Fellowships",
//     "Journey",
//     "Affiliations",
//     "Skills",
//     "Presentations",
//     "Gallery",
//   ];

//   // Scroll spy effect — highlight the section user is viewing
//   useEffect(() => {
//     const handleScroll = () => {
//       let current = "";
//       navItems.forEach((item) => {
//         const section = document.getElementById(item.toLowerCase());
//         if (section) {
//           const sectionTop = section.offsetTop - 80; // adjust offset for navbar height
//           if (window.scrollY >= sectionTop) {
//             current = item.toLowerCase();
//           }
//         }
//       });
//       setActive(current || "patents");
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navId = "site-nav";

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
//       <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
//         {/* Brand */}
//         <a
//           className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
//           href="/"
//           aria-label="Brand"
//         >
//           Uday's Portfolio
//         </a>

//         {/* Desktop links */}
//         <div className="hidden lg:flex lg:items-center lg:gap-6">
//           {navItems.map((item) => {
//             const id = `#${item.toLowerCase()}`;
//             const isActive = active === item.toLowerCase();
//             return (
//               <a
//                 key={item}
//                 href={id}
//                 className={`font-medium transition-colors duration-200 ${
//                   isActive
//                     ? "text-[#535EF9]"
//                     : "text-gray-600 hover:text-gray-400"
//                 }`}
//               >
//                 {item}
//               </a>
//             );
//           })}
//         </div>

//         {/* Mobile toggle */}
//         <div className="lg:hidden">
//           <button
//             type="button"
//             aria-controls={navId}
//             aria-expanded={open}
//             onClick={() => setOpen((s) => !s)}
//             className="relative inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
//           >
//             {/* Menu icon */}
//             <svg
//               className={`${open ? "hidden" : "block"} shrink-0`}
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden
//             >
//               <line x1="3" x2="21" y1="6" y2="6" />
//               <line x1="3" x2="21" y1="12" y2="12" />
//               <line x1="3" x2="21" y1="18" y2="18" />
//             </svg>

//             {/* Close icon */}
//             <svg
//               className={`${open ? "block" : "hidden"} shrink-0`}
//               xmlns="http://www.w3.org/2000/svg"
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth={2}
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               aria-hidden
//             >
//               <path d="M18 6L6 18" />
//               <path d="M6 6L18 18" />
//             </svg>

//             <span className="sr-only">Toggle navigation</span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile collapsible menu */}
//       <div
//         id={navId}
//         className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
//           open
//             ? "opacity-100 pointer-events-auto translate-y-0"
//             : "opacity-0 pointer-events-none -translate-y-2"
//         }`}
//         aria-hidden={!open}
//       >
//         <div className="flex flex-col gap-4 py-4 px-5 border-t border-gray-200">
//           {navItems.map((item) => {
//             const id = `#${item.toLowerCase()}`;
//             const isActive = active === item.toLowerCase();
//             return (
//               <a
//                 key={item}
//                 href={id}
//                 onClick={() => setOpen(false)}
//                 className={`font-medium transition-colors duration-200 ${
//                   isActive
//                     ? "text-[#535EF9]"
//                     : "text-gray-600 hover:text-gray-400"
//                 }`}
//               >
//                 {item}
//               </a>
//             );
//           })}
//         </div>
//       </div>
//     </nav>
//   );
// };


export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const navItems = [
    "Patents",
    "Recognitions",
    "Books",
    "Publications",
    "Fellowships",
    "Journey",
    "Affiliations",
    "Skills",
    "Presentations",
    "Gallery",
  ];

  // Scroll spy effect — highlight the section user is viewing
  useEffect(() => {
    const handleScroll = () => {
      let current = "";
      navItems.forEach((item) => {
        const section = document.getElementById(item.toLowerCase());
        if (section) {
          const sectionTop = section.offsetTop - 80; // adjust offset for navbar height
          if (window.scrollY >= sectionTop) {
            current = item.toLowerCase();
          }
        }
      });
      setActive(current || "patents");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navId = "site-nav";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-neutral-200">
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* ✅ Changed <a> → <Link> for Next.js compliance */}
        <Link
          href="/"
          className="flex-none text-xl font-semibold focus:outline-none focus:opacity-80"
          aria-label="Brand"
        >
          Uday's Portfolio
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          {navItems.map((item) => {
            const id = `#${item.toLowerCase()}`;
            const isActive = active === item.toLowerCase();
            return (
              <a
                key={item}
                href={id}
                className={`font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#535EF9]"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>

        {/* Mobile toggle */}
        <div className="lg:hidden">
          <button
            type="button"
            aria-controls={navId}
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="relative inline-flex items-center justify-center rounded-lg border border-gray-200 bg-white px-3 py-2 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
          >
            {/* Menu icon */}
            <svg
              className={`${open ? "hidden" : "block"} shrink-0`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>

            {/* Close icon */}
            <svg
              className={`${open ? "block" : "hidden"} shrink-0`}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M18 6L6 18" />
              <path d="M6 6L18 18" />
            </svg>

            <span className="sr-only">Toggle navigation</span>
          </button>
        </div>
      </div>

      {/* Mobile collapsible menu */}
      <div
        id={navId}
        className={`absolute left-0 top-full w-full bg-white shadow-lg transition-all duration-300 ease-in-out lg:hidden ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-2"
        }`}
        aria-hidden={!open}
      >
        <div className="flex flex-col gap-4 py-4 px-5 border-t border-gray-200">
          {navItems.map((item) => {
            const id = `#${item.toLowerCase()}`;
            const isActive = active === item.toLowerCase();
            return (
              <a
                key={item}
                href={id}
                onClick={() => setOpen(false)}
                className={`font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-[#535EF9]"
                    : "text-gray-600 hover:text-gray-400"
                }`}
              >
                {item}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};