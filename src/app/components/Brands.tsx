import { motion } from 'motion/react';
import { Bike } from 'lucide-react';

type Brand = {
  name: string;
  logoSrc: string;
  logoAlt?: string;
  logoClassName?: string;
};

const motoBrands: Brand[] = [
  {
    name: 'AGV',
    logoSrc: '/avg.png',
    logoAlt: 'Logo AGV',
    logoClassName: 'max-h-24 max-w-[10rem]',
  },
  {
    name: 'LEOVINCE',
    logoSrc: '/Leovince.webp',
    logoAlt: 'Logo Leovince',
    logoClassName: 'max-h-24 max-w-[10.5rem]',
  },
  {
    name: 'CHOHO',
    logoSrc: '/choho.png',
    logoAlt: 'Logo Choho',
    logoClassName: 'max-h-40 max-w-[13em]',
  },
  {
    name: 'SCUD',
    logoSrc: '/scud.png',
    logoAlt: 'Logo Scud',
    logoClassName: 'max-h-40 max-w-[10rem]',
  },
  {
    name: 'X11',
    logoSrc: '/x11.png',
    logoAlt: 'Logo X11',
    logoClassName: 'max-h-40 max-w-[9.5rem]',
  },
];

const bikeBrands: Brand[] = [
  {
    name: 'DAHON',
    logoSrc: '/dahon.jpg',
    logoAlt: 'Logo Dahon',
    logoClassName: 'max-h-24 max-w-[9.5rem]',
  },
  {
    name: 'WG Imports',
    logoSrc: '/wg.jpg',
    logoAlt: 'Logo WG',
    logoClassName: 'max-h-18 max-w-[10.75rem]',
  },
  {
    name: 'MOSSO',
    logoSrc: '/mosso.png',
    logoAlt: 'Logo Mosso',
    logoClassName: 'max-h-24 max-w-[10rem]',
  },
  {
    name: 'SENTEC',
    logoSrc: '/sentec.jpg',
    logoAlt: 'Logo Sentec',
    logoClassName: 'max-h-25 max-w-[9rem]',
  },
  {
    name: 'HIGH ONE',
    logoSrc: '/high%20one.jpg',
    logoAlt: 'Logo High One',
    logoClassName: 'max-h-24 max-w-[10rem]',
  },
];

function MotoOutline({
  className = '',
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <path
        d="M19 45a7 7 0 1 1 0 0.1M49 45a7 7 0 1 1 0 0.1M26 27h10l5 8h8M28 27l-5 8M36 23h6l4 8M30 35h11M23 35h-4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BrandCard({
  brand,
}: {
  brand: Brand;
}) {
  return (
    <div className="group relative flex h-full w-[15rem] flex-shrink-0 items-center justify-center rounded-2xl border border-white/75 bg-white/82 p-4 backdrop-blur-md transition-all duration-300 hover:border-[#3565AD] hover:shadow-xl md:w-[15.5rem] xl:w-[16rem]">
      <div className="flex h-[8.75rem] w-full items-center justify-center rounded-xl bg-white/72 px-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_12px_30px_rgba(12,32,65,0.05)]">
        <img
          src={brand.logoSrc}
          alt={brand.logoAlt ?? `Logo ${brand.name}`}
          className={`object-contain ${brand.logoClassName ?? 'max-h-24 max-w-[10rem]'}`}
        />
      </div>

      <div className="absolute inset-0 rounded-2xl border-2 border-[#3565AD] opacity-0 transition-opacity group-hover:opacity-100" />
    </div>
  );
}

export function Brands() {
  return (
    <section id="marcas" className="lm-section lm-section-light relative py-16 lg:py-18">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <MotoOutline className="absolute right-[1.5%] top-[28%] h-50 w-50 text-slate-400/[0.15]" />
        <Bike
          className="absolute left-[1%] top-[58%] h-40 w-40 text-slate-400/[0.18]"
          strokeWidth={1.5}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center lg:mb-12"
        >
          <span className="mb-2 mt-1 block uppercase tracking-wider text-[#3565AD]">
            Portfólio Próprio
          </span>
          <h2 className="mb-6 text-4xl font-bold text-[#0C2041] md:text-5xl">
            Marcas para Moto e Bike
          </h2>
          <p className="mx-auto mt-0.5 max-w-3xl text-lg text-gray-600">
            Organizamos nossas marcas próprias em duas frentes claras: a
            primeira linha dedicada ao universo de moto e a segunda ao segmento
            bike.
          </p>
        </motion.div>

        <div className="space-y-3 overflow-hidden lg:space-y-4">
          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-4">
              <a
                href="https://portal.lmmoto.com.br/glstorefront/glmotos/pt/BRL/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#3565AD]/18 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0C2041] backdrop-blur-sm transition-all duration-300 hover:border-[#3565AD]/30 hover:bg-white/86 hover:shadow-[0_14px_34px_rgba(12,32,65,0.08)]"
              >
                <MotoOutline className="h-4 w-4 text-[#3565AD]" />
                Marcas de Moto
              </a>
            </div>

            <div className="overflow-hidden">
              <div className="brand-track brand-track-left flex w-max">
                <div className="flex gap-6 pr-6">
                  {motoBrands.map((brand) => (
                    <BrandCard key={`moto-a-${brand.name}`} brand={brand} />
                  ))}
                </div>
                <div className="flex gap-6 pr-6">
                  {motoBrands.map((brand) => (
                    <BrandCard key={`moto-b-${brand.name}`} brand={brand} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <div className="flex items-center justify-between gap-4">
              <a
                href="https://portal.lmbike.com.br/glstorefront/glbikes/pt/BRL/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full border border-[#3565AD]/18 bg-white/70 px-4 py-2 text-sm font-semibold text-[#0C2041] backdrop-blur-sm transition-all duration-300 hover:border-[#3565AD]/30 hover:bg-white/86 hover:shadow-[0_14px_34px_rgba(12,32,65,0.08)]"
              >
                <Bike className="h-4 w-4 text-[#3565AD]" strokeWidth={1.8} />
                Marcas de Bike
              </a>
            </div>

            <div className="overflow-hidden">
              <div className="brand-track brand-track-right flex w-max">
                <div className="flex gap-6 pr-6">
                  {bikeBrands.map((brand) => (
                    <BrandCard key={`bike-a-${brand.name}`} brand={brand} />
                  ))}
                </div>
                <div className="flex gap-6 pr-6">
                  {bikeBrands.map((brand) => (
                    <BrandCard key={`bike-b-${brand.name}`} brand={brand} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes brands-marquee-left {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        @keyframes brands-marquee-right {
          from {
            transform: translateX(-50%);
          }
          to {
            transform: translateX(0);
          }
        }

        .brand-track-left {
          animation: brands-marquee-left 28s linear infinite;
        }

        .brand-track-right {
          animation: brands-marquee-right 28s linear infinite;
        }

        .brand-track-left:hover,
        .brand-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
