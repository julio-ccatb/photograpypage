"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { type PortfolioItem, categories, portfolioItems } from "@/data/mock-portfolio"
import { X, Calendar, MapPin, User } from "lucide-react"
import { PortfolioNavigation } from "./portfolio-navigation"

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [showInfo, setShowInfo] = useState(false)
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null)

  useEffect(() => {
    setCurrentItem(item)
  }, [item])

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  // Prevenir el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [isOpen])

  if (!currentItem) return null

  const currentIndex = portfolioItems.findIndex((p) => p.id === currentItem.id)
  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < portfolioItems.length - 1

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentItem(portfolioItems[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (hasNext) {
      setCurrentItem(portfolioItems[currentIndex + 1])
    }
  }

  const categoryName = categories.find((cat) => cat.id === currentItem.category)?.name || ""

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/95 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Info toggle button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="absolute top-4 left-4 z-10 bg-black/50 text-white px-4 py-2 rounded-full hover:bg-black/70 transition-colors text-sm"
            >
              {showInfo ? "Ocultar Info" : "Mostrar Info"}
            </button>

            {/* Navigation */}
            <PortfolioNavigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
            />

            {/* Image */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full flex items-center justify-center p-4 md:p-12"
              >
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={currentItem.image || "/placeholder.svg"}
                    alt={currentItem.title}
                    width={1200}
                    height={800}
                    className="object-contain max-h-[85vh]"
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Info panel */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ opacity: 0, x: 300 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 300 }}
                  transition={{ duration: 0.3 }}
                  className="absolute right-0 top-0 bottom-0 w-full sm:w-80 md:w-96 bg-zinc-900/90 backdrop-blur-md p-6 overflow-y-auto"
                >
                  <div className="pt-10">
                    <span className="inline-block text-amber-500 text-sm font-medium px-2 py-1 bg-amber-500/10 rounded-full mb-3">
                      {categoryName}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-bold mb-4">{currentItem.title}</h2>
                    <p className="text-gray-300 mb-6">{currentItem.description}</p>

                    <div className="space-y-4 border-t border-zinc-800 pt-6">
                      {currentItem.client && (
                        <div className="flex items-center">
                          <User className="h-5 w-5 text-amber-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-400">Cliente</p>
                            <p className="font-medium">{currentItem.client}</p>
                          </div>
                        </div>
                      )}

                      {currentItem.location && (
                        <div className="flex items-center">
                          <MapPin className="h-5 w-5 text-amber-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-400">Ubicación</p>
                            <p className="font-medium">{currentItem.location}</p>
                          </div>
                        </div>
                      )}

                      {currentItem.date && (
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 text-amber-500 mr-3" />
                          <div>
                            <p className="text-sm text-gray-400">Fecha</p>
                            <p className="font-medium">{currentItem.date}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

