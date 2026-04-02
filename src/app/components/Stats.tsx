import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { BookOpenText, Building2, MapPin, Users } from 'lucide-react';

const stats = [
  { icon: Building2, value: 45, suffix: '+', label: 'Anos de História' },
  { icon: BookOpenText, value: 14000, suffix: '+', label: 'Itens no Catálogo' },
  { icon: Users, value: 189, suffix: '+', label: 'Fornecedores' },
  { icon: MapPin, value: 7, suffix: '', label: 'Centros de Distribuição' },
];

const distributionCenters = [
  { code: 'WNO', label: 'Pará', left: '55%', top: '24%' },
  { code: 'WCO', label: 'Goiás', left: '62%', top: '55%' },
  { code: 'WNE', label: 'Pernambuco', left: '88%', top: '37%' },
  { code: 'WSP', label: 'São Paulo', left: '65%', top: '70%' },
  { code: 'WSUL', label: 'Santa Catarina', left: '56%', top: '84%' },
  { code: 'MB', label: 'Espírito Santo', left: '78%', top: '62%' },
  { code: 'LM', label: 'Lagoa da Prata (MG)', left: '71%', top: '64%' },
];

const brazilMaskStyle = {
  WebkitMaskImage: "url('/brazil-map.svg')",
  maskImage: "url('/brazil-map.svg')",
  WebkitMaskPosition: 'center',
  maskPosition: 'center',
  WebkitMaskRepeat: 'no-repeat',
  maskRepeat: 'no-repeat',
  WebkitMaskSize: 'contain',
  maskSize: 'contain',
} as const;

function CountUp({
  end,
  duration = 2,
  isInView,
}: {
  end: number;
  duration?: number;
  isInView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = (currentTime - startTime) / (duration * 1000);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [duration, end, isInView]);

  return <>{count}</>;
}

export function Stats() {
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="lm-section lm-section-dark relative flex min-h-screen items-center py-10 lg:py-24"
    >
      <div className="absolute inset-0 opacity-8">
        <div className="bg-[#0C2041]/95 backdrop-blur-md shadow-lg" />
        <div className="bg-[#0C2041]/95 backdrop-blur-md shadow-lg" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-none px-5 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:mb-12"
        >
          <span className="mb-4 block uppercase tracking-wider text-[#497ecf]">
            Nossos Números
          </span>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Escala e Confiança
          </h2>
        </motion.div>

        <div className="grid gap-4 lg:grid-cols-3 lg:auto-rows-[14rem] lg:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[0.92] overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm sm:aspect-square lg:row-span-2 lg:aspect-auto lg:h-full lg:p-6"
          >
            <div className="absolute inset-0">
              <div className="absolute left-6 top-6 h-24 w-24 rounded-full bg-[#3565AD]/20 blur-3xl" />
              <div className="absolute bottom-6 right-6 h-24 w-24 rounded-full bg-[#326BB4]/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex h-full flex-col">
              <div className="mb-3">
                <span className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.08] px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-white/[0.65]">
                  Cobertura Nacional
                </span>
                <h3 className="mt-3 text-lg font-bold text-white sm:text-xl">
                  Nossos centros de distribuição no Brasil
                </h3>
              </div>

              <div className="relative min-h-0 flex-1">
                <div className="absolute inset-x-[9%] inset-y-[10%] sm:inset-x-[10%] sm:inset-y-[8%]">
                  <img
                    src="/brazil-map.svg"
                    alt="Mapa do Brasil"
                    className="absolute inset-0 h-full w-full object-contain opacity-20"
                  />
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-[#6E9BE0] via-[#2F5FA4] to-[#0C2041] opacity-95 drop-shadow-[0_18px_30px_rgba(7,18,36,0.35)]"
                    style={brazilMaskStyle}
                  />

                  {distributionCenters.map((center, index) => (
                    <motion.button
                      key={center.code}
                      type="button"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.15 + index * 0.08 }}
                      className="group absolute -translate-x-1/2 -translate-y-1/2"
                      style={{ left: center.left, top: center.top }}
                    >
                      <motion.span
                        animate={{ scale: [1, 1.55, 1], opacity: [0.55, 0, 0.55] }}
                        transition={{
                          duration: 2.6,
                          repeat: Infinity,
                          delay: index * 0.25,
                        }}
                        className="absolute left-1/2 top-1/2 h-7 w-7 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6FA8FF]/40 blur-sm sm:h-9 sm:w-9"
                      />
                      <span className="relative flex h-3.5 w-3.5 items-center justify-center rounded-full border border-white/70 bg-[#DDEBFF] shadow-[0_0_18px_rgba(111,168,255,0.75)] sm:h-4 sm:w-4">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#0C2041]" />
                      </span>
                      <span className="pointer-events-none absolute left-1/2 top-full mt-3 hidden w-max -translate-x-1/2 rounded-full border border-white/15 bg-[#08172e]/[0.88] px-3 py-1.5 text-[11px] font-medium tracking-[0.12em] text-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-1 group-hover:opacity-100 lg:block">
                        {center.code} | {center.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="min-h-[12.5rem] rounded-2xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur-sm transition-all duration-300 hover:scale-[1.03] hover:bg-white/10 lg:h-full lg:min-h-0 lg:p-6">
                <div className="mb-4 flex justify-center pt-1">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#3565AD] to-[#326BB4] transition-transform group-hover:scale-110 lg:h-16 lg:w-16">
                    <stat.icon className="text-white" size={28} />
                  </div>
                </div>
                <div className="mb-2 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                  <CountUp end={stat.value} isInView={isInView} />
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-sm text-white/70 sm:text-base">{stat.label}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
