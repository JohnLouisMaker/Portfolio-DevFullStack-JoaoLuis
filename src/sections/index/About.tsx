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
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description:
      "Mentalidade colaborativa, excelente comunicação e foco em boas práticas de arquitetura, usabilidade e entregas de impacto.",
  },
];

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
            Desenvolvedor Full Stack focado na criação de APIs RESTful de alta
            performance, soluções em dados e interfaces modernas
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6 text-slate-300 font-resolve tracking-wider leading-relaxed"
          >
            <p className="text-lg">
              Sou{" "}
              <span className="font-semibold text-slate-100">
                Desenvolvedor Full Stack e de Software
              </span>{" "}
              em formação. Atualmente atuo como{" "}
              <span className="font-semibold text-slate-100">
                Estagiário de TI no Secran Group
              </span>
              , onde apliquei{" "}
              <span className="text-sky-400 font-medium">Python e Pandas</span>{" "}
              no tratamento, organização e análise estratégica de dados
              gerenciais para apoio à tomada de decisões em ativos de
              equipamentos, além da vivência em suporte técnico e resolução de
              incidentes em ambiente corporativo.
            </p>

            <p className="text-lg">
              Estou no{" "}
              <span className="font-semibold text-slate-100">4º semestre</span>{" "}
              de{" "}
              <span className="font-semibold text-slate-100">
                Análise e Desenvolvimento de Sistemas (Unifametro)
              </span>{" "}
              e sou formado em Desenvolvimento Web Full Stack pelo programa{" "}
              <span className="font-semibold text-slate-100">
                Geração Tech (IEL Ceará / Digital College)
              </span>
              . Desenvolvo sistemas robustos combinando{" "}
              <span className="text-sky-400 font-medium">
                Python (FastAPI, SQLAlchemy, JWT, Pandas)
              </span>{" "}
              e PostgreSQL no backend com{" "}
              <span className="text-sky-400 font-medium">
                React.js, TypeScript e Tailwind CSS
              </span>{" "}
              no frontend.
            </p>

            <p className="text-lg">
              No meu portfólio de projetos, destaco o{" "}
              <span className="font-semibold text-slate-100">FortalDados</span>{" "}
              (mobilidade urbana com Leaflet, GeoPandas e IA com Groq + Llama
              3.1), o{" "}
              <span className="font-semibold text-slate-100">Deliver</span> (API
              FastAPI, autenticação JWT, RBAC, React + Zustand) e a plataforma
              da{" "}
              <span className="font-semibold text-slate-100">
                ONG União Felina
              </span>
              , consolidando boas práticas de arquitetura, usabilidade e impacto
              real.
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
