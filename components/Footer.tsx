"use client";

import {
  ChevronUp,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { motion } from "motion/react";

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

const services = [
  "Venda de equipamentos",
  "Projetos de sonorização",
  "Sonorização para eventos",
  "Manutenção e suporte",
  "Consultoria especializada",
];

const footerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const footerColumn = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.12,
    },
  },
};

const listItem = {
  hidden: {
    opacity: 0,
    x: -12,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.footer
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative overflow-hidden bg-[#050708] text-white"
    >
      {/* ILUMINAÇÃO DE FUNDO */}
      <div className="pointer-events-none absolute left-1/2 top-[-240px] h-[460px] w-[900px] -translate-x-1/2 rounded-full bg-[#d7a11f]/8 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-[-220px] right-[-160px] h-[500px] w-[500px] rounded-full bg-[#d7a11f]/5 blur-[160px]" />

      <div className="pointer-events-none absolute left-[-200px] top-[180px] h-[420px] w-[420px] rounded-full bg-[#d7a11f]/4 blur-[150px]" />

      {/* LINHA SUPERIOR */}
      <motion.div
        initial={{
          scaleX: 0,
          opacity: 0,
        }}
        whileInView={{
          scaleX: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="h-px w-full origin-center bg-gradient-to-r from-transparent via-[#d7a11f]/45 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-[1480px] px-6 pb-8 pt-14 sm:pt-16 lg:px-10 xl:px-12">
        {/* CONTEÚDO PRINCIPAL */}
        <motion.div
          variants={footerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.12,
          }}
          className="grid grid-cols-1 gap-12 py-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.65fr_1fr_1fr] lg:gap-10 lg:py-14"
        >
          {/* MARCA */}
          <motion.div variants={footerColumn}>
            <motion.a
              href="#inicio"
              aria-label="Ir ao início"
              whileHover={{
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="inline-flex"
            >
              <img
                src="/images/logo-imperial.png"
                alt="Imperial Instrumentos Musicais"
                className="h-auto w-[190px] object-contain"
              />
            </motion.a>

            <p className="mt-6 max-w-[330px] text-[13px] leading-6 text-white/48">
              Soluções completas em áudio, iluminação, equipamentos e projetos
              personalizados para igrejas, eventos e ministérios.
            </p>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-7 flex items-center gap-3"
            >
              <motion.a
                variants={listItem}
                href="https://www.instagram.com/instrumentosmusicaisimperial/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Imperial"
                whileHover={{
                  y: -4,
                  scale: 1.06,
                  borderColor: "rgba(215,161,31,0.55)",
                  color: "#d7a11f",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/55"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="17"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  />

                  <path d="M16 11.37a4 4 0 1 1-7.75 1.25A4 4 0 0 1 16 11.37z" />

                  <line
                    x1="17.5"
                    y1="6.5"
                    x2="17.51"
                    y2="6.5"
                  />
                </svg>
              </motion.a>

              <motion.a
                variants={listItem}
                href="https://wa.me/5512997411838"
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Imperial"
                whileHover={{
                  y: -4,
                  scale: 1.06,
                  borderColor: "rgba(215,161,31,0.55)",
                  color: "#d7a11f",
                }}
                whileTap={{
                  scale: 0.95,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/55"
              >
                <MessageCircle size={17} strokeWidth={1.7} />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* NAVEGAÇÃO */}
          <motion.div variants={footerColumn}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
              Navegação
            </h3>

            <motion.nav
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-6 flex flex-col gap-3.5"
            >
              {navigation.map((item) => (
                <motion.a
                  key={item.label}
                  variants={listItem}
                  href={item.href}
                  whileHover={{
                    x: 4,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeOut",
                  }}
                  className="group flex w-fit items-center gap-2 text-[12px] text-white/45 transition-colors duration-300 hover:text-white"
                >
                  <span className="h-px w-0 bg-[#d7a11f] transition-all duration-300 group-hover:w-4" />

                  {item.label}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>

          {/* SERVIÇOS */}
          <motion.div variants={footerColumn}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
              Serviços
            </h3>

            <motion.ul
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-6 space-y-3.5"
            >
              {services.map((service) => (
                <motion.li key={service} variants={listItem}>
                  <motion.a
                    href="#servicos"
                    whileHover={{
                      x: 4,
                    }}
                    transition={{
                      duration: 0.2,
                      ease: "easeOut",
                    }}
                    className="group flex items-start gap-2 text-[12px] leading-5 text-white/45 transition-colors duration-300 hover:text-white"
                  >
                    <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-[#d7a11f]/80 transition-transform duration-300 group-hover:scale-150" />

                    {service}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* CONTATO */}
          <motion.div variants={footerColumn}>
            <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/85">
              Contato
            </h3>

            <motion.div
              variants={listContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="mt-6 space-y-5"
            >
              <motion.a
                variants={listItem}
                href="https://wa.me/5512997411838"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="group flex items-start gap-3"
              >
                <motion.span
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(215,161,31,0.5)",
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[#d7a11f]"
                >
                  <Phone size={15} strokeWidth={1.7} />
                </motion.span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.1em] text-white/28">
                    WhatsApp
                  </span>

                  <span className="mt-1 block text-[12px] text-white/60 transition-colors group-hover:text-white">
                    (12) 99741-1838
                  </span>
                </span>
              </motion.a>

              <motion.a
                variants={listItem}
                href="https://www.instagram.com/instrumentosmusicaisimperial/"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="group flex items-start gap-3"
              >
                <motion.span
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(215,161,31,0.5)",
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[#d7a11f]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />

                    <path d="M16 11.37a4 4 0 1 1-7.75 1.25A4 4 0 0 1 16 11.37z" />

                    <line
                      x1="17.5"
                      y1="6.5"
                      x2="17.51"
                      y2="6.5"
                    />
                  </svg>
                </motion.span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.1em] text-white/28">
                    Instagram
                  </span>

                  <span className="mt-1 block break-all text-[12px] text-white/60 transition-colors group-hover:text-white">
                    @instrumentosmusicaisimperial
                  </span>
                </span>
              </motion.a>

              <motion.div
                variants={listItem}
                whileHover={{
                  x: 4,
                }}
                transition={{
                  duration: 0.22,
                  ease: "easeOut",
                }}
                className="group flex items-start gap-3"
              >
                <motion.span
                  whileHover={{
                    scale: 1.06,
                    borderColor: "rgba(215,161,31,0.5)",
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-[#d7a11f]"
                >
                  <MapPin size={15} strokeWidth={1.7} />
                </motion.span>

                <span>
                  <span className="block text-[10px] uppercase tracking-[0.1em] text-white/28">
                    Atendimento
                  </span>

                  <span className="mt-1 block max-w-[190px] text-[12px] leading-5 text-white/60 transition-colors duration-300 group-hover:text-white/80">
                    R. Carlos Nunes de Paula, 1302 - Jardim Imperial, São José
                    dos Campos - SP, 12234-000
                  </span>
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* RODAPÉ INFERIOR */}
        <motion.div
          initial={{
            opacity: 0,
            y: 18,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.65,
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-7 text-center sm:flex-row sm:text-left"
        >
          <p className="text-[10px] leading-5 text-white/28">
            © {currentYear} Imperial Instrumentos Musicais. Todos os direitos
            reservados.
          </p>

          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-6">
            <a
              href="#"
              className="text-[10px] text-white/28 transition-colors duration-300 hover:text-white"
            >
              Política de privacidade
            </a>

            <motion.a
              href="https://www.instagram.com/hardt.studiio/"
              target="_blank"
              rel="noreferrer"
              whileHover={{
                y: -2,
              }}
              transition={{
                duration: 0.2,
              }}
              className="text-[10px] text-white/28 transition-colors duration-300 hover:text-[#d7a11f]"
            >
              Desenvolvido por @hardt.studiio
            </motion.a>

            <motion.button
              type="button"
              onClick={scrollToTop}
              aria-label="Voltar ao topo"
              whileHover={{
                y: -4,
                scale: 1.06,
                borderColor: "rgba(215,161,31,0.5)",
                color: "#d7a11f",
              }}
              whileTap={{
                scale: 0.94,
              }}
              transition={{
                duration: 0.22,
                ease: "easeOut",
              }}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.025] text-white/50"
            >
              <ChevronUp
                size={17}
                strokeWidth={1.7}
                className="transition-transform duration-300 group-hover:-translate-y-0.5"
              />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}