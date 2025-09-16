"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface SkillPillProps {
  name: string
}

const skillLogos: Record<string, string> = {
  "AWS": "/skills/amazonwebservices.svg",
  "Supabase": "/skills/supabase.svg",
  "Clerk": "/skills/clerk.svg",
  "GitHub": "/skills/github.svg",
  "JavaScript": "/skills/javascript.svg",
  "HTML5": "/skills/html5.svg",
  "CSS": "/skills/css.svg",
  "Node.js": "/skills/nodedotjs.svg",
  "Next.js": "/skills/nextdotjs.svg",
  "SQLite3": "/skills/sqlite.svg",
  "MySQL": "/skills/mysql.svg",
  "Postgres": "/skills/postgresql.svg"
}

export default function SkillPill({ name }: SkillPillProps) {
  return (
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className="w-16 h-16 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow relative overflow-hidden"
    >
      <div className="absolute inset-0 flex items-center justify-center p-2">
        <Image
          src={skillLogos[name]}
          alt={`${name} logo`}
          width={40}
          height={40}
          className="object-contain"
        />
      </div>
    </motion.div>
  )
}
