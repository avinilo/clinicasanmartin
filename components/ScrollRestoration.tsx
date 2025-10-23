'use client'

import { useEffect } from 'react'

/**
 * ScrollRestoration Component
 * Fuerza el scroll a la posición superior (0,0) cuando se recarga la página
 * Soluciona el problema de posicionamiento incorrecto del hero section en reload
 */
export default function ScrollRestoration() {
  useEffect(() => {
    // Función para forzar scroll to top de manera robusta
    const forceScrollToTop = () => {
      // Usar múltiples métodos para asegurar compatibilidad
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      
      // Forzar el scroll después de que el DOM esté completamente cargado
      requestAnimationFrame(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      })
    }

    // Detectar si es un reload/refresh de la página usando múltiples métodos
    const navigationEntry = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    const isReload = navigationEntry?.type === 'reload' || 
                     (performance.navigation && performance.navigation.type === performance.navigation.TYPE_RELOAD)

    // Aplicar scroll to top inmediatamente si es reload
    if (isReload) {
      forceScrollToTop()
    }

    // Siempre aplicar scroll to top en el primer render para asegurar posición correcta
    forceScrollToTop()

    // También forzar scroll to top cuando la página esté completamente cargada
    const handleLoad = () => {
      forceScrollToTop()
    }

    // Escuchar el evento load para asegurar que el scroll se aplique
    window.addEventListener('load', handleLoad)

    // Escuchar cambios en el historial para manejar navegación
    const handlePopState = () => {
      // Solo aplicar si estamos en la página principal
      if (window.location.pathname === '/') {
        forceScrollToTop()
      }
    }

    window.addEventListener('popstate', handlePopState)

    // Cleanup
    return () => {
      window.removeEventListener('load', handleLoad)
      window.removeEventListener('popstate', handlePopState)
    }
  }, [])

  // Efecto adicional para manejar el scroll restoration del navegador
  useEffect(() => {
    // Deshabilitar el scroll restoration automático del navegador
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual'
    }

    return () => {
      // Restaurar el comportamiento por defecto al desmontar
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'auto'
      }
    }
  }, [])

  return null
}