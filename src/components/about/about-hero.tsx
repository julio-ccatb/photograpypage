"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function AboutHero() {
  const [currentImage, setCurrentImage] = useState(0)
  const images = [
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Crossfade */}
      {images.map((image, index) => (
        <div
          key={index}
          className="absolute inset-0 z-0 transition-opacity duration-1000"
          style={{ opacity: currentImage === index ? 1 : 0 }}
        >
          <Image
            src={image || "/placeholder.svg"}
            alt={`Dvine Studios ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
          <div className="absolute inset-0 bg-black/60 z-10" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute top-20 left-20 w-40 h-40 border-2 border-amber-500/30 rounded-full z-10 hidden lg:block" />
      <div className="absolute bottom-20 right-20 w-60 h-60 border-2 border-amber-500/20 rounded-full z-10 hidden lg:block" />

      {/* Content */}
      <div className="container mx-auto px-4 z-20 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="inline-block text-amber-500 text-sm tracking-widest uppercase mb-3 bg-black/30 px-4 py-1 rounded-full"
          >
            Nuestra Historia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Las personas <span className="text-amber-500">detrás</span> de la cámara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Somos más que fotógrafos. Somos narradores visuales que transforman momentos en recuerdos eternos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button
              className="bg-amber-500 hover:bg-amber-600 text-black font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => {
                const storySection = document.getElementById("our-story")
                if (storySection) {
                  storySection.scrollIntoView({ behavior: "smooth" })
                }
              }}
            >
              Descubre nuestra historia
            </Button>

            <Button
              variant="outline"
              className="border-white/30 hover:border-white text-white hover:bg-white/10 font-medium px-8 py-6 rounded-full text-lg"
              onClick={() => (window.location.href = "/contacto")}
            >
              Contáctanos
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-2 h-2 bg-amber-500 rounded-full mt-2"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  )
}

