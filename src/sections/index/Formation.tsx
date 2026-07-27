import { AnimatePresence, easeOut, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const education = [
  {
    degree: "Análise e Desenvolvimento de Sistemas",
    institution: "Centro Universitário FAMETRO - Unifametro",
    period: "Fev 2025 - Jun 2027 (3º Semestre - em andamento)",
  },
];

const qualifications = [
  {
    course: "Introdução à Cibersegurança",
    institution: "Cisco Networking Academy",
    completed: "Dezembro 2025",
  },
  {
    course: "Curso Básico de Redes",
    institution: "Cisco Networking Academy (Parceria Unifametro)",
    completed: "Outubro 2025",
  },
  {
    course: "Desenvolvimento Web Full-Stack - 2.0",
    institution: "IEL Ceará / Digital College - Geração Tech",
    completed: "Junho 2025",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export default function Formation() {
  const [isOpenEdu, setIsOpenEdu] = useState(false);
  const [isOpenQual, setIsOpenQual] = useState(false);

  return (
    <section id="formation" className="py-24 md:py-28 text-slate-100">
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Formação Acadêmica &{" "}
            <span className="text-sky-400">Qualificações</span>
          </h2>
        </motion.div>

        {/* Container Centralizado com a mesma largura do Experience */}
        <div className="mt-10 max-w-3xl mx-auto space-y-6">
          {/* Formação Acadêmica */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.1 }}
            className="px-8 pt-6 pb-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/25 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-sky-400 font-resolve">
                  Formação Acadêmica
                </h3>
              </div>

              <button
                onClick={() => setIsOpenEdu(!isOpenEdu)}
                className="text-sky-400 hover:text-sky-300 transition-colors p-1"
                aria-label="Expandir detalhes"
              >
                <ChevronDown
                  className={`${
                    isOpenEdu ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpenEdu && (
                <motion.div
                  key="content-edu"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-slate-800/80">
                    <ul className="space-y-6 text-slate-200 font-resolve">
                      {education.map((edu) => (
                        <li key={edu.degree} className="flex flex-col">
                          <span className="font-semibold text-sky-400">
                            {edu.degree}
                          </span>
                          <span className="text-sm text-slate-400 mt-1">
                            {edu.institution}
                          </span>
                          <span className="text-sm text-slate-500 italic mt-0.5">
                            {edu.period}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Qualificações */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="px-8 pt-6 pb-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/25 transition-all duration-300 shadow-xl"
          >
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold text-sky-400 font-resolve">
                  Qualificações
                </h3>
              </div>

              <button
                onClick={() => setIsOpenQual(!isOpenQual)}
                className="text-sky-400 hover:text-sky-300 transition-colors p-1"
                aria-label="Expandir detalhes"
              >
                <ChevronDown
                  className={`${
                    isOpenQual ? "rotate-180" : "rotate-0"
                  } transition-transform duration-300`}
                />
              </button>
            </div>

            <AnimatePresence initial={false}>
              {isOpenQual && (
                <motion.div
                  key="content-qual"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="mt-6 pt-6 border-t border-slate-800/80">
                    <ul className="space-y-5 text-slate-200 font-resolve">
                      {qualifications.map((q) => (
                        <li key={q.course} className="flex flex-col">
                          <span className="font-semibold text-sky-400">
                            {q.course}
                          </span>
                          <span className="text-sm text-slate-400 mt-1">
                            {q.institution}
                          </span>
                          <span className="text-sm text-slate-500 italic mt-0.5">
                            Concluído em {q.completed}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}