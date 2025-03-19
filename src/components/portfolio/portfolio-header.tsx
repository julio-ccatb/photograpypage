"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export function PortfolioHeader() {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <Link href="/" className="inline-flex items-center text-gray-400 hover:text-amber-500 mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al inicio
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Nuestro Portafolio</h1>
          <p className="text-xl text-gray-300 max-w-3xl">
            Explora nuestra colección de trabajos fotográficos en diferentes estilos y categorías, mostrando nuestra
            pasión por capturar momentos extraordinarios.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

