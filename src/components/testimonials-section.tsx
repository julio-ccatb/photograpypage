"use client";

import { motion } from "framer-motion";
import { WaveDivider } from "@/components/ui/wave-divider";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  image: string;
  rating: number;
  delay: number;
}

function TestimonialCard({
  quote,
  author,
  role,
  image,
  rating,
  delay,
}: TestimonialProps) {
  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      {/* Borde decorativo */}
      <div className="absolute inset-0 rounded-2xl border border-zinc-700 transition-all duration-500 group-hover:border-amber-500/30"></div>

      {/* Icono de comilla decorativa */}
      <div className="absolute right-6 top-6 text-amber-500/10">
        <Quote size={60} />
      </div>

      <div className="p-8 sm:p-10">
        {/* Estrellas de calificación */}
        <div className="mb-6 flex">
          {[...Array<number>(5)].map((_, i) => (
            <Star
              key={i}
              size={16}
              className={`${i < rating ? "text-amber-500" : "text-zinc-700"} mr-1`}
              fill={i < rating ? "currentColor" : "none"}
            />
          ))}
        </div>

        {/* Cita */}
        <p className="relative z-10 mb-8 text-lg leading-relaxed text-gray-200 sm:text-xl">
          &quot;{quote}&quot;
        </p>

        {/* Autor */}
        <div className="flex items-center">
          <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-amber-500/20">
            <Image
              src={image || "/placeholder.svg"}
              alt={author}
              fill
              className="object-cover"
            />
          </div>
          <div className="ml-4">
            <h4 className="text-base font-bold sm:text-lg">{author}</h4>
            <p className="text-sm text-amber-500">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function FeaturedTestimonial() {
  return (
    <motion.div
      className="group relative col-span-1 overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 md:col-span-2"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Borde decorativo */}
      <div className="absolute inset-0 rounded-2xl border border-zinc-700 transition-all duration-500 group-hover:border-amber-500/30"></div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Imagen */}
        <div className="relative h-64 md:h-full">
          <Image
            src="/placeholder.svg?height=600&width=500"
            alt="Sesión fotográfica"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-zinc-900 opacity-0 md:opacity-100"></div>
        </div>

        {/* Contenido */}
        <div className="relative p-8 sm:p-10">
          {/* Icono de comilla decorativa */}
          <div className="absolute right-6 top-6 text-amber-500/10">
            <Quote size={80} />
          </div>

          {/* Estrellas de calificación */}
          <div className="mb-6 flex">
            {[...Array<number>(5)].map((_, i) => (
              <Star
                key={i}
                size={18}
                className="mr-1 text-amber-500"
                fill="currentColor"
              />
            ))}
          </div>

          {/* Cita */}
          <p className="relative z-10 mb-8 text-xl leading-relaxed text-gray-200 sm:text-2xl">
            &quot;Trabajar con Dvine Studios transformó completamente nuestra
            campaña de marca. Su visión artística y atención al detalle
            superaron todas nuestras expectativas.&quot;
          </p>

          {/* Autor */}
          <div className="flex items-center">
            <div className="relative h-16 w-16 overflow-hidden rounded-full border-2 border-amber-500/20">
              <Image
                src="/placeholder.svg?height=200&width=200"
                alt="Laura Martínez"
                fill
                className="object-cover"
              />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-bold">Laura Martínez</h4>
              <p className="text-amber-500">Directora Creativa, Luxe Brands</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  // Datos de testimonios
  const testimonials = [
    {
      quote:
        "El equipo capturó momentos que ni siquiera sabía que existían. Trabajo verdaderamente excepcional.",
      author: "Sara Jiménez",
      role: "Modelo de Moda",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      delay: 0.2,
    },
    {
      quote:
        "Nuestra línea de productos nunca se ha visto mejor. La atención al detalle es extraordinaria.",
      author: "Miguel Chen",
      role: "Director de Marketing",
      image: "/placeholder.svg?height=200&width=200",
      rating: 5,
      delay: 0.4,
    },
    {
      quote:
        "La sesión fue relajada y profesional. Las fotos capturaron exactamente la esencia que buscábamos.",
      author: "Carlos Vega",
      role: "Emprendedor",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4,
      delay: 0.6,
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-zinc-900 to-zinc-950 py-16 md:py-24">
      {/* Elemento decorativo superior */}
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/20 to-transparent"></div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm tracking-widest text-amber-500">
            LO QUE DICEN NUESTROS CLIENTES
          </span>
          <h2 className="mt-2 text-3xl font-bold sm:text-4xl md:text-5xl">
            Testimonios
          </h2>
        </motion.div>

        <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2">
          {/* Testimonial destacado */}
          <FeaturedTestimonial />

          {/* Testimonios regulares */}
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              image={testimonial.image}
              rating={testimonial.rating}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>

      {/* Wave divider at the bottom */}
      <WaveDivider fill="fill-amber-900" />
    </section>
  );
}
