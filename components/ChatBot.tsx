'use client'

import React, { useState, useEffect, useRef } from 'react'
import { MessageCircle, X, Send, Phone, FileText } from 'lucide-react'

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)

  // Bot responses database - Ampliada y mejorada para Clínica San Martín
  const botResponses = React.useMemo(() => ({
    greeting: [
      "¡Hola! 👋 Soy el asistente virtual de la Clínica San Martín. Somos un centro médico polivalente con más de 25 especialidades médicas y servicios de diagnóstico. ¿En qué puedo asistirte hoy?",
      "¡Bienvenido a la Clínica San Martín! 🏥 Somos un equipo de profesionales médicos con amplia experiencia en atención primaria y especializada. ¿Qué necesitas saber sobre nuestros servicios?",
      "¡Hola! ✨ Soy tu asistente en la Clínica San Martín. Estamos en el centro de Valencia y ofrecemos atención médica integral con tecnología de vanguardia. ¿Cómo puedo ayudarte con tu salud?"
    ],
    services: [
      "🏥 **Servicios Médicos Clínica San Martín - Atención Integral:**\n\n👨‍⚕️ **Medicina General** (Servicio Principal)\n• Atención primaria y preventiva\n• Revisiones médicas completas\n• Control de enfermedades crónicas\n\n🩺 **Especialidades Médicas**\n• Cardiología, dermatología, ginecología\n• Traumatología, pediatría, neurología\n• Digestivo, urología, endocrinología\n\n🔬 **Diagnóstico por Imagen**\n• Ecografías, radiografías digitales\n• Análisis clínicos completos\n• Pruebas de esfuerzo, holter\n\n💉 **Tratamientos y Terapias**\n• Fisioterapia y rehabilitación\n• Nutrición y dietética\n• Psicología y psiquiatría\n\n¿Qué especialidad te interesa más? 🏥",
      "Nuestros **servicios médicos integrales** están diseñados para toda la familia:\n\n🎯 **¿Atención general?** → Medicina familiar y preventiva\n🎯 **¿Especialista específico?** → 25 especialidades médicas\n🎯 **¿Diagnóstico rápido?** → Pruebas en el mismo centro\n🎯 **¿Rehabilitación?** → Fisioterapia y tratamientos\n\n**Cobertura:** Mayoría de aseguradoras\n**Tecnología:** Equipos de última generación\n**Horarios:** Lunes a viernes y sábados por la mañana\n\n¿Cuál se adapta mejor a tus necesidades médicas?"
    ],
    prices: [
      "💰 **Información de Tarifas y Seguros:**\n\n**Consulta Médica General:**\n• Desde 60€ (consulta privada)\n• Con seguro: sin coste adicional\n• Revisiones preventivas incluidas\n\n**Especialidades Médicas:**\n• Desde 80€ (consulta privada)\n• Precios según especialidad\n• Pruebas diagnósticas: desde 30€\n\n**Pruebas Diagnósticas:**\n• Análisis clínicos: desde 25€\n• Ecografías: desde 50€\n• Radiografías: desde 40€\n\n**Tratamientos:**\n• Fisioterapia: desde 35€/sesión\n• Nutrición: desde 60€\n• Psicología: desde 50€\n\n📞 **Cita previa: 963 220 581**\n*Aceptamos la mayoría de seguros médicos*",
      "🎯 **Tarifas Transparentes - Calidad Médica:**\n\n**¿Con seguro médico?** Sin coste adicional\n**¿Sin seguro?** Tarifas competitivas\n**¿Consulta general?** Desde 60€\n\n**Ventajas incluidas:**\n✅ Atención personalizada\n✅ Mismo médico de referencia\n✅ Tecnología de última generación\n✅ Pruebas rápidas en el centro\n\n📱 **Pide tu cita: 963 220 581**"
    ],
    urgency: [
      "🚨 **Atención Médica Urgente:**\n\n**Disponibilidad inmediata:**\n• Consultas urgentes el mismo día\n• Servicio de guardia médica\n• Atención en menos de 2 horas\n\n**Situaciones urgentes que atendemos:**\n🩺 Dolores intensos y agudos\n🏥 Problemas respiratorios\n💊 Reacciones adversas a medicamentos\n🤕 Traumatismos y lesiones\n\n**Tarifa urgencia:** Según especialidad\n\n📞 **Llama AHORA: 963 220 581**\n*Médico de guardia disponible*",
      "⏰ **¿Necesitas atención médica URGENTE?**\n\nNuestro equipo médico está preparado para emergencias:\n\n🎯 **Citas urgentes el mismo día**\n🎯 **Médicos disponibles de guardia**\n🎯 **Pruebas diagnósticas rápidas**\n\n**Casos urgentes recientes:**\n• Dolor abdominal agudo - Atención inmediata\n• Problemas cardíacos - Revisión urgente\n• Alergias estacionales - Tratamiento rápido\n• Lesiones deportivas - Diagnóstico inmediato\n\n📱 **URGENCIAS: 963 220 581**"
    ],
    certifications: [
      "🏅 **Certificaciones y Garantías Médicas:**\n\n**Nuestras Certificaciones:**\n✅ Médicos colegiados y especializados\n✅ Centro sanitario autorizado\n✅ Seguro de responsabilidad civil médica\n✅ Protocolos de seguridad e higiene\n✅ Certificación ISO 9001 (calidad)\n\n**Garantías que ofrecemos:**\n🛡️ Atención personalizada garantizada\n🛡️ Mismo médico de referencia\n🛡️ Cumplimiento de normativas sanitarias\n🛡️ Equipo médico altamente cualificado\n\n**Compromiso con la calidad:**\n• Tecnología médica de última generación\n• Protocolos de seguridad estrictos\n• Formación continua del personal\n\n📞 **Consulta certificaciones: 963 220 581**",
      "🔒 **Calidad y Seguridad - Nuestro Compromiso Médico:**\n\n**¿Por qué elegir Clínica San Martín?**\n• Médicos especialistas colegiados\n• Tecnología médica avanzada\n• Más de 25 años de experiencia\n• Seguro de responsabilidad civil\n\n**Documentación que proporcionamos:**\n📋 Informes médicos detallados\n📋 Resultados de pruebas diagnósticas\n📋 Historial médico digitalizado\n📋 Garantías de confidencialidad\n\n**Especialidades médicas:**\n👨‍⚕️ Medicina general • 🩺 Especialidades • 🔬 Diagnóstico • 💉 Tratamientos\n\n¿Necesitas información médica específica? ¡Consúltanos!"
    ],
    coverage: [
      "🗺️ **Ubicación y Cobertura - Clínica San Martín:**\n\n**Nuestra Ubicación:**\n📍 **Calle General San Martín, 7**\n📍 **46004 Valencia** - Centro de Valencia\n📍 **Fácil acceso** - Metro y autobús cercano\n📍 **Zona:** Entre Plaza España y Ayuntamiento\n\n**Áreas de Cobertura:**\n• Valencia capital y área metropolitana\n• Paterna, Burjassot, Mislata\n• Torrent, Aldaia, Manises\n• Xirivella, Alaquàs, Quart de Poblet\n\n**Ventajas por ubicación:**\n✅ En pleno centro de Valencia\n✅ Fácil aparcamiento en zona\n✅ Accesible en transporte público\n✅ Consultas sin desplazamiento\n\n**Transporte público:**\n• Metro: Línea 3 y 5 (Plaza España)\n• Autobús: Líneas 6, 8, 11, 19\n• Renfe: Estación Joaquín Sorolla\n\n📞 **¿Cómo llegar? 963 220 581**"
    ],
    experience: [
      "🏆 **Experiencia Médica y Referencias:**\n\n**Casos de Éxito Médico:**\n👨‍⚕️ **Atención Primaria Integral**\n• Servicio: Medicina general y preventiva\n• Frecuencia: Consultas y revisiones\n• Resultado: Pacientes sanos y satisfechos\n\n🩺 **Especialidades Médicas**\n• Servicio: 25 especialidades diferentes\n• Frecuencia: Diagnóstico y tratamiento\n• Resultado: Recuperación y bienestar\n\n🔬 **Diagnóstico Preciso**\n• Servicio: Pruebas médicas completas\n• Frecuencia: Análisis y ecografías\n• Resultado: Diagnóstico certero\n\n💉 **Tratamientos Efectivos**\n• Servicio: Fisioterapia y rehabilitación\n• Frecuencia: Sesiones personalizadas\n• Resultado: Mejora de la calidad de vida\n\n🌟 **Valoración Google:** 4.6/5\n• Resultado: Alta satisfacción paciente\n\n📞 **¿Quieres ser nuestro próximo paciente satisfecho? 963 220 581**",
      "💼 **Experiencia Médica - Más de 25 Años de Servicio:**\n\n**¿Por qué nos eligen nuestros pacientes?**\n🎯 Médicos especialistas colegiados\n🎯 Tecnología médica avanzada\n🎯 Más de 25 años de experiencia\n🎯 Atención personalizada garantizada\n\n**Testimonios de pacientes:**\n• \"Excelente atención desde recepción hasta el especialista\"\n• \"Me explicaron todo con claridad y me ayudaron\"\n• \"Profesionales y cercanos siempre\"\n\n**Números que nos avalan:**\n📊 15.000+ pacientes atendidos\n📊 25+ años de experiencia médica\n📊 4.6/5 valoración media Google\n📊 95% pacientes satisfechos\n\n¿Quieres ser nuestro próximo paciente satisfecho?"
    ],
    contact: [
      "📞 **¡Perfecto! Contacta con Nuestro Equipo Médico:**\n\n**Información de Contacto:**\n📱 **Teléfono: 963 220 581**\n📧 **Email: recepcion@policlinicasanmartin.es**\n📍 **Ubicación: C/ General San Martín, 7, bajo**\n    **46004 Valencia**\n\n**Horarios de Atención:**\n🕐 Lunes a Viernes: 08:00 - 20:00\n🕐 Sábados: 09:00 - 14:00\n🚨 Urgencias: Mismo día disponible\n\n**¿Qué necesitas?**\n• Cita previa con especialista\n• Información sobre servicios médicos\n• Consulta sobre seguros médicos\n• Servicio de urgencia\n\n**Respuesta garantizada en menos de 2 horas** ⏰\n\n¡Nuestro equipo médico está listo para ayudarte! 💪",
      "🎯 **¡Excelente Decisión! Te Esperamos:**\n\n**Contacto Directo:**\n📞 **963 220 581** (Respuesta inmediata)\n📧 **recepcion@policlinicasanmartin.es**\n\n**¿Qué puedes esperar?**\n✅ Cita médica en 24h\n✅ Evaluación médica completa\n✅ Propuesta de tratamiento personalizada\n✅ Seguimiento médico continuo\n\n**Información que nos ayuda:**\n• Tipo de especialidad requerida\n• Síntomas o motivo de consulta\n• Cobertura de seguro médico\n• Disponibilidad horaria\n\n**Especialidades disponibles:**\n• Medicina general y 25 especialidades\n\n📱 **¡Llama ahora y hablemos de tu salud!**"
    ],
    maintenance: [
      "🔧 **Mantenimiento de Limpieza - Servicio Integral:**\n\n**Tipos de Servicios de Mantenimiento:**\n🛠️ **Limpieza Regular** - Planificada y sistemática\n🚨 **Limpieza Intensiva** - Cuando necesitas más profundidad\n⚡ **Limpieza Express** - Respuesta rápida\n🔍 **Limpieza Detallada** - Rastros y rincones\n\n**Sectores Especializados:**\n🏢 Oficinas y despachos profesionales\n🏢 Comunidades de propietarios\n🏭 Naves industriales y almacenes\n🏠 Hogares y segundas residencias\n🏨 Hoteles y apartamentos turísticos\n\n**Servicios Incluidos:**\n✅ Limpieza de suelos y alfombras\n✅ Limpieza de cristales y ventanas\n✅ Desinfección de zonas comunes\n✅ Gestión de residuos y reciclaje\n✅ Productos ecológicos certificados\n\n**Frecuencias:**\n• Diaria, semanal, quincenal o mensual\n• Servicios personalizados según necesidades\n\n📞 **Consulta tu caso: +34 960 123 456**",
      "🏭 **Mantenimiento de Limpieza - Casos de Éxito:**\n\n**¿Por qué Smart Clean para tu mantenimiento?**\n• Personal uniformado y formado\n• Productos ecológicos certificados\n• Más de 10 años de experiencia\n• Flexibilidad total de horarios\n\n**Metodología de trabajo:**\n📋 Evaluación inicial gratuita\n📋 Plan de limpieza personalizado\n📋 Calendario de servicios\n📋 Revisiones de calidad\n📋 Informes de servicio detallados\n\n**Ventajas competitivas:**\n🎯 Ambiente limpio y saludable\n🎯 Reducción de alérgenos y bacterias\n🎯 Mejora de la imagen de tu espacio\n🎯 Personal de confianza\n\n**Sectores de confianza:**\n• Oficinas • Comunidades • Industrias • Hogares\n\n¿Necesitas un mantenimiento de limpieza sin preocupaciones?"
    ],
    workforce: [
      "👷 **Equipo de Limpieza Profesional - Nuestro Servicio Principal:**\n\n**Nuestro Equipo:**\n🧹 Personal uniformado y formado\n🧹 Especialistas en limpieza de oficinas\n🧹 Expertos en limpieza de comunidades\n🧹 Profesionales en limpieza industrial\n\n**Especializaciones:**\n✨ Limpieza de oficinas y despachos\n✨ Mantenimiento de comunidades\n✨ Limpieza de instalaciones industriales\n✨ Limpieza profunda y detallada\n✨ Productos ecológicos y seguros\n\n**Casos de Referencia:**\n🏢 **Oficinas Corporativas** - Limpieza diaria\n🏢 **Comunidades Residenciales** - Mantenimiento semanal\n🏭 **Industrias Locales** - Limpieza quincenal\n🏠 **Hogares** - Limpieza profunda mensual\n\n**Tarifas:**\n• Desde 15€/hora personal de limpieza\n• Contratos mensuales: tarifas especiales\n• Sin coste desplazamiento Valencia\n\n**Cobertura:** Valencia y área metropolitana\n\n📞 **Solicita tu equipo: +34 960 123 456**",
      "🎯 **Personal de Limpieza Profesional - Servicios de Confianza:**\n\n**¿Para quién trabajamos?**\n• Empresas y oficinas\n• Comunidades de propietarios\n• Industrias y almacenes\n• Hogares y particulares\n\n**Ventajas de nuestro personal:**\n✅ Uniformado y acreditado\n✅ Formado en técnicas de limpieza\n✅ Uso de productos ecológicos\n✅ Herramientas y equipos incluidos\n✅ Seguro de responsabilidad civil\n\n**Casos donde destacamos:**\n• Oficinas: Limpieza sin interrupciones\n• Comunidades: Satisfacción vecinal\n• Industrias: Cumplimiento normativas\n• Hogares: Confianza y discreción\n\n**Proceso de contratación:**\n📞 Llamada → 📋 Evaluación → 🧹 Servicio\n\n**Respuesta en menos de 24 horas**\n\n¿Necesitas personal de limpieza de confianza?"
    ],
    documents: [
      "📋 **Limpieza de Documentación y Archivos:**\n\n**Servicio Especializado:**\n🎯 **Limpieza de archivos y documentación**\n🎯 **Organización de espacios de trabajo**\n🎯 **Digitalización de documentos**\n\n**Servicios Incluidos:**\n📄 Organización y clasificación de documentos\n📄 Limpieza de estanterías y archivadores\n📄 Digitalización de documentos importantes\n📄 Gestión de documentos obsoletos\n📄 Limpieza de equipos informáticos\n📄 Organización de espacios de trabajo\n\n**Sectores Especializados:**\n• Oficinas con archivo documental\n• Despachos profesionales\n• Bibliotecas y hemerotecas\n• Archivos municipales\n\n**Tarifas Competitivas:**\n• Por hora: desde 20€/hora\n• Por proyecto: desde 150€\n• Digitalización: 0,50€/página\n\n**Ventajas:**\n✅ Organización eficiente del espacio\n✅ Mejora de la productividad\n✅ Conservación de documentos importantes\n✅ Ambiente de trabajo más ordenado\n\n📞 **¿Necesitas organizar tu documentación? ¡Llámanos! +34 960 123 456**",
      "💼 **Organización y Limpieza de Espacios de Trabajo:**\n\n**¿Por qué organizar tu espacio de trabajo?**\n• Mejora de la productividad\n• Reducción del estrés laboral\n• Conservación de documentos\n• Imagen profesional mejorada\n\n**Proceso de trabajo:**\n📊 Evaluación inicial del espacio\n📊 Clasificación de documentos\n📊 Limpieza profunda del área\n📊 Implementación de sistemas de organización\n📊 Mantenimiento periódico\n\n**Casos de éxito:**\n• Despacho legal (archivo histórico) - Organización completa\n• Consultora (oficina abierta) - Digitalización documentos\n• Clínica (historiales médicos) - Sistema organizativo\n\n**Incluye:**\n🎯 Limpieza de muebles y equipos\n🎯 Organización de documentos\n🎯 Digitalización de archivos\n🎯 Recomendaciones de mantenimiento\n\n**¿Tu oficina necesita organización y limpieza?**"
    ],
    location: [
      "📍 **Ubicación y Cobertura - Cerca de Ti:**\n\n**Sede Principal:**\n🏢 **C/ Colón, 15, bajo**\n🏢 **46004 Valencia**\n🏢 **Zona: Centro de Valencia**\n\n**Cobertura Completa:**\n🗺️ **Valencia capital** - Cobertura total\n🗺️ **Alrededores** - Personal desplazado\n🗺️ **Área metropolitana** - Servicio integral\n\n**Zonas Principales:**\n• Centro, Ensanche, Benicalap, Campanar\n• Poblados Marítimos, Algirós, Camins al Grau\n• Quatre Carreres, Paternina, Benimaclet\n• Alboraya, Mislata, Burjassot, Godella\n\n**Horarios de Oficina:**\n🕐 **Lunes a Viernes:** 08:00 - 20:00\n🕐 **Sábados:** 09:00 - 14:00\n🚨 **Emergencias:** 24/7 disponible\n\n**Ventajas por ubicación:**\n✅ Sin coste desplazamiento en Valencia capital\n✅ Respuesta rápida (menos de 2h)\n✅ Conocimiento del territorio\n✅ Personal local en cada zona\n\n**Transporte y logística:**\n• Vehículos equipados con productos y herramientas\n• Personal móvil por toda el área\n• Rutas optimizadas por barrios\n\n📞 **¿Estamos cerca de ti? +34 960 123 456**"
    ],
    projects: [
      "🏆 **Casos de Éxito - Portfolio de Referencias:**\n\n⚽ **Nou Mestalla - Valencia CF**\n• Proyecto: Instalaciones eléctricas estadio\n• Equipo: 15+ técnicos especializados\n• Duración: Proyecto de gran envergadura\n• Resultado: Cumplimiento plazos y calidad\n\n🏀 **Roig Arena - Pabellón Deportivo**\n• Servicio: Mantenimiento integral 24/7\n• Sistemas: Climatización, eléctrico, seguridad\n• Eventos: Sin interrupciones durante competiciones\n• Resultado: Funcionamiento perfecto continuo\n\n🏥 **Hospitales Privados Valencia**\n• Gestión: PRL para 200+ trabajadores\n• Mantenimiento: Sistemas críticos sin paradas\n• Certificaciones: Normativas sanitarias estrictas\n• Resultado: Cumplimiento 100% normativo\n\n🏨 **Hoteles Costa Valenciana**\n• Temporada alta: Mantenimiento preventivo\n• Servicios: Climatización, piscinas, eléctrico\n• Respuesta: Inmediata para huéspedes\n• Resultado: Satisfacción cliente garantizada\n\n🏭 **Industrias Castellón**\n• Automatización: Sistemas de control\n• Mantenimiento: Preventivo y correctivo\n• Certificaciones: PRL industrial\n• Resultado: Optimización producción\n\n📞 **¿Quieres ser nuestro próximo caso de éxito? +34 663 423 034**"
    ],
    followup: [
      "🤔 **¿Necesitas más información médica específica?**\n\nPuedo ayudarte con:\n• Detalles de especialidades médicas\n• Información sobre seguros médicos\n• Casos similares a tu situación\n• Disponibilidad de citas\n• Pruebas diagnósticas disponibles\n\n¿Qué te gustaría saber exactamente?",
      "💡 **¿Te puedo ayudar con algo más concreto sobre tu salud?**\n\nTemas que puedo resolver:\n🩺 Tipos de especialidades médicas\n💰 Información sobre tarifas y seguros\n📅 Disponibilidad de citas y horarios\n🏆 Referencias de pacientes similares\n🔬 Pruebas diagnósticas y tratamientos\n\n¿Hay algo específico que te preocupe sobre tu salud?"
    ],
    default: [
      "Entiendo tu consulta. Para darte la mejor respuesta personalizada sobre nuestros servicios médicos (especialidades, pruebas diagnósticas o tratamientos), te recomiendo que nos llames al **963 220 581** 📞\n\nNuestro equipo médico profesional podrá ayudarte con cualquier duda específica. ¿Hay algo concreto que te gustaría saber mientras tanto?",
      "¡Gracias por tu interés en la Clínica San Martín! 🏥\n\nCon más de 25 años de experiencia en atención médica, estamos preparados para ayudarte con:\n🩺 Medicina general y especialidades\n🔬 Pruebas diagnósticas completas\n💉 Tratamientos y rehabilitación\n🏥 Atención integral de la salud\n\n📞 **963 220 581** | 📧 **recepcion@policlinicasanmartin.es**\n\n¿Te gustaría que profundice en algún servicio médico específico?",
      "Perfecto, estoy aquí para resolver tus dudas sobre la Clínica San Martín. ✨\n\nCon médicos especialistas y tecnología médica avanzada en el centro de Valencia, podemos ayudarte con cualquier necesidad médica.\n\n¿Prefieres que hablemos de:\n• Servicios médicos y especialidades\n• Casos de pacientes similares al tuyo\n• Disponibilidad de citas y horarios\n• Pruebas diagnósticas disponibles\n\nO si lo prefieres, **llama directamente: 963 220 581** 📱"
    ]
  }), [])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const getRandomResponse = React.useCallback((category: keyof typeof botResponses): string => {
    const responses = botResponses[category]
    return responses[Math.floor(Math.random() * responses.length)]
  }, [botResponses])

  // Initialize chat with welcome message
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setTimeout(() => {
        addBotMessage(getRandomResponse('greeting'))
      }, 500)
    }
  }, [isOpen, messages.length, getRandomResponse])

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // Handle viewport changes for mobile keyboard
  useEffect(() => {
    const handleResize = () => {
      if (isOpen && inputRef.current) {
        setTimeout(() => {
          scrollToBottom()
        }, 100)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [isOpen])

  const analyzeMessage = (text: string): keyof typeof botResponses => {
    const lowerText = text.toLowerCase()
    
    // Saludos y presentaciones
    if (lowerText.includes('hola') || lowerText.includes('buenos') || lowerText.includes('buenas') || 
        lowerText.includes('saludos') || lowerText.includes('hey')) {
      return 'greeting'
    }
    
    // Precios y tarifas médicas (alta prioridad)
    if (lowerText.includes('precio') || lowerText.includes('tarifa') || lowerText.includes('coste') || 
        lowerText.includes('cuesta') || lowerText.includes('€') ||
        lowerText.includes('euro') || lowerText.includes('seguro') || lowerText.includes('cobertura') ||
        lowerText.includes('factura') || lowerText.includes('pagar')) {
      return 'prices'
    }
    
    // Urgencias médicas y emergencias
    if (lowerText.includes('urgente') || lowerText.includes('emergencia') || lowerText.includes('rápido') ||
        lowerText.includes('inmediato') || lowerText.includes('dolor') || lowerText.includes('síntoma') ||
        lowerText.includes('sintoma') || lowerText.includes('malestar') || lowerText.includes('urgencias')) {
      return 'urgency'
    }
    
    // Certificaciones médicas y garantías
    if (lowerText.includes('certificado') || lowerText.includes('colegiado') || lowerText.includes('especialista') ||
        lowerText.includes('garantía') || lowerText.includes('garantia') || lowerText.includes('calidad') ||
        lowerText.includes('normativa') || lowerText.includes('sanitario')) {
      return 'certifications'
    }
    
    // Cobertura geográfica y ubicación
    if (lowerText.includes('valencia') || lowerText.includes('ubicación') || lowerText.includes('ubicacion') ||
        lowerText.includes('dirección') || lowerText.includes('direccion') || lowerText.includes('donde') ||
        lowerText.includes('cómo llegar') || lowerText.includes('como llegar') || lowerText.includes('metro')) {
      return 'coverage'
    }
    
    // Experiencia médica y referencias
    if (lowerText.includes('experiencia') || lowerText.includes('referencia') || lowerText.includes('médico') ||
        lowerText.includes('medico') || lowerText.includes('doctor') || lowerText.includes('especialista') ||
        lowerText.includes('paciente') || lowerText.includes('tratamiento')) {
      return 'experience'
    }
    
    // Servicios médicos y especialidades
    if (lowerText.includes('servicio') || lowerText.includes('especialidad') || lowerText.includes('consulta') ||
        lowerText.includes('médico') || lowerText.includes('medico') || lowerText.includes('diagnóstico') ||
        lowerText.includes('diagnostico') || lowerText.includes('prueba') || lowerText.includes('tratamiento')) {
      return 'services'
    }
    
    // Contacto y citas
    if (lowerText.includes('llamar') || lowerText.includes('contacto') || lowerText.includes('teléfono') ||
        lowerText.includes('telefono') || lowerText.includes('email') || lowerText.includes('correo') ||
        lowerText.includes('hablar') || lowerText.includes('consulta') || lowerText.includes('cita')) {
      return 'contact'
    }
    
    return 'default'
  }

  const addBotMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const addUserMessage = (text: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, newMessage])
  }

  const handleSendMessage = () => {
    if (!inputText.trim()) return

    const userMessage = inputText.trim()
    addUserMessage(userMessage)
    setInputText('')
    setIsTyping(true)

    // Simulate bot typing delay
    setTimeout(() => {
      const responseCategory = analyzeMessage(userMessage)
      let botResponse = getRandomResponse(responseCategory)
      
      // Añadir contexto conversacional y seguimiento
      if (responseCategory === 'services' || responseCategory === 'default') {
        // Añadir pregunta de seguimiento para servicios generales
        botResponse += "\n\n" + getRandomResponse('followup')
      } else if (responseCategory === 'prices') {
        // Para precios, sugerir contacto directo
        botResponse += "\n\n💡 **¿Te interesa algún servicio específico?** Puedo darte más detalles técnicos o conectarte directamente con nuestro equipo."
      } else if (responseCategory === 'workforce' || responseCategory === 'maintenance' || responseCategory === 'documents') {
        // Para servicios específicos, ofrecer información adicional
        botResponse += "\n\n🔍 **¿Quieres saber más sobre:**\n• Casos similares a tu proyecto\n• Disponibilidad y plazos\n• Proceso de trabajo específico"
      }
      
      addBotMessage(botResponse)
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // Random delay between 1-2 seconds
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const openChat = () => {
    setIsOpen(true)
    // Focus input after animation completes
    setTimeout(() => {
      inputRef.current?.focus()
    }, 300)
  }

  const closeChat = () => {
    setIsOpen(false)
    // Clear focus to hide mobile keyboard
    inputRef.current?.blur()
  }

  const formatMessage = (text: string) => {
    // Convert markdown-like formatting to JSX
    return text.split('\n').map((line, index) => (
      <React.Fragment key={index}>
        {line.includes('**') ? (
          <span dangerouslySetInnerHTML={{
            __html: line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
          }} />
        ) : (
          line
        )}
        {index < text.split('\n').length - 1 && <br />}
      </React.Fragment>
    ))
  }

  return (
    <>
      {/* Chat Bubble - Optimizado para PC y móvil */}
      {!isOpen && (
        <button
          onClick={openChat}
          className="fixed bottom-6 right-6 w-16 h-16 md:w-[70px] md:h-[70px] bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-[998] animate-bounce-in group"
          aria-label="Abrir chat de ayuda"
        >
          <MessageCircle className="w-8 h-8 md:w-9 md:h-9 mx-auto transition-transform duration-300 group-hover:scale-110" />
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        </button>
      )}

      {/* Chat Window - Responsive: Full-screen en móvil, flotante en PC */}
      {isOpen && (
        <div className="fixed inset-0 md:inset-auto md:bottom-4 md:right-4 md:w-[400px] md:h-[600px] bg-white z-[998] flex flex-col animate-slide-up md:rounded-2xl md:shadow-2xl md:border md:border-gray-200 overflow-hidden">
          {/* Header con colores corporativos */}
          <div className="bg-blue-600 text-white p-4 flex items-center justify-between shadow-lg md:rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Asistente Clínica San Martín</h3>
                <p className="text-blue-100 text-sm opacity-90">En línea • Respuesta inmediata</p>
              </div>
            </div>
            <button
              onClick={closeChat}
              className="w-10 h-10 hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              aria-label="Cerrar chat"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Messages Container con scrollbar personalizada */}
          <div 
            ref={chatContainerRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-gray-200"
            style={{ height: 'calc(100dvh - 140px)' }}
          >
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'} animate-fade-in`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl shadow-sm transition-all duration-200 hover:shadow-md ${
                    message.isBot
                      ? 'bg-blue-50 text-blue-900 rounded-bl-md border border-blue-100'
                      : 'bg-blue-600 text-white rounded-br-md hover:bg-blue-700'
                  }`}
                >
                  <div className="text-sm leading-relaxed">
                    {formatMessage(message.text)}
                  </div>
                  <div className={`text-xs mt-1 ${message.isBot ? 'text-blue-600/70' : 'text-white/70'}`}>
                    {message.timestamp.toLocaleTimeString('es-ES', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator mejorado */}
            {isTyping && (
              <div className="flex justify-start animate-fade-in">
                <div className="bg-blue-50 p-3 rounded-2xl rounded-bl-md shadow-sm border border-blue-100">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area con colores corporativos */}
          <div className="p-4 bg-white border-t border-gray-200 md:rounded-b-2xl">
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu mensaje..."
                className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 transition-all duration-200"
                disabled={isTyping}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isTyping}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 text-white rounded-full flex items-center justify-center transition-all duration-200 hover:scale-105 disabled:hover:scale-100"
                aria-label="Enviar mensaje"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Estilos CSS personalizados para scrollbar */}
      <style jsx>{`
        .scrollbar-thin {
          scrollbar-width: thin;
        }
        .scrollbar-thumb-blue-600::-webkit-scrollbar-thumb {
          background-color: #2563eb;
          border-radius: 9999px;
        }
        .scrollbar-track-gray-200::-webkit-scrollbar-track {
          background-color: #E5E7EB;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
      `}</style>
    </>
  )
}

export default ChatBot