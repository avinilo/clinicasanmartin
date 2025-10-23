'use client'

import { usePathname } from 'next/navigation'
import Head from 'next/head'
import { 
  generateStructuredDataScript, 
  generateCanonicalUrl,
  PRECONNECT_URLS,
  DNS_PREFETCH_URLS,
  SITE_CONFIG
} from '@/lib/seo-advanced'

interface SEOHeadProps {
  title?: string
  description?: string
  canonical?: string
  noindex?: boolean
  nofollow?: boolean
  structuredData?: any | any[]
  ogImage?: string
  children?: React.ReactNode
}

export default function SEOHead({
  title,
  description,
  canonical,
  noindex = false,
  nofollow = false,
  structuredData,
  ogImage,
  children
}: SEOHeadProps) {
  const pathname = usePathname()
  
  // Generar URLs automáticas
  const canonicalUrl = canonical || generateCanonicalUrl(pathname)
  const finalTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name
  const finalDescription = description || SITE_CONFIG.description
  const finalOgImage = ogImage || '/og-image.png'
  
  // Usar URL base desde variables de entorno o fallback
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || SITE_CONFIG.url

  // Configurar robots
  const robotsContent = [
    noindex ? 'noindex' : 'index',
    nofollow ? 'nofollow' : 'follow',
    'max-image-preview:large',
    'max-snippet:-1',
    'max-video-preview:-1'
  ].join(', ')

  return (
    <Head>
      {/* Meta tags básicos */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Hreflang para SEO internacional */}
      <link rel="alternate" hrefLang="es" href={canonicalUrl} />
      <link rel="alternate" hrefLang="es-ES" href={canonicalUrl} />
      <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content={SITE_CONFIG.name} />
      <meta property="og:locale" content={SITE_CONFIG.locale} />
      <meta property="og:image" content={`${baseUrl}${finalOgImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={finalTitle} />
      <meta property="og:image:type" content="image/png" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@mantexia" />
      <meta name="twitter:creator" content="@mantexia" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={`${baseUrl}${finalOgImage}`} />
      <meta name="twitter:image:alt" content={finalTitle} />
      
      {/* Verificación de propietario */}
      {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
      )}
      {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
        <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
      )}
      
      {/* Preconnect para performance */}
      {PRECONNECT_URLS.map(url => (
        <link key={url} rel="preconnect" href={url} />
      ))}
      
      {/* DNS Prefetch */}
      {DNS_PREFETCH_URLS.map(url => (
        <link key={url} rel="dns-prefetch" href={url} />
      ))}
      
      {/* Structured Data JSON-LD */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: generateStructuredDataScript(structuredData)
          }}
        />
      )}
      
      {/* Meta tags adicionales */}
      <meta name="author" content={SITE_CONFIG.author} />
      <meta name="publisher" content={SITE_CONFIG.author} />
      <meta name="theme-color" content="#ffffff" />
      <meta name="msapplication-TileColor" content="#2563eb" />
      
      {/* Geo tags para Valencia */}
      <meta name="geo.region" content="ES-V" />
      <meta name="geo.placename" content="Valencia" />
      <meta name="geo.position" content="39.4699;-0.3763" />
      <meta name="ICBM" content="39.4699, -0.3763" />
      
      {/* Contenido adicional personalizado */}
      {children}
    </Head>
  )
}

// Hook para usar SEOHead de forma más sencilla
export function useSEO() {
  const pathname = usePathname()
  
  return {
    pathname,
    generateCanonicalUrl: (path?: string) => generateCanonicalUrl(path || pathname),
    generateStructuredData: generateStructuredDataScript
  }
}