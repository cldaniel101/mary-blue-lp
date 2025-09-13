
import React from "react"
import { Instagram, Mail, MessageCircle, MapPin, Shield, FileText, Heart } from "lucide-react"

export function FooterSection() {
  return (
    <footer className="w-full bg-gradient-to-b from-[#E6F4FA] to-white border-t border-[#3C8DBC]/10">
      <div className="max-w-[1320px] mx-auto px-5 py-12 md:py-16 ">

        {/* Main Footer Content */}
        <div className="py-10 grid gap-8 md:grid-cols-3 md:items-center">
          
          {/* ESQUERDA: Logo */}
          <div className="flex items-center gap-3">
            <img 
              src="/src/assets/logos/logo-oficial.png" 
              alt="Mary Blue Life" 
              className="w-40 rounded-full object-cover"
            />  
          </div>

          {/* CENTRO: Navegação */}
          <nav className="flex justify-center gap-8 text-[#2E3A44]/80">
            {["Sobre", "Serviços", "Como Funciona", "Contato"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="font-medium font-['Inter'] hover:text-[#3C8DBC] underline-offset-4 hover:underline decoration-[#3C8DBC] transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* DIREITA: Redes Sociais */}
          <div className="flex justify-start md:justify-end gap-3">
            <SocialButton 
              href="https://instagram.com/Mary_Ozonio" 
              label="Instagram"
              bgColor="bg-[#E4405F]"
            >
              <Instagram className="w-4 h-4" />
            </SocialButton>
            <SocialButton 
              href="https://wa.me/5595984078006" 
              label="WhatsApp"
              bgColor="bg-[#25D366]"
            >
              <MessageCircle className="w-4 h-4" />
            </SocialButton>
            <SocialButton 
              href="mailto:contato.marybluelife@gmail.com" 
              label="E-mail"
              bgColor="bg-[#A8D5BA]"
            >
              <Mail className="w-4 h-4" />
            </SocialButton>
          </div>
        </div>

        {/* Disclaimers Section */}
        <div className="border-t border-[#3C8DBC]/10 p-8 mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

            {/* Legal Disclaimers */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#3C8DBC]" />
                <h4 className="text-sm font-semibold text-[#2E3A44] font-['Poppins']">
                  Avisos Legais
                </h4>
              </div>
              <div className="text-xs text-[#2E3A44]/70 font-['Inter'] leading-relaxed space-y-2">
                <p>
                  <strong>Importante:</strong> Tratamentos complementares não substituem avaliação médica.
                </p>
                <p>
                  <strong>Resultados:</strong> Os resultados variam por indivíduo; não há promessa de cura.
                </p>
              </div>
            </div>

            {/* Privacy Policy */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#3C8DBC]" />
                <h4 className="text-sm font-semibold text-[#2E3A44] font-['Poppins']">
                  Privacidade
                </h4>
              </div>
              <div className="text-xs text-[#2E3A44]/70 font-['Inter'] leading-relaxed">
                <p>
                  Seus dados enviados via WhatsApp e formulários são utilizados apenas para contato,
                  agendamento e acompanhamento de atendimento, conforme finalidade informada.
                  Não compartilhamos informações pessoais com terceiros sem sua autorização.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#3C8DBC]/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2 text-xs text-[#2E3A44]/60 font-['Inter']">
              <Heart className="w-4 h-4 text-[#A8D5BA]" />
              <span>
                © 2025 Cláudio Daniel | <a href="https://danieldev.dev.br" target="_blank" className="hover:underline">danieldev.dev.br </a> 
                | <a href="https://instagram.com/danieldevweb" target="_blank" className="hover:underline">@danieldevweb</a>
              </span>

            </div>
            <div className="flex gap-4 text-xs text-[#2E3A44]/60 font-['Inter']">
              <a href="#termos" className="hover:text-[#3C8DBC] transition-colors duration-300">
                Termos de Uso
              </a>
              <span>•</span>
              <a href="#privacidade" className="hover:text-[#3C8DBC] transition-colors duration-300">
                Política de Privacidade
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function SocialButton({
  href,
  label,
  bgColor,
  children,
}: {
  href: string
  label: string
  bgColor: string
  children: React.ReactNode
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`h-9 w-9 rounded-full ${bgColor} text-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#3C8DBC]/50`}
    >
      {children}
    </a>
  )
}
