"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useReservation } from "@/contexts/reservation-context"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { generateAvailableTimeSlots } from "@/data/mock-services"
import { ChevronLeft, ChevronRight, Clock } from "lucide-react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { cn } from "@/lib/utils"

export function DateTimeSelectionStep() {
  const { reservationData, selectDate, selectTimeSlot, setCurrentStep } = useReservation()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(reservationData.date)
  const [availableTimeSlots, setAvailableTimeSlots] = useState(
    selectedDate ? generateAvailableTimeSlots(selectedDate) : [],
  )
  const [selectedTimeSlotId, setSelectedTimeSlotId] = useState<string | undefined>(reservationData.timeSlot?.id)

  useEffect(() => {
    if (selectedDate) {
      const slots = generateAvailableTimeSlots(selectedDate)
      setAvailableTimeSlots(slots)

      // Si el time slot seleccionado ya no está disponible, deseleccionarlo
      if (selectedTimeSlotId) {
        const isStillAvailable = slots.some((slot) => slot.id === selectedTimeSlotId && slot.available)
        if (!isStillAvailable) {
          setSelectedTimeSlotId(undefined)
        }
      }
    }
  }, [selectedDate, selectedTimeSlotId])

  const handleDateSelect = (date: Date | undefined) => {
    if (date) {
      setSelectedDate(date)
      selectDate(date)
      setSelectedTimeSlotId(undefined)
    }
  }

  const handleTimeSelect = (slotId: string) => {
    const slot = availableTimeSlots.find((s) => s.id === slotId)
    if (slot && slot.available) {
      setSelectedTimeSlotId(slotId)
      selectTimeSlot(slot)
    }
  }

  const handleContinue = () => {
    if (selectedDate && selectedTimeSlotId) {
      setCurrentStep(4)
    }
  }

  const handleBack = () => {
    setCurrentStep(2)
  }

  // Función para deshabilitar fechas pasadas y domingos
  const disabledDays = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
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
        <h3 className="text-2xl font-bold mb-2">Selecciona Fecha y Hora</h3>
        <p className="text-gray-400">Elige el día y horario para tu sesión fotográfica</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h4 className="text-lg font-medium mb-4">Fecha</h4>
          <div className="bg-zinc-900/50 rounded-xl p-4 border border-zinc-800">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              disabled={disabledDays}
              locale={es}
              className="mx-auto bg-transparent"
            />
          </div>
        </div>

        <div>
          <h4 className="text-lg font-medium mb-4">Horario Disponible</h4>
          {selectedDate ? (
            <>
              <p className="text-sm text-gray-400 mb-4">
                Horarios disponibles para el{" "}
                <span className="text-white font-medium">
                  {format(selectedDate, "EEEE d 'de' MMMM", { locale: es })}
                </span>
              </p>
              <div className="grid grid-cols-2 gap-3">
                {availableTimeSlots.map((slot) => (
                  <Button
                    key={slot.id}
                    type="button"
                    variant="outline"
                    disabled={!slot.available}
                    className={cn(
                      "border rounded-lg py-3 flex items-center justify-center",
                      selectedTimeSlotId === slot.id
                        ? "border-amber-500 bg-amber-500/10 text-amber-500"
                        : slot.available
                          ? "border-zinc-700 hover:border-zinc-500 text-white"
                          : "border-zinc-800 text-zinc-500 cursor-not-allowed bg-transparent",
                    )}
                    onClick={() => handleTimeSelect(slot.id)}
                  >
                    <Clock className="h-4 w-4 mr-2" />
                    {slot.time}
                  </Button>
                ))}
              </div>
              {availableTimeSlots.every((slot) => !slot.available) && (
                <p className="text-amber-500 mt-4 text-center">
                  No hay horarios disponibles para esta fecha. Por favor, selecciona otra fecha.
                </p>
              )}
            </>
          ) : (
            <div className="h-full flex items-center justify-center border border-zinc-800 rounded-xl p-8">
              <p className="text-gray-400 text-center">Selecciona una fecha para ver los horarios disponibles</p>
            </div>
          )}
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
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTimeSlotId}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full"
        >
          Continuar
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

