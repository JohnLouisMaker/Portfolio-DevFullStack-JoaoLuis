import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TerminalWindow() {
  const experienceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!experienceRef.current) return;

    const typed = new Typed(experienceRef.current, {
      strings: [
        "Desenvolvedor Web Full Stack",
        "React + TypeScript • Python + FastAPI",
        "Estudante de ADS (Unifametro)",
        "Geração Tech Full Stack",
        "JWT, RBAC e Clean Code",
      ],
      typeSpeed: 40,
      backSpeed: 20,
      backDelay: 2000,
      loop: true,
      cursorChar: "",
    });

    return () => typed.destroy();
  }, []);

  return (
    <div className="w-full max-w-2xl mx-auto mt-12 group">
      {/* Background Deep Navy (#0F172A) com bordas em Sky Blue (#38BDF8) */}
      <div className="bg-[#0F172A]/80 backdrop-blur-md border border-[#38BDF8]/20 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 group-hover:border-[#38BDF8]/50 shadow-[#38BDF8]/5">
        <div className="bg-[#020617] px-4 py-3 flex items-center justify-between border-b border-[#38BDF8]/10">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FF3131]/20 group-hover:bg-[#FF3131] transition-all duration-300 shadow-[0_0_8px_rgba(255,49,49,0.5)]" />

            <div className="w-3 h-3 rounded-full bg-[#FFBD44]/20 group-hover:bg-[#FFBD44] transition-all duration-300 shadow-[0_0_8px_rgba(255,189,68,0.5)]" />

            <div className="w-3 h-3 rounded-full bg-[#00FF41]/20 group-hover:bg-[#00FF41] transition-all duration-300 shadow-[0_0_8px_rgba(0,255,65,0.5)]" />
          </div>
          <div className="text-[10px] uppercase tracking-[0.2em] text-[#38BDF8]/50 font-mono">
            bash — 80x24
          </div>
        </div>

        <div className="p-6 font-mono text-sm md:text-base leading-relaxed bg-black">
          <div className="flex items-start gap-2">
            <span className="text-[#38BDF8]">➜</span>
            <span className="text-[#6366F1]">~/dev</span>
            <span className="text-slate-500">
              git:(<span className="text-[#38BDF8]">main</span>)
            </span>
          </div>

          <div className="mt-3 flex gap-2">
            <span className="text-[#38BDF8] select-none">$</span>
            <span ref={experienceRef} className="text-white" />
            <span className="text-[#38BDF8] animate-pulse font-bold">_</span>
          </div>
        </div>
      </div>

      {/* Glow inferior seguindo o degradê Electric Cyber */}
      <div className="h-1 bg-linear-to-r from-transparent via-[#38BDF8]/30 to-transparent mx-auto mt-2 rounded-full max-w-[200px] blur-sm" />
    </div>
  );
}
