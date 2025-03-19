"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function StudiosHeader() {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-950 pb-16 pt-32">
      <div className="container mx-auto px-4">
        <Link
          href="/"
          className="mb-6 inline-flex items-center text-gray-400 transition-colors hover:text-amber-500"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver al inicio
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
            Nuestros Estudios
          </h1>
          <p className="max-w-3xl text-xl text-gray-300">
            Espacios profesionales diseñados para dar vida a tu visión creativa.
            Equipados con la última tecnología y adaptados a diferentes
            necesidades.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
