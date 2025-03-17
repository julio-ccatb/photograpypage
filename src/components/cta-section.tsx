"use client"

import { motion } from "framer-motion"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WaveDivider } from "@/components/ui/wave-divider"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-amber-900 text-white relative">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo para Crear Algo Increíble?
        </motion.h2>

        <motion.p
          className="text-base sm:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto text-gray-200 px-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Colaboremos para dar vida a tu visión con nuestros servicios de fotografía profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            className="bg-amber-500 text-black hover:bg-amber-400 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg"
            asChild
          >
            <Link href="/reservar">
              Reserva Tu Sesión Ahora
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave divider at the bottom */}
      <WaveDivider fill="fill-zinc-950" />
    </section>
  )
}

