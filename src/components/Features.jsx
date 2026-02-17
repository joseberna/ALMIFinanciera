import React from 'react'
import { motion } from 'framer-motion'
import { Clock, ShieldCheck, BarChart3, Users } from 'lucide-react'

const features = [
  {
    title: "Disponibilidad 24/7",
    description: "Créditos solicitados y procesados en segundos, sin importar la hora o el día. La IA no duerme.",
    icon: Clock,
    color: "bg-blue-500"
  },
  {
    title: "Data de Bienestar",
    description: "Encuestas inteligentes integradas en la charla para generar informes de valor para RRHH en tiempo real.",
    icon: BarChart3,
    color: "bg-cyan-500"
  },
  {
    title: "Seguridad Fintech",
    description: "Validación de identidad robusta, cifrado de punta a punta y cumplimiento con normativas financieras.",
    icon: ShieldCheck,
    color: "bg-indigo-500"
  },
  {
    title: "Escalabilidad",
    description: "Un solo agente capaz de atender a 18,000 usuarios simultáneamente sin degradar la calidad.",
    icon: Users,
    color: "bg-emerald-500"
  }
]

const Features = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-almi-blue-deep mb-4">
            Potencia para tu Financiera
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Tecnología de punta diseñada específicamente para el sector de créditos de libranza y bienestar corporativo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 hover:shadow-xl transition-shadow group"
            >
              <div className={`${feature.color} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-almi-blue-deep mb-3">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
