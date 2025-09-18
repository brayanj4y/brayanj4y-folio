"use client"

import { motion } from "framer-motion"
import FloatingNavbar from "@/components/small-components/floating_navbar"
import {
    MinimalCard,
    MinimalCardImage,
    MinimalCardTitle,
    MinimalCardDescription,
    MinimalCardContent,
    MinimalCardFooter,
} from "@/components/small-components/custom-card"
import ContactSection from "@/components/contact-section"

interface BucketListItem {
    id: number
    title: string
    description: string
    completed: boolean
    category: 'Personal' | 'Professional' | 'Travel' | 'Skills'
}

const bucketList: BucketListItem[] = [
    {
        id: 1,
        title: "Build a Tech Startup",
        description: "Launch a successful tech startup that solves real-world problems",
        completed: false,
        category: 'Professional'
    },
    {
        id: 2,
        title: "Visit Silicon Valley",
        description: "Experience the tech hub and possibly attend major tech conferences",
        completed: false,
        category: 'Travel'
    },
    {
        id: 3,
        title: "Master System Design",
        description: "Become proficient in designing large-scale distributed systems",
        completed: false,
        category: 'Skills'
    },
    {
        id: 4,
        title: "Contribute to Open Source",
        description: "Make meaningful contributions to major open source projects",
        completed: false,
        category: 'Professional'
    },
    {
        id: 5,
        title: "Learn AI/ML",
        description: "Deep dive into AI and Machine Learning, build practical projects",
        completed: false,
        category: 'Skills'
    }
]

export default function BucketListPage() {
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
                            My Tech Bucket List
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            A collection of ambitious goals and dreams in my tech journey. These are the milestones I'm working towards! 🚀
                        </p>
                    </motion.div>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {bucketList.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <MinimalCard className="h-full">
                                {/* Optional image placeholder (remove if not needed) */}
                                <MinimalCardImage
                                    src={`https://picsum.photos/400/200?random=${item.id}`}
                                    alt={item.title}
                                />

                                <MinimalCardContent>
                                    <MinimalCardTitle>{item.title}</MinimalCardTitle>
                                    <MinimalCardDescription>
                                        {item.description}
                                    </MinimalCardDescription>
                                    <div className="flex items-center gap-2 mt-2">
                                        <span className="text-sm font-medium text-primary">{item.category}</span>
                                    </div>
                                </MinimalCardContent>

                                <MinimalCardFooter>
                                    <p className="text-sm text-muted-foreground">
                                        Status: {item.completed ? "Completed ✅" : "In Progress 🎯"}
                                    </p>
                                </MinimalCardFooter>
                            </MinimalCard>
                        </motion.div>
                    ))}
                </div>
            </div>
            <div className="mt-24">
                <ContactSection />
            </div>
        </div>
    )
}
