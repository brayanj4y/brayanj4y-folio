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
    const mouse = { x: 0, y: 0, radius: 100 }

    // Track mouse position for interactive particles
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    // Define Particle class with improved behavior
    class Particle {
      x: number
      y: number
      size: number
      baseSize: number
      speedX: number
      speedY: number
      density: number
      color: string
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.baseSize = Math.random() * 2 + 0.5
        this.size = this.baseSize
        this.speedX = (Math.random() - 0.5) * 0.3
        this.speedY = (Math.random() - 0.5) * 0.3
        this.density = Math.random() * 30 + 1
        this.opacity = Math.random() * 0.2 + 0.1
        this.color = `hsla(var(--primary), ${this.opacity})`
      }

      update() {
        // Move particles
        this.x += this.speedX
        this.y += this.speedY

        // Boundary check with smooth transition
        if (this.x > canvas.width) this.x = 0
        if (this.x < 0) this.x = canvas.width
        if (this.y > canvas.height) this.y = 0
        if (this.y < 0) this.y = canvas.height

        // Interactive behavior with mouse
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouse.radius) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const force = (mouse.radius - distance) / mouse.radius

          // Gentle push effect
          this.x -= forceDirectionX * force * 2
          this.y -= forceDirectionY * force * 2

          // Subtle size change on hover
          this.size = this.baseSize + force * 2
        } else {
          // Return to original size
          if (this.size > this.baseSize) {
            this.size -= 0.1
          }
        }
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
      const particleCount = isMobile ? 40 : 80
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
    window.addEventListener("mousemove", handleMouseMove)
    resizeCanvas()
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ pointerEvents: "none" }} />

      <div className="relative z-10 max-w-5xl w-full px-4 md:px-6 py-24 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeOut" }}>
            <motion.div
              className="mb-6 inline-block"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
            >
              <span className="px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm backdrop-blur-sm">
                Software Engineer & AI Enthusiast
              </span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl font-bold tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
            >
              Hi, I'm{" "}
              <span className="text-primary relative inline-block">
                Jay
                <motion.span
                  className="absolute -top-1 -right-8 text-2xl"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{
                    rotate: [0, 15, 0, 15, 0],
                    opacity: 1,
                  }}
                  transition={{
                    rotate: { delay: 1.2, duration: 1.5, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 },
                    opacity: { duration: 0.3, delay: 1.2 },
                  }}
                >
                  👋
                </motion.span>
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-muted-foreground mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.7, ease: "easeOut" }}
            >
              Coding the future one project at a time. I create digital solutions that look good, work well, and solve real problems. Let’s build something great together. 💻✨
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.7, ease: "easeOut" }}
            >
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button size="lg" asChild className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="#projects">View My Work</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} transition={{ duration: 0.2 }}>
                <Button variant="outline" size="lg" asChild className="backdrop-blur-sm">
                  <Link href="mailto:souopsylvain@gmail.com">Get In Touch</Link>
                </Button>
              </motion.div>
            </motion.div>

            <motion.div
              className="flex gap-4 mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.1, duration: 0.7 }}
            >
              {[
                { icon: <Github className="h-5 w-5" />, href: "https://github.com/brayanj4y", label: "GitHub" },
                {
                  icon: <Linkedin className="h-5 w-5" />,
                  href: "https://linkedin.com/in/brayan-j4y",
                  label: "LinkedIn",
                },
                {
                  icon: <Instagram className="h-5 w-5" />,
                  href: "https://instagram.com/brayanj4y",
                  label: "Instagram",
                },
              ].map((social, index) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center h-10 w-10 rounded-full bg-primary/5 hover:bg-primary/10"
                  >
                    {social.icon}
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8, ease: [0.175, 0.885, 0.32, 1] }}
          >
            <motion.div
              className="relative w-full aspect-square max-w-md mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-full bg-gradient-to-br from-primary/30 to-primary/10"
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 0.5,
                }}
              />
              <motion.div
                className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.7, 0.9, 0.7],
                }}
                transition={{
                  duration: 8,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  delay: 1,
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  className="relative w-3/4 h-3/4 rounded-full overflow-hidden border-4 border-background"
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.03 }}
                >
                  <Image src="/hero.png?height=400&width=400" alt="Portrait" fill className="object-cover" priority />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 2,
              ease: "easeInOut",
            }}
          >
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
