import { motion } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

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
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full scale-125 object-cover md:scale-110"
        >
          <source src="/videoHero.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-gradient-to-r from-[#0C2041]/88 via-[#17355e]/66 to-[#3565AD]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Zap className="text-[#ffffffb0]" size={24} />
          <span className="text-[#ffffffb0] uppercase tracking-wider">
            Mais de 45 anos de experiência
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight"
        >
          Somos apaixonados
          <br />
          <span className="bg-gradient-to-r from-[#3565AD] to-[#326BB4] bg-clip-text text-transparent">
            por 2 rodas
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto"
        >
          Desde 1981 revolucionando o mercado de 2 rodas. Distribuidora de
          bicipeças, motopeças e acessórios para ciclistas e motociclistas,
          atendendo todo o território brasileiro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('sobre')}
            className="group px-8 py-4 bg-gradient-to-r from-[#3565AD] to-[#326BB4] text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2"
          >
            Conheça a LM
            <ArrowRight
              className="group-hover:translate-x-1 transition-transform"
              size={20}
            />
          </button>
          <button
            onClick={() => scrollToSection('marcas')}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
          >
            Nossas Marcas
          </button>
        </motion.div>
      </div>
    </section>
  );
}
