'use client'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardHeader,
  CardDescription,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { InIcon, UkIcon } from '@/components/ui/flag-icons'
import { RandomTextWrapper } from '@/components/wrappers/text-wrapper'
import { BadgeCheckIcon, CircleDashed } from 'lucide-react'

type ProductItem = {
  title: string
  description: string
  image: string
  badgeStatus: string
  badgeNation: string
}

type CardProductProps = {
  item: ProductItem
}

const items: ProductItem[] = [
  {
    title: "Inverted Orthodontic Retraction Loops with Occlusal Application",
    description: "Innovative inverted retraction loops delivering precise occlusal-direction force for efficient orthodontic space closure.",
    image: "/patent1.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "UK Design Patent",
  },
  {
    title: "Orthodontic Retraction Loop, straight, and angled",
    description: "An advanced retraction loop system redefining space closure mechanics through precision force control and ergonomic wire design.",
    image: "/patent2.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "Indian Design Patent",
  },
  {
    title: "Orthodontic Accessory Bracket",
    description:
      "A smart orthodontic accessory bracket that expands treatment possibilities with reliable auxiliary attachment.",
    image: "/patent5.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "India Design Patent",
  },
   {
    title: "Orthodontic Auxiliary Bracket",
    description: "Smart auxiliary bracket designed to simplify complex mechanics and deliver greater control.",
    image: "/patent11.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "Indian Design Patent",
  },
  {
    title: "Hygienic Orthodontic Bracket",
    description:
      "A next-generation orthodontic bracket integrating hygiene-focused design and advanced materials.",
    image: "/patent6.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "Indian Design Patent",
  },
  {
    title: "Orthodontic Bracket",
    description: "A next-generation orthodontic bracket integrating advanced features for enhanced treatment outcomes.",
    image: "/patent12.jpg",
    badgeStatus: "Patent Granted",
    badgeNation: "India Design Patent",
  },
  {
    title: "Orthodontic Archwire Distal Bending Device",
    description: "Advanced distal bending device delivering smooth, precise terminal wire bends with least effort.",
    image: "/patent7.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "Indian Design and Utility Patent",
  },
  {
    title: "Multi-Purpose Orthodontic Tweezer",
    description: "A smart, dual-action orthodontic tweezer that simplifies treatment by merging precision, versatility, and ergonomic design.",
    image: "/patent10.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "Indian Design Patent",
  },
  {
    title: "Self-Ligating Orthodontic Accessory Eyelet Bracket",
    description: "A next-generation self-ligating orthodontic eyelet that merges convenience, precision, and reduced friction.",
    image: "/patent4.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "Indian Utility Patent",
  },
  {
    title: "Orthodontic Accessory Bracket",
    description:
      "A smart orthodontic accessory bracket that expands treatment possibilities with reliable auxiliary attachment.",
    image: "/patent9.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "India Utility Patent",
  },
  {
    title: "Controlled Adhesive Dispenser",
    description: "Innovative orthodontic adhesive dispenser ensuring precise, consistent application for optimal bonding.",
    image: "/patent3.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "India Utility Patent",
  },
  {
    title: "Elastic chain for orthodontic space closure",
    description: "Innovative elastic chain designed for anatomical fit and efficient space closure in orthodontic treatment.",
    image: "/patent8.jpg",
    badgeStatus: "Patent Pending",
    badgeNation: "India Utility Patent",
  },
]

const CardProduct = ({ item }: CardProductProps) => {
  return (
    <div className="flex flex-col h-full rounded-xl overflow-hidden shadow-lg">
      {/* Image container - responsive height */}
      <div className="bg-gradient-to-r from-neutral-600 to-violet-300  flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-fill"
        />
      </div>

      {/* Card content - takes remaining space */}
      <Card className="border-none flex-1 flex flex-col rounded-none">
        <CardHeader className="flex-shrink-0">
          <CardTitle className="line-clamp-2">
            <RandomTextWrapper className="text-lg md:text-xl md:font-semibold">
              {item.title}
            </RandomTextWrapper>
          </CardTitle>

          <CardDescription className="flex flex-wrap items-center gap-2 mt-1">
            <Badge
              variant="secondary"
              className={`rounded-sm flex items-center gap-1 whitespace-nowrap ${item.badgeStatus === "Patent Granted"
                  ? "bg-green-300/40"
                  : "bg-orange-300/40"
                }`}
            >
              {item.badgeStatus === "Patent Granted" ? <BadgeCheckIcon size={16} /> : <CircleDashed size={16} />}
              {item.badgeStatus}
            </Badge>
            <Badge
              variant="outline"
              className="rounded-sm flex items-center gap-1 whitespace-nowrap"
            >
              {item.badgeNation === "UK Design Patent" ? <UkIcon size={16} /> : <InIcon size={16} />}
              {item.badgeNation}
            </Badge>
          </CardDescription>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col">
          <p className="text-sm text-muted-foreground font-normal line-clamp-3">
            {item.description}
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

const CardProductDemo = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 h-full">
      {items.map((item, index) => (
        <CardProduct key={index} item={item} />
      ))}
    </div>
  )
}

export default CardProductDemo