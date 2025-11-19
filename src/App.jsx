import React from "react";
import Navbar from "./components/NavBar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Tools from "./components/Tools";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Footer from "./components/Footer";
import Contact from "./components/Contact";


export default function App() {
  return (
    <>
      <Navbar />
      <main className="main">
        <Hero />
        <Services />
        <Tools />
        <Projects />
        <Experience />
        <Testimonials />
        <FAQ />
        <Contact/>
      </main>
      <Footer />
    </>
  );
}
