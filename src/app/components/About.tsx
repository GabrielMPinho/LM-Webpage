import { motion } from 'motion/react';
import { Award, Globe, Package } from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Variedade de Produtos',
    description:
      'Catálogo completo com peças, acessórios e equipamentos das melhores marcas.',
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
      id="sobre"
      className="lm-section lm-section-light relative flex min-h-screen scroll-mt-20 items-center py-14 lg:min-h-[92vh] lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-none px-6 lg:px-12 xl:px-16 2xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:items-start xl:gap-14">
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

            <h2 className="text-4xl font-bold leading-[1.02] text-[#0C2041] md:text-5xl xl:text-[4rem]">
              Conectando o Brasil
              <br />
              ao universo das
              <span className="text-[#3565AD]"> duas rodas</span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Somos uma distribuidora de partes, peças e acessórios para motos e bicicletas com atuação em todo Brasil.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg">
              Nossa escala comercial e força logística conectam fornecedores,
              marcas e pontos de venda com agilidade, confiança e profundidade.
            </p>

            <div className="mt-8 space-y-3 lg:mt-10 -translate-y-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-2xl border border-[#3565AD]/10 bg-white/55 px-4 py-4 shadow-[0_18px_45px_rgba(12,32,65,0.08)] backdrop-blur-sm transition-colors hover:bg-white/80"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#3565AD] to-[#326BB4]">
                    <feature.icon className="text-white" size={22} />
                  </div>

                  <div>
                    <h3 className="mb-1 text-lg font-semibold text-[#0C2041]">
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
            <div className="relative overflow-hidden rounded-[2rem] border border-[#3565AD]/12 bg-white/55 p-3 shadow-[0_30px_80px_rgba(12,32,65,0.16)] backdrop-blur-sm lg:h-[min(80vh,50rem)] -translate-y-8">
              <div className="relative min-h-[26rem] overflow-hidden rounded-[1.6rem] sm:min-h-[30rem] lg:h-[min(77vh,40rem)] lg:min-h-0">
                <img
                  src="https://images.unsplash.com/photo-1724963282623-e94774b9df89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwcGFydHMlMjBhY2Nlc3NvcmllcyUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzQ5MDYzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Peças e acessórios para motocicletas"
                  className="h-full w-full object-cover object-center"
                />
                <div className="absolute inset-0 lm-image-overlay-soft" />

                <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#0C2041]/55 px-4 py-2 text-xs font-medium uppercase tracking-[0.24em] text-white backdrop-blur-md">
                  Desde 1981
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.35 }}
                  className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/35 bg-white/88 p-5 shadow-2xl backdrop-blur-md"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#3565AD] to-[#326BB4] text-2xl font-bold text-white">
                      45+
                    </div>

                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#3565AD]">
                        Experiência
                      </p>
                      <p className="mt-1 text-2xl font-bold text-[#0C2041]">
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
