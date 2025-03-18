"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  type PortfolioItem,
  categories,
  portfolioItems,
} from "@/data/mock-portfolio";
import { X, Calendar, MapPin, User } from "lucide-react";
import { PortfolioNavigation } from "./portfolio-navigation";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  // Prevenir el scroll del body cuando el modal está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  if (!currentItem) return null;

  const currentIndex = portfolioItems.findIndex((p) => p.id === currentItem.id);
  const hasPrevious = currentIndex > 0;
  const hasNext = currentIndex < portfolioItems.length - 1;

  const handlePrevious = () => {
    if (hasPrevious) {
      const previousItem = portfolioItems[currentIndex - 1];
      if (previousItem) {
        setCurrentItem(previousItem);
      }
    }
  };

  const handleNext = () => {
    if (hasNext) {
      const nextItem = portfolioItems[currentIndex + 1];
      if (nextItem) {
        setCurrentItem(nextItem);
      }
    }
  };

  const categoryName =
    categories.find((cat) => cat.id === currentItem.category)?.name ?? "";

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
            className="relative flex h-full w-full items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
              aria-label="Cerrar"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Info toggle button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="absolute left-4 top-4 z-10 rounded-full bg-black/50 px-4 py-2 text-sm text-white transition-colors hover:bg-black/70"
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
                onClick={handleNext}
                transition={{ duration: 0.3 }}
                className="flex h-full w-full items-center justify-center p-4 md:p-12"
              >
                <div className="relative max-h-full max-w-full">
                  <Image
                    src={currentItem.image || "/placeholder.svg"}
                    alt={currentItem.title}
                    quality={100}
                    width={1200}
                    height={800}
                    className="max-h-[85vh] object-contain"
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
                  className="absolute bottom-0 right-0 top-0 w-full overflow-y-auto bg-zinc-900/90 p-6 backdrop-blur-md sm:w-80 md:w-96"
                >
                  <div className="pt-10">
                    <span className="mb-3 inline-block rounded-full bg-amber-500/10 px-2 py-1 text-sm font-medium text-amber-500">
                      {categoryName}
                    </span>
                    <h2 className="mb-4 text-2xl font-bold md:text-3xl">
                      {currentItem.title}
                    </h2>
                    <p className="mb-6 text-gray-300">
                      {currentItem.description}
                    </p>

                    <div className="space-y-4 border-t border-zinc-800 pt-6">
                      {currentItem.client && (
                        <div className="flex items-center">
                          <User className="mr-3 h-5 w-5 text-amber-500" />
                          <div>
                            <p className="text-sm text-gray-400">Cliente</p>
                            <p className="font-medium">{currentItem.client}</p>
                          </div>
                        </div>
                      )}

                      {currentItem.location && (
                        <div className="flex items-center">
                          <MapPin className="mr-3 h-5 w-5 text-amber-500" />
                          <div>
                            <p className="text-sm text-gray-400">Ubicación</p>
                            <p className="font-medium">
                              {currentItem.location}
                            </p>
                          </div>
                        </div>
                      )}

                      {currentItem.date && (
                        <div className="flex items-center">
                          <Calendar className="mr-3 h-5 w-5 text-amber-500" />
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
  );
}
