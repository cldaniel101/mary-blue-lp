
import React from "react"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqData = [
  {
    question: "O que é a Mary Blue Life?",
    answer:
      "A Mary Blue Life é uma Biomédica Esteta, ozonioterapeuta e especialista em práticas integrativas. Ozonioterapia, laserterapia, Terapia Neural, Massoterapia Chinesa. Nosso objetivo é oferecer tratamentos eficazes e com resultados que aliviam dores, restauram a funcionalidade e promovem uma vida mais saudável.",
  },
  {
    question: "Principal objetivo?",
    answer:
      "Atender com as Práticas Integrativas disponíveis no SUS – (PNPIC), é um tratamento holístico, um olhar de forma integral, unindo saúde física, mental, emocional. Proporcionando saúde e bem-estar. Podendo considerar de tais patologias: Dores crônicas e tensões, Dores musculares e articulares (coluna, joelho, ombro, quadril, hérnia de disco), Fibromialgia, Processos inflamatórios, Lesões e recuperação funcional, Dores de cabeça e enxaqueca, Disfunção mitocondrial.",
  },
  {
    question: "Qual o nível de segurança dos protocolos?",
    answer:
      "Nossos protocolos são seguros e individualizados. Antes de iniciar qualquer terapia, realizamos uma avaliação personalizada, explicando benefícios e possíveis limitações para cada quadro clínico.",
  },
  {
    question: "Todas as Práticas são usadas dentro de uma janela terapêutica?",
    answer:
      "Nossas terapias são consideradas seguras e de baixo risco, pois utilizam métodos integrativos que respeitam a fisiologia do corpo. Antes de qualquer procedimento, realizamos uma avaliação individualizada, identificando possíveis contraindicações e ajustando o protocolo para a sua condição e quadro clínico do paciente. \nO mais importante é que os tratamentos são conduzidos por profissionais habilitados. A aplicação dentro de uma janela terapêutica, garantindo que cada procedimento seja realizado com segurança, técnica e cuidado.",
  },
  {
    question: "Quanto custa uma sessão?",
    answer:
      "Os valores são bem acessíveis, temos sessões a partir de R$150, o valor pode variar conforme a terapia indicada e a necessidade de cada paciente.",
  },
  {
    question: "Quantas sessões são necessárias?",
    answer:
      "Depende do quadro clínico e da resposta individual. Em muitos pacientes, os primeiros resultados já aparecem nas primeiras sessões. Após a avaliação, indicamos um plano de tratamento adequado para cada caso clínico.",
  },
  {
    question: "Preciso de encaminhamento médico para iniciar?",
    answer:
      "Necessariamente não, mas se o paciente já estiver com o diagnóstico médico, adianta bem a avaliação e o início da terapia mais apropriada para a sua necessidade.",
  },
  {
    question: "Como agendar uma consulta?",
    answer:
      "Você pode agendar de forma prática pelo WhatsApp (95) 98407-8006 ou diretamente pelo botão disponível aqui no site.",
  },
  {
    question: "Onde fica a clínica?",
    answer:
      "Nossa clínica está localizada em Boa Vista – Roraima, em um espaço acolhedor e preparado para oferecer conforto e segurança em cada atendimento.",
  },
  {
    question: "Posso combinar terapias (ex.: Ozônio + Laser + Massoterapia)? Em que ordem costuma funcionar melhor?",
    answer:
      "Sim! As terapias integrativas podem ser associadas, porém precisa do olhar clínico e necessidade do quadro clínico do paciente. Isso de forma segura que ofereça resultados. Muitas vezes, a associação de métodos como ozonioterapia, laserterapia e massoterapia acelera o processo de alívio da dor, melhora a circulação e promove regeneração tecidual. A ordem e a escolha das terapias dependem de uma avaliação individualizada, considerando sua condição clínica, intensidade da dor e objetivos do tratamento.",
  },
  {
    question: "Vocês usam Termo de Consentimento e registram parâmetros do procedimento? Como é a higiene e a calibração de equipamentos?",
    answer:
      "Sim. Em cada atendimento, seguimos um padrão rigoroso de biossegurança e ética profissional:\n- Termo de Consentimento – antes do início, explicamos de forma clara os benefícios, possíveis limitações e cuidados, garantindo que o paciente esteja plenamente informado e seguro.\n- Registro de parâmetros – todos os procedimentos são documentados, incluindo técnicas utilizadas, dosagens e respostas do paciente, para acompanhamento preciso da evolução.\n- Higiene e esterilização – utilizamos materiais devidamente esterilizados e seguimos protocolos de assepsia recomendados pelas normas de saúde.\n- Calibração e manutenção de equipamentos – nossos aparelhos passam por revisões e calibrações periódicas, assegurando eficácia, precisão e segurança em cada sessão.\nAssim, garantimos não apenas resultados reais, mas também tranquilidade e confiança para quem confia sua saúde à Mary Blue Life.",
  },
  {
    question: "⏱️ Qual a duração da consulta/sessão?",
    answer:
      "A primeira consulta, com avaliação e explicação detalhada do protocolo, costuma durar entre 40 e 60 minutos. As sessões de tratamento variam conforme a terapia escolhida, mas geralmente ficam entre 30 e 50 minutos.",
  },
  {
    question: "💳 Quais são as formas de pagamento?",
    answer:
      "Aceitamos:\n- Dinheiro\n- Pix\n- Cartões de crédito e débito (parcelamento sob consulta)\nNosso objetivo é oferecer facilidade e acessibilidade para que você tenha o melhor tratamento sem complicações.",
  },
  {
    question: "📅 Qual é a política de remarcação e cancelamento?",
    answer:
      "Sabemos que imprevistos acontecem. Por isso:\n- As sessões podem ser remarcadas com até 24h de antecedência, sem custo.\n- Cancelamentos feitos em cima da hora podem implicar em cobrança parcial ou perda da sessão, dependendo do caso.\nEssa política existe para garantir a organização da agenda e o melhor atendimento para todos os pacientes.",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
}

const FAQItem = ({ question, answer, isOpen, onToggle }: FAQItemProps) => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    onToggle()
  }
  return (
    <div
      className={`w-full bg-[rgba(231,236,235,0.08)] shadow-[0px_2px_4px_rgba(0,0,0,0.16)] overflow-hidden rounded-[10px] outline outline-1 outline-border outline-offset-[-1px] transition-all duration-500 ease-out cursor-pointer`}
      onClick={handleClick}
    >
      <div className="w-full px-5 py-[18px] pr-4 flex justify-between items-center gap-5 text-left transition-all duration-300 ease-out">
        <div className="flex-1 text-foreground text-lg md:text-xl font-medium leading-6 break-words">{question}</div>
        <div className="flex justify-center items-center">
          <ChevronDown
            className={`w-6 h-6 text-muted-foreground-dark transition-all duration-500 ease-out ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
          />
        </div>
      </div>
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
        style={{
          transitionProperty: "max-height, opacity, padding",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div
          className={`px-5 transition-all duration-500 ease-out ${isOpen ? "pb-[18px] pt-2 translate-y-0" : "pb-0 pt-0 -translate-y-2"}`}
        >
          <div className="text-foreground/80 text-base md:text-lg font-normal leading-6 break-words whitespace-pre-line">
            {answer}
          </div>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())
  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }
  return (
    <section className="w-full pt-[66px] pb-20 md:pb-40 px-5 relative flex flex-col justify-center items-center">
      <div className="w-[300px] h-[500px] absolute top-[150px] left-1/2 -translate-x-1/2 origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[100px] z-0" />
      <div className="self-stretch pt-8 pb-8 md:pt-14 md:pb-14 flex flex-col justify-center items-center gap-2 relative z-10">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="w-full max-w-[435px] text-center text-foreground text-4xl font-semibold leading-10 break-words">
            Perguntas Frequentes
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-lg md:text-xl font-medium leading-[22px] break-words">
            Tudo o que você precisa saber sobre nossos serviços e como podemos ajudar no seu bem-estar.
          </p>
        </div>
      </div>
      <div className="w-full max-w-[600px] pt-0.5 pb-10 flex flex-col justify-start items-start gap-4 relative z-10">
        {faqData.map((faq, index) => (
          <FAQItem key={index} {...faq} isOpen={openItems.has(index)} onToggle={() => toggleItem(index)} />
        ))}
      </div>
    </section>
  )
}
