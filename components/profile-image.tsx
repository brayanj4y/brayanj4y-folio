"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ProfileImageProps {
  src: string
  alt: string
}

export function ProfileImage({ src, alt }: ProfileImageProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative h-[500px] md:h-[600px] w-full max-w-[400px] mx-auto overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        fill
        className={cn(
          "object-cover rounded-tl-[80px] rounded-tr-[80px] shadow-lg transition-all duration-500",
          isHovered ? "grayscale-0" : "grayscale",
          // Removed the scale-105 effect
        )}
        sizes="(max-width: 768px) 100vw, 400px"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-[80px] rounded-tr-[80px]"></div>
    </div>
  )
}
