"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveDivider } from "@/components/ui/wave-divider";
import Link from "next/link";
import { ROUTES } from "@/data/info";

export function CTASection() {
  return (
    <section className="relative bg-amber-900 py-16 text-white md:py-24">
      <div className="container mx-auto px-4 text-center">
        <motion.h2
          className="mb-4 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          ¿Listo para Crear Algo Increíble?
        </motion.h2>

        <motion.p
          className="mx-auto mb-6 max-w-2xl px-2 text-base text-gray-200 sm:mb-8 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Colaboremos para dar vida a tu visión con nuestros servicios de
          fotografía profesional.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button
            className="rounded-full bg-amber-500 px-6 py-4 text-base text-black shadow-lg hover:bg-amber-400 sm:px-8 sm:py-6 sm:text-lg"
            asChild
          >
            <Link href={ROUTES.RESERVAS}>
              Reserva Tu Sesión Ahora
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Wave divider at the bottom */}
      <WaveDivider fill="fill-zinc-950" />
    </section>
  );
}
