'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, ChevronDown, Phone, Calendar } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServiciosOpen, setIsServiciosOpen] = useState(false)
  const [isProfesionalesOpen, setIsProfesionalesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isBorderVisible, setIsBorderVisible] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detectar scroll para cambiar el estilo del header y dirección de scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      
      // Lógica para transparencia y borde
      setIsBorderVisible(scrollPosition > 80)
      setIsScrolled(scrollPosition > 100)
      
      // Lógica para mostrar/ocultar header basado en dirección de scroll
      if (isMenuOpen) {
        setIsHeaderVisible(true)
      } else if (scrollPosition > 100) {
        if (scrollPosition > lastScrollY && scrollPosition > 200) {
          // Scrolling hacia abajo - ocultar header
          setIsHeaderVisible(false)
        } else if (scrollPosition < lastScrollY) {
          // Scrolling hacia arriba - mostrar header
          setIsHeaderVisible(true)
        }
      } else {
        // Siempre mostrar header en la parte superior
        setIsHeaderVisible(true)
      }
      
      setLastScrollY(scrollPosition)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY, isMenuOpen])

  const serviciosItems = [
    { name: 'Especialidades y tratamientos', href: '/especialidades-tratamientos' },
    { name: 'Cuadro médico', href: '/cuadro-medico' },
    { name: 'Seguros y ofertas', href: '/seguros-ofertas' },
  ]

  const profesionalesItems = [
    { name: 'Trabaja con nosotros', href: '/para-profesionales/trabaja-con-nosotros' },
    { name: 'Publicidad en pantalla LED', href: '/para-profesionales/publicidad-pantalla-led' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
       isHeaderVisible ? 'top-0' : '-top-20'
     } ${
       isScrolled || isMenuOpen
         ? `bg-white shadow-lg ${isBorderVisible ? 'border-b border-gray-200' : ''}` 
         : 'bg-transparent'
     }`}>
      <nav className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center hover-scale" aria-label="Clínica San Martín - Ir a página de inicio">
            <Image
              src="/1099705-LOGO_CLINICA_TRANSPARENTE_PNG_1-d3d94-1920w.webp"
              alt="Clínica San Martín"
              width={150}
              height={50}
              className={`h-12 w-auto transition-smooth ${isScrolled || isMenuOpen ? '' : 'brightness-0 invert'}`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8" role="navigation" aria-label="Navegación principal">
            <Link
              href="/la-clinica"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-800' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              La clínica
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-blue-800' : 'bg-white'
              }`}></span>
            </Link>

            {/* Servicios Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsServiciosOpen(true)}
                onMouseLeave={() => setIsServiciosOpen(false)}
                className={`flex items-center gap-1 font-medium transition-smooth relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-800' 
                    : 'text-white hover:text-white/80'
                }`}
                aria-expanded={isServiciosOpen}
                aria-haspopup="true"
                aria-label="Menú de servicios"
              >
                Servicios
                <ChevronDown className={`w-4 h-4 transition-smooth ${isServiciosOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                  isScrolled ? 'bg-blue-800' : 'bg-white'
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-smooth ${
                  isServiciosOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsServiciosOpen(true)}
                onMouseLeave={() => setIsServiciosOpen(false)}
                role="menu"
                aria-label="Servicios disponibles"
              >
                <div className="py-2">
                  {serviciosItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-smooth hover-lift text-body-sm"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link
              href="/blog"
              className={`font-medium transition-smooth relative group ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-800' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              Blog
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                isScrolled ? 'bg-blue-800' : 'bg-white'
              }`}></span>
            </Link>

            {/* Para profesionales Dropdown */}
            <div className="relative group">
              <button
                onMouseEnter={() => setIsProfesionalesOpen(true)}
                onMouseLeave={() => setIsProfesionalesOpen(false)}
                className={`flex items-center gap-1 font-medium transition-smooth relative group ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-blue-800' 
                    : 'text-white hover:text-white/80'
                }`}
                aria-expanded={isProfesionalesOpen}
                aria-haspopup="true"
                aria-label="Menú para profesionales"
              >
                Para profesionales
                <ChevronDown className={`w-4 h-4 transition-smooth ${isProfesionalesOpen ? 'rotate-180' : ''}`} />
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 transition-smooth group-hover:w-full ${
                  isScrolled ? 'bg-blue-800' : 'bg-white'
                }`}></span>
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 transition-smooth ${
                  isProfesionalesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                }`}
                onMouseEnter={() => setIsProfesionalesOpen(true)}
                onMouseLeave={() => setIsProfesionalesOpen(false)}
                role="menu"
                aria-label="Opciones para profesionales"
              >
                <div className="py-2">
                  {profesionalesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-smooth hover-lift"
                      role="menuitem"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* CTA y utilidades */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Teléfono clicable */}
            <a 
              href="tel:963220581" 
              className={`flex items-center gap-2 font-medium transition-smooth ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-800' 
                  : 'text-white hover:text-white/80'
              }`}
            >
              <Phone className="w-5 h-5" />
              <span>963 220 581</span>
            </a>
            
            {/* Botón principal CTA */}
            <Link 
              href="/pide-cita" 
              className="bg-blue-800 hover:bg-blue-900 text-white text-button-sm py-2 px-6 rounded-lg transition-smooth hover-lift flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Pide cita
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-smooth hover-scale"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 transition-smooth ${isScrolled || isMenuOpen ? 'text-gray-700' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            id="mobile-menu"
            className="lg:hidden fixed top-20 left-0 w-full bg-white shadow-lg border-t border-gray-200 z-40 animate-slide-up max-h-[calc(100vh-5rem)] overflow-y-auto"
            role="navigation"
            aria-label="Menú de navegación móvil"
          >
            <div className="flex flex-col space-y-4 py-4">
              <Link
                href="/la-clinica"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-800 text-body-base font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-gray-50 hover-lift"
              >
                La clínica
              </Link>

              {/* Mobile Servicios - Desplegable */}
              <div className="px-4">
                <button
                  onClick={() => setIsServiciosOpen(!isServiciosOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800 text-body-base font-medium transition-smooth py-2 rounded-lg hover:bg-gray-50 hover-lift"
                  aria-expanded={isServiciosOpen}
                  aria-controls="mobile-servicios-menu"
                >
                  <span>Servicios</span>
                  <ChevronDown className={`w-4 h-4 transition-smooth ${isServiciosOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="mobile-servicios-menu"
                  className={`pl-4 space-y-2 transition-all duration-300 overflow-hidden ${
                    isServiciosOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {serviciosItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsServiciosOpen(false)
                      }}
                      className="block text-gray-600 hover:text-blue-800 transition-smooth py-1 hover-lift text-body-sm"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href="/blog"
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-blue-800 text-body-base font-medium transition-smooth px-4 py-2 rounded-lg hover:bg-gray-50 hover-lift"
              >
                Blog
              </Link>

              {/* Mobile Para profesionales - Desplegable */}
              <div className="px-4">
                <button
                  onClick={() => setIsProfesionalesOpen(!isProfesionalesOpen)}
                  className="flex items-center justify-between w-full text-gray-700 hover:text-blue-800 text-body-base font-medium transition-smooth py-2 rounded-lg hover:bg-gray-50 hover-lift"
                  aria-expanded={isProfesionalesOpen}
                  aria-controls="mobile-profesionales-menu"
                >
                  <span>Para profesionales</span>
                  <ChevronDown className={`w-4 h-4 transition-smooth ${isProfesionalesOpen ? 'rotate-180' : ''}`} />
                </button>
                <div 
                  id="mobile-profesionales-menu"
                  className={`pl-4 space-y-2 transition-all duration-300 overflow-hidden ${
                    isProfesionalesOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0'
                  }`}
                >
                  {profesionalesItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        setIsMenuOpen(false)
                        setIsProfesionalesOpen(false)
                      }}
                      className="block text-gray-600 hover:text-blue-800 transition-smooth py-1 hover-lift"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="px-4 pt-2 pb-4 space-y-3">
                {/* Teléfono en móvil */}
                <a 
                  href="tel:963220581" 
                  className="flex items-center justify-center gap-2 text-gray-700 hover:text-blue-800 text-button-sm py-2 px-4 rounded-lg hover:bg-gray-50 transition-smooth"
                >
                  <Phone className="w-5 h-5" />
                  <span>963 220 581</span>
                </a>
                
                {/* Botón CTA en móvil */}
                <Link 
                  href="/pide-cita" 
                  onClick={() => setIsMenuOpen(false)}
                  className="bg-blue-800 hover:bg-blue-900 text-white text-button-sm py-2 px-6 rounded-lg transition-smooth hover-lift flex items-center justify-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Pide cita
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}