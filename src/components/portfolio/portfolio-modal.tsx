"use client";

import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  type PanInfo,
  useAnimation,
} from "framer-motion";
import Image from "next/image";
import {
  type PortfolioItem,
  categories,
  portfolioItems,
} from "@/data/mock-portfolio";
import {
  X,
  Calendar,
  MapPin,
  User,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PortfolioNavigation } from "./portfolio-navigation";

interface PortfolioModalProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  const [showInfo, setShowInfo] = useState(false);
  const [currentItem, setCurrentItem] = useState<PortfolioItem | null>(null);
  const controls = useAnimation();
  const [dragStartX, setDragStartX] = useState(0);

  useEffect(() => {
    setCurrentItem(item);
  }, [item]);

  // Cerrar el modal con la tecla Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft") {
        // Navigate to previous image with left arrow key
        if (currentIndex > 0) {
          handlePrevious();
        }
      } else if (e.key === "ArrowRight") {
        // Navigate to next image with right arrow key
        if (currentIndex < portfolioItems.length - 1) {
          handleNext();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, currentItem]); // Add currentItem as dependency to get updated currentIndex

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
      void controls
        .start({
          x: "100%",
          opacity: 0,
          transition: { duration: 0.2 },
        })
        .then(() => {
          setCurrentItem(portfolioItems[currentIndex - 1]!);
          void controls.set({ x: "-100%", opacity: 0 });
          void controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
          });
        });
    }
  };

  const handleNext = () => {
    if (hasNext) {
      void controls
        .start({
          x: "-100%",
          opacity: 0,
          transition: { duration: 0.2 },
        })
        .then(() => {
          setCurrentItem(portfolioItems[currentIndex + 1]!);
          controls.set({ x: "100%", opacity: 0 });
          void controls.start({
            x: 0,
            opacity: 1,
            transition: { duration: 0.2 },
          });
        });
    }
  };

  const handleDragStart = (_: unknown, info: PanInfo) => {
    setDragStartX(info.point.x);
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    const dragEndX = info.point.x;
    const dragDistance = dragEndX - dragStartX;

    // If the drag distance is significant enough (more than 50px), navigate
    if (Math.abs(dragDistance) > 50) {
      if (dragDistance > 0 && hasPrevious) {
        // Swiped right, go to previous
        handlePrevious();
      } else if (dragDistance < 0 && hasNext) {
        // Swiped left, go to next
        handleNext();
      }
    } else {
      // If the drag wasn't significant, reset the position
      void controls.start({ x: 0, opacity: 1 });
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

            {/* Navigation visible on all screen sizes */}
            <PortfolioNavigation
              onPrevious={handlePrevious}
              onNext={handleNext}
              hasPrevious={hasPrevious}
              hasNext={hasNext}
            />

            {/* Swipe instructions for mobile - only shown briefly */}
            <motion.div
              className="absolute bottom-16 left-0 right-0 text-center text-sm text-white/70 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              exit={{ opacity: 0 }}
              key={currentItem.id} // Reset animation when item changes
            >
              <motion.div
                className="flex items-center justify-center space-x-2"
                animate={{ opacity: [1, 1, 0] }}
                transition={{ duration: 3, times: [0, 0.7, 1] }}
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Desliza o usa las flechas</span>
                <ChevronRight className="h-4 w-4" />
              </motion.div>
            </motion.div>

            {/* Image with swipe functionality */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentItem.id}
                animate={controls}
                initial={{ opacity: 1, x: 0 }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                className="flex h-full w-full cursor-grab items-center justify-center p-4 active:cursor-grabbing md:p-12"
              >
                <div className="relative max-h-full max-w-full">
                  <Image
                    src={currentItem.image || "/placeholder.svg"}
                    alt={currentItem.title}
                    width={1200}
                    height={800}
                    className="pointer-events-none max-h-[85vh] select-none object-contain"
                    priority
                  />
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Mobile navigation indicators */}
            <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 md:hidden">
              {portfolioItems.map((_, index) => (
                <div
                  key={index}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-6 bg-amber-500"
                      : "w-1.5 bg-white/30"
                  }`}
                />
              ))}
            </div>

            {/* Keyboard navigation instructions */}
            <div className="absolute bottom-8 left-0 right-0 hidden text-center text-xs text-white/50 md:block">
              Use las flechas ← → del teclado para navegar
            </div>

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
