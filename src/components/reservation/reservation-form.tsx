"use client"

import { AnimatePresence } from "framer-motion"
import { useReservation } from "@/contexts/reservation-context"
import { CustomerInfoStep } from "./customer-info"
import { ServiceSelectionStep } from "./service-selection"
import { DateTimeSelectionStep } from "./date-time-selection"
import { PaymentMethodStep } from "./payment-method"
import { ConfirmationStep } from "./confirmation"

export function ReservationForm() {
  const { currentStep } = useReservation()

  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Indicador de progreso */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {[1, 2, 3, 4, 5].map((step) => (
            <div key={step} className="flex flex-col items-center">
              <div
                className={`h-10 w-10 rounded-full flex items-center justify-center ${
                  step <= currentStep ? "bg-amber-500 text-black" : "bg-zinc-800 text-gray-400"
                }`}
              >
                {step < currentStep ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  step
                )}
              </div>
              <span className={`text-xs mt-2 hidden sm:block ${step <= currentStep ? "text-white" : "text-gray-500"}`}>
                {step === 1 && "Datos"}
                {step === 2 && "Servicio"}
                {step === 3 && "Fecha"}
                {step === 4 && "Pago"}
                {step === 5 && "Confirmación"}
              </span>
            </div>
          ))}
        </div>
        <div className="relative mt-2">
          <div className="absolute top-0 left-0 h-1 bg-zinc-800 w-full rounded-full"></div>
          <div
            className="absolute top-0 left-0 h-1 bg-amber-500 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep - 1) / 4) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Pasos del formulario */}
      <AnimatePresence mode="wait">
        {currentStep === 1 && <CustomerInfoStep key="step1" />}
        {currentStep === 2 && <ServiceSelectionStep key="step2" />}
        {currentStep === 3 && <DateTimeSelectionStep key="step3" />}
        {currentStep === 4 && <PaymentMethodStep key="step4" />}
        {currentStep === 5 && <ConfirmationStep key="step5" />}
      </AnimatePresence>
    </div>
  )
}

