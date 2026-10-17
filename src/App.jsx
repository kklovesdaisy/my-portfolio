import About from "./components/About";
import BackToTop from "./components/BackToTop";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Learning from "./components/Learning";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <a href="#main" className="skip-link">
        Skip to content
      </a>

      <Navbar />

      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Projects />
        <Learning />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}
