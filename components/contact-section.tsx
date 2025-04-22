"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
  const socials = [
    {
      name: "Email",
      icon: <Mail className="h-4 w-4" />,
      href: "mailto:souopsylvain@gmail.com",
      label: "souopsylvain@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="h-4 w-4" />,
      href: "https://github.com/brayanj4y",
      label: "github.com/brayanj4y",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-4 w-4" />,
      href: "https://linkedin.com/in/brayan-j4y",
      label: "linkedin.com/in/brayan-j4y",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-4 w-4" />,
      href: "https://wa.me/237652570592",
      label: "+237 652 570 592",
    },
  ]

  return (
    <section id="contact" className="py-16 px-3 md:px-5 lg:px-6 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3 text-center">Let's Connect!</h2>
        <p className="text-muted-foreground text-center mb-10">
          Got a cool project idea or just want to chat about tech? Drop me a message—I'm always ready to collaborate! 🚀
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Link
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3 rounded-lg border border-primary/10 bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-medium">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.label}</p>
                </div>
                <ExternalLink className="h-3 w-3 ml-auto text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center gap-3">
          <div className="text-xs text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Souop Sylvain Brayan. All rights reserved.
          </div>

          <div className="flex items-center gap-1 text-xs text-muted-foreground text-center md:text-left">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 text-primary animate-pulse" />
            <span>by Jay, proud member of</span>
            <Link
              href="https://bytephantoms.com"
              target="_blank"
              className="text-primary hover:underline"
            >
              Byte Phantoms
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
