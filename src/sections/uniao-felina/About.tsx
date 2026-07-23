import { motion } from "framer-motion";
import { HeartHandshake, PawPrint, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: PawPrint,
    title: "Resgate e Cuidado",
    description:
      "Missão principal da União Felina é resgatar animais abandonados e proporcionar um lar seguro, carinho e tratamento adequado.",
  },
  {
    icon: HeartHandshake,
    title: "Adoção Responsável",
    description:
      "Trabalhamos para promover a adoção consciente, realizando triagem, acompanhamento e orientação aos adotantes.",
  },
  {
    icon: Sparkles,
    title: "Conscientização",
    description:
      "Buscamos sensibilizar a sociedade sobre a importância da causa animal e da guarda responsável.",
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
            Sobre a <span className="text-sky-400">União Felina</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            Centralização de informações e recursos para ajudar os animais
            abandonados da União Felina. Rascunho de um projeto de conclusão de
            curso.
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
              Desenvolvido em parceria com colegas da Unifametro, participei
              ativamente da criação do layout e do frontend deste projeto. Foi
              um dos meus primeiros trabalhos completos e representou um grande
              aprendizado em design, usabilidade e desenvolvimento front-end.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              É possível visualizar o projeto completo no GitHub ou no meu
              Showroom.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              Este site foi criado com o propósito de transmitir a essência do
              trabalho da União Felina: a responsabilidade, a dedicação e a
              crença de que pequenos gestos podem transformar vidas.
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
