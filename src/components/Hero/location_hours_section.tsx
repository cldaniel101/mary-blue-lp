import React from "react";
import RippleButton from "./ripple-button";

/**
 * Seção "Localização & horários" com mapa do Google à direita.
 * - Stack: React + TSX + TailwindCSS
 * - Uso: importe e renderize <LocationHoursSection /> em qualquer página.
 * - Design: Integrado com a identidade visual Mary Blue
 */
export default function LocationHoursSection() {
  const whatsappNumber = "5595984078006"; // +55 95 98407-8006
  const whatsappMsg = encodeURIComponent(
    "Olá, gostaria de agendar uma consulta."
  );
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMsg}`;

  // Mapa integrado com o endereço específico da Mary Blue
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8456789!2d-60.7058783!3d2.8187387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8d93b4b7e2b4b1b1%3A0x123456789abcdef!2sAvenida%20M%C3%A1rio%20Homem%20de%20Melo%2C%202814%2C%20Liberdade%2C%20Boa%20Vista%20-%20RR%2C%2069309-010!5e0!3m2!1spt-BR!2sbr!4v1694123456789!5m2!1spt-BR!2sbr";

  return (
    <section className="relative isolate py-16 md:py-20 lg:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 md:grid-cols-2 lg:gap-16">
          {/* Coluna esquerda: Informações */}
          <div className="space-y-8">
            <div className="text-center md:text-left">
              <h2 className="font-poppins text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                Localização & Horários
              </h2>
              <p className="mt-4 text-lg text-muted-foreground font-inter">
                Encontre-nos facilmente e agende sua consulta de forma prática e segura.
              </p>
            </div>

            {/* Cards de informações */}
            <div className="space-y-6">
              {/* Onde estamos */}
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-foreground mb-2">
                      Onde Estamos
                    </h3>
                    <p className="text-muted-foreground font-inter leading-relaxed">
                      <strong>Avenida Mário Homem de Melo, 2814</strong><br />
                      Bairro Liberdade, Boa Vista/RR<br />
                      CEP: 69309-010
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground font-inter">
                      <strong>Estacionamento:</strong> Disponível no local
                    </p>
                  </div>
                </div>
              </div>

              {/* Horários */}
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-1 bg-secondary" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-foreground mb-2">
                      Horários de Atendimento
                    </h3>
                    <div className="space-y-1 text-muted-foreground font-inter">
                      <p><strong>Segunda a Sexta:</strong> 08:00 às 18:00</p>
                      <p><strong>Sábado:</strong> 09:00 às 15:00</p>
                      <p><strong>Domingo:</strong> Fechado</p>
                      <p className="text-sm mt-2 text-primary font-medium">Atendimento particular</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contatos */}
              <div className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute left-0 top-0 h-full w-1 bg-accent" />
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg className="w-5 h-5 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-poppins text-lg font-semibold text-foreground mb-3">
                      Fale Conosco
                    </h3>
                    <div className="space-y-3">
                      <div className="flex flex-col gap-3">
                        <p className="text-muted-foreground font-inter">
                          <strong>WhatsApp:</strong> (95) 98407-8006
                        </p>
                        <div className="w-fit mt-3">
                          <RippleButton
                            href={whatsappHref}
                            variant="primary"
                            className="px-6 py-2"
                          >
                            Agendar Consulta
                          </RippleButton>
                        </div>
                      </div>
                      <div className="text-sm text-muted-foreground font-inter space-y-1">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna direita: Mapa */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-lg">
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
              <iframe
                title="Mary Blue - Localização em Boa Vista, RR"
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-[400px] w-full md:h-[500px] lg:h-[600px]"
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            <div className="text-center">
              <p className="text-sm text-muted-foreground font-inter">
                📍 Avenida Mário Homem de Melo, 2814 - Liberdade, Boa Vista/RR
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
