import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';

export function Timeline() {
  const milestones = [
    {
      year: '1980',
      title: 'Fundação',
      description: 'Início das atividades com foco em peças para motocicletas.',
    },
    {
      year: '1995',
      title: 'Expansão Nacional',
      description: 'Abertura de centros de distribuição em diferentes estados.',
    },
    {
      year: '2005',
      title: 'Mercado Internacional',
      description: 'Parcerias com fornecedores de mais de 10 países.',
    },
    {
      year: '2015',
      title: 'Modernização',
      description: 'Implementação de sistema logístico integrado e automatizado.',
    },
    {
      year: '2020',
      title: 'Linha Bicicletas',
      description: 'Inclusão de acessórios e equipamentos para ciclismo.',
    },
    {
      year: '2026',
      title: 'Inovação Contínua',
      description: 'Líder em distribuição com tecnologia de ponta e sustentabilidade.',
    },
  ];

  return (
    <section id="historia" className="lm-section lm-section-soft py-24">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#3565AD] uppercase tracking-wider mb-4 block">
            Nossa Jornada
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0C2041]">
            Décadas de Evolução
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#3565AD] via-[#326BB4] to-[#3565AD]" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex items-center ${
                  index % 2 === 0
                    ? 'lg:flex-row'
                    : 'lg:flex-row-reverse'
                } flex-col`}
              >
                {/* Content */}
                <div
                  className={`lg:w-5/12 ${
                    index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                  }`}
                >
                  <div className="bg-white/78 backdrop-blur-md border border-white/70 border-l-4 border-l-[#3565AD] p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-[#3565AD]" size={20} />
                      <span className="text-2xl font-bold text-[#3565AD]">
                        {milestone.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-[#0C2041] mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-br from-[#3565AD] to-[#326BB4] rounded-full border-4 border-white shadow-lg z-10" />

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
