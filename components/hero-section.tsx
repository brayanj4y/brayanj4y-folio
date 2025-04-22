"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowDown, Github, Linkedin, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useMobile } from "@/hooks/use-mobile"

export default function HeroSection() {
  const isMobile = useMobile()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  // Particle animation effect
  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let particles: Particle[] = []
    let animationFrameId: number

    // Define Particle class first, before using it
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 3 + 1
        this.speedX = (Math.random() - 0.5) * 0.5
        this.speedY = (Math.random() - 0.5) * 0.5
        this.color = `hsla(var(--primary), ${Math.random() * 0.3 + 0.1})`
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    function initParticles() {
      particles = []
      const particleCount = isMobile ? 50 : 100
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />

      <div className="relative z-10 max-w-5xl w-full px-4 md:px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <motion.div
              className="mb-6 inline-block"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 200, damping: 15 }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                Software Engineer
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              Hi, I'm{" "}
              <span className="text-primary relative">
                Jay
                <motion.span
                  className="absolute -top-1 -right-8 text-2xl"
                  initial={{ rotate: -20 }}
                  animate={{ rotate: [0, 20, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, repeatType: "reverse", duration: 1, delay: 1 }}
                >
                  👋
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              I'm a software engineer who builds powerful digital solutions by combining clean code with smart design to deliver seamless user experiences.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.5 }}
            >
              <Button size="lg" asChild>
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="mailto:souopsylvain@gmail.com">Get In Touch</Link>
              </Button>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.5 }}
            >
              <Link
                href="https://github.com/brayanj4y"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com/in/brayan-j4y"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/brayanj4y"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 animate-pulse [animation-delay:250ms]" />
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 animate-pulse [animation-delay:500ms]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-background">
                  <Image
                    src="/hero.png?height=400&width=400"
                    alt="Portrait"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}>
            <Link
              href="#about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ArrowDown className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
