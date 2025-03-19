"use client"

import { motion } from "framer-motion"
import { ContactTestimonial } from "./contact-testimonial"
import { testimonials } from "@/data/contact-data"

export function ContactTestimonials() {
  return (
    <section className="py-16 bg-gradient-to-b from-zinc-950 to-zinc-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm tracking-widest">OPINIONES DE CLIENTES</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Lo Que Dicen Nuestros Clientes</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ContactTestimonial
              key={index}
              text={testimonial.text}
              name={testimonial.name}
              role={testimonial.role}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

