"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { featuredProjectsData } from "@/data/about-data"

export function AboutProjects() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">NUESTRO TRABAJO</span>
          <h3 className="text-3xl md:text-4xl font-bold mt-2 mb-6">{featuredProjectsData.title}</h3>
          <p className="text-gray-300 max-w-3xl mx-auto">{featuredProjectsData.description}</p>
        </motion.div>

        {/* Projects */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {featuredProjectsData.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg aspect-[3/4]">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300" />

                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="bg-black/40 backdrop-blur-sm p-4 rounded-lg transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-amber-500 text-sm block mb-1">
                      {project.year} • {project.client}
                    </span>
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-300 text-sm">{project.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/portafolio"
            className="inline-block text-amber-500 hover:text-amber-400 font-medium border-b border-amber-500 hover:border-amber-400 pb-1 transition-colors duration-300"
          >
            Ver más proyectos en nuestro portafolio
          </a>
        </div>
      </div>
    </section>
  )
}

