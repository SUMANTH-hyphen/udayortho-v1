"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "/marque1.jpg",
    "/marque2.jpg",
    "/marque3.jpg",
    "/marque6.jpg",
    "/marque10.jpg",
    "/marque4.jpg",
    "/marque7.jpg",
    "/marque8.jpg",
    "/marque5.jpg",
    "/marque10.jpg",
    "/marque10.jpg",
    "/marque5.jpg",
    "/marque8.jpg",
    "/marque7.jpg",
    "/marque6.jpg",
    "/marque9.jpg",
    "/marque4.jpg",
    "/marque3.jpg",
    "/marque2.jpg",
    "/marque1.jpg",
    "/marque1.jpg",
    "/marque2.jpg",
    "/marque3.jpg",
    "/marque4.jpg",
    "/marque9.jpg",
    "/marque6.jpg",
    "/marque7.jpg",
    "/marque8.jpg",
    "/marque5.jpg",
    "/marque10.jpg",
  ];

//   const images = [
//     "/marque10.jpg",
//     "/marque9.jpg",
//     "/marque8.jpg",
//     "/marque7.jpg",
//     "/marque6.jpg",
//     "/marque5.jpg",
//     "/marque4.jpg",
//     "/marque3.jpg",
//     "/marque2.jpg",
//     "/marque1.jpg",
//   ]
  

return (
    <div className="mx-auto my-10 w-full rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <ThreeDMarquee images={images} />
    </div>
  );
}
