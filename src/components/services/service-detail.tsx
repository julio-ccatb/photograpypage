"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ServiceType } from "@/types/services"

interface ServiceDetailProps {
  service: ServiceType
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-800/30 rounded-lg overflow-hidden border border-zinc-700"
    >
      <div className="relative h-64 sm:h-80">
        <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
        {service.popular && (
          <div className="absolute top-4 right-4 bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">
            Más Popular
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="text-2xl sm:text-3xl font-bold mb-3">{service.title}</h3>
        <p className="text-gray-300 mb-6">{service.description}</p>

        <div className="mb-6">
          <h4 className="text-amber-500 font-semibold mb-3">Características:</h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-zinc-700">
          <div className="text-2xl font-bold text-amber-500">{service.price}</div>
          <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full" asChild>
            <Link href="/reservar">
              Reservar Ahora <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

