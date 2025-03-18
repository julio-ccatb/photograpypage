"use client";

import type React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services-data";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

function ServiceCard({ icon, title, description, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="group flex h-full flex-col rounded-2xl border border-zinc-700 bg-zinc-800/50 p-6 shadow-md transition-colors duration-300 hover:border-amber-500/70 sm:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber-500/10 text-amber-500 transition-all duration-300 group-hover:bg-amber-500 group-hover:text-black sm:mb-6 sm:h-16 sm:w-16">
        {icon}
      </div>
      <h3 className="mb-3 text-lg font-bold sm:mb-4 sm:text-xl">{title}</h3>
      <p className="mb-4 flex-grow text-sm text-gray-400 sm:mb-6 sm:text-base">
        {description}
      </p>
      <Link
        href="/servicios"
        className="inline-flex items-center text-sm text-amber-500 transition-colors duration-300 hover:text-amber-400 sm:text-base"
      >
        Saber Más <ChevronRight className="ml-1 h-4 w-4" />
      </Link>
    </motion.div>
  );
}

export function ServicesSection() {
  // Versión simplificada para la landing page
  const landingServices = services.map((service, index) => ({
    icon: service.icon,
    title: service.title,
    description: service.shortDesc,
    delay: index * 0.2,
  }));

  return (
    <section className="bg-gradient-to-b from-zinc-950 to-zinc-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-10 text-center md:mb-16"
        >
          <span className="text-sm tracking-widest text-amber-500">
            NUESTRA EXPERIENCIA
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Servicios Fotográficos
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Ofrecemos una amplia gama de servicios fotográficos profesionales
            adaptados a tus necesidades específicas.
          </p>
        </motion.div>

        <div className="mb-12 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          {landingServices.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={service.delay}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            className="rounded-full bg-amber-500 px-6 py-3 text-black hover:bg-amber-600"
            asChild
          >
            <Link href="/servicios">
              Ver Todos Nuestros Servicios{" "}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Elemento de transición simple */}
      <div className="mt-16 flex justify-center">
        <div className="h-1 w-16 rounded-full bg-amber-500/50"></div>
      </div>
    </section>
  );
}
