import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, Clock, Calendar } from 'lucide-react'

export default function Footer() {
  return (
    <footer 
      id="footer"
      className="bg-gray-900 text-white relative overflow-hidden"
      role="contentinfo"
      aria-label="Información de contacto y enlaces del sitio"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-blue-800/20"></div>
      
      <div className="container-custom py-12 relative z-10">
        {/* Franja principal - 4 columnas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Columna 1 - Marca y contacto rápido */}
          <div className="space-y-4">
            <Image
              src="/1099705-LOGO_CLINICA_TRANSPARENTE_PNG_1-d3d94-1920w.webp"
              alt="Clínica San Martín"
              width={120}
              height={40}
              className="h-10 w-auto mb-4"
              loading="lazy"
            />
            
            <div className="space-y-3 text-sm text-gray-300">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-blue-300 mt-1 flex-shrink-0" />
                <div>
                  <p>Calle General San Martín, 7 Bajo Entresuelo</p>
                  <p>46004 Valencia</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="tel:963220581" className="hover:text-blue-300 transition-colors">
                  963 220 581
                </a>
              </div>
              
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <a href="mailto:recepcion@policlinicasanmartin.es" className="hover:text-blue-300 transition-colors">
                  recepcion@policlinicasanmartin.es
                </a>
              </div>
              
              <div className="pt-2">
                <a 
                  href="https://maps.google.com/?q=Calle+General+San+Martín+7+Valencia" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-1 text-blue-300 hover:text-blue-200 transition-colors text-sm font-medium"
                >
                  <MapPin className="w-4 h-4" />
                  <span>Cómo llegar</span>
                </a>
              </div>
            </div>
          </div>

          {/* Columna 2 - Navegación útil */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-300">Clínica</h3>
            <nav aria-label="Enlaces de navegación">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/la-clinica" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    La clínica
                  </Link>
                </li>
                <li>
                  <Link href="/especialidades-tratamientos" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Servicios
                  </Link>
                </li>
                <li>
                  <Link href="/cuadro-medico" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Cuadro médico
                  </Link>
                </li>
                <li>
                  <Link href="/seguros-ofertas" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Seguros y ofertas
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Columna 3 - Para profesionales y empresas */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-300">Profesionales</h3>
            <nav aria-label="Enlaces para profesionales">
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/para-profesionales/trabaja-con-nosotros" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Trabaja con nosotros
                  </Link>
                </li>
                <li>
                  <Link href="/para-profesionales/publicidad-pantalla-led" className="text-gray-300 hover:text-blue-300 transition-colors flex items-center group">
                    <span className="w-1 h-1 bg-blue-300 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Publicidad en pantalla LED
                  </Link>
                </li>
              </ul>
            </nav>
            <p className="text-xs text-gray-400 leading-relaxed">
              Espacio para médicos especialistas y empresas que quieran colaborar con nosotros.
            </p>
          </div>

          {/* Columna 4 - CTA y horarios */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-300">Pide cita</h3>
            
            <Link 
              href="/pide-cita" 
              className="inline-flex items-center justify-center space-x-2 bg-blue-800 hover:bg-blue-900 text-white px-6 py-3 rounded-lg transition-colors font-medium text-sm w-full"
            >
              <Calendar className="w-4 h-4" />
              <span>Pedir cita</span>
            </Link>
            
            <div className="space-y-2 text-sm text-gray-300">
              <div className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="font-medium">Horario de atención</p>
                  <p>L-V: 09:00-20:00</p>
                </div>
              </div>
              <p className="text-xs text-gray-400 leading-relaxed">
                También puedes pedir cita por teléfono o email.
              </p>
            </div>
          </div>
        </div>

        {/* Franja legal */}
        <div className="border-t border-gray-700 pt-8 pb-4">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 text-sm text-gray-400">
            <Link href="/aviso-legal" className="hover:text-blue-300 transition-colors">
              Aviso legal
            </Link>
            <span className="hidden md:inline">·</span>
            <Link href="/politica-privacidad" className="hover:text-blue-300 transition-colors">
              Política de privacidad
            </Link>
            <span className="hidden md:inline">·</span>
            <Link href="/politica-cookies" className="hover:text-blue-300 transition-colors">
              Política de cookies
            </Link>
            <span className="hidden md:inline">·</span>
            <Link href="/declaracion-accesibilidad" className="hover:text-blue-300 transition-colors">
              Declaración de accesibilidad
            </Link>
          </div>
        </div>

        {/* Mini-barra final - Copyright */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-xs text-gray-500">
            © Clínica San Martín, 2025. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}