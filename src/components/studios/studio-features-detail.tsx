"use client";

import { motion } from "framer-motion";
import type { Studio } from "@/data/studios-data";

interface StudioFeaturesDetailProps {
  studio: Studio;
}

export function StudioFeaturesDetail({ studio }: StudioFeaturesDetailProps) {
  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Características</h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {studio.features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-xl border border-zinc-700 bg-zinc-800/50 p-6"
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
