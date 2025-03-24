import {
  Camera,
  Aperture,
  Zap,
  Tv,
  Maximize,
  Users,
  Wifi,
  Coffee,
  Thermometer,
} from "lucide-react";
import type { ReactNode } from "react";

export interface StudioFeature {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface StudioEquipment {
  category: string;
  items: string[];
}

export interface StudioPricing {
  title: string;
  price: string;
  duration: string;
  features: string[];
  popular?: boolean;
}

export interface Studio {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  fullDescription: string;
  size: string;
  capacity: number;
  mainImage: string;
  galleryImages: string[];
  features: (StudioFeature | undefined)[];
  equipment: StudioEquipment[];
  pricing: StudioPricing[];
  location: string;
  popular?: boolean;
  comingSoon?: boolean;
}

// Características comunes que pueden tener los estudios
const commonFeatures: Record<string, StudioFeature | undefined> = {
  lighting: {
    icon: <Zap className="h-5 w-5" />,
    title: "Sistema de Iluminación Profesional",
    description:
      "Equipos de iluminación Profoto con modificadores de luz variados para lograr cualquier estilo de iluminación.",
  },
  cameras: {
    icon: <Camera className="h-5 w-5" />,
    title: "Cámaras Disponibles",
    description:
      "Acceso a cámaras profesionales Canon y Sony de última generación con una amplia selección de lentes.",
  },
  backdrop: {
    icon: <Maximize className="h-5 w-5" />,
    title: "Fondos Versátiles",
    description:
      "Sistema de fondos intercambiables con opciones de papel, tela y chroma en diversos colores.",
  },
  monitors: {
    icon: <Tv className="h-5 w-5" />,
    title: "Monitores de Visualización",
    description:
      "Monitores calibrados para revisión inmediata de las tomas y tethering directo desde la cámara.",
  },
  capacity: {
    icon: <Users className="h-5 w-5" />,
    title: "Capacidad Amplia",
    description:
      "Espacio suficiente para equipos de trabajo, modelos y clientes con áreas de espera cómodas.",
  },
  wifi: {
    icon: <Wifi className="h-5 w-5" />,
    title: "WiFi de Alta Velocidad",
    description:
      "Conexión a internet de fibra óptica para transferencia rápida de archivos y streaming en vivo.",
  },
  climate: {
    icon: <Thermometer className="h-5 w-5" />,
    title: "Control de Clima",
    description:
      "Sistema de climatización para mantener una temperatura confortable durante todo el año.",
  },
  amenities: {
    icon: <Coffee className="h-5 w-5" />,
    title: "Comodidades",
    description:
      "Área de descanso con café, agua y snacks gratuitos. Vestuarios y baños privados.",
  },
  versatility: {
    icon: <Aperture className="h-5 w-5" />,
    title: "Versatilidad Creativa",
    description:
      "Configuración adaptable para diferentes tipos de sesiones, desde retratos hasta productos y moda.",
  },
};

// Datos de los estudios
export const studios: Studio[] = [
  {
    id: "studio-a",
    name: "Estudio Cosmos",
    slug: "luminance",
    shortDescription:
      "Nuestro estudio insignia con amplios espacios y equipamiento premium para producciones profesionales.",
    fullDescription:
      "Estudio Luminance es nuestro espacio más amplio y versátil, diseñado para producciones fotográficas y audiovisuales de gran escala. Con techos altos, amplias dimensiones y equipamiento de primera línea, este estudio es ideal para sesiones de moda, campañas publicitarias y producciones que requieren múltiples configuraciones de iluminación y espacio para equipos grandes.",
    size: "35m²",
    capacity: 10,
    mainImage: "/placeholder.svg?height=600&width=800",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=600&width=800",
    ],
    features: [
      commonFeatures.lighting,
      commonFeatures.cameras,
      commonFeatures.backdrop,
      commonFeatures.monitors,
      commonFeatures.capacity,
      commonFeatures.wifi,
      commonFeatures.climate,
      commonFeatures.amenities,
    ],
    equipment: [
      {
        category: "Iluminación",
        items: [
          "4 Flashes Profoto B10 Plus",
          "2 Profoto D1 Air 500W",
          "Variedad de modificadores (softboxes, paraguas, beauty dish)",
          "Sistema de iluminación continua LED",
          "Reflectores y difusores variados",
        ],
      },
      {
        category: "Fondos",
        items: [
          "Sistema de rieles para 4 fondos simultáneos",
          "Fondos de papel en blanco, negro y gris",
          "Fondo chroma verde y azul",
          "Fondos de tela texturizados",
          "Ciclorama blanco",
        ],
      },
      {
        category: "Accesorios",
        items: [
          "Mesas y soportes para fotografía de producto",
          "Ventiladores para efectos",
          "Máquina de humo",
          "Atrezzo variado",
          "Vestuario básico",
        ],
      },
    ],
    pricing: [
      {
        title: "Media Jornada",
        price: "250 DOP",
        duration: "4 horas",
        features: [
          "Acceso completo al estudio",
          "Uso de equipos de iluminación",
          "Asistente técnico disponible",
          "Área de descanso y vestuarios",
        ],
      },
      {
        title: "Jornada Completa",
        price: "450 DOP",
        duration: "8 horas",
        features: [
          "Acceso completo al estudio",
          "Uso de equipos de iluminación",
          "Asistente técnico dedicado",
          "Área de descanso y vestuarios",
          "Servicio de café y snacks",
        ],
        popular: true,
      },
      {
        title: "Pack Semanal",
        price: "1800 DOP",
        duration: "5 días",
        features: [
          "Acceso completo al estudio",
          "Uso de equipos de iluminación",
          "Asistente técnico dedicado",
          "Área de descanso y vestuarios",
          "Servicio de café y snacks",
          "Almacenamiento seguro de equipos",
        ],
      },
    ],
    location: "Planta Principal",
    popular: true,
  },
  {
    id: "studio-b",
    name: "Estudio Chroma",
    slug: "chroma",
    shortDescription:
      "Especializado en fotografía con fondos chroma para postproducción avanzada y efectos visuales.",
    fullDescription:
      "Estudio Chroma está diseñado específicamente para producciones que requieren trabajo de postproducción avanzada. Cuenta con un ciclorama chroma profesional de esquinas redondeadas, iluminación especializada para eliminar sombras y sistemas de marcadores de tracking para efectos visuales. Ideal para fotografía y video que requieren sustitución de fondos, composición digital y efectos especiales.",
    size: "80m²",
    capacity: 10,
    mainImage: "/placeholder.svg?height=600&width=800",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
    ],
    features: [
      {
        icon: <Aperture className="h-5 w-5" />,
        title: "Ciclorama Chroma Profesional",
        description:
          "Ciclorama verde y azul con esquinas redondeadas para una integración perfecta en postproducción.",
      },
      commonFeatures.lighting,
      commonFeatures.cameras,
      commonFeatures.monitors,
      commonFeatures.wifi,
      commonFeatures.climate,
    ],
    equipment: [
      {
        category: "Iluminación Especializada",
        items: [
          "Sistema de iluminación perimetral para chroma",
          "Luces LED con control de temperatura de color",
          "Iluminación de contra para separación de sujetos",
          "Filtros y geles para efectos especiales",
        ],
      },
      {
        category: "Equipamiento Técnico",
        items: [
          "Software de composición en tiempo real",
          "Marcadores de tracking para VFX",
          "Monitor de referencia calibrado",
          "Sistema de tethering avanzado",
        ],
      },
      {
        category: "Accesorios",
        items: [
          "Soportes y rigging para objetos en suspensión",
          "Ventiladores y máquinas de efectos",
          "Pantallas reflectoras especializadas",
          "Equipamiento para motion control",
        ],
      },
    ],
    pricing: [
      {
        title: "Media Jornada",
        price: "300 DOP",
        duration: "4 horas",
        features: [
          "Acceso completo al estudio chroma",
          "Uso de equipos de iluminación especializada",
          "Asistente técnico disponible",
          "Software básico de composición",
        ],
      },
      {
        title: "Jornada Completa",
        price: "550 DOP",
        duration: "8 horas",
        features: [
          "Acceso completo al estudio chroma",
          "Uso de equipos de iluminación especializada",
          "Asistente técnico dedicado",
          "Software avanzado de composición",
          "Asesoramiento en postproducción",
        ],
        popular: true,
      },
      {
        title: "Pack Producción",
        price: "2200 DOP",
        duration: "5 días",
        features: [
          "Acceso completo al estudio chroma",
          "Uso de equipos de iluminación especializada",
          "Técnico de VFX dedicado",
          "Software avanzado de composición",
          "Servicios básicos de postproducción incluidos",
        ],
      },
    ],
    location: "Planta Principal",
  },
  {
    id: "studio-d",
    name: "Estudio Product",
    slug: "product",
    shortDescription:
      "Especializado en fotografía de producto con equipamiento técnico específico y mesas de still life.",
    fullDescription:
      "Estudio Product está diseñado específicamente para fotografía de productos, e-commerce y still life. Equipado con mesas especializadas, sistemas de iluminación de precisión y fondos infinitos de diferentes tamaños, este estudio permite capturar desde pequeñas joyas hasta objetos de tamaño mediano con un control total sobre la iluminación y los reflejos. Incluye equipamiento para fotografía 360° y focus stacking.",
    size: "60m²",
    capacity: 4,
    mainImage: "/placeholder.svg?height=600&width=800",
    galleryImages: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=800&width=600",
    ],
    features: [
      {
        icon: <Aperture className="h-5 w-5" />,
        title: "Mesas Especializadas",
        description:
          "Mesas de still life con sistemas de sujeción, plataforma giratoria 360° y fondos infinitos de diferentes tamaños.",
      },
      {
        icon: <Zap className="h-5 w-5" />,
        title: "Iluminación de Precisión",
        description:
          "Sistemas de iluminación macro, light tents, paneles de luz LED y flashes de estudio con modificadores especializados.",
      },
      commonFeatures.cameras,
      commonFeatures.monitors,
      commonFeatures.wifi,
    ],
    equipment: [
      {
        category: "Equipamiento Especializado",
        items: [
          "Mesa de fotografía con fondo infinito",
          "Plataforma giratoria automatizada para 360°",
          "Light tents de diferentes tamaños",
          "Sistema de raíles para movimiento preciso de cámara",
        ],
      },
      {
        category: "Iluminación Técnica",
        items: [
          "Flashes macro con difusores especializados",
          "Paneles LED con control de temperatura de color",
          "Iluminación de contorno y para transparencias",
          "Filtros polarizadores para control de reflejos",
        ],
      },
      {
        category: "Accesorios",
        items: [
          "Soportes y pinzas para sujeción de productos",
          "Materiales para fondos y superficies variadas",
          "Kit de limpieza para productos",
          "Herramientas de medición y nivelación",
        ],
      },
    ],
    pricing: [
      {
        title: "Sesión Básica",
        price: "150 DOP",
        duration: "3 horas",
        features: [
          "Acceso al estudio de producto",
          "Uso de una mesa de still life",
          "Iluminación básica",
          "Fondos estándar",
        ],
      },
      {
        title: "Sesión E-commerce",
        price: "280 DOP",
        duration: "6 horas",
        features: [
          "Acceso completo al estudio",
          "Uso de todas las mesas y plataformas",
          "Equipamiento para fotografía 360°",
          "Asistente técnico disponible",
          "Procesamiento básico de imágenes",
        ],
        popular: true,
      },
      {
        title: "Pack Catálogo",
        price: "950 DOP",
        duration: "3 días",
        features: [
          "Acceso completo al estudio",
          "Uso de todo el equipamiento especializado",
          "Asistente técnico dedicado",
          "Procesamiento avanzado de hasta 50 productos",
          "Almacenamiento y entrega digital optimizada",
        ],
      },
    ],
    location: "Planta Superior",
    comingSoon: true,
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  studio: string;
}

// Preguntas frecuentes sobre los estudios
export const studioFAQs: FAQItem[] = [
  {
    question: "¿Necesito traer mi propio equipo?",
    answer:
      "No es necesario. Todos nuestros estudios están completamente equipados con sistemas de iluminación profesional, fondos y accesorios. Sin embargo, si prefieres trabajar con tu propio equipo, eres bienvenido a traerlo.",
  },
  {
    question: "¿Puedo visitar los estudios antes de reservar?",
    answer:
      "¡Por supuesto! Ofrecemos visitas guiadas con cita previa para que puedas conocer nuestras instalaciones y determinar qué estudio se adapta mejor a tus necesidades.",
  },
  {
    question: "¿Qué incluye el precio del alquiler?",
    answer:
      "El precio incluye el uso del espacio, equipos de iluminación básicos, fondos estándar y acceso a áreas comunes como vestuarios y zona de descanso. Equipos especializados o servicios adicionales pueden tener un costo extra.",
  },
  {
    question: "¿Ofrecen asistentes técnicos?",
    answer:
      "Sí, podemos proporcionar asistentes técnicos con experiencia en iluminación, manejo de equipos y configuración de sets. Este servicio tiene un costo adicional y debe reservarse con antelación.",
  },
  {
    question: "¿Cuál es la política de cancelación?",
    answer:
      "Las reservas pueden cancelarse hasta 48 horas antes sin costo. Cancelaciones con menos de 48 horas de antelación tendrán un cargo del 50% del valor de la reserva. No presentarse sin aviso previo implica el cargo completo.",
  },
];

// Testimonios específicos sobre los estudios
export const studioTestimonials: TestimonialItem[] = [
  {
    text: "El Estudio Luminance superó todas nuestras expectativas para nuestra campaña de moda. El espacio amplio y el equipamiento profesional nos permitieron lograr exactamente la estética que buscábamos.",
    name: "Elena Martínez",
    role: "Directora Creativa, Fashion Magazine",
    studio: "Estudio Luminance",
  },
  {
    text: "Como fotógrafo de productos, el Estudio Product tiene todo lo que necesito. Las mesas especializadas y la iluminación de precisión hacen que mi trabajo sea mucho más eficiente y los resultados son impecables.",
    name: "Carlos Ruiz",
    role: "Fotógrafo de Productos",
    studio: "Estudio Product",
  },
  {
    text: "El ambiente íntimo del Estudio Boutique crea una atmósfera perfecta para mis sesiones de retratos. Mis clientes se sienten cómodos y relajados, lo que se refleja en fotografías más naturales y expresivas.",
    name: "Laura Gómez",
    role: "Fotógrafa de Retratos",
    studio: "Estudio Boutique",
  },
  {
    text: "Para nuestro último anuncio necesitábamos efectos visuales complejos, y el Estudio Chroma fue perfecto. El ciclorama profesional y el equipamiento técnico nos permitieron lograr una integración perfecta en postproducción.",
    name: "Miguel Sánchez",
    role: "Director de Producción, Agencia Creativa",
    studio: "Estudio Chroma",
  },
];
