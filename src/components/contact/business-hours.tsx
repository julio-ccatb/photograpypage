"use client"

import { motion } from "framer-motion"
import { Clock } from "lucide-react"
import { businessHours } from "@/data/contact-data"

export function BusinessHours() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className="bg-zinc-900/50 rounded-2xl border border-zinc-800 overflow-hidden"
    >
      <div className="p-6 sm:p-8">
        <div className="flex items-center mb-4">
          <Clock className="h-6 w-6 text-amber-500 mr-3" />
          <h3 className="text-xl font-bold">Horario de Atención</h3>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between py-2 border-b border-zinc-800">
            <span>Lunes - Viernes</span>
            <span className="font-medium">{businessHours.weekdays}</span>
          </div>
          <div className="flex justify-between py-2 border-b border-zinc-800">
            <span>Sábado</span>
            <span className="font-medium">{businessHours.saturday}</span>
          </div>
          <div className="flex justify-between py-2">
            <span>Domingo</span>
            <span className="text-amber-500">{businessHours.sunday}</span>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

