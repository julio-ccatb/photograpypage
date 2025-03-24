"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Users, Maximize2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Studio } from "@/data/studios-data";
import { ROUTES } from "@/data/info";

interface StudioDetailHeaderProps {
  studio: Studio;
}

export function StudioDetailHeader({ studio }: StudioDetailHeaderProps) {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 pb-16 pt-32">
      <div className="container mx-auto px-4">
        <Link
          href="/estudios"
          className="mb-6 inline-flex items-center text-gray-400 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a estudios
        </Link>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-4 flex items-center gap-3">
              <h1 className="text-4xl font-bold sm:text-5xl">{studio.name}</h1>
              {studio.comingSoon && (
                <span className="flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
                  <Clock className="mr-1 h-3 w-3" />
                  Próximamente
                </span>
              )}
            </div>
            <p className="mb-6 text-xl text-gray-300">
              {studio.fullDescription}
            </p>

            <div className="mb-6 flex flex-wrap gap-4">
              <div className="flex items-center rounded-lg bg-zinc-800/70 px-4 py-2">
                <Maximize2 className="mr-2 h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-400">Tamaño</p>
                  <p className="font-medium">{studio.size}</p>
                </div>
              </div>

              <div className="flex items-center rounded-lg bg-zinc-800/70 px-4 py-2">
                <Users className="mr-2 h-5 w-5 text-amber-500" />
                <div>
                  <p className="text-sm text-gray-400">Capacidad</p>
                  <p className="font-medium">
                    Hasta {studio.capacity} personas
                  </p>
                </div>
              </div>
            </div>

            {studio.comingSoon ? (
              <div className="mb-6 rounded-lg border border-blue-500/30 bg-blue-500/10 p-4">
                <h3 className="mb-2 flex items-center font-semibold text-blue-400">
                  <Clock className="mr-2 h-5 w-5" />
                  Apertura Próximamente
                </h3>
                <p className="text-gray-300">
                  Este estudio estará disponible próximamente. Puedes
                  registrarte para recibir una notificación cuando esté listo
                  para reservas.
                </p>
              </div>
            ) : (
              <Button
                className="rounded-full bg-amber-500 px-6 py-3 text-black hover:bg-amber-600"
                asChild
              >
                <Link href={ROUTES.RESERVAS}>Reservar Este Estudio</Link>
              </Button>
            )}

            {studio.comingSoon && (
              <Button
                variant="outline"
                className="mt-4 rounded-full border-blue-500 px-6 py-3 text-blue-500 hover:bg-blue-500/10"
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
            className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px]"
          >
            <Image
              src={studio.mainImage || "/placeholder.svg"}
              alt={studio.name}
              fill
              className={`object-cover ${studio.comingSoon ? "grayscale filter" : ""}`}
            />

            {studio.popular && !studio.comingSoon && (
              <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
                Popular
              </div>
            )}

            {studio.comingSoon && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="-rotate-12 transform rounded-lg bg-blue-500/80 px-6 py-2 text-xl font-bold text-white backdrop-blur-sm">
                  Próximamente
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
