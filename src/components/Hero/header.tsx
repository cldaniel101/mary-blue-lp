import React, { useState, useEffect } from "react"
import RippleButton from "./ripple-button"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Fechar menu ao redimensionar para desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) { // lg = 1024px
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevenir scroll quando menu está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#como-funciona", label: "Como Funciona" },
    { href: "#features-section", label: "Tratamentos" },
    { href: "#testimonials-section", label: "Depoimentos" },
    { href: "#faq-section", label: "FAQ" },
    { href: "#localizacao", label: "Localização" }
  ]

  const handleMenuClick = (href: string) => {
    setIsMenuOpen(false)
    // Scroll suave para a seção
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header className="relative z-20 flex items-center justify-between p-6 flex-shrink-0">
        {/* Logo */}
        <div className="flex items-center w-24">
          <img 
            src="/src/assets/logos/logo-oficial.png" 
            alt="Mary Blue - Saúde Integrativa" 
            className="h-12 w-auto object-contain ml-5"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-2">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/80 hover:text-white text-sm font-body font-regular px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Placeholder for mobile menu button space */}
        <div className="lg:hidden w-10 h-10"></div>

        {/* Desktop CTA Button Group with Arrow */}
        <div className="hidden lg:flex relative items-center group" style={{ filter: "url(#gooey-filter)" }}>
          <button className="absolute right-0 px-3 py-2 rounded-full bg-white text-text font-body font-medium text-sm transition-all duration-300 hover:bg-secondary cursor-pointer h-10 flex items-center justify-center -translate-x-12 group-hover:-translate-x-20 z-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <RippleButton className="z-10" variant="default">
            Agendar Consulta
          </RippleButton>
        </div>
      </header>

      {/* Mobile Menu Button - Outside header to avoid overlay issues */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="lg:hidden fixed top-6 right-6 z-[60] w-12 h-12 flex flex-col items-center justify-center bg-black/20 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-300 hover:bg-black/30"
        aria-label="Menu"
      >
        <div className="relative w-6 h-6 flex flex-col items-center justify-center">
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'rotate-45' : '-translate-y-2'
            }`}
          />
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span 
            className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ease-in-out ${
              isMenuOpen ? '-rotate-45' : 'translate-y-2'
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-50 transition-all duration-500 ease-in-out lg:hidden ${
          isMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
      >
        {/* Background Blur */}
        <div 
          className={`absolute inset-0 backdrop-blur-xl transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'bg-primary/90' : 'bg-primary/0'
          }`}
          style={{
            background: isMenuOpen 
              ? 'linear-gradient(135deg, rgba(60, 141, 188, 0.95) 0%, rgba(46, 58, 68, 0.95) 100%)' 
              : 'transparent'
          }}
        />

        {/* Menu Content */}
        <div 
          className={`relative h-full flex flex-col justify-center items-center transition-all duration-700 ease-out ${
            isMenuOpen 
              ? 'translate-y-0 opacity-100' 
              : 'translate-y-8 opacity-0'
          }`}
        >
          <nav className="flex flex-col items-center space-y-8">
            {menuItems.map((item, index) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => handleMenuClick(item.href)}
                className={`text-white text-xl font-body font-medium transition-all duration-500 ease-out hover:text-secondary hover:scale-110 ${
                  isMenuOpen 
                    ? 'translate-y-0 opacity-100' 
                    : 'translate-y-4 opacity-0'
                }`}
                style={{
                  transitionDelay: isMenuOpen ? `${index * 100}ms` : '0ms'
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA Button */}
          <div 
            className={`mt-12 transition-all duration-700 ease-out ${
              isMenuOpen 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-8 opacity-0'
            }`}
            style={{
              transitionDelay: isMenuOpen ? '600ms' : '0ms'
            }}
          >
            <RippleButton 
              onClick={() => setIsMenuOpen(false)}
              className="text-lg px-8 py-4"
              variant="default"
            >
              Agendar Consulta
            </RippleButton>
          </div>
        </div>
      </div>
    </>
  )
}
