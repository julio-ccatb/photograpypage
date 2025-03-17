"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function PortfolioHero() {
  return (
    <section className="relative h-[50vh] md:h-[60vh] flex items-center overflow-hidden">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Portafolio de Fotografía"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Contenido */}
      <div className="container mx-auto px-4 z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Nuestro Portafolio</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-6">
            Explora nuestra colección de trabajos fotográficos en diferentes estilos y categorías
          </p>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </motion.div>
      </div>
    </section>
  )
}

