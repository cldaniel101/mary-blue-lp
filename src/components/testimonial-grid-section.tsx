
import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// Importando os assets das imagens de depoimentos
import depo1 from '../assets/testimonials/1.jpeg'
import depo2 from '../assets/testimonials/2.jpeg'
import depo4 from '../assets/testimonials/4.jpeg'
import depo5 from '../assets/testimonials/5.jpeg'
import depo6 from '../assets/testimonials/6.jpeg'

const testimonials = [
  {
    image: depo1,
    alt: "Depoimento 1"
  },
  {
    image: depo2,
    alt: "Depoimento 2"
  },
  {
    image: depo4,
    alt: "Depoimento 4"
  },
  {
    image: depo5,
    alt: "Depoimento 5"
  },
  {
    image: depo6,
    alt: "Depoimento 6"
  },
]

const TestimonialCard = ({ image, alt }: { image: string; alt: string }) => {
  return (
    <div className="testimonial-card w-full max-w-[340px] md:max-w-[380px] bg-white rounded-3xl p-3 shadow-lg mx-auto">
      <div className="w-full h-[560px] md:h-[640px] overflow-hidden rounded-2xl bg-white">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-contain"   // não corta o print
        />
      </div>
    </div>
  )
}

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 py-12 md:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="flex flex-col justify-center items-center">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3A44] mb-4 font-['Poppins']">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg md:text-xl text-[#2E3A44]/70 max-w-2xl mx-auto font-['Inter']">
            Veja os depoimentos reais de quem já transformou sua vida com nossos serviços
          </p>
        </div>

        {/* Swiper Container */}
        <div className="w-full max-w-5xl mx-auto relative pb-20">
          <Swiper
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            spaceBetween={16}
            speed={600}
            loop={true}
            coverflowEffect={{
              rotate: -90,
              depth: 600,
              modifier: 0.5,
              slideShadows: false,
            }}
            pagination={{
              el: '.testimonial-pagination',
              clickable: true,
              bulletClass: 'testimonial-bullet',
              bulletActiveClass: 'testimonial-bullet-active',
            }}
            navigation={{
              nextEl: '.testimonial-button-next',
              prevEl: '.testimonial-button-prev',
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            className="testimonial-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <TestimonialCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination */}
          <div className="testimonial-pagination flex justify-center mt-8"></div>

          {/* Custom Navigation */}
          <button className="testimonial-button-prev absolute left-[calc(50%-3rem)] bottom-0 w-10 h-10 bg-[#3C8DBC] text-white rounded-full flex items-center justify-center z-10 hover:bg-[#3C8DBC]/80 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button className="testimonial-button-next absolute right-[calc(50%-3rem)] bottom-0 w-10 h-10 bg-[#3C8DBC] text-white rounded-full flex items-center justify-center z-10 hover:bg-[#3C8DBC]/80 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .testimonial-bullet {
          width: 12px !important;
          height: 12px !important;
          background: #3C8DBC !important;
          opacity: 0.3 !important;
          margin: 0 4px !important;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        
        .testimonial-bullet-active {
          opacity: 1 !important;
          transform: scale(1.2) !important;
        }
        
        .testimonial-swiper {
          padding-bottom: 4rem !important;
        }
        
        .testimonial-card {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(60, 141, 188, 0.15);
        }
        
        @media (max-width: 640px) {
          .testimonial-card {
            width: 260px !important;
          }
          
          .testimonial-card .h-\\[400px\\] {
            height: 350px !important;
          }
        }
      `
      }} />
    </section>
  )
}

