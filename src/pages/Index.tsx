import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";
import Formation from "../sections/Formation";
import Experience from "../sections/Experience";

const Index = () => {
  return (

    <div>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Formation/>
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;