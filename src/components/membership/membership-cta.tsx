"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface MembershipCTAProps {
  onGetStarted: () => void
}

export function MembershipCTA({ onGetStarted }: MembershipCTAProps) {
  return (
    <section className="py-16 md:py-24 bg-zinc-950 relative overflow-hidden">
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">ÚNETE AHORA</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 mb-6">
            Potencia tu creatividad con nuestra membresía premium
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            No esperes más para disfrutar de todos los beneficios que tenemos para ti. Únete hoy y lleva tu fotografía
            al siguiente nivel.
          </p>

          <Button
            className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg"
            onClick={onGetStarted}
          >
            Comenzar ahora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

