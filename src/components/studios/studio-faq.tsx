"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { studioFAQs } from "@/data/studios-data"
import { cn } from "@/lib/utils"

export function StudioFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-16 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm tracking-widest">PREGUNTAS FRECUENTES</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Dudas Comunes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Respuestas a las preguntas más frecuentes sobre nuestros estudios y servicios.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {studioFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-zinc-700 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={cn(
                    "w-full text-left p-4 flex justify-between items-center transition-all duration-300",
                    openIndex === index ? "bg-zinc-800 border-amber-500" : "bg-zinc-800/50 hover:bg-zinc-800/80",
                  )}
                >
                  <span className="font-medium">{faq.question}</span>
                  <ChevronDown
                    className={cn(
                      "h-5 w-5 text-amber-500 transition-transform duration-300",
                      openIndex === index ? "transform rotate-180" : "",
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300 bg-zinc-800/30",
                    openIndex === index ? "max-h-96 p-4" : "max-h-0",
                  )}
                >
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

