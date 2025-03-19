"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactCTA() {
  return (
    <section className="py-16 bg-amber-900/20">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para Capturar Momentos Extraordinarios?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Reserva tu sesión fotográfica hoy y comienza a crear recuerdos que durarán toda la vida.
          </p>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg" asChild>
            <Link href="/reservar">
              Reserva Tu Sesión Ahora <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

