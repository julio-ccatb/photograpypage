export interface ServicePackage {
  id: string
  name: string
  description: string
  duration: string
  price: number
  features: string[]
  popular?: boolean
}

export const servicePackages: ServicePackage[] = [
  {
    id: "basic",
    name: "Sesión Básica",
    description: "Perfecta para retratos individuales o pequeños proyectos",
    duration: "1 hora",
    price: 99,
    features: ["1 hora de sesión fotográfica", "10 fotos editadas", "Entrega digital", "1 cambio de vestuario"],
  },
  {
    id: "premium",
    name: "Sesión Premium",
    description: "Ideal para sesiones familiares o profesionales",
    duration: "2 horas",
    price: 199,
    features: [
      "2 horas de sesión fotográfica",
      "25 fotos editadas",
      "Entrega digital + 5 impresiones",
      "3 cambios de vestuario",
      "Maquillaje profesional",
    ],
    popular: true,
  },
  {
    id: "exclusive",
    name: "Sesión Exclusiva",
    description: "La experiencia fotográfica definitiva",
    duration: "4 horas",
    price: 399,
    features: [
      "4 horas de sesión fotográfica",
      "50 fotos editadas",
      "Entrega digital + álbum impreso",
      "Cambios ilimitados de vestuario",
      "Maquillaje y estilismo profesional",
      "Locaciones múltiples",
      "Video behind-the-scenes",
    ],
  },
]

export interface TimeSlot {
  id: string
  time: string
  available: boolean
}

export const generateAvailableTimeSlots = (date: Date): TimeSlot[] => {
  // Simulamos disponibilidad basada en el día de la semana
  const dayOfWeek = date.getDay()
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6

  const slots: TimeSlot[] = [
    { id: "1", time: "09:00", available: true },
    { id: "2", time: "10:30", available: dayOfWeek !== 3 }, // No disponible los miércoles
    { id: "3", time: "12:00", available: true },
    { id: "4", time: "14:00", available: dayOfWeek !== 5 }, // No disponible los viernes
    { id: "5", time: "15:30", available: isWeekend }, // Solo disponible en fin de semana
    { id: "6", time: "17:00", available: true },
    { id: "7", time: "18:30", available: dayOfWeek !== 1 }, // No disponible los lunes
  ]

  return slots
}

export interface PaymentMethod {
  id: string
  name: string
  description: string
  icon: string
}

export const paymentMethods: PaymentMethod[] = [
  {
    id: "credit_card",
    name: "Tarjeta de Crédito/Débito",
    description: "Pago seguro con tarjeta",
    icon: "credit-card",
  },
  {
    id: "paypal",
    name: "PayPal",
    description: "Pago rápido y seguro con PayPal",
    icon: "paypal",
  },
  {
    id: "on_arrival",
    name: "Pago a la Llegada",
    description: "Paga en efectivo o tarjeta el día de tu sesión",
    icon: "wallet",
  },
]

