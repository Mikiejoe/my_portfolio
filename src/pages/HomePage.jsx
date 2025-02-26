import React from "react";
import About from "../components/Homepage/About";
import Skills from "../components/Homepage/Skills";
import Projects from "../components/Homepage/Projects";
import Navbar from "../components/common/Navbar";
import Contact from "../components/Homepage/Contact";
import Footer from "../components/common/Footer";

function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default HomePage;
