export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  description: string;
  featured?: boolean;
  image: string;
  aspectRatio?: "portrait" | "landscape" | "square";
  client?: string;
  location?: string;
  date?: string;
}

export interface Category {
  id: string;
  name: string;
  icon?: string;
}

// Categorías con iconos para el nuevo diseño
export const categories: Category[] = [
  { id: "all", name: "Todos" },
  { id: "portraits", name: "Retratos" },
  { id: "commercial", name: "Comercial" },
  { id: "fashion", name: "Moda" },
  { id: "events", name: "Eventos" },
  { id: "products", name: "Productos" },
  { id: "architecture", name: "Arquitectura" },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "p1",
    title: "Elegancia en Movimiento",
    category: "fashion",
    description:
      "Sesión de moda para la colección de primavera de Elegance Boutique, capturando la fluidez y movimiento de las prendas.",
    featured: true,
    image: "/IMGS/IMG_1.jpg?height=1200&width=900",
    aspectRatio: "landscape",
    client: "Elegance Boutique",
    location: "Madrid",
    date: "Marzo 2023",
  },
  {
    id: "p2",
    title: "Perspectiva Urbana",
    category: "portraits",
    description:
      "Retratos urbanos que capturan la esencia de la vida en la ciudad y la personalidad única del sujeto.",
    image: "/IMGS/IMG_2.jpg?height=800&width=800",
    aspectRatio: "square",
    client: "Revista Urban",
    location: "Barcelona",
    date: "Abril 2023",
  },
  {
    id: "p3",
    title: "Exhibición de Productos",
    category: "products",
    description:
      "Fotografía de productos para catálogo online, destacando los detalles y texturas de cada artículo.",
    image: "/IMGS/IMG_3.jpg?height=800&width=1200",
    aspectRatio: "landscape",
    client: "Artesanía Moderna",
    location: "Valencia",
    date: "Mayo 2023",
  },
  {
    id: "p4",
    title: "Identidad Corporativa",
    category: "commercial",
    description:
      "Sesión corporativa para actualizar la imagen de marca y materiales promocionales de la empresa.",
    image: "/IMGS/IMG_4.jpg?height=1200&width=900",
    aspectRatio: "portrait",
    client: "TechSolutions Inc.",
    location: "Madrid",
    date: "Junio 2023",
  },
  {
    id: "p5",
    title: "Momentos de Boda",
    category: "events",
    description:
      "Documentación fotográfica de una boda íntima, capturando los momentos más emotivos y significativos del día.",
    featured: true,
    image: "/IMGS/IMG_5.jpg?height=800&width=1200",
    aspectRatio: "portrait",
    client: "Elena y Carlos",
    location: "Sevilla",
    date: "Julio 2023",
  },
  {
    id: "p6",
    title: "Arte Culinario",
    category: "products",
    description:
      "Fotografía gastronómica para el nuevo menú de temporada, resaltando los colores y texturas de cada plato.",
    image: "/IMGS/IMG_6.jpg?height=800&width=800",
    aspectRatio: "portrait",
    client: "Restaurante Sabores",
    location: "Barcelona",
    date: "Agosto 2023",
  },
  {
    id: "p7",
    title: "Arquitectura Moderna",
    category: "architecture",
    description:
      "Serie fotográfica que explora las líneas y formas de edificios emblemáticos de la arquitectura contemporánea.",
    featured: true,
    image: "/IMGS/IMG_7.jpg?height=800&width=1200",
    aspectRatio: "landscape",
    client: "Revista Arquitectura Hoy",
    location: "Bilbao",
    date: "Septiembre 2023",
  },
  {
    id: "p8",
    title: "Retrato Corporativo",
    category: "portraits",
    description:
      "Retratos profesionales para el equipo directivo, transmitiendo confianza y profesionalidad.",
    image: "/IMGS/IMG_8.jpg?height=1200&width=900",
    aspectRatio: "portrait",
    client: "Finanzas Global",
    location: "Madrid",
    date: "Octubre 2023",
  },
  {
    id: "p9",
    title: "Campaña Publicitaria",
    category: "commercial",
    description:
      "Fotografía para campaña publicitaria de lanzamiento de producto, con enfoque en el impacto visual.",
    image: "/IMGS/IMG_9.jpg?height=800&width=1200",
    aspectRatio: "landscape",
    client: "NovaTech",
    location: "Valencia",
    date: "Noviembre 2023",
  },
  {
    id: "p10",
    title: "Desfile de Moda",
    category: "fashion",
    description:
      "Cobertura del desfile de moda de la temporada otoño-invierno, capturando los momentos clave del evento.",
    image: "/IMGS/IMG_10.jpg?height=1200&width=900",
    aspectRatio: "portrait",
    client: "Fashion Week Madrid",
    location: "Madrid",
    date: "Diciembre 2023",
  },
  {
    id: "p11",
    title: "Evento Corporativo",
    category: "events",
    description:
      "Documentación fotográfica de la conferencia anual, incluyendo ponencias, networking y momentos destacados.",
    image: "/placeholder.svg?height=800&width=800",
    aspectRatio: "square",
    client: "Tech Conference",
    location: "Barcelona",
    date: "Enero 2024",
  },
  {
    id: "p12",
    title: "Colección de Joyería",
    category: "products",
    description:
      "Fotografía de producto para nueva colección de joyería artesanal, destacando los detalles y acabados.",
    image: "/placeholder.svg?height=1200&width=900",
    aspectRatio: "portrait",
    client: "Joyas Únicas",
    location: "Sevilla",
    date: "Febrero 2024",
  },
  {
    id: "p13",
    title: "Espacios Interiores",
    category: "architecture",
    description:
      "Fotografía de interiores para estudio de diseño, mostrando la armonía y funcionalidad de los espacios.",
    image: "/placeholder.svg?height=800&width=1200",
    aspectRatio: "landscape",
    client: "Diseño Interior Plus",
    location: "Madrid",
    date: "Marzo 2024",
  },
  {
    id: "p14",
    title: "Retrato Artístico",
    category: "portraits",
    description:
      "Serie de retratos conceptuales explorando diferentes emociones y estados de ánimo.",
    featured: true,
    image: "/placeholder.svg?height=1200&width=900",
    aspectRatio: "portrait",
    client: "Galería de Arte Moderna",
    location: "Barcelona",
    date: "Abril 2024",
  },
  {
    id: "p15",
    title: "Lanzamiento de Producto",
    category: "commercial",
    description:
      "Fotografía para el lanzamiento de un nuevo producto tecnológico, con enfoque en la innovación y diseño.",
    image: "/placeholder.svg?height=800&width=800",
    aspectRatio: "square",
    client: "InnovateTech",
    location: "Valencia",
    date: "Mayo 2024",
  },
];
