"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { ServiceType } from "@/types/services";
import { ROUTES } from "@/data/info";

interface ServiceDetailProps {
  service: ServiceType;
}

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="overflow-hidden rounded-lg border border-zinc-700 bg-zinc-800/30"
    >
      <div className="relative h-64 sm:h-80">
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover"
        />
        {service.popular && (
          <div className="absolute right-4 top-4 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
            Más Popular
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8">
        <h3 className="mb-3 text-2xl font-bold sm:text-3xl">{service.title}</h3>
        <p className="mb-6 text-gray-300">{service.description}</p>

        <div className="mb-6">
          <h4 className="mb-3 font-semibold text-amber-500">
            Características:
          </h4>
          <ul className="space-y-2">
            {service.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col justify-between gap-4 border-t border-zinc-700 pt-4 sm:flex-row sm:items-center">
          <div className="text-2xl font-bold text-amber-500">
            {service.price}
          </div>
          <Button
            className="rounded-full bg-amber-500 text-black hover:bg-amber-600"
            asChild
          >
            <Link href={ROUTES.RESERVAS}>
              Reservar Ahora <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
