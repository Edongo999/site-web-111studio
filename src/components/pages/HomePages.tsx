import React from "react";
import Hero from "@/components/section/hero/Hero";
import About from "@/components/section/about/About";
import Skills from "@/components/section/services/ServicesPreview";
import Projects from "@/components/section/projects/ProjectsPreview";
import Experience from "@/components/section/Collaboration/collaboration";

import Temoignages from "../section/temoignages/temoignages";

const Home = () => {
  return (
    <div>
      <section id="hero">
        <Hero />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="experience">
        <Experience />
      </section>
      <Temoignages />
    </div>
  );
};

export default Home;
