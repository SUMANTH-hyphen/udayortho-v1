import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from "@tabler/icons-react";

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
      icon: <IconTerminal2 />,
    },
    {
      title: "Complex Problem Solving",
      description: "Tackling challenging dental cases with innovative solutions.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Attention to Details",
      description: "Ensuring precision in every step, from diagnosis to treatment.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Conventional, Self-Ligating Brackets",
      description: "Expert handling of different bracket systems for braces.",
      icon: <IconCloud />,
    },
    {
      title: "Invisalign",
      description: "Providing discreet and effective Invisalign treatments.",
      icon: <IconHeart />,
    },
    {
      title: "Mini Implants",
      description: "Performing mini implant procedures with accuracy and care.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Dento-facial Orthopedics",
      description: "Managing dento-facial growth and corrections effectively.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Maxillary Expansion Treatment",
      description: "Specialized treatment to correct maxillary deficiencies.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "Cleft & Orthognathic Case Preparation",
      description: "Comprehensive case preparation for complex surgical interventions.",
      icon: <IconRouteAltLeft />,
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
        "flex flex-col justify-center items-start lg:border-r py-5 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4 || index === 8) && "lg:border-l dark:border-neutral-800",
        index < 8 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold relative z-10 px-6">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-6">
        {description}
      </p>
    </div>
  );
};
