import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

type FormState = {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  website: string;
};

const initialFormState: FormState = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
  website: '',
};

export function Contact() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT ?? '/api/contact';

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitState({ type: null, message: '' });

    try {
      const response = await fetch(formEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const responseBody = (await response.json()) as {
        message?: string;
        error?: string;
      };

      if (!response.ok) {
        throw new Error(
          responseBody.error ?? `Webhook respondeu com status ${response.status}`
        );
      }

      setFormData(initialFormState);
      setSubmitState({
        type: 'success',
        message:
          responseBody.message ??
          'Mensagem enviada com sucesso. Entraremos em contato em breve.',
      });
    } catch (error) {
      setSubmitState({
        type: 'error',
        message:
          error instanceof Error
            ? error.message
            : 'Não foi possível enviar agora. Verifique a conexão com o webhook e tente novamente.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Endereço',
      content:
        'R. Min. Orozimbo Nonato, 102 - Vila da Serra, Nova Lima - MG, 34006-053',
    },
    {
      icon: Phone,
      title: 'Telefone',
      content: '0800 970 4044',
    },
    {
      icon: Mail,
      title: 'E-mail',
      content: 'posvenda@lm2rodas.com.br',
    },
  ];

  const socialMedia = [
    {
      icon: Facebook,
      url: null,
      color: '#1877F2',
      label: 'Facebook indisponível',
    },
    {
      icon: Instagram,
      url: 'https://instagram.com/lmmotooficial/',
      color: '#E4405F',
      label: 'Instagram da LM 2 Rodas',
    },
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/lmduasrodas/posts/?feedView=all',
      color: '#0A66C2',
      label: 'LinkedIn da LM 2 Rodas',
    },
  ];

  const inputClassName =
    'w-full rounded-lg border border-gray-200 bg-white px-4 py-3 text-[#0C2041] placeholder:text-gray-400 transition-all focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3565AD]';

  return (
    <section
      id="contato"
      className="lm-section lm-section-light relative flex min-h-[88vh] scroll-mt-20 items-center py-12 lg:min-h-[90vh] lg:py-10"
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

        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(400px,1.1fr)] lg:items-center xl:gap-12">
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
                  key={info.title}
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
                  <motion.button
                    key={index}
                    type="button"
                    onClick={() => {
                      if (social.url) {
                        window.open(social.url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={social.url ? { scale: 1.1, y: -4 } : undefined}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-white/70 bg-white/82 shadow-sm backdrop-blur-md transition-all hover:shadow-md"
                    style={{ color: social.color }}
                    aria-label={social.label}
                    aria-disabled={!social.url}
                    disabled={!social.url}
                  >
                    <social.icon size={24} />
                  </motion.button>
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
              className="w-full rounded-2xl border border-white/75 bg-white/84 p-5 shadow-lg backdrop-blur-md lg:flex lg:w-full lg:flex-col lg:justify-center lg:p-6"
            >
              <div className="mb-6 inline-flex w-fit rounded-full border border-[#3565AD]/20 bg-[#3565AD]/8 px-4 py-2 text-sm font-semibold uppercase tracking-[0.24em] text-[#3565AD]">
                LM2RODAS
              </div>

              <div className="grid gap-x-4 gap-y-4 md:grid-cols-2">
                <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
                  <label htmlFor="website">Website</label>
                  <input
                    type="text"
                    id="website"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Empresa
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="Sua empresa"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Telefone / Whatsapp
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="(00) 00000-0000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label
                    htmlFor="subject"
                    className="mb-2 block text-sm font-semibold text-[#0C2041]"
                  >
                    Assunto
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className={inputClassName}
                    placeholder="Sobre o que voce quer falar?"
                  />
                </div>

                <div className="md:col-span-2">
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
                    rows={5}
                    className={`${inputClassName} min-h-32 resize-none`}
                    placeholder="Conte como podemos ajudar."
                  />
                </div>
              </div>

              <div className="mt-6 space-y-4">
                {submitState.type && (
                  <div
                    className={`rounded-2xl border px-4 py-3 text-sm ${
                      submitState.type === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-red-200 bg-red-50 text-red-700'
                    }`}
                    aria-live="polite"
                  >
                    {submitState.message}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-lg bg-gradient-to-r from-[#3565AD] to-[#326BB4] py-4 font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
