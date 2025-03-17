"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronRight, Instagram, Facebook, Twitter, Camera, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SocialIcon } from "@/components/ui/social-icon"
import Link from "next/link"

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const y = useTransform(scrollYProgress, [0, 1], [0, 200])

  // Función para desplazarse a la sección About
  const scrollToAboutSection = () => {
    // Buscar la sección About por su ID
    const aboutSection = document.getElementById("about-section")
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <motion.div
      ref={heroRef}
      className="relative h-screen flex items-center overflow-hidden"
      style={{ opacity, scale }}
    >
      {/* Imagen de fondo única */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Fotografía Profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Contenido principal */}
      <div className="container mx-auto px-5 sm:px-6 z-20 relative">
        <motion.div className="max-w-3xl mx-auto sm:mx-0 text-center sm:text-left" style={{ y }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-5 sm:mb-4 flex justify-center sm:justify-start"
          >
            <div className="inline-flex items-center px-3 py-1 sm:px-4 sm:py-1 border-t border-b border-amber-500 text-amber-500 tracking-widest text-xs">
              <Camera className="mr-1.5 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4" />
              <span>CAPTURA LO EXTRAORDINARIO</span>
            </div>
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <span className="block">Dvine Studios</span>
            <span className="text-amber-500">Fotografía</span>
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-xl mx-auto sm:mx-0 mb-6 sm:mb-8 px-1 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Elevando tu visión con calidad excepcional y pasión que cautiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center sm:justify-start gap-3 sm:gap-4 mb-8"
          >
            <Button
              className="bg-amber-500 text-black hover:bg-amber-600/90 px-6 py-4 sm:px-8 sm:py-6 text-base sm:text-lg rounded-full shadow-lg group w-full sm:w-auto"
              asChild
            >
              <Link href="/reservar">
                Reserva Tu Sesión
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/60 transition-all duration-300 rounded-full w-full sm:w-auto"
            >
              Ver Portafolio
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center sm:justify-start space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
          >
            <span className="text-gray-400 text-sm hidden sm:inline">Síguenos:</span>
            <div className="flex space-x-5">
              <SocialIcon icon={<Instagram className="h-4 w-4" />} />
              <SocialIcon icon={<Facebook className="h-4 w-4" />} />
              <SocialIcon icon={<Twitter className="h-4 w-4" />} />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Botón para desplazarse hacia la sección About */}
      <motion.button
        className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center justify-center text-white/70 hover:text-white transition-colors duration-300"
        onClick={scrollToAboutSection}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Ir a la sección Sobre Nosotros"
      >
        <span className="text-xs sm:text-sm mb-1.5 sm:mb-2">Explorar</span>
        <motion.div
          animate={{
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="bg-black/30 backdrop-blur-sm rounded-full p-2 sm:p-2.5"
        >
          <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
        </motion.div>
      </motion.button>
    </motion.div>
  )
}

