// Configuración SEO para Mantexia
// Keywords principales y secundarias por página

export interface SEOConfig {
  title: string
  description: string
  keywords: string[]
  openGraph: {
    title: string
    description: string
    type: 'website' | 'article' | 'book' | 'profile'
    images: Array<{
      url: string
      width: number
      height: number
      alt: string
    }>
  }
  twitter: {
    card: 'summary' | 'summary_large_image' | 'player' | 'app'
    title: string
    description: string
    images: string[]
  }
}

// Keywords principales de Mantexia
export const MAIN_KEYWORDS = [
  'mantenimiento Valencia',
  'electricistas Valencia', 
  'gestión documental',
  'mano de obra especializada',
  'mantenimiento integral',
  'obras Valencia',
  'fábricas Valencia'
]

// Configuración SEO por página
export const SEO_PAGES: Record<string, SEOConfig> = {
  // Homepage
  home: {
    title: 'Mantexia - Mantenimiento Integral y Mano de Obra Especializada en Valencia',
    description: 'Soluciones integrales para obras y fábricas en Valencia. Mano de obra especializada, gestión documental y mantenimiento integral. Más de 15 técnicos especializados.',
    keywords: [
      'mantenimiento Valencia',
      'electricistas Valencia',
      'mano de obra especializada',
      'gestión documental empresas',
      'mantenimiento integral',
      'obras Valencia',
      'fábricas Valencia',
      'técnicos especializados Valencia',
      'subcontratación electricistas',
      'gestora mantenimientos'
    ],
    openGraph: {
      title: 'Mantexia - Soluciones Integrales para Obras y Fábricas en Valencia',
      description: 'Mano de obra especializada, gestión documental y mantenimiento integral para obras y fábricas en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mantexia - Soluciones integrales Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mantexia - Soluciones Integrales Valencia',
      description: 'Mano de obra especializada y mantenimiento integral para obras y fábricas.',
      images: ['/og-image.png']
    }
  },

  // Mano de Obra
  manoObra: {
    title: 'Mano de Obra Especializada Valencia - Electricistas y Técnicos | Mantexia',
    description: 'Servicio de mano de obra especializada en Valencia. +15 técnicos especializados para electricistas y obras. Subcontratación profesional para proyectos industriales.',
    keywords: [
      'electricistas Valencia',
      'mano de obra especializada',
      'técnicos especializados Valencia',
      'subcontratación electricistas',
      'personal técnico Valencia',
      'electricistas obras',
      'técnicos industriales',
      'mano de obra fábricas',
      'electricistas profesionales',
      'personal especializado obras'
    ],
    openGraph: {
      title: 'Mano de Obra Especializada Valencia - Electricistas y Técnicos',
      description: '+15 técnicos especializados para electricistas y obras en Valencia. Subcontratación profesional.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mano de obra especializada Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Mano de Obra Especializada Valencia',
      description: '+15 técnicos especializados para electricistas y obras.',
      images: ['/og-image.png']
    }
  },

  // Gestión Documental
  gestionDocumental: {
    title: 'Gestión Documental Empresas Valencia - Certificados Técnicos | Mantexia',
    description: 'Gestión documental especializada para empresas hasta 15 trabajadores. Certificados técnicos, PRL, seguros y homologaciones. Tu departamento administrativo externo.',
    keywords: [
      'gestión documental empresas',
      'certificados técnicos Valencia',
      'gestión documental construcción',
      'PRL documentación',
      'homologaciones proveedores',
      'seguros empresas Valencia',
      'departamento administrativo externo',
      'gestión documental fábricas',
      'certificados técnicos obras',
      'documentación empresarial'
    ],
    openGraph: {
      title: 'Gestión Documental Empresas Valencia - Certificados Técnicos',
      description: 'Tu departamento administrativo externo. Gestión documental para empresas hasta 15 trabajadores.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gestión documental empresas Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gestión Documental Empresas Valencia',
      description: 'Tu departamento administrativo externo para empresas hasta 15 trabajadores.',
      images: ['/og-image.png']
    }
  },

  // Gestora de Mantenimientos
  gestoraMantenimientos: {
    title: 'Gestora de Mantenimientos Valencia - Mantenimiento Integral 24/7 | Mantexia',
    description: 'Gestión integral de mantenimientos en Valencia. Mantenimiento preventivo, correctivo y de emergencia 24/7. Soluciones completas para obras y fábricas.',
    keywords: [
      'mantenimiento integral Valencia',
      'gestión mantenimiento',
      'mantenimiento preventivo',
      'mantenimiento correctivo',
      'mantenimiento emergencia 24/7',
      'gestora mantenimientos',
      'mantenimiento fábricas',
      'mantenimiento obras',
      'mantenimiento industrial Valencia',
      'servicios mantenimiento'
    ],
    openGraph: {
      title: 'Gestora de Mantenimientos Valencia - Mantenimiento Integral 24/7',
      description: 'Gestión integral de mantenimientos. Preventivo, correctivo y emergencia 24/7 en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Gestora mantenimientos Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Gestora de Mantenimientos Valencia',
      description: 'Mantenimiento integral 24/7. Preventivo, correctivo y emergencia.',
      images: ['/og-image.png']
    }
  },

  // Sobre Nosotros
  sobreNosotros: {
    title: 'Sobre Nosotros - Mantexia Valencia | Empresa de Mantenimiento y Mano de Obra',
    description: 'Conoce Mantexia, empresa líder en mantenimiento integral y mano de obra especializada en Valencia. Experiencia en obras emblemáticas como Nou Mestalla y Roig Arena.',
    keywords: [
      'empresa mantenimiento Valencia',
      'Mantexia Valencia',
      'mano de obra Valencia empresa',
      'mantenimiento integral empresa',
      'Nou Mestalla',
      'Roig Arena',
      'empresa obras Valencia',
      'servicios técnicos Valencia',
      'empresa especializada mantenimiento'
    ],
    openGraph: {
      title: 'Sobre Nosotros - Mantexia Valencia',
      description: 'Empresa líder en mantenimiento integral y mano de obra especializada en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 500,
        height: 126,
        alt: 'Mantexia empresa Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Sobre Nosotros - Mantexia Valencia',
      description: 'Empresa líder en mantenimiento integral y mano de obra especializada.',
      images: ['/og-image.png']
    }
  },

  // Casos de Éxito
  casosExito: {
    title: 'Casos de Éxito - Proyectos Mantexia Valencia | Nou Mestalla, Roig Arena',
    description: 'Descubre nuestros casos de éxito: Nou Mestalla, Roig Arena, hospitales privados y hoteles Costa Valenciana. Proyectos de mantenimiento y mano de obra especializada.',
    keywords: [
      'casos éxito Mantexia',
      'Nou Mestalla mantenimiento',
      'Roig Arena proyecto',
      'hospitales privados Valencia',
      'hoteles Costa Valenciana',
      'proyectos mantenimiento Valencia',
      'obras emblemáticas Valencia',
      'referencias Mantexia',
      'proyectos realizados'
    ],
    openGraph: {
      title: 'Casos de Éxito - Proyectos Mantexia Valencia',
      description: 'Nou Mestalla, Roig Arena, hospitales y hoteles. Nuestros proyectos de éxito en Valencia.',
      type: 'website',
      images: [{
        url: '/og-image.png',
        width: 500,
        height: 126,
        alt: 'Casos éxito Mantexia Valencia'
      }]
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Casos de Éxito Mantexia Valencia',
      description: 'Nou Mestalla, Roig Arena y más proyectos de éxito.',
      images: ['/og-image.png']
    }
  }
}

// Función para obtener configuración SEO de una página
export function getSEOConfig(page: keyof typeof SEO_PAGES): SEOConfig {
  return SEO_PAGES[page] || SEO_PAGES.home
}

// Keywords long-tail específicas por servicio
export const LONG_TAIL_KEYWORDS = {
  manoObra: [
    'electricistas especializados obras Valencia',
    'técnicos electricistas subcontratación',
    'personal técnico especializado fábricas',
    'mano de obra electricistas profesionales',
    'técnicos especializados instalaciones eléctricas'
  ],
  gestionDocumental: [
    'gestión documental pequeñas empresas Valencia',
    'certificados técnicos construcción Valencia',
    'departamento administrativo externo empresas',
    'gestión PRL documentación empresas',
    'homologaciones proveedores Valencia'
  ],
  gestoraMantenimientos: [
    'mantenimiento preventivo fábricas Valencia',
    'gestión mantenimiento integral obras',
    'mantenimiento correctivo emergencia 24h',
    'servicios mantenimiento industrial Valencia',
    'gestora mantenimientos empresas Valencia'
  ]
}

// Meta robots por página
export const ROBOTS_CONFIG = {
  default: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
  noindex: 'noindex, nofollow',
  archive: 'index, follow, noarchive'
}