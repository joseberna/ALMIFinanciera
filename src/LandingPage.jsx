import React, { useEffect } from 'react'
import Hero from './components/Hero'
import PainSection from './components/PainSection'
import Features from './components/Features'
import PhoneDemo from './components/PhoneDemo'
import B2BValue from './components/B2BValue'
import Footer from './components/Footer'

const LandingPage = () => {
    useEffect(() => {
        document.title = "ALMI Financiera | Agente de IA en WhatsApp"
    }, [])

    return (
        <div className="min-h-screen bg-white selection:bg-almi-cyan selection:text-almi-blue-deep">
            <Hero />
            <PainSection />
            <Features />
            <PhoneDemo />
            <B2BValue />
            <Footer />
        </div>
    )
}

export default LandingPage
