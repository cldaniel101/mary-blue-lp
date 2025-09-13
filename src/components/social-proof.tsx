  import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

export function SocialProof() {
  const certificados = [
    { src: "/src/assets/certificados-logos/1.png", alt: "Certificado 1" },
    { src: "/src/assets/certificados-logos/2.png", alt: "Certificado 2" },
    { src: "/src/assets/certificados-logos/3.png", alt: "Certificado 3" },
    { src: "/src/assets/certificados-logos/4.png", alt: "Certificado 4" },
    { src: "/src/assets/certificados-logos/5.png", alt: "Certificado 5" },
  ]

  // Duplicar os certificados para criar um loop mais suave
  const duplicatedCertificados = [...certificados, ...certificados]

  return (
    <section className="self-stretch pt-16 pb-0 flex flex-col justify-center items-center gap-6 overflow-hidden">
      <div className="text-center text-gray-300 text-sm font-medium leading-tight">
        Certificações e Formações
      </div>
      
      <div className="w-full max-w-6xl mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView="auto"
          loop={true}
          speed={8000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={false}
          className="social-proof-swiper"
        >
          {duplicatedCertificados.map((certificado, i) => (
            <SwiperSlide key={i} className="!w-auto flex justify-center">
              <div className="flex items-center justify-center px-4">
                <img
                  src={certificado.src}
                  alt={certificado.alt}
                  width={320}
                  height={200}
                  className="w-auto h-[110px] md:h-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
          .social-proof-swiper {
            overflow: visible !important;
          }
          
          .social-proof-swiper .swiper-wrapper {
            transition-timing-function: linear !important;
          }
          
          .social-proof-swiper .swiper-slide {
            flex-shrink: 0 !important;
          }
        `
      }} />
    </section>
  )
}
