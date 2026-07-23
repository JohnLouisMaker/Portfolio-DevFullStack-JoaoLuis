import { motion } from "framer-motion";
import { ArrowUpRight, Github, Rocket, Server, Database, KeyRound } from "lucide-react";

const stack = [
  {
    title: "React + Vite",
    description: "Frontend SPA reativo, rápido e fortemente tipado para a gestão dos pedidos.",
    icon: Rocket,
  },
  {
    title: "FastAPI",
    description: "Framework Python assíncrono para construção de APIs REST de alta performance.",
    icon: Server,
  },
  {
    title: "PostgreSQL + SQLAlchemy",
    description: "Modelagem relacional de usuários e pedidos com suporte a migrações via Alembic.",
    icon: Database,
  },
  {
    title: "JWT & Bcrypt Security",
    description: "Autenticação via Access/Refresh Tokens e criptografia segura de senhas com Passlib.",
    icon: KeyRound,
  },
];

export default function Stack() {
  return (
    <section id="techs" className="py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-resolve">
            Stack E <span className="text-sky-400">Showroom</span>
          </h2>
          <p className="max-w-2xl mx-auto text-slate-400 font-rounded tracking-wider">
            O ecossistema do projeto é baseado em um backend em Python para regras de negócio e persistência,
            conectado a um frontend React focado na usabilidade do cliente.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
          <div className="grid sm:grid-cols-2 gap-4">
            {stack.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="rounded-2xl border border-slate-800 bg-[#020617]/80 p-6"
                >
                  <div className="mb-4 inline-flex rounded-xl bg-sky-500/10 p-3 text-sky-400">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-rimouski text-slate-100 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 font-rounded tracking-wider leading-7">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            id="showroom"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl pb-21 border border-slate-800 bg-linear-to-br from-slate-900 via-[#020617] to-slate-950 p-8"
          >
            <p className="text-sm uppercase tracking-[0.35em] text-sky-400 mb-3">
              Sala De Apresentação
            </p>
            <h3 className="text-2xl font-rimouski text-slate-100 mb-4">
              Projeto aberto para consulta, arquitetura e evolução
            </h3>
            <p className="text-slate-400 font-rounded tracking-wider leading-8 mb-6">
              O repositório do backend engloba as rotas de autenticação, schemas do Pydantic e
              migrações do Alembic, integrado à aplicação frontend em React.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://github.com/JohnLouisMaker/deliver-backend"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sm text-sky-300 transition hover:bg-sky-500/20"
              >
                <Github className="w-4 h-4" />
                GitHub Backend
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/JohnLouisMaker"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 transition hover:border-sky-500/40 hover:text-sky-300"
              >
                GitHub Frontend
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}