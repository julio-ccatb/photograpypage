"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ReservationProvider } from "@/contexts/reservation-context"
import { ReservationForm } from "@/components/reservation/reservation-form"

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Reserva Tu Sesión</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Completa el formulario a continuación para reservar tu sesión fotográfica con Dvine Studios. El proceso es
              rápido y seguro.
            </p>
          </div>

          <ReservationProvider>
            <ReservationForm />
          </ReservationProvider>
        </div>
      </main>
      <Footer />
    </div>
  )
}

