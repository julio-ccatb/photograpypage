"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ChevronRight, Camera, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="overflow-hidden bg-gradient-to-b from-black to-zinc-950 py-16 md:py-24"
    >
      <div className="container mx-auto px-4">
        {/* Encabezado de sección */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-sm tracking-widest text-amber-500">
            SOBRE NOSOTROS
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Nuestra Historia
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
          {/* Columna izquierda - Contenido principal */}
          <motion.div
            className="order-2 lg:order-1 lg:col-span-5"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.p
              className="mb-6 text-lg text-gray-300"
              variants={itemVariants}
            >
              En Dvine Studios, creemos que cada imagen cuenta una historia
              única. Fundado en 2015, nuestro estudio se ha dedicado a
              transformar momentos ordinarios en recuerdos extraordinarios.
            </motion.p>

            <motion.p
              className="mb-8 text-lg text-gray-300"
              variants={itemVariants}
            >
              Nuestro equipo de fotógrafos profesionales combina técnica
              excepcional con una visión artística distintiva, asegurando que
              cada proyecto refleje la esencia de lo que queremos comunicar.
            </motion.p>

            {/* Estadísticas */}
            <motion.div
              className="mb-8 grid grid-cols-2 gap-4"
              variants={itemVariants}
            >
              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="mb-2 flex items-center">
                  <Award className="mr-2 h-5 w-5 text-amber-500" />
                  <span className="font-medium">Experiencia</span>
                </div>
                <p className="text-3xl font-bold text-amber-500">8+</p>
                <p className="text-sm text-gray-400">Años en el sector</p>
              </div>

              <div className="rounded-lg border border-zinc-800 bg-zinc-900/50 p-4">
                <div className="mb-2 flex items-center">
                  <Users className="mr-2 h-5 w-5 text-amber-500" />
                  <span className="font-medium">Clientes</span>
                </div>
                <p className="text-3xl font-bold text-amber-500">500+</p>
                <p className="text-sm text-gray-400">Proyectos completados</p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Button
                variant="outline"
                className="rounded-full border-amber-500 text-amber-500 transition-all duration-300 hover:bg-amber-500/20 hover:text-amber-400"
              >
                Conoce Nuestro Equipo
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>

          {/* Columna derecha - Composición de imágenes */}
          <motion.div
            className="relative order-1 lg:order-2 lg:col-span-7"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative h-[300px] sm:h-[400px] md:h-[500px]">
              {/* Imagen principal */}
              <motion.div
                className="absolute right-0 top-0 z-20 h-full w-3/4 overflow-hidden rounded-lg shadow-2xl"
                initial={{ rotate: 2 }}
                whileHover={{ rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Nuestro equipo"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 rounded-lg border border-white/10" />
              </motion.div>

              {/* Imagen secundaria */}
              <motion.div
                className="absolute bottom-12 left-0 z-10 h-2/3 w-1/2 overflow-hidden rounded-lg shadow-xl"
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
                <div className="absolute inset-0 rounded-lg border border-white/10" />
              </motion.div>

              {/* Elemento decorativo - Cámara */}
              <motion.div
                className="absolute -bottom-5 right-10 z-30 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 shadow-lg"
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
              <div className="absolute left-10 top-10 -z-10 h-full w-3/4 rounded-lg border border-amber-500/30" />
            </div>
          </motion.div>
        </div>

        {/* Cita destacada */}
        <motion.div
          className="mx-auto mt-16 max-w-3xl text-center md:mt-24"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative">
            <div className="absolute -top-6 left-0 font-serif text-6xl text-amber-500/20">
              &quot;
            </div>
            <p className="mb-4 px-8 text-xl italic text-gray-300 md:text-2xl">
              La fotografía es el arte de capturar momentos que perdurarán para
              siempre.
            </p>
            <div className="absolute -bottom-6 right-0 font-serif text-6xl text-amber-500/20">
              &quot;
            </div>
          </div>
          <p className="font-medium text-amber-500">Enmanuel Hassan</p>
          <p className="text-sm text-gray-400">Fundador & Director Creativo</p>
        </motion.div>
      </div>
    </section>
  );
}
