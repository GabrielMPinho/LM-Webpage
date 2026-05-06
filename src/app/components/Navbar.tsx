import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { publicPath } from '../lib/public-path';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Quem somos', id: 'quem-somos' },
    { label: 'História', id: 'historia' },
    { label: 'Marcas', id: 'marcas' },
    { label: 'Logística', id: 'logistica' },
    { label: 'Carreira', id: 'carreira' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0C2041]/95 backdrop-blur-md shadow-lg'
          : 'bg-[#0C2041]/94 md:bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          {/* Logo */}
          <motion.button
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => scrollToSection('hero')}
            className="relative flex h-10 w-[116px] items-center overflow-hidden sm:w-[132px] md:h-14 md:w-[200px]"
            aria-label="Voltar ao topo"
          >
            <img
              src={publicPath('logo.png')}
              alt="LM"
              className="absolute left-1/2 top-1/2 h-[360%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain md:h-[400%]"
            />
          </motion.button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => scrollToSection(item.id)}
                className="text-white/90 hover:text-white transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#3565AD] group-hover:w-full transition-all duration-300" />
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="#contato"
              onClick={() => scrollToSection('contato')}
              className="px-6 py-2.5 bg-gradient-to-r from-[#3565AD] to-[#326BB4] text-white rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              Fale Conosco
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0C2041]/98 backdrop-blur-md"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left text-white/90 hover:text-white py-2"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contato"
                onClick={() => scrollToSection('contato')}
                className="block w-full rounded-full bg-gradient-to-r from-[#3565AD] to-[#326BB4] px-6 py-2.5 text-center text-white"
              >
                Fale Conosco
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
