import { AnimatePresence, motion } from "framer-motion";
import { Download, Folder } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import TerminalWindow from "../components/terminal";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const techStack = [
  "React",
  "TypeScript",
  "Tailwind",
  "Python",
  "FastAPI",
  "PostgreSQL",
];

export default function Hero() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020617] px-6">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 -left-40 w-72 h-72 md:w-96 md:h-96 bg-[#38BDF8]/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 -right-40 w-72 h-72 md:w-96 md:h-96 bg-[#6366F1]/10 rounded-full blur-3xl animate-float delay-2000" />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* Headline */}
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
          className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-rounded tracking-tight leading-tight mb-6"
        >
          Oi, eu sou{" "}
          <span className="block sm:inline text-[#38BDF8] font-resolve">
            João Luis!
          </span>
          <span className="block mt-2 text-xl sm:text-2xl md:text-3xl text-slate-400 font-resolve tracking-wide">
            Desenvolvedor Web
          </span>
        </motion.h1>

        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-2xl mx-auto mb-10 text-slate-400 sm:text-lg md:text-xl font-rounded tracking-wider"
        >
          Crio experiências digitais modernas utilizando tecnologias atuais,
          transformando problemas complexos em soluções simples e eficientes.
        </motion.p>

        {/* Terminal Window */}
        <div className="mb-10">
          <TerminalWindow />
        </div>

        {/* Buttons */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Botão Principal */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="w-full sm:w-auto px-6 py-3 flex items-center justify-center rounded-lg bg-[#38BDF8] text-[#020617] font-bold font-resolve hover:opacity-90 transition shadow-lg shadow-[#38BDF8]/20"
          >
            <Folder className="w-5 h-5 mr-2" />
            Ver Projetos
          </motion.button>

          <div ref={menuRef} className="relative w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setOpen(!open)}
              className="w-full px-6 py-3 flex items-center justify-center rounded-lg border border-[#38BDF8]/40 text-[#38BDF8] hover:bg-[#38BDF8]/10 transition font-resolve"
            >
              <Download className="w-5 h-5 mr-2" />
              Baixar Currículo
            </motion.button>

            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="absolute mt-2 w-full rounded-lg bg-[#0F172A] border border-slate-800 overflow-hidden shadow-xl z-20"
                >
                  <a
                    href="/joaoluis_curriculo_fullstack.pdf"
                    download
                    className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition"
                  >
                    Baixar PDF
                  </a>
                  <a
                    href="/joaoluis_curriculo_fullstack.docx"
                    download
                    className="flex items-center gap-2 px-4 py-3 text-sm text-slate-300 hover:bg-[#38BDF8]/10 hover:text-[#38BDF8] transition"
                  >
                    Baixar DOC
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Stack Development */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-3 mt-14"
        >
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="px-4 py-2 text-xs sm:text-sm font-mono rounded-full bg-[#0F172A] text-[#38BDF8] border border-slate-800"
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
