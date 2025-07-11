import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true,     // only animate once
      offset: 100,    // offset (in px) before animation triggers
    });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
