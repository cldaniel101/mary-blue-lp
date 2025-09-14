import React from 'react'
import Hero from "./components/Hero/Hero"
import { SocialProof } from "./components/social-proof"
import { BentoSection } from "./components/BentoSection/bento-section"
import { TestimonialGridSection } from "./components/testimonial-grid-section"
import { FAQSection } from "./components/faq-section"
import { CTASection } from "./components/cta-section"
import { FooterSection } from "./components/footer-section"
import { AnimatedSection } from "./components/animated-section"
import { HowItWorksSection } from "./components/how-it-works-section"
import { AboutSection } from "./components/about-section"
import LocationHoursSection from "./components/Hero/location_hours_section"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden pb-0">
      <div className="relative z-10">
        <Hero />
        
        <AnimatedSection className="relative z-10 max-w-[1320px] mx-auto px-6 mt-[100px] md:mt-[100px]" delay={0.1}>
          <SocialProof />
        </AnimatedSection>

        <AnimatedSection id="sobre" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.15}>
          <AboutSection />
        </AnimatedSection>

        <AnimatedSection id="como-funciona" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <HowItWorksSection />
        </AnimatedSection>
        
        <AnimatedSection id="features-section" className="relative z-10 max-w-[1320px] mx-auto mt-16" delay={0.2}>
          <BentoSection />
        </AnimatedSection>
        
        <AnimatedSection
          id="testimonials-section"
          className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16"
          delay={0.2}
        >
          <TestimonialGridSection />
        </AnimatedSection>
        
        <AnimatedSection id="faq-section" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-16" delay={0.2}>
          <FAQSection />
        </AnimatedSection>
        
        <AnimatedSection id="contato" className="relative z-10 max-w-[1320px] mx-auto mt-8 md:mt-8" delay={0.2}>
          <CTASection />
        </AnimatedSection>
        
        <AnimatedSection id="localizacao" className="relative z-10 mt-8 md:mt-16" delay={0.2}>
          <LocationHoursSection />
        </AnimatedSection>
        
        <FooterSection />
      </div>
    </div>
  )
}

export default App
