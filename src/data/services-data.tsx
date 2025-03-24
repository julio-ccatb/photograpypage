import { Camera, Users, ImageIcon, Video } from "lucide-react";
import type {
  ServiceType,
  PackageType,
  WorkSampleType,
} from "@/types/services";

// Datos de servicios
export const services: ServiceType[] = [
  {
    id: "portraits",
    title: "Fotografía de Retratos",
    shortDesc:
      "Captura tu esencia con nuestras sesiones de retratos profesionales.",
    description:
      "Nuestras sesiones de retratos están diseñadas para resaltar tu personalidad única. Trabajamos con iluminación natural y de estudio para crear imágenes que capturen tu verdadera esencia.",
    icon: <Users className="h-6 w-6" />,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Sesiones en estudio o locación",
      "Asesoramiento de vestuario",
      "Edición profesional de cada imagen",
      "Entrega digital e impresa disponible",
    ],
    price: "Desde 150 DOP",
    popular: false,
  },
  {
    id: "commercial",
    title: "Fotografía Comercial",
    shortDesc:
      "Eleva tu marca con fotografía de productos y comercial impresionante.",
    description:
      "Transformamos tus productos y servicios en imágenes que venden. Nuestra fotografía comercial está diseñada para destacar en un mercado competitivo y conectar con tu audiencia.",
    icon: <ImageIcon className="h-6 w-6" />,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Fotografía de productos con atención al detalle",
      "Imágenes para catálogos y e-commerce",
      "Fotografía corporativa y de personal",
      "Licencias comerciales incluidas",
    ],
    price: "Desde 300 DOP",
    popular: true,
  },
  {
    id: "events",
    title: "Cobertura de Eventos",
    shortDesc:
      "Documenta tus momentos especiales con nuestros servicios completos.",
    description:
      "Capturamos cada momento significativo de tu evento, desde grandes celebraciones hasta reuniones íntimas. Nuestro enfoque discreto asegura imágenes naturales y auténticas.",
    icon: <Camera className="h-6 w-6" />,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Cobertura por horas o jornada completa",
      "Equipo de fotógrafos disponible",
      "Entrega rápida de previsualizaciones",
      "Álbum digital personalizado",
    ],
    price: "Desde 250 DOP",
    popular: false,
  },
  {
    id: "video",
    title: "Producción de Video",
    shortDesc:
      "Crea contenido audiovisual de alta calidad para tu marca o evento.",
    description:
      "Nuestros servicios de video combinan técnica cinematográfica con narrativa visual para crear contenido que cautiva a tu audiencia, ya sea para redes sociales o producciones más ambiciosas.",
    icon: <Video className="h-6 w-6" />,
    image: "/placeholder.svg?height=600&width=800",
    features: [
      "Videos corporativos y promocionales",
      "Cobertura de eventos en video",
      "Edición profesional y corrección de color",
      "Formatos optimizados para cada plataforma",
    ],
    price: "Desde 400 DOP",
    popular: false,
  },
];

// Paquetes de precios
export const packages: PackageType[] = [
  {
    title: "Básico",
    price: "150 DOP",
    features: [
      "1 hora de sesión",
      "10 fotos editadas",
      "Entrega digital",
      "1 cambio de vestuario",
    ],
  },
  {
    title: "Premium",
    price: "299 DOP",
    features: [
      "3 horas de sesión",
      "30 fotos editadas",
      "Entrega digital + 5 impresiones",
      "Cambios ilimitados de vestuario",
      "Maquillaje profesional",
    ],
    popular: true,
  },
  {
    title: "Empresarial",
    price: "499 DOP",
    features: [
      "Jornada completa",
      "50+ fotos editadas",
      "Entrega digital + álbum impreso",
      "Múltiples locaciones",
      "Licencia comercial completa",
    ],
  },
];

// Ejemplos de trabajos
export const workSamples: WorkSampleType[] = [
  {
    image: "/IMGS/SRV_01.jpg?height=500&width=500",
    title: "Retrato Corporativo",
    category: "Retratos",
  },
  {
    image: "/IMGS/SRV_02.jpg?height=500&width=500",
    title: "Campaña de Producto",
    category: "Comercial",
  },
  {
    image: "/IMGS/SRV_03.jpg?height=500&width=500",
    title: "Boda en la Playa",
    category: "Eventos",
  },
  {
    image: "/IMGS/SRV_04.jpg?height=500&width=500",
    title: "Video Promocional",
    category: "Video",
  },
];
