"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import type { WorkSampleType } from "@/types/services"

interface WorkSampleProps {
  sample: WorkSampleType
}

export function WorkSample({ sample }: WorkSampleProps) {
  const { image, title, category } = sample

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="relative group overflow-hidden rounded-lg"
    >
      <div className="aspect-square relative">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-4">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-amber-500">{category}</p>
      </div>
    </motion.div>
  )
}

