import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import About from "../sections/cineza/About";
import Pictures from "../sections/cineza/Pictures";
import Stack from "../sections/cineza/Stack";

export default function Cineza() {
  return (
    <div className="relative isolate overflow-hidden bg-[#020617]">
      <div
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background:
            "linear-gradient(to bottom, #000415 0%, #020813 20%, #000d2a 35%, #010917 50%, #020824 65%, #01040c 75%, #03060e 85%, #000000 95%, #000000 100%)",
        }}
      />

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-40 top-[10%] w-72 h-72 md:w-96 md:h-96 bg-[#38BDF8]/10 rounded-full blur-3xl" />
        <div className="absolute -right-40 top-[28%] w-72 h-72 md:w-96 md:h-96 bg-[#6366F1]/10 rounded-full blur-3xl" />
        <div className="absolute -left-32 top-[48%] w-64 h-64 md:w-80 md:h-80 bg-[#38BDF8]/10 rounded-full blur-3xl" />
        <div className="absolute -right-32 top-[66%] w-64 h-64 md:w-80 md:h-80 bg-[#6366F1]/10 rounded-full blur-3xl" />
        <div className="absolute -left-24 top-[86%] w-72 h-72 md:w-96 md:h-96 bg-[#38BDF8]/10 rounded-full blur-3xl" />
      </div>

      <Navbar
        links={[
          { name: "Sobre", href: "#about" },
          { name: "Galeria", href: "#gallery" },
          { name: "Stack E Showroom", href: "#stack" },
        ]}
      />

      <main className="relative">
        <About />
        <Pictures />
        <Stack />
      </main>

      <Footer />
    </div>
  );
}
