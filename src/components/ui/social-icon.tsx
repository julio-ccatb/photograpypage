"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface SocialIconProps {
  icon: ReactNode
  href?: string
}

export function SocialIcon({ icon, href = "#" }: SocialIconProps) {
  return (
    <motion.a
      href={href}
      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-amber-500/20 hover:border-amber-500/70 hover:text-amber-400 transition-all duration-300"
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>{icon}</span>
    </motion.a>
  )
}

