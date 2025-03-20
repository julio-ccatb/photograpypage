"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Loader2, CreditCard, Calendar, Lock } from "lucide-react"

interface CheckoutFormProps {
  selectedPlan: string | null
}

export function CheckoutForm({ selectedPlan }: CheckoutFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)
      router.push("/membresia/confirmacion")
    }, 2000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 sm:p-8"
    >
      <h2 className="text-xl font-bold mb-6">Información de pago</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-2">Información personal</h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Nombre</Label>
              <Input id="firstName" required className="bg-zinc-800 border-zinc-700 focus:border-amber-500" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName">Apellido</Label>
              <Input id="lastName" required className="bg-zinc-800 border-zinc-700 focus:border-amber-500" />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" required className="bg-zinc-800 border-zinc-700 focus:border-amber-500" />
          </div>
        </div>

        {/* Payment Information */}
        <div className="space-y-4">
          <h3 className="text-lg font-medium mb-2">Detalles de pago</h3>

          <div className="space-y-2">
            <Label htmlFor="cardNumber">Número de tarjeta</Label>
            <div className="relative">
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                required
                className="bg-zinc-800 border-zinc-700 focus:border-amber-500 pl-10"
              />
              <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="expiryDate">Fecha de expiración</Label>
              <div className="relative">
                <Input
                  id="expiryDate"
                  placeholder="MM/AA"
                  required
                  className="bg-zinc-800 border-zinc-700 focus:border-amber-500 pl-10"
                />
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cvv">CVV</Label>
              <div className="relative">
                <Input
                  id="cvv"
                  placeholder="123"
                  required
                  className="bg-zinc-800 border-zinc-700 focus:border-amber-500 pl-10"
                />
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="flex items-start space-x-2">
          <Checkbox id="terms" required />
          <div className="grid gap-1.5 leading-none">
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Acepto los términos y condiciones
            </label>
            <p className="text-sm text-gray-400">
              Al marcar esta casilla, aceptas nuestros{" "}
              <a href="/terminos" className="text-amber-500 hover:underline">
                Términos de Servicio
              </a>{" "}
              y{" "}
              <a href="/privacidad" className="text-amber-500 hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-amber-500 hover:bg-amber-600 text-black rounded-lg py-6"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Procesando...
            </>
          ) : (
            `Completar compra`
          )}
        </Button>

        <p className="text-xs text-gray-400 text-center">Tus datos de pago están seguros y encriptados.</p>
      </form>
    </motion.div>
  )
}

