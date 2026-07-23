import { motion } from "framer-motion";
import { Film, Search, Clapperboard } from "lucide-react";

const highlights = [
  {
    icon: Search,
    title: "Busca em Tempo Real",
    description:
      "Consumo direto da API pública do TMDB para pesquisar qualquer filme instantaneamente por título.",
  },
  {
    icon: Film,
    title: "Catálogo Completo",
    description:
      "Acesso a dados detalhados como poster em alta resolução, título original, nota de avaliação e sinopse.",
  },
  {
    icon: Clapperboard,
    title: "Interface Moderna",
    description:
      "Experiência fluida e responsiva desenvolvida em React + Vite, focada em simplicidade e performance.",
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
            Sobre o <span className="text-sky-400">Cineza</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            Aplicação web para busca e exploração de filmes em tempo real,
            integrada diretamente à API pública do TMDB (The Movie Database).
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
              Projeto de portfólio front-end desenvolvido com React e Vite, que
              consome a API do TMDB para trazer informações atualizadas do
              cinema mundial.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              É possível visualizar o repositório completo no GitHub ou testar a
              demonstração ao vivo implantada na Vercel.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              O objetivo do Cineza é oferecer uma busca rápida e minimalista,
              exibindo detalhes visuais e notas de avaliação de forma limpa.
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