"use client";

import { AnimatePresence, motion } from "motion/react";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const menuItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre nós", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

const navigationContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.2,
    },
  },
};

const navigationItem = {
  hidden: {
    opacity: 0,
    y: -12,
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

const mobileMenuContainer = {
  hidden: {
    opacity: 0,
    y: -18,
    scale: 0.985,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.45,
      ease: [0.22, 1, 0.36, 1] as const,
      when: "beforeChildren",
      staggerChildren: 0.07,
      delayChildren: 0.08,
    },
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.985,
    filter: "blur(6px)",
    transition: {
      duration: 0.3,
      ease: "easeInOut" as const,
    },
  },
};

const mobileMenuItem = {
  hidden: {
    opacity: 0,
    x: -18,
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

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 35);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{
          opacity: 0,
          y: -24,
          filter: "blur(6px)",
        }}
        animate={{
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          backgroundColor: hasScrolled
            ? "rgba(8, 11, 12, 0.92)"
            : "rgba(8, 11, 12, 0.82)",
          borderColor: hasScrolled
            ? "rgba(184, 137, 34, 0.28)"
            : "rgba(184, 137, 34, 0.16)",
          boxShadow: hasScrolled
            ? "0 18px 45px rgba(0, 0, 0, 0.25)"
            : "0 0 0 rgba(0, 0, 0, 0)",
        }}
        transition={{
          opacity: {
            duration: 0.7,
          },
          y: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          },
          filter: {
            duration: 0.7,
          },
          backgroundColor: {
            duration: 0.3,
          },
          borderColor: {
            duration: 0.3,
          },
          boxShadow: {
            duration: 0.3,
          },
        }}
        className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      >
        <motion.div
          animate={{
            height: hasScrolled ? 72 : 84,
          }}
          transition={{
            duration: 0.35,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative mx-auto flex w-full max-w-[1480px] items-center justify-between px-6 sm:px-8 lg:px-10 xl:px-12"
        >
          {/* LOGO */}
          <motion.a
            href="#inicio"
            onClick={closeMenu}
            aria-label="Voltar ao início"
            initial={{
              opacity: 0,
              x: -18,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.65,
              delay: 0.12,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{
              scale: 1.025,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group relative z-50 flex w-[190px] shrink-0 items-center overflow-hidden sm:w-[215px]"
          >
            <motion.img
              src="/images/logo-imperial.png"
              alt="Imperial Instrumentos Musicais"
              animate={{
                scale: hasScrolled ? 0.92 : 1,
              }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-auto w-full object-contain"
            />

            <span className="pointer-events-none absolute inset-y-0 -left-20 w-12 rotate-12 bg-white/15 opacity-0 blur-md transition-all duration-[1200ms] group-hover:left-[110%] group-hover:opacity-100" />
          </motion.a>

          {/* NAVEGAÇÃO DESKTOP */}
          <motion.nav
            variants={navigationContainer}
            initial="hidden"
            animate="visible"
            className="hidden h-full items-center gap-8 lg:flex xl:gap-12"
          >
            {menuItems.map((item, index) => (
              <motion.a
                key={item.label}
                variants={navigationItem}
                href={item.href}
                whileHover={{
                  y: -2,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeOut",
                }}
                className={`group relative flex h-full items-center text-[12px] font-semibold uppercase tracking-[0.09em] transition-colors duration-300 ${
                  index === 0
                    ? "text-[#d8a126]"
                    : "text-white/85 hover:text-[#d8a126]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute left-0 h-px bg-[#d8a126] transition-all duration-300 ${
                    hasScrolled ? "bottom-[14px]" : "bottom-[18px]"
                  } ${
                    index === 0 ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />

                <span className="pointer-events-none absolute bottom-0 left-1/2 h-[18px] w-[55px] -translate-x-1/2 rounded-full bg-[#d8a126]/10 opacity-0 blur-[14px] transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            ))}
          </motion.nav>

          {/* BOTÃO DESKTOP */}
          <motion.a
            href="https://wa.me/5512997411838"
            target="_blank"
            rel="noreferrer"
            initial={{
              opacity: 0,
              x: 18,
            }}
            animate={{
              opacity: 1,
              x: 0,
              height: hasScrolled ? 46 : 50,
            }}
            transition={{
              opacity: {
                duration: 0.65,
                delay: 0.25,
              },
              x: {
                duration: 0.65,
                delay: 0.25,
                ease: [0.22, 1, 0.36, 1],
              },
              height: {
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            whileHover={{
              y: -3,
              scale: 1.015,
              borderColor: "#d8a126",
              boxShadow: "0 18px 45px rgba(216,161,38,0.24)",
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="group relative hidden items-center justify-center gap-2.5 overflow-hidden rounded-[10px] border border-[#b88922] bg-[#080808] px-7 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#d8a126] shadow-[0_0_0_1px_rgba(216,161,38,0.22),0_0_32px_rgba(216,161,38,0.12)] lg:flex"
          >
            <span className="pointer-events-none absolute -left-24 top-0 h-full w-14 rotate-12 bg-white/20 blur-md transition-transform duration-[1400ms] group-hover:translate-x-[330px]" />

            <motion.span
              whileHover={{
                scale: 1.08,
                rotate: -7,
              }}
              transition={{
                duration: 0.2,
              }}
              className="relative z-10 flex"
            >
              <MessageCircle
                size={18}
                strokeWidth={1.9}
                className="text-[#d8a126]"
              />
            </motion.span>

            <span className="relative z-10 text-[#d8a126]">
              Fale conosco
            </span>
          </motion.a>

          {/* BOTÃO MENU MOBILE */}
          <motion.button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              borderColor: menuOpen
                ? "rgba(216,161,38,0.95)"
                : "rgba(184,137,34,1)",
              backgroundColor: menuOpen
                ? "rgba(216,161,38,0.08)"
                : "rgba(8,8,8,1)",
            }}
            transition={{
              duration: 0.3,
              delay: 0.15,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.92,
            }}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-[8px] border text-[#d8a126] shadow-[0_0_0_1px_rgba(184,137,34,0.14)] lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {menuOpen ? (
                <motion.span
                  key="close"
                  initial={{
                    opacity: 0,
                    rotate: -80,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: 80,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="absolute flex"
                >
                  <X size={23} strokeWidth={1.8} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{
                    opacity: 0,
                    rotate: 80,
                    scale: 0.7,
                  }}
                  animate={{
                    opacity: 1,
                    rotate: 0,
                    scale: 1,
                  }}
                  exit={{
                    opacity: 0,
                    rotate: -80,
                    scale: 0.7,
                  }}
                  transition={{
                    duration: 0.22,
                  }}
                  className="absolute flex"
                >
                  <Menu size={23} strokeWidth={1.8} />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          {/* LINHA INFERIOR */}
          <motion.div
            animate={{
              opacity: hasScrolled ? 0.75 : 0.4,
              scaleX: hasScrolled ? 1 : 0.75,
            }}
            transition={{
              duration: 0.35,
            }}
            className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-center bg-gradient-to-r from-transparent via-[#d8a126]/50 to-transparent"
          />
        </motion.div>
      </motion.header>

      {/* MENU MOBILE */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={mobileMenuContainer}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col overflow-y-auto bg-[#080b0c]/98 px-6 pb-10 pt-[115px] backdrop-blur-2xl lg:hidden"
          >
            <div className="pointer-events-none absolute right-[-140px] top-[30px] h-[350px] w-[350px] rounded-full bg-[#d8a126]/8 blur-[120px]" />

            <div className="pointer-events-none absolute bottom-[-130px] left-[-130px] h-[300px] w-[300px] rounded-full bg-[#d8a126]/5 blur-[120px]" />

            <motion.nav className="relative z-10 flex flex-col border-t border-[#b88922]/20">
              {menuItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  variants={mobileMenuItem}
                  href={item.href}
                  onClick={closeMenu}
                  whileTap={{
                    x: 5,
                  }}
                  className={`group flex items-center justify-between border-b border-white/10 py-5 text-base font-semibold uppercase tracking-[0.06em] transition-colors duration-300 ${
                    index === 0
                      ? "text-[#d8a126]"
                      : "text-white hover:text-[#d8a126]"
                  }`}
                >
                  <span>{item.label}</span>

                  <motion.span
                    initial={{
                      opacity: 0,
                      x: -8,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: 0.25 + index * 0.07,
                    }}
                    className="text-[16px] text-[#d8a126]/60 transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </motion.span>
                </motion.a>
              ))}
            </motion.nav>

            {/* BOTÃO MOBILE */}
            <motion.a
              variants={mobileMenuItem}
              href="https://wa.me/5512997411838"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
              whileHover={{
                y: -3,
                boxShadow: "0 20px 45px rgba(216,161,38,0.22)",
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="group relative z-10 mt-8 flex h-[54px] items-center justify-center gap-2.5 overflow-hidden rounded-[10px] border border-[#b88922] bg-[#080808] px-7 text-[13px] font-semibold uppercase tracking-[0.08em] text-[#d8a126] shadow-[0_0_0_1px_rgba(216,161,38,0.22),0_0_32px_rgba(216,161,38,0.12)]"
            >
              <span className="pointer-events-none absolute -left-24 top-0 h-full w-14 rotate-12 bg-white/20 blur-md transition-transform duration-[1400ms] group-hover:translate-x-[420px]" />

              <MessageCircle
                size={19}
                strokeWidth={1.9}
                className="relative z-10 text-[#d8a126]"
              />

              <span className="relative z-10 text-[#d8a126]">
                Fale conosco
              </span>
            </motion.a>

            <motion.p
              variants={mobileMenuItem}
              className="relative z-10 mt-auto pt-12 text-center text-[10px] uppercase tracking-[0.12em] text-white/25"
            >
              Imperial Instrumentos Musicais
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}