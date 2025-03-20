"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Eye, Lightbulb } from "lucide-react"
import { valuesData } from "@/data/about-data"

export function AboutValues() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  // Función para obtener el icono correcto según el nombre
  const getIcon = (iconName: string) => {
    const icons = {
      heart: <Heart className="h-10 w-10 text-amber-500" />,
      eye: <Eye className="h-10 w-10 text-amber-500" />,
      lightbulb: <Lightbulb className="h-10 w-10 text-amber-500" />,
    }
    return icons[iconName as keyof typeof icons] || <Heart className="h-10 w-10 text-amber-500" />
  }

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-black overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">
            NUESTROS PRINCIPIOS
          </span>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{valuesData.title}</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">{valuesData.description}</p>
        </motion.div>

        {/* Values */}
        <div className="max-w-6xl mx-auto">
          {valuesData.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 mb-20 last:mb-0 items-center`}
            >
              {/* Icon */}
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="w-32 h-32 rounded-full bg-zinc-900/80 flex items-center justify-center border border-zinc-800">
                  {getIcon(value.icon)}
                </div>
              </div>

              {/* Content */}
              <div className="w-full md:w-2/3">
                <h4 className="text-2xl font-bold mb-3">{value.title}</h4>
                <p className="text-gray-300 mb-4">{value.description}</p>

                {/* Story */}
                <div className="bg-zinc-900/50 p-4 rounded-lg border-l-4 border-amber-500">
                  <p className="text-gray-400 italic">{value.story}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

