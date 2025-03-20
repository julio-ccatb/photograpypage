export interface HistoryMilestone {
  year: string;
  title: string;
  description: string;
  quote: string;
  image: string;
}

export interface FeaturedProject {
  title: string;
  description: string;
  image: string;
  year: string;
  client: string;
}

export interface Stat {
  value: string;
  label: string;
  context: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  context: string;
  image: string;
  stars: number;
}

export interface Value {
  title: string;
  description: string;
  story: string;
  icon: string;
}

export const historyData = {
  title: "Nuestra Trayectoria",
  description:
    "Desde nuestros humildes comienzos hasta convertirnos en un referente de la fotografía profesional, esta es nuestra historia.",
  story: [
    {
      year: "2015",
      title: "Fundación de Dvine Studios",
      description:
        "En un pequeño estudio en el corazón de la ciudad, Enmanuel Hassan comenzó su sueño de capturar momentos únicos y crear recuerdos inolvidables.",
      quote:
        "Cada fotografía es una oportunidad de contar una historia y conectar con las emociones de las personas.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      year: "2018",
      title: "Primer Premio Nacional de Fotografía",
      description:
        "El reconocimiento a la excelencia y la dedicación de nuestro equipo nos impulsó a seguir creciendo y superando nuestras propias expectativas.",
      quote:
        "La pasión por la fotografía es el motor que nos impulsa a mejorar cada día y ofrecer un servicio de calidad excepcional.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      year: "2020",
      title: "Expansión a nuevos mercados",
      description:
        "La apertura de nuevas sedes en diferentes ciudades nos permitió llevar nuestra visión y talento a un público más amplio.",
      quote:
        "La creatividad no tiene límites y estamos comprometidos con llevar nuestra pasión por la fotografía a cada rincón del mundo.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      year: "2023",
      title: "Lanzamiento de la Academia Dvine",
      description:
        "Compartimos nuestro conocimiento y experiencia con las nuevas generaciones de fotógrafos, formando profesionales apasionados y comprometidos con el arte de la imagen.",
      quote:
        "La mejor forma de honrar nuestro legado es inspirar y formar a los futuros líderes de la fotografía.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ],
  milestones: [
    {
      year: "2015",
      title: "Fundación",
      description:
        "Nacimiento de Dvine Studios con una visión clara: capturar la esencia de cada momento.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      year: "2018",
      title: "Reconocimiento Nacional",
      description:
        "Obtención del primer premio nacional de fotografía, un hito en nuestra trayectoria.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ],
};

export const philosophyData = {
  title: "Nuestra Filosofía",
  description:
    "Creemos en la fotografía como una forma de arte que trasciende lo visual, capturando emociones y creando recuerdos duraderos.",
  mainQuote:
    "La fotografía es el arte de capturar la vida en un instante, un instante que perdura para siempre.",
  principles: [
    {
      title: "Pasión por la Excelencia",
      description:
        "Nos esforzamos por superar las expectativas en cada proyecto, buscando la perfección en cada detalle.",
    },
    {
      title: "Compromiso con la Creatividad",
      description:
        "Exploramos nuevas técnicas y perspectivas para ofrecer resultados innovadores y originales.",
    },
    {
      title: "Respeto por la Autenticidad",
      description:
        "Capturamos la esencia de cada persona y momento, preservando la naturalidad y la espontaneidad.",
    },
  ],
};

export const featuredProjectsData = {
  title: "Proyectos Destacados",
  description:
    "Una muestra de nuestro trabajo más reciente, donde la creatividad y la técnica se fusionan para crear imágenes impactantes.",
  projects: [
    {
      title: "Campaña Publicitaria Verano 2023",
      description:
        "Una campaña vibrante y llena de color para una reconocida marca de moda, capturando la esencia del verano.",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      client: "Marca de Moda XYZ",
    },
    {
      title: "Boda en la Playa",
      description:
        "Una ceremonia íntima y romántica en la costa, capturando la magia del amor en un entorno paradisíaco.",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      client: "Elena & Carlos",
    },
    {
      title: "Fotografía de Producto Gourmet",
      description:
        "Imágenes que resaltan la calidad y el sabor de los productos gourmet, creando una experiencia visual irresistible.",
      image: "/placeholder.svg?height=400&width=600",
      year: "2023",
      client: "Restaurante Sabores",
    },
  ],
};

export const statsData: Stat[] = [
  {
    value: "8+",
    label: "Años de Experiencia",
    context: "En el mundo de la fotografía profesional.",
  },
  {
    value: "500+",
    label: "Proyectos Completados",
    context: "Con clientes satisfechos en todo el mundo.",
  },
  {
    value: "15+",
    label: "Premios y Reconocimientos",
    context: "A la excelencia y la creatividad en la fotografía.",
  },
  {
    value: "100%",
    label: "Satisfacción Garantizada",
    context: "Nos comprometemos a superar tus expectativas.",
  },
];

export const testimonialsData = {
  title: "Lo Que Dicen Nuestros Clientes",
  description:
    "La satisfacción de nuestros clientes es nuestra mayor recompensa. Descubre lo que opinan sobre nuestro trabajo y profesionalismo.",
  testimonials: [
    {
      quote:
        "El equipo de Dvine Studios capturó la esencia de nuestro evento de una manera que nunca imaginamos. ¡Superaron nuestras expectativas!",
      name: "Laura Méndez",
      role: "Organizadora de Eventos",
      context: "Cobertura de Eventos",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
    },
    {
      quote:
        "Las fotografías de nuestros productos son simplemente espectaculares. Han elevado nuestra marca a otro nivel.",
      name: "Carlos Rodríguez",
      role: "Director de Marketing",
      context: "Fotografía de Producto",
      image: "/placeholder.svg?height=100&width=100",
      stars: 5,
    },
    {
      quote:
        "La sesión de retratos fue una experiencia increíble. Me sentí cómodo y relajado, y las fotos quedaron hermosas.",
      name: "Ana Jiménez",
      role: "Sesión de Retratos",
      context: "Retratos Personales",
      image: "/placeholder.svg?height=100&width=100",
      stars: 4,
    },
  ],
};

export const valuesData = {
  title: "Nuestros Valores",
  description:
    "Creemos en la fotografía como una forma de arte que trasciende lo visual, capturando emociones y creando recuerdos duraderos.",
  values: [
    {
      title: "Pasión",
      description:
        "Amamos lo que hacemos y nos entregamos por completo a cada proyecto, buscando la excelencia en cada detalle.",
      story:
        "Desde nuestros inicios, la pasión por la fotografía ha sido el motor que nos impulsa a crecer y superar nuestros propios límites.",
      icon: "heart",
    },
    {
      title: "Creatividad",
      description:
        "Exploramos nuevas técnicas y perspectivas para ofrecer resultados innovadores y originales, que sorprendan y emocionen.",
      story:
        "En cada sesión, buscamos nuevas formas de expresar nuestra creatividad, experimentando con luces, ángulos y composiciones.",
      icon: "lightbulb",
    },
    {
      title: "Compromiso",
      description:
        "Nos comprometemos a brindar un servicio de calidad excepcional, superando las expectativas de nuestros clientes y construyendo relaciones duraderas.",
      story:
        "La satisfacción de nuestros clientes es nuestra mayor prioridad. Nos esforzamos por entender sus necesidades y ofrecer soluciones personalizadas.",
      icon: "eye",
    },
  ],
};

// Equipo con detalles personales y portafolio
export const teamData = {
  title: "Las mentes creativas",
  description: "Conoce a las personas que dan vida a Dvine Studios.",
  members: [
    {
      name: "Enmanuel Hassan",
      role: "Fundador & Director Creativo",
      bio: "Comenzó a fotografiar a los 12 años con la cámara de su padre. Estudió en Nueva York y trabajó para National Geographic antes de regresar a República Dominicana para fundar Dvine Studios.",
      quote:
        "La fotografía es mi lenguaje. A través de ella puedo expresar lo que las palabras no alcanzan a describir.",
      funFact: "Colecciona cámaras vintage y tiene más de 50 en su oficina.",
      speciality: "Fotografía documental y retratos",
      equipment: "Canon EOS R5 + 50mm f/1.2",
      achievements: [
        "Premio Nacional de Fotografía 2019",
        "Exposición en el MoMA de Nueva York",
        "Portada de National Geographic 2018",
      ],
      portfolioImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      image: "/placeholder.svg?height=500&width=500",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "mailto:enmanuel@dvinestudios.com",
      },
    },
    {
      name: "Carolina Méndez",
      role: "Directora de Fotografía",
      bio: "Con formación en Bellas Artes y una maestría en Fotografía de Moda, Carolina aporta una visión artística única a cada proyecto que dirige.",
      quote:
        "La moda es arte en movimiento. Mi trabajo es capturar ese instante donde la prenda, el modelo y la luz se fusionan en perfecta armonía.",
      funFact:
        "Puede identificar el año y modelo de una cámara solo por el sonido del obturador.",
      speciality: "Fotografía de moda y editorial",
      equipment: "Sony Alpha 1 + 24-70mm f/2.8",
      achievements: [
        "Fotógrafa oficial de Dominican Fashion Week",
        "Publicaciones en Vogue Latinoamérica",
        "Premio Revelación 2020",
      ],
      portfolioImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      image: "/placeholder.svg?height=500&width=500",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "mailto:carolina@dvinestudios.com",
      },
    },
    {
      name: "Miguel Rodríguez",
      role: "Director de Videografía",
      bio: "Cineasta de formación, Miguel fusiona técnicas cinematográficas con fotografía para crear narrativas visuales impactantes.",
      quote:
        "El video es fotografía en movimiento. Cada frame debe contar una historia por sí mismo.",
      funFact:
        "Trabajó como asistente de dirección en dos películas dominicanas premiadas internacionalmente.",
      speciality: "Videografía y dirección creativa",
      equipment: "Blackmagic URSA Mini Pro + Lentes Vintage",
      achievements: [
        "Premio al Mejor Cortometraje en DREFF 2021",
        "Director de videoclips para artistas internacionales",
        "Documental seleccionado en Sundance",
      ],
      portfolioImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      image: "/placeholder.svg?height=500&width=500",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "mailto:miguel@dvinestudios.com",
      },
    },
    {
      name: "Laura Jiménez",
      role: "Fotógrafa Senior",
      bio: "Especializada en capturar momentos auténticos, Laura tiene un don para hacer que sus sujetos se sientan cómodos frente a la cámara.",
      quote:
        "Una boda es una historia de amor que se cuenta en un día. Mi trabajo es preservar cada capítulo de esa historia.",
      funFact: "Ha fotografiado más de 200 bodas en 15 países diferentes.",
      speciality: "Fotografía de bodas y eventos",
      equipment: "Nikon Z9 + 70-200mm f/2.8",
      achievements: [
        "Top 10 Wedding Photographers Caribbean",
        "Publicaciones en Martha Stewart Weddings",
        "Más de 50 portadas de revistas",
      ],
      portfolioImages: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      image: "/placeholder.svg?height=500&width=500",
      social: {
        instagram: "#",
        linkedin: "#",
        email: "mailto:laura@dvinestudios.com",
      },
    },
  ],
};
