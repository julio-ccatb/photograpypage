"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Camera, Clock, Users, Star } from "lucide-react";
import Image from "next/image";

interface MembershipHeroProps {
  onGetStarted: () => void;
}

export function MembershipHero({ onGetStarted }: MembershipHeroProps) {
  return (
    <section className="bg-gradient-to-b from-black to-zinc-900 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-3 inline-block text-sm uppercase tracking-widest text-amber-500">
              MEMBRESÍA EXCLUSIVA
            </span>
            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
              Acceso ilimitado a nuestros estudios fotográficos
            </h1>
            <p className="mb-8 max-w-xl text-xl text-gray-300">
              Únete a nuestra comunidad de fotógrafos profesionales y disfruta
              de beneficios exclusivos con nuestra membresía premium.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Button
                className="rounded-full bg-amber-500 px-8 py-6 text-lg text-black hover:bg-amber-600"
                onClick={onGetStarted}
              >
                Comenzar ahora
              </Button>
              <Button
                variant="outline"
                className="rounded-full border-white/20 px-8 py-6 text-lg hover:bg-white/10"
                asChild
              >
                <a href="#planes">Ver planes</a>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                {
                  icon: <Camera className="h-6 w-6 text-amber-500" />,
                  text: "Equipamiento profesional",
                },
                {
                  icon: <Clock className="h-6 w-6 text-amber-500" />,
                  text: "Reservas prioritarias",
                },
                {
                  icon: <Users className="h-6 w-6 text-amber-500" />,
                  text: "Asistentes incluidos",
                },
                {
                  icon: <Star className="h-6 w-6 text-amber-500" />,
                  text: "Beneficios exclusivos",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center text-center"
                >
                  <div className="mb-3 rounded-full bg-zinc-800/50 p-4">
                    {item.icon}
                  </div>
                  <span className="text-sm text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 h-64 w-64 rounded-full bg-amber-500/20 blur-3xl"></div>
            <div className="relative overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800/50">
              <Image
                height={600}
                width={800}
                src="/placeholder.svg?height=600&width=800"
                alt="Estudio fotográfico profesional"
                className="h-auto w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="mb-4 flex items-center gap-4">
                  <div className="rounded-full bg-amber-500 p-2">
                    <Star className="h-5 w-5 text-black" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Membresía Premium</h3>
                    <p className="text-sm text-gray-300">
                      Acceso ilimitado a todos nuestros estudios
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
