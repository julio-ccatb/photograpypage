"use client"

import { motion } from "framer-motion"
import { WaveDivider } from "@/components/ui/wave-divider"

interface TestimonialProps {
  quote: string
  author: string
  role: string
  delay: number
}

function Testimonial({ quote, author, role, delay }: TestimonialProps) {
  return (
    <motion.div
      className="bg-zinc-800/50 p-6 sm:p-8 border border-zinc-700 rounded-2xl shadow-md"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <p className="text-base sm:text-xl italic mb-4 sm:mb-6">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-zinc-700 mr-3 sm:mr-4"></div>
        <div>
          <h4 className="font-bold text-sm sm:text-base">{author}</h4>
          <p className="text-gray-400 text-xs sm:text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}

export function TestimonialsSection() {
  return (
    <section className="py-16 md:py-24 bg-zinc-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest">LO QUE DICEN NUESTROS CLIENTES</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Testimonios</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          <Testimonial
            quote="El equipo capturó momentos que ni siquiera sabía que existían. Trabajo verdaderamente excepcional."
            author="Sara Jiménez"
            role="Modelo de Moda"
            delay={0}
          />
          <Testimonial
            quote="Nuestra línea de productos nunca se ha visto mejor. La atención al detalle es extraordinaria."
            author="Miguel Chen"
            role="Director de Marketing"
            delay={0.2}
          />
        </div>
      </div>

      {/* Wave divider at the bottom */}
      <WaveDivider fill="fill-amber-900" />
    </section>
  )
}

