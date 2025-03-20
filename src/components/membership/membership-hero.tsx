"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Camera, Clock, Users, Star } from "lucide-react"

interface MembershipHeroProps {
  onGetStarted: () => void
}

export function MembershipHero({ onGetStarted }: MembershipHeroProps) {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-black to-zinc-900">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">
              MEMBRESÍA EXCLUSIVA
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Acceso ilimitado a nuestros estudios fotográficos
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-xl">
              Únete a nuestra comunidad de fotógrafos profesionales y disfruta de beneficios exclusivos con nuestra
              membresía premium.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg"
                onClick={onGetStarted}
              >
                Comenzar ahora
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 rounded-full px-8 py-6 text-lg"
                asChild
              >
                <a href="#planes">Ver planes</a>
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { icon: <Camera className="h-6 w-6 text-amber-500" />, text: "Equipamiento profesional" },
                { icon: <Clock className="h-6 w-6 text-amber-500" />, text: "Reservas prioritarias" },
                { icon: <Users className="h-6 w-6 text-amber-500" />, text: "Asistentes incluidos" },
                { icon: <Star className="h-6 w-6 text-amber-500" />, text: "Beneficios exclusivos" },
              ].map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="bg-zinc-800/50 rounded-full p-4 mb-3">{item.icon}</div>
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
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-amber-500/20 rounded-full blur-3xl"></div>
            <div className="relative bg-zinc-800/50 rounded-xl overflow-hidden border border-zinc-700">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Estudio fotográfico profesional"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-amber-500 rounded-full p-2">
                    <Star className="h-5 w-5 text-black" fill="currentColor" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold">Membresía Premium</h3>
                    <p className="text-sm text-gray-300">Acceso ilimitado a todos nuestros estudios</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

