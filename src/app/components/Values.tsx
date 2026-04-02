import { motion } from 'motion/react';

const values = [
  {
    title: 'Trabalhamos com Profissionalismo e Simplicidade',
    description:
      'Atuamos com disciplina, clareza e foco no que realmente gera valor para clientes e parceiros.',
    imageSrc: '/values/profissionalismo-simplicidade.png',
    imageAlt: 'Profissionalismo e simplicidade',
  },
  {
    title: 'Agimos com propósito',
    description:
      'Tomamos decisões com intenção clara, alinhadas à estratégia e ao impacto que queremos construir.',
    imageSrc: '/values/agimos-com-proposito.png',
    imageAlt: 'Agimos com propósito',
  },
  {
    title: 'Temos Paixão de Dono',
    description:
      'Assumimos responsabilidade pelo resultado e cuidamos do negócio com senso real de pertencimento.',
    imageSrc: '/values/paixao-de-dono.png',
    imageAlt: 'Paixão de dono',
  },
  {
    title: 'Somos Movidos por Desafios',
    description:
      'Encaramos cenários complexos com iniciativa, preparo e disposição para evoluir continuamente.',
    imageSrc: '/values/movidos-por-desafios.png',
    imageAlt: 'Movidos por desafios',
  },
  {
    title: 'Somos Éticos em Todas as Ações',
    description:
      'Sustentamos relações de confiança com transparência, coerência e respeito em cada decisão.',
    imageSrc: '/values/eticos-em-todas-as-acoes.png',
    imageAlt: 'Ética em todas as ações',
  },
  {
    title: 'Honra, coragem e tradição',
    description:
      'Preservamos nossos princípios com firmeza, valorizando a história que sustenta a nossa identidade.',
    imageSrc: '/values/honra-coragem-tradicao.png',
    imageAlt: 'Honra, coragem e tradição',
  },
  {
    title: 'Edificamos Pessoas',
    description:
      'Desenvolvemos talentos, fortalecemos equipes e criamos bases sólidas para o crescimento coletivo.',
    imageSrc: '/values/edificamos-pessoas.png',
    imageAlt: 'Edificamos pessoas',
  },
  {
    title: 'Cultura do Maior ou Igual',
    description:
      'Buscamos padrões altos de entrega, colaborando para que todos cresçam no mesmo nível de exigência.',
    imageSrc: '/values/cultura-maior-ou-igual.png',
    imageAlt: 'Cultura do maior ou igual',
  },
];

export function Values() {
  return (
    <section className="lm-section lm-section-soft py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#3565AD]">
            Nossa Essência
          </span>
          <h2 className="mb-6 text-4xl font-bold text-[#0C2041] md:text-5xl">
            Valores que nos movem
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Princípios fundamentais que guiam cada decisão da nossa empresa nos
            mais de 45 anos de história.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -8 }}
              className="group h-full rounded-2xl border border-white/75 bg-white/82 p-6 shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#3565AD] hover:shadow-2xl xl:p-7"
            >
              <div className="mb-6 flex">
                <div className="h-24 w-24 overflow-hidden xl:h-28 xl:w-28">
                  <img
                    src={value.imageSrc}
                    alt={value.imageAlt}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <h3 className="mb-3 text-xl font-semibold leading-tight text-[#0C2041]">
                {value.title}
              </h3>
              <p className="leading-relaxed text-gray-600">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
