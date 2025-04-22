"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Github, ExternalLink, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  demoUrl: string
  githubUrl: string
}

export default function ProjectCard({ title, description, tags, imageUrl, demoUrl, githubUrl }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        className="overflow-hidden border border-primary/10 group"
        ref={cardRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden aspect-video">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-primary/10 hover:bg-primary/20">
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>

        <CardFooter className="p-6 pt-0 flex justify-between items-center">
          <div className="flex gap-2">
            <Button size="sm" variant="ghost" asChild>
              <Link href={githubUrl} target="_blank">
                <Github className="h-4 w-4 mr-1" />
                Code
              </Link>
            </Button>
            <Button size="sm" variant="ghost" asChild>
              <Link href={demoUrl} target="_blank">
                <ExternalLink className="h-4 w-4 mr-1" />
                Demo
              </Link>
            </Button>
          </div>

          <Button size="sm" variant="ghost" className="group/btn" asChild>
            <Link href={demoUrl}>
              <span>Details</span>
              <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
