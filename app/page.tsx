import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Wrench, FileText, CheckCircle, Clock, Shield, Phone, Car, Wind, GraduationCap, Sparkles, Building, Dumbbell, Trophy, Target, Stethoscope, User, ShieldCheck, Calendar, Heart, Activity, Brain, Apple, Zap, Eye, Baby, Bone, CreditCard, Tag, Star, MapPin } from 'lucide-react'
import ContactForm from '@/components/ContactForm'
import SpecialtiesScrollIndicator from '@/components/SpecialtiesScrollIndicator'
import { Metadata } from 'next'
import { getSEOConfig } from '@/lib/seo-config'

const seoConfig = getSEOConfig('home')

export const metadata: Metadata = {
  title: seoConfig.title,
  description: seoConfig.description,
  keywords: seoConfig.keywords.join(', '),
  openGraph: {
    title: seoConfig.openGraph.title,
    description: seoConfig.openGraph.description,
    type: seoConfig.openGraph.type as any,
    locale: 'es_ES',
    images: seoConfig.openGraph.images,
  },
  twitter: {
    card: seoConfig.twitter.card as any,
    title: seoConfig.twitter.title,
    description: seoConfig.twitter.description,
    images: seoConfig.twitter.images,
  },
  robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
}

export default function Home() {

  return (
    <>
      {/* Hero Section */}
      <section 
        className="hero-smartclean overflow-hidden relative -mt-20 pt-20"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800/80 to-blue-700/60"></div>
        <div className="absolute inset-0 opacity-30">
            <Image
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1920&h=1080&fit=crop&auto=format"
              alt="Clínica San Martín - Centro médico privado en Valencia"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        
        <div className="container-custom relative z-10 w-full py-24 md:py-32 lg:py-40">
          <div className="max-w-4xl mx-auto text-center">
            {/* Etiqueta superior */}
            <div className="inline-block px-4 py-2 bg-blue-800/20 backdrop-blur-sm rounded-full mb-6 animate-fade-in">
              <span className="text-blue-100 text-body-sm font-medium">
                Policlínica privada · Centro de Valencia
              </span>
            </div>
            
            {/* H1 */}
            <h1 className="text-heading-hero mb-4 animate-bounce-in text-white">
              Tu clínica de confianza para toda la familia
            </h1>
            
            {/* Subtítulo */}
            <p className="text-body-lg mb-6 text-white/90 animate-fade-in animate-delay-300 max-w-2xl mx-auto">
              Especialidades médicas, tratamientos estéticos y medicina integrativa en un mismo centro.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animate-delay-500">
              <Link href="/pide-cita" className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-button-lg transition-all hover-lift hover-glow">
                Pide cita
              </Link>
              <Link href="/especialidades-tratamientos" className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-button-lg transition-all hover-lift">
                Ver especialidades
              </Link>
            </div>
            
            {/* Nota con teléfono */}
            <p className="text-white/70 text-body-sm animate-fade-in animate-delay-600 mt-6">
              ¿Prefieres llamar? Pide cita en el <a href="tel:963220581" className="text-blue-200 hover:text-blue-100 underline">963 220 581</a>
            </p>
          </div>
        </div>
      </section>

      {/* Servicios Principales / Atajos Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg mb-4 text-gray-800">
              Todo lo que necesitas en un solo centro
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Tarjeta 1 - Especialidades médicas */}
            <Link 
              href="/especialidades-tratamientos" 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover-lift cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Stethoscope className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-heading-sm mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                Especialidades médicas
              </h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Medicina de familia y las principales especialidades médicas para el cuidado de tu salud.
              </p>
              <div className="text-blue-800 font-semibold text-body-sm group-hover:text-blue-900 transition-colors">
                Ver especialidades →
              </div>
            </Link>

            {/* Tarjeta 2 - Cuadro médico */}
            <Link 
              href="/cuadro-medico" 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover-lift cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <User className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-heading-sm mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                Cuadro médico
              </h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Un equipo de profesionales con amplia experiencia y trato cercano.
              </p>
              <div className="text-blue-800 font-semibold text-body-sm group-hover:text-blue-900 transition-colors">
                Conocer al equipo →
              </div>
            </Link>

            {/* Tarjeta 3 - Seguros y ofertas */}
            <Link 
              href="/seguros-ofertas" 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover-lift cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <ShieldCheck className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-heading-sm mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                Seguros y ofertas
              </h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Trabajamos con la mayoría de aseguradoras y contamos con ofertas en salud y estética.
              </p>
              <div className="text-blue-800 font-semibold text-body-sm group-hover:text-blue-900 transition-colors">
                Seguros y promociones →
              </div>
            </Link>

            {/* Tarjeta 4 - Pedir cita */}
            <Link 
              href="/pide-cita" 
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group hover-lift cursor-pointer border border-gray-100"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <Calendar className="w-8 h-8 text-blue-800" />
              </div>
              <h3 className="text-heading-sm mb-3 text-gray-800 group-hover:text-blue-800 transition-colors">
                Pedir cita
              </h3>
              <p className="text-body-sm text-gray-600 mb-4">
                Elige especialidad, indica tu seguro y te llamamos para confirmar tu cita.
              </p>
              <div className="text-blue-800 font-semibold text-body-sm group-hover:text-blue-900 transition-colors">
                Pide cita online →
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Clinic/Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-heading-xl mb-4 text-gray-800">
                Cuidamos de ti, de tu salud y de tu economía
              </h2>
              <p className="text-body-lg text-blue-800 font-semibold mb-6">
                Policlínica privada en el centro de Valencia
              </p>
              <p className="text-body-lg text-gray-700 mb-8">
                En Clínica San Martín acompañamos a nuestros pacientes a lo largo de toda su vida, ofreciendo servicios médicos de calidad con un trato cercano y personalizado. Trabajamos con la mayoría de compañías aseguradoras para que puedas acceder a nuestros servicios con las mejores condiciones.
              </p>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Stethoscope className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800 text-body-base">Todas las especialidades médicas principales</h3>
                    <p className="text-body-sm text-gray-600">Medicina de familia, pediatría, ginecología, cardiología, dermatología y más especialidades en un mismo centro.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800 text-body-base">Servicios médicos y de salud integral</h3>
                    <p className="text-body-sm text-gray-600">Desde consultas médicas hasta pruebas diagnósticas, tratamientos estéticos y medicina preventiva.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-blue-800" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-gray-800 text-body-base">Ofertas y promociones en salud y estética</h3>
                    <p className="text-body-sm text-gray-600">Descuentos especiales y promociones mensuales en servicios médicos y tratamientos estéticos.</p>
                  </div>
                </div>
              </div>

              <Link 
                href="/la-clinica" 
                className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-button-lg transition-all hover-lift inline-flex items-center gap-2"
              >
                Conoce la clínica
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
            
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=1200&h=800&fit=crop&auto=format"
                alt="Recepción y sala de espera de Clínica San Martín"
                fill
                className="object-cover"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-800/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Specialties Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg mb-4 text-gray-800">
              Especialidades médicas y tratamientos más demandados
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              Contamos con un amplio cuadro médico y servicios de salud, fisioterapia, podología, psicología, medicina estética y medicina integrativa en un mismo centro.
            </p>
          </div>
          
          {/* Mobile horizontal scroll - Only visible on small screens */}
          <div className="md:hidden mb-8">
            <div className="relative">
              {/* Gradient fade indicator on the right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrollable container */}
              <div 
                id="specialties-scroll" 
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" 
                style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
              >
                {[
                  {
                    id: 'medicina-familia',
                    title: 'Medicina de familia',
                    subtitle: 'Atención primaria integral',
                    description: 'Tu primer punto de contacto para revisar tu salud y derivarte, si es necesario, a otros especialistas.',
                    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop&auto=format',
                    icon: Stethoscope,
                    color: 'blue'
                  },
                  {
                    id: 'cardiologia',
                    title: 'Cardiología y aparato digestivo',
                    subtitle: 'Especialidades del corazón y digestivo',
                    description: 'Diagnóstico y seguimiento de problemas del corazón y del sistema digestivo.',
                    image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
                    icon: Heart,
                    color: 'blue'
                  },
                  {
                    id: 'fisioterapia',
                    title: 'Fisioterapia y rehabilitación',
                    subtitle: 'Recuperación y movilidad',
                    description: 'Tratamientos para dolor muscular, lesiones deportivas y recuperación funcional.',
                    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format',
                    icon: Activity,
                    color: 'blue'
                  },
                  {
                    id: 'podologia',
                    title: 'Podología',
                    subtitle: 'Cuidado integral del pie',
                    description: 'Cuidado integral del pie, estudio de la pisada y plantillas personalizadas.',
                    image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format',
                    icon: Bone,
                    color: 'blue'
                  },
                  {
                    id: 'psicologia',
                    title: 'Psicología y psiquiatría',
                    subtitle: 'Salud mental integral',
                    description: 'Apoyo en salud mental para adultos e infantil, con diferentes enfoques terapéuticos.',
                    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&auto=format',
                    icon: Brain,
                    color: 'blue'
                  },
                  {
                    id: 'medicina-estetica',
                    title: 'Medicina estética',
                    subtitle: 'Tratamientos estéticos médicos',
                    description: 'Tratamientos faciales y corporales para mejorar tu aspecto con resultados naturales.',
                    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&auto=format',
                    icon: Eye,
                    color: 'blue'
                  },
                  {
                    id: 'medicina-integrativa',
                    title: 'Medicina integrativa y tratamiento del dolor',
                    subtitle: 'Enfoque global de la salud',
                    description: 'Enfoque global de la salud para patologías crónicas, fibromialgia y dolor persistente.',
                    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format',
                    icon: Zap,
                    color: 'blue'
                  },
                  {
                    id: 'nutricion',
                    title: 'Nutrición',
                    subtitle: 'Planes nutricionales personalizados',
                    description: 'Planes nutricionales personalizados para mejorar tu salud y tu bienestar.',
                    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&auto=format',
                    icon: Apple,
                    color: 'blue'
                  }
                ].map((specialty, index) => (
                  <div key={specialty.id} className="flex-shrink-0 w-72" style={{scrollSnapAlign: 'start'}} data-index={index}>
                    <Link 
                      href={`/especialidades-tratamientos#${specialty.id}`}
                      className="group block cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full overflow-hidden"
                    >
                      {/* Full-width image with no top margin */}
                      <div className="relative h-48 overflow-hidden">
                        <Image
                          src={specialty.image}
                          alt={`${specialty.title} - Clínica San Martín`}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                          sizes="288px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
                        <div className="absolute bottom-3 left-3 right-3">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                              <specialty.icon className="w-4 h-4 text-blue-800" />
                            </div>
                            <div className="flex-1">
                              <h3 className="text-white font-bold text-base drop-shadow-lg">
                                {specialty.title}
                              </h3>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Content section */}
                      <div className="p-4">
                        <p className="text-body-sm text-blue-800 font-semibold mb-1">{specialty.subtitle}</p>
                        <p className="text-gray-600 mb-3 text-body-sm leading-relaxed line-clamp-2">{specialty.description}</p>
                        
                        <div className="inline-flex items-center gap-1 text-blue-800 font-semibold text-caption group-hover:gap-2 transition-all group-hover:text-blue-900">
                          Ver más <ArrowRight className="w-3 h-3" />
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
                {/* Empty space for better scrolling indication */}
                <div className="flex-shrink-0 w-4"></div>
              </div>
              
              {/* Scroll indicators */}
              <SpecialtiesScrollIndicator totalItems={8} />
            </div>
          </div>

          {/* Desktop grid - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                id: 'medicina-familia',
                title: 'Medicina de familia',
                subtitle: 'Atención primaria integral',
                description: 'Tu primer punto de contacto para revisar tu salud y derivarte, si es necesario, a otros especialistas.',
                image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=600&fit=crop&auto=format',
                icon: Stethoscope,
                color: 'blue'
              },
              {
                id: 'cardiologia',
                title: 'Cardiología y aparato digestivo',
                subtitle: 'Especialidades del corazón y digestivo',
                description: 'Diagnóstico y seguimiento de problemas del corazón y del sistema digestivo.',
                image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format',
                icon: Heart,
                color: 'blue'
              },
              {
                id: 'fisioterapia',
                title: 'Fisioterapia y rehabilitación',
                subtitle: 'Recuperación y movilidad',
                description: 'Tratamientos para dolor muscular, lesiones deportivas y recuperación funcional.',
                image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop&auto=format',
                icon: Activity,
                color: 'blue'
              },
              {
                id: 'podologia',
                title: 'Podología',
                subtitle: 'Cuidado integral del pie',
                description: 'Cuidado integral del pie, estudio de la pisada y plantillas personalizadas.',
                image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format',
                icon: Bone,
                color: 'blue'
              },
              {
                id: 'psicologia',
                title: 'Psicología y psiquiatría',
                subtitle: 'Salud mental integral',
                description: 'Apoyo en salud mental para adultos e infantil, con diferentes enfoques terapéuticos.',
                image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=600&fit=crop&auto=format',
                icon: Brain,
                color: 'blue'
              },
              {
                id: 'medicina-estetica',
                title: 'Medicina estética',
                subtitle: 'Tratamientos estéticos médicos',
                description: 'Tratamientos faciales y corporales para mejorar tu aspecto con resultados naturales.',
                image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop&auto=format',
                icon: Eye,
                color: 'blue'
              },
              {
                id: 'medicina-integrativa',
                title: 'Medicina integrativa y tratamiento del dolor',
                subtitle: 'Enfoque global de la salud',
                description: 'Enfoque global de la salud para patologías crónicas, fibromialgia y dolor persistente.',
                image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop&auto=format',
                icon: Zap,
                color: 'blue'
              },
              {
                id: 'nutricion',
                title: 'Nutrición',
                subtitle: 'Planes nutricionales personalizados',
                description: 'Planes nutricionales personalizados para mejorar tu salud y tu bienestar.',
                image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop&auto=format',
                icon: Apple,
                color: 'blue'
              }
            ].map((specialty, index) => (
              <Link 
                key={specialty.id}
                href={`/especialidades-tratamientos#${specialty.id}`}
                className="card-service group animate-scale-in hover-lift block cursor-pointer bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 rounded-t-xl overflow-hidden">
                  <Image
                    src={specialty.image}
                    alt={`${specialty.title} - Clínica San Martín`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <div className={`w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center`}>
                      <specialty.icon className={`w-6 h-6 text-blue-800`} />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-heading-sm mb-2 text-gray-800 group-hover:text-blue-800 transition-colors">
                    {specialty.title}
                  </h3>
                  <p className="text-body-sm text-blue-800 font-semibold mb-3">{specialty.subtitle}</p>
                  <p className="text-body-sm text-gray-600 mb-4">{specialty.description}</p>
                  
                  <div className="inline-flex items-center gap-2 text-blue-800 font-semibold group-hover:gap-3 transition-all group-hover:text-blue-900">
                    Más información <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA final */}
          <div className="text-center">
            <p className="text-body-base text-gray-600 mb-4">¿No ves la especialidad que buscas?</p>
            <Link 
              href="/especialidades-tratamientos" 
              className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-4 rounded-lg text-button-lg transition-all hover-lift inline-flex items-center gap-2"
            >
              Ver todas las especialidades
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-heading-lg mb-4 text-gray-800">
                Trabajamos con 19 compañías aseguradoras
              </h2>
              <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
                En Clínica San Martín puedes usar tu seguro de salud con la mayoría de compañías aseguradoras. Consulta qué coberturas tienes en cada especialidad y resuelve tus dudas con nuestro equipo de recepción.
              </p>
            </div>
            
            {/* Mobile horizontal scroll - Only visible on small screens */}
            <div className="md:hidden mb-8">
              <div className="relative">
                {/* Gradient fade indicator on the right */}
                <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
                
                {/* Scrollable container */}
                <div 
                  id="insurance-scroll" 
                  className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide" 
                  style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
                >
                  {/* Grupo 1 - Primeras 6 aseguradoras */}
                  <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={0}>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Adeslas', logo: '/imagenes seguros/adeslas-350x183.webp' },
                        { name: 'Sanitas', logo: '/imagenes seguros/sanitas.webp' },
                        { name: 'DKV', logo: '/imagenes seguros/dkv.webp' },
                        { name: 'Mapfre', logo: '/imagenes seguros/mapfre.webp' },
                        { name: 'Caser', logo: '/imagenes seguros/caserseguros.webp' },
                        { name: 'Asisa', logo: '/imagenes seguros/aisa.webp' }
                      ].map((insurance, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:scale-105 group cursor-pointer">
                          <div className="w-24 h-16 flex items-center justify-center">
                            <img 
                              src={insurance.logo} 
                              alt={`${insurance.name} - Seguro médico`}
                              className="max-w-full max-h-full object-contain transition-all duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Grupo 2 - Siguientes 6 aseguradoras */}
                  <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={1}>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Aegon', logo: '/imagenes seguros/aegon.webp' },
                        { name: 'Agrupación Mutua', logo: '/imagenes seguros/agrupacionmutua.webp' },
                        { name: 'Amefe', logo: '/imagenes seguros/amefe.webp' },
                        { name: 'Antares', logo: '/imagenes seguros/antares.webp' },
                        { name: 'Asefaseguros', logo: '/imagenes seguros/asefaseguros.webp' },
                        { name: 'Avantsalud', logo: '/imagenes seguros/avantsalud.webp' }
                      ].map((insurance, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:scale-105 group cursor-pointer">
                          <div className="w-24 h-16 flex items-center justify-center">
                            <img 
                              src={insurance.logo} 
                              alt={`${insurance.name} - Seguro médico`}
                              className="max-w-full max-h-full object-contain transition-all duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Grupo 3 - Últimas 7 aseguradoras */}
                  <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={2}>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { name: 'Cosalud', logo: '/imagenes seguros/cosaludseguros.webp' },
                        { name: 'Divina Pastora', logo: '/imagenes seguros/divinapastoraseguros.webp' },
                        { name: 'Fiatc', logo: '/imagenes seguros/fiatc.webp' },
                        { name: 'HNA', logo: '/imagenes seguros/hna.webp' },
                        { name: 'Néctar', logo: '/imagenes seguros/nectar.webp' },
                        { name: 'Seguros Atocha', logo: '/imagenes seguros/segurosatocha.webp' }
                      ].map((insurance, index) => (
                        <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:scale-105 group cursor-pointer">
                          <div className="w-24 h-16 flex items-center justify-center">
                            <img 
                              src={insurance.logo} 
                              alt={`${insurance.name} - Seguro médico`}
                              className="max-w-full max-h-full object-contain transition-all duration-300"
                              loading="lazy"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Empty space for better scrolling indication */}
                  <div className="flex-shrink-0 w-4"></div>
                </div>
                
                {/* Scroll indicators */}
                <SpecialtiesScrollIndicator totalItems={3} scrollId="insurance-scroll" />
              </div>
            </div>
            
            {/* Desktop grid - Hidden on mobile */}
            <div className="hidden md:block mb-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
              {[
                { name: 'Adeslas', logo: '/imagenes seguros/adeslas-350x183.webp' },
                { name: 'Sanitas', logo: '/imagenes seguros/sanitas.webp' },
                { name: 'DKV', logo: '/imagenes seguros/dkv.webp' },
                { name: 'Mapfre', logo: '/imagenes seguros/mapfre.webp' },
                { name: 'Caser', logo: '/imagenes seguros/caserseguros.webp' },
                { name: 'Asisa', logo: '/imagenes seguros/aisa.webp' },
                { name: 'Aegon', logo: '/imagenes seguros/aegon.webp' },
                { name: 'Agrupación Mutua', logo: '/imagenes seguros/agrupacionmutua.webp' },
                { name: 'Amefe', logo: '/imagenes seguros/amefe.webp' },
                { name: 'Antares', logo: '/imagenes seguros/antares.webp' },
                { name: 'Asefaseguros', logo: '/imagenes seguros/asefaseguros.webp' },
                { name: 'Avantsalud', logo: '/imagenes seguros/avantsalud.webp' },
                { name: 'Cosalud', logo: '/imagenes seguros/cosaludseguros.webp' },
                { name: 'Divina Pastora', logo: '/imagenes seguros/divinapastoraseguros.webp' },
                { name: 'Fiatc', logo: '/imagenes seguros/fiatc.webp' },
                { name: 'HNA', logo: '/imagenes seguros/hna.webp' },
                { name: 'Néctar', logo: '/imagenes seguros/nectar.webp' },
                { name: 'Seguros Atocha', logo: '/imagenes seguros/segurosatocha.webp' }
              ].map((insurance, index) => (
                <div key={index} className="bg-white rounded-xl p-6 flex items-center justify-center hover:bg-gray-50 transition-all duration-300 border border-gray-200 hover:shadow-lg hover:scale-105 group cursor-pointer">
                  <div className="w-24 h-16 flex items-center justify-center">
                    <img 
                      src={insurance.logo} 
                      alt={`${insurance.name} - Seguro médico`}
                      className="max-w-full max-h-full object-contain transition-all duration-300"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
            
            <div className="text-center">
              <Link 
                href="/seguros-ofertas" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-button-lg transition-all hover-lift inline-flex items-center gap-2"
              >
                Ver todas las aseguradoras y coberturas
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>



      {/* Patient Experience Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-heading-md text-gray-900 mb-3">
              Lo que dicen nuestros pacientes
            </h2>
            <p className="text-body-lg text-gray-600">
              Tu salud es nuestra prioridad
            </p>
          </div>
          
          {/* Mobile horizontal scroll - Only visible on small screens */}
          <div className="md:hidden mb-8">
            <div className="relative">
              {/* Gradient fade indicator on the right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrollable container */}
              <div 
                id="testimonials-scroll" 
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" 
                style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
              >
                {/* Testimonio 1 */}
                <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={0}>
                  <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-gray-700 mb-2 text-body-sm">
                          &ldquo;Muy buena atención desde recepción hasta el especialista. Me explicaron todo con claridad y me ayudaron con mi seguro.&rdquo;
                        </blockquote>
                        <cite className="text-caption font-semibold text-blue-600">
                          María G. · Medicina familiar
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
            
                {/* Testimonio 2 */}
                <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={1}>
                  <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-gray-700 mb-2 text-body-sm">
                          &ldquo;Fui por un problema de espalda y la fisioterapeuta me propuso un tratamiento y ejercicios. Noté mejora desde las primeras sesiones.&rdquo;
                        </blockquote>
                        <cite className="text-caption font-semibold text-blue-600">
                          Javier R. · Fisioterapia
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
            
                {/* Testimonio 3 */}
                <div className="flex-shrink-0 w-80" style={{scrollSnapAlign: 'start'}} data-index={2}>
                  <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <User className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1">
                        <blockquote className="text-gray-700 mb-2 text-body-sm">
                          &ldquo;Me gustó poder hacerme las revisiones en el mismo centro, sin tener que ir a distintos sitios. Trato cercano y profesional.&rdquo;
                        </blockquote>
                        <cite className="text-caption font-semibold text-blue-600">
                          Ana S. · Ginecología
                        </cite>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Empty space for better scrolling indication */}
                <div className="flex-shrink-0 w-4"></div>
              </div>
              
              {/* Scroll indicators */}
              <SpecialtiesScrollIndicator totalItems={3} scrollId="testimonials-scroll" />
            </div>
          </div>
          
          {/* Desktop version - Hidden on mobile */}
          <div className="hidden md:block mb-8">
            <div className="space-y-6">
              {/* Testimonio 1 */}
              <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 mb-2 text-body-sm">
                      &ldquo;Muy buena atención desde recepción hasta el especialista. Me explicaron todo con claridad y me ayudaron con mi seguro.&rdquo;
                    </blockquote>
                    <cite className="text-caption font-semibold text-blue-600">
                      María G. · Medicina familiar
                    </cite>
                  </div>
                </div>
              </div>
              
              {/* Testimonio 2 */}
              <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 mb-2 text-body-sm">
                      &ldquo;Fui por un problema de espalda y la fisioterapeuta me propuso un tratamiento y ejercicios. Noté mejora desde las primeras sesiones.&rdquo;
                    </blockquote>
                    <cite className="text-caption font-semibold text-blue-600">
                      Javier R. · Fisioterapia
                    </cite>
                  </div>
                </div>
              </div>
              
              {/* Testimonio 3 */}
              <div className="bg-white rounded-lg p-6 border border-blue-100 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <blockquote className="text-gray-700 mb-2 text-body-sm">
                      &ldquo;Me gustó poder hacerme las revisiones en el mismo centro, sin tener que ir a distintos sitios. Trato cercano y profesional.&rdquo;
                    </blockquote>
                    <cite className="text-caption font-semibold text-blue-600">
                      Ana S. · Ginecología
                    </cite>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Google Reviews Section */}
          <div className="bg-white rounded-lg p-6 text-center border border-blue-100 shadow-sm max-w-sm mx-auto">
            <div className="flex justify-center mb-2">
              <div className="flex items-center">
                <div className="flex text-yellow-400 mr-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-blue-600 font-semibold text-body-base">4.6/5</span>
              </div>
            </div>
            <p className="text-body-sm text-gray-600 mb-1">Valoración en Google</p>
            <p className="text-caption text-gray-500 mb-3">Más de 500 opiniones</p>
            <a 
              href="https://g.page/r/CYdLl3YJvYUBEAE/review" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-semibold text-caption inline-flex items-center gap-1"
            >
              Ver en Google
              <ArrowRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      {/* Blog/Actualidad Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-heading-lg mb-4 text-gray-800">
              Consejos de salud y actualidad de la clínica
            </h2>
            <p className="text-body-lg text-gray-600 max-w-3xl mx-auto">
              Artículos y consejos de nuestros especialistas para cuidar tu salud y bienestar
            </p>
          </div>
          
          {/* Mobile horizontal scroll - Only visible on small screens */}
          <div className="md:hidden mb-8">
            <div className="relative">
              {/* Gradient fade indicator on the right */}
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none"></div>
              
              {/* Scrollable container */}
              <div 
                id="blog-scroll" 
                className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide" 
                style={{scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch'}}
              >
                {/* Artículo 1 - Dolor de cabeza */}
                <div className="flex-shrink-0 w-72" style={{scrollSnapAlign: 'start'}} data-index={0}>
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift h-full">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Consulta médica para dolor de cabeza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Dolor de cabeza
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  ¿Dolor de cabeza? Diferencia entre cefalea y migraña
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Te explicamos en qué se diferencian, cuándo preocuparte y cuándo consultar con tu médico.
                </p>
                <Link 
                  href="/blog/dolor-cabeza-cefalea-migrana" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
                  </article>
                </div>
            
                {/* Artículo 2 - Depilación láser */}
                <div className="flex-shrink-0 w-72" style={{scrollSnapAlign: 'start'}} data-index={1}>
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift h-full">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format" 
                  alt="Tratamiento de depilación láser"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Depilación láser
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  Depilación láser diodo: todo lo que debes saber antes de empezar
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Resolvemos las dudas más frecuentes sobre sesiones, duración, resultados y contraindicaciones.
                </p>
                <Link 
                  href="/blog/depilacion-laser-diodo-todo-lo-que-debes-saber" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
                  </article>
                </div>
            
                {/* Artículo 3 - Seguros médicos */}
                <div className="flex-shrink-0 w-72" style={{scrollSnapAlign: 'start'}} data-index={2}>
                  <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift h-full">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format" 
                  alt="Seguros médicos y documentación"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Aseguradoras
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  Trabajamos con la mayoría de aseguradoras de salud
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Te contamos cómo usar tu seguro en la clínica y qué coberturas tienes en las principales compañías.
                </p>
                <Link 
                  href="/blog/trabajamos-con-aseguradoras-salud" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
                  </article>
                </div>
                {/* Empty space for better scrolling indication */}
                <div className="flex-shrink-0 w-4"></div>
              </div>
              
              {/* Scroll indicators */}
              <SpecialtiesScrollIndicator totalItems={3} scrollId="blog-scroll" />
            </div>
          </div>
          
          {/* Desktop grid - Hidden on mobile */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Artículo 1 - Dolor de cabeza */}
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=600&fit=crop&auto=format&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Consulta médica para dolor de cabeza"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Dolor de cabeza
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  ¿Dolor de cabeza? Diferencia entre cefalea y migraña
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Te explicamos en qué se diferencian, cuándo preocuparte y cuándo consultar con tu médico.
                </p>
                <Link 
                  href="/blog/dolor-cabeza-cefalea-migrana" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
            
            {/* Artículo 2 - Depilación láser */}
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format" 
                  alt="Tratamiento de depilación láser"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Depilación láser
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  Depilación láser diodo: todo lo que debes saber antes de empezar
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Resolvemos las dudas más frecuentes sobre sesiones, duración, resultados y contraindicaciones.
                </p>
                <Link 
                  href="/blog/depilacion-laser-diodo-todo-lo-que-debes-saber" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
            
            {/* Artículo 3 - Seguros médicos */}
            <article className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover-lift">
              <div className="h-48 bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&auto=format" 
                  alt="Seguros médicos y documentación"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-caption font-semibold rounded-full mb-4">
                  Aseguradoras
                </div>
                <h3 className="text-heading-sm mb-3 text-gray-800">
                  Trabajamos con la mayoría de aseguradoras de salud
                </h3>
                <p className="text-body-sm text-gray-600 mb-4">
                  Te contamos cómo usar tu seguro en la clínica y qué coberturas tienes en las principales compañías.
                </p>
                <Link 
                  href="/blog/trabajamos-con-aseguradoras-salud" 
                  className="text-blue-600 hover:text-blue-700 font-semibold text-body-sm inline-flex items-center gap-1"
                >
                  Leer más
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </article>
          </div>
          
          <div className="text-center">
            <Link 
              href="/blog" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-button-lg transition-all hover-lift inline-flex items-center gap-2 mb-4"
            >
              Ver todos los artículos del blog
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-body-sm text-gray-600">
              Si tienes dudas después de leer un artículo, podemos ayudarte a resolverlas en consulta.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA + Contact Section */}
      <section className="section-padding bg-blue-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Bloque principal - CTA */}
            <div className="text-center mb-12">
              <h2 className="text-heading-xl mb-4">
                ¿Necesitas pedir cita o resolver una duda?
              </h2>
              <p className="text-body-lg text-blue-100 mb-8 max-w-3xl mx-auto">
                Te ayudamos a elegir la especialidad adecuada, comprobar tu seguro y reservar tu cita en la clínica.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link 
                  href="/pide-cita" 
                  className="bg-white hover:bg-blue-50 text-blue-900 px-8 py-4 rounded-lg text-button-lg transition-all hover-lift inline-flex items-center gap-2"
                >
                  Pedir cita online
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link 
                  href="/especialidades-tratamientos" 
                  className="border-2 border-white/50 text-white hover:bg-white/10 px-8 py-4 rounded-lg text-button-lg transition-all hover-lift"
                >
                  Ver todas las especialidades
                </Link>
              </div>
              
              {/* Línea de contacto directo */}
              <div className="text-center">
                <p className="text-body-lg mb-2">
                  También puedes pedir cita en el <a href="tel:963220581" className="text-blue-200 hover:text-white underline font-semibold">963 220 581</a>
                </p>
                <p className="text-blue-200 text-body-lg">
                  o escribirnos a <a href="mailto:recepcion@policlinicasanmartin.es" className="text-blue-200 hover:text-white underline">recepcion@policlinicasanmartin.es</a>
                </p>
              </div>
            </div>
            
            {/* Bloque de ubicación */}
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-heading-md mb-4">
                  Estamos en el centro de Valencia
                </h3>
                <p className="text-blue-100 mb-4 text-body-lg">
                  C/ General San Martín, 7 Bajo Entresuelo · 46004 Valencia
                </p>
                <Link 
                  href="https://g.page/r/CYdLl3YJvYUBEAE" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-600 text-white px-6 py-3 rounded-lg text-button-base transition-all hover-lift inline-flex items-center gap-2"
                >
                  Cómo llegar
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              
              <div className="h-64 rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3079.6310676983184!2d-0.376919684634!3d39.469904979482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzExLjMiTiAwwrAyMiczNi4xIlc!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDI4JzExLjMiTiAwwrAyMiczNi4xIlc!5e0!3m2!1ses!2ses!4v1234567890"
                  width="100%" 
                  height="100%" 
                  style={{border: 0}} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Clínica San Martín en Valencia"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
