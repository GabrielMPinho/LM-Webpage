import { motion } from 'motion/react';
import { ArrowRight, Briefcase } from 'lucide-react';

export function Careers() {
  return (
    <section className="lm-section lm-section-dark relative flex min-h-screen items-center py-10 lg:py-20">
      <div className="absolute inset-0 opacity-8">
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[#3565AD] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#326BB4] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-7 lg:min-h-[78vh] lg:grid-cols-[minmax(380px,1fr)_minmax(0,1fr)] lg:items-stretch xl:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full lg:items-stretch"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-[0_30px_80px_rgba(7,18,36,0.28)] backdrop-blur-sm lg:p-3">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.6rem] sm:min-h-[22rem] lg:h-full lg:min-h-[78vh] lg:aspect-auto xl:min-h-[80vh]">
                <img
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzc0ODE2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Equipe LM"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 lm-image-overlay" />
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
              Faça Parte da <span className="text-[#3565AD]">Nossa História</span>
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

            <button className="group flex w-full max-w-[18rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3565AD] to-[#326BB4] px-7 py-3.5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-fit sm:max-w-none sm:px-8 sm:py-4">
              Ver Oportunidades
              <ArrowRight
                className="transition-transform group-hover:translate-x-1"
                size={20}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
