"use client";

import {
  CheckCircle2,
  ClipboardList,
  MessageCircle,
  UsersRound,
  Wrench,
} from "lucide-react";

import { motion } from "motion/react";

const steps = [
  {
    icon: MessageCircle,
    number: "1",
    title: "Você entra",
    description: "em contato",
  },
  {
    icon: UsersRound,
    number: "2",
    title: "Entendemos",
    description: "a necessidade da sua igreja",
  },
  {
    icon: ClipboardList,
    number: "3",
    title: "Montamos",
    description: "um projeto personalizado",
  },
  {
    icon: Wrench,
    number: "4",
    title: "Instalamos",
    description: "e configuramos tudo",
  },
  {
    icon: CheckCircle2,
    number: "5",
    title: "Sua igreja pronta",
    description: "para viver uma nova experiência de som",
  },
];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 35,
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

const headerReveal = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: 0.1,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

const stepsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.13,
      delayChildren: 0.2,
    },
  },
};

const stepReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Process() {
  return (
    <motion.section
      id="processo"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.15,
      }}
      className="relative mt-12 overflow-hidden rounded-[12px] border border-white/10 bg-gradient-to-b from-[#0f1517] to-[#090d0f] px-6 py-10 sm:px-8"
    >
      {/* GLOW ESTÁTICO */}
      <div className="pointer-events-none absolute left-1/2 top-[-160px] h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7a11f]/6 blur-[110px]" />

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
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="pointer-events-none absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#d7a11f]/55 to-transparent"
      />

      {/* CABEÇALHO */}
      <motion.header
        variants={headerReveal}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
        }}
        className="relative mb-10 text-center"
      >
        <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d7a11f]">
          Como funciona
        </span>

        <h2 className="mt-3 text-[29px] font-semibold leading-tight tracking-[-0.025em] text-white sm:text-[36px]">
          Um processo simples e transparente
        </h2>
      </motion.header>

      {/* ETAPAS */}
      <motion.div
        variants={stepsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.15,
        }}
        className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-5 xl:gap-4"
      >
        {/* LINHA ENTRE AS ETAPAS NO DESKTOP */}
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
            delay: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute left-[10%] right-[10%] top-[43px] hidden h-px origin-left bg-gradient-to-r from-transparent via-[#d7a11f]/60 to-transparent xl:block"
        />

        {steps.map(({ icon: Icon, number, title, description }, index) => (
          <motion.article
            key={number}
            variants={stepReveal}
            whileHover={{
              y: -6,
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
            className="group relative z-10 flex flex-col items-center text-center"
          >
            {/* CÍRCULO DO ÍCONE */}
            <motion.div
              whileHover={{
                scale: 1.06,
                borderColor: "rgba(215,161,31,0.95)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.34)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className="relative flex h-[86px] w-[86px] items-center justify-center rounded-full border border-[#d7a11f] bg-[#0b1012] text-[#d7a11f] shadow-[0_12px_35px_rgba(0,0,0,0.22)]"
            >
              {/* GLOW NO HOVER */}
              <div className="pointer-events-none absolute inset-[-18px] rounded-full bg-[#d7a11f]/10 opacity-0 blur-[25px] transition-opacity duration-500 group-hover:opacity-100" />

              <motion.div
                whileHover={{
                  scale: 1.08,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="relative z-10"
              >
                <Icon size={32} strokeWidth={1.45} />
              </motion.div>

              {/* NÚMERO */}
              <motion.span
                initial={{
                  opacity: 0,
                  scale: 0.7,
                  y: 6,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.35 + index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="absolute -bottom-3 z-20 flex h-7 min-w-7 items-center justify-center rounded-full border border-[#d7a11f] bg-[#0b1012] px-2 text-[11px] font-bold text-[#d7a11f]"
              >
                {number}
              </motion.span>
            </motion.div>

            {/* TEXTO */}
            <div className="mt-7">
              <h3 className="text-[12px] font-semibold leading-[1.45] text-white transition-colors duration-300 group-hover:text-[#e3ab2c]">
                {title}
              </h3>

              <p className="mt-1 max-w-[165px] text-[11px] leading-[1.5] text-white/62">
                {description}
              </p>
            </div>

            {/* SETA NO MOBILE E TABLET */}
            {index !== steps.length - 1 && (
              <motion.span
                initial={{
                  opacity: 0,
                  y: -5,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.45,
                  delay: 0.45 + index * 0.12,
                }}
                className="mt-6 text-[25px] text-white/50 xl:hidden"
              >
                ↓
              </motion.span>
            )}

            {/* LINHA INFERIOR NO HOVER */}
            <span className="mt-4 h-px w-0 bg-gradient-to-r from-transparent via-[#d7a11f] to-transparent transition-all duration-500 group-hover:w-[80px]" />
          </motion.article>
        ))}
      </motion.div>
    </motion.section>
  );
}