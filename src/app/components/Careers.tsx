import { motion } from 'motion/react';
import { Briefcase, ArrowRight } from 'lucide-react';

export function Careers() {
  return (
    <section className="lm-section lm-section-dark relative flex min-h-screen items-center py-16 lg:py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-8">
        <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-[#3565AD] blur-3xl" />
        <div className="absolute bottom-0 left-0 h-96 w-96 rounded-full bg-[#326BB4] blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-10 lg:min-h-[78vh] lg:grid-cols-[minmax(380px,1fr)_minmax(0,1fr)] lg:items-stretch xl:gap-16">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full lg:items-stretch"
          >
            <div className="relative w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-[0_30px_80px_rgba(7,18,36,0.28)] backdrop-blur-sm">
              <div className="relative min-h-[24rem] overflow-hidden rounded-[1.6rem] sm:min-h-[28rem] lg:h-full lg:min-h-[78vh] xl:min-h-[80vh]">
                <img
                  src="https://images.unsplash.com/photo-1758518732175-5d608ba3abdf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW0lMjBwcm9mZXNzaW9uYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzc0ODE2NjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Team"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 lm-image-overlay" />
              </div>
            </div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full lg:flex-col lg:justify-center"
          >
            <div className="mb-6 flex items-center gap-3">
              <Briefcase className="text-[#3565AD]" size={32} />
              <span className="text-[#3565AD] uppercase tracking-wider">
                Carreiras
              </span>
            </div>

            <h2 className="mb-7 text-4xl font-bold leading-tight text-white md:text-5xl">
              Faça Parte da{' '}
              <span className="text-[#3565AD]">Nossa História</span>
            </h2>

            <p className="mb-7 text-lg leading-relaxed text-white/80">
               LM é uma empresa que quer fazer o futuro com pessoas que vislumbram algo grande para sua vida e que trabalham de forma firme e séria. Se você tem determinação, curiosidade e vontade de aprender e de fazer a diferença, o seu lugar é aqui e não há limites para você! Acreditamos na meritocracia, em camadas hierárquica reduzidas e no futuro das pessoas. Trabalhar na LM e fazer uma faculdade para sua carreira.
            </p>

            <div className="mb-10 space-y-4">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-2 w-2 rounded-full bg-[#3565AD]" />
                <p className="text-white/90">
                  Ambiente colaborativo e inclusivo
                </p>
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

            <button className="group flex w-fit items-center gap-2 rounded-full bg-gradient-to-r from-[#3565AD] to-[#326BB4] px-8 py-4 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              Ver Oportunidades
              <ArrowRight
                className="group-hover:translate-x-1 transition-transform"
                size={20}
              />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
