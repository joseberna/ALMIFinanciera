import React from 'react'
import { motion } from 'framer-motion'
import { LayoutDashboard, TrendingUp, HeartHandshake } from 'lucide-react'

const B2BValue = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
          <div className="flex-1">
            <h2 className="text-3xl md:text-5xl font-bold text-almi-blue-deep mb-6">
              El Aliado Estratégico de RRHH
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              No solo entregamos créditos. Entregamos valor real a tus empresas aliadas a través de datos que permiten cuidar a su activo más valioso: sus empleados.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                <div className="p-3 rounded-xl bg-almi-blue-deep text-almi-cyan">
                  <LayoutDashboard size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-almi-blue-deep mb-1">Dashboards de Bienestar</h4>
                  <p className="text-slate-600">Visualiza el clima emocional y financiero de la organización de forma anónima y agregada.</p>
                </div>
              </div>

              <div className="flex gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 items-start">
                <div className="p-3 rounded-xl bg-almi-blue-deep text-almi-cyan">
                  <TrendingUp size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-almi-blue-deep mb-1">Impacto en Productividad</h4>
                  <p className="text-slate-600">Reduce el ausentismo y la rotación resolviendo las urgencias financieras de los empleados en segundos.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.9 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-3xl bg-slate-100 border border-slate-200 shadow-xl aspect-video flex items-center justify-center overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-almi-blue-deep/5 to-transparent" />
              <div className="relative text-center">
                <div className="flex justify-center mb-6">
                    <div className="flex -space-x-4">
                        {[1, 2, 3, 4].map(i => (
                            <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-300 flex items-center justify-center overflow-hidden">
                                <User className="text-slate-500" size={24} />
                            </div>
                        ))}
                    </div>
                </div>
                <h4 className="text-2xl font-bold text-almi-blue-deep">18,000+</h4>
                <p className="text-slate-500 font-medium">Usuarios Impactados</p>
                <div className="mt-8 flex gap-2">
                    {[40, 70, 50, 90, 60, 80].map((h, i) => (
                        <motion.div 
                            key={i}
                            initial={{ height: 0 }}
                            whileInView={{ height: h }}
                            className="w-8 bg-almi-cyan rounded-t-lg"
                        />
                    ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

const User = ({ className, size }) => (
    <div className={className}>
        <div className="w-full h-full bg-slate-400 rounded-full" />
    </div>
)

export default B2BValue
