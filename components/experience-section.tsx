"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, ArrowRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface ExperienceItem {
  title: string
  company: string
  period: string
  description: string
}

export default function ExperienceSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const experiences: ExperienceItem[] = [
    {
      title: "BTECH, Software Engineering",
      company: "JFN-HITECH University Douala",
      period: "Oct 2023 – Present",
      description:
        "Currently pursuing a Bachelor Degree in Software engineering with a focus on modern web development, AI integration, and software engineering principles.",
    },

    {
      title: "HND, Software Engineering",
      company: "JFN-HITECH University Douala",
      period: "Oct 2023 – June 2025",
      description:
        "Obtained a Higher National Diploma with a focus on modern web development, AI integration, and software engineering principles.",
    },
    {
      title: "Junior Software Engineer (Intern)",
      company: "Gracify Technology Cameroun",
      period: "July 2024 – Jan 2025",
      description:
        "Assisted in building and maintaining web applications. Contributed to frontend development using modern frameworks and supported integration of AI-driven features.",
    },
    {
      title: "Junior Software Engineer (Intern)",
      company: "African Digital Strategies Network",
      period: "Dec 2024 – Jan 2025",
      description:
        "Worked on internal tools and prototypes. Focused on leveraging AI services and automation of attendance system to enhance digital strategies.",
    }
  ];

  return (
    <section id="experience" className="py-16 px-3 md:px-5 lg:px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-10 text-center">Work Experience</h2>

        <div ref={ref} className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 transform md:-translate-x-px" />

          {/* Experience items */}
          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative grid md:grid-cols-2 gap-6"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-5 h-5 bg-background rounded-full border-2 border-primary transform -translate-x-1/2 md:-translate-x-2.5 flex items-center justify-center">
                    <Briefcase className="h-2.5 w-2.5 text-primary" />
                  </div>

                  {/* Date - Left side on desktop, top on mobile */}
                  <div className="md:text-right pl-8 md:pl-0 md:pr-6">
                    <div className="inline-flex items-center text-xs font-medium text-muted-foreground mb-1.5">
                      <Calendar className="h-3 w-3 mr-1.5 md:hidden" />
                      <span>{experience.period}</span>
                      <Calendar className="h-3 w-3 ml-1.5 hidden md:block" />
                    </div>
                    <h3 className="text-lg font-bold">{experience.title}</h3>
                    <p className="text-primary font-medium">{experience.company}</p>
                  </div>

                  {/* Content - Right side on desktop */}
                  <Card className="border border-primary/10 bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors pl-8 md:pl-6">
                    <CardContent className="p-3">
                      <p className="text-muted-foreground">{experience.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            ))}
          </div>

          <motion.div
            className="mt-10 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.8 }}
          >
            <a
              href="https://cvdesignr.com/p/65f2067992029"
              target="_blank"
              className="inline-flex items-center text-primary hover:underline font-medium text-sm"
              rel="noreferrer"
            >
              <span>View Full Resume</span>
              <ArrowRight className="ml-1.5 h-3 w-3" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
