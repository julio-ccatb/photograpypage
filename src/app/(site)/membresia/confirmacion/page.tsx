"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function ConfirmationPage() {
  const router = useRouter()

  // Simulate a successful payment
  useEffect(() => {
    // In a real application, you would verify the payment status here
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto bg-zinc-900/50 rounded-xl border border-zinc-800 p-8 text-center"
          >
            <div className="bg-green-500/20 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>

            <h1 className="text-3xl font-bold mb-4">¡Pago completado con éxito!</h1>
            <p className="text-xl text-gray-300 mb-8">
              Gracias por unirte a nuestra membresía. Tu cuenta ha sido activada y ya puedes disfrutar de todos los
              beneficios.
            </p>

            <div className="bg-zinc-800/50 rounded-lg p-6 mb-8">
              <h2 className="font-bold text-lg mb-4">Detalles de tu membresía</h2>
              <div className="grid grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-gray-400 text-sm">Plan</p>
                  <p className="font-medium">Profesional</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Precio</p>
                  <p className="font-medium">99€/mes</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Fecha de inicio</p>
                  <p className="font-medium">{new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Próximo pago</p>
                  <p className="font-medium">{new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toLocaleDateString()}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6"
                onClick={() => router.push("/estudios")}
              >
                Reservar un estudio <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 rounded-full px-8 py-6"
                onClick={() => router.push("/")}
              >
                Volver al inicio
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

