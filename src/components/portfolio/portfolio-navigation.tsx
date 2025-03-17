"use client"

import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PortfolioNavigationProps {
  onPrevious: () => void
  onNext: () => void
  hasPrevious: boolean
  hasNext: boolean
}

export function PortfolioNavigation({ onPrevious, onNext, hasPrevious, hasNext }: PortfolioNavigationProps) {
  return (
    <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 flex justify-between px-4 pointer-events-none">
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: hasPrevious ? 1 : 0, x: 0 }}
        className="h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto"
        onClick={onPrevious}
        disabled={!hasPrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronLeft className="h-6 w-6" />
      </motion.button>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: hasNext ? 1 : 0, x: 0 }}
        className="h-12 w-12 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white pointer-events-auto"
        onClick={onNext}
        disabled={!hasNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ChevronRight className="h-6 w-6" />
      </motion.button>
    </div>
  )
}

