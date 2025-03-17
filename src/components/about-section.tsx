"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronRight, Camera, Award, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-b from-black to-zinc-950 overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-500 text-sm tracking-widest">SOBRE NOSOTROS</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">Nuestra Historia</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Columna izquierda - Contenido principal */}
          <motion.div
            className="lg:col-span-5 lg:order-1 order-2"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p className="text-lg text-gray-300 mb-6" variants={itemVariants}>
              En Dvine Studios, creemos que cada imagen cuenta una historia única. Fundado en 2015, nuestro estudio se
              ha dedicado a transformar momentos ordinarios en recuerdos extraordinarios.
            </motion.p>

            <motion.p className="text-lg text-gray-300 mb-8" variants={itemVariants}>
              Nuestro equipo de fotógrafos profesionales combina técnica excepcional con una visión artística
              distintiva, asegurando que cada proyecto refleje la esencia de lo que queremos comunicar.
            </motion.p>

            {/* Estadísticas */}
            <motion.div className="grid grid-cols-2 gap-4 mb-8" variants={itemVariants}>
              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                <div className="flex items-center mb-2">
                  <Award className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="font-medium">Experiencia</span>
                </div>
                <p className="text-3xl font-bold text-amber-500">8+</p>
                <p className="text-sm text-gray-400">Años en el sector</p>
              </div>

              <div className="bg-zinc-900/50 rounded-lg p-4 border border-zinc-800">
                <div className="flex items-center mb-2">
                  <Users className="h-5 w-5 text-amber-500 mr-2" />
                  <span className="font-medium">Clientes</span>
                </div>
                <p className="text-3xl font-bold text-amber-500">500+</p>
                <p className="text-sm text-gray-400">Proyectos completados</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="border-amber-500 text-amber-500 hover:bg-amber-500/20 hover:text-amber-400 transition-all duration-300 rounded-full"
              >
                Conoce Nuestro Equipo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Composición de imágenes */}
          <motion.div
            className="lg:col-span-7 lg:order-2 order-1 relative"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              {/* Imagen principal */}
              <motion.div
                className="absolute top-0 right-0 w-3/4 h-full rounded-lg overflow-hidden shadow-2xl z-20"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image src="/placeholder.svg?height=800&width=600" alt="Nuestro equipo" fill className="object-cover" />
                <div className="absolute inset-0 border border-white/10 rounded-lg" />
              </motion.div>

              {/* Imagen secundaria */}
              <motion.div
                className="absolute bottom-12 left-0 w-1/2 h-2/3 rounded-lg overflow-hidden shadow-xl z-10"
                initial={{ rotate: -3 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Nuestro estudio"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 border border-white/10 rounded-lg" />
              </motion.div>

              {/* Elemento decorativo - Cámara */}
              <motion.div
                className="absolute -bottom-5 right-10 w-16 h-16 rounded-full bg-amber-500 flex items-center justify-center z-30 shadow-lg"
                animate={{
                  y: [0, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Camera className="h-8 w-8 text-black" />
              </motion.div>

              {/* Elemento decorativo - Borde */}
              <div className="absolute top-10 left-10 w-3/4 h-full border border-amber-500/30 rounded-lg -z-10" />
            </div>
          </motion.div>
        </div>

        {/* Cita destacada */}
        <motion.div
          className="mt-16 md:mt-24 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -top-6 left-0 text-6xl text-amber-500/20 font-serif">"</div>
            <p className="text-xl md:text-2xl italic text-gray-300 mb-4 px-8">
              La fotografía es el arte de capturar momentos que perdurarán para siempre.
            </p>
            <div className="absolute -bottom-6 right-0 text-6xl text-amber-500/20 font-serif">"</div>
          </div>
          <p className="text-amber-500 font-medium">Enmanuel Hassan</p>
          <p className="text-sm text-gray-400">Fundador & Director Creativo</p>
        </motion.div>
      </div>
    </section>
  )
}

