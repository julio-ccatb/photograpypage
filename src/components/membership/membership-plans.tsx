"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void
}

export function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">("monthly")

  const plans = [
    {
      id: "basic",
      name: "Básico",
      description: "Perfecto para fotógrafos ocasionales",
      price: billingCycle === "monthly" ? "49€" : "490€",
      savings: billingCycle === "annual" ? "Ahorra 98€" : null,
      period: billingCycle === "monthly" ? "/mes" : "/año",
      features: [
        "Acceso a estudios con 20% de descuento",
        "Reservas con 7 días de antelación",
        "2 horas gratis al mes",
        "Acceso a equipamiento básico",
        "Soporte por email",
      ],
      popular: false,
    },
    {
      id: "pro",
      name: "Profesional",
      description: "Ideal para fotógrafos frecuentes",
      price: billingCycle === "monthly" ? "99€" : "990€",
      savings: billingCycle === "annual" ? "Ahorra 198€" : null,
      period: billingCycle === "monthly" ? "/mes" : "/año",
      features: [
        "Acceso a estudios con 40% de descuento",
        "Reservas con 14 días de antelación",
        "5 horas gratis al mes",
        "Acceso a equipamiento premium",
        "Soporte prioritario",
        "1 asistente incluido",
        "Almacenamiento en la nube (50GB)",
      ],
      popular: true,
    },
    {
      id: "unlimited",
      name: "Ilimitado",
      description: "Para profesionales a tiempo completo",
      price: billingCycle === "monthly" ? "199€" : "1990€",
      savings: billingCycle === "annual" ? "Ahorra 398€" : null,
      period: billingCycle === "monthly" ? "/mes" : "/año",
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
      popular: false,
    },
  ]

  return (
    <section id="planes" className="py-16 md:py-24 bg-zinc-950">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">
            PLANES DE MEMBRESÍA
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Elige el plan perfecto para ti</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-8">
            Ofrecemos diferentes niveles de membresía para adaptarnos a tus necesidades y frecuencia de uso de nuestros
            estudios.
          </p>

          {/* Billing cycle toggle */}
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={cn("text-sm font-medium", billingCycle === "monthly" ? "text-white" : "text-gray-400")}>
              Mensual
            </span>
            <div className="flex items-center space-x-2">
              <Switch
                id="billing-cycle"
                checked={billingCycle === "annual"}
                onCheckedChange={(checked) => setBillingCycle(checked ? "annual" : "monthly")}
              />
              <Label htmlFor="billing-cycle" className="sr-only">
                Facturación anual
              </Label>
            </div>
            <span className={cn("text-sm font-medium", billingCycle === "annual" ? "text-white" : "text-gray-400")}>
              Anual <span className="text-amber-500 text-xs ml-1">Ahorra 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative bg-zinc-900/50 border rounded-xl overflow-hidden transition-all duration-300 h-full",
                plan.popular ? "border-amber-500" : "border-zinc-700 hover:border-zinc-500",
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 left-0 bg-amber-500 text-black text-xs font-bold py-1 text-center">
                  MÁS POPULAR
                </div>
              )}

              <div className={cn("p-6 sm:p-8", plan.popular ? "pt-8" : "")}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-amber-500">{plan.price}</span>
                  <span className="text-gray-400">{plan.period}</span>
                  {plan.savings && <div className="text-amber-500 text-sm mt-1">{plan.savings}</div>}
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-amber-500 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full rounded-full",
                    plan.popular
                      ? "bg-amber-500 hover:bg-amber-600 text-black"
                      : "bg-zinc-800 hover:bg-zinc-700 text-white",
                  )}
                  onClick={() => onSelectPlan(plan.id)}
                >
                  Obtener membresía
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

