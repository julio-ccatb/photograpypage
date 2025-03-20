"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function AboutCta() {
  return (
    <section className="py-20 md:py-32 bg-amber-500 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent opacity-20" />
      <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full border-8 border-amber-400/30" />
      <div className="absolute -bottom-20 -left-20 w-60 h-60 rounded-full border-8 border-amber-400/20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-black"
          >
            ¿Listo para crear algo extraordinario juntos?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-black/80 mb-10 max-w-3xl mx-auto"
          >
            Cada imagen cuenta una historia. Permítenos ayudarte a contar la tuya con la calidad y creatividad que
            mereces.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              className="bg-black hover:bg-zinc-800 text-white font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => (window.location.href = "/contacto")}
            >
              Contáctanos
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              className="border-black text-black hover:bg-black/10 font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => (window.location.href = "/portafolio")}
            >
              Ver nuestro trabajo
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

