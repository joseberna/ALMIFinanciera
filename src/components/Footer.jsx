import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Twitter, Linkedin, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-24 pb-12">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="relative p-12 rounded-[3rem] bg-gradient-to-r from-almi-blue to-almi-blue-deep border border-white/10 overflow-hidden mb-24 text-center">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <div className="w-64 h-64 border-8 border-white rounded-full translate-x-1/2 -translate-y-1/2" />
          </div>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-6 relative z-10">
            Lleva a ALMI al siguiente nivel
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto relative z-10">
            Implementación garantizada en solo 8 semanas. Empieza hoy la transformación digital de tu financiera.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-almi-cyan text-almi-blue-deep font-bold rounded-2xl relative z-10 flex items-center justify-center gap-2 mx-auto shadow-xl shadow-cyan-500/20"
          >
            Agendar Demo Gratuita
            <ArrowRight size={20} />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-4 gap-12 mb-16 px-4">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-6 text-almi-cyan italic">ALMI Financiera</h3>
            <p className="text-slate-400 max-w-md leading-relaxed">
              Líderes en soluciones financieras ágiles y humanas. Revolucionamos el crédito de libranza mediante inteligencia artificial.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Soluciones</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Agente WhatsApp</a></li>
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Crédito Digital</a></li>
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Portal RRHH</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Compañía</h4>
            <ul className="space-y-4 text-slate-400">
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Sobre Nosotros</a></li>
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Casos de Éxito</a></li>
              <li><a href="#" className="hover:text-almi-cyan transition-colors">Contacto</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-12 flex flex-col md:row items-center justify-between gap-6 px-4">
          <p className="text-slate-500 text-sm">
            © 2026 B & M Soluciones Tecnológicas S.A.S. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter size={20} /></a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
