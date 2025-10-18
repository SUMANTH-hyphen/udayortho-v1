"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import { HeadingTextWrapper } from "../wrappers/text-wrapper";
import Image from "next/image";

export function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full">
      {/* <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Get to know your iSad.
      </h2> */}
      <HeadingTextWrapper className="" >
            &quot;Recognitions that celebrate dedication.&quot;
          </HeadingTextWrapper>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "UAE Telugu Doctors Group",
    metadata: "Q2 2025, UAE",
    title: "Honored with the Recognition & Appreciation of Academic Excellence for contributing to the growth and advancement of the dental community.",
    src: "/recog1.jpg",
    content: <DummyContent />,
  },
  {
    category: "CAPP for MENA region",
    metadata: "Q4 2024, UAE",
    title: "Awarded 2nd Place in Orthodontic Best Case (Children), a recognition of clinical precision and dedication to delivering outstanding results for young patients.",
    src: "/recog2.jpg",
    content: <DummyContent />,
  },
  {
    category: "Al Dhafra Hospitals region",
    metadata: "Q4 2017, UAE",
    title: "Received the Certification of Appreciation for achieving the Highest Revenue, improving both financial and operational efficiency across the hospital system.",
    src: "/recog3.jpg",
    content: <DummyContent />,
  },

  {
    category: "Madinat Zayed Hospital",
    metadata: "Q3 2017, UAE",
    title: "Recognized as Distinguished Employee for exemplary service, dedication, and consistent commitment to patient-centered care.",
    src: "/recog4.jpg",
    content: <DummyContent />,
  },
  {
    category: "Madinat Zayed Hospital",
    metadata: "Q2 2016, UAE",
    title: "Honored with the Shokran Award for demonstrating high productivity and unwavering dedication to delivering quality orthodontic care.",
    src: "/recog5.jpg",
    content: <DummyContent />,
  },
  {
    category: "Madinat Zayed Hospital",
    metadata: "Q3 2015, UAE",
    title: "Recognized once again as Distinguished Employee for outstanding clinical service and patient care excellence.",
    src: "/recog6.jpg",
    content: <DummyContent />,
  },
];
