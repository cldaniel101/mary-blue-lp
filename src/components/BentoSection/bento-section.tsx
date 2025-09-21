const TherapyCard = ({ title, benefits, indications }: { title: string; benefits: string; indications: string }) => (
  <div className="group flip-container relative w-full cursor-pointer">
    {/* Card Container */}
    <div className="relative w-full h-[420px] md:h-[520px] lg:h-[600px]">
      <div className="flip-inner w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
      {/* Face frontal - Título */}
      <div className="flip-face flip-front absolute w-full h-full backface-hidden rounded-2xl border border-white/20 overflow-hidden">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(60, 141, 188, 0.12) 0%, rgba(230, 244, 250, 0.18) 50%, rgba(168, 213, 186, 0.08) 100%)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 rounded-2xl" />
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center justify-center p-10 z-10">
          <h3 className="text-foreground text-3xl md:text-4xl lg:text-5xl font-extrabold text-center leading-tight font-poppins">
            {title}
          </h3>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-6 right-6 w-4 h-4 bg-primary/30 rounded-full" />
        <div className="absolute bottom-6 left-6 w-3 h-3 bg-accent/40 rounded-full" />
      </div>

      {/* Face traseira - Informações */}
      <div className="flip-face flip-back absolute w-full h-full backface-hidden rounded-2xl border border-white/20 overflow-hidden rotate-y-180">
        {/* Background with blur effect */}
        <div
          className="absolute inset-0 rounded-2xl"
          style={{
            background: "linear-gradient(135deg, rgba(60, 141, 188, 0.15) 0%, rgba(230, 244, 250, 0.20) 50%, rgba(168, 213, 186, 0.10) 100%)",
            backdropFilter: "blur(14px)",
            WebkitBackdropFilter: "blur(14px)",
          }}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-accent/8 rounded-2xl" />
        
        {/* Content */}
        <div className="absolute inset-0 p-10 flex flex-col justify-center gap-8 z-10">
          <div>
            <p className="text-lg md:text-xl font-bold text-primary mb-3 font-poppins">
              Benefícios:
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-inter">
              {benefits}
            </p>
          </div>
          
          <div>
            <p className="text-lg md:text-xl font-bold text-primary mb-3 font-poppins">
              Indicado para:
            </p>
            <p className="text-base md:text-lg text-foreground/90 leading-relaxed font-inter">
              {indications}
            </p>
          </div>
        </div>
        
        {/* Back decorative elements */}
        <div className="absolute top-6 left-6 w-3 h-3 bg-primary/40 rounded-full" />
        <div className="absolute bottom-6 right-6 w-4 h-4 bg-accent/30 rounded-full" />
      </div>
    </div>
    </div>
    
    {/* CTA Button - Appears on hover below the card */}
    <div className="relative overflow-hidden">
      <div className="transform translate-y-[-20px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out mt-6">
        <div className="flex justify-center">
          <a 
            href={`https://wa.me/5595984078006?text=Olá! Gostaria de agendar uma consulta para ${title}.`}
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-white font-medium text-base rounded-full shadow-lg hover:bg-primary/90 hover:shadow-xl transition-all duration-300 hover:scale-105 font-inter"
          >
            Agendar {title}
          </a>
        </div>
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
    <section className="w-full px-4 md:px-12 lg:px-24 xl:px-32 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full max-w-7xl py-12 md:py-20 relative flex flex-col justify-start items-start gap-10">
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
          <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-16 md:gap-20 lg:gap-24">
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
          <div className="mt-16 md:mt-20 lg:mt-24 flex justify-center">
            <div 
              className="w-full md:w-2/3 2xl:w-1/2 animate-in slide-in-from-bottom-4 fade-in duration-700"
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
