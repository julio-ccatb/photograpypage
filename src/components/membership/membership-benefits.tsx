"use client"

import { motion } from "framer-motion"
import { Camera, Clock, Users, Star, Shield, Gift, Headphones, Calendar } from "lucide-react"

export function MembershipBenefits() {
  const benefits = [
    {
      icon: <Camera className="h-10 w-10 text-amber-500" />,
      title: "Equipamiento Profesional",
      description:
        "Accede a nuestro equipamiento fotográfico de última generación, incluyendo cámaras, lentes, iluminación y accesorios.",
    },
    {
      icon: <Clock className="h-10 w-10 text-amber-500" />,
      title: "Reservas Prioritarias",
      description:
        "Obtén acceso prioritario a la reserva de nuestros estudios, con la posibilidad de reservar con mayor antelación.",
    },
    {
      icon: <Users className="h-10 w-10 text-amber-500" />,
      title: "Asistentes Incluidos",
      description:
        "Dependiendo de tu plan, podrás contar con asistentes profesionales para tus sesiones sin costo adicional.",
    },
    {
      icon: <Star className="h-10 w-10 text-amber-500" />,
      title: "Beneficios Exclusivos",
      description:
        "Disfruta de ventajas exclusivas como descuentos en cursos, talleres y eventos especiales solo para miembros.",
    },
    {
      icon: <Shield className="h-10 w-10 text-amber-500" />,
      title: "Seguro de Equipamiento",
      description:
        "Tu equipo estará protegido durante tu estancia en nuestros estudios con nuestro seguro de responsabilidad civil.",
    },
    {
      icon: <Gift className="h-10 w-10 text-amber-500" />,
      title: "Regalos y Sorpresas",
      description:
        "Recibe periódicamente regalos exclusivos, desde accesorios hasta sesiones gratuitas y otras sorpresas.",
    },
    {
      icon: <Headphones className="h-10 w-10 text-amber-500" />,
      title: "Soporte Dedicado",
      description: "Cuenta con un equipo de soporte dedicado para resolver cualquier duda o problema que puedas tener.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-amber-500" />,
      title: "Eventos Exclusivos",
      description:
        "Participa en eventos exclusivos para miembros, como workshops, networking y sesiones colaborativas.",
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
            BENEFICIOS EXCLUSIVOS
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6">Todo lo que incluye tu membresía</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Disfruta de una amplia gama de beneficios diseñados para potenciar tu creatividad y hacer que tu experiencia
            en nuestros estudios sea excepcional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 hover:border-amber-500/50 transition-all duration-300"
            >
              <div className="bg-zinc-800/50 rounded-full p-4 inline-block mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

