"use client"

import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import ExperienceSection from "@/components/experience-section"
import FloatingNavbar from "@/components/small-components/floating_navbar"
import SkillPill from "@/components/small-components/skill-pill"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"

const skills = [
    "AWS",
    "Supabase",
    "Clerk",
    "GitHub",
    "JavaScript",
    "HTML5",
    "CSS",
    "Node.js",
    "Next.js",
    "SQLite3",
    "MySQL",
    "Postgres",
]

export default function AboutPage() {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <div className="min-h-screen relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_50%,hsl(var(--primary)/0.1),transparent_50%)] z-0"></div>

            <FloatingNavbar />

            <div className="max-w-5xl mx-auto relative z-10 pt-32 px-4 md:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                            About me
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            This is a little peek into who I am, what drives me, and the things I love to do every day. 🌟
                        </p>
                    </motion.div>
                </div>

                <AboutSection />
                <ExperienceSection />


                <section id="skills" className="py-20 px-4 md:px-6 lg:px-8 relative overflow-hidden">
                    <div className="max-w-5xl mx-auto relative z-10">

                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-12 text-center">
                            Skills & Technologies
                        </h2>

                        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                            {skills.map((skill) => (
                                <SkillPill key={skill} name={skill} />
                            ))}
                        </div>
                    </div>
                </section>
                <div className="mt-24">
                    <ContactSection />
                </div>
            </div>
        </div>
    )
}
