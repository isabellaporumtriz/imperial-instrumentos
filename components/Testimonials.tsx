"use client";

import {
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
  UsersRound,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

const testimonials = [
  {
    name: "Pr. Lucas Andrade",
    church: "Igreja Batista Central",
    video: "/videos/depoimento-01.mp4",
    poster: "/images/depoimento-01.jpg",
    quote: "Compramos toda nossa estrutura com a Imperial.",
  },
  {
    name: "Pr. Marcos Silva",
    church: "Comunidade da Graça",
    video: "/videos/depoimento-02.mp4",
    poster: "/images/depoimento-02.jpg",
    quote: "O atendimento foi impecável do início ao fim.",
  },
  {
    name: "Rafael Souza",
    church: "Ministério Vida",
    video: "/videos/depoimento-03.mp4",
    poster: "/images/depoimento-03.jpg",
    quote: "Instalaram tudo em um dia e ficou excelente.",
  },
  {
    name: "Daniel Martins",
    church: "Igreja Fonte de Vida",
    video: "/videos/depoimento-04.mp4",
    poster: "/images/depoimento-04.jpg",
    quote: "Equipamentos de alta qualidade e muita confiança.",
  },
  {
    name: "Pr. André Lima",
    church: "Igreja do Caminho",
    video: "/videos/depoimento-05.mp4",
    poster: "/images/depoimento-05.jpg",
    quote: "Depois da Imperial nunca tivemos problema.",
  },
];

type Testimonial = (typeof testimonials)[number];

const sectionReveal = {
  hidden: {
    opacity: 0,
    y: 38,
    filter: "blur(8px)",
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

const cardsContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 34,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.72,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  const [playing, setPlaying] = useState(true);
  const [muted, setMuted] = useState(true);

  const togglePlay = async () => {
    const video = videoRef.current;

    if (!video) return;

    try {
      if (video.paused) {
        await video.play();
      } else {
        video.pause();
      }
    } catch {
      setPlaying(false);
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;

    if (!video) return;

    const nextMutedState = !video.muted;

    video.muted = nextMutedState;
    setMuted(nextMutedState);
  };

  return (
    <motion.article
      variants={cardReveal}
      whileHover={{
        y: -8,
        scale: 1.018,
        borderColor: "rgba(215,161,31,0.55)",
        boxShadow: "0 26px 65px rgba(0,0,0,0.42)",
      }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
      }}
      className="group relative min-w-[165px] snap-start overflow-hidden rounded-[9px] border border-white/15 bg-[#111719] sm:min-w-[180px] lg:min-w-[175px] xl:min-w-[182px]"
    >
      {/* BRILHO SUPERIOR */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-30 h-px bg-gradient-to-r from-transparent via-[#d7a11f]/70 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      {/* GLOW INTERNO */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.08, 0.16, 0.08],
          scale: [1, 1.12, 1],
        }}
        transition={{
          duration: 5 + index * 0.4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[-80px] z-10 h-[180px] w-[180px] -translate-x-1/2 rounded-full bg-[#d7a11f]/15 blur-[90px]"
      />

      <div className="relative aspect-[9/16] overflow-hidden bg-black">
        <motion.video
          ref={videoRef}
          src={testimonial.video}
          poster={testimonial.poster}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onVolumeChange={(event) => {
            setMuted(event.currentTarget.muted);
          }}
          whileHover={{
            scale: 1.035,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="h-full w-full object-cover"
        />

        {/* CAMADA CINEMATOGRÁFICA */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/25" />

        <div className="pointer-events-none absolute inset-0 bg-[#d7a11f]/0 transition-colors duration-500 group-hover:bg-[#d7a11f]/[0.025]" />

        {/* BOTÃO PLAY / PAUSE */}
        <motion.button
          type="button"
          onClick={togglePlay}
          aria-label={
            playing
              ? `Pausar depoimento de ${testimonial.name}`
              : `Assistir depoimento de ${testimonial.name}`
          }
          whileHover={{
            scale: 1.12,
            backgroundColor: "#d7a11f",
            color: "#000000",
            boxShadow: "0 14px 35px rgba(215,161,31,0.28)",
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            duration: 0.25,
          }}
          className={`absolute left-1/2 top-1/2 z-20 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-black/45 text-white shadow-xl backdrop-blur-md ${
            playing
              ? "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              : "opacity-100"
          }`}
        >
          {playing ? (
            <Pause size={20} fill="currentColor" />
          ) : (
            <Play size={21} fill="currentColor" className="ml-1" />
          )}
        </motion.button>

        {/* BOTÃO DE ÁUDIO */}
        <motion.button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? "Ativar som" : "Silenciar vídeo"}
          whileHover={{
            scale: 1.08,
            backgroundColor: "#d7a11f",
            color: "#000000",
          }}
          whileTap={{
            scale: 0.94,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute right-2 top-2 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-white/25 bg-black/55 text-white shadow-lg backdrop-blur-md"
        >
          {muted ? <VolumeX size={15} /> : <Volume2 size={15} />}
        </motion.button>

        {/* CONTEÚDO INFERIOR */}
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.65,
            delay: 0.22 + index * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute inset-x-0 bottom-0 z-20 p-3"
        >
          <p className="text-[11px] font-bold leading-[1.35] text-[#e2ae2a] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
            {testimonial.quote}
          </p>

          <div className="mt-3 border-t border-white/15 pt-2">
            <h3 className="text-[9px] font-bold uppercase text-white">
              {testimonial.name}
            </h3>

            <p className="mt-1 text-[8px] uppercase tracking-[0.04em] text-white/55">
              {testimonial.church}
            </p>
          </div>
        </motion.div>

        {/* LINHA DOURADA INFERIOR */}
        <span className="absolute bottom-0 left-1/2 z-30 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#d7a11f] to-transparent transition-all duration-500 group-hover:w-[72%]" />
      </div>
    </motion.article>
  );
}

export default function Testimonials() {
  const sliderRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    sliderRef.current?.scrollBy({
      left: direction === "left" ? -390 : 390,
      behavior: "smooth",
    });
  };

  return (
    <motion.div
      id="depoimentos"
      variants={sectionReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.12,
      }}
      className="relative mt-12"
    >
      {/* GLOW DE FUNDO */}
      <motion.div
        aria-hidden="true"
        animate={{
          opacity: [0.08, 0.18, 0.08],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-[90px] h-[320px] w-[600px] -translate-x-1/2 rounded-full bg-[#d7a11f]/10 blur-[150px]"
      />

      <header className="relative z-10 mb-7 text-center">
        <motion.span
          initial={{
            opacity: 0,
            letterSpacing: "0.28em",
          }}
          whileInView={{
            opacity: 1,
            letterSpacing: "0.14em",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block text-[11px] font-bold uppercase text-[#d7a11f]"
        >
          Depoimentos
        </motion.span>

        <div className="overflow-hidden pb-1">
          <motion.h2
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
            }}
            transition={{
              duration: 0.75,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-2 text-[27px] font-semibold leading-tight tracking-[-0.02em] text-white sm:text-[32px]"
          >
            Quem confia na Imperial recomenda
          </motion.h2>
        </div>
      </header>

      <div className="relative z-10">
        {/* SETA ESQUERDA */}
        <motion.button
          type="button"
          onClick={() => scroll("left")}
          aria-label="Ver depoimentos anteriores"
          initial={{
            opacity: 0,
            x: 14,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d7a11f",
            color: "#000000",
            boxShadow: "0 12px 30px rgba(215,161,31,0.22)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute left-[-16px] top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7a11f]/50 bg-[#0b0f11]/95 text-[#d7a11f] shadow-xl backdrop-blur-md lg:flex"
        >
          <ChevronLeft size={20} />
        </motion.button>

        {/* CARDS */}
        <motion.div
          ref={sliderRef}
          variants={cardsContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-5 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </motion.div>

        {/* SETA DIREITA */}
        <motion.button
          type="button"
          onClick={() => scroll("right")}
          aria-label="Ver próximos depoimentos"
          initial={{
            opacity: 0,
            x: -14,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
          }}
          whileHover={{
            scale: 1.1,
            backgroundColor: "#d7a11f",
            color: "#000000",
            boxShadow: "0 12px 30px rgba(215,161,31,0.22)",
          }}
          whileTap={{
            scale: 0.92,
          }}
          transition={{
            duration: 0.25,
          }}
          className="absolute right-[-16px] top-1/2 z-30 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-[#d7a11f]/50 bg-[#0b0f11]/95 text-[#d7a11f] shadow-xl backdrop-blur-md lg:flex"
        >
          <ChevronRight size={20} />
        </motion.button>
      </div>

      {/* TEXTO INFERIOR */}
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
          duration: 0.7,
          delay: 0.35,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="relative z-10 mt-4 flex items-center justify-center gap-2 text-center"
      >
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
          }}
          transition={{
            duration: 2.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <UsersRound size={17} className="text-[#d7a11f]" />
        </motion.div>

        <p className="text-[12px] text-white/60">
          Diversas igrejas e ministérios que já vivem essa experiência.
        </p>
      </motion.div>
    </motion.div>
  );
}