"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Camera, ChevronRight } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  delay: number
}

function ServiceCard({ title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="bg-zinc-800/50 p-6 sm:p-8 border border-zinc-700 hover:border-amber-500/70 transition-colors duration-300 group rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:bg-amber-500 group-hover:text-black transition-all duration-300">
        <Camera className="h-6 w-6 sm:h-8 sm:w-8" />
      </div>
      <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{title}</h3>
      <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6">{description}</p>
      <Link
        href="#"
        className="inline-flex items-center text-amber-500 hover:text-amber-400 transition-colors duration-300 text-sm sm:text-base"
      >
        Saber Más <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  )
}

export function ServicesSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest">NUESTRA EXPERIENCIA</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Servicios Fotográficos</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          <ServiceCard
            title="Fotografía de Retratos"
            description="Captura tu esencia con nuestras sesiones de retratos profesionales diseñadas para resaltar tu personalidad única."
            delay={0}
          />
          <ServiceCard
            title="Fotografía Comercial"
            description="Eleva tu marca con fotografía de productos y comercial impresionante que vende tu visión."
            delay={0.2}
          />
          <ServiceCard
            title="Cobertura de Eventos"
            description="Documenta tus momentos especiales con nuestros servicios completos de fotografía de eventos."
            delay={0.4}
          />
        </div>
      </div>
    </section>
  )
}

