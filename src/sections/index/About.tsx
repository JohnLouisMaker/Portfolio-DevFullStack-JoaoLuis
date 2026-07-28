import { motion } from "framer-motion";
import { Code2, Cpu, Lightbulb, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "APIs & Interfaces Limpas",
    description:
      "Construção de APIs RESTful performáticas com FastAPI/Python e interfaces reativas, tipadas e modernas com React + TypeScript.",
  },
  {
    icon: Cpu,
    title: "Análise & Dados",
    description:
      "Experiência prática na extração, tratamento e análise de dados (Pandas/GeoPandas) para suporte a decisões estratégicas.",
  },
  {
    icon: Lightbulb,
    title: "Resolução de Problemas",
    description:
      "Capacidade analítica aprimorada no suporte de TI combinada com engenharia de software para transformar desafios complexos em código limpo.",
  }
]

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 md:py-28 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-resolve">
            Sobre <span className="text-sky-400">Mim</span>
          </h2>

          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-resolve tracking-wider">
            Desenvolvedor Full Stack focado na criação de APIs RESTful, soluções em dados e interfaces modernas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-slate-300 font-resolve tracking-wider leading-relaxed text-lg"
          >
            <p>
              Sou Desenvolvedor Full Stack em formação e atuo como  <span className="text-sky-400">Estagiário de TI no Secran Group</span>, aplicando Python e Pandas na análise estratégica de dados gerenciais e no suporte corporativo.
            </p>

            <p>
              Curso o 4º semestre de ADS na Unifametro e sou formado pelo programa Geração Tech (IEL / Digital College). Desenvolvo aplicações usando <span className="text-sky-400">FastAPI, Python e PostgreSQL</span> no backend, combinados a <span className="text-sky-400">React, TypeScript e Tailwind</span> no frontend.
            </p>

            <p>
              Entre meus principais projetos estão o FortalDados (mobilidade urbana e IA), o Deliver (API RESTful e React) e a plataforma da ONG União Felina.
            </p>
          </motion.div>

          {/* Cards */}
          <div className="flex flex-col gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ x: 8 }}
                className="flex items-start gap-4 p-5 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/50 transition-all shadow-sm"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400 shrink-0">
                  <item.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-resolve text-slate-100 font-medium">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-resolve tracking-wider leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}