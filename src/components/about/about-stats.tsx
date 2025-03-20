"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { statsData } from "@/data/about-data"

export function AboutStats() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.5 })

  return (
    <section ref={sectionRef} className="py-16 bg-amber-500 text-black relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl" />
      <div className="absolute -bottom-40 -right-20 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="text-5xl md:text-6xl font-bold mb-2">{stat.value}</div>
              <div className="text-lg font-medium mb-1">{stat.label}</div>
              <div className="text-sm opacity-70">{stat.context}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

