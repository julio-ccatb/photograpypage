"use client";

import { motion } from "framer-motion";
import { studios } from "@/data/studios-data";

export function StudioFeatures() {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="text-sm tracking-widest text-amber-500">
            CARACTERÍSTICAS DESTACADAS
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
            Equipamiento Profesional
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Todos nuestros estudios están equipados con tecnología de última
            generación para garantizar resultados excepcionales.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {studios[0]!.features.slice(0, 6).map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6 transition-colors duration-300 hover:border-amber-500/50"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500">
                {feature?.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{feature?.title}</h3>
              <p className="text-gray-400">{feature?.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
