import { AnimatePresence, easeOut, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import JoaoLuisDev from "../assets/img/joao-luis-dev-banner.png";

interface NavLink {
  name: string;
  href: string;
}

interface ResumeProps {
  label: string;
  href: string;
}

interface NavbarProps {
  links: NavLink[];
  resume?: ResumeProps[];
}

const fadeInUp = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeOut },
  },
};

export default function Navbar({ links, resume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScroll, setLastScroll] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  const handleNavLinkClick = () => {
    setIsNavigating(true);
    setIsVisible(true);
    setTimeout(() => {
      setIsNavigating(false);
    }, 2000);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const tolerance = 21;

      if (isNavigating) return;

      if (currentScroll <= 50) {
        setIsVisible(true);
        setIsScrolled(false);
        setLastScroll(currentScroll);
        return;
      }

      setIsScrolled(true);

      if (currentScroll > lastScroll + tolerance) {
        setIsVisible(false);
      }
      if (currentScroll < lastScroll - tolerance) {
        setIsVisible(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll, isNavigating]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        resumeRef.current &&
        !resumeRef.current.contains(event.target as Node)
      ) {
        setIsResumeOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.4, ease: easeOut }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${
          isScrolled
            ? "py-1 bg-gray-950/70 backdrop-blur-xl border-b border-slate-800"
            : "py-6 bg-transparent"
        }
      `}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <Link to="/" className="flex items-center">
          <motion.img
            src={JoaoLuisDev}
            alt="João Luís Dev Logo"
            whileHover={{ scale: 1.05 }}
            className="h-14 md:h-16 w-auto object-contain cursor-pointer transition-transform translate-y-1.5"
          />
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {links.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
                transition={{ delay: index * 0.1 }}
                onClick={handleNavLinkClick}
                className="
                  group relative text-xs uppercase tracking-widest
                  text-white hover:text-sky-400 transition-colors
                "
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-sky-500 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          {resume && (
            <div
              ref={resumeRef}
              className="relative pl-6 border-l border-slate-800"
            >
              <button
                onClick={() => setIsResumeOpen(!isResumeOpen)}
                className="
                  flex items-center gap-2
                  px-5 py-2 rounded-md
                  border border-sky-500/40
                  text-sky-400 text-xs
                  hover:bg-sky-500/10
                  transition-all tracking-widest
                "
              >
                Currículo
                <ChevronDown size={14} />
              </button>

              <AnimatePresence>
                {isResumeOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    className="
                      absolute right-0 mt-2 w-40
                      bg-black border border-slate-800
                      rounded-md shadow-xl overflow-hidden
                    "
                  >
                    {resume.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        download
                        className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800"
                      >
                        {item.label}
                      </a>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="
              p-2 rounded-lg text-sky-400
              bg-slate-900 border border-slate-800
            "
          >
            {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-b border-slate-800"
          >
            <div className="flex flex-col items-center gap-6 p-8">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleNavLinkClick();
                  }}
                  className="text-sm uppercase tracking-widest text-slate-400 hover:text-sky-400"
                >
                  {link.name}
                </a>
              ))}

              {/* Currículo Mobile */}
              {resume && (
                <div className="w-full flex flex-col items-center gap-2">
                  <button
                    onClick={() => setIsResumeOpen(!isResumeOpen)}
                    className="
                      w-full max-w-xs
                      flex items-center justify-center gap-2
                      px-5 py-2 rounded-md
                      border border-sky-500/40
                      text-sky-400 text-sm
                      hover:bg-sky-500/10
                      transition-all tracking-widest
                    "
                  >
                    Currículo
                    <ChevronDown size={14} />
                  </button>

                  <AnimatePresence>
                    {isResumeOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        className="
                          w-full max-w-xs
                          bg-black border border-slate-800
                          rounded-md shadow-xl overflow-hidden
                        "
                      >
                        {resume.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            download
                            className="block px-4 py-3 text-xs text-slate-300 hover:bg-slate-800 text-center"
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
