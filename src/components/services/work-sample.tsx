"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { WorkSampleType } from "@/types/services";

interface WorkSampleProps {
  sample: WorkSampleType;
}

export function WorkSample({ sample }: WorkSampleProps) {
  const { image, title, category } = sample;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-lg"
    >
      <div className="relative aspect-[14/24]">
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          quality={40}
          fill
          className="object-cover transition-all duration-500 group-hover:scale-105"
        />
      </div>
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
        <h4 className="text-lg font-bold">{title}</h4>
        <p className="text-sm text-amber-500">{category}</p>
      </div>
    </motion.div>
  );
}
