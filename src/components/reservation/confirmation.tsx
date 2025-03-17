"use client"

import { motion } from "framer-motion"
import { useReservation } from "@/contexts/reservation-context"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, Clock, Camera, User, CreditCard } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"

export function ConfirmationStep() {
  const { reservationData, resetReservation } = useReservation()

  const getPaymentMethodName = (methodId?: string) => {
    switch (methodId) {
      case "credit_card":
        return "Tarjeta de Crédito/Débito"
      case "paypal":
        return "PayPal"
      case "on_arrival":
        return "Pago a la Llegada"
      default:
        return "No seleccionado"
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
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-500/20 text-green-500 mb-4">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="text-2xl font-bold mb-2">¡Reserva Confirmada!</h3>
        <p className="text-gray-400">
          Tu reserva ha sido registrada con éxito. Hemos enviado un correo de confirmación a{" "}
          <span className="text-white">{reservationData.customer.email}</span>
        </p>
      </div>

      <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 mb-8">
        <h4 className="text-lg font-medium mb-4 flex items-center">
          <Calendar className="h-5 w-5 mr-2 text-amber-500" />
          Detalles de la Reserva
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <h5 className="text-sm text-gray-400 mb-1">Número de Reserva</h5>
              <p className="font-medium text-amber-500">{reservationData.reservationId}</p>
            </div>

            <div>
              <h5 className="text-sm text-gray-400 mb-1">Fecha y Hora</h5>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                <p>
                  {reservationData.date ? format(reservationData.date, "EEEE d 'de' MMMM, yyyy", { locale: es }) : ""}
                </p>
              </div>
              <div className="flex items-center mt-1">
                <Clock className="h-4 w-4 mr-2 text-gray-400" />
                <p>{reservationData.timeSlot?.time} hrs</p>
              </div>
            </div>

            <div>
              <h5 className="text-sm text-gray-400 mb-1">Servicio</h5>
              <div className="flex items-center">
                <Camera className="h-4 w-4 mr-2 text-gray-400" />
                <p>
                  {reservationData.service?.name} ({reservationData.service?.duration})
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="text-sm text-gray-400 mb-1">Cliente</h5>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2 text-gray-400" />
                <p>{reservationData.customer.name}</p>
              </div>
              <p className="text-sm text-gray-400 ml-6">{reservationData.customer.email}</p>
              <p className="text-sm text-gray-400 ml-6">{reservationData.customer.phone}</p>
            </div>

            <div>
              <h5 className="text-sm text-gray-400 mb-1">Método de Pago</h5>
              <div className="flex items-center">
                <CreditCard className="h-4 w-4 mr-2 text-gray-400" />
                <p>{getPaymentMethodName(reservationData.paymentMethod)}</p>
              </div>
            </div>

            <div>
              <h5 className="text-sm text-gray-400 mb-1">Total</h5>
              <p className="text-xl font-bold text-amber-500">
                {reservationData.service ? Math.round(reservationData.service.price * 1.21) : 0}€
              </p>
              <p className="text-xs text-gray-400">IVA incluido</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 mb-8">
        <h4 className="font-medium text-amber-500 mb-2">Información Importante</h4>
        <ul className="text-sm space-y-2">
          <li>• Por favor, llega 10 minutos antes de tu sesión programada.</li>
          <li>• Trae identificación válida si has seleccionado pago a la llegada.</li>
          <li>• Puedes cancelar o reprogramar hasta 48 horas antes sin costo adicional.</li>
        </ul>
      </div>

      <div className="text-center">
        <Button
          type="button"
          onClick={resetReservation}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8"
        >
          Realizar Otra Reserva
        </Button>
      </div>
    </motion.div>
  )
}

