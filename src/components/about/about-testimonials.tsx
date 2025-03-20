"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
import { testimonialsData } from "@/data/about-data";

export function AboutTestimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-black py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-amber-500">
            TESTIMONIOS
          </span>
          <h3 className="mb-6 mt-2 text-3xl font-bold md:text-4xl">
            {testimonialsData.title}
          </h3>
          <p className="mx-auto max-w-3xl text-gray-300">
            {testimonialsData.description}
          </p>
        </motion.div>

        {/* Testimonials */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {testimonialsData.testimonials.map(
            (
              testimonial: {
                stars: number;
                context: string;
                quote: string;
                image: string;
                name: string;
                role: string;
              },
              index,
            ) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative rounded-lg border border-zinc-800 bg-zinc-900/50 p-8"
              >
                {/* Decorative quote mark */}
                <div className="absolute right-4 top-4 font-serif text-6xl text-amber-500/10">
                  &quot;
                </div>

                {/* Context */}
                <div className="mb-4 inline-block rounded-full bg-amber-500/10 px-3 py-1 text-xs text-amber-500">
                  {testimonial.context}
                </div>

                {/* Quote */}
                <p className="relative z-10 mb-6 text-gray-300">
                  &quot;{testimonial.quote}&quot;
                </p>

                {/* Stars */}
                <div className="mb-4 flex">
                  {Array.from({ length: testimonial.stars }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-500 text-amber-500"
                    />
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative mr-3 h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
