"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "motion/react";

const contentContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const contentItem = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function CTA() {
  return (
    <motion.section
      id="contato"
      initial={{
        opacity: 0,
        y: 35,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.15,
      }}
      transition={{
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative w-full overflow-hidden border-y border-white/10 bg-[#090d0f]"
    >
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
          duration: 1.1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px origin-center bg-gradient-to-r from-transparent via-[#d7a11f]/55 to-transparent"
      />

      <div className="grid min-h-[260px] w-full grid-cols-1 lg:grid-cols-[42%_58%]">
        {/* IMAGEM */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 1.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative min-h-[250px] overflow-hidden lg:min-h-full"
        >
          <motion.img
            src="/images/cta-imperial.jpg"
            alt="Culto com estrutura profissional de som e iluminação"
            initial={{
              scale: 1.1,
            }}
            whileInView={{
              scale: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 1.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.035,
            }}
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          {/* ESCURECIMENTO */}
          <div className="absolute inset-0 bg-black/25 transition-colors duration-500 group-hover:bg-black/15" />

          {/* BRILHO DOURADO SOBRE A IMAGEM */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d7a11f]/10 via-transparent to-transparent opacity-0 transition-opacity duration-700 group-hover:opacity-100" />

          {/* TRANSIÇÃO PARA O CONTEÚDO — DESKTOP */}
          <div className="absolute inset-y-0 right-0 hidden w-[120px] bg-gradient-to-l from-[#090d0f] to-transparent lg:block" />

          {/* TRANSIÇÃO PARA O CONTEÚDO — MOBILE */}
          <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-[#090d0f] to-transparent lg:hidden" />
        </motion.div>

        {/* CONTEÚDO */}
        <div className="relative flex items-center px-6 py-12 sm:px-10 lg:px-14 xl:px-20">
          {/* GLOW ESTÁTICO */}
          <div className="pointer-events-none absolute right-[-120px] top-[-130px] h-[350px] w-[350px] rounded-full bg-[#d7a11f]/6 blur-[120px]" />

          {/* DETALHE VERTICAL */}
          <motion.div
            initial={{
              scaleY: 0,
              opacity: 0,
            }}
            whileInView={{
              scaleY: 1,
              opacity: 1,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.9,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-none absolute bottom-[15%] left-0 top-[15%] hidden w-px origin-center bg-gradient-to-b from-transparent via-[#d7a11f]/40 to-transparent lg:block"
          />

          <motion.div
            variants={contentContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.2,
            }}
            className="relative z-10 max-w-[620px]"
          >
            <motion.span
              variants={contentItem}
              className="text-[11px] font-bold uppercase tracking-[0.16em] text-[#d7a11f]"
            >
              Eleve a experiência da sua igreja
            </motion.span>

            <motion.h2
              variants={contentItem}
              className="mt-3 text-[31px] font-semibold leading-[1.1] tracking-[-0.025em] text-white sm:text-[38px] lg:text-[41px]"
            >
              Pronto para elevar o som
              <span className="block">do seu ministério?</span>
            </motion.h2>

            <motion.p
              variants={contentItem}
              className="mt-4 max-w-[540px] text-[14px] leading-6 text-white/65 sm:text-[15px]"
            >
              Fale com nossa equipe e descubra como podemos ajudar a transformar
              sua igreja, evento ou ministério com uma estrutura profissional.
            </motion.p>

            <motion.div variants={contentItem} className="mt-6">
              <motion.a
                href="https://wa.me/5512997411838"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: "0 22px 48px rgba(210,158,35,0.3)",
                }}
                whileTap={{
                  scale: 0.985,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative inline-flex h-[52px] items-center justify-center gap-3 overflow-hidden rounded-[7px] bg-gradient-to-r from-[#c58b1e] via-[#d9a52e] to-[#e8b94d] px-7 text-[12px] font-bold uppercase tracking-[0.025em] text-white shadow-[0_16px_35px_rgba(210,158,35,0.22)]"
              >
                {/* REFLEXO DO BOTÃO */}
                <span className="pointer-events-none absolute -left-24 top-0 h-full w-14 rotate-12 bg-white/25 blur-md transition-transform duration-[1500ms] group-hover:translate-x-[380px]" />

                <motion.span
                  whileHover={{
                    rotate: -5,
                    scale: 1.08,
                  }}
                  transition={{
                    duration: 0.2,
                  }}
                  className="relative z-10 flex"
                >
                  <MessageCircle size={18} strokeWidth={1.8} />
                </motion.span>

                <span className="relative z-10">
                  Fale com um especialista
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}