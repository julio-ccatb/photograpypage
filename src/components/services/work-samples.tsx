"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { WorkSample } from "./work-sample"
import { workSamples } from "@/data/services-data"

export function WorkSamples() {
  return (
    <section className="py-16 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm tracking-widest">NUESTRO TRABAJO</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2">Ejemplos Recientes</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Explora algunos de nuestros proyectos recientes para ver la calidad de nuestro trabajo.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {workSamples.map((sample, index) => (
            <WorkSample key={index} sample={sample} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full" asChild>
            <Link href="/portafolio">
              Ver Portafolio Completo <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

