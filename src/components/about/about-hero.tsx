"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function AboutHero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
    "/placeholder.svg?height=1080&width=1920",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 z-10 bg-black/60" />
        </div>
      ))}

      {/* Decorative Elements */}
      <div className="absolute left-20 top-20 z-10 hidden h-40 w-40 rounded-full border-2 border-amber-500/30 lg:block" />
      <div className="absolute bottom-20 right-20 z-10 hidden h-60 w-60 rounded-full border-2 border-amber-500/20 lg:block" />

      {/* Content */}
      <div className="container relative z-20 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-3 inline-block rounded-full bg-black/30 px-4 py-1 text-sm uppercase tracking-widest text-amber-500"
          >
            Nuestra Historia
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mb-6 text-5xl font-bold leading-tight md:text-7xl"
          >
            Las personas <span className="text-amber-500">detrás</span> de la
            cámara
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="mx-auto mb-8 max-w-3xl text-xl text-gray-300 md:text-2xl"
          >
            Somos más que fotógrafos. Somos narradores visuales que transforman
            momentos en recuerdos eternos.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col justify-center gap-4 sm:flex-row"
          >
            <Button
              className="rounded-full bg-amber-500 px-8 py-6 text-lg font-medium text-black hover:bg-amber-600"
              onClick={() => {
                const storySection = document.getElementById("our-story");
                if (storySection) {
                  storySection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Descubre nuestra historia
            </Button>

            <Button
              variant="outline"
              className="rounded-full border-white/30 px-8 py-6 text-lg font-medium text-white hover:border-white hover:bg-white/10"
              onClick={() => (window.location.href = "/contacto")}
            >
              Contáctanos
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-20 z-20 -translate-x-1/2 transform"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
      >
        <div className="flex h-14 w-8 justify-center rounded-full border-2 border-white/30">
          <motion.div
            className="mt-2 h-2 w-2 rounded-full bg-amber-500"
            animate={{ y: [0, 16, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          />
        </div>
      </motion.div>
    </section>
  );
}
