"use client";

import {
  Building2,
  ShieldCheck,
  SlidersHorizontal,
  Speaker,
} from "lucide-react";

import { motion } from "motion/react";

const metrics = [
  {
    icon: Building2,
    number: "+30",
    title: "Igrejas",
    description: "atendidas",
  },
  {
    icon: SlidersHorizontal,
    number: "+100",
    title: "Projetos",
    description: "realizados",
  },
  {
    icon: Speaker,
    number: "+500",
    title: "Equipamentos",
    description: "entregues",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    title: "Compromisso",
    description: "e confiança",
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

const metricsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const metricReveal = {
  hidden: {
    opacity: 0,
    y: 28,
    scale: 0.97,
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

export default function Trust() {
  return (
    <motion.section
      id="resultados"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.2,
      }}
      className="relative mt-10 overflow-hidden rounded-[12px] border border-white/10 bg-gradient-to-b from-[#101618] to-[#0b1012]"
    >
      {/* GLOW ESTÁTICO */}
      <div className="pointer-events-none absolute left-1/2 top-[-140px] h-[280px] w-[520px] -translate-x-1/2 rounded-full bg-[#d7a11f]/7 blur-[100px]" />

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
        className="pointer-events-none absolute inset-x-0 top-0 z-20 h-px origin-center bg-gradient-to-r from-transparent via-[#d7a11f]/60 to-transparent"
      />

      <motion.div
        variants={metricsContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="relative grid grid-cols-2 lg:grid-cols-4"
      >
        {metrics.map(
          ({ icon: Icon, number, title, description }, index) => (
            <motion.article
              key={title}
              variants={metricReveal}
              whileHover={{
                y: -5,
                backgroundColor: "rgba(215,161,31,0.035)",
              }}
              transition={{
                duration: 0.25,
                ease: "easeOut",
              }}
              className={`group relative flex min-h-[190px] flex-col items-center justify-center overflow-hidden px-5 py-7 text-center ${
                index % 2 !== 0 ? "border-l border-white/10" : ""
              } ${
                index >= 2 ? "border-t border-white/10 lg:border-t-0" : ""
              } ${
                index !== 0 ? "lg:border-l lg:border-white/10" : ""
              }`}
            >
              {/* FUNDO DOURADO NO HOVER */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d7a11f]/[0.06] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* GLOW DO CARD */}
              <div className="pointer-events-none absolute left-1/2 top-[-70px] h-[150px] w-[150px] -translate-x-1/2 rounded-full bg-[#d7a11f]/10 opacity-0 blur-[70px] transition-opacity duration-500 group-hover:opacity-100" />

              {/* ÍCONE */}
              <motion.div
                whileHover={{
                  scale: 1.1,
                  rotate: index % 2 === 0 ? -4 : 4,
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="relative z-10 mb-3 flex h-[48px] w-[48px] items-center justify-center text-[#d7a11f]"
              >
                <Icon size={37} strokeWidth={1.35} />
              </motion.div>

              {/* NÚMERO */}
              <motion.strong
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.6,
                  delay: 0.15 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 text-[34px] font-semibold leading-none tracking-[-0.035em] text-[#e3ab2c] sm:text-[40px]"
              >
                {number}
              </motion.strong>

              <h3 className="relative z-10 mt-3 text-[12px] font-bold uppercase leading-[1.35] tracking-[0.025em] text-white">
                {title}
              </h3>

              <p className="relative z-10 text-[11px] font-semibold uppercase leading-[1.35] tracking-[0.025em] text-white/75">
                {description}
              </p>

              {/* LINHA INFERIOR NO HOVER */}
              <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7a11f] to-transparent transition-all duration-500 group-hover:w-[65%]" />
            </motion.article>
          ),
        )}
      </motion.div>
    </motion.section>
  );
}