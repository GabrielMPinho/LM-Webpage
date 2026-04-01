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
        direction === 'left'
          ? 'Depoimento anterior'
          : 'Pr\u00f3ximo depoimento'
      }
    >
      {direction === 'left' ? (
        <ChevronLeft size={20} />
      ) : (
        <ChevronRight size={20} />
      )}
    </button>
  );
}

const testimonials = [
  {
    quote:
      'Parceria de mais de 15 anos. A LM \u00e9 essencial para o nosso neg\u00f3cio pela qualidade e agilidade na entrega.',
    author: 'Carlos Silva',
    role: 'Diretor Comercial',
    company: 'MotoShop SP',
  },
  {
    quote:
      'Excelente variedade de produtos e atendimento diferenciado. A log\u00edstica deles \u00e9 impec\u00e1vel.',
    author: 'Ana Rodrigues',
    role: 'Propriet\u00e1ria',
    company: 'BikeStore RJ',
  },
  {
    quote:
      'Confian\u00e7a e profissionalismo s\u00e3o as marcas da LM. Nunca tivemos problemas com prazos ou qualidade.',
    author: 'Roberto Santos',
    role: 'Gerente de Compras',
    company: 'AutoPe\u00e7as MG',
  },
  {
    quote:
      'A parceria com a LM nos permitiu expandir nosso portf\u00f3lio e atender melhor nossos clientes.',
    author: 'Juliana Costa',
    role: 'CEO',
    company: 'Speed Parts',
  },
  {
    quote:
      'A consist\u00eancia no abastecimento e a seguran\u00e7a comercial fazem da LM uma parceira estrat\u00e9gica para nossa opera\u00e7\u00e3o.',
    author: 'Marcelo Ferreira',
    role: 'Diretor de Opera\u00e7\u00f5es',
    company: 'Rota Duas Rodas',
  },
  {
    quote:
      'A equipe da LM tem resposta r\u00e1pida, boa previsibilidade de entrega e um relacionamento comercial muito confi\u00e1vel.',
    author: 'Patr\u00edcia Almeida',
    role: 'Gerente Comercial',
    company: 'Ciclo Norte',
  },
  {
    quote:
      'Encontramos na LM um parceiro com portf\u00f3lio forte, suporte pr\u00f3ximo e capacidade de atender nossa expans\u00e3o com efici\u00eancia.',
    author: 'Renato Souza',
    role: 'S\u00f3cio Diretor',
    company: 'Moto Prime Distribui\u00e7\u00e3o',
  },
  {
    quote:
      'A rela\u00e7\u00e3o com a LM se destaca pela transpar\u00eancia, pelo comprometimento e pela qualidade constante nas entregas.',
    author: 'Fernanda Lima',
    role: 'Head de Compras',
    company: 'Urban Bike Center',
  },
];

export function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 420,
    cssEase: 'ease-out',
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
    swipeToSlide: true,
    prevArrow: <ArrowButton direction="left" />,
    nextArrow: <ArrowButton direction="right" />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="relative flex min-h-[78vh] items-center bg-white py-14 lg:min-h-[86vh] lg:py-16">
      <div className="mx-auto w-full max-w-none px-6 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center lg:mb-14"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#3565AD]">
            Depoimentos
          </span>
          <h2 className="text-4xl font-bold text-[#0C2041] md:text-5xl">
            O Que Dizem Nossos Parceiros
          </h2>
        </motion.div>

        <div className="relative lg:px-12 xl:px-16">
          <Slider {...settings} className="testimonials-slider">
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.author} className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="h-full rounded-2xl border border-gray-100 bg-gradient-to-br from-gray-50 to-white p-7 shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#3565AD] to-[#326BB4]">
                    <Quote className="text-white" size={24} />
                  </div>
                  <p className="mb-5 text-lg leading-relaxed italic text-gray-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-lg font-semibold text-[#0C2041]">
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
          bottom: -42px;
        }
        .testimonials-slider .slick-dots li button:before {
          font-size: 12px;
          color: #3565AD;
        }
        .testimonials-slider .slick-dots li.slick-active button:before {
          color: #3565AD;
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
      `}</style>
    </section>
  );
}
