import { motion } from 'motion/react';
import { Clock, MapPin, MessageSquareHeart, Truck } from 'lucide-react';

const galleryImages = [
  {
    src: '/warehouse/galpao8.jpg',
    alt: 'Corredor de armazenamento com bins organizados',
  },
  {
    src: '/warehouse/galpao6.jpg',
    alt: 'Corredor de estoque com enderecamento e acesso amplo',
  },
  {
    src: '/warehouse/galpao4.jpg',
    alt: 'Vista ampla da operação logistica com pallets',
  },
];

export function Logistics() {
  const features = [
    {
      icon: Truck,
      title: 'Distribuição Nacional',
      description:
        'Atendendo mais de 20 mil varejistas e chegando em mais de 60% das cidades brasileiras.',
    },
    {
      icon: MessageSquareHeart,
      title: 'Atendimento individualizado',
      description: 'Atendimento no portal individualizado e humanizado.',
    },
    {
      icon: MapPin,
      title: '7 Centros de Distribuição',
      description: 'Estrutura estratégica para atendimento eficiente.',
    },
    {
      icon: Clock,
      title: 'Rapidez na Entrega',
      description: 'Processos otimizados para máxima velocidade.',
    },
  ];

  return (
    <section
      id="logistica"
      className="lm-section lm-section-dark relative flex min-h-screen items-center py-10 lg:min-h-[78vh] lg:py-16"
    >
      <div className="absolute inset-0 opacity-8">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#3565AD] blur-3xl" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-[#326BB4] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-7 lg:grid-cols-[minmax(360px,0.98fr)_minmax(0,1.02fr)] lg:items-start xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 space-y-4 lg:order-1 lg:mt-[2.5rem] lg:max-w-[38rem] -translate-y-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_30px_80px_rgba(7,18,36,0.28)] backdrop-blur-sm lg:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:min-h-[22rem] lg:h-[min(46vh,27rem)] lg:min-h-0 lg:aspect-auto">
                <img
                  src="/warehouse/galpaoFora.jpg"
                  alt="Centro de distribuição LM"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 lm-image-overlay" />

                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute right-4 top-4 rounded-2xl border border-white/70 bg-white/90 p-4 shadow-2xl backdrop-blur-md md:right-5 md:top-5 md:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#3565AD] to-[#326BB4] md:h-14 md:w-14">
                      <Truck className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-xl font-bold text-[#0C2041] md:text-2xl">
                        100%
                      </p>
                      <p className="text-sm text-gray-600">Nacional</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-3">
              {galleryImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + index * 0.08 }}
                  className="overflow-hidden rounded-[1.4rem] border border-white/10 bg-white/[0.04] p-1.5 shadow-[0_20px_45px_rgba(7,18,36,0.22)]"
                >
                  <div className="aspect-[1/1] overflow-hidden rounded-[1rem] lg:aspect-[5/6]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <span className="mb-3 block uppercase tracking-wider text-[#497ecf]">
              Nossa Força
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Logística de <span className="lm-text-glow-blue">Alta Performance</span>
            </h2>
            <p className="mb-6 text-base leading-relaxed text-white/80 md:text-lg">
              Nossa infraestrutura logística é projetada para garantir
              eficiência, rapidez e confiabilidade em cada entrega.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-xl border border-white/12 bg-white/[0.07] p-4 backdrop-blur-sm transition-colors hover:bg-white/[0.12] md:gap-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3565AD] to-[#326BB4] md:h-12 md:w-12">
                    <feature.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-white">
                      {feature.title}
                    </h3>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
