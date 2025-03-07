import React from 'react'
import Hero from '../components/Home/Hero'
import FirstSection from '../components/AboutUs/FirstSection'
import WelcomeToOurCompany from '../components/WelcomeToOurCompany'

const AboutUs: React.FC = () => {
  return (
    <div className="">
        <Hero />
        <FirstSection />
        <WelcomeToOurCompany />
    </div>
  )
}

export default AboutUs