import React from "react"
import RippleButton from "./ripple-button"

export default function Header() {
  return (
    <header className="relative z-20 flex items-center justify-between p-6">
      {/* Logo */}
      <div className="flex items-center w-24">
        <img 
          src="/src/assets/logos/logo-oficial.png" 
          alt="Mary Blue - Saúde Integrativa" 
          className="h-12 w-auto object-contain ml-5"
        />
      </div>

      {/* Navigation */}
      <nav className="flex items-center space-x-2">
        <a
          href="#tratamentos"
          className="text-white/80 hover:text-white text-sm font-body font-regular px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Tratamentos
        </a>
        <a
          href="#sobre"
          className="text-white/80 hover:text-white text-sm font-body font-regular px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Sobre
        </a>
        <a
          href="#contato"
          className="text-white/80 hover:text-white text-sm font-body font-regular px-4 py-2 rounded-full hover:bg-white/10 transition-all duration-200"
        >
          Contato
        </a>
      </nav>

      {/* CTA Button Group with Arrow */}
      <div className="relative flex items-center group" style={{ filter: "url(#gooey-filter)" }}>
        <button className="absolute right-0 px-3 py-2 rounded-full bg-white text-text font-body font-medium text-sm transition-all duration-300 hover:bg-secondary cursor-pointer h-10 flex items-center justify-center -translate-x-12 group-hover:-translate-x-20 z-0">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </button>
        <RippleButton className="z-10">
          Agendar Consulta
        </RippleButton>
      </div>
    </header>
  )
}
