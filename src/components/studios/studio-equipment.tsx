"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import type { Studio } from "@/data/studios-data"

interface StudioEquipmentProps {
  studio: Studio
}

export function StudioEquipment({ studio }: StudioEquipmentProps) {
  return (
    <section className="py-12 bg-zinc-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Equipamiento Disponible</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {studio.equipment.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 rounded-xl border border-zinc-700 overflow-hidden"
            >
              <div className="bg-zinc-800 p-4 border-b border-zinc-700">
                <h3 className="font-bold text-lg">{category.category}</h3>
              </div>
              <div className="p-4">
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

