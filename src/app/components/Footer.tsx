import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="lm-section lm-section-footer text-white">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Column 1 - About */}
          <div>
            <div className="relative mb-6 flex h-56 w-[250px] items-center overflow-hidden md:h-[5.8rem] md:w-[270px]">
              <img
                src="/logoFooter.png"
                alt="LM"
                className="absolute left-1/2 top-1/2 h-[400%] max-w-none -translate-x-1/2 -translate-y-1/2 object-contain"
              />
            </div>
            <p className="text-white/70 mb-6 leading-relaxed">
              Mais de 45 anos conectando o Brasil ao mundo das duas rodas com
              excelência e confiabilidade.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3565AD] transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3565AD] transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-[#3565AD] transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('sobre')}
                  className="text-white/70 hover:text-[#3565AD] transition-colors"
                >
                  Sobre Nós
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('historia')}
                  className="text-white/70 hover:text-[#3565AD] transition-colors"
                >
                  Nossa História
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('marcas')}
                  className="text-white/70 hover:text-[#3565AD] transition-colors"
                >
                  Marcas
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('logistica')}
                  className="text-white/70 hover:text-[#3565AD] transition-colors"
                >
                  Logística
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3 - Services */}
          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li className="text-white/70">Distribuição Nacional</li>
              <li className="text-white/70">Importação de Peças</li>
              <li className="text-white/70">Logística Integrada</li>
              <li className="text-white/70">Parcerias Comerciais</li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="text-[#3565AD] flex-shrink-0 mt-1" size={18} />
                <span className="text-white/70">R. Min. Orozimbo Nonato, 102 - Vila da Serra, Nova Lima - MG, 34006-053</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-[#3565AD] flex-shrink-0 mt-1" size={18} />
                <span className="text-white/70">0800 970 4044</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="text-[#3565AD] flex-shrink-0 mt-1" size={18} />
                <span className="text-white/70">contato@lmdistribuidora.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {currentYear} LM Distribuidora. Todos os direitos reservados.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-[#3565AD] transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-white/60 hover:text-[#3565AD] transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
