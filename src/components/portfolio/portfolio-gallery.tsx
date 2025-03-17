"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { type PortfolioItem, categories } from "@/data/mock-portfolio"
import { PortfolioModal } from "./portfolio-modal"
import { Loader2 } from "lucide-react"

interface PortfolioGalleryProps {
  items: PortfolioItem[]
  isLoading: boolean
}

export function PortfolioGallery({ items, isLoading }: PortfolioGalleryProps) {
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null)
  const [columns, setColumns] = useState(3)
  const galleryRef = useRef<HTMLDivElement>(null)

  // Función para determinar el número de columnas según el ancho de la pantalla
  const updateColumns = () => {
    if (window.innerWidth < 640) {
      setColumns(1)
    } else if (window.innerWidth < 1024) {
      setColumns(2)
    } else {
      setColumns(3)
    }
  }

  // Actualizar columnas al cambiar el tamaño de la ventana
  useEffect(() => {
    updateColumns()
    window.addEventListener("resize", updateColumns)
    return () => window.removeEventListener("resize", updateColumns)
  }, [])

  // Organizar los elementos en columnas para el efecto masonry
  const getItemsInColumns = () => {
    const columnsArray: PortfolioItem[][] = Array.from({ length: columns }, () => [])

    items.forEach((item, index) => {
      const columnIndex = index % columns
      columnsArray[columnIndex].push(item)
    })

    return columnsArray
  }

  const columnsArray = getItemsInColumns()

  return (
    <>
      {isLoading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="h-12 w-12 text-amber-500 animate-spin" />
        </div>
      ) : (
        <div ref={galleryRef} className="container mx-auto px-4">
          <div className="flex gap-4">
            <AnimatePresence>
              {columnsArray.map((column, columnIndex) => (
                <div key={columnIndex} className="flex-1 space-y-4">
                  {column.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.5 }}
                      className="w-full overflow-hidden"
                      onClick={() => setSelectedItem(item)}
                    >
                      <div className="relative group cursor-pointer overflow-hidden rounded-lg">
                        <div className={getAspectRatioClass(item.aspectRatio)}>
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.title}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                          />
                        </div>

                        {/* Overlay con información */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
                          <span className="inline-block text-xs bg-amber-500/20 text-amber-500 px-2 py-0.5 rounded-full mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 w-fit">
                            {categories.find((cat) => cat.id === item.category)?.name}
                          </span>
                          <h3 className="text-xl font-bold text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                            {item.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ))}
            </AnimatePresence>
          </div>

          {items.length === 0 && !isLoading && (
            <div className="text-center py-20">
              <h3 className="text-2xl font-bold mb-2">No hay proyectos en esta categoría</h3>
              <p className="text-gray-400">Por favor, selecciona otra categoría para ver más trabajos.</p>
            </div>
          )}
        </div>
      )}

      <PortfolioModal item={selectedItem} isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}

// Función para determinar la clase de aspect ratio según el tipo de imagen
function getAspectRatioClass(aspectRatio?: string) {
  switch (aspectRatio) {
    case "portrait":
      return "aspect-[3/4] w-full"
    case "landscape":
      return "aspect-[4/3] w-full"
    case "square":
    default:
      return "aspect-square w-full"
  }
}

