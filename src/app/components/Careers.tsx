import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';
import { publicPath } from '../lib/public-path';

export function Careers() {
  return (
    <section id = "carreira" className="lm-section lm-section-dark relative flex min-h-screen items-center py-10 lg:min-h-[78vh] lg:py-16">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#3565AD] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#326BB4] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-7 lg:min-h-[64vh] lg:grid-cols-[minmax(380px,0.98fr)_minmax(0,1.02fr)] lg:items-start xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-3 lg:mt-[1.5rem] lg:flex lg:max-w-[38rem] lg:flex-col lg:items-stretch lg:space-y-3 -translate-y-3"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_30px_80px_rgba(7,18,36,0.28)] backdrop-blur-sm lg:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:min-h-[22rem] lg:h-[min(41vh,24rem)] lg:min-h-0 lg:aspect-auto">
                <img
                  src={publicPath('warehouse/careers-office.jpeg')}
                  alt="Escritorio da LM"
                  className="h-full w-full object-cover object-[center_18%]"
                />
                <div className="absolute inset-0 lm-image-overlay" />

                <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-[#0C2041]/55 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md md:left-5 md:top-5 md:px-4 md:py-2 md:text-xs translate-y-59">
                  Ambiente Corporativo
                </div>
              </div>
            </div>

            <div className="relative w-full overflow-hidden rounded-[1.6rem] border border-white/10 bg-white/[0.04] p-2 shadow-[0_22px_55px_rgba(7,18,36,0.22)] backdrop-blur-sm">
              <div className="relative aspect-[16/9] overflow-hidden rounded-[1.2rem] sm:min-h-[15rem] lg:h-[min(30vh,14rem)] lg:min-h-0 lg:aspect-auto">
                <img
                  src={publicPath('warehouse/galpao4.jpg')}
                  alt="Operação do galpao da LM"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0C2041]/72 via-[#17355e]/28 to-transparent" />


              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full lg:flex-col lg:justify-center"
          >
            <div className="mb-5 flex items-center gap-3">
              <Briefcase className="text-[#3565AD]" size={28} />
              <span className="uppercase tracking-wider text-[#3565AD]">
                Carreiras
              </span>
            </div>

            <h2 className="mb-5 text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
              Faça Parte da <span className="lm-text-glow-blue">Nossa História</span>
            </h2>

            <p className="mb-6 text-base leading-relaxed text-white/80 md:text-lg">
              LM é uma empresa que quer fazer o futuro com pessoas que
              vislumbram algo grande para sua vida e que trabalham de forma
              firme e séria. Se você tem determinação, curiosidade e vontade de
              aprender e de fazer a diferença, o seu lugar é aqui e não há
              limites para você. Acreditamos na meritocracia, em camadas
              hierárquicas reduzidas e no futuro das pessoas.
            </p>

            <div className="mb-8 space-y-3 md:mb-10 md:space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#3565AD]" />
                <p className="text-white/90">Ambiente colaborativo e inclusivo</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#3565AD]" />
                <p className="text-white/90">
                  Oportunidades de desenvolvimento profissional
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#3565AD]" />
                <p className="text-white/90">
                  Benefícios competitivos e plano de carreira
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#3565AD]" />
                <p className="text-white/90">
                  Cultura de inovação e melhoria contínua
                </p>
              </div>
            </div>

            <a
              href="https://lm2rodas.vagas.solides.com.br/"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3565AD] to-[#326BB4] px-7 py-3.5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-fit sm:max-w-none sm:px-8 sm:py-4"
            >
              Ver Oportunidades
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
