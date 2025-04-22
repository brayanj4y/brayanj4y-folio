"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Download } from "lucide-react"

export default function AboutSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Just a junior dev turning coffee into code and ideas into clean, functional apps with just the right mix of design and tech magic.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 z-10" />
              <Image src="about.jpg?height=800&width=600" alt="About Me" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
          </motion.div>

          <div ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold mb-4">Hi, I'm Jay</h3>
              <p className="text-lg mb-4">
                I'm Souop Silvain Brayan my crew, infact everybody call me Jay a Level 2 student at JFN-HITECH University Douala, a junior software developer, and an aspiring AI engineer who loves solving real-world problems with code.
              </p>
              <p className="text-lg mb-4">
                I enjoy building mobile and web apps, learning new tech, and collaborating on fun, impactful projects.
              </p>
              <p className="text-lg mb-6">
                When I'm not coding, I'm hunting for cool ideas to build or contribute to.... or just chilling with my crew, Byte Phantoms 👻.
              </p>


              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  className="bg-white text-primary hover:bg-gray-50 border border-gray-200 shadow-sm px-8 py-6 h-auto font-medium rounded-lg transition-all hover:shadow-md"
                  asChild
                >
                  <Link href="mailto:souopsylvain@gmail.com" >
                    Get In Touch
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  className="bg-primary/10 text-primary hover:bg-primary/20 px-8 py-6 h-auto font-medium rounded-lg transition-all"
                  variant="outline"
                  asChild
                >
                  <Link href="https://cvdesignr.com/p/65f2067992029" target="_blank">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
