import React from "react"

export default function HeroContent() {
  return (
    <main className="absolute bottom-8 left-8 z-20 max-w-2xl">
      <div className="text-left">
        <div
          className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 relative"
          style={{
            filter: "url(#glass-effect)",
          }}
        >
          <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
          <svg className="w-4 h-4 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <span className="text-white/90 text-sm font-body font-medium relative z-10">Boa Vista - Roraima</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl md:leading-tight tracking-tight font-title font-extrabold text-white mb-6">
          <div className="font-regular">Chega</div> de conviver<br />
          com a dor.
        </h1>

        {/* Description */}
        <p className="text-lg font-body font-regular text-white/80 mb-8 leading-relaxed max-w-xl">
          Terapias integrativas como Ozonioterapia, PRP e Laserterapia, com acompanhamento profissional especializado.
        </p>

        {/* Buttons */}
        <div className="flex items-center gap-4 flex-wrap">
          <button className="px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-body font-regular text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
            Nossos Tratamentos
          </button>
          <button className="px-8 py-3 rounded-full bg-white text-text font-body font-regular text-sm transition-all duration-200 hover:bg-white/90 cursor-pointer">
            Agendar Consulta
          </button>
        </div>
      </div>
    </main>
  )
}
