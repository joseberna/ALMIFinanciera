import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, ArrowRight } from 'lucide-react'

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-almi-blue-deep pt-20 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-almi-cyan text-sm font-medium mb-8"
          >
            <MessageSquare size={16} />
            <span>IA de Próxima Generación en WhatsApp</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transforma la relación con tus usuarios: 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-almi-cyan to-blue-400">
              De una web estática a un Agente de IA en WhatsApp
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl"
          >
            Fideliza a los trabajadores, automatiza créditos de libranza y captura datos de bienestar en tiempo real con 0% de fricción.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button className="px-8 py-4 bg-almi-cyan text-almi-blue-deep font-bold rounded-xl hover:scale-105 transition-transform flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,255,0.3)]">
              Agendar Demo
              <ArrowRight size={20} />
            </button>
            <button className="px-8 py-4 bg-white/5 text-white font-bold rounded-xl border border-white/10 hover:bg-white/10 transition-all">
              Ver Caso de Éxito
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
