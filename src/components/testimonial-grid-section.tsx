
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import RippleButton from './Hero/ripple-button'
import { trackLeadEvent } from '../lib/metaPixel'

// Importando os assets das imagens de depoimentos e vídeo
import depo1 from '../assets/testimonials/1.jpeg'
import depo2 from '../assets/testimonials/2.jpeg'
import depo4 from '../assets/testimonials/4.jpeg'
import depo5 from '../assets/testimonials/5.jpeg'
import depo6 from '../assets/testimonials/6.jpeg'
// Vídeo de depoimento na pasta public
const videoDepoimento = '/VID-20250923-WA0002.mp4'

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

const VideoTestimonial = () => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center">
      {/* Título do vídeo */}
      {/* <div className="text-center mb-8">
        <h3 className="text-2xl md:text-3xl font-bold text-[#2E3A44] mb-3 font-['Poppins']">
          Depoimento em Vídeo
        </h3>
        <p className="text-lg text-[#2E3A44]/70 font-['Inter']">
          Veja o relato completo de uma de nossas clientes
        </p>
      </div> */}
      
      {/* Container do vídeo */}
      <div className="video-testimonial-container bg-white rounded-3xl p-4 md:p-6 shadow-xl mx-4 md:mx-0 w-fit">
        <div className="w-object-fit flex justify-center">
          <div className="relative bg-gray-50 rounded-2xl overflow-hidden" style={{aspectRatio: '9/16', maxHeight: '70vh', width: 'auto'}}>
            <video
              src={videoDepoimento}
              controls
              className="w-full h-full object-contain rounded-2xl"
              preload="metadata"
              playsInline
              poster=""
            />
          
            {/* Badge de destaque */}
            <div className="absolute top-4 right-4 bg-[#3C8DBC] text-white px-4 py-2 rounded-full text-sm font-medium font-['Inter'] shadow-lg">
              <svg className="inline-block w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 5v10l8-5-8-5z"/>
              </svg>
              Depoimento Exclusivo
            </div>
          </div>
        </div>
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
        
        {/* Seção do vídeo depoimento */}
        <VideoTestimonial />
        
        {/* Nova CTA após o vídeo */}
        <div className="w-full max-w-4xl mx-auto mt-16 flex flex-col items-center text-center">
          <div className="mb-8">
            <p className="text-lg md:text-xl text-[#2E3A44]/70 max-w-2xl mx-auto font-['Inter']">
              Junte-se às centenas de pessoas que já mudaram suas vidas. Agende sua consulta agora.
            </p>
          </div>
          
          <a
            href="https://wa.me/5595984078006"
            target="_blank"
            rel="noopener noreferrer"
            onClick={trackLeadEvent}
          >
            <RippleButton variant="primary">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
                Agendar Consulta
              </span>
            </RippleButton>
          </a>
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
        
        .video-testimonial-container {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .video-testimonial-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 25px 50px rgba(60, 141, 188, 0.15);
        }
        
        .video-testimonial-container video {
          border-radius: 16px;
          background-color: transparent !important;
        }
        
        .video-testimonial-container video::-webkit-media-controls-panel {
          background-color: rgba(46, 58, 68, 0.9) !important;
          border-radius: 0 0 16px 16px;
        }
        
        .video-testimonial-container video::-webkit-media-controls-play-button {
          background-color: rgba(60, 141, 188, 0.9) !important;
          border-radius: 50%;
          filter: brightness(1.1);
        }
        
        .video-testimonial-container video::-webkit-media-controls-current-time-display,
        .video-testimonial-container video::-webkit-media-controls-time-remaining-display {
          color: white !important;
          font-family: 'Inter', sans-serif;
        }
        
        /* Remove overlay azul quando pausado */
        .video-testimonial-container video::-webkit-media-controls-overlay-play-button {
          background-color: rgba(60, 141, 188, 0.9) !important;
          border-radius: 50% !important;
        }
        
        .video-testimonial-container video::cue {
          background-color: transparent !important;
        }
        
        /* Remove qualquer overlay ou background azul */
        .video-testimonial-container video::-webkit-media-controls-overlay-enclosure {
          background-color: transparent !important;
        }
        
        .video-testimonial-container video::-webkit-media-controls-fullscreen-button {
          background-color: transparent !important;
        }
        
        /* Estilos para desktop - vídeo vertical centralizado */
        @media (min-width: 641px) {
          .video-testimonial-container > div > div {
            max-width: 350px !important;
            max-height: 75vh !important;
          }
        }
        
        @media (max-width: 640px) {
          .testimonial-card {
            width: 260px !important;
          }
          
          .testimonial-card .h-\\[400px\\] {
            height: 350px !important;
          }
          
          .testimonial-card video {
            height: 100% !important;
            object-fit: cover;
          }
          
          .video-testimonial-container {
            margin-top: 3rem !important;
            padding: 1rem !important;
          }
          
          .video-testimonial-container > div > div {
            max-height: 60vh !important;
            width: 100% !important;
            max-width: 300px !important;
          }
          
          .video-testimonial-container video {
            width: 100% !important;
            height: 100% !important;
          }
        }
      `
      }} />
    </section>
  )
}

