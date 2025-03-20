"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, ChevronUp } from "lucide-react"

export function MembershipFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "¿Cómo funciona la membresía?",
      answer:
        "Nuestra membresía te da acceso a nuestros estudios fotográficos con diferentes beneficios según el plan que elijas. Una vez que te registras, puedes reservar estudios, acceder a equipamiento y disfrutar de todos los beneficios incluidos en tu plan.",
    },
    {
      question: "¿Puedo cancelar mi membresía en cualquier momento?",
      answer:
        "Sí, puedes cancelar tu membresía en cualquier momento desde tu perfil. Si cancelas, seguirás teniendo acceso hasta el final del período de facturación actual. No hay penalizaciones por cancelación.",
    },
    {
      question: "¿Qué pasa si necesito más horas de las incluidas en mi plan?",
      answer:
        "Si necesitas más horas de las incluidas en tu plan, puedes reservar horas adicionales con un descuento especial para miembros. El descuento varía según el plan que tengas.",
    },
    {
      question: "¿Puedo cambiar de plan en cualquier momento?",
      answer:
        "Sí, puedes actualizar o degradar tu plan en cualquier momento. Si actualizas, el cambio se aplica inmediatamente. Si degradas, el cambio se aplicará al inicio del siguiente período de facturación.",
    },
    {
      question: "¿La membresía incluye acceso a todos los estudios?",
      answer:
        "Sí, todos los planes de membresía te dan acceso a todos nuestros estudios. La diferencia está en el descuento aplicado, las horas incluidas y otros beneficios adicionales.",
    },
    {
      question: "¿Puedo llevar asistentes o modelos a mis sesiones?",
      answer:
        "Sí, puedes llevar asistentes o modelos a tus sesiones. Dependiendo de tu plan, algunos asistentes están incluidos sin costo adicional. Para más detalles, consulta la descripción de cada plan.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-amber-500 text-sm tracking-widest uppercase mb-3 inline-block">
            PREGUNTAS FRECUENTES
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Todo lo que necesitas saber</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Resolvemos tus dudas sobre nuestra membresía para que puedas tomar la mejor decisión para tu negocio
            fotográfico.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex justify-between items-center bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 text-left hover:border-amber-500/50 transition-all duration-300"
              >
                <h3 className="font-bold text-lg">{faq.question}</h3>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-amber-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-amber-500" />
                )}
              </button>
              {openIndex === index && (
                <div className="bg-zinc-900/30 border border-t-0 border-zinc-800 rounded-b-xl p-6">
                  <p className="text-gray-300">{faq.answer}</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

