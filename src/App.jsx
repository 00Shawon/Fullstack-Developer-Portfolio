import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Services from "./components/Services";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import About from "./components/About";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="bg-bg text-txt font-display min-h-screen">
      <Cursor />
      <Navbar />
      <Hero />
      <MarqueeStrip />
      <Services />
      <Skills />
      <Projects />
      <About />
      {/* <Testimonials /> */}
      <Contact />
      <Footer />
    </div>
  );
}
