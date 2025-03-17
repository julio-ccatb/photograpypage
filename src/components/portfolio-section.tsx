"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PortfolioItemProps {
  index: number;
  title: string;
  category: string;
  aspectRatio?: string;
  image: string;
}

function PortfolioItem({
  index,
  title,
  category,
  aspectRatio = "aspect-square",
  image = "/placeholder.svg",
}: PortfolioItemProps) {
  return (
    <motion.div
      className={`group relative overflow-hidden ${aspectRatio} h-full w-full rounded-2xl shadow-md`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Image
        src={`${image}?height=800&width=1200`}
        alt={title}
        fill
        className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
      />

      {/* Gradient overlay that slides up on hover */}
      <div className="absolute inset-0 transform bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-70 transition-all duration-500 group-hover:opacity-100 sm:translate-y-8 sm:opacity-0 sm:group-hover:translate-y-0" />

      {/* Content that slides up on hover */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end p-4 sm:p-6">
        <div className="overflow-hidden">
          <motion.span className="mb-1 inline-block text-xs font-medium text-amber-500 opacity-100 sm:mb-2 sm:translate-y-full sm:transform sm:text-sm sm:opacity-0 sm:transition-all sm:delay-100 sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            {category}
          </motion.span>
        </div>

        <div className="overflow-hidden">
          <motion.h3 className="text-xl font-bold opacity-100 sm:translate-y-full sm:transform sm:text-2xl sm:opacity-0 sm:transition-all sm:delay-200 sm:duration-500 sm:group-hover:translate-y-0 sm:group-hover:opacity-100">
            {title}
          </motion.h3>
        </div>

        <div className="hidden overflow-hidden sm:block">
          <motion.div className="mt-4 translate-y-full transform opacity-0 transition-all delay-300 duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            <Button
              variant="outline"
              size="sm"
              className="rounded-full border-white/30 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/20"
            >
              Ver Proyecto
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative corner elements */}
      <div className="absolute inset-0 rounded-2xl border border-transparent transition-all delay-300 duration-500 group-hover:border-amber-500/30" />
    </motion.div>
  );
}

export function PortfolioSection() {
  const categories = [
    "Todos",
    "Retratos",
    "Comercial",
    "Moda",
    "Eventos",
    "Productos",
  ];

  return (
    <section className="bg-zinc-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-sm tracking-widest text-amber-500">
            NUESTRO TRABAJO
          </span>
          <h2 className="mb-4 mt-2 text-3xl font-bold sm:mb-6 sm:text-4xl md:text-5xl">
            Portafolio Destacado
          </h2>
          <p className="mx-auto max-w-2xl px-2 text-gray-400">
            Explora nuestra diversa colección de fotografía profesional en
            varios estilos y temáticas.
          </p>
        </motion.div>

        {/* Portfolio Filter */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8 flex flex-wrap justify-center gap-2 sm:mb-12 sm:gap-4"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              className={`rounded-full px-3 py-1 text-xs transition-all duration-300 sm:px-6 sm:py-2 sm:text-sm ${
                index === 0
                  ? "bg-gradient-to-r from-amber-500 to-amber-400 text-black shadow-md"
                  : "border border-zinc-700 bg-zinc-800/50 text-white hover:bg-zinc-700/70"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid - Improved Layout */}
        <div className="mb-10 grid grid-cols-1 gap-4 sm:mb-12 sm:gap-6 md:grid-cols-3">
          {/* Featured item 1 - spans all columns on mobile, 3 on desktop */}
          <div className="md:col-span-3">
            <PortfolioItem
              index={0}
              title="Elegancia en Movimiento"
              category="Moda"
              aspectRatio="aspect-[16/9]"
              image="/IMGS/IMG_2.jpg"
            />
          </div>

          {/* Regular items - 1 column on mobile, 3 on desktop */}
          <div>
            <PortfolioItem
              index={1}
              title="Perspectiva Urbana"
              category="Retratos"
              aspectRatio="aspect-square"
              image="/IMGS/IMG_10.jpg"
            />
          </div>
          <div>
            <PortfolioItem
              index={2}
              title="Exhibición de Productos"
              category="Comercial"
              aspectRatio="aspect-square"
              image="/IMGS/IMG_4.jpg"
            />
          </div>
          <div>
            <PortfolioItem
              index={3}
              title="Identidad Corporativa"
              category="Comercial"
              aspectRatio="aspect-square"
              image="/IMGS/IMG_1.jpg"
            />
          </div>

          {/* Featured item 2 - spans 2 columns on desktop */}
          <div className="md:col-span-2">
            <PortfolioItem
              index={4}
              title="Momentos de Boda"
              category="Eventos"
              aspectRatio="aspect-[16/9]"
              image="/IMGS/IMG_7.jpg"
            />
          </div>

          {/* Regular item */}
          <div>
            <PortfolioItem
              index={5}
              title="Arte Culinario"
              category="Productos"
              aspectRatio="aspect-square"
              image="/IMGS/IMG_6.jpg"
            />
          </div>
        </div>

        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Button
              variant="outline"
              className="rounded-full border-amber-500 px-6 py-4 text-amber-500 transition-all duration-300 hover:bg-amber-500/20 hover:text-amber-400 sm:px-8 sm:py-6"
            >
              Explorar Galería Completa
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
