import React from "react"
import { Check, Heart, Award, Users, DollarSign } from "lucide-react"

interface BenefitItemProps {
  icon: React.ReactNode
  text: string
  delay: number
}

const BenefitItem = ({ icon, text, delay }: BenefitItemProps) => (
  <div 
    className="group flex items-start gap-4 p-4 md:p-6 rounded-xl bg-gradient-to-br from-white/80 to-white/60 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all hover:scale-105 animate-in slide-in-from-left-4 fade-in duration-700"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Ícone de check */}
    <div className="hidden flex-shrink-0 w-6 h-6 rounded-full bg-primary sm:flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
      <Check className="w-4 h-4 text-white" />
    </div>
    
    {/* Ícone temático */}
    <div className="flex-shrink-0 text-primary group-hover:text-primary/80 transition-colors duration-300">
      {icon}
    </div>
    
    {/* Texto */}
    <p className="text-foreground text-lg md:text-xl leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
      {text}
    </p>
  </div>
)

export function WhyChooseSection() {
  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Alívio eficaz de dores crônicas, articulares e musculares",
      delay: 0
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Tratamentos naturais com biomolécula, regeneração celular",
      delay: 150
    },
    {
      icon: <Award className="w-6 h-6" />,
      text: "Profissional qualificada e credenciada",
      delay: 300
    },
    {
      icon: <Users className="w-6 h-6" />,
      text: "+4 anos de experiência e mais de 500 clientes atendidos em Roraima",
      delay: 450
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      text: "Sessões acessíveis a partir de R$150",
      delay: 600
    }
  ]

  return (
    <section className="w-full px-8 md:px-16 lg:px-20 xl:px-24 py-16 md:py-24 flex flex-col justify-center items-center overflow-visible bg-transparent relative">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbes em gradiente */}
        <div className="absolute top-1/4 right-1/5 w-96 h-96 bg-gradient-to-br from-primary/6 to-accent/8 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/6 w-80 h-80 bg-gradient-to-tl from-accent/4 to-primary/8 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 right-1/3 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: "5s" }} />
      </div>

      <div className="w-full max-w-6xl relative flex flex-col justify-start items-center gap-12 md:gap-16 z-10">
        
        {/* Card principal */}
        <div className="relative w-full">
          {/* Card de fundo com efeito glass */}
          <div 
            className="absolute inset-0 rounded-3xl border border-white/20 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, rgba(60, 141, 188, 0.08) 0%, rgba(230, 244, 250, 0.12) 50%, rgba(168, 213, 186, 0.06) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          >
            {/* Destaque superior */}
            <div className="absolute top-0 left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            {/* Destaques laterais */}
            <div className="absolute top-1/4 bottom-1/4 left-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
            <div className="absolute top-1/4 bottom-1/4 right-0 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
          </div>

          {/* Conteúdo */}
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center gap-8 lg:gap-12">
            
            {/* Header */}
            <div className="flex flex-col justify-center items-center gap-4 text-center animate-in slide-in-from-bottom-4 fade-in duration-700">
              <h2 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-bold leading-tight max-w-4xl">
                Por que escolher a Mary Blue – Saúde Integrativa?
              </h2>
              
              {/* Linha de apoio */}
              <div className="flex items-center justify-center gap-2 mt-4">
                <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                <p className="text-xl md:text-2xl text-primary/80 font-medium italic animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: "200ms" }}>
                  Azul do ar e do Ozônio, símbolo de renovação, energia e vitalidade.
                </p>
                <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
              </div>
            </div>

            {/* Lista de benefícios */}
            <div className="w-full max-w-4xl grid grid-cols-1 gap-4 md:gap-6">
              {benefits.map((benefit, index) => (
                <BenefitItem
                  key={index}
                  icon={benefit.icon}
                  text={benefit.text}
                  delay={benefit.delay}
                />
              ))}
            </div>

            {/* Call to Action */}
            <div className="flex flex-col items-center gap-6 mt-8 animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: "800ms" }}>
              <p className="text-foreground/80 text-xl md:text-2xl text-center max-w-2xl leading-relaxed">
                Experimente uma abordagem integrativa que coloca seu bem-estar em primeiro lugar.
              </p>
              <a href="https://wa.me/5595984078006" target="_blank" rel="noopener noreferrer">
                <button className="px-8 py-4 bg-primary text-white font-medium text-xl rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Agendar Consulta
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
