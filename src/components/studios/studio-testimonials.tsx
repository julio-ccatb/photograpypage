"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { studioTestimonials } from "@/data/studios-data";
import { Star } from "lucide-react";

export function StudioTestimonials() {
  return (
    <section className="bg-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm tracking-widest text-amber-500">
            OPINIONES DE CLIENTES
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Lo Que Dicen Nuestros Clientes
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {studioTestimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6"
            >
              <div className="mb-4 flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="mr-1 h-4 w-4 text-amber-500"
                    fill="currentColor"
                  />
                ))}
              </div>
              <p className="mb-6 text-gray-300">
                &quot;{testimonial.text}&quot;
              </p>
              <div className="flex items-center">
                <div className="mr-4 h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-amber-500">{testimonial.role}</p>
                  <p className="text-xs text-gray-400">{testimonial.studio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
