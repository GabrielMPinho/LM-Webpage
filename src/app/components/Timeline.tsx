import { motion } from 'motion/react';
import { CalendarDays } from 'lucide-react';

const milestones = [
  {
    year: '1981',
    title: 'Origem da LM',
    category: 'Fundação',
    description:
      'Nasce a primeira revenda Lagoa Moto, ponto de partida da operação que mais tarde daria origem ao ecossistema LM.',
  },
  {
    year: '1988',
    title: 'LM Comercial',
    category: 'Distribuição',
    description:
      'A LM Comercial inicia a distribuição em Lagoa da Prata e estrutura a base do modelo regional de atendimento.',
  },
  {
    year: '1996',
    title: 'Comércio Exterior',
    category: 'Internacional',
    description:
      'A primeira licença de comércio exterior abre caminho para relacionamento direto com fornecedores globais.',
  },
  {
    year: '2004',
    title: 'Expansão Sudeste',
    category: 'Escala',
    description:
      'A operação chega ao Espírito Santo e amplia a presença geográfica da companhia para além da base original.',
  },
  {
    year: '2006',
    title: 'Estreia da High One',
    category: 'Marca Própria',
    description:
      'O primeiro produto High One chega ao mercado e marca o avanço da LM na construção de marcas próprias.',
  },
  {
    year: '2007',
    title: 'Sul e X11',
    category: 'Crescimento',
    description:
      'A operação avança para o Sul do país enquanto a X11 reforça a presença da LM no segmento de moto.',
  },
  {
    year: '2008',
    title: 'Lançamento SCUD',
    category: 'Marca Própria',
    description:
      'A chegada do primeiro produto SCUD acelera a estratégia de diferenciação por marcas próprias e profundidade de mix.',
  },
  {
    year: '2009',
    title: 'WG Sports',
    category: 'Portfólio',
    description:
      'WG Sports estreia para ampliar a atuação em acessórios e linhas com apelo esportivo.',
  },
  {
    year: '2010',
    title: 'Base em São Paulo',
    category: 'Capilaridade',
    description:
      'As operações começam em São Paulo, aproximando estoque e atendimento do maior polo consumidor do país.',
  },
  {
    year: '2014',
    title: 'Centro-Oeste',
    category: 'Logística',
    description:
      'A LM inaugura sua operação no Centro-Oeste para ganhar velocidade logística e ampliar cobertura nacional.',
  },
  {
    year: '2019',
    title: 'Nordeste',
    category: 'Expansão',
    description:
      'Uma nova frente operacional no Nordeste reduz prazos e consolida presença em uma região estratégica.',
  },
  {
    year: '2023',
    title: 'Panther e Comander',
    category: 'Novas Marcas',
    description:
      'Duas novas marcas próprias entram em cena e ampliam o portfólio com propostas complementares.',
  },
  {
    year: '2024',
    title: 'Operação Norte',
    category: 'Cobertura',
    description:
      'O início das operações no Norte completa uma malha de distribuição ainda mais robusta e verdadeiramente nacional.',
  },
  {
    year: '2026',
    title: 'LM na China',
    category: 'Sourcing Global',
    description:
      'A operação na China acelera sourcing, proximidade industrial e inteligência de produto para a próxima fase da companhia.',
  },
];

const rows = [
  {
    items: milestones.slice(0, 5),
    popupSides: ['top', 'top', 'top', 'top', 'top'],
  },
  {
    items: milestones.slice(5, 10).reverse(),
    popupSides: ['top', 'top', 'bottom', 'bottom', 'bottom'],
  },
  {
    items: milestones.slice(10, 14),
    popupSides: ['top', 'top', 'top', 'bottom'],
  },
] as const;

type PopupVerticalSide = 'top' | 'bottom';
type PopupPlacement = {
  cardClasses: string;
  connectorClasses: string;
  yearOnTop: boolean;
};

const popupOverrides: Record<string, PopupPlacement> = {
  '1981': {
    cardClasses:
      'right-[calc(50%+2.1rem)] top-1/2 -translate-y-1/2 -translate-x-2 group-hover:translate-x-0',
    connectorClasses:
      'right-[calc(50%+0.9rem)] top-1/2 h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2006': {
    cardClasses:
      'left-[calc(50%+1.9rem)] bottom-[calc(50%+1.8rem)] translate-x-2 translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] bottom-[calc(50%+0.9rem)] h-px w-9 rotate-[-34deg] origin-left bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2007': {
    cardClasses:
      'left-[calc(50%+1.9rem)] top-[calc(50%+1.8rem)] translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] top-[calc(50%+0.9rem)] h-px w-9 rotate-[34deg] origin-left bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2008': {
    cardClasses:
      'left-[calc(50%+1.9rem)] top-[calc(50%+1.8rem)] translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] top-[calc(50%+0.9rem)] h-px w-9 rotate-[34deg] origin-left bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2009': {
    cardClasses:
      'left-[calc(50%+1.9rem)] top-[calc(50%+1.8rem)] translate-x-2 -translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] top-[calc(50%+0.9rem)] h-px w-9 rotate-[34deg] origin-left bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2010': {
    cardClasses:
      'left-1/2 top-[calc(50%+2.3rem)] -translate-x-1/2 -translate-y-2 group-hover:translate-y-0',
    connectorClasses:
      'left-1/2 top-[calc(50%+0.9rem)] h-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#3565AD]/0 via-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2014': {
    cardClasses:
      'right-[calc(50%+1.9rem)] bottom-[calc(50%+1.8rem)] -translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'right-[calc(50%+0.9rem)] bottom-[calc(50%+0.9rem)] h-px w-9 rotate-[34deg] origin-right bg-gradient-to-l from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2019': {
    cardClasses:
      'left-[calc(50%+1.9rem)] bottom-[calc(50%+1.8rem)] translate-x-2 translate-y-2 group-hover:translate-x-0 group-hover:translate-y-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] bottom-[calc(50%+0.9rem)] h-px w-9 rotate-[-34deg] origin-left bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
  '2026': {
    cardClasses:
      'left-[calc(50%+2.1rem)] top-1/2 -translate-y-1/2 translate-x-2 group-hover:translate-x-0',
    connectorClasses:
      'left-[calc(50%+0.9rem)] top-1/2 h-px w-8 -translate-y-1/2 bg-gradient-to-r from-[#3565AD]/28 to-[#3565AD]/0',
    yearOnTop: false,
  },
};

const ajustes: Record<string, string> = {
  '2006': 'translate-y-9',
  '2008': 'translate-y-3',
  '2009': 'translate-y-3',
  '2010': 'translate-y-2',
  '2014': 'translate-y-12',
  '2019': 'translate-y-4',
  '2023': 'translate-y-5',
  '2024': 'translate-y-5',
  '2026': 'translate-y-5',
};

const stackingOverrides: Record<string, string> = {
  '2008': 'z-40',
};

function getPopupHorizontalPosition(index: number, total: number) {
  if (index === 0) return 'left-0';
  if (index === total - 1) return 'right-0';
  return 'left-1/2 -translate-x-1/2';
}

function getDefaultPopupPlacement(
  popupSide: PopupVerticalSide,
  index: number,
  total: number
): PopupPlacement {
  const popupHorizontalPosition = getPopupHorizontalPosition(index, total);

  return {
    cardClasses: `${popupHorizontalPosition} ${
      popupSide === 'top'
        ? 'bottom-[calc(50%+2.3rem)] translate-y-2 group-hover:translate-y-0'
        : 'top-[calc(50%+2.3rem)] -translate-y-2 group-hover:translate-y-0'
    }`,
    connectorClasses: `left-1/2 h-6 w-px -translate-x-1/2 bg-gradient-to-b from-[#3565AD]/0 via-[#3565AD]/28 to-[#3565AD]/0 ${
      popupSide === 'top' ? 'bottom-[calc(50%+0.9rem)]' : 'top-[calc(50%+0.9rem)]'
    }`,
    yearOnTop: popupSide === 'bottom',
  };
}

export function Timeline() {
  return (
    <section
      id="historia"
      className="lm-section lm-section-soft relative flex min-h-screen items-center py-10 lg:min-h-[92vh] lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:mb-10"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#3565AD]">
            Nossa Jornada
          </span>
          <h2 className="text-3xl font-bold text-[#0C2041] sm:text-4xl md:text-5xl">
            Décadas de Evolução
          </h2>
        </motion.div>

        <div className="lg:hidden">
          <div className="relative rounded-[2rem] border border-white/75 bg-white/60 p-4 shadow-[0_30px_80px_rgba(12,32,65,0.10)] backdrop-blur-md">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[8%] top-[16%] h-24 w-24 rounded-full bg-[#3565AD]/6 blur-3xl" />
              <div className="absolute right-[6%] bottom-[16%] h-24 w-24 rounded-full bg-[#326BB4]/7 blur-3xl" />
            </div>

            <div className="relative rounded-[1.6rem] border border-white/70 bg-white/58 p-4 shadow-[0_18px_45px_rgba(12,32,65,0.05)] backdrop-blur-sm">
              <div className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-[#3565AD]/20 via-[#3565AD]/40 to-[#3565AD]/15" />

              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.04 }}
                    className="relative pl-10"
                  >
                    <div className="absolute left-0 top-5 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.78)]">
                      <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#3565AD] to-[#326BB4]" />
                    </div>

                    <div className="rounded-2xl border border-white/75 bg-[#0C2041]/95 p-4 text-left text-white shadow-[0_20px_55px_rgba(12,32,65,0.18)] backdrop-blur-xl">
                      <div className="mb-3 flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                          <CalendarDays size={18} className="text-[#8BB2F1]" />
                        </div>
                        <div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8BB2F1]">
                            {milestone.category}
                          </p>
                          <h3 className="mt-1 text-base font-semibold text-white">
                            {milestone.title}
                          </h3>
                        </div>
                      </div>

                      <div className="mb-3 inline-flex rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-white/82">
                        {milestone.year}
                      </div>

                      <p className="text-sm leading-6 text-white/78">
                        {milestone.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <div className="relative rounded-[2rem] border border-white/75 bg-white/60 px-4 py-5 shadow-[0_30px_80px_rgba(12,32,65,0.10)] backdrop-blur-md lg:px-6 lg:py-6">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-[8%] top-[16%] h-28 w-28 rounded-full bg-[#3565AD]/6 blur-3xl" />
              <div className="absolute right-[6%] bottom-[16%] h-28 w-28 rounded-full bg-[#326BB4]/7 blur-3xl" />
            </div>

            <div className="relative overflow-visible rounded-[1.6rem] border border-white/70 bg-white/52 px-4 py-6 shadow-[0_18px_45px_rgba(12,32,65,0.05)] backdrop-blur-sm lg:px-8 lg:py-8">
              <svg
                viewBox="0 0 1000 480"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
                aria-hidden="true"
              >
                <path
                  d="M92 96 H792 C882 96 922 160 922 204 C922 239 885 252 818 252 H214 C126 252 82 316 82 360 C82 395 119 408 182 408 H846"
                  stroke="rgba(53,101,173,0.18)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                <path
                  d="M92 96 H792 C882 96 922 160 922 204 C922 239 885 252 818 252 H214 C126 252 82 316 82 360 C82 395 119 408 182 408 H846"
                  stroke="rgba(53,101,173,0.52)"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </svg>

              <div className="relative space-y-6 lg:space-y-7">
                {rows.map((row, rowIndex) => (
                  <div
                    key={`row-${rowIndex}`}
                    className="grid h-28 gap-3 sm:gap-4 lg:h-32"
                    style={{
                      gridTemplateColumns: `repeat(${row.items.length}, minmax(0, 1fr))`,
                    }}
                  >
                    {row.items.map((milestone, itemIndex) => {
                      const popupSide = row.popupSides[itemIndex];
                      const placement =
                        popupOverrides[milestone.year] ??
                        getDefaultPopupPlacement(popupSide, itemIndex, row.items.length);

                      return (
                        <motion.div
                          key={`${rowIndex}-${milestone.year}`}
                          initial={{ opacity: 0, y: 18 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                        transition={{ delay: rowIndex * 0.08 + itemIndex * 0.06 }}
                        className={`group relative isolate min-h-0 min-w-0 ${
                          ajustes[milestone.year] || ''
                        } ${stackingOverrides[milestone.year] || ''} hover:z-[80]`}
                      >
                          <div
                            className={`absolute left-1/2 -translate-x-1/2 text-center ${
                              placement.yearOnTop ? 'top-2' : 'bottom-2'
                            }`}
                          >
                            <span className="text-sm font-semibold uppercase tracking-[0.28em] text-[#0C2041] sm:text-base">
                              {milestone.year}
                            </span>
                          </div>

                          <div className="absolute left-1/2 top-1/2 z-20 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center">
                            <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white bg-white shadow-[0_0_0_6px_rgba(255,255,255,0.78)]">
                              <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-[#3565AD] to-[#326BB4] transition-transform duration-300 group-hover:scale-125" />
                            </div>
                          </div>

                          <div
                            className={`pointer-events-none absolute z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${placement.connectorClasses}`}
                          />

                          <div
                            className={`pointer-events-none absolute z-30 w-[14.5rem] rounded-2xl border border-white/80 bg-[#0C2041]/96 p-4 text-left text-white opacity-0 shadow-[0_24px_70px_rgba(12,32,65,0.28)] backdrop-blur-xl transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100 ${placement.cardClasses}`}
                          >
                            <div className="mb-3 flex items-center gap-3">
                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                                <CalendarDays size={18} className="text-[#8BB2F1]" />
                              </div>
                              <div>
                                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8BB2F1]">
                                  {milestone.category}
                                </p>
                                <h3 className="mt-1 text-base font-semibold text-white">
                                  {milestone.title}
                                </h3>
                              </div>
                            </div>

                            <p className="text-sm leading-6 text-white/78">
                              {milestone.description}
                            </p>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
