"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { useReservation } from "@/contexts/reservation-context"
import { Button } from "@/components/ui/button"
import { paymentMethods } from "@/data/mock-services"
import { ChevronLeft, CreditCard, Wallet, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export function PaymentMethodStep() {
  const { reservationData, selectPaymentMethod, completeReservation, setCurrentStep } = useReservation()
  const [selectedMethod, setSelectedMethod] = useState<string | undefined>(reservationData.paymentMethod)
  const [isProcessing, setIsProcessing] = useState(false)

  const handleSelectMethod = (methodId: string) => {
    setSelectedMethod(methodId)
    selectPaymentMethod(methodId)
  }

  const handleBack = () => {
    setCurrentStep(3)
  }

  const handleCompleteReservation = () => {
    if (selectedMethod) {
      setIsProcessing(true)

      // Simulamos un proceso de pago
      setTimeout(() => {
        completeReservation()
        setCurrentStep(5)
        setIsProcessing(false)
      }, 1500)
    }
  }

  const getPaymentIcon = (iconName: string) => {
    switch (iconName) {
      case "credit-card":
        return <CreditCard className="h-5 w-5" />
      case "wallet":
        return <Wallet className="h-5 w-5" />
      case "paypal":
        return <span className="text-lg font-bold">P</span>
      default:
        return <CreditCard className="h-5 w-5" />
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="mb-6">
        <h3 className="text-2xl font-bold mb-2">Método de Pago</h3>
        <p className="text-gray-400">Selecciona cómo prefieres realizar el pago de tu reserva</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">Opciones de Pago</h4>
          <div className="space-y-3">
            {paymentMethods.map((method) => (
              <div
                key={method.id}
                className={cn(
                  "border rounded-xl p-4 cursor-pointer transition-all",
                  selectedMethod === method.id
                    ? "border-amber-500 bg-amber-500/10"
                    : "border-zinc-700 hover:border-zinc-500",
                )}
                onClick={() => handleSelectMethod(method.id)}
              >
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-zinc-800 flex items-center justify-center mr-4">
                    {getPaymentIcon(method.icon)}
                  </div>
                  <div className="flex-1">
                    <h5 className="font-medium">{method.name}</h5>
                    <p className="text-sm text-gray-400">{method.description}</p>
                  </div>
                  {selectedMethod === method.id && (
                    <div className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
                      <Check className="h-4 w-4 text-black" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Resumen de Reserva</h4>
          <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800">
            <div className="space-y-4">
              <div>
                <h5 className="text-sm text-gray-400">Paquete Seleccionado</h5>
                <p className="font-medium">{reservationData.service?.name}</p>
              </div>

              <div>
                <h5 className="text-sm text-gray-400">Fecha y Hora</h5>
                <p className="font-medium">
                  {reservationData.date ? format(reservationData.date, "EEEE d 'de' MMMM", { locale: es }) : ""}
                  {reservationData.timeSlot ? ` a las ${reservationData.timeSlot.time}` : ""}
                </p>
              </div>

              <div>
                <h5 className="text-sm text-gray-400">Cliente</h5>
                <p className="font-medium">{reservationData.customer.name}</p>
                <p className="text-sm text-gray-400">{reservationData.customer.email}</p>
              </div>

              <div className="border-t border-zinc-700 pt-4 mt-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span>{reservationData.service?.price}€</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-gray-400">IVA (21%)</span>
                  <span>{reservationData.service ? Math.round(reservationData.service.price * 0.21) : 0}€</span>
                </div>
                <div className="flex justify-between mt-4 text-lg font-bold">
                  <span>Total</span>
                  <span className="text-amber-500">
                    {reservationData.service ? Math.round(reservationData.service.price * 1.21) : 0}€
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between pt-8">
        <Button
          type="button"
          variant="outline"
          onClick={handleBack}
          className="border-zinc-700 hover:border-zinc-500 rounded-full"
        >
          <ChevronLeft className="mr-2 h-4 w-4" />
          Atrás
        </Button>
        <Button
          type="button"
          onClick={handleCompleteReservation}
          disabled={!selectedMethod || isProcessing}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full"
        >
          {isProcessing ? (
            <>
              <span className="animate-pulse">Procesando...</span>
            </>
          ) : (
            <>Confirmar Reserva</>
          )}
        </Button>
      </div>
    </motion.div>
  )
}

