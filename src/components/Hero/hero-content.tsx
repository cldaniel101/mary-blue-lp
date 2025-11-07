import RippleButton from "./ripple-button"
import maryBlueMockCircle from '../../assets/img/mary-blue-mock-circle.png'
import { trackLeadEvent } from '../../lib/metaPixel'

export default function HeroContent() {
  const whatsappNumber = "5595984078006"; // +55 95 98407-8006
  const whatsappMsg = encodeURIComponent(
    "Olá, gostaria de agendar uma consulta."
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;
  const handleLeadClick = () => {
    trackLeadEvent()
  }

  return (
    <main className="flex-1 flex flex-col z-20 min-h-0 overflow-hidden">
      {/* Mobile Layout */}
      {/* Ajustes: foto menor, subtítulo maior e tudo na primeira dobra */}
      <div className="md:hidden grid min-h-screen grid-rows-[42vh_1fr]">
        {/* Imagem Hero Mobile - Topo (altura aumentada) */}
        <div className="relative w-full h-full min-h-[260px] overflow-hidden flex items-end justify-center">
          <img
            src={maryBlueMockCircle}
            alt="Mary Blue - Profissional de Terapias Integrativas"
            className="w-fit h-[44vh] object-cover object-top"
            style={{
              filter: "brightness(1.1) contrast(1.05)"
            }}
          />
          {/* Degradê inferior para transição suave (altura reduzida) */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#3C8DBC] via-[#3C8DBC]/80 to-transparent"></div>

          {/* Elementos decorativos flutuantes (mantidos, não afetam altura total) */}
          <div className="absolute top-8 right-6 w-6 h-6 rounded-full bg-[#E6F4FA]/30 animate-bounce delay-300"></div>
          <div className="absolute top-16 left-8 w-4 h-4 rounded-full bg-[#A8D5BA]/40 animate-bounce delay-700"></div>
          <div className="absolute bottom-20 right-12 w-5 h-5 rounded-full bg-[#E6F4FA]/25 animate-pulse delay-1000"></div>
        </div>

        {/* Conteúdo Mobile (compactado para caber na dobra) */}
        <div className="flex-1 px-5 pt-4 pb-5 bg-[#3C8DBC] relative m-[-1px] overflow-hidden">
          {/* Badge de localização (um pouco menor) */}
          <div
            className="inline-flex flex-row items-center px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-sm mb-3 relative"
            style={{
              filter: "url(#glass-effect)",
            }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full" />
            <svg className="w-3 h-3 mr-2 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-white/90 text-xs font-body font-medium relative z-10">Boa Vista - Roraima</span>
          </div>

          {/* Título Principal (tamanho aumentado) */}
          <h1 className="text-4xl sm:text-5xl leading-snug tracking-tight font-title font-regular text-white mb-3">
            <div className="font-extrabold">Livre-se</div> das dores<br />
            e recupere sua qualidade de vida.
          </h1>

          {/* Subtítulo/Descrição (fonte um pouco maior) */}
          <p className="text-base font-body font-regular text-white/85 leading-relaxed mb-5 max-w-md">
            Terapias integrativas como Ozonioterapia, PRP e Laserterapia, você trata a causa do problema e volta a viver sem limitações.
          </p>

          {/* Botões (leves ajustes de espaçamento) */}
          <div className="flex flex-col gap-2">
            <div className="w-full">
              <RippleButton variant="default" href={whatsappHref} onClick={handleLeadClick}>
                Agendar Consulta
              </RippleButton>
            </div>
            <button
              onClick={() => {
                const element = document.getElementById('features-section');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-7 py-2.5 rounded-full bg-transparent border border-white/30 text-white font-body font-regular text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer"
            >
              Nossos Tratamentos
            </button>
          </div>
        </div>
      </div>

      {/* Desktop Layout (inalterado) */}
      <div className="hidden md:grid md:grid-cols-2 md:items-end flex-1 min-h-0 relative">

        {/* Lado Esquerdo - Conteúdo */}
        <div className="flex flex-col justify-end flex-1 md:h-auto px-12 pb-12 overflow-hidden">
          <div className="text-left max-w-2xl mt-12 z-10">
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
            <h1 className="text-4xl sm:text-5xl md:text-6xl leading-tight tracking-tight font-title font-regular text-white mb-4 md:mb-6">
              <div className="font-extrabold">Livre-se</div> das dores<br />
              e recupere sua qualidade de vida.
            </h1>

            {/* Descrição */}
            <p className="text-sm sm:text-base md:text-lg font-body font-regular text-white/80 leading-relaxed max-w-xl mb-6 md:mb-8">
              Terapias integrativas como Ozonioterapia, PRP e Laserterapia, você trata a causa do problema e volta a viver sem limitações.
            </p>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
              <button className="px-9 sm:px-8 py-3 rounded-full bg-transparent border border-white/30 text-white font-body font-regular text-sm transition-all duration-200 hover:bg-white/10 hover:border-white/50 cursor-pointer">
                Nossos Tratamentos
              </button>
              <div className="w-full sm:w-auto">
                <RippleButton variant="default" href={whatsappHref} onClick={handleLeadClick}>
                  Agendar Consulta
                </RippleButton>
              </div>
            </div>
          </div>
        </div>

        {/* Lado Direito - Imagem Mary Blue (Desktop) */}
        <div className="flex relative items-end justify-center md:justify-end flex-1 md:h-auto px-4 md:px-16 lg:px-28 order-2 md:order-2 mt-4 md:mt-0">
          <div className="relative mb-4 md:mb-0">
            {/* Gradiente atrás da imagem para melhor integração */}
            <div className="absolute -bottom-4 -left-4 -right-4 h-24 md:h-28 lg:h-32 bg-gradient-to-t from-[#3C8DBC]/20 via-[#3C8DBC]/10 to-transparent rounded-full blur-xl"></div>

            {/* Imagem Mary Blue */}
            <img
              src={maryBlueMockCircle}
              alt="Mary Blue - Profissional de Terapias Integrativas"
              className="relative z-10 w-[80%] md:w-[90%] lg:w-full m-auto h-auto object-contain transition-all duration-500 hover:scale-105 hover:drop-shadow-2xl"
              style={{
                filter: "drop-shadow(0 10px 25px rgba(60, 141, 188, 0.3))",
              }}
            />

            {/* Elementos decorativos */}
            <div className="absolute -top-4 md:-top-6 lg:-top-8 -left-4 md:-left-6 lg:-left-8 w-12 md:w-14 lg:w-16 h-12 md:h-14 lg:h-16 rounded-full bg-gradient-to-br from-[#A8D5BA]/30 to-[#E6F4FA]/20 blur-sm animate-pulse"></div>
            <div className="absolute -bottom-3 md:-bottom-4 lg:-bottom-6 -right-3 md:-right-4 lg:-right-6 w-8 md:w-10 lg:w-12 h-8 md:h-10 lg:h-12 rounded-full bg-gradient-to-br from-[#3C8DBC]/40 to-transparent blur-sm animate-pulse delay-1000"></div>

            {/* Elementos flutuantes adicionais */}
            <div className="absolute top-1/4 -right-6 md:-right-8 w-6 h-6 rounded-full bg-[#E6F4FA]/20 animate-bounce delay-500"></div>
            <div className="absolute top-1/3 -left-4 md:-left-6 w-4 h-4 rounded-full bg-[#A8D5BA]/30 animate-bounce delay-700"></div>
          </div>
        </div>
      </div>
    </main>
  )
}
