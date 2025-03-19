import { Clock, Camera, HelpCircle } from "lucide-react";
import type { ReactNode } from "react";

// Tipos para los datos
export interface FAQItem {
  question: string;
  answer: string;
  icon: ReactNode;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
}

export interface ContactInfo {
  address: string;
  city: string;
  postalCode: string;
  phone: string;
  whatsapp: string;
  email: string;
  businessEmail: string;
}

// Datos de FAQ
export const faqItems: FAQItem[] = [
  {
    question: "¿Cuánto tiempo antes debo reservar?",
    answer:
      "Recomendamos reservar con al menos 2-3 semanas de anticipación para sesiones regulares. Para eventos especiales como bodas, se recomienda reservar con 3-6 meses de antelación para asegurar disponibilidad.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    question: "¿Qué debo llevar a una sesión?",
    answer:
      "Para sesiones de retratos, recomendamos traer 2-3 cambios de ropa en diferentes estilos y colores. También puedes traer accesorios personales que reflejen tu personalidad. Te enviaremos una guía completa después de confirmar tu reserva.",
    icon: <Camera className="h-5 w-5" />,
  },
  {
    question: "¿Cuánto tiempo tarda la entrega?",
    answer:
      "El tiempo de entrega varía según el tipo de sesión. Para retratos y sesiones comerciales, el tiempo de entrega es de 7-10 días hábiles. Para eventos como bodas, el tiempo de entrega es de 3-4 semanas.",
    icon: <Clock className="h-5 w-5" />,
  },
  {
    question: "¿Ofrecen servicios de maquillaje?",
    answer:
      "Sí, ofrecemos servicios de maquillaje y estilismo profesional como complemento a nuestras sesiones fotográficas. Estos servicios tienen un costo adicional y deben reservarse con anticipación.",
    icon: <HelpCircle className="h-5 w-5" />,
  },
];

// Datos de testimonios
export const testimonials: TestimonialItem[] = [
  {
    text: "El equipo de Dvine Studios fue increíblemente profesional y atento. Respondieron a todas mis preguntas rápidamente y me hicieron sentir cómodo durante toda la sesión.",
    name: "Carlos Mendoza",
    role: "Sesión de Retratos",
  },
  {
    text: "Las fotografías superaron todas mis expectativas. Capturaron momentos que ni siquiera sabía que existían. Definitivamente volveré para mi próximo evento.",
    name: "Laura Jiménez",
    role: "Fotografía de Eventos",
  },
  {
    text: "Trabajar con Dvine Studios para nuestra campaña de marketing fue una experiencia excepcional. Su creatividad y profesionalismo elevaron nuestra marca a otro nivel.",
    name: "Miguel Sánchez",
    role: "Fotografía Comercial",
  },
];

// Información de contacto

// Horarios de atención
export const businessHours = {
  weekdays: "9:00 - 19:00",
  saturday: "10:00 - 14:00",
  sunday: "Cerrado",
};
