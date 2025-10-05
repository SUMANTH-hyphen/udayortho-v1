import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconEaseInOut,
  IconHeart,
  IconRouteAltLeft,
  IconClock2,
  IconListDetails,
  IconMinimize,
  IconTopologyComplex,
  IconMilitaryRank,
  IconChartLine
} from "@tabler/icons-react";
import { RandomTextWrapper, TaglineTextWrapper } from "../wrappers/text-wrapper";

export default function FeaturesSectionDemo() {

  const skills = [
    {
      title: "Patient Care",
      description: "Providing attentive and empathetic care for every patient.",
      icon: <IconHeart />,
    },
    {
      title: "Communication and Organization",
      description: "Clear communication and efficient organization in every task.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Time Management",
      description: "Optimizing time to ensure timely treatments and appointments.",
      icon: <IconClock2 />,
    },
    {
      title: "Complex Problem Solving",
      description: "Tackling challenging dental cases with innovative solutions.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Attention to Details",
      description: "Ensuring precision in every step, from diagnosis to treatment.",
      icon: <IconListDetails />,
    },
    {
      title: "Conventional, Self-Ligating Brackets",
      description: "Expert handling of different bracket systems for braces.",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "Invisalign",
      description: "Providing discreet and effective Invisalign treatments.",
      icon: <IconHeart />,
    },
    {
      title: "Mini Implants",
      description: "Performing mini implant procedures with accuracy and care.",
      icon: <IconMinimize />,
    },
    {
      title: "Dento-facial Orthopedics",
      description: "Managing dento-facial growth and corrections effectively.",
      icon: <IconChartLine />,
    },
    {
      title: "Maxillary Expansion Treatment",
      description: "Specialized treatment to correct maxillary deficiencies.",
      icon: <IconMilitaryRank />,
    },
    {
      title: "Cleft & Orthognathic Case Preparation",
      description: "Comprehensive case preparation for complex surgical interventions.",
      icon: <IconTopologyComplex />,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative max-w-8xl mx-auto">
      {skills.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col justify-center items-start lg:border-r py-5 px-5 md:px-0 relative group/feature ",
        (index === 0 || index === 4 || index === 8) && "lg:border-l ",
        index < 8 && "lg:border-b "
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-[#121345] dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-10 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-[#121345] dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-400 dark:bg-neutral-700 group-hover/feature:bg-[#121345] transition-all duration-200 origin-center" />
        <RandomTextWrapper className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </RandomTextWrapper>
      </div>
      <TaglineTextWrapper className=" text-start text-sm md:text-sm lg:text-sm text-[#121345] dark:text-neutral-300 max-w-xs relative z-10 px-6">
        {description}
      </TaglineTextWrapper>
    </div>
  );
};
