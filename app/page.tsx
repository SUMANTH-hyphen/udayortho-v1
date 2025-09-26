import { CanvasRevealEffectDemo } from "@/components/ui/canvas-reveal-demo";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { FeaturesSectionDemo1 } from "@/components/ui/features-section-demo-1";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";  
import HeroSectionOne from "@/components/ui/hero-section-demo-1";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { Timeline } from "@/components/ui/timeline";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";
import ScreenWrapper from "@/components/wrappers/screen-wrapper";
import { HeadingTextWrapper, NormalTextWrapper } from "@/components/wrappers/text-wrapper";
// import { User, Settings, HomeIcon 0} from "lucide-react"
import React from "react";

const accomplishments = [
  {
    key: "0",
    quote: "Honored with the Recognition & Appreciation of Academic Excellence for contributing to the growth and advancement of the dental community.",
    name: "UAE Telugu Doctors Group",
    title: "April 2025, Dubai, UAE"
  },
  {
    key: "1",
    quote: "Awarded 2nd Place in Orthodontic Best Case (Children), a recognition of clinical precision and dedication to delivering outstanding results for young patients.",
    name: "CAPP (Centre for Advanced Professional Practices, MENA Region)",
    title: "November 2024, Dubai, UAE"
  },
  {
    key: "2",
    quote: "Received the Certification of Appreciation for achieving the Highest Revenue, improving both financial and operational efficiency across the hospital system.",
    name: "Al Dhafra Hospitals",
    title: "2017, UAE"
  },
  {
    key: "3",
    quote: "Recognized as Distinguished Employee for exemplary service, dedication, and consistent commitment to patient-centered care.",
    name: "Madinat Zayed Hospital",
    title: "Q3 2017, UAE"
  },
  {
    key: "4",
    quote: "Honored with the Shokran Award for demonstrating high productivity and unwavering dedication to delivering quality orthodontic care.",
    name: "Madinat Zayed Hospital",
    title: "Q2 2016, UAE"
  },
  {
    key: "5",
    quote: "Recognized once again as Distinguished Employee for outstanding clinical service and patient care excellence.",
    name: "Madinat Zayed Hospital",
    title: "Q3 2015, UAE"
  }
]

// const icons = [
//   {
//     title: "Home",
//     icon: <HomeIcon className="w-5 h-5" />,
//     href: "/",
//   },
//   {
//     title: "Profile",
//     icon: <User className="w-5 h-5" />,
//     href: "/profile",
//   },
//   {
//     title: "Settings",
//     icon: <Settings className="w-5 h-5" />,
//     href: "/settings",
//   },
// ]

const experience = [
  {
    key: "0",
    title: "Feb 2024 - Present",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Orthodontist
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          SEHA, Ghayathi Hospital, Abu Dhabi, UAE
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Providing advanced orthodontic treatments with a focus on patient-centered care and innovative solutions for complex cases.
        </p>
      </div>
    ),
  },
  {
    key: "1",
    title: "Mar 2021 - Feb 2024",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Orthodontist
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Phoenix Hospital, Abu Dhabi, UAE
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Specialized in early orthodontics, Invisalign, and self-ligating systems while mentoring young dental professionals.
        </p>
      </div>
    ),
  },
  {
    key: "2",
    title: "Jun 2016 - Nov 2020",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Orthodontist
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Al Dhafra Hospitals, Madinat Zayed, UAE
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Led orthodontic services across the region, improving efficiency and achieving recognition for clinical excellence.
        </p>
      </div>
    ),
  },
  {
    key: "3",
    title: "Jan 2012 - Feb 2015",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Orthodontist
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Internal Security Hospital, Dammam, Saudi Arabia
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Delivered orthodontic care in a multidisciplinary medical setting, managing both routine and complex dental cases.
        </p>
      </div>
    ),
  },
  {
    key: "4",
    title: "Nov 2004 - Nov 2011",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Specialist Orthodontist
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Jagadamba Hospital, Hyderabad, India
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Began independent orthodontic practice, managing diverse patient cases and building strong clinical foundations.
        </p>
      </div>
    ),
  },
  {
    key: "5",
    title: "Apr 2001 - Mar 2004",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Master of Dental Surgery (MDS) – Orthodontics & Dentofacial Orthopedics
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          Meenakshi Ammal Dental College, M.G.R. Medical University, Chennai, India
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Advanced specialization in orthodontics with a focus on dentofacial growth, treatment mechanics, and clinical research.
        </p>
      </div>
    ),
  },
  {
    key: "6",
    title: "Sep 1995 - Sep 1999",
    content: (
      <div>
        <p className="mb-1 md:mb-2 text-2xl md:text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
          Bachelor of Dental Surgery (BDS) – Dentistry
        </p>
        <p className="mb-2 md:mb-4 text-sm font-medium text-neutral-500 dark:text-neutral-300">
          MR Ambedkar Dental College, Bangalore University, Bangalore, India
        </p>
        <p className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Comprehensive foundation in dental sciences, preventive dentistry, and clinical practice.
        </p>
      </div>
    ),
  },
];

const patents = [
  {
    title: "Orthodontic Accessory Bracket",
    description: "Indian Design Patent pending · August 2025",
    link: "",
  },
  {
    title: "Self-Ligating Orthodontic Accessory Eyelet Bracket",
    description: "Indian Utility and Design Patent pending · August 2025",
    link: "",
  },
  {
    title: "Orthodontic Archwire Bending Device",
    description: "Indian Utility and Design Patent pending · August 2025",
    link: "",
  },
  {
    title: "Multi-Purpose Orthodontic Tweezer",
    description: "Indian Design Patent pending · July 2025",
    link: "",
  },
  {
    title: "Orthodontic Retraction Loop",
    description: "Indian Design Patent pending · July 2025",
    link: "",
  },
  {
    title: "Inverted Orthodontic Retraction Loops with Occlusal Application",
    description: "UK Design Patent Granted · June 2025",
    link: "",
  },
];

const presentationsData = [
  {
    key: "0",
    quote: "Unlock the Power of Self-Ligating brackets SEHA, Al Dhafra Hospitals, Ghayathi, UAE, February 2025.",
    name: "SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "February 2025"
  },
  {
    key: "1",
    quote: "Interceptive Orthodontics Facilitating Permanent Maxillary Canine Eruption, ADH DENTAL SYMPOSIUM 2024, SEHA, Al Dhafra Hospitals, Ghayathi, UAE, August 2024.",
    name: "ADH DENTAL SYMPOSIUM 2024, SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "August 2024"
  },
  {
    key: "2",
    quote: "TMD & Orthodontics. SEHA, Al Dhafra Hospitals, Ghayathi, UAE, August 2024.",
    name: "SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "August 2024"
  },
  {
    key: "3",
    quote: "Self-Ligating Brackets in Orthodontics. Phoenix Hospital, Abu Dhabi, UAE, April 2023.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "April 2023"
  },
  {
    key: "4",
    quote: "Benefits of Early Orthodontics. Phoenix Hospital, Abu Dhabi, UAE, May 2022.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "May 2022"
  },
  {
    key: "5",
    quote: "Age Limit for Orthodontics. Phoenix Hospital, Abu Dhabi, UAE, September 2021.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "September 2021"
  },
  {
    key: "6",
    quote: "Management of unerupted maxillary incisor. Al Dhafra Dental Symposium at Madinat Zayed, UAE, September 2019.",
    name: "Al Dhafra Dental Symposium, Madinat Zayed, UAE",
    title: "September 2019"
  },
  {
    key: "7",
    quote: "Serial Extractions. At Madinat Zayed Dental Symposium, Madinat Zayed, UAE, October 2018.",
    name: "Madinat Zayed Dental Symposium, Madinat Zayed, UAE",
    title: "October 2018"
  },
  {
    key: "8",
    quote: "Malocclusion associated Syndromes. At Madinat Zayed Dental Symposium, Madinat Zayed, UAE, April 2017.",
    name: "Madinat Zayed Dental Symposium, Madinat Zayed, UAE",
    title: "April 2017"
  },
  {
    key: "9",
    quote: "Comparison of PG canine retraction spring with modified PG canine retraction spring. At 38th Indian Orthodontic Conference, Coimbatore, India, October 2003. (National level).",
    name: "38th Indian Orthodontic Conference, Coimbatore, India",
    title: "October 2003"
  },
  {
    key: "10",
    quote: "Symbiosis. (An approach to multi-specialty dentistry). At Tamilnadu State Dental Conference, Chennai, India, December 2001.",
    name: "Tamilnadu State Dental Conference, Chennai, India",
    title: "December 2001"
  },
];


export default function Home() {
  return (
    <div className="">
      <main className="">
        <HeroSectionOne />


        <ScreenWrapper className="relative w-full overflow-clip">
          <Timeline data={experience} />
        </ScreenWrapper>


        <ScreenWrapper id="skills#5" className=" flex flex-col justify-end px-3 ">
          <HeadingTextWrapper className=" text-3xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-start md:text-center mt-10 py-10 md:mt-32 md:py-20 ">
            Skills and expertise to transform smiles with care
          </HeadingTextWrapper>
          <FeaturesSectionDemo />
        </ScreenWrapper>


        <MaxWidthWrapper className="flex flex-col items-center w-full gap-10 my-20 md:gap-16 md:my-32 ">
          <HeadingTextWrapper className="text-2xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-center" >
            &quot;Recognitions that celebrate dedication, innovation, and patient care.&quot;
          </HeadingTextWrapper>
          <div className="relative w-full max-w-full overflow-visible">
            {/* Optional: fade effect overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <InfiniteMovingCards
              items={accomplishments}
              direction="right"
              speed="slow"
              className="relative"
            />
          </div>
        </MaxWidthWrapper>


        <MaxWidthWrapper className=" md:grid auto-rows-auto lg:flex lg:flex-col items-center justify-evenly gap-10 my-20 md:gap-12 md:my-0  ">
          <div>
            <HeadingTextWrapper className=" mb-3 text-2xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-center" >
              Publications in orthodontic science
            </HeadingTextWrapper>
            <NormalTextWrapper className=" text-center text-md max-w-8xl lg:text-2xl text-slate-700 dark:text-slate-300">
              Contributing knowledge to shape the future of orthodontics
            </NormalTextWrapper>
          </div>
          <CanvasRevealEffectDemo />
        </MaxWidthWrapper>


        <ScreenWrapper className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col items-center justify-center">
          <HeadingTextWrapper className=" md:mb-5 text-2xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-center">
            Innovations shaping the future of orthodontics
          </HeadingTextWrapper>
          <HoverEffect items={patents} />
        </ScreenWrapper>


        <MaxWidthWrapper className="flex flex-col items-center w-full gap-10 my-20 md:gap-16 md:my-32 ">
          <HeadingTextWrapper className="text-2xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-center" >
            Fellowships that recognize excellence in orthodontics
          </HeadingTextWrapper>
          <FeaturesSectionDemo1 />
        </MaxWidthWrapper>

        <MaxWidthWrapper className="flex flex-col items-center w-full gap-10 my-20 md:gap-16 md:my-32 ">
          <HeadingTextWrapper className="text-2xl font-semibold md:text-3xl lg:font-bold lg:text-5xl text-slate-700 dark:text-slate-300 text-center" >
            Presentations
          </HeadingTextWrapper>
          <div className="relative w-full max-w-full overflow-visible">
            {/* Optional: fade effect overlays */}
            <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white to-transparent pointer-events-none" />
            <InfiniteMovingCards
              items={presentationsData}
              direction="left"
              speed="slow"
              className="relative"
            />
          </div>
        </MaxWidthWrapper>

      </main>
      <footer className="">
        {/* <FloatingDock items={icons} desktopClassName="" mobileClassName="" /> */}
      </footer>
    </div>
  );
}
