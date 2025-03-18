"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PortfolioNavigationProps {
  onPrevious: () => void;
  onNext: () => void;
  hasPrevious: boolean;
  hasNext: boolean;
}

export function PortfolioNavigation({
  onPrevious,
  onNext,
  hasPrevious,
  hasNext,
}: PortfolioNavigationProps) {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-1/2 flex -translate-y-1/2 transform justify-between px-4">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: hasPrevious ? 1 : 0, x: 0 }}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
        onClick={onPrevious}
        disabled={!hasPrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: hasNext ? 1 : 0, x: 0 }}
        className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm"
        onClick={onNext}
        disabled={!hasNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Imagen siguiente"
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
    </div>
  );
}
