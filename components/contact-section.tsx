"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, MessageCircle, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactSection() {
  const socials = [
    {
      name: "Email",
      icon: <Mail className="h-5 w-5" />,
      href: "mailto:souopsylvain@gmail.com",
      label: "souopsylvain@gmail.com",
    },
    {
      name: "GitHub",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/brayanj4y",
      label: "github.com/brayanj4y",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://linkedin.com/in/brayan-j4y",
      label: "linkedin.com/in/brayan-j4y",
    },
    {
      name: "WhatsApp",
      icon: <MessageCircle className="h-5 w-5" />,
      href: "https://wa.me/237652570592",
      label: "+237 652 570 592",
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 md:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,hsl(var(--primary)/0.2),transparent_40%)] z-0"></div>
      <div className="max-w-3xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-center">Let's Connect!</h2>
        <p className="text-muted-foreground text-center mb-12">
          Have a project in mind or just want to say hi? Reach out through any of these channels.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
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
                className="flex items-center gap-4 p-4 rounded-lg border border-primary/10 bg-background/50 hover:bg-background/80 transition-colors"
              >
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  {social.icon}
                </div>
                <div>
                  <h3 className="font-medium">{social.name}</h3>
                  <p className="text-sm text-muted-foreground">{social.label}</p>
                </div>
                <ExternalLink className="h-4 w-4 ml-auto text-muted-foreground" />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-white text-primary hover:bg-gray-50 border border-gray-200 shadow-sm px-8 py-6 h-auto font-medium rounded-lg transition-all hover:shadow-md"
            size="lg"
            asChild
          >
            <Link href="mailto:souopsylvain@gmail.com">Get In Touch</Link>
          </Button>
        </motion.div>

        <div className="mt-24 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Souop Sylvain Brayan. All rights reserved.
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground text-center md:text-left">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-primary animate-pulse" />
            <span>by Jay, a member of</span>
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
