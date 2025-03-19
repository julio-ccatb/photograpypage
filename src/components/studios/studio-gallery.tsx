"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { X } from "lucide-react"
import type { Studio } from "@/data/studios-data"

interface StudioGalleryProps {
  studio: Studio
}

export function StudioGallery({ studio }: StudioGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-12 bg-zinc-950">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8">Galería del Estudio</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {studio.galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative aspect-square rounded-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedImage(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`${studio.name} - Imagen ${index + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal de imagen ampliada */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
              onClick={() => setSelectedImage(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-4xl max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full z-10"
                  onClick={() => setSelectedImage(null)}
                >
                  <X className="h-6 w-6" />
                </button>
                <Image
                  src={selectedImage || "/placeholder.svg"}
                  alt="Imagen ampliada"
                  width={1200}
                  height={800}
                  className="object-contain max-h-[90vh]"
                />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

