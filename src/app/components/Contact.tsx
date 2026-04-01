import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content: 'R. Min. Orozimbo Nonato, 102 - Vila da Serra, Nova Lima - MG, 34006-053',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '0800 970 4044',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'contato@lmdistribuidora.com.br',
    },
  ];

  const socialMedia = [
    { icon: Facebook, url: '#', color: '#1877F2' },
    { icon: Instagram, url: 'http://instagram.com/lmmotooficial/', color: '#E4405F' },
    { icon: Linkedin, url: 'https://www.linkedin.com/company/lmduasrodas/posts/?feedView=all', color: '#0A66C2' },
  ];

  return (
    <section
      id="contato"
      className="lm-section lm-section-light relative flex min-h-screen scroll-mt-20 items-center py-12 lg:min-h-[calc(100vh-5rem)] lg:py-10"
    >
      <div className="relative z-10 mx-auto w-full max-w-none px-6 lg:px-12 xl:px-16 2xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center lg:mb-10"
        >
          <span className="mb-3 block uppercase tracking-wider text-[#3565AD]">
            Fale Conosco
          </span>
          <h2 className="text-4xl font-bold text-[#0C2041] md:text-5xl">
            Entre em Contato
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:min-h-[calc(100vh-16rem)] lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,1.1fr)] lg:items-stretch xl:gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full lg:flex-col lg:justify-center"
          >
            <h3 className="mb-4 text-2xl font-semibold text-[#0C2041]">
              Informações de Contato
            </h3>
            <p className="mb-5 max-w-xl leading-relaxed text-gray-600">
              Estamos prontos para atender você. Entre em contato através de
              qualquer um dos canais abaixo.
            </p>

            <div className="mb-6 space-y-3">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 rounded-xl border border-white/70 bg-white/82 p-3.5 shadow-sm backdrop-blur-md transition-shadow hover:shadow-md"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#3565AD] to-[#326BB4]">
                    <info.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="mb-1 font-semibold text-[#0C2041]">
                      {info.title}
                    </p>
                    <p className="text-gray-600">{info.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div>
              <h4 className="mb-3 font-semibold text-[#0C2041]">
                Redes Sociais
              </h4>
              <div className="flex gap-4">
                {socialMedia.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -4 }}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/70 bg-white/82 shadow-sm backdrop-blur-md transition-all hover:shadow-md"
                    style={{ color: social.color }}
                  >
                    <social.icon size={24} />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:flex lg:h-full"
          >
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-white/75 bg-white/84 p-5 shadow-lg backdrop-blur-md lg:flex lg:h-full lg:w-full lg:flex-col lg:justify-center lg:p-6"
            >
              <div className="space-y-4 lg:flex lg:h-full lg:flex-col lg:justify-between">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3565AD]"
                    placeholder="Seu nome"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3565AD]"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3565AD]"
                    placeholder="(11) 90000-0000"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full resize-none rounded-lg border border-gray-200 px-4 py-3 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3565AD]"
                    placeholder="Como podemos ajudar?"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-lg bg-gradient-to-r from-[#3565AD] to-[#326BB4] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
                >
                  Enviar Mensagem
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
