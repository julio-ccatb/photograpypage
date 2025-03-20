"use client";

import { philosophyData } from "@/data/about-data";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function AboutPhilosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-zinc-950 py-20 md:py-32"
    >
      <div className="container mx-auto px-4">
        {/* Main Quote */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.8 }}
          className="mx-auto mb-20 max-w-4xl text-center"
        >
          <div className="relative">
            <div className="absolute -left-10 -top-10 font-serif text-9xl text-amber-500/10">
              &quot;
            </div>
            <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
              {philosophyData.mainQuote}
            </h2>
            <div className="absolute -bottom-10 -right-10 font-serif text-9xl text-amber-500/10">
              &quot;
            </div>
          </div>
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 text-center"
        >
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-amber-500">
            NUESTRA ESENCIA
          </span>
          <h3 className="mb-6 mt-2 text-3xl font-bold md:text-4xl">
            {philosophyData.title}
          </h3>
          <p className="mx-auto max-w-3xl text-gray-300">
            {philosophyData.description}
          </p>
        </motion.div>

        {/* Principles */}
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {philosophyData.principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.2 }}
              className="rounded-lg border border-zinc-800 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-amber-500/30"
            >
              <h4 className="mb-4 text-xl font-bold text-amber-500">
                {principle.title}
              </h4>
              <p className="text-gray-300">{principle.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
