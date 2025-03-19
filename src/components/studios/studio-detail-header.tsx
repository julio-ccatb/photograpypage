"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Users, Maximize2, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Studio } from "@/data/studios-data"

interface StudioDetailHeaderProps {
  studio: Studio
}

export function StudioDetailHeader({ studio }: StudioDetailHeaderProps) {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-b from-black to-zinc-950">
      <div className="container mx-auto px-4">
        <Link
          href="/estudios"
          className="inline-flex items-center text-gray-400 hover:text-amber-500 mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a estudios
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="flex items-center gap-3 mb-4">
              <h1 className="text-4xl sm:text-5xl font-bold">{studio.name}</h1>
              {studio.comingSoon && (
                <span className="bg-blue-500 text-white text-xs font-bold py-1 px-3 rounded-full flex items-center">
                  <Clock className="h-3 w-3 mr-1" />
                  Próximamente
                </span>
              )}
            </div>
            <p className="text-xl text-gray-300 mb-6">{studio.fullDescription}</p>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-zinc-800/70 px-4 py-2 rounded-lg flex items-center">
                <Maximize2 className="h-5 w-5 text-amber-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Tamaño</p>
                  <p className="font-medium">{studio.size}</p>
                </div>
              </div>

              <div className="bg-zinc-800/70 px-4 py-2 rounded-lg flex items-center">
                <Users className="h-5 w-5 text-amber-500 mr-2" />
                <div>
                  <p className="text-sm text-gray-400">Capacidad</p>
                  <p className="font-medium">Hasta {studio.capacity} personas</p>
                </div>
              </div>
            </div>

            {studio.comingSoon ? (
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
                <h3 className="font-semibold text-blue-400 mb-2 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Apertura Próximamente
                </h3>
                <p className="text-gray-300">
                  Este estudio estará disponible próximamente. Puedes registrarte para recibir una notificación cuando
                  esté listo para reservas.
                </p>
              </div>
            ) : (
              <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-6 py-3" asChild>
                <Link href="/reservar">Reservar Este Estudio</Link>
              </Button>
            )}

            {studio.comingSoon && (
              <Button
                variant="outline"
                className="mt-4 border-blue-500 text-blue-500 hover:bg-blue-500/10 rounded-full px-6 py-3"
                asChild
              >
                <Link href="/contacto">Notificarme Cuando Esté Disponible</Link>
              </Button>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[300px] sm:h-[400px] rounded-xl overflow-hidden"
          >
            <Image
              src={studio.mainImage || "/placeholder.svg"}
              alt={studio.name}
              fill
              className={`object-cover ${studio.comingSoon ? "filter grayscale" : ""}`}
            />

            {studio.popular && !studio.comingSoon && (
              <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold py-1 px-3 rounded-full">
                Popular
              </div>
            )}

            {studio.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-blue-500/80 backdrop-blur-sm text-white font-bold py-2 px-6 rounded-lg transform -rotate-12 text-xl">
                  Próximamente
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

