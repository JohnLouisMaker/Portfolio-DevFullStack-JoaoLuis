import { motion } from "framer-motion";
import { ShieldCheck, ShoppingBag, Database } from "lucide-react";

const highlights = [
  {
    icon: ShieldCheck,
    title: "Autenticação Segura JWT",
    description:
      "Fluxo robusto com Access Token e Refresh Token, além de controle de acesso granular entre Administradores e Clientes.",
  },
  {
    icon: ShoppingBag,
    title: "Gestão do Ciclo de Pedidos",
    description:
      "Criação, adição e remoção de itens, cálculo dinâmico de preços e transição de status (Pendente, Finalizado, Cancelado).",
  },
  {
    icon: Database,
    title: "Persistência & Migrações",
    description:
      "Modelagem com SQLAlchemy e PostgreSQL em conjunto com Alembic para versionamento e migração contínua do banco.",
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
            Sobre o <span className="text-sky-400">Deliver</span>
          </h2>
          <p className="max-w-2xl mx-auto mb-16 text-center text-slate-400 font-rounded tracking-wider">
            Plataforma full-stack de gerenciamento de pedidos e autenticação em tempo real,
            unindo uma API robusta em FastAPI a uma interface moderna em React + Vite.
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
              Projeto de portfólio full-stack desenvolvido com Python (FastAPI, SQLAlchemy)
              no backend e React com Vite no frontend, garantindo alta performance e segurança.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              É possível consultar o código fonte no GitHub tanto da API quanto do painel
              web interativo.
            </p>

            <p className="text-lg text-slate-400 font-rounded tracking-wider">
              O objetivo do sistema é simplificar o fluxo de checkout e controle de estoque/pedidos,
              oferecendo isolamento de dados por perfil de usuário e uma experiência fluida no client.
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