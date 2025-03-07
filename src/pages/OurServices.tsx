import React from 'react'
import Hero from '../components/Home/Hero'
import ServicesSection from '../components/OurServices/ServicesSection'
import WelcomeToOurCompany from '../components/WelcomeToOurCompany'

const OurServices: React.FC = () => {
  return (
    <div>
      <Hero />
      <ServicesSection />
      <WelcomeToOurCompany />
    </div>
  )
}

export default OurServices