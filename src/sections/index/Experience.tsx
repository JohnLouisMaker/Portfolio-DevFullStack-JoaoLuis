import { AnimatePresence, easeOut, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const xp = [
  {
    title: "Estagiário de T.I - Suporte Técnico",
    company: "Secran Group",
    date: "Maio 2026 - Atual",
    highlights: [
      "Elaboro e analiso relatórios gerenciais com dados extraídos, tratados e organizados de forma estratégica via Python, Pandas e Plotly, apoiando tomadas de decisão futuras.",
      "Presto suporte técnico e manutenção de equipamentos de informática, realizando diagnósticos precisos e efetuando a correção de falhas em computadores e periféricos para garantir a rápida resolução de incidentes.",
      "Realizo formatação, configuração e preparação completa de máquinas para uso corporativo, assegurando total conformidade com os padrões da empresa.",
      "Instalo, configuro e mantenho atualizados os principais softwares corporativos da empresa, com expertise nos sistemas Fortes e Domínio.",
      "Atendo usuários de forma proativa, prestando suporte técnico de excelência e oferecendo orientação clara na utilização de sistemas e equipamentos, contribuindo para maior autonomia e produtividade das equipes.",
    ],
    tags: [
      "Python",
      "Pandas",
      "Manuntenção De PC/Notebooks",
      "Instalação De Softwares",
      "Windows",
      "Fortes",
      "Domínio",
    ],
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

export default function Experience() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <section id="experience" className="py-24 md:py-28 text-slate-100">
      <div className="max-w-4xl lg:max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Experiência <span className="text-sky-400">Profissional</span>
          </h2>
        </motion.div>

        {/* Experiência Profissional */}
        <div className="mt-10 max-w-3xl mx-auto">
          {xp.map((job, idx) => (
            <motion.div
              key={job.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ delay: idx * 0.1 }}
              className="px-8 pt-6 md:pb-4 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/20 transition-all duration-300"
            >
              {/* Cargo */}
              <div className="mb-6 flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-sky-400 font-resolve">
                    {job.title}
                  </h3>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 text-sm font-rounded tracking-wider text-slate-400">
                    <span>{job.company}</span>
                    <span className="hidden sm:inline text-slate-600">|</span>
                    <span className="text-slate-500 italic">{job.date}</span>
                  </div>
                </div>

                <button
                  onClick={toggleAccordion}
                  className="text-sky-400 hover:text-sky-500 transition-colors p-1"
                  aria-label="Expandir detalhes"
                >
                  <ChevronDown
                    className={`${
                      isOpen ? "rotate-180" : "rotate-0"
                    } transition-transform duration-300`}
                  />
                </button>
              </div>

              {/* Atividades */}

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-3 font-rounded">
                      Principais Atividades
                    </h4>
                    <ul className="space-y-3 font-resolve text-slate-300 text-sm md:text-base list-disc list-inside pl-1">
                      {job.highlights.map((item, index) => (
                        <li
                          key={index}
                          className="leading-relaxed text-slate-400"
                        >
                          <span className="text-slate-300 inline-inline">
                            {item}
                          </span>
                        </li>
                      ))}
                      {job.tags.map((tag, index) => (
                        <li
                          key={index}
                          className="inline-block bg-sky-500/20 text-sky-400 px-2 py-1 rounded-full font-mono mr-2 mb-2"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
