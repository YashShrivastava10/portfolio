// "use client";

import About from "@/components/About";
import Contact from "@/components/Conatact/Contact";
import Experience from "@/components/Experience/Experience";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import React from "react";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div className="w-screen h-screen bg-primary text-textColor">
      <Header />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: { minWidth: "fit-content" },
        }}
      />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
