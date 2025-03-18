"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ServicePackage } from "./service-package"
import { packages } from "@/data/services-data"

export function PricingPackages() {
  return (
    <section className="py-16 bg-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm tracking-widest">ELIGE TU PLAN</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Nuestros Paquetes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Elige el paquete que mejor se adapte a tus necesidades y presupuesto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {packages.map((pkg, index) => (
            <ServicePackage key={index} packageData={pkg} />
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-6">
            ¿Necesitas un servicio personalizado? Contáctanos para crear un paquete a medida.
          </p>
          <Button
            variant="outline"
            className="border-amber-500 text-amber-500 hover:bg-amber-500/20 hover:text-amber-400 rounded-full px-8"
            asChild
          >
            <Link href="/contacto">
              Solicitar Presupuesto <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

