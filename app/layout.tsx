import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SkipLinks from '@/components/SkipLinks'
import dynamic from 'next/dynamic'
import Script from 'next/script'
import { 
  organizationSchema, 
  websiteSchema, 
  localBusinessSchema, 
  faqSchema 
} from '@/lib/structured-data'
import { GA_TRACKING_ID } from '@/lib/gtag'
import PerformanceOptimizer, { CriticalResourcesPreloader } from '@/components/PerformanceOptimizer'
import { CookieBanner, ChatBot } from '@/components/ClientComponents'
import ScrollRestoration from '@/components/ScrollRestoration'

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
  preload: true
})

export const metadata: Metadata = {
  title: 'Mantexia - Soluciones Integrales para Obras y Fábricas',
  description: 'Mano de obra, gestora de mantenimientos y gestión documental para obras y fábricas en Valencia',
  keywords: 'mantexia, mano de obra, mantenimiento industrial, gestión documental, obras, fábricas, Valencia, Alcàsser',
  authors: [{ name: 'Mantexia' }],
  creator: 'Mantexia',
  publisher: 'Mantexia',
  applicationName: 'Mantexia',
  referrer: 'origin-when-cross-origin',

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://mantexia.com'),
  alternates: {
    canonical: '/',
  },
  verification: {
    ...(process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && {
      google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && {
      yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_YAHOO_VERIFICATION && {
      yahoo: process.env.NEXT_PUBLIC_YAHOO_VERIFICATION,
    }),
    ...(process.env.NEXT_PUBLIC_BING_VERIFICATION && {
      other: {
        'msvalidate.01': process.env.NEXT_PUBLIC_BING_VERIFICATION,
      },
    }),
  },
  category: 'business',
  classification: 'Servicios industriales',
  openGraph: {
    title: 'Mantexia - Soluciones Integrales para Obras y Fábricas',
    description: 'Mano de obra, gestora de mantenimientos y gestión documental para obras y fábricas en Valencia',
    url: 'https://mantexia.com',
    siteName: 'Mantexia',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Mantexia - Soluciones Integrales para Obras y Fábricas',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mantexia - Soluciones Integrales para Obras y Fábricas',
    description: 'Mano de obra, gestora de mantenimientos y gestión documental para obras y fábricas en Valencia',
    images: ['/og-image.png'],
    creator: '@mantexia',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#ED0B63',
      },
    ],
  },
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    title: 'Mantexia',
    statusBarStyle: 'default',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Preload crítico para Core Web Vitals - Solo recursos inmediatamente necesarios */}
        
        {/* DNS prefetch y preconnect para recursos externos optimizados */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" crossOrigin="anonymous" />
        
        {/* Preload de recursos críticos para Core Web Vitals */}
        <link rel="preload" href="/MANTEXIA__solo_nombre_-2-removebg-preview-e1749230794480.png" as="image" fetchPriority="high" />
        <link rel="preload" href="/og-image.png" as="image" fetchPriority="low" />
        
        {/* Resource hints adicionales para optimización */}
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link rel="dns-prefetch" href="//unpkg.com" />
        
        {/* Verificación de propietario de motores de búsqueda */}
        {process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION && (
          <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_BING_VERIFICATION && (
          <meta name="msvalidate.01" content={process.env.NEXT_PUBLIC_BING_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_YANDEX_VERIFICATION && (
          <meta name="yandex-verification" content={process.env.NEXT_PUBLIC_YANDEX_VERIFICATION} />
        )}
        {process.env.NEXT_PUBLIC_YAHOO_VERIFICATION && (
          <meta name="y_key" content={process.env.NEXT_PUBLIC_YAHOO_VERIFICATION} />
        )}
        
        {/* Meta tags específicos para redes sociales */}
        <meta property="fb:app_id" content={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''} />
        <meta name="twitter:site" content="@mantexia" />
        <meta name="twitter:creator" content="@mantexia" />
        
        {/* Meta tags para LinkedIn */}
        <meta property="og:site_name" content="Mantexia" />
        <meta property="article:publisher" content="https://www.linkedin.com/company/mantexia" />
        
        {/* Meta tags para WhatsApp */}
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        {/* Configuración de indexación granular */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="bingbot" content="index, follow" />
        
        {/* Geo-targeting para Valencia */}
        <meta name="geo.region" content="ES-V" />
        <meta name="geo.placename" content="Valencia, España" />
        <meta name="geo.position" content="39.4699;-0.3763" />
        <meta name="ICBM" content="39.4699, -0.3763" />
        <meta name="DC.title" content="Mantexia - Servicios Industriales Valencia" />
        
        {/* Meta tags adicionales para SEO */}
        <meta name="theme-color" content="#ED0B63" />
        <meta name="msapplication-TileColor" content="#ED0B63" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Mantexia" />
        
        {/* Viewport optimizado */}
         <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover" />
         
         {/* Structured Data JSON-LD para SEO */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(organizationSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(websiteSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(localBusinessSchema),
           }}
         />
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify(faqSchema),
           }}
         />
       </head>
       <body className={`${inter.variable} font-sans antialiased`}>
        {/* Google Analytics 4 Scripts */}
        {GA_TRACKING_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_TRACKING_ID}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        )}
        
        {/* Service Worker Registration */}
        <Script id="sw-registration" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js')
                  .then(function(registration) {
                    console.log('✅ Service Worker registrado correctamente:', registration.scope);
                  })
                  .catch(function(error) {
                    console.log('❌ Error al registrar Service Worker:', error);
                  });
              });
            }
          `}
        </Script>
        
        <PerformanceOptimizer>
          <CriticalResourcesPreloader />
          <SkipLinks />
          <ScrollRestoration />
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CookieBanner />
          <ChatBot />
        </PerformanceOptimizer>
      </body>
    </html>
  )
}
