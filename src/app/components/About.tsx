import { motion } from 'motion/react';
import { Globe, Package } from 'lucide-react';
import { publicPath } from '../lib/public-path';

const features = [
  {
    icon: Package,
    title: 'Variedade de Produtos',
    description:
      'Catálogo completo com peças, acessórios, quipamentos e pneumáticos das melhores marcas.',
  },
  {
    icon: Globe,
    title: 'Atuação Nacional',
    description:
      'Presença em todo o Brasil com operação integrada e atendimento consistente.',
  },
];

export function About() {
  return (
    <section
      id="quem-somos"
      className="lm-section lm-section-light relative flex min-h-screen scroll-mt-20 items-center py-10 lg:min-h-[92vh] lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-7 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="mb-2 block uppercase tracking-[0.24em] text-[#3565AD]">
              Quem Somos
            </span>

            <h2 className="text-[2.7rem] font-bold leading-[1.02] text-[#0C2041] md:text-5xl xl:text-[4rem]">
              Conectando o Brasil
              <br />
              ao universo das
              <span className="text-[#3565AD]"> duas rodas</span>
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-lg">
              Somos uma distribuidora de partes, peças, acessórios e pneumáticospara motos
              e bicicletas com atuação em todo Brasil.
            </p>

            <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-lg">
              Nossa escala comercial e força logística conectam fornecedores,
              marcas e pontos de venda com agilidade, confiança e profundidade.
            </p>

            <div className="-translate-y-1 space-y-3 pt-7 md:-translate-y-2 lg:pt-8 lg:-translate-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 rounded-2xl border border-[#3565AD]/10 bg-white/55 px-4 py-4 shadow-[0_18px_45px_rgba(12,32,65,0.08)] backdrop-blur-sm transition-colors hover:bg-white/80 md:gap-4"
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3565AD] to-[#326BB4] md:h-12 md:w-12">
                    <feature.icon className="text-white" size={20} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-base font-semibold text-[#0C2041] md:text-lg">
                      {feature.title}
                    </h3>
                    <p className="text-sm leading-6 text-slate-600 md:text-base">
                      {feature.description}
                    </p>
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
            className="relative lg:ml-auto lg:mt-[4.3rem] lg:w-full lg:max-w-[36rem] xl:max-w-[38rem]"
          >
            <div className="relative -translate-y-1 overflow-hidden rounded-[2rem] border border-[#3565AD]/12 bg-white/55 p-2 shadow-[0_30px_80px_rgba(12,32,65,0.16)] backdrop-blur-sm sm:p-2.5 lg:h-[min(80vh,50rem)] lg:-translate-y-8 lg:p-3">
              <div className="relative min-h-[16.5rem] overflow-hidden rounded-[1.4rem] sm:min-h-[24rem] sm:rounded-[1.6rem] lg:h-[min(77vh,40rem)] lg:min-h-0">
                <img
                  src={publicPath('warehouse/galpaofora2.jpg')}
                  alt="Fachada do centro de distribuição LM"
                  className="absolute inset-0 h-full w-full object-cover object-[center_62%] sm:object-center"
                />
                <div className="absolute inset-0 lm-image-overlay-soft" />

                <div className="absolute left-3 top-3 rounded-full border border-white/30 bg-[#0C2041]/55 px-2.5 py-1 text-[9px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md sm:left-4 sm:top-4 sm:px-3 sm:py-1.5 sm:text-[10px] md:left-5 md:top-5 md:px-4 md:py-2 md:text-xs">
                  Desde 1981
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="absolute bottom-3 left-3 right-3 rounded-[1.35rem] border border-white/35 bg-white/88 p-3 shadow-2xl backdrop-blur-md sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:p-4 md:bottom-5 md:left-5 md:right-5 md:p-5"
                >
                  <div className="flex items-center gap-2.5 sm:gap-3 md:gap-4">
                    <div className="flex h-[2.7rem] w-[2.7rem] items-center justify-center rounded-[1rem] bg-gradient-to-br from-[#3565AD] to-[#326BB4] text-[1.05rem] font-bold text-white sm:h-[3.25rem] sm:w-[3.25rem] sm:rounded-2xl sm:text-xl md:h-16 md:w-16 md:text-2xl">
                      45+
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#3565AD] sm:text-xs sm:tracking-[0.22em] md:text-sm">
                        Experiência
                      </p>
                      <p className="mt-0.5 text-[1.05rem] font-bold leading-tight text-[#0C2041] sm:mt-1 sm:text-lg md:text-2xl">
                        Tradição e escala nacional
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
