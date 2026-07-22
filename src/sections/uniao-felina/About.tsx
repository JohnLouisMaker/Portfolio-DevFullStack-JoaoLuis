import { motion } from "framer-motion";
import { HeartHandshake, PawPrint, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: PawPrint,
    title: "Resgate e Cuidado",
    description:
      "Atuamos no resgate, acolhimento e atendimento veterinário de gatos em situação de rua.",
  },
  {
    icon: HeartHandshake,
    title: "Adoção Responsável",
    description:
      "Promovemos adoções seguras, exibindo cada animal com carinho e responsabilidade.",
  },
  {
    icon: Sparkles,
    title: "Conscientização",
    description:
      "Trabalhamos para educar a comunidade e fortalecer a proteção animal em Fortaleza.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <section id="about" className="py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-resolve">
            Sobre a <span className="text-sky-400">União Felina</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            A União Felina é uma iniciativa sem fins lucrativos dedicada a
            cuidar, proteger e encontrar novos lares para gatos em situação de
            vulnerabilidade.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Nossa missão é resgatar gatos abandonados ou em risco, oferecer
              cuidados veterinários e dar apoio para que eles encontrem novos
              lares cheios de amor.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Atuamos em Fortaleza com voluntários, parcerias locais e campanhas
              de conscientização que ajudam a reduzir o abandono e aumentar a
              adoção responsável.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Este site foi criado para apresentar o trabalho da ONG, facilitar
              o contato com apoiadores e aproximar pessoas dispostas a ajudar
              esses felinos a encontrarem um futuro melhor.
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
