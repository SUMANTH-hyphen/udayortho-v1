import { AppleCardsCarouselDemo } from "@/components/ui/apple-cards-demo";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { CanvasRevealEffectDemo } from "@/components/ui/canvas-reveal-demo";
import { FeaturesSectionDemo1 } from "@/components/ui/features-section-demo-1";
import FeaturesSectionDemo from "@/components/ui/features-section-demo-2";
import { FocusCardsDemo } from "@/components/ui/focus-cards-demo";
import GalleryDemo from "@/components/ui/gallery-demo";
import { GlowingEffectDemoSecond } from "@/components/ui/glowing-effect-demo";
import { Highlight } from "@/components/ui/hero-highlight";
import { HeroHighlightDemo } from "@/components/ui/hero-highlight-demo";
import HeroSectionOne, { Navbar } from "@/components/ui/hero-section-demo-1";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { AnimatedModalDemo } from "@/components/ui/popup-modal";
import { Timeline } from "@/components/ui/timeline";
import { WobbleCardDemo } from "@/components/ui/wobble-card-demo";
import MaxWidthWrapper from "@/components/wrappers/max-width-wrapper";
import ScreenWrapper from "@/components/wrappers/screen-wrapper";
import { HeadingTextWrapper, NormalTextWrapper, RandomTextWrapper, TaglineTextWrapper } from "@/components/wrappers/text-wrapper";
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin, IconBrandTwitter } from "@tabler/icons-react";
// import { User, Settings, HomeIcon 0} from "lucide-react"
import React from "react";

const experience = [
  {
    key: "0",
    title: "Feb 2024 - Present",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Specialist Orthodontist
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 italic text-sm font-medium text-neutral-500 dark:text-neutral-300">
          SEHA, Ghayathi Hospital, Abu Dhabi, UAE
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Providing advanced orthodontic treatments with a focus on patient-centered care and innovative solutions for complex cases.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "1",
    title: "Mar 2021 - Feb 2024",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Specialist Orthodontist
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          Phoenix Hospital, Abu Dhabi, UAE
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Specialized in early orthodontics, Invisalign, and self-ligating systems while mentoring young dental professionals.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "2",
    title: "Jun 2016 - Nov 2020",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Specialist Orthodontist
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          Al Dhafra Hospitals, Madinat Zayed, UAE
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Led orthodontic services across the region, improving efficiency and achieving recognition for clinical excellence.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "3",
    title: "Jan 2012 - Feb 2015",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Specialist Orthodontist
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          Internal Security Hospital, Dammam, Saudi Arabia
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Delivered orthodontic care in a multidisciplinary medical setting, managing both routine and complex dental cases.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "4",
    title: "Nov 2004 - Nov 2011",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Specialist Orthodontist
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          Jagadamba Hospital, Hyderabad, India
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Began independent orthodontic practice, managing diverse patient cases and building strong clinical foundations.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "5",
    title: "Apr 2001 - Mar 2004",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Master of Dental Surgery (MDS) – Orthodontics & Dentofacial Orthopedics
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          Meenakshi Ammal Dental College, M.G.R. Medical University, Chennai, India
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Advanced specialization in orthodontics with a focus on dentofacial growth, treatment mechanics, and clinical research.
        </RandomTextWrapper>
      </div>
    ),
  },
  {
    key: "6",
    title: "Sep 1995 - Sep 1999",
    content: (
      <div>
        <RandomTextWrapper className="mb-1 md:mb-2 text-2xl md:text-2xl lg:text-3xl font-semibold text-[#121345] dark:text-neutral-100">
          Bachelor of Dental Surgery (BDS) – Dentistry
        </RandomTextWrapper>
        <RandomTextWrapper className="mb-2 md:mb-4 text-sm italic font-medium text-neutral-500 dark:text-neutral-300">
          MR Ambedkar Dental College, Bangalore University, Bangalore, India
        </RandomTextWrapper>
        <RandomTextWrapper className="text-md md:text-lg font-medium text-neutral-800 dark:text-neutral-200">
          Comprehensive foundation in dental sciences, preventive dentistry, and clinical practice.
        </RandomTextWrapper>
      </div>
    ),
  },
];

const presentationsData = [
  {
    key: "0",
    quote: "Unlock the Power of Self-Ligating brackets.",
    name: "SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "February 2025"
  },
  {
    key: "1",
    quote: "Interceptive Orthodontics Facilitating Permanent Maxillary Canine Eruption.",
    name: "ADH DENTAL SYMPOSIUM 2024, SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "August 2024"
  },
  {
    key: "2",
    quote: "TMD & Orthodontics.",
    name: "SEHA, Al Dhafra Hospitals, Ghayathi, UAE",
    title: "August 2024"
  },
  {
    key: "3",
    quote: "Self-Ligating Brackets in Orthodontics.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "April 2023"
  },
  {
    key: "4",
    quote: "Benefits of Early Orthodontics.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "May 2022"
  },
  {
    key: "5",
    quote: "Age Limit for Orthodontics.",
    name: "Phoenix Hospital, Abu Dhabi, UAE",
    title: "September 2021"
  },
  {
    key: "6",
    quote: "Management of unerupted maxillary incisor.",
    name: "Al Dhafra Dental Symposium, Madinat Zayed, UAE",
    title: "September 2019"
  },
  {
    key: "7",
    quote: "Serial Extractions. At Madinat Zayed Dental Symposium.",
    name: "Madinat Zayed Dental Symposium, Madinat Zayed, UAE",
    title: "October 2018"
  },
  {
    key: "8",
    quote: "Malocclusion associated Syndromes.",
    name: "Madinat Zayed Dental Symposium, Madinat Zayed, UAE",
    title: "April 2017"
  },
  {
    key: "9",
    quote: "Comparison of PG canine retraction spring with modified PG canine retraction spring.",
    name: "38th Indian Orthodontic Conference, Coimbatore, India",
    title: "October 2003"
  },
  {
    key: "10",
    quote: "Symbiosis. (An approach to multi-specialty dentistry).",
    name: "Tamilnadu State Dental Conference, Chennai, India",
    title: "December 2001"
  },
];


export default function Home() {
  return (
    <div className="">
      <header>
        <Navbar />
      </header>
      <main className="">
        <AnimatedModalDemo />
        <HeroSectionOne />

        {/* Patents */}
        <ScreenWrapper id="patents" className=" flex flex-col items-center justify-ceter">
          <BackgroundGradient containerClassName=" p-4 md:p-10 w-full ">
            {/* <HeroHighlightDemo /> */}
            <HeadingTextWrapper className=" mb-10 mt-5" >
              <Highlight className="text-black ">
                Innovations
              </Highlight>
              &nbsp;shaping the future of orthodontics
            </HeadingTextWrapper>
            {/* <BackgroundGradient className="rounded-[22px] md:p-8 bg-white"> */}
            <WobbleCardDemo />
          </BackgroundGradient>
        </ScreenWrapper>


        {/* Accomplishments & Recognitions */}
        <ScreenWrapper id="recognitions" className="md:min-h-auto md:h-[80vh] lg:min-h-screen flex flex-col items-center justify-center md:mt-40 lg:my-40 ">
          <AppleCardsCarouselDemo />
        </ScreenWrapper>


        {/* Books */}
        <ScreenWrapper id="books" className=" md:min-h-auto md:h-[80vh] lg:min-h-screen flex flex-col items-center justify-center my-0 md:my-0 gap-14 ">
          <HeadingTextWrapper className="" >
            Books Collaborated On and Contributed To
          </HeadingTextWrapper>
          <FocusCardsDemo />
        </ScreenWrapper>


        {/* Publications */}
        <ScreenWrapper id="publications" className=" grid auto-rows-auto lg:flex lg:flex-col items-center justify-center gap-10 md:gap-14 mt-30 md:my-30 lg:my-0 ">
          <div>
            <HeadingTextWrapper className=" mb-1 " >
              Publications in orthodontics
            </HeadingTextWrapper>
            <TaglineTextWrapper>
              Published Works and Contributions in Orthodontics
            </TaglineTextWrapper>
          </div>
          <CanvasRevealEffectDemo />
        </ScreenWrapper>


        {/* Fellowships */}
        <ScreenWrapper id="fellowships" className="md:min-h-auto md:h-[80vh] lg:min-h-screen flex flex-col items-center justify-center my-32 md:my-0 gap-14 ">
          <HeadingTextWrapper className="" >
            Fellowships that recognize excellence in orthodontics
          </HeadingTextWrapper>
          <FeaturesSectionDemo1 />
        </ScreenWrapper>


        {/* Education & Experience Timeline */}
        <ScreenWrapper id="journey" className="relative w-full overflow-clip mb-30 mb:md-0">
          <Timeline data={experience} />
        </ScreenWrapper>


        {/* Affiliations  */}
        <ScreenWrapper id="affiliations" className=" md:mt-40">
          <BackgroundGradient className="rounded-[22px] md:p-4 bg-white">
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
                {/* <NormalTextWrapper>
                  I am Dr. Uday Kumar Alle, a Specialist Orthodontist dedicated to delivering high-quality orthodontic care with compassion and precision. With over two decades of international experience across the UAE, Saudi Arabia, and India, I specialize in transforming smiles through advanced orthodontic techniques including Invisalign, self-ligating brackets, and surgical orthodontics. My focus is on patient comfort, communication, and achieving life-changing results.
                </NormalTextWrapper> */}
                <GlowingEffectDemoSecond />
              </div>
            </div>
          </BackgroundGradient>
        </ScreenWrapper>


        {/* Skills & Expertise */}
        <ScreenWrapper id="skills" className=" flex flex-col justify-center md:px-3 gap-5 md:gap-10 mt-30 md:mt-20 lg:mt-30 ">
          <HeadingTextWrapper className=" text-start md:text-center ">
            Skills and expertise to transform smiles with care
          </HeadingTextWrapper>
          <FeaturesSectionDemo />
        </ScreenWrapper>


        {/* Presentations & Workshops */}
        <MaxWidthWrapper  id="presentations" className=" min-h-auto h-[85vh] md:h-[60vh] lg:min-h-screen lg:my-0 flex flex-col items-center justify-center gap-14 md:gap-10 lg:gap-14 ">
          <HeadingTextWrapper className="" >
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
        </MaxWidthWrapper >


        {/* wall of fame */}
        <MaxWidthWrapper id="gallery" className=" max-w-9xl flex flex-col items-center ">
          <HeadingTextWrapper className="" >
            Wall of Fame
          </HeadingTextWrapper>
          <GalleryDemo />
        </MaxWidthWrapper>

      </main>
      <footer className="footer footer-horizontal footer-center bg-gradient-to-b from-[#181B3A] to-[#1C1F4A] text-base-content p-10 flex flex-col items-center gap-5">
        {/* <FloatingDock items={icons} desktopClassName="" mobileClassName="" /> */}
        <nav className="">
          <div className=" flex items-center gap-10 justify-evenly">
            <a href="" target="" rel="">
              <IconBrandInstagram
                size={45}
                strokeWidth={1}
                color={'white'}
              />
            </a>
            <a href="" target="" rel="">
              <IconBrandLinkedin
                size={40}
                strokeWidth={1}
                color={'white'}
              />
            </a>
            <a href="" target="" rel="">
              <IconBrandTwitter
                size={40}
                strokeWidth={1}
                color={'white'}
              />
            </a>
            <a href="" target="" rel="">
              <IconBrandFacebook
                size={40}
                strokeWidth={1}
                color={'white'}
              />
            </a>
          </div>
        </nav>
        <aside>
          <RandomTextWrapper className=" text-white text-center">Copyright © {new Date().getFullYear()} — All rights reserved by Dr. Uday Kumar Alle.</RandomTextWrapper>
        </aside>
      </footer>
    </div>
  );
}
