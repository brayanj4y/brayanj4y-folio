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

      <div className="max-w-5xl mx-auto relative z-10">

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto overflow-hidden rounded-lg">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 z-10" />
              <Image src="about.jpeg?height=800&width=600" alt="About Me" fill className="object-cover" />
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
              <h3 className="text-2xl font-bold mb-4">👋 HEY HEY HEY!</h3>
              <p className="text-lg mb-4">
                My government name? <span className="font-bold">Silvain Brayan Souop.</span> But let’s be real, nobody has time for that — just call me <span className="font-bold">Brayan Jay</span>.
                I’m currently a student at JFN-HITECH Douala (<s>where coffee is a lifestyle and deadlines are spiritual warfare 😂</s>).
                I build web & mobile apps that <s>sometimes</s> solve problems… and sometimes just exist.
              </p>

              <p className="text-lg mb-4">
                I love mixing <span className="font-bold">[design + code]</span> to create stuff people actually enjoy using.
                Tech excites me, collabs energize me, and if your project includes snacks or memes, I’m already in.👨‍💻
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
