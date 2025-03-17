"use client"

import { motion } from "framer-motion"
import { useReservation } from "@/contexts/reservation-context"
import { Button } from "@/components/ui/button"
import { servicePackages } from "@/data/mock-services"
import { Check, ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export function ServiceSelectionStep() {
  const { reservationData, selectService, setCurrentStep } = useReservation()

  const handleSelectService = (serviceId: string) => {
    const service = servicePackages.find((s) => s.id === serviceId)
    if (service) {
      selectService(service)
    }
  }

  const handleContinue = () => {
    if (reservationData.service) {
      setCurrentStep(3)
    }
  }

  const handleBack = () => {
    setCurrentStep(1)
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
        <h3 className="text-2xl font-bold mb-2">Selecciona tu Paquete</h3>
        <p className="text-gray-400">Elige el paquete fotográfico que mejor se adapte a tus necesidades</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {servicePackages.map((service) => (
          <motion.div
            key={service.id}
            whileHover={{ scale: 1.02 }}
            className={cn(
              "border rounded-xl p-6 cursor-pointer transition-all",
              reservationData.service?.id === service.id
                ? "border-amber-500 bg-amber-500/10"
                : "border-zinc-700 hover:border-zinc-500",
              service.popular ? "relative" : "",
            )}
            onClick={() => handleSelectService(service.id)}
          >
            {service.popular && (
              <div className="absolute -top-3 left-0 right-0 flex justify-center">
                <span className="bg-amber-500 text-black text-xs font-bold px-3 py-1 rounded-full">Más Popular</span>
              </div>
            )}
            <div className="flex justify-between items-start mb-4">
              <div>
                <h4 className="text-xl font-bold">{service.name}</h4>
                <p className="text-sm text-gray-400">{service.duration}</p>
              </div>
              {reservationData.service?.id === service.id && (
                <div className="h-6 w-6 rounded-full bg-amber-500 flex items-center justify-center">
                  <Check className="h-4 w-4 text-black" />
                </div>
              )}
            </div>
            <p className="text-sm text-gray-300 mb-4">{service.description}</p>
            <div className="mb-4">
              <span className="text-2xl font-bold">{service.price}€</span>
            </div>
            <ul className="space-y-2">
              {service.features.map((feature, index) => (
                <li key={index} className="text-sm flex items-start">
                  <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-between pt-4">
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
          disabled={!reservationData.service}
          className="bg-amber-500 hover:bg-amber-600 text-black rounded-full"
        >
          Continuar
          <ChevronRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  )
}

