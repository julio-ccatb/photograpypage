"use client";

import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { Studio } from "@/data/studios-data";
import { ROUTES } from "@/data/info";

interface StudioPricingProps {
  studio: Studio;
}

export function StudioPricing({ studio }: StudioPricingProps) {
  if (studio.comingSoon) {
    return (
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
              Tarifas de Alquiler
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Las tarifas para este estudio estarán disponibles próximamente.
              Regístrate para recibir información cuando esté listo.
            </p>
          </motion.div>

          <div className="mx-auto max-w-2xl rounded-xl border border-blue-500/30 bg-blue-500/10 p-8 text-center">
            <Clock className="mx-auto mb-4 h-12 w-12 text-blue-400" />
            <h3 className="mb-2 text-2xl font-bold">Próximamente</h3>
            <p className="mb-6 text-gray-300">
              Estamos finalizando los detalles de este estudio. Déjanos tus
              datos y te notificaremos cuando esté disponible para reservas.
            </p>
            <Button
              className="rounded-full bg-blue-500 text-white hover:bg-blue-600"
              asChild
            >
              <Link href="/contacto">Recibir Notificación</Link>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">
            Tarifas de Alquiler
          </h2>
          <p className="mx-auto max-w-2xl text-gray-400">
            Elige el plan que mejor se adapte a tus necesidades. Todos los
            precios incluyen el uso del espacio y equipamiento básico.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          {studio.pricing.map((price, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative h-full overflow-hidden rounded-xl border bg-zinc-800/50 transition-all duration-300",
                price.popular
                  ? "border-amber-500"
                  : "border-zinc-700 hover:border-zinc-500",
              )}
            >
              {price.popular && (
                <div className="absolute left-0 right-0 top-0 bg-amber-500 py-1 text-center text-xs font-bold text-black">
                  RECOMENDADO
                </div>
              )}

              <div className={cn("p-6 sm:p-8", price.popular ? "pt-8" : "")}>
                <h3 className="mb-2 text-xl font-bold">{price.title}</h3>
                <p className="mb-4 text-gray-400">{price.duration}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-amber-500">
                    {price.price}
                  </span>
                </div>

                <ul className="mb-6 space-y-3">
                  {price.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full rounded-full",
                    price.popular
                      ? "bg-amber-500 text-black hover:bg-amber-600"
                      : "bg-zinc-700 text-white hover:bg-zinc-600",
                  )}
                  asChild
                >
                  <Link href={ROUTES.RESERVAS}>Reservar</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
