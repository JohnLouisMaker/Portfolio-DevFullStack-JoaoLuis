import { motion } from "framer-motion";
import { Camera } from "lucide-react";
import mapaFortaleza from "../../assets/img/fortaldados.png";

const galleryItems = [
  {
    title: "Foto 01",
    image: mapaFortaleza,
  },
  {
    title: "Foto 02",
    image: mapaFortaleza,
  },
  {
    title: "Foto 03",
    image:  mapaFortaleza,
  },
];

export default function Pictures() {
  return (
    <section id="gallery" className="py-24 text-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Cabeçalho da Seção */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl mb-4 font-resolve">
            Galeria <span className="text-sky-400">Visual</span>
          </h2>
        </motion.div>

        {/* Grid de Imagens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {galleryItems.map((item, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.01 }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-800 bg-[#020617]/80 backdrop-blur"
            >
              <div className="py-6 md:aspect-4/3 overflow-hidden bg-slate-900 ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 flex items-center gap-3">
                <Camera className="w-5 h-5 text-sky-400 shrink-0" />
                <h3 className="group-hover:text-sky-400 text-xl font-rimouski text-slate-100 ">
                  {item.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}