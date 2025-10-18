import React from "react";
import { useId } from "react";
import { RandomTextWrapper } from "../wrappers/text-wrapper";

export function FeaturesSectionDemo1() {
    return (
        <div className="">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-2 max-w-7xl mx-auto">
                {grid.map((feature) => (
                    <div
                        key={feature.title}
                        className="relative bg-gradient-to-b from-[#535EF9]/20 via-[#535EF9]/15 to-[#535EF9]/5 p-6 rounded-3xl overflow-hidden"
                    >
                        <Grid size={20} />
                        <RandomTextWrapper className="text-base font-bold text-neutral-800 relative z-20">
                            {feature.title}
                        </RandomTextWrapper>
                        <RandomTextWrapper className="text-neutral-600 mt-4 text-base font-normal relative z-20">
                            {feature.description}
                        </RandomTextWrapper>
                    </div>
                ))}
            </div>
        </div>
    );
}

const grid = [
    {
        title: "Fellowship Pierre Fauchard Academy, 2025",
        description:
            "An honorary fellowship awarded by nomination to recognize past accomplishments in dentistry, from the prestigious academy founded in 1936 by Dr. Elmer S. Best.",
    },
    {
        title: "Global Fellowship in TMD & Related Disorders, 2024",
        description:
            "Earned a provisional fellowship specializing in temporomandibular disorders and management strategies at an international level.",
    },
    {
        title: "Global Fellowship in Orofacial Pain & Dental Sleep Medicine, 2025",
        description:
            "Pursuing fellowship from Roseman University, USA, with completion in June 2025, focused on orofacial pain and dental sleep medicine.",
    },
    {
        title: "MOrth Membership (Part A), Edinburgh & Glasgow",
        description:
            "Successfully passed Part A examinations of the Membership in Orthodontics, recognizing advanced orthodontic knowledge and skills.",
    },
];


export const Grid = ({
    pattern,
    size,
}: {
    pattern?: number[][];
    size?: number;
}) => {
    const p = pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    ];
    return (
        <div className="pointer-events-none absolute left-1/2 top-0  -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
            <div className="absolute inset-0 bg-gradient-to-r  [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] from-[#535EF9]/20 to-[#535EF9]/5 opacity-100">
                <GridPattern
                    width={size ?? 20}
                    height={size ?? 20}
                    x="-12"
                    y="4"
                    squares={p}
                    className="absolute inset-0 h-full w-full  mix-blend-overlay stroke-[#535EF9]/15 fill-[#535EF9]/20"
                />
            </div>
        </div>
    );
};

export function GridPattern({ width, height, x, y, squares, ...props }: any) {
    const patternId = useId();

    return (
        <svg aria-hidden="true" {...props}>
            <defs>
                <pattern
                    id={patternId}
                    width={width}
                    height={height}
                    patternUnits="userSpaceOnUse"
                    x={x}
                    y={y}
                >
                    <path d={`M.5 ${height}V.5H${width}`} fill="none" />
                </pattern>
            </defs>
            <rect
                width="100%"
                height="100%"
                strokeWidth={0}
                fill={`url(#${patternId})`}
            />
            {squares && (
                <svg x={x} y={y} className="overflow-visible">
                    {squares.map(([x, y]: any, index: number) => (
                        <rect
                            strokeWidth="0"
                            key={`${x}-${y}-${index}`} // include index to make it unique
                            width={width + 1}
                            height={height + 1}
                            x={x * width}
                            y={y * height}
                        />
                    ))}
                </svg>
            )}
        </svg>
    );
}
