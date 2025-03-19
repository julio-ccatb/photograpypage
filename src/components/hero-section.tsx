"use client";

import {
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Camera, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { info } from "@/data/info";
import Link from "next/link";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  // Función para desplazarse a la sección About
  const scrollToAboutSection = () => {
    // Buscar la sección About por su ID
    const aboutSection = document.getElementById("about-section");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      ref={heroRef}
      className="relative flex h-screen items-center overflow-hidden"
      style={{ opacity }}
    >
      {/* Imagen de fondo única - optimizada */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/IMGS/Hero_01.jpg"
          alt="Fotografía Profesional"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/90" />
      </div>

      {/* Contenido principal */}
      <div className="container relative z-20 mx-auto px-4 sm:px-6">
        <motion.div
          className="mx-auto max-w-3xl text-center sm:mx-0 sm:text-left"
          style={{ y }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 flex justify-center sm:mb-4 sm:justify-start"
          >
            <div className="inline-flex items-center border-b border-t border-amber-500 px-3 py-1 text-xs tracking-widest text-amber-500 sm:px-4 sm:py-1">
              <Camera className="mr-1.5 h-3 w-3 sm:mr-2 sm:h-4 sm:w-4" />
              <span>CAPTURA LO EXTRAORDINARIO</span>
            </div>
          </motion.div>

          <motion.h1
            className="mb-3 text-3xl font-bold tracking-tight sm:mb-6 sm:text-5xl md:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="block">Dvine Studios</span>
            <span className="text-amber-500">Fotografía</span>
          </motion.h1>

          <motion.p
            className="mx-auto mb-5 max-w-xl px-2 text-base text-gray-300 sm:mx-0 sm:mb-8 sm:px-0 sm:text-lg md:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Elevando tu visión con calidad excepcional y pasión que cautiva.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mb-6 flex flex-col items-center justify-center gap-3 sm:mb-8 sm:flex-row sm:justify-start sm:gap-4"
          >
            <Button
              className="group w-full rounded-full bg-amber-500 px-6 py-3 text-sm text-black shadow-lg hover:bg-amber-600/90 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
              asChild
            >
              <Link href="/reservar">
                Reserva Tu Sesión
                <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="w-full rounded-full border-white/30 text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 sm:w-auto"
              asChild
            >
              <Link href="/portafolio">Ver Portafolio</Link>
            </Button>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            className="flex items-center justify-center sm:justify-start sm:space-x-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="hidden text-xs text-gray-400 sm:inline sm:text-sm">
              Síguenos:
            </span>
            <div className="flex items-center justify-center space-x-3 sm:space-x-5">
              <SocialIcon
                href={info.external_links.instagram}
                target="_blank"
                icon={<SiInstagram className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
              />

              <SocialIcon
                target="_blank"
                href={info.external_links.tiktok}
                icon={<SiTiktok className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
              />
              <SocialIcon
                target="_blank"
                href={info.external_links.youtube}
                icon={<SiYoutube className="h-3.5 w-3.5 sm:h-4 sm:w-4" />}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Botón para desplazarse hacia la sección About */}
      <div className="absolute bottom-0 left-0 right-0 z-20 flex justify-center pb-12 sm:pb-16">
        <motion.button
          className="flex flex-col items-center justify-center text-white transition-colors duration-300 hover:text-amber-500"
          onClick={scrollToAboutSection}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Ir a la sección Sobre Nosotros"
        >
          <span className="mb-2 text-sm font-medium sm:mb-3 sm:text-base">
            Explorar
          </span>
          <motion.div
            animate={{
              y: [0, 10, 0],
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="rounded-full border border-white/10 bg-black/50 p-2.5 backdrop-blur-sm sm:p-3.5"
          >
            <ArrowDown className="h-5 w-5 sm:h-6 sm:w-6" />
          </motion.div>
        </motion.button>
      </div>
    </motion.div>
  );
}
