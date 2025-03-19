"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { ReactNode } from "react"

interface ContactFAQItemProps {
  question: string
  answer: string
  icon: ReactNode
  isOpen: boolean
  onToggle: () => void
}

export function ContactFAQItem({ question, answer, icon, isOpen, onToggle }: ContactFAQItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="border border-zinc-700 rounded-lg overflow-hidden"
    >
      <button
        onClick={onToggle}
        className={cn(
          "w-full text-left p-4 flex justify-between items-center transition-all duration-300",
          isOpen ? "bg-zinc-800 border-amber-500" : "bg-zinc-800/50 hover:bg-zinc-800/80",
        )}
      >
        <div className="flex items-center">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors duration-300",
              isOpen ? "bg-amber-500 text-black" : "bg-zinc-700 text-white",
            )}
          >
            {icon}
          </div>
          <span className="font-medium">{question}</span>
        </div>
        <ChevronDown
          className={cn(
            "h-5 w-5 text-amber-500 transition-transform duration-300",
            isOpen ? "transform rotate-180" : "",
          )}
        />
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300 bg-zinc-800/30",
          isOpen ? "max-h-96 p-4" : "max-h-0",
        )}
      >
        <p className="text-gray-300 pl-11">{answer}</p>
      </div>
    </motion.div>
  )
}

