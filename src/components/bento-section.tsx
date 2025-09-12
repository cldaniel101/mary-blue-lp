import React from "react"

const TherapyCard = ({ title, benefits, indications, imageSlot }: { title: string; benefits: string; indications: string; imageSlot?: React.ReactNode }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-4 relative z-10">
      <h3 className="text-foreground text-xl font-semibold leading-tight">
        {title}
      </h3>
      
      <div className="flex flex-col gap-3">
        <div>
          <p className="text-sm font-medium text-foreground/90 mb-1">
            <strong>Benefícios:</strong>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {benefits}
          </p>
        </div>
        
        <div>
          <p className="text-sm font-medium text-foreground/90 mb-1">
            <strong>Indicado para:</strong>
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {indications}
          </p>
        </div>
      </div>

      {/* Espaço para imagem */}
      <div className="w-full h-32 bg-gray-100/10 rounded-lg border-2 border-dashed border-gray-300/30 flex items-center justify-center mt-4">
        <p className="text-xs text-muted-foreground text-center">
          Espaço para imagem<br />do tratamento
        </p>
      </div>
    </div>
  </div>
)

export function BentoSection() {
  const therapies = [
    {
      title: "Ozonioterapia — modulação inflamatória e recuperação funcional",
      benefits: "tratamento não invasivo com efeitos rápidos; auxilia na redução de dor e edema; melhora microcirculação e oxigenação tecidual.",
      indications: "dores musculares e articulares, lombalgia, cervicalgia, pontos-gatilho, tendinites, processos inflamatórios e suporte à reabilitação."
    },
    {
      title: "Laserterapia — analgesia e reparo tecidual",
      benefits: "fotobiomodulação para alívio da dor, redução de inflamações e aceleração da cicatrização/recuperação.",
      indications: "dores agudas e crônicas, lesões musculares, entorses, bursites/tendinites, pós-esforço, sensibilidades em pontos-gatilho e rigidez muscular."
    },
    {
      title: "Terapia Neural — equilíbrio do sistema neurovegetativo",
      benefits: "regula respostas do sistema nervoso autônomo, ajudando a interromper circuitos de dor e hipersensibilidade; aplicações rápidas e direcionadas.",
      indications: "dores crônicas, enxaquecas/cefaleias, desconfortos na coluna, alterações miofasciais e quadros persistentes após outras abordagens."
    },
    {
      title: "PRP (Plasma Rico em Plaquetas, autólogo) — apoio à regeneração",
      benefits: "utiliza plaquetas do próprio paciente para fornecer fatores de crescimento que auxiliam a recuperação de tecidos e a redução de inflamações.",
      indications: "dores em joelhos, ombros e outras articulações, tendinopatias e lesões por sobrecarga — sempre mediante avaliação individualizada."
    },
    {
      title: "Massoterapia — relaxamento, dor e tensão muscular",
      benefits: "melhora circulação, flexibilidade e qualidade do sono; reduz tensão muscular e estresse; contribui para analgesia global.",
      indications: "dores musculares difusas, rigidez, estresse, fadiga e manutenção do bem-estar."
    }
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[800px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Benefícios & Indicações por terapia
            </h2>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 gap-6 z-10">
          {therapies.map((therapy, index) => (
            <TherapyCard key={index} {...therapy} />
          ))}
        </div>
      </div>
    </section>
  )
}
