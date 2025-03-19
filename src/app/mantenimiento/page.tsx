"use client";

import { Button } from "@/components/ui/button";
import { SocialIcon } from "@/components/ui/social-icon";
import { info } from "@/data/info";
import {
  SiGmail,
  SiInstagram,
  SiTiktok,
  SiYoutube,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import { AlertTriangle, Clock, Home } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function MaintenancePage() {
  // Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  // Update countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format time with leading zeros
  const formatTime = (value: number) => value.toString().padStart(2, "0");

  return (
    <div className="flex min-h-screen flex-col bg-black text-white">
      <main className="flex flex-grow items-center justify-center px-4 py-10">
        <div className="mx-auto w-full max-w-5xl">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 flex justify-center"
          >
            <div className="flex items-center">
              <span className="text-3xl font-bold text-amber-500 sm:text-4xl">
                DVINE
              </span>
              <span className="ml-1 text-3xl font-light sm:text-4xl">
                STUDIOS
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center lg:text-left"
            >
              <div className="mb-6 inline-flex items-center border-b border-t border-amber-500 px-3 py-1 text-xs tracking-widest text-amber-500">
                <AlertTriangle className="mr-2 h-4 w-4" />
                <span>SITIO EN MANTENIMIENTO</span>
              </div>

              <h1 className="mb-4 text-4xl font-bold sm:text-5xl md:text-6xl">
                Estamos <span className="text-amber-500">mejorando</span> para
                ti
              </h1>

              <p className="mx-auto mb-8 max-w-lg text-lg text-gray-300 lg:mx-0">
                Esta pagina está temporalmente fuera de servicio mientras
                realizamos mejoras. Volveremos pronto con una experiencia aún
                mejor.
              </p>

              <Button
                className="w-full rounded-full bg-amber-500 px-6 py-6 text-lg text-black hover:bg-amber-600 sm:w-auto"
                asChild
              >
                <Link href="/">
                  <Home className="mr-2 h-5 w-5" />
                  Volver al Inicio
                </Link>
              </Button>
              {/* Countdown timer */}
              <div className="mb-8 pt-6">
                <p className="mb-3 flex items-center justify-center text-gray-400 lg:justify-start">
                  <Clock className="mr-2 h-5 w-5 text-amber-500" />
                  Tiempo estimado para volver:
                </p>
                <div className="flex justify-center space-x-4 lg:justify-start">
                  <div className="w-20 rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 sm:w-24 sm:p-4">
                    <div className="text-2xl font-bold text-amber-500 sm:text-3xl">
                      {formatTime(timeLeft.hours)}
                    </div>
                    <div className="text-xs text-gray-400">Horas</div>
                  </div>
                  <div className="w-20 rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 sm:w-24 sm:p-4">
                    <div className="text-2xl font-bold text-amber-500 sm:text-3xl">
                      {formatTime(timeLeft.minutes)}
                    </div>
                    <div className="text-xs text-gray-400">Minutos</div>
                  </div>
                  <div className="w-20 rounded-lg border border-zinc-800 bg-zinc-900/80 p-3 sm:w-24 sm:p-4">
                    <div className="text-2xl font-bold text-amber-500 sm:text-3xl">
                      {formatTime(timeLeft.seconds)}
                    </div>
                    <div className="text-xs text-gray-400">Segundos</div>
                  </div>
                </div>
              </div>

              {/* Contact info */}
              <div className="mb-8">
                <p className="mb-3 text-gray-300">
                  ¿Necesitas contactarnos mientras tanto?
                </p>
                <Button
                  variant={"ghost"}
                  //   className="rounded-full bg-amber-500 px-6 py-3 text-black hover:bg-amber-600"
                  asChild
                >
                  <Link href={`mailto:${info.contact_email}`}>
                    <SiGmail className="mr-2 h-5 w-5" />
                    {info.contact_email}
                  </Link>
                </Button>
              </div>

              {/* Social media */}
              <div>
                <p className="mb-3 text-gray-400">
                  Síguenos para actualizaciones:
                </p>
                <div className="flex justify-center space-x-4 lg:justify-start">
                  <SocialIcon
                    href={info.external_links.instagram}
                    target="_blank"
                    icon={<SiInstagram className="h-4 w-4" />}
                  />
                  <SocialIcon
                    target="_blank"
                    href={info.external_links.tiktok}
                    icon={<SiTiktok className="h-4 w-4" />}
                  />
                  <SocialIcon
                    target="_blank"
                    href={info.external_links.youtube}
                    icon={<SiYoutube className="h-4 w-4" />}
                  />
                </div>
              </div>
            </motion.div>

            {/* Right column - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative"
            >
              <div className="relative h-[400px] w-full sm:h-[500px]">
                <Image
                  src="/COG.svg?height=800&width=600"
                  alt="Fotógrafo trabajando"
                  fill
                  className="object-contain"
                />

                {/* Decorative elements */}
                <motion.div
                  className="absolute right-10 top-10 h-24 w-24 rounded-full border border-amber-500/30 bg-amber-500/10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  className="absolute bottom-10 left-10 h-16 w-16 rounded-full border border-amber-500/20 bg-amber-500/5"
                  animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />

                {/* Camera icon */}
                {/* <motion.div
                  className="absolute bottom-0 right-0 rounded-full bg-amber-500 p-4"
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 5, 0, -5, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut",
                  }}
                >
                  <Camera className="h-8 w-8 text-black" />
                </motion.div> */}
              </div>
            </motion.div>
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center text-sm text-gray-500"
          >
            <p>
              © {new Date().getFullYear()} Dvine Studios. Todos los derechos
              reservados.
            </p>
            <p className="mt-1">
              Volveremos pronto con una experiencia renovada.
            </p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
