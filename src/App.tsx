import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import About from "./components/About";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="min-h-screen bg-primary text-textColor">
      <Header />
      <Toaster />
      <main>
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <About />
        <Contact />
      </main>
    </div>
  );
}

export default App;
