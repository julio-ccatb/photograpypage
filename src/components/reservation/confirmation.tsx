/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import { motion } from "framer-motion";
import { useReservation } from "@/contexts/reservation-context";
import { Button } from "@/components/ui/button";
import {
  CheckCircle,
  Calendar,
  Clock,
  Camera,
  User,
  CreditCard,
} from "lucide-react";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function ConfirmationStep() {
  const { reservationData, resetReservation } = useReservation();

  const getPaymentMethodName = (methodId?: string) => {
    switch (methodId) {
      case "credit_card":
        return "Tarjeta de Crédito/Débito";
      case "paypal":
        return "PayPal";
      case "on_arrival":
        return "Pago a la Llegada";
      default:
        return "No seleccionado";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="w-full"
    >
      <div className="mb-8 text-center">
        <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20 text-green-500">
          <CheckCircle className="h-8 w-8" />
        </div>
        <h3 className="mb-2 text-2xl font-bold">¡Reserva Confirmada!</h3>
        <p className="text-gray-400">
          Tu reserva ha sido registrada con éxito. Hemos enviado un correo de
          confirmación a{" "}
          <span className="text-white">{reservationData.customer.email}</span>
        </p>
      </div>

      <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
        <h4 className="mb-4 flex items-center text-lg font-medium">
          <Calendar className="mr-2 h-5 w-5 text-amber-500" />
          Detalles de la Reserva
        </h4>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <div>
              <h5 className="mb-1 text-sm text-gray-400">Número de Reserva</h5>
              <p className="font-medium text-amber-500">
                {reservationData.reservationId}
              </p>
            </div>

            <div>
              <h5 className="mb-1 text-sm text-gray-400">Fecha y Hora</h5>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4 text-gray-400" />
                <p>
                  {reservationData.date
                    ? format(reservationData.date, "EEEE d 'de' MMMM, yyyy", {
                        locale: es,
                      })
                    : ""}
                </p>
              </div>
              <div className="mt-1 flex items-center">
                <Clock className="mr-2 h-4 w-4 text-gray-400" />
                <p>{reservationData.timeSlot?.time} hrs</p>
              </div>
            </div>

            <div>
              <h5 className="mb-1 text-sm text-gray-400">Servicio</h5>
              <div className="flex items-center">
                <Camera className="mr-2 h-4 w-4 text-gray-400" />
                <p>
                  {reservationData.service?.name} (
                  {reservationData.service?.duration})
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <h5 className="mb-1 text-sm text-gray-400">Cliente</h5>
              <div className="flex items-center">
                <User className="mr-2 h-4 w-4 text-gray-400" />
                <p>{reservationData.customer.name}</p>
              </div>
              <p className="ml-6 text-sm text-gray-400">
                {reservationData.customer.email}
              </p>
              <p className="ml-6 text-sm text-gray-400">
                {reservationData.customer.phone}
              </p>
            </div>

            <div>
              <h5 className="mb-1 text-sm text-gray-400">Método de Pago</h5>
              <div className="flex items-center">
                <CreditCard className="mr-2 h-4 w-4 text-gray-400" />
                <p>{getPaymentMethodName(reservationData.paymentMethod)}</p>
              </div>
            </div>

            <div>
              <h5 className="mb-1 text-sm text-gray-400">Total</h5>
              <p className="text-xl font-bold text-amber-500">
                {reservationData.service
                  ? Math.round(reservationData.service.price * 1.21)
                  : 0}
                €
              </p>
              <p className="text-xs text-gray-400">IVA incluido</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-8 rounded-xl border border-amber-500/30 bg-amber-500/10 p-4">
        <h4 className="mb-2 font-medium text-amber-500">
          Información Importante
        </h4>
        <ul className="space-y-2 text-sm">
          <li>• Por favor, llega 10 minutos antes de tu sesión programada.</li>
          <li>
            • Trae identificación válida si has seleccionado pago a la llegada.
          </li>
          <li>
            • Puedes cancelar o reprogramar hasta 48 horas antes sin costo
            adicional.
          </li>
        </ul>
      </div>

      <div className="text-center">
        <Button
          type="button"
          onClick={resetReservation}
          className="rounded-full bg-amber-500 px-8 text-black hover:bg-amber-600"
        >
          Realizar Otra Reserva
        </Button>
      </div>
    </motion.div>
  );
}
