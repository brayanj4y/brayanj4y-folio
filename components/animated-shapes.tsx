"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export function AnimatedShapes() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return

      const { left, top, width, height } = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - left) / width - 0.5
      const y = (e.clientY - top) / height - 0.5

      // Subtle parallax effect
      const shapes = containerRef.current.querySelectorAll(".shape")
      shapes.forEach((shape, index) => {
        const speed = 1 - index * 0.2
        const htmlShape = shape as HTMLElement
        htmlShape.style.transform = `translate(${x * 20 * speed}px, ${y * 20 * speed}px)`
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <div className={cn("shape absolute w-24 h-24 md:w-32 md:h-32 top-[15%] left-[10%]", "animate-float opacity-80")}>
        <Image
          src="/images/CS_Star_2.svg"
          alt=""
          width={128}
          height={128}
          className="w-full h-full animate-spin-slow"
        />
      </div>

      <div
        className={cn(
          "shape absolute w-20 h-20 md:w-28 md:h-28 bottom-[20%] left-[15%]",
          "animate-float-delay opacity-70",
        )}
      >
        <Image
          src="/images/CS_Star_8.svg"
          alt=""
          width={112}
          height={112}
          className="w-full h-full animate-spin-reverse"
        />
      </div>

      <div
        className={cn(
          "shape absolute w-16 h-16 md:w-24 md:h-24 top-[25%] right-[15%]",
          "animate-float-delay-2 opacity-80",
        )}
      >
        <Image
          src="/images/CS_Star_10.svg"
          alt=""
          width={96}
          height={96}
          className="w-full h-full animate-pulse-slow"
        />
      </div>

      <div
        className={cn(
          "shape absolute w-28 h-28 md:w-40 md:h-40 bottom-[10%] right-[10%]",
          "animate-float-delay-3 opacity-70",
        )}
      >
        <Image
          src="/images/CS_Flower_2.svg"
          alt=""
          width={160}
          height={160}
          className="w-full h-full animate-spin-slow-reverse"
        />
      </div>
    </div>
  )
}
