import { motion } from 'motion/react';
import { ArrowRight, Bike, Zap } from 'lucide-react';

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

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-10 md:h-screen md:pt-0 md:pb-0"
    >
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-[1.35] object-cover object-[center_74%] md:scale-110 md:object-center"
        >
          <source src="/videoHero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2041]/88 via-[#17355e]/66 to-[#3565AD]/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 text-center md:px-6 lg:px-8 translate-y-6">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-5 text-[3rem] font-bold leading-[1] text-white sm:text-[5.2rem] md:mb-5 md:text-[7.2rem] lg:text-[8.2rem]"
        >
          Somos apaixonados
          <br />
          <span className="text-white">por </span>
          <span className="lm-text-glow-blue-strong">2 rodas</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mx-auto mb-9 max-w-[19rem] text-base leading-relaxed text-white/82 sm:max-w-2xl sm:text-lg md:mb-5  md:max-w-3xl md:text-2xl"
        >
          Desde 1981 revolucionando o mercado de 2 rodas. Distribuidora de
          bicipeças, motopeças, acessórios e peneumáticos para ciclistas e motociclistas,
          atendendo todo o território brasileiro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <button
            onClick={() => scrollToSection('quem-somos')}
            className="group flex w-full max-w-[17.5rem] items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#3565AD] to-[#326BB4] px-6 py-3.5 text-white transition-all duration-300 hover:scale-105 hover:shadow-2xl sm:w-auto sm:max-w-none sm:px-8 sm:py-4"
          >
            Conheça a LM
            <ArrowRight
              className="transition-transform group-hover:translate-x-1"
              size={20}
            />
          </button>
          <button
            onClick={() => scrollToSection('marcas')}
            className="w-full max-w-[17.5rem] rounded-full border-2 border-white/30 bg-white/10 px-6 py-3.5 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/50 hover:bg-white/20 sm:w-auto sm:max-w-none sm:px-8 sm:py-4"
          >
            Nossas Marcas
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-7 flex flex-col items-center gap-3 md:mt-8"
        >
          <span className="text-xs uppercase tracking-[0.34em] text-[#ffffffb0]">
            Acesse nossos portais de compra
          </span>

          <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://portal.lmbike.com.br/glstorefront/glbikes/pt/BRL/"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full max-w-[18rem] items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-white shadow-[0_18px_45px_rgba(12,32,65,0.18)] backdrop-blur-md transition-all duration-300 hover:border-white/28 hover:bg-white/14 hover:shadow-[0_22px_55px_rgba(12,32,65,0.24)] sm:w-auto sm:max-w-none sm:min-w-[220px] sm:px-6"            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white/90 transition-colors duration-300 group-hover:bg-white/18 -translate-x-2">
                <Bike size={18} strokeWidth={1.8} />
              </span>
              <span className="text-sm font-semibold tracking-[0.23em] text-[1.1em]">
                Portal Bike
              </span>
            </a>

            <a
              href="https://portal.lmmoto.com.br/glstorefront/glmotos/pt/BRL/"
              target="_blank"
              rel="noreferrer"
              className="group flex w-full max-w-[18rem] items-center justify-center gap-3 rounded-full border border-white/18 bg-white/8 px-5 py-3 text-white shadow-[0_18px_45px_rgba(12,32,65,0.18)] backdrop-blur-md transition-all duration-300 hover:border-white/28 hover:bg-white/14 hover:shadow-[0_22px_55px_rgba(12,32,65,0.24)] sm:w-auto sm:max-w-none sm:min-w-[220px] sm:px-6"
            >
            
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/12 text-white/90 transition-colors duration-300 group-hover:bg-white/18 -translate-x-2">
                <MotoOutline className="h-[30px] w-[30px] -translate-y-[2px] -translate-x-[3px]" />
              </span>
              <span className="text-sm font-semibold tracking-[0.23em] text-[1em]">
                Portal Moto
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
