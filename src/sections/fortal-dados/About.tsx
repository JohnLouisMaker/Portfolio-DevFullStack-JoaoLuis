import { motion } from "framer-motion";
import { Bot, Database, MapPin } from "lucide-react";

const highlights = [
  {
    icon: MapPin,
    title: "Mapa Interativo",
    description:
      "Visualização geoespacial com Leaflet e MapTiler, exibindo heatmap de lentidão e mais de 4.700 paradas de ônibus de Fortaleza.",
  },
  {
    icon: Bot,
    title: "IA Conversacional",
    description:
      "Chatbot integrado (Groq/Llama 3) que responde perguntas sobre mobilidade urbana e destaca bairros diretamente no mapa.",
  },
  {
    icon: Database,
    title: "Dados Públicos Reais",
    description:
      "Processamento de dados da ETUFOR/AMC com Python, Pandas e GeoPandas, cobrindo mais de 1 milhão de validações de bilhete.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="pt-45 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-resolve">
            Sobre o <span className="text-sky-400">FortalDados</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            Plataforma de análise de mobilidade urbana de Fortaleza-CE,
            combinando mapas interativos com inteligência artificial
            conversacional sobre dados públicos de transporte.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Projeto de portfólio full-stack desenvolvido com dados reais da
              ETUFOR e da AMC, processados em Python e visualizados em React,
              com um chatbot de IA integrado para explorar os dados de forma
              conversacional.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              É possível visualizar o projeto completo no GitHub ou explorar a
              demonstração ao vivo.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              O objetivo é tornar os dados de mobilidade urbana de Fortaleza
              mais acessíveis, cruzando paradas de ônibus, pontos de lentidão e
              validações de bilhete em uma experiência visual e interativa.
            </p>
          </motion.div>

          <div className="grid gap-4">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={fadeInUp}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-6 rounded-2xl bg-[#020617] border border-slate-800 hover:border-sky-500/50 transition-all"
              >
                <div className="p-3 rounded-xl bg-sky-500/10 text-sky-400">
                  <item.icon className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="mb-1 text-lg font-rimouski text-slate-100">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-rounded tracking-wider">
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
