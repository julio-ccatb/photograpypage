"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { StudioCard } from "./studio-card"
import { studios } from "@/data/studios-data"

export function StudiosGrid() {
  const [filter, setFilter] = useState("all")

  const filteredStudios =
    filter === "all"
      ? studios
      : studios.filter((studio) => {
          if (filter === "popular") return studio.popular
          // Aquí se pueden agregar más filtros si es necesario
          return true
        })

  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl sm:text-3xl font-bold"
          >
            Estudios Disponibles
          </motion.h2>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-2">
            <button
              onClick={() => setFilter("all")}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === "all" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setFilter("popular")}
              className={`px-3 py-1 rounded-full text-sm ${
                filter === "popular" ? "bg-amber-500 text-black" : "bg-zinc-800 text-white hover:bg-zinc-700"
              }`}
            >
              Más Populares
            </button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredStudios.map((studio, index) => (
            <StudioCard key={studio.id} studio={studio} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

