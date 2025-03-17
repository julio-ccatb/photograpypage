"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import type { ServicePackage, TimeSlot } from "@/data/mock-services"

interface Customer {
  name: string
  email: string
  phone: string
  notes?: string
}

interface ReservationData {
  customer: Customer
  service?: ServicePackage
  date?: Date
  timeSlot?: TimeSlot
  paymentMethod?: string
  completed: boolean
  reservationId?: string
}

interface ReservationContextType {
  currentStep: number
  setCurrentStep: (step: number) => void
  reservationData: ReservationData
  updateCustomerInfo: (customer: Customer) => void
  selectService: (service: ServicePackage) => void
  selectDate: (date: Date) => void
  selectTimeSlot: (timeSlot: TimeSlot) => void
  selectPaymentMethod: (methodId: string) => void
  completeReservation: () => void
  resetReservation: () => void
}

const ReservationContext = createContext<ReservationContextType | undefined>(undefined)

export function ReservationProvider({ children }: { children: ReactNode }) {
  const [currentStep, setCurrentStep] = useState(1)
  const [reservationData, setReservationData] = useState<ReservationData>({
    customer: {
      name: "",
      email: "",
      phone: "",
      notes: "",
    },
    completed: false,
  })

  const updateCustomerInfo = (customer: Customer) => {
    setReservationData((prev) => ({
      ...prev,
      customer,
    }))
  }

  const selectService = (service: ServicePackage) => {
    setReservationData((prev) => ({
      ...prev,
      service,
    }))
  }

  const selectDate = (date: Date) => {
    setReservationData((prev) => ({
      ...prev,
      date,
    }))
  }

  const selectTimeSlot = (timeSlot: TimeSlot) => {
    setReservationData((prev) => ({
      ...prev,
      timeSlot,
    }))
  }

  const selectPaymentMethod = (methodId: string) => {
    setReservationData((prev) => ({
      ...prev,
      paymentMethod: methodId,
    }))
  }

  const completeReservation = () => {
    // Generar un ID de reserva aleatorio
    const reservationId = `RES-${Math.floor(Math.random() * 10000)
      .toString()
      .padStart(4, "0")}`

    setReservationData((prev) => ({
      ...prev,
      completed: true,
      reservationId,
    }))
  }

  const resetReservation = () => {
    setCurrentStep(1)
    setReservationData({
      customer: {
        name: "",
        email: "",
        phone: "",
        notes: "",
      },
      completed: false,
    })
  }

  return (
    <ReservationContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        reservationData,
        updateCustomerInfo,
        selectService,
        selectDate,
        selectTimeSlot,
        selectPaymentMethod,
        completeReservation,
        resetReservation,
      }}
    >
      {children}
    </ReservationContext.Provider>
  )
}

export function useReservation() {
  const context = useContext(ReservationContext)
  if (context === undefined) {
    throw new Error("useReservation must be used within a ReservationProvider")
  }
  return context
}

