"use client";

import { ReservationProvider } from "@/contexts/reservation-context";
import { ReservationForm } from "@/components/reservation/reservation-form";

export default function ReservationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="pb-20 pt-32">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Reserva Tu Sesión
            </h1>
            <p className="mx-auto max-w-2xl text-gray-400">
              Completa el formulario a continuación para reservar tu sesión
              fotográfica con Dvine Studios. El proceso es rápido y seguro.
            </p>
          </div>

          <ReservationProvider>
            <ReservationForm />
          </ReservationProvider>
        </div>
      </main>
    </div>
  );
}
