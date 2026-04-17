import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from 'motion/react';
import { CalendarDays } from 'lucide-react';
import { useMotionValueEvent } from 'motion/react';
import { useCallback, useEffect, useRef, useState } from 'react';

const milestones = [
  {
    year: '1981',
    title: 'Origem da LM',
    category: 'Fundacao',
    description:
      'Nasce a primeira revenda Lagoa Moto, ponto de partida da operacao que mais tarde daria origem ao ecossistema LM.',
  },
  {
    year: '1988',
    title: 'LM Comercial',
    category: 'Distribuicao',
    description:
      'A LM Comercial inicia a distribuicao em Lagoa da Prata e estrutura a base do modelo regional de atendimento.',
  },
  {
    year: '1996',
    title: 'Comercio Exterior',
    category: 'Internacional',
    description:
      'A primeira licenca de comercio exterior abre caminho para relacionamento direto com fornecedores globais.',
  },
  {
    year: '2004',
    title: 'Expansao Sudeste',
    category: 'Escala',
    description:
      'A operacao chega ao Espirito Santo e amplia a presenca geografica da companhia para alem da base original.',
  },
  {
    year: '2006',
    title: 'Estreia da High One',
    category: 'Marca Propria',
    description:
      'O primeiro produto High One chega ao mercado e marca o avanco da LM na construcao de marcas proprias.',
  },
  {
    year: '2007',
    title: 'Sul e X11',
    category: 'Crescimento',
    description:
      'A operacao avanca para o Sul do pais enquanto a X11 reforca a presenca da LM no segmento de moto.',
  },
  {
    year: '2008',
    title: 'Lancamento SCUD',
    category: 'Marca Propria',
    description:
      'A chegada do primeiro produto SCUD acelera a estrategia de diferenciacao por marcas proprias e profundidade de mix.',
  },
  {
    year: '2009',
    title: 'WG Sports',
    category: 'Portfolio',
    description:
      'WG Sports estreia para ampliar a atuacao em acessorios e linhas com apelo esportivo.',
  },
  {
    year: '2010',
    title: 'Base em Sao Paulo',
    category: 'Capilaridade',
    description:
      'As operacoes comecam em Sao Paulo, aproximando estoque e atendimento do maior polo consumidor do pais.',
  },
  {
    year: '2014',
    title: 'Centro-Oeste',
    category: 'Logistica',
    description:
      'A LM inaugura sua operacao no Centro-Oeste para ganhar velocidade logistica e ampliar cobertura nacional.',
  },
  {
    year: '2019',
    title: 'Nordeste',
    category: 'Expansao',
    description:
      'Uma nova frente operacional no Nordeste reduz prazos e consolida presenca em uma regiao estrategica.',
  },
  {
    year: '2023',
    title: 'Panther e Comander',
    category: 'Novas Marcas',
    description:
      'Duas novas marcas proprias entram em cena e ampliam o portfolio com propostas complementares.',
  },
  {
    year: '2024',
    title: 'Operacao Norte',
    category: 'Cobertura',
    description:
      'O inicio das operacoes no Norte completa uma malha de distribuicao ainda mais robusta e verdadeiramente nacional.',
  },
  {
    year: '2026',
    title: 'LM na China',
    category: 'Sourcing Global',
    description:
      'A operacao na China acelera sourcing, proximidade industrial e inteligencia de produto para a proxima fase da companhia.',
  },
];

type Milestone = (typeof milestones)[number];

function TimelineMilestone({
  milestone,
  index,
  isActive,
  registerMarker,
}: {
  milestone: Milestone;
  index: number;
  isActive: boolean;
  registerMarker: (index: number, node: HTMLDivElement | null) => void;
}) {
  const itemRef = useRef<HTMLElement | null>(null);
  const isEven = index % 2 === 0;

  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'end start'],
  });

  const cardY = useTransform(scrollYProgress, [0, 0.5, 1], [34, 0, -34]);

  return (
    <motion.article ref={itemRef} className="relative pl-8 md:pl-0">
      <div className="absolute left-[0.78rem] top-7 z-20 -translate-x-7 md:left-1/2 md:top-8 md:-translate-x-1/2">
        <div ref={(node) => registerMarker(index, node)}>
          <div
            className={`relative flex h-6 w-6 items-center justify-center rounded-full border transition-all duration-500 md:h-7 md:w-7 ${
              isActive
                ? 'border-[#3565AD]/30 bg-[#0C2041] shadow-[0_0_0_7px_rgba(53,101,173,0.12)]'
                : 'border-white bg-white shadow-[0_0_0_7px_rgba(255,255,255,0.78)]'
            }`}
          >
            <span
              className={`block rounded-full transition-all duration-500 ${
                isActive
                  ? 'h-3 w-3 bg-gradient-to-br from-[#8DB6FF] to-[#3565AD] md:h-3.5 md:w-3.5'
                  : 'h-2 w-2 bg-[#B5C8E8] md:h-2.5 md:w-2.5'
              }`}
            />
          </div>
        </div>
      </div>

      <div
        className={`md:flex ${isEven ? 'md:justify-start' : 'md:justify-end'}`}
      >
        <div className="w-full md:w-[calc(50%-2.75rem)]">
          <motion.div
            className={`relative overflow-hidden rounded-[1.4rem] border p-4 shadow-[0_24px_60px_rgba(12,32,65,0.10)] transition-all duration-500 md:rounded-[1.65rem] md:p-6 ${
              isActive
                ? 'border-[#3565AD]/16 bg-[#0C2041] text-white shadow-[0_28px_70px_rgba(12,32,65,0.20)]'
                : 'border-white/80 bg-white/68 text-[#0C2041]'
            }`}
            style={{ y: cardY }}
          >
            <div
              className={`pointer-events-none absolute inset-0 ${
                isActive
                  ? 'bg-[radial-gradient(circle_at_top_right,rgba(141,182,255,0.22),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(53,101,173,0.22),transparent_34%)]'
                  : 'bg-[radial-gradient(circle_at_top_right,rgba(53,101,173,0.08),transparent_28%)]'
              }`}
            />

            <div className="relative">
              <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                <div className="min-w-0">
                  <div
                    className={`mb-3 inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] sm:px-3 sm:text-[11px] sm:tracking-[0.24em] ${
                      isActive
                        ? 'border-white/12 bg-white/8 text-[#9BC0FF]'
                        : 'border-[#3565AD]/14 bg-[#3565AD]/7 text-[#3565AD]'
                    }`}
                  >
                    <CalendarDays size={14} />
                    {milestone.category}
                  </div>

                  <h3
                    className={`max-w-md text-lg font-semibold leading-tight sm:text-xl md:text-2xl ${
                      isActive ? 'text-white' : 'text-[#0C2041]'
                    }`}
                  >
                    {milestone.title}
                  </h3>
                </div>

                <div className="flex items-end justify-between gap-3 sm:block sm:text-right">
                  <p
                    className={`text-[2rem] font-bold leading-none sm:text-[2.25rem] md:text-[2.9rem] ${
                      isActive ? 'lm-text-glow-blue' : 'text-[#3565AD]'
                    }`}
                  >
                    {milestone.year}
                  </p>
                  <p
                    className={`text-[10px] font-semibold uppercase tracking-[0.18em] sm:mt-1 sm:text-[11px] sm:tracking-[0.24em] ${
                      isActive ? 'text-white/52' : 'text-slate-400'
                    }`}
                  >
                    Marco {String(index + 1).padStart(2, '0')}
                  </p>
                </div>
              </div>

              <p
                className={`max-w-xl text-[14px] leading-7 md:text-[15px] ${
                  isActive ? 'text-white/76' : 'text-slate-600'
                }`}
              >
                {milestone.description}
              </p>

              <div className="mt-5">
                <div
                  className={`h-px w-full ${
                    isActive
                      ? 'bg-gradient-to-r from-[#8DB6FF]/60 to-transparent'
                      : 'bg-gradient-to-r from-[#3565AD]/22 to-transparent'
                  }`}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}

export function Timeline() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const markerRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [markerStops, setMarkerStops] = useState<number[]>([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  const registerMarker = useCallback(
    (index: number, node: HTMLDivElement | null) => {
      markerRefs.current[index] = node;
    },
    []
  );

  const computeMarkerStops = useCallback(() => {
    const trackNode = trackRef.current;

    if (!trackNode) {
      return;
    }

    const trackRect = trackNode.getBoundingClientRect();
    if (trackRect.height <= 0) {
      return;
    }

    const startOffset = window.innerHeight * 0.24;
    const totalTravel = startOffset + trackRect.height;
    const stops = markerRefs.current.map((node) => {
      if (!node) {
        return 0;
      }

      const markerRect = node.getBoundingClientRect();
      const markerCenterWithinTrack =
        markerRect.top + markerRect.height / 2 - trackRect.top;

      return Math.min(
        1,
        Math.max(0, (startOffset + markerCenterWithinTrack) / totalTravel)
      );
    });

    setMarkerStops(stops);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });

  const progressScale = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.25,
  });

  const progressOpacity = useTransform(scrollYProgress, [0, 0.08], [0.45, 1]);

  useEffect(() => {
    computeMarkerStops();
    window.addEventListener('resize', computeMarkerStops);

    return () => window.removeEventListener('resize', computeMarkerStops);
  }, [computeMarkerStops]);

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    if (!markerStops.length) {
      return;
    }

    let nextActiveIndex = -1;
    for (let i = 0; i < markerStops.length; i += 1) {
      if (latest >= markerStops[i]) {
        nextActiveIndex = i;
      } else {
        break;
      }
    }

    setActiveIndex((current) =>
      current === nextActiveIndex ? current : nextActiveIndex
    );
  });

  return (
    <section
      id="historia"
      ref={sectionRef}
      className="lm-section lm-section-soft relative py-12 lg:py-16"
    >
      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:mb-12"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#3565AD]">
            Nossa Jornada
          </span>
          <h2 className="text-3xl font-bold text-[#0C2041] sm:text-4xl md:text-5xl">
            Décadas de Evolucao
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base">
            Uma leitura vertical da evolucao da LM, onde cada marco responde ao
            scroll com destaque progressivo e transicoes mais fluidas.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl rounded-[2rem] border border-white/75 bg-white/60 px-4 py-6 shadow-[0_30px_80px_rgba(12,32,65,0.10)] backdrop-blur-md lg:px-8 lg:py-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-[8%] top-[10%] h-28 w-28 rounded-full bg-[#3565AD]/8 blur-3xl" />
            <div className="absolute right-[8%] bottom-[8%] h-28 w-28 rounded-full bg-[#326BB4]/10 blur-3xl" />
          </div>

          <div className="relative rounded-[1.7rem] border border-white/70 bg-white/56 px-4 py-8 shadow-[0_18px_45px_rgba(12,32,65,0.05)] backdrop-blur-sm md:px-6 lg:px-10 lg:py-10">
            <div
              ref={trackRef}
              className="pointer-events-none absolute bottom-10 left-[0.78rem] top-10 w-px bg-gradient-to-b from-[#3565AD]/12 via-[#3565AD]/20 to-[#3565AD]/8 md:left-1/2 md:-translate-x-1/2"
            />
            <motion.div
              aria-hidden="true"
              className="pointer-events-none absolute bottom-10 left-[0.78rem] top-[-24vh] origin-top w-px bg-[linear-gradient(180deg,rgba(225,238,255,0)_0%,rgba(169,200,255,0.9)_28%,rgba(95,146,243,0.95)_64%,rgba(12,32,65,1)_100%)] shadow-[0_0_22px_rgba(53,101,173,0.24)] md:left-1/2 md:-translate-x-1/2"
              style={{ scaleY: progressScale, opacity: progressOpacity }}
            />

            <div className="relative space-y-5 md:space-y-7">
              {milestones.map((milestone, index) => (
                <TimelineMilestone
                  key={milestone.year}
                  milestone={milestone}
                  index={index}
                  isActive={index === activeIndex}
                  registerMarker={registerMarker}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
