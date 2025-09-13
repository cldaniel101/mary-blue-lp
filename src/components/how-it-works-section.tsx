import React from "react"
import { FileText, ClipboardList, Zap, TrendingUp } from "lucide-react"

const ProcessStep = ({ 
  number, 
  title, 
  description, 
  icon,
  delay 
}: { 
  number: string;
  title: string; 
  description: string; 
  icon: React.ReactNode;
  delay: number;
}) => (
  <div 
    className="group relative flex flex-col items-center text-center p-6 md:p-8 animate-in slide-in-from-bottom-4 fade-in duration-700"
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* Connecting Line (hidden on last item) */}
    <div className="hidden md:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/30 via-primary/20 to-transparent -translate-x-1/2 -translate-y-1/2 group-last:hidden" />
    
    {/* Step Circle with Icon */}
    <div className="relative z-10 w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
      <div className="relative z-10 text-white">
        {icon}
      </div>
      
      {/* Step Number */}
      <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-secondary-foreground text-sm font-bold shadow-md">
        {number}
      </div>
    </div>

    {/* Content */}
    <div className="space-y-3 max-w-sm">
      <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
        {title}
      </h3>
      <p className="text-foreground/80 text-sm md:text-base leading-relaxed">
        {description}
      </p>
    </div>

    {/* Hover Effect Background */}
    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -m-4" />
  </div>
)

export function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Avaliação",
      description: "Conversa inicial e exame físico direcionado para entender sua dor, histórico e objetivos.",
      icon: <FileText className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      number: "2", 
      title: "Protocolo",
      description: "Plano personalizado que combina as terapias mais adequadas ao seu caso, com metas e critérios de evolução.",
      icon: <ClipboardList className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      number: "3",
      title: "Sessões", 
      description: "Aplicações objetivas, não invasivas quando possível, ajustadas conforme respostas clínicas em cada encontro.",
      icon: <Zap className="w-8 h-8 md:w-10 md:h-10" />
    },
    {
      number: "4",
      title: "Acompanhamento",
      description: "Reavaliações periódicas, orientações de autocuidado e ajustes do protocolo para consolidar resultados.",
      icon: <TrendingUp className="w-8 h-8 md:w-10 md:h-10" />
    }
  ]

  return (
    <section className="w-full px-8 md:px-16 lg:px-20 xl:px-24 py-16 md:py-24 flex flex-col justify-center items-center overflow-visible bg-transparent relative">
      {/* Background Blur Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-[120px] -z-10" />
      
      <div className="w-full max-w-7xl relative flex flex-col justify-start items-center gap-12 md:gap-16">
        {/* Header */}
        <div className="flex flex-col justify-center items-center gap-4 text-center animate-in slide-in-from-bottom-4 fade-in duration-700">
          <h2 className="text-foreground text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-[66px] max-w-4xl">
            Como funciona
            <span className="block text-2xl md:text-3xl lg:text-4xl font-medium text-foreground/70 mt-2">
              (passo a passo)
            </span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 relative">
          {/* Connecting Line for Desktop */}
          <div className="hidden xl:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
          
          {steps.map((step, index) => (
            <ProcessStep
              key={index}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
              delay={index * 150}
            />
          ))}
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-center gap-6 mt-8 animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: "600ms" }}>
          <p className="text-foreground/80 text-lg md:text-xl text-center max-w-2xl leading-relaxed">
            Cada etapa é cuidadosamente planejada para garantir os melhores resultados no seu tratamento.
          </p>
          <a href="https://wa.me/5595984078006" target="_blank" rel="noopener noreferrer">
            <button className="px-8 py-4 bg-primary text-white font-medium text-lg rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105">
              Agendar Avaliação
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
