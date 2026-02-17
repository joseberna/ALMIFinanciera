import React from 'react'
import { motion } from 'framer-motion'
import { XCircle, CheckCircle2, Download, MessageCircle } from 'lucide-react'

const PainSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-almi-blue-deep mb-4">
            ¿Por qué WhatsApp y no una App?
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Elimina las barreras que impiden que tus usuarios accedan a tus servicios financieros.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional App */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -50 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4">
              <XCircle className="text-red-400 opacity-20 group-hover:opacity-100 transition-opacity" size={48} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-slate-200 flex items-center justify-center">
                <Download className="text-slate-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-800">App Tradicional</h3>
                <p className="text-sm text-slate-500">Alta Fricción</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Requiere descarga e instalación (100MB+)",
                "Olvido de contraseñas constante",
                "Notificaciones ignoradas o desactivadas",
                "Actualizaciones forzadas que interrumpen",
                "Baja tasa de uso recurrente"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-600">
                  <XCircle className="text-red-400 shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* WhatsApp Agent */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 50 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl bg-almi-blue-deep text-white shadow-2xl shadow-blue-900/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4">
              <CheckCircle2 className="text-almi-cyan opacity-20 group-hover:opacity-100 transition-opacity" size={48} />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-almi-cyan/20 flex items-center justify-center">
                <MessageCircle className="text-almi-cyan" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Agente de IA</h3>
                <p className="text-sm text-almi-cyan/80">Cero Fricción</p>
              </div>
            </div>
            <ul className="space-y-4">
              {[
                "Uso inmediato sin descargas",
                "Autenticación nativa y segura",
                "98% de tasa de apertura en mensajes",
                "Respuestas instantáneas 24/7",
                "Integración natural en la vida diaria"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-200">
                  <CheckCircle2 className="text-almi-cyan shrink-0 mt-1" size={18} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default PainSection
