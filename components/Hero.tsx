"use client";

import {
  Award,
  Headphones,
  MessageCircle,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

import { motion } from "motion/react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Equipamentos",
    subtitle: "de qualidade",
    description: "As melhores marcas e tecnologias do mercado.",
  },
  {
    icon: SlidersHorizontal,
    title: "Projeto",
    subtitle: "completo",
    description: "Do planejamento à instalação, cuidamos de tudo.",
  },
  {
    icon: Headphones,
    title: "Suporte",
    subtitle: "especializado",
    description: "Atendimento rápido e suporte técnico sempre que precisar.",
  },
  {
    icon: Award,
    title: "Confiança de",
    subtitle: "quem usa",
    description: "Diversas igrejas e ministérios confiam na Imperial.",
  },
];

const heroContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.2,
    },
  },
};

const lineAnimation = {
  hidden: {
    opacity: 0,
    y: 42,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-[#070a0b] pt-[84px]"
    >
      <div className="relative min-h-[620px] lg:min-h-[650px]">
        {/* IMAGEM CINEMATOGRÁFICA */}
        <motion.img
          src="/images/imperial-hero.jpg"
          alt="Palco com iluminação profissional e mesa de som"
          initial={{
            opacity: 0,
            scale: 1.08,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            opacity: {
              duration: 1.2,
              ease: "easeOut",
            },
            scale: {
              duration: 7,
              ease: [0.22, 1, 0.36, 1],
            },
          }}
          className="absolute inset-0 h-full w-full object-cover object-center"
        />

        {/* MOVIMENTO SUAVE SOBRE A IMAGEM */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.8,
            delay: 0.25,
          }}
          className="absolute inset-0"
        >
          {/* Escurecimento geral */}
          <div className="absolute inset-0 bg-black/20" />

          {/* Gradiente principal */}
          <div className="absolute inset-y-0 left-0 w-full bg-gradient-to-r from-[#06090a] via-[#06090a]/96 via-[29%] to-transparent to-[64%]" />

          {/* Gradiente inferior */}
          <div className="absolute inset-x-0 bottom-0 h-[170px] bg-gradient-to-t from-[#080b0c] to-transparent" />
        </motion.div>

        {/* BRILHO DOURADO AMBIENTE */}
        <motion.div
          aria-hidden="true"
          animate={{
            opacity: [0.18, 0.34, 0.18],
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute right-[12%] top-[15%] h-[420px] w-[420px] rounded-full bg-[#d7a11f]/10 blur-[150px]"
        />

        <div className="relative z-10 mx-auto flex min-h-[620px] w-full max-w-[1480px] items-center px-6 py-16 lg:min-h-[650px] lg:px-10 xl:px-12">
          <motion.div
            variants={heroContainer}
            initial="hidden"
            animate="visible"
            className="w-full max-w-[510px]"
          >
            {/* TÍTULO */}
            <h1 className="text-[46px] font-semibold leading-[1.18] tracking-[-0.03em] text-white sm:text-[54px] lg:text-[58px] xl:text-[62px]">
              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineAnimation}
                  className="block"
                >
                  Sua igreja merece
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineAnimation}
                  className="block"
                >
                  um som{" "}
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0 rgba(221,167,38,0)",
                        "0 0 22px rgba(221,167,38,0.22)",
                        "0 0 0 rgba(221,167,38,0)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#dda726]"
                  >
                    à altura da
                  </motion.span>
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineAnimation}
                  className="block"
                >
                  <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0 rgba(221,167,38,0)",
                        "0 0 22px rgba(221,167,38,0.22)",
                        "0 0 0 rgba(221,167,38,0)",
                      ],
                    }}
                    transition={{
                      duration: 4,
                      delay: 0.7,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-[#dda726]"
                  >
                    mensagem
                  </motion.span>{" "}
                  que
                </motion.span>
              </span>

              <span className="block overflow-hidden pb-1">
                <motion.span
                  variants={lineAnimation}
                  className="block"
                >
                  ela transmite.
                </motion.span>
              </span>
            </h1>

            {/* TEXTO */}
            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-[460px] text-[15px] leading-7 text-white/72"
            >
              Projetamos, fornecemos e instalamos sistemas completos de
              sonorização, iluminação e audiovisual para igrejas, eventos e
              ministérios.
            </motion.p>

            {/* BOTÕES */}
            <motion.div
              variants={fadeUp}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <motion.a
                href="https://wa.me/5512997411838"
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -4,
                  scale: 1.015,
                  boxShadow: "0 22px 45px rgba(210,158,35,0.3)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative flex h-[52px] min-w-[210px] items-center justify-center gap-3 overflow-hidden rounded-[7px] bg-gradient-to-r from-[#c88d1a] to-[#e0ad38] px-6 text-[12px] font-bold uppercase tracking-[0.02em] text-white shadow-[0_16px_35px_rgba(210,158,35,0.22)]"
              >
                {/* BRILHO PASSANDO NO BOTÃO */}
                <motion.span
                  aria-hidden="true"
                  animate={{
                    x: ["-160%", "220%"],
                  }}
                  transition={{
                    duration: 2.6,
                    repeat: Infinity,
                    repeatDelay: 2.4,
                    ease: "easeInOut",
                  }}
                  className="pointer-events-none absolute inset-y-0 w-[55px] rotate-12 bg-white/20 blur-md"
                />

                <MessageCircle
                  size={18}
                  strokeWidth={1.8}
                  className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                />

                <span className="relative z-10">
                  Solicitar orçamento
                </span>
              </motion.a>

              <motion.a
                href="#servicos"
                whileHover={{
                  y: -4,
                  borderColor: "#e5b541",
                  boxShadow: "0 15px 35px rgba(215,161,31,0.12)",
                }}
                whileTap={{
                  scale: 0.98,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative flex h-[52px] min-w-[215px] items-center justify-center overflow-hidden rounded-[7px] border border-[#d7a11f] bg-black/20 px-6 text-[11px] font-bold uppercase tracking-[0.02em] text-white"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-[#d7a11f] transition-transform duration-500 ease-out group-hover:scale-x-100" />

                <span className="relative z-10 transition-colors duration-300 group-hover:text-black">
                  Conheça nossos serviços
                </span>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* LINHA DOURADA DISCRETA */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{
            duration: 1.4,
            delay: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="absolute bottom-0 left-0 right-0 z-20 h-px origin-left bg-gradient-to-r from-transparent via-[#d7a11f]/45 to-transparent"
        />
      </div>

      {/* FAIXA DE DIFERENCIAIS */}
      <div className="relative z-20 border-y border-white/10 bg-[#0c1012]/97">
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 px-6 sm:grid-cols-2 lg:grid-cols-4 lg:px-10 xl:px-12">
          {highlights.map(
            ({ icon: Icon, title, subtitle, description }, index) => (
              <motion.article
                key={`${title}-${subtitle}`}
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
                  amount: 0.35,
                }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{
                  y: -4,
                  backgroundColor: "rgba(255,255,255,0.018)",
                }}
                className={`group relative flex gap-4 py-7 sm:px-5 lg:px-7 ${
                  index !== 0
                    ? "border-t border-white/10 sm:border-t-0"
                    : ""
                } ${
                  index !== highlights.length - 1
                    ? "lg:border-r lg:border-white/10"
                    : ""
                }`}
              >
                {/* GLOW NO HOVER */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d7a11f]/0 to-[#d7a11f]/0 opacity-0 transition-opacity duration-500 group-hover:from-[#d7a11f]/[0.025] group-hover:to-transparent group-hover:opacity-100" />

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: index % 2 === 0 ? -3 : 3,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  className="relative z-10 mt-1 flex h-11 w-11 shrink-0 items-center justify-center text-[#d7a11f]"
                >
                  <Icon size={34} strokeWidth={1.35} />
                </motion.div>

                <div className="relative z-10">
                  <h2 className="text-[12px] font-bold uppercase leading-[1.35] text-white">
                    {title}

                    <span className="block">
                      {subtitle}
                    </span>
                  </h2>

                  <p className="mt-3 max-w-[190px] text-[11px] leading-[1.6] text-white/60">
                    {description}
                  </p>
                </div>

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-[#d7a11f] transition-all duration-500 group-hover:w-[60%]" />
              </motion.article>
            ),
          )}
        </div>
      </div>
    </section>
  );
}