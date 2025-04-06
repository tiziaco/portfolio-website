"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import PillBadges from "./PillBadges"
import { techStack } from "@/data/about_content"

interface GridItem {
  id: number
  title: string
  description: string
  className: string
  imgClassName: string
  titleClassName: string
  img: string
  spareImg: string
}

interface BentoGridProps {
  items: GridItem[]
}

export default function BentoGrid({ items }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
      {items.map((item) => (
        <BentoGridItem key={item.id} item={item} />
      ))}
    </div>
  )
}

function BentoGridItem({ item }: { item: GridItem }) {
  // const [hovered, setHovered] = useState(false)

  // Split description into paragraphs
  const descriptionParagraphs = item.description ? item.description.split("\n\n") : []

  // Check if this is the tech stack item
  const isTechStack = item.id === 4

  return (
    <motion.div
      className={cn("overflow-hidden", item.className)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      // onHoverStart={() => setHovered(true)}
      // onHoverEnd={() => setHovered(false)}
    >
      <Card className={cn("h-full rounded-xl glassmorphism border-none flex flex-col justify-center items-center")}>
        {/* Render tech stack item differently */}
        {isTechStack ? (
          <CardContent className="p-0">
            <div className="flex flex-col md:flex-row justify-between items-start p-5 lg:p-10 z-10">
              <div className="flex-1 md:pr-4">
                <div className="font-sans text-xl md:text-2xl lg:text-3xl max-w-96 font-bold">
                  <h3>{item.title}</h3>
                </div>
                <div className="pt-5 font-sans font-medium text-base lg:text-lg text-[rgb(193,194,211)]">
                  <p>{item.description}</p>
                </div>
              </div>
              <div className="flex-1 flex justify-end">
                <PillBadges items={techStack} />
              </div>
            </div>
          </CardContent>
        ) : (
          <>
            {item.title && !item.description ? (
              <div className="flex items-center justify-center h-full text-center">
                <h3 className="text-xl md:text-2xl lg:text-3xl font-bold">{item.title}</h3>
              </div>
            ) : (
              <>
                {item.title && (
                  <CardHeader className={cn("flex", item.titleClassName)}>
                    <CardTitle className="text-xl md:text-2xl lg:text-3xl">{item.title}</CardTitle>
                  </CardHeader>
                )}
                <CardContent className="flex flex-col h-full p-4 justify-center">
                  {item.img && (
                    <div className={cn("relative", item.imgClassName)}>
                      <Image
                        src={item.img || "/placeholder.svg"}
                        alt={item.title || `Grid item ${item.id}`}
                        width={300}
                        height={300}
                        className="object-cover rounded-lg"
                      />
                    </div>
                  )}

                  {/* Render description paragraphs properly */}
                  {item.description && (
                    <div className="mt-2 font-medium text-base lg:text-lg text-[rgb(193,194,211)]">
                      {descriptionParagraphs.map((paragraph, i) => (
                        <div key={i} className="mb-4">
                          {paragraph}
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </>
            )}
          </>
        )}
      </Card>
    </motion.div>
  )
}

