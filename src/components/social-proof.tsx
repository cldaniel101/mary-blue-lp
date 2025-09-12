import React from "react"

export function SocialProof() {
  const certificados = [
    { src: "/src/assets/certificados-logos/1.png", alt: "Certificado 1" },
    { src: "/src/assets/certificados-logos/2.png", alt: "Certificado 2" },
    { src: "/src/assets/certificados-logos/3.png", alt: "Certificado 3" },
    { src: "/src/assets/certificados-logos/4.png", alt: "Certificado 4" },
    { src: "/src/assets/certificados-logos/5.png", alt: "Certificado 5" },
  ]

  return (
    <section className="self-stretch py-16 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Certificações e Formações
      </div>
      <div className="self-stretch grid grid-cols-2 md:grid-cols-5 gap-8 justify-items-center">
        {certificados.map((certificado, i) => (
          <img
            key={i}
            src={certificado.src}
            alt={certificado.alt}
            width={200}
            height={120}
            className="w-full max-w-[200px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity duration-200"
          />
        ))}
      </div>
    </section>
  )
}
