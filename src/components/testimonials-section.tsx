"use client";

import { motion } from "framer-motion";
import { WaveDivider } from "@/components/ui/wave-divider";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  delay: number;
}

function Testimonial({ quote, author, role, delay }: TestimonialProps) {
  return (
    <motion.div
      className="rounded-2xl border border-zinc-700 bg-zinc-800/50 p-6 shadow-md sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <p className="mb-4 text-base italic sm:mb-6 sm:text-xl">
        &quot;{quote}&quot;
      </p>
      <div className="flex items-center">
        <div className="mr-3 h-10 w-10 rounded-full bg-zinc-700 sm:mr-4 sm:h-12 sm:w-12"></div>
        <div>
          <h4 className="text-sm font-bold sm:text-base">{author}</h4>
          <p className="text-xs text-gray-400 sm:text-sm">{role}</p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="relative bg-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-sm tracking-widest text-amber-500">
            LO QUE DICEN NUESTROS CLIENTES
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Testimonios
          </h2>
        </motion.div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
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
  );
}
