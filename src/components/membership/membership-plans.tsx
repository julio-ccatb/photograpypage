"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

interface MembershipPlansProps {
  onSelectPlan: (planId: string) => void;
}

export function MembershipPlans({ onSelectPlan }: MembershipPlansProps) {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );

  const plans = [
    {
      id: "basic",
      name: "Básico",
      description: "Perfecto para fotógrafos ocasionales",
      price: billingCycle === "monthly" ? "49 DOP" : "490 DOP",
      savings: billingCycle === "annual" ? "Ahorra 98 DOP" : null,
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
      price: billingCycle === "monthly" ? "99 DOP" : "990 DOP",
      savings: billingCycle === "annual" ? "Ahorra 198 DOP" : null,
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
      price: billingCycle === "monthly" ? "199 DOP" : "1990 DOP",
      savings: billingCycle === "annual" ? "Ahorra 398 DOP" : null,
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
  ];

  return (
    <section id="planes" className="bg-zinc-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-3 inline-block text-sm uppercase tracking-widest text-amber-500">
            PLANES DE MEMBRESÍA
          </span>
          <h2 className="mb-6 mt-2 text-3xl font-bold md:text-4xl">
            Elige el plan perfecto para ti
          </h2>
          <p className="mx-auto mb-8 max-w-3xl text-gray-300">
            Ofrecemos diferentes niveles de membresía para adaptarnos a tus
            necesidades y frecuencia de uso de nuestros estudios.
          </p>

          {/* Billing cycle toggle */}
          <div className="mb-12 flex items-center justify-center gap-4">
            <span
              className={cn(
                "text-sm font-medium",
                billingCycle === "monthly" ? "text-white" : "text-gray-400",
              )}
            >
              Mensual
            </span>
            <div className="flex items-center space-x-2">
              <Switch
                id="billing-cycle"
                checked={billingCycle === "annual"}
                onCheckedChange={(checked) =>
                  setBillingCycle(checked ? "annual" : "monthly")
                }
              />
              <Label htmlFor="billing-cycle" className="sr-only">
                Facturación anual
              </Label>
            </div>
            <span
              className={cn(
                "text-sm font-medium",
                billingCycle === "annual" ? "text-white" : "text-gray-400",
              )}
            >
              Anual{" "}
              <span className="ml-1 text-xs text-amber-500">Ahorra 20%</span>
            </span>
          </div>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "relative h-full overflow-hidden rounded-xl border bg-zinc-900/50 transition-all duration-300",
                plan.popular
                  ? "border-amber-500"
                  : "border-zinc-700 hover:border-zinc-500",
              )}
            >
              {plan.popular && (
                <div className="absolute left-0 right-0 top-0 bg-amber-500 py-1 text-center text-xs font-bold text-black">
                  MÁS POPULAR
                </div>
              )}

              <div className={cn("p-6 sm:p-8", plan.popular ? "pt-8" : "")}>
                <h3 className="mb-2 text-xl font-bold">{plan.name}</h3>
                <p className="mb-4 text-sm text-gray-400">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-3xl font-bold text-amber-500">
                    {plan.price}
                  </span>
                  <span className="text-gray-400">{plan.period}</span>
                  {plan.savings && (
                    <div className="mt-1 text-sm text-amber-500">
                      {plan.savings}
                    </div>
                  )}
                </div>

                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="mr-2 h-5 w-5 flex-shrink-0 text-amber-500" />
                      <span className="text-sm text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={cn(
                    "w-full rounded-full",
                    plan.popular
                      ? "bg-amber-500 text-black hover:bg-amber-600"
                      : "bg-zinc-800 text-white hover:bg-zinc-700",
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
  );
}
