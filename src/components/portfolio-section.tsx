"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PortfolioItemProps {
  index: number
  title: string
  category: string
  aspectRatio?: string
}

function PortfolioItem({ index, title, category, aspectRatio = "aspect-square" }: PortfolioItemProps) {
  return (
    <motion.div
      className={`relative overflow-hidden group ${aspectRatio} w-full h-full rounded-2xl shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Image
        src={`/placeholder.svg?height=800&width=1200`}
        alt={title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Gradient overlay that slides up on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 sm:opacity-0 group-hover:opacity-100 transition-all duration-500 transform sm:translate-y-8 sm:group-hover:translate-y-0" />

      {/* Content that slides up on hover */}
      <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-6 z-10">
        <div className="overflow-hidden">
          <motion.span className="inline-block text-amber-500 text-xs sm:text-sm font-medium mb-1 sm:mb-2 opacity-100 sm:opacity-0 sm:transform sm:translate-y-full sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:transition-all sm:duration-500 sm:delay-100">
            {category}
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h3 className="text-xl sm:text-2xl font-bold opacity-100 sm:opacity-0 sm:transform sm:translate-y-full sm:group-hover:opacity-100 sm:group-hover:translate-y-0 sm:transition-all sm:duration-500 sm:delay-200">
            {title}
          </motion.h3>
        </div>

        <div className="overflow-hidden hidden sm:block">
          <motion.div className="mt-4 transform translate-y-full opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-300">
            <Button
              variant="outline"
              size="sm"
              className="border-white/30 text-white hover:bg-white/20 hover:border-white/60 transition-all duration-300 rounded-full"
            >
              Ver Proyecto
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-amber-500/30 transition-all duration-500 delay-300" />
    </motion.div>
  )
}

export function PortfolioSection() {
  const categories = ["Todos", "Retratos", "Comercial", "Moda", "Eventos", "Productos"]

  return (
    <section className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest">NUESTRO TRABAJO</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 mb-4 sm:mb-6">Portafolio Destacado</h2>
          <p className="text-gray-400 max-w-2xl mx-auto px-2">
            Explora nuestra diversa colección de fotografía profesional en varios estilos y temáticas.
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`px-3 py-1 sm:px-6 sm:py-2 text-xs sm:text-sm transition-all duration-300 rounded-full ${
                index === 0
                  ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-md"
                  : "bg-zinc-800/50 text-white hover:bg-zinc-700/70 border border-zinc-700"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Improved Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {/* Featured item 1 - spans all columns on mobile, 3 on desktop */}
          <div className="md:col-span-3">
            <PortfolioItem index={0} title="Elegancia en Movimiento" category="Moda" aspectRatio="aspect-[16/9]" />
          </div>

          {/* Regular items - 1 column on mobile, 3 on desktop */}
          <div>
            <PortfolioItem index={1} title="Perspectiva Urbana" category="Retratos" aspectRatio="aspect-square" />
          </div>
          <div>
            <PortfolioItem index={2} title="Exhibición de Productos" category="Comercial" aspectRatio="aspect-square" />
          </div>
          <div>
            <PortfolioItem index={3} title="Identidad Corporativa" category="Comercial" aspectRatio="aspect-square" />
          </div>

          {/* Featured item 2 - spans 2 columns on desktop */}
          <div className="md:col-span-2">
            <PortfolioItem index={4} title="Momentos de Boda" category="Eventos" aspectRatio="aspect-[16/9]" />
          </div>

          {/* Regular item */}
          <div>
            <PortfolioItem index={5} title="Arte Culinario" category="Productos" aspectRatio="aspect-square" />
          </div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300 px-6 py-4 sm:px-8 sm:py-6 rounded-full"
            >
              Explorar Galería Completa
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

