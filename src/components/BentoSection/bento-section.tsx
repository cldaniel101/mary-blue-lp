import React from "react"

const TherapyCard = ({ title, benefits, indications }: { title: string; benefits: string; indications: string }) => (
  <div className="group flip-container relative w-full h-64 md:h-72 lg:h-80 cursor-pointer">
    <div className="flip-inner w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Face frontal - Título */}
      <div className="flip-face flip-front absolute w-full h-full backface-hidden rounded-2xl border border-white/20 overflow-hidden">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(60, 141, 188, 0.12) 0%, rgba(230, 244, 250, 0.18) 50%, rgba(168, 213, 186, 0.08) 100%)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
          <h3 className="text-foreground text-2xl font-bold text-center leading-tight">
            {title}
          </h3>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-4 right-4 w-3 h-3 bg-primary/30 rounded-full" />
        <div className="absolute bottom-4 left-4 w-2 h-2 bg-accent/40 rounded-full" />
      </div>

      {/* Face traseira - Informações */}
      <div className="flip-face flip-back absolute w-full h-full backface-hidden rounded-2xl border border-white/20 overflow-hidden rotate-y-180">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(60, 141, 188, 0.15) 0%, rgba(230, 244, 250, 0.20) 50%, rgba(168, 213, 186, 0.10) 100%)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 rounded-2xl" />
        
        {/* Content */}
        <div className="absolute inset-0 p-5 flex flex-col justify-center gap-4 z-10">
          <div>
            <p className="text-sm font-semibold text-primary mb-2">
              Benefícios:
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {benefits}
            </p>
          </div>
          
          <div>
            <p className="text-sm font-semibold text-primary mb-2">
              Indicado para:
            </p>
            <p className="text-sm text-foreground/90 leading-relaxed">
              {indications}
            </p>
          </div>
        </div>
        
        {/* Back decorative elements */}
        <div className="absolute top-4 left-4 w-2 h-2 bg-primary/40 rounded-full" />
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-accent/30 rounded-full" />
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const therapies = [
    {
      title: "Ozonioterapia",
      benefits: "tratamento não invasivo com efeitos rápidos; auxilia na redução de dor e edema; melhora microcirculação e oxigenação tecidual.",
      indications: "dores musculares e articulares, lombalgia, cervicalgia, pontos-gatilho, tendinites, processos inflamatórios e suporte à reabilitação."
    },
    {
      title: "Laserterapia",
      benefits: "fotobiomodulação para alívio da dor, redução de inflamações e aceleração da cicatrização/recuperação.",
      indications: "dores agudas e crônicas, lesões musculares, entorses, bursites/tendinites, pós-esforço, sensibilidades em pontos-gatilho e rigidez muscular."
    },
    {
      title: "Terapia Neural",
      benefits: "regula respostas do sistema nervoso autônomo, ajudando a interromper circuitos de dor e hipersensibilidade; aplicações rápidas e direcionadas.",
      indications: "dores crônicas, enxaquecas/cefaleias, desconfortos na coluna, alterações miofasciais e quadros persistentes após outras abordagens."
    },
    {
      title: "PRP",
      benefits: "utiliza plaquetas do próprio paciente para fornecer fatores de crescimento que auxiliam a recuperação de tecidos e a redução de inflamações.",
      indications: "dores em joelhos, ombros e outras articulações, tendinopatias e lesões por sobrecarga — sempre mediante avaliação individualizada."
    },
    {
      title: "Massoterapia",
      benefits: "melhora circulação, flexibilidade e qualidade do sono; reduz tensão muscular e estresse; contribui para analgesia global.",
      indications: "dores musculares difusas, rigidez, estresse, fadiga e manutenção do bem-estar."
    }
  ]

  return (
    <section className="w-full px-8 md:px-16 lg:px-20 xl:px-24 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full max-w-7xl py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[800px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Benefícios & Indicações por terapia
            </h2>
          </div>
        </div>
        
        {/* Grid com última linha centralizada */}
        <div className="self-stretch z-10">
          {/* Primeiros 4 cards em grid normal */}
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {therapies.slice(0, 4).map((therapy, index) => (
              <div
                key={index}
                className="animate-in slide-in-from-bottom-4 fade-in duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <TherapyCard {...therapy} />
              </div>
            ))}
          </div>
          
          {/* Último card centralizado */}
          <div className="mt-8 md:mt-10 lg:mt-12 flex justify-center">
            <div 
              className="w-full md:w-1/2 2xl:w-1/3 animate-in slide-in-from-bottom-4 fade-in duration-700"
              style={{ animationDelay: `${4 * 150}ms` }}
            >
              <TherapyCard {...therapies[4]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
