import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

function ArrowButton({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick?: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`testimonials-arrow absolute top-1/2 z-20 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-[#3565AD]/20 bg-white/92 text-[#0C2041] shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-[#3565AD] hover:text-[#3565AD] lg:flex ${
        direction === 'left' ? '-left-14 xl:-left-16' : '-right-14 xl:-right-16'
      }`}
      aria-label={
        direction === 'left' ? 'Depoimento anterior' : 'Próximo depoimento'
      }
    >
      {direction === 'left' ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
    </button>
  );
}

const testimonials = [
  {
    quote:
      'Parceria de mais de 15 anos. A LM é essencial para o nosso negócio pela qualidade e agilidade na entrega.',
    author: 'Carlos Silva',
    role: 'Diretor Comercial',
    company: 'MotoShop SP',
  },
  {
    quote:
      'Excelente variedade de produtos e atendimento diferenciado. A logística deles é impecável.',
    author: 'Ana Rodrigues',
    role: 'Proprietária',
    company: 'BikeStore RJ',
  },
  {
    quote:
      'Confiança e profissionalismo são as marcas da LM. Nunca tivemos problemas com prazos ou qualidade.',
    author: 'Roberto Santos',
    role: 'Gerente de Compras',
    company: 'AutoPeças MG',
  },
  {
    quote:
      'A parceria com a LM nos permitiu expandir nosso portfólio e atender melhor nossos clientes.',
    author: 'Juliana Costa',
    role: 'CEO',
    company: 'Speed Parts',
  },
  {
    quote:
      'A consistência no abastecimento e a segurança comercial fazem da LM uma parceira estratégica para nossa operação.',
    author: 'Marcelo Ferreira',
    role: 'Diretor de Operações',
    company: 'Rota Duas Rodas',
  },
  {
    quote:
      'A equipe da LM tem resposta rápida, boa previsibilidade de entrega e um relacionamento comercial muito confiável.',
    author: 'Patrícia Almeida',
    role: 'Gerente Comercial',
    company: 'Ciclo Norte',
  },
  {
    quote:
      'Encontramos na LM um parceiro com portfólio forte, suporte próximo e capacidade de atender nossa expansão com eficiência.',
    author: 'Renato Souza',
    role: 'Sócio Diretor',
    company: 'Moto Prime Distribuição',
  },
  {
    quote:
      'A relação com a LM se destaca pela transparência, pelo comprometimento e pela qualidade constante nas entregas.',
    author: 'Fernanda Lima',
    role: 'Head de Compras',
    company: 'Urban Bike Center',
  },
];

export function Testimonials() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    const updateMatch = () => setIsDesktop(mediaQuery.matches);

    updateMatch();
    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  const settings = {
    dots: true,
    arrows: isDesktop,
    infinite: true,
    speed: 420,
    cssEase: 'ease-out',
    slidesToShow: isDesktop ? 2 : 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipeToSlide: true,
    prevArrow: <ArrowButton direction="left" />,
    nextArrow: <ArrowButton direction="right" />,
  };

  return (
    <section className="relative flex min-h-[78vh] items-center bg-white py-10 lg:min-h-[86vh] lg:py-16">
      <div className="mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:mb-14"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#3565AD]">
            Depoimentos
          </span>
          <h2 className="text-3xl font-bold text-[#0C2041] sm:text-4xl md:text-5xl">
            O Que Dizem Nossos Parceiros
          </h2>
        </motion.div>

        <div className="relative -mx-2 sm:mx-0 lg:px-12 xl:px-16">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="px-2 sm:px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-5 shadow-lg sm:p-7"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-gradient-to-br from-[#3565AD] to-[#326BB4] sm:mb-5 sm:h-12 sm:w-12">
                    <Quote className="text-white" size={24} />
                  </div>
                  <p className="mb-5 text-base leading-relaxed italic text-gray-700 sm:text-lg">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-base font-semibold text-[#0C2041] sm:text-lg">
                      {testimonial.author}
                    </p>
                    <p className="text-[#3565AD]">{testimonial.role}</p>
                    <p className="text-sm text-gray-500">{testimonial.company}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      <style>{`
        .testimonials-slider .slick-dots {
          bottom: -38px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3565ad;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #3565ad;
        }
        .testimonials-slider .slick-slide > div {
          height: 100%;
        }
        .testimonials-slider .slick-track {
          display: flex;
        }
        .testimonials-slider .slick-slide {
          height: inherit;
        }
        .testimonials-slider .slick-slide > div > div {
          height: 100%;
        }
        @media (max-width: 1023px) {
          .testimonials-slider .slick-list {
            overflow: visible;
          }
        }
      `}</style>
    </section>
  );
}
