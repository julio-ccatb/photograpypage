"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

interface CheckoutSummaryProps {
  selectedPlan: string | null
}

export function CheckoutSummary({ selectedPlan }: CheckoutSummaryProps) {
  // Plan details based on selection
  const plans = {
    basic: {
      name: "Básico",
      price: "49€",
      period: "/mes",
      features: [
        "Acceso a estudios con 20% de descuento",
        "Reservas con 7 días de antelación",
        "2 horas gratis al mes",
        "Acceso a equipamiento básico",
        "Soporte por email",
      ],
    },
    pro: {
      name: "Profesional",
      price: "99€",
      period: "/mes",
      features: [
        "Acceso a estudios con 40% de descuento",
        "Reservas con 14 días de antelación",
        "5 horas gratis al mes",
        "Acceso a equipamiento premium",
        "Soporte prioritario",
        "1 asistente incluido",
        "Almacenamiento en la nube (50GB)",
      ],
    },
    unlimited: {
      name: "Ilimitado",
      price: "199€",
      period: "/mes",
      features: [
        "Acceso ilimitado a todos los estudios",
        "Reservas con 30 días de antelación",
        "Horas ilimitadas",
        "Acceso a todo el equipamiento",
        "Soporte 24/7",
        "2 asistentes incluidos",
        "Almacenamiento en la nube (200GB)",
        "Acceso a eventos exclusivos",
        "Descuentos en cursos y talleres",
      ],
    },
  }

  const plan = plans[selectedPlan as keyof typeof plans] || plans.pro

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-zinc-900/50 rounded-xl border border-zinc-800 p-6 sm:p-8 sticky top-32"
    >
      <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>

      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="font-medium">Plan {plan.name}</h3>
            <p className="text-sm text-gray-400">Facturación mensual</p>
          </div>
          <div className="text-right">
            <span className="text-xl font-bold text-amber-500">{plan.price}</span>
            <span className="text-gray-400">{plan.period}</span>
          </div>
        </div>

        <div className="border-t border-zinc-800 my-4"></div>

        <div className="flex justify-between font-medium">
          <span>Total</span>
          <span className="text-amber-500">
            {plan.price}
            {plan.period}
          </span>
        </div>
      </div>

      <div className="bg-zinc-800/50 rounded-lg p-4 mb-6">
        <h3 className="font-medium mb-3">Tu plan incluye:</h3>
        <ul className="space-y-2">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm">
              <Check className="h-4 w-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="text-xs text-gray-400">
        Puedes cancelar tu suscripción en cualquier momento desde tu perfil. No hay compromisos a largo plazo.
      </p>
    </motion.div>
  )
}

