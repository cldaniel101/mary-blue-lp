import { Heart, Shield, Target, Sparkles } from "lucide-react"
import maryBlueImg from '../assets/img/mary-blue-2.jpg'

export function AboutSection() {
  return (
    <section className="w-full px-8 md:px-16 lg:px-20 xl:px-24 py-16 md:py-24 flex flex-col justify-center items-center overflow-visible bg-transparent relative">
      {/* Elementos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Orbes em gradiente */}
        <div className="absolute top-1/3 left-1/6 w-80 h-80 bg-gradient-to-br from-primary/8 to-accent/12 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/3 right-1/6 w-96 h-96 bg-gradient-to-tl from-accent/6 to-primary/10 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: "2s" }} />
        
        {/* Elementos decorativos flutuantes */}
        <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-primary/30 rounded-full animate-bounce" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/5 w-1.5 h-1.5 bg-primary/25 rounded-full animate-bounce" style={{ animationDelay: "5s" }} />
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
          <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            
            {/* Seção da imagem de perfil */}
            <div className="flex-shrink-0 animate-in slide-in-from-left-4 fade-in duration-700">
              <div className="relative">
                {/* Container da imagem com borda em gradiente */}
                <div className="relative w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64">
                  {/* Borda em gradiente */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-primary p-1">
                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                      {/* Imagem de perfil importada */}
                      <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center rounded-full">
                        <img src={maryBlueImg} alt="Mary Blue" className="w-full h-full object-cover rounded-full" />
                      </div>
                    </div>
                  </div>
                  
                  {/* Ícones flutuantes */}
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce" style={{ animationDelay: "1s" }}>
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-secondary rounded-full flex items-center justify-center shadow-xl animate-bounce" style={{ animationDelay: "2s" }}>
                    <Shield className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
            </div>

            {/* Conteúdo textual */}
            <div className="flex-1 text-center lg:text-left space-y-6 animate-in slide-in-from-right-4 fade-in duration-700" style={{ animationDelay: "300ms" }}>
              
              {/* Título */}
              <div className="space-y-2">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Mary Blue Life é mais que um nome, é um propósito.
                </h2>
                <div className="flex items-center justify-center lg:justify-start gap-2">
                  <div className="w-12 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                  <p className="text-lg md:text-xl text-primary font-medium">
                    Saúde Integrativa
                  </p>
                  <div className="w-12 h-0.5 bg-gradient-to-r from-accent to-primary rounded-full" />
                </div>
              </div>

              {/* Descrição */}
              <div className="space-y-4 text-left lg:text-left">
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                  <span className="font-semibold text-primary">👉 “Mary”</span> é o apelido da profissional Biomédica formada, especialista em Ozonioterapia, Laserterapia, Terapia Neural e outras Terapias Integrativas. A qual promove saúde de forma integral unindo corpo, mente e emoções. São práticas utilizadas junto aos tratamentos convencionais e contribuem para bem-estar e qualidade de vida.
                </p>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                  <span className="font-semibold text-primary">👉 “Blue”</span> representa o azul do ar e do ozônio, símbolo de renovação, energia e vitalidade.
                </p>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                  <span className="font-semibold text-primary">👉 “Life”</span> traduz a nossa missão: cuidar da sua saúde para que você viva com mais equilíbrio, bem-estar e liberdade.
                </p>
                <p className="text-foreground/90 text-base md:text-lg leading-relaxed max-w-2xl">
                  Aqui, cada atendimento é único. Com autoridade científica e empatia, criamos protocolos personalizados que priorizam segurança, conforto e resultados reais. O foco é simples: ajudar você a recuperar sua funcionalidade e voltar a viver sem limitações.
                </p>
              </div>

              {/* Valores-chave */}
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8">
                <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 shadow-xl">
                  <Target className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">Personalizado</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors duration-300 shadow-xl">
                  <Shield className="w-6 h-6 text-secondary-foreground" />
                  <span className="text-sm font-medium text-foreground">Seguro</span>
                </div>
                <div className="flex flex-col items-center lg:items-start gap-2 p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors duration-300 col-span-2 md:col-span-1 shadow-xl">
                  <Sparkles className="w-6 h-6 text-primary" />
                  <span className="text-sm font-medium text-foreground">Resultados Reais</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Citação inferior */}
        <div className="w-full max-w-4xl text-center animate-in slide-in-from-bottom-4 fade-in duration-700" style={{ animationDelay: "600ms" }}>
          <blockquote className="relative">
            <div className="absolute -top-4 -left-4 text-6xl text-primary/20 font-serif">"</div>
            <p className="text-lg md:text-xl text-foreground/80 italic leading-relaxed px-8">
              Aqui, cada atendimento é único. Ciência, empatia e personalização para você viver com mais liberdade e bem-estar.
            </p>
            <div className="absolute -bottom-4 -right-4 text-6xl text-primary/20 font-serif rotate-180">"</div>
          </blockquote>
        </div>
      </div>
    </section>
  )
}
