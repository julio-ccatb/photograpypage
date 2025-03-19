"use client"

import { motion } from "framer-motion"
import { Check, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type { Studio } from "@/data/studios-data"

interface StudioPricingProps {
  studio: Studio
}

export function StudioPricing({ studio }: StudioPricingProps) {
  if (studio.comingSoon) {
    return (
      <section className="py-12 bg-gradient-to-b from-zinc-900 to-zinc-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tarifas de Alquiler</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Las tarifas para este estudio estarán disponibles próximamente. Regístrate para recibir información cuando
              esté listo.
            </p>
          </motion.div>

          <div className="max-w-2xl mx-auto bg-blue-500/10 border border-blue-500/30 rounded-xl p-8 text-center">
            <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-2">Próximamente</h3>
            <p className="text-gray-300 mb-6">
              Estamos finalizando los detalles de este estudio. Déjanos tus datos y te notificaremos cuando esté
              disponible para reservas.
            </p>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full" asChild>
              <Link href="/contacto">Recibir Notificación</Link>
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-900 to-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Tarifas de Alquiler</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a tus necesidades. Todos los precios incluyen el uso del espacio y
            equipamiento básico.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {studio.pricing.map((price, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative bg-zinc-800/50 border rounded-xl overflow-hidden transition-all duration-300 h-full",
                price.popular ? "border-amber-500" : "border-zinc-700 hover:border-zinc-500",
              )}
            >
              {price.popular && (
                <div className="absolute top-0 right-0 left-0 bg-amber-500 text-black text-xs font-bold py-1 text-center">
                  RECOMENDADO
                </div>
              )}

              <div className={cn("p-6 sm:p-8", price.popular ? "pt-8" : "")}>
                <h3 className="text-xl font-bold mb-2">{price.title}</h3>
                <p className="text-gray-400 mb-4">{price.duration}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-amber-500">{price.price}</span>
                </div>

                <ul className="space-y-3 mb-6">
                  {price.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full rounded-full",
                    price.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-black"
                      : "bg-zinc-700 hover:bg-zinc-600 text-white",
                  )}
                  asChild
                >
                  <Link href="/reservar">Reservar</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

