"use client";

import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import Trust from "@/components/Trust";

import {
  AudioLines,
  MonitorUp,
  PackageOpen,
  Settings,
  UsersRound,
} from "lucide-react";

import { motion } from "motion/react";

const services = [
  {
    icon: PackageOpen,
    title: "Venda de equipamentos",
    items: [
      "Mesas de som",
      "Microfones",
      "Caixas acústicas",
      "Sistemas In-Ear",
      "Cabos e acessórios",
      "E muito mais",
    ],
  },
  {
    icon: MonitorUp,
    title: "Projeto completo",
    items: [
      "Planejamento",
      "Dimensionamento",
      "Instalação",
      "Configuração",
      "Treinamento",
    ],
  },
  {
    icon: AudioLines,
    title: "Sonorização para eventos",
    items: [
      "Congressos",
      "Conferências",
      "Acampamentos",
      "Shows gospel",
      "Eventos corporativos",
    ],
  },
  {
    icon: Settings,
    title: "Manutenção e suporte",
    items: [
      "Reparo",
      "Atualização",
      "Limpeza",
      "Suporte técnico",
      "Visita técnica",
    ],
  },
  {
    icon: UsersRound,
    title: "Consultoria especializada",
    items: [
      "Análise do ambiente",
      "Escolha de equipamentos",
      "Projeto personalizado",
      "Orientação técnica",
    ],
  },
];

const eventTypes = [
  "Congresso",
  "Conferência",
  "Show",
  "Casamento",
  "Acampamento",
  "Evento corporativo",
  "Outro",
];

const needs = [
  "Som",
  "Iluminação",
  "Painel LED",
  "Operador",
  "Microfones",
  "Estrutura",
  "Outros",
];

const titleReveal = {
  hidden: {
    opacity: 0,
    y: 30,
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

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.12,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 30,
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

const formContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.18,
    },
  },
};

const formItem = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function Services() {
  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-[#090d0f] py-16 sm:py-20"
    >
      {/* ILUMINAÇÃO ESTÁTICA DE FUNDO */}
      <div className="pointer-events-none absolute left-[-180px] top-[80px] h-[520px] w-[520px] rounded-full bg-[#d49a20]/5 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-200px] top-[300px] h-[500px] w-[500px] rounded-full bg-[#d49a20]/5 blur-[150px]" />

      {/* LINHA SUPERIOR */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="absolute inset-x-0 top-0 h-px origin-center bg-gradient-to-r from-transparent via-[#d8a126]/25 to-transparent"
      />

      {/* GRID PRINCIPAL */}
      <div className="relative mx-auto grid w-full max-w-[1480px] grid-cols-1 gap-12 px-6 lg:grid-cols-[minmax(0,1fr)_330px] lg:items-stretch lg:px-10 xl:grid-cols-[minmax(0,1fr)_350px] xl:px-12">
        {/* COLUNA ESQUERDA */}
        <div className="min-w-0">
          {/* TÍTULO */}
          <motion.header
            variants={titleReveal}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.45,
            }}
            className="mb-9 text-center"
          >
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#d8a126]">
              Nossos serviços
            </span>

            <h2 className="mx-auto mt-3 max-w-[620px] text-[30px] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-[38px]">
              Tudo que sua igreja precisa
              <span className="block">em um único lugar</span>
            </h2>
          </motion.header>

          {/* CARDS DE SERVIÇOS */}
          <motion.div
            variants={cardsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-5"
          >
            {services.map(({ icon: Icon, title, items }, index) => (
              <motion.article
                key={title}
                variants={cardReveal}
                whileHover={{
                  y: -7,
                  borderColor: "rgba(216,161,38,0.55)",
                  boxShadow: "0 24px 55px rgba(0,0,0,0.32)",
                }}
                transition={{
                  duration: 0.25,
                  ease: "easeOut",
                }}
                className="group relative min-h-[310px] overflow-hidden rounded-[10px] border border-white/10 bg-gradient-to-b from-[#111719] to-[#0c1113] px-5 py-6"
              >
                {/* BRILHO SUPERIOR */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a126]/60 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* FUNDO DOURADO NO HOVER */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#d8a126]/[0.05] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* GLOW ESTÁTICO */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-[-30px] top-[-35px] h-[150px] w-[150px] rounded-full bg-[#d8a126]/10 opacity-50 blur-[70px] transition-opacity duration-500 group-hover:opacity-90"
                />

                <motion.div
                  whileHover={{
                    scale: 1.08,
                    rotate: index % 2 === 0 ? -3 : 3,
                  }}
                  transition={{
                    duration: 0.25,
                    ease: "easeOut",
                  }}
                  className="relative z-10 mb-5 flex h-[52px] w-[52px] items-center justify-center rounded-[8px] border border-[#d8a126]/45 text-[#d8a126] transition-colors duration-300 group-hover:border-[#d8a126]/80 group-hover:bg-[#d8a126]/[0.06]"
                >
                  <Icon size={30} strokeWidth={1.4} />
                </motion.div>

                <h3 className="relative z-10 min-h-[44px] text-[12px] font-bold uppercase leading-[1.4] text-white">
                  {title}
                </h3>

                <ul className="relative z-10 mt-5 space-y-2">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[10px] leading-[1.5] text-white/62"
                    >
                      <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-[#d8a126]" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d8a126] to-transparent transition-all duration-500 group-hover:w-[72%]" />
              </motion.article>
            ))}
          </motion.div>

          {/* COMPONENTES COM ANIMAÇÕES PRÓPRIAS */}
          <Testimonials />

          <Trust />

          <Process />
        </div>
                {/* COLUNA DIREITA — FORMULÁRIO */}
        <motion.aside
          initial={{
            opacity: 0,
            x: 45,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full"
        >
          <div className="relative flex h-full flex-col overflow-hidden rounded-[12px] border border-[#d8a126]/30 bg-gradient-to-b from-[#211d17] via-[#191815] to-[#111413] p-6 shadow-[0_30px_70px_rgba(0,0,0,0.34)]">
            {/* BRILHO SUPERIOR */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#d8a126]/65 to-transparent" />

            {/* GLOW ESTÁTICO */}
            <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-[250px] w-[250px] rounded-full bg-[#d8a126]/10 blur-[110px]" />

            {/* CABEÇALHO */}
            <motion.header
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="relative z-10 mb-6"
            >
              <motion.span
                variants={formItem}
                className="block text-[10px] font-bold uppercase tracking-[0.14em] text-white/45"
              >
                Solicite seu projeto
              </motion.span>

              <motion.h2
                variants={formItem}
                className="mt-3 text-[28px] font-semibold uppercase leading-[1.05] tracking-[-0.02em] text-[#e2aa2e]"
              >
                Vai realizar
                <span className="block">um evento?</span>
              </motion.h2>

              <motion.p
                variants={formItem}
                className="mt-3 text-[14px] leading-6 text-white/65"
              >
                Preencha o formulário e receba um orçamento personalizado para
                sua igreja, ministério ou evento.
              </motion.p>
            </motion.header>

            {/* FORMULÁRIO */}
            <motion.form
              variants={formContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
              }}
              className="relative z-10 flex flex-1 flex-col gap-4"
              onSubmit={(event) => event.preventDefault()}
            >
              <motion.div variants={formItem} className="space-y-3">
                <input
                  type="text"
                  name="name"
                  placeholder="Nome completo"
                  required
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />

                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="WhatsApp"
                  required
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />

                <input
                  type="text"
                  name="city"
                  placeholder="Cidade"
                  required
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />

                <input
                  type="text"
                  name="church"
                  placeholder="Nome da igreja / Ministério"
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />
              </motion.div>

              <motion.fieldset
                variants={formItem}
                className="rounded-[8px] border border-white/10 bg-black/10 p-4"
              >
                <legend className="px-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                  Tipo do evento
                </legend>

                <div className="mt-2 space-y-2">
                  {eventTypes.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-[12px] text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <input
                        type="radio"
                        name="eventType"
                        value={item}
                        className="h-4 w-4 accent-[#d8a126]"
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </motion.fieldset>

              <motion.div variants={formItem}>
                <label
                  htmlFor="event-date"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                >
                  Data do evento
                </label>

                <input
                  id="event-date"
                  type="date"
                  name="eventDate"
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white/70 outline-none transition-all duration-300 hover:border-white/20 focus:border-[#d8a126]/65"
                />
              </motion.div>

              <motion.div variants={formItem}>
                <label
                  htmlFor="people"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                >
                  Quantidade aproximada de pessoas
                </label>

                <input
                  id="people"
                  type="number"
                  name="people"
                  placeholder="Ex: 200 pessoas"
                  min="1"
                  className="h-[46px] w-full rounded-[6px] border border-white/10 bg-[#0e1315] px-4 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />
              </motion.div>

              <motion.fieldset
                variants={formItem}
                className="rounded-[8px] border border-white/10 bg-black/10 p-4"
              >
                <legend className="px-2 text-[10px] font-bold uppercase tracking-[0.08em] text-white">
                  O que você precisa?
                </legend>

                <div className="mt-2 space-y-2">
                  {needs.map((item) => (
                    <label
                      key={item}
                      className="flex cursor-pointer items-center gap-3 text-[12px] text-white/65 transition-all duration-200 hover:translate-x-1 hover:text-white"
                    >
                      <input
                        type="checkbox"
                        name="needs"
                        value={item}
                        className="h-4 w-4 accent-[#d8a126]"
                      />

                      <span>{item}</span>
                    </label>
                  ))}
                </div>
              </motion.fieldset>
                            <motion.div variants={formItem}>
                <label
                  htmlFor="observations"
                  className="mb-2 block text-[10px] font-bold uppercase tracking-[0.08em] text-white"
                >
                  Observações
                </label>

                <textarea
                  id="observations"
                  name="observations"
                  rows={5}
                  placeholder="Conte mais sobre seu evento, estrutura, local e necessidades..."
                  className="w-full resize-none rounded-[6px] border border-white/10 bg-[#0e1315] px-4 py-3 text-[13px] text-white outline-none transition-all duration-300 placeholder:text-white/38 hover:border-white/20 focus:border-[#d8a126]/65"
                />
              </motion.div>

              <motion.div variants={formItem} className="mt-auto pt-4">
                <motion.button
                  type="submit"
                  whileHover={{
                    y: -3,
                    scale: 1.015,
                    boxShadow:
                      "0 20px 45px rgba(210,158,35,0.28)",
                  }}
                  whileTap={{
                    scale: 0.985,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="group relative flex min-h-[58px] w-full items-center justify-center overflow-hidden rounded-[7px] bg-gradient-to-r from-[#c48a1e] via-[#dda62f] to-[#edbc56] px-5 text-center text-[13px] font-bold uppercase leading-[1.25] text-black shadow-[0_16px_35px_rgba(210,158,35,0.2)]"
                >
                  {/* REFLEXO */}
                  <span className="pointer-events-none absolute -left-24 top-0 h-full w-14 rotate-12 bg-white/25 blur-md transition-transform duration-[1700ms] group-hover:translate-x-[420px]" />

                  <span className="relative z-10">
                    Quero receber
                    <br />
                    um orçamento
                  </span>
                </motion.button>

                <p className="mt-3 text-center text-[10px] text-white/38">
                  🔒 Seus dados estão seguros conosco.
                </p>
              </motion.div>
            </motion.form>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}