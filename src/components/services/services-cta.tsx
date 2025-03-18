"use client"

import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ServicesCTA() {
  return (
    <section className="py-16 bg-amber-900/20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">¿Listo para comenzar tu proyecto?</h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Contáctanos hoy mismo para discutir tus necesidades fotográficas y crear un plan personalizado.
        </p>
        <Button className="bg-amber-500 hover:bg-amber-600 text-black rounded-full px-8 py-6 text-lg" asChild>
          <Link href="/reservar">
            Reserva Tu Sesión Ahora <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>
    </section>
  )
}

