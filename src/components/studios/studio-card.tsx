"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Users, Maximize2, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Studio } from "@/data/studios-data";

interface StudioCardProps {
  studio: Studio;
  index: number;
}

export function StudioCard({ studio, index }: StudioCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className={cn(
        "group relative overflow-hidden rounded-xl border bg-zinc-900/50 transition-all duration-300 hover:border-amber-500/50",
        studio.popular ? "border-amber-500/30" : "border-zinc-800",
        studio.comingSoon ? "opacity-80" : "",
      )}
    >
      {studio.popular && !studio.comingSoon && (
        <div className="absolute right-4 top-4 z-10 rounded-full bg-amber-500 px-3 py-1 text-xs font-bold text-black">
          Popular
        </div>
      )}

      {studio.comingSoon && (
        <div className="absolute right-4 top-4 z-10 flex items-center rounded-full bg-blue-500 px-3 py-1 text-xs font-bold text-white">
          <Clock className="mr-1 h-3 w-3" />
          Próximamente
        </div>
      )}

      <div className="relative h-64 overflow-hidden">
        <Image
          src={studio.mainImage || "/placeholder.svg"}
          alt={studio.name}
          fill
          className={cn(
            "object-cover transition-transform duration-500 group-hover:scale-105",
            studio.comingSoon ? "grayscale filter" : "",
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="flex flex-wrap gap-2">
            <span className="flex items-center rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
              <Maximize2 className="mr-1 h-3 w-3" />
              {studio.size}
            </span>
            <span className="flex items-center rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
              <Users className="mr-1 h-3 w-3" />
              Hasta {studio.capacity} personas
            </span>
            <span className="rounded-full bg-black/60 px-2 py-1 text-xs text-white backdrop-blur-sm">
              {studio.location}
            </span>
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold">{studio.name}</h3>
        <p className="mb-4 text-gray-400">{studio.shortDescription}</p>

        <div className="mb-4 flex flex-wrap gap-2">
          {studio.features.slice(0, 3).map((feature, i) => (
            <span
              key={i}
              className="flex items-center rounded-full bg-zinc-800 px-2 py-1 text-xs"
            >
              {feature?.icon}
              <span className="ml-1 hidden sm:inline">
                {feature?.title.split(" ")[0]}
              </span>
            </span>
          ))}
          {studio.features.length > 3 && (
            <span className="rounded-full bg-zinc-800 px-2 py-1 text-xs">
              +{studio.features.length - 3} más
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div>
            {studio.comingSoon ? (
              <p className="font-medium text-blue-400">Apertura próxima</p>
            ) : (
              <>
                <span className="text-xs text-gray-400">Desde</span>
                <p className="text-xl font-bold text-amber-500">
                  {studio.pricing[0]!.price}
                </p>
              </>
            )}
          </div>

          <Button
            variant="outline"
            className={cn(
              "rounded-full border-amber-500 text-amber-500 hover:bg-amber-500/10",
              studio.comingSoon
                ? "border-blue-500 text-blue-500 hover:bg-blue-500/10"
                : "",
            )}
            asChild
          >
            <Link href={`/estudios/${studio.slug}`}>
              {studio.comingSoon ? "Ver Avance" : "Ver Detalles"}{" "}
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
