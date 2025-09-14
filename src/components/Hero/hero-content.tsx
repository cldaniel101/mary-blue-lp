import React from "react"
import RippleButton from "./ripple-button"

export default function HeroContent() {
  return (
    <main className="flex-1 flex flex-col z-20 min-h-0">
      {/* Grid Container */}
      <div className="flex-1 flex flex-col lg:grid lg:grid-cols-2 lg:items-end min-h-0">
        
        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex flex-col justify-end flex-1 lg:h-auto px-6 sm:px-8 pb-8 lg:px-12 lg:pb-12 order-1 lg:order-1 mx-8 md:mx-12 lg:mx-0">
          <div className="text-left max-w-2xl">
            <div
              className="inline-flex flex-row items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm mb-6 relative"
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

            {/* Título Principal */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl leading-tight tracking-tight font-title font-extrabold text-white mb-4 lg:mb-6">
              <div className="font-regular">Chega</div> de conviver<br />
              com a dor.
            </h1>

            {/* Descrição */}
            <p className="text-sm sm:text-base md:text-lg font-body font-regular text-white/80 mb-6 lg:mb-8 leading-relaxed max-w-xl">
              Terapias integrativas como Ozonioterapia, PRP e Laserterapia, com acompanhamento profissional especializado.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button className="px-9 sm:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-body font-regular text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
                Nossos Tratamentos
              </button>
              <div className="w-full sm:w-auto">
                <RippleButton variant="default">
                  Agendar Consulta
                </RippleButton>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem Mary Blue */}
        <div className="relative flex items-end justify-center lg:justify-end flex-1 lg:h-auto px-4 lg:px-28 order-2 lg:order-2 mt-4 lg:mt-0">
          <div className="relative mb-4 lg:mb-0">
            {/* Gradiente atrás da imagem para melhor integração */}
            <div className="absolute -bottom-4 -left-4 -right-4 h-24 lg:h-32 bg-gradient-to-t from-[#3C8DBC]/20 via-[#3C8DBC]/10 to-transparent rounded-full blur-xl"></div>
            
            {/* Imagem Mary Blue */}
            <img 
              src="/src/assets/img/mary-blue-mock-circle.png" 
              alt="Mary Blue - Profissional de Terapias Integrativas" 
              className="relative z-10 w-[70%] lg:w-full m-auto h-auto object-contain transition-all duration-500 hover:scale-105 hover:drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 10px 25px rgba(60, 141, 188, 0.3))",
              }}
            />
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 lg:-top-8 -left-4 lg:-left-8 w-12 lg:w-16 h-12 lg:h-16 rounded-full bg-gradient-to-br from-[#A8D5BA]/30 to-[#E6F4FA]/20 blur-sm animate-pulse"></div>
            <div className="absolute -bottom-3 lg:-bottom-6 -right-3 lg:-right-6 w-8 lg:w-12 h-8 lg:h-12 rounded-full bg-gradient-to-br from-[#3C8DBC]/40 to-transparent blur-sm animate-pulse delay-1000"></div>
            
            {/* Elementos flutuantes adicionais */}
            <div className="absolute top-1/4 -right-8 w-6 h-6 rounded-full bg-[#E6F4FA]/20 animate-bounce delay-500"></div>
            <div className="absolute top-1/3 -left-6 w-4 h-4 rounded-full bg-[#A8D5BA]/30 animate-bounce delay-700"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
