"use client"

import { motion } from "framer-motion"
import type { Studio } from "@/data/studios-data"

interface StudioFeaturesDetailProps {
  studio: Studio
}

export function StudioFeaturesDetail({ studio }: StudioFeaturesDetailProps) {
  return (
    <section className="py-12 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Características</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studio.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700"
            >
              <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

