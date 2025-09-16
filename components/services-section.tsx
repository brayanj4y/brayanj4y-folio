"use client"

import type React from "react"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Brain, Hammer, Bot, Sparkles } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export default function ServicesSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const services: Service[] = [
    {
      icon: <Brain className="h-10 w-10 text-primary" />,
      title: "AI-Powered Web Apps",
      description:
        "I create smart web apps with Next.js that truly understand what users need. I integrate AI services like OpenAI and vector databases to build experiences that feel almost magical.",
    },
    {
      icon: <Hammer className="h-10 w-10 text-primary" />,
      title: "No-Code & Low-Code Solutions",
      description:
        "Have a great idea? Let’s make it happen quickly with low-code platforms like FlutterFlow. I’ll add custom backends and ensure everything looks fantastic on any device, all without endless coding.",
    },
    {
      icon: <Bot className="h-10 w-10 text-primary" />,
      title: "AI Integration & Prototyping",
      description:
        "Let’s give your apps special features. I link them to top-notch AI for text processing, image generation, and automation. This is perfect for testing your idea without spending a lot.",
    },
    {
      icon: <Sparkles className="h-10 w-10 text-primary" />,
      title: "Creative AI Tooling",
      description:
        "I create tools that simplify AI development. I blend tech skills with creative thinking to build utilities that speed up workflows while keeping the process enjoyable.",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section id="services" className="py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Services I Offer</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Check out how I can help turn your ideas into reality with these tech skills and services!
          </p>
        </div>

        <div ref={ref} className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors h-full">
                <CardHeader className="pb-2">
                  <div className="mb-4 w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
