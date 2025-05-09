import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Experience from "@/pages/Experience";
import Header from "@/pages/Header";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import Skills from "@/pages/Skills";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <div className="bg-primary text-textColor w-screen h-screen">
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
