"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { PackageType } from "@/types/services"

interface ServicePackageProps {
  packageData: PackageType
}

export function ServicePackage({ packageData }: ServicePackageProps) {
  const { title, price, features, popular } = packageData

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "relative bg-zinc-800/50 border rounded-xl overflow-hidden transition-all duration-300 h-full",
        popular ? "border-amber-500" : "border-zinc-700 hover:border-zinc-500",
      )}
    >
      {popular && (
        <div className="absolute top-0 right-0 left-0 bg-amber-500 text-black text-xs font-bold py-1 text-center">
          RECOMENDADO
        </div>
      )}

      <div className={cn("p-6 sm:p-8", popular ? "pt-8" : "")}>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <div className="mb-4">
          <span className="text-3xl font-bold text-amber-500">{price}</span>
        </div>

        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
              <span className="text-sm text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>

        <Button
          className={cn(
            "w-full rounded-full",
            popular ? "bg-amber-500 hover:bg-amber-600 text-black" : "bg-zinc-700 hover:bg-zinc-600 text-white",
          )}
          asChild
        >
          <Link href="/reservar">Seleccionar</Link>
        </Button>
      </div>
    </motion.div>
  )
}

