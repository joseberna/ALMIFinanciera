import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Check, User } from 'lucide-react'

const steps = [
  {
    type: 'user',
    text: 'Hola, necesito un crédito',
    delay: 0
  },
  {
    type: 'ai',
    text: '¡Hola! Tienes un cupo disponible de $2M. ¿Quieres simular tu cuota?',
    delay: 1500
  },
  {
    type: 'ai',
    text: 'Antes de seguir, ¿cómo te sientes hoy en tu entorno laboral? 😊',
    delay: 3000
  },
  {
    type: 'user',
    text: 'Me siento bien, gracias. ¡Sigamos!',
    delay: 4500
  },
  {
    type: 'ai',
    text: '¡Excelente! Crédito aprobado y desembolsado con éxito. ¡Disfrútalo! ✅',
    delay: 6000
  }
]

const PhoneDemo = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayedMessages, setDisplayedMessages] = useState([])

  useEffect(() => {
    if (currentStep < steps.length) {
      const timer = setTimeout(() => {
        setDisplayedMessages(prev => [...prev, steps[currentStep]])
        setCurrentStep(prev => prev + 1)
      }, steps[currentStep].delay === 0 ? 1000 : 2000)
      return () => clearTimeout(timer)
    } else {
        // Restart after a long delay
        const restartTimer = setTimeout(() => {
            setDisplayedMessages([])
            setCurrentStep(0)
        }, 8000)
        return () => clearTimeout(restartTimer)
    }
  }, [currentStep])

  return (
    <section className="py-24 bg-almi-blue-deep overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1 text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              La experiencia que tus usuarios <span className="text-almi-cyan">amará</span>
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Sin formularios infinitos. Sin esperas telefónicas. 
              El Agente de IA guía al usuario en una conversación natural, segura y extremadamente rápida.
            </p>
            <div className="space-y-6">
                {[
                    "Simulación de crédito instantánea",
                    "Captura de NPS y Bienestar emocional",
                    "Validación biométrica integrada",
                    "Desembolso automático"
                ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="w-6 h-6 rounded-full bg-almi-cyan/20 flex items-center justify-center">
                            <Check className="text-almi-cyan" size={14} />
                        </div>
                        <span className="text-slate-200 font-medium">{item}</span>
                    </div>
                ))}
            </div>
          </div>

          <div className="flex-1 relative">
            {/* Phone Frame */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative mx-auto border-[8px] border-slate-800 rounded-[3rem] w-[320px] h-[640px] bg-slate-100 shadow-2xl overflow-hidden"
            >
              {/* WhatsApp Header */}
              <div className="bg-[#075E54] p-4 pt-12 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center overflow-hidden">
                    <div className="w-8 h-8 rounded-full bg-almi-cyan flex items-center justify-center text-almi-blue-deep font-bold">A</div>
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">ALMI Financiera</h4>
                  <p className="text-white/70 text-[10px]">IA Agente • En línea</p>
                </div>
              </div>

              {/* Chat Area */}
              <div className="h-[460px] p-4 overflow-y-auto bg-[#e5ddd5] flex flex-col gap-3">
                <AnimatePresence>
                  {displayedMessages.map((msg, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.8, y: 10, x: msg.type === 'user' ? 20 : -20 }}
                      animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                      className={`max-w-[85%] p-3 rounded-2xl text-sm shadow-sm ${
                        msg.type === 'user' 
                        ? 'bg-[#dcf8c6] self-end rounded-tr-none text-slate-800' 
                        : 'bg-white self-start rounded-tl-none text-slate-800'
                      }`}
                    >
                      {msg.text}
                      <div className="text-[9px] text-slate-400 text-right mt-1">
                        {new Date().getHours()}:{new Date().getMinutes()}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Input Area */}
              <div className="absolute bottom-0 left-0 right-0 bg-white p-4 flex items-center gap-3">
                <div className="flex-1 bg-slate-100 rounded-full px-4 py-2 text-slate-400 text-xs">
                  Escribe un mensaje...
                </div>
                <div className="w-10 h-10 rounded-full bg-[#128C7E] flex items-center justify-center text-white">
                  <Send size={18} />
                </div>
              </div>
            </motion.div>

            {/* Float Decor */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-almi-cyan/10 blur-3xl rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PhoneDemo
