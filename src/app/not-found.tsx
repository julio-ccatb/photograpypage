"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Camera, Home, Search, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <Header />

      <main className="flex flex-grow items-center justify-center py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 inline-flex items-center border-b border-t border-amber-500 px-3 py-1 text-xs tracking-widest text-amber-500">
                <Camera className="mr-2 h-4 w-4" />
                <span>PÁGINA NO ENCONTRADA</span>
              </div>

              <h1 className="mb-4 text-5xl font-bold sm:text-7xl">
                <span className="text-amber-500">404</span> Error
              </h1>

              <p className="mx-auto mb-8 max-w-lg text-xl text-gray-300 lg:mx-0">
                Parece que la página que estás buscando ha sido movida,
                eliminada o nunca existió.
              </p>

              <div className="mb-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                <Button
                  className="w-full rounded-full bg-amber-500 px-6 py-6 text-lg text-black hover:bg-amber-600 sm:w-auto"
                  asChild
                >
                  <Link href="/">
                    <Home className="mr-2 h-5 w-5" />
                    Volver al Inicio
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full rounded-full border-white/30 px-6 py-6 text-lg text-white hover:border-white/60 hover:bg-white/10 sm:w-auto"
                  asChild
                >
                  <Link href="/contacto">
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Contactar Soporte
                  </Link>
                </Button>
              </div>

              <div className="text-sm text-gray-400">
                <p>¿Buscabas algo específico? Prueba estos enlaces:</p>
                <div className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2 lg:justify-start">
                  <Link
                    href="/servicios"
                    className="text-amber-500 hover:underline"
                  >
                    Servicios
                  </Link>
                  <Link
                    href="/portafolio"
                    className="text-amber-500 hover:underline"
                  >
                    Portafolio
                  </Link>
                  <Link
                    href="/reservar"
                    className="text-amber-500 hover:underline"
                  >
                    Reservar
                  </Link>
                  <Link
                    href="/contacto"
                    className="text-amber-500 hover:underline"
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full sm:h-[500px]">
                <Image
                  src="/COG.svg?height=800&width=600"
                  alt="Cámara rota"
                  fill
                  className="object-contain"
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute -right-6 -top-6 h-20 w-20 rounded-full border border-amber-500/30 bg-amber-500/10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-amber-500/20 bg-amber-500/5"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>

              {/* Search bar */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="relative mx-auto mt-8 max-w-md"
              >
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Buscar en el sitio..."
                    className="w-full rounded-full border border-zinc-700 bg-zinc-900/50 px-5 py-3 pl-12 text-white transition-colors focus:border-amber-500 focus:outline-none"
                  />
                  <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
                  <Button
                    size="sm"
                    className="absolute right-1.5 top-1/2 -translate-y-1/2 transform rounded-full bg-amber-500 px-4 py-1 text-black hover:bg-amber-600"
                  >
                    Buscar
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
