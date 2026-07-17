import { easeOut, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { FaGithub } from "react-icons/fa";
import cinezaImg from "../assets/img/cineza.png";
import deliverImg from "../assets/img/deliver-food.png";
import fortsaldados from "../assets/img/fortaldados.png";
import ufelina from "../assets/img/ufelina.png";

const projects = [
  {
    title: "ONG União Felina: Site Centralizado",
    description:
      "Site com informações sobre a ONG União Felina, incluindo trajetória, contato e futuramente notícias.",
    image: ufelina,
    tags: ["React.js", "TypeScript", "Tailwind", "Cooperação", "ONG"],
    github: "https://github.com/JohnLouisMaker/uniao-felina-website",
    live: "https://uniao-felina-website.vercel.app/",
    featured: true,
  },
  {
    title: "Python + FastAPI: Sistema de Pedidos",
    description:
      "API RESTful para gerenciamento de pedidos, construída com FastAPI, SQLAlchemy e autenticação via JWT.",
    image: deliverImg,
    tags: ["Python", "FastAPI", "SQLAlchemy", "JWT", "BCrypt"],
    github: "https://github.com/JohnLouisMaker/deliver-backend",
    live: "",
    featured: true,
  },
  {
    title: "FortalDados: ChatBot + LLM",
    description:
      "Chatbot inteligente que utiliza LLM langchain para fornecer respostas rápidas e precisas",
    image: fortsaldados,
    tags: ["React", "Python", "LangChain", "LLM", "ChatBot"],
    github: "https://github.com/JohnLouisMaker/fortal-dados",
    live: "https://fortal-dados.vercel.app",
    featured: true,
  },
  {
    title: "Cineza: Plataforma de filmes (TMDb)",
    description:
      "Plataforma de filmes consumindo dados da TMDb, com interface interativa e design moderno.",
    image: cinezaImg,
    tags: ["React", "Javascript", "Tailwind", "TMDb API"],
    github: "https://github.com/JohnLouisMaker/cineza",
    live: "https://cineza-beta.vercel.app/",
    featured: true,
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

const motionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true },
  variants: fadeInUp,
};

const cardBase =
  "bg-[#020617] border border-slate-800 hover:border-sky-500/50 transition-all h-full flex flex-col";

function getMaxIndex(width: number) {
  if (width >= 1024) return projects.length - 3;
  if (width >= 768) return projects.length - 2;
  return projects.length - 1;
}

function getItemsPerView(width: number) {
  if (width >= 1024) return 3;
  if (width >= 768) return 2;
  return 1;
}

function getGapOffset(width: number) {
  if (width >= 1024) return 16;
  if (width >= 768) return 12;
  return 0;
}

function ProjectLinks({ github, live }: { github: string; live: string }) {
  return (
    <div className="flex gap-4 pt-6 mt-auto">
      <a
        href={github}
        target="_blank"
        rel="noopener noreferrer"
        className="text-slate-400 hover:text-sky-400"
      >
        <FaGithub className="w-7 h-7" />
      </a>
      {live && (
        <a
          href={live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-sky-400"
        >
          <ExternalLink className="w-7 h-7" />
        </a>
      )}
    </div>
  );
}

function Tags({ tags }: { tags: string[] }) {
  return (
    <div className="flex flex-wrap gap-2 mb-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="text-xs font-mono px-3 py-1 rounded-full bg-slate-900 group-hover:text-sky-400 text-slate-400 border border-slate-800 ease-in-out duration-300"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth : 0,
  );

  useEffect(() => {
    const handleResize = () => setViewportWidth(window.innerWidth);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const maxIndex = getMaxIndex(viewportWidth);
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [currentIndex, viewportWidth]);

  const itemsPerView = getItemsPerView(viewportWidth);
  const gapOffset = getGapOffset(viewportWidth);
  const maxIndex = getMaxIndex(viewportWidth);
  const isPrevDisabled = currentIndex === 0;
  const isNextDisabled = currentIndex >= maxIndex;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? prev : prev + 1));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? 0 : prev - 1));
  };

  const carouselStyle = {
    ["--items-per-view" as string]: itemsPerView.toString(),
    ["--gap-offset" as string]: `${gapOffset}px`,
  } as React.CSSProperties;

  return (
    <section
      id="projects"
      className="py-24 bg-[#020617] text-slate-100 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <motion.div {...motionProps} viewport={{ once: true, amount: 0.3 }}>
          <h2 className="text-3xl md:text-4xl font-resolve text-center mb-4">
            Projetos em <span className="text-sky-400">Destaque</span>
          </h2>
          <p className="font-rounded tracking-wider text-slate-400 text-center max-w-2xl mx-auto mb-12">
            Alguns projetos que representam bem meu trabalho e evolução técnica
          </p>
        </motion.div>

        {/* Carrossel */}
        <div className="relative">
          <div className="overflow-hidden w-full py-4 px-1">
            <motion.div
              className="flex gap-6"
              animate={{
                x: `calc(-${currentIndex} * (100% / var(--items-per-view) + var(--gap-offset)))`,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              style={carouselStyle}
            >
              {projects.map((project, i) => (
                <div
                  key={project.title}
                  className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0"
                >
                  <motion.div
                    className={`group font-rimouski rounded-2xl overflow-hidden ${cardBase}`}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover saturate-0 brightness-90 group-hover:saturate-100 group-hover:brightness-100 group-hover:scale-110 transition-all duration-700"
                      />
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-sky-400">
                        {project.title}
                      </h3>

                      <p className="text-sm text-slate-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <Tags tags={project.tags} />

                      <ProjectLinks
                        github={project.github}
                        live={project.live}
                      />
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Botões de Navegação Flutuantes */}
          <div className="flex justify-center md:justify-between items-center gap-4 mt-8 md:absolute md:inset-x-0 md:top-1/2 md:-translate-y-1/2 md:mt-0 md:pointer-events-none">
            <button
              onClick={handlePrev}
              disabled={isPrevDisabled}
              className={`bg-slate-900 border border-slate-800 p-2.5 rounded-full transition-all md:pointer-events-auto md:-translate-x-14 ${
                isPrevDisabled
                  ? "text-slate-600 cursor-not-allowed opacity-40"
                  : "text-slate-400 hover:text-sky-400 hover:border-sky-500/40"
              }`}
              aria-label="Anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              disabled={isNextDisabled}
              className={`bg-slate-900 border border-slate-800 p-2.5 rounded-full transition-all md:pointer-events-auto md:translate-x-14 ${
                isNextDisabled
                  ? "text-slate-600 cursor-not-allowed opacity-40"
                  : "text-slate-400 hover:text-sky-400 hover:border-sky-500/40"
              }`}
              aria-label="Próximo"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Indicadores de bolinha (Dots) */}
        <div className="flex justify-center gap-1.5 mt-4">
          {projects.map((_, index) => {
            const maxDots =
              viewportWidth >= 1024
                ? projects.length - 2
                : viewportWidth >= 768
                  ? projects.length - 1
                  : projects.length;
            if (index >= maxDots) return null;

            return (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-6 bg-sky-400"
                    : "w-1.5 bg-slate-800 hover:bg-slate-600"
                }`}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
